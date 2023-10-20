import { readFileSync, writeFileSync } from "fs";

/**
 * @param {object} jsonObj 
 * @param {string} targetName 
 * @returns {string}
 * @description 将对象转换成ts接口
 */
function generateTsCode(jsonObj, targetName) {
  let tsCode = `interface ${targetName} {\n`;

  /**
   * @param {*} value
   * @description 声明类型
   * @returns {string}
   */
  function typeTransfer(value) {
    switch (typeof value) {
      case "number":
        return "number";
      case "string":
        return "string";
      case "boolean":
        return "boolean";
      default:
        return "any";
    }
  }

  function processValue(value, key, indent) {
    // 联合类型数组中，元素类型相同最终表现为type[]而不是(type|type)[]
    if (Array.isArray(value)) {
      tsCode += `${indent}${key}: (`;
      value.forEach((item) => {
        tsCode += `${typeTransfer(item)} | `;
      });
      tsCode = tsCode.slice(0, -2);
      tsCode += ")[];\n";
    } else if (typeof value === "object" && !Array.isArray(value)) {
      // 对象需要递归写类型
      tsCode += `${indent}${key}: {\n`;
      processObj(value, `${indent}  `);
      tsCode += `${indent}};\n`;
    } else {
      // 不是以上，直接转化类型
      tsCode += `${indent}${key}: ${typeTransfer(value)};\n`;
    }
  }
  //   遍历对象写类型
  function processObj(obj, indent) {
    for (const key in obj) {
      processValue(obj[key], key, indent);
    }
  }
  processObj(jsonObj, "  ");
  tsCode += "}\n";
  return tsCode;
}

// 读写操作可以弄个高阶函数包一层🙄
let readData = readFileSync("input.json", "utf-8");
let jsonObj = JSON.parse(readData);

const tsTypeCode = generateTsCode(jsonObj, "MyType");

writeFileSync("output.ts", tsTypeCode, "utf-8");
console.log("JSON 转换为 TypeScript 类型完成！");
