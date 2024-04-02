import React, { useEffect } from "react";
import style from "./index.module.less";
import introJs from "intro.js";
import "intro.js/introjs.css";

const Intro = () => {
  useEffect(() => {
    introJs().setOptions({
      steps: [
        {
          title: 'Welcome',
          intro: 'Hello World! 👋'
        },
        {
          intro: '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\'https://i.giphy.com/ujUdrdpX7Ok5W.gif\';" alt="">'
        },
        {
          element: `.${style.stepOne}`,
          intro: 'This step focuses on an image',
          position: 'right'
        },
        {
          title: 'Farewell!',
          element: `.${style.stepTwo}`,
          intro: 'And this is our final step!',
          position: 'left'
        }
      ]
    }).start()

    introJs().addHints();
  }, [])

  return (
    <div className={style.container}>
      <div
        className={style.stepOne}
        data-title="step 1"
        data-intro="Hello World"
      >
        第一步
      </div>
      <div className={style.stepTwo}>第二步</div>
      <div className={style.stepThree}>
        第三步
        <div className={style.stepFour}>第四步</div>
      </div>

      <div className={style.hintOne} data-hint="这是提示一">提示一</div>
      <div className={style.hintTwo} data-hint="这是提示二">提示二</div>
    </div>
  );
};

export default Intro;
