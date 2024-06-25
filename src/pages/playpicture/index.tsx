import { Slider } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import "./index.less";
import src from "../../assets/头像2.jpg";
import { useParams } from "../../store/bear";

interface IconSliderProps {
  param: string;
  initValue?: number;
  setStyle: (value: number) => void;
}
function PlayPicture() {
  const { params, updateParams } = useParams();

  const styles = useMemo(() => {
    let styles = { width: "200px", height: "200px" };
    for (const [param, value] of Object.entries(params)) {
      if (Object.prototype.toString.call(value) === "[object Object]") {
        let str = "";
        for (const [subParam, subValue] of Object.entries(value)) {
          str += `${subParam}${subValue} `;
        }
        styles = { ...styles, [param]: str };
        break;
      }
      styles = { ...styles, [param]: value };
    }
    return styles;
  }, [params]);

  return (
    <div className="container">
      <div className="panel">
        <IconSlider
          initValue={100}
          setStyle={(value: number) =>
            updateParams("filter", "contrast", `(${value}%)`)
          }
          param="对比度"
        />
        <IconSlider
          initValue={0}
          setStyle={(value: number) =>
            updateParams("filter", "grayscale", `(${value}%)`)
          }
          param="灰度滤镜"
        />
        <IconSlider
          initValue={100}
          setStyle={(value: number) =>
            updateParams("filter", "saturate", `(${value}%)`)
          }
          param="饱和度"
        />
      </div>
      <img style={styles} src={src} />
    </div>
  );
}
const IconSlider: React.FC<IconSliderProps> = (props) => {
  const { param, initValue = 50, setStyle } = props;
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setStyle(initValue);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ marginRight: "10px" }}>{param}: </span>
      <Slider
        max={300}
        min={0}
        style={{ width: "200px" }}
        onChange={(value) => {
          setValue(value);
          setStyle(value);
        }}
        value={value}
      />
    </div>
  );
};

export default PlayPicture;
