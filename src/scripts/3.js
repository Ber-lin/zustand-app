import { readFileSync, writeFileSync } from "fs";

// 定义一个函数，用于生成 TypeScript 类型定义
function generateTsCode(obj, typeName) {
  // 初始化 TypeScript 类型定义字符串
  let tsCode = `interface ${typeName} {\n`;

  // 定义一个处理属性值的函数
  function processValue(value, key, indent) {
    if (Array.isArray(value)) {
      // 如果属性是数组，定义联合类型数组
      tsCode += `${indent}${key}: (`;
      for (const item of value) {
        const type =
          typeof item === "number"
            ? "number"
            : typeof item === "string"
            ? "string"
            : typeof item === "boolean"
            ? "boolean"
            : "any";
        tsCode += `${type} | `;
      }
      tsCode = tsCode.slice(0, -2); // 移除最后的 " | "
      tsCode += `)[];\n`;
    } else if (typeof value === "object" && !Array.isArray(value)) {
      // 如果属性是嵌套对象，递归处理
      tsCode += `${indent}${key}: {\n`;
      processObject(value, `${indent}  `);
      tsCode += `${indent}};\n`;
    } else {
      // 否则，直接生成属性
      const type =
        typeof value === "number"
          ? "number"
          : typeof value === "string"
          ? "string"
          : typeof value === "boolean"
          ? "boolean"
          : "any";
      tsCode += `${indent}${key}: ${type};\n`;
    }
  }

  // 定义一个处理对象的函数
  function processObject(obj, indent) {
    for (const key in obj) {
      const value = obj[key];
      processValue(value, key, indent);
    }
  }

  // 调用处理对象的函数，从根对象开始生成类型定义
  processObject(obj, "  ");

  // 完成 TypeScript 类型定义字符串
  tsCode += `}\n`;

  return tsCode;
}

// 读取包含混合类型数组的 JSON 数据的文件
const jsonCode = readFileSync("input.json", "utf-8");

// 将 JSON 代码解析为 JavaScript 对象
const jsonObj = JSON.parse(jsonCode);

// 定义 TypeScript 类型的名称
const typeName = "MyType";

// 调用生成 TypeScript 类型定义的函数
const tsTypeCode = generateTsCode(jsonObj, typeName);

// 将生成的 TypeScript 类型代码写入文件
writeFileSync("output.ts", tsTypeCode, "utf-8");

// 输出转换完成的信息
console.log("JSON 转换为 TypeScript 类型完成！");
