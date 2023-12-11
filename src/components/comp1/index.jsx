import styles from "@/components/comp1/comp1.module.scss";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

// console.log(styles);
//styles 是个对象
export default function Comp1() {
  return (
    <div className={styles.body}>
      <p1 className={styles.box}>This is Comp1</p1>
      {/* style里插入jsx表达式，jsx表达式的内容是一个对象 */}
      <Button type="primary" style={{ width: "150px" }}>
        Primary Button
      </Button>
      <PlayCircleOutlined />
    </div>
  );
}
