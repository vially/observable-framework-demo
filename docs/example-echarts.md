---
title: Example ECharts
---

```js
import * as echarts from "npm:echarts";

const myChart = echarts.init(display(html`<div style="width: 600px; height:400px;"></div>`));

myChart.setOption({
  title: {
    text: "ECharts getting started example"
  },
  tooltip: {},
  xAxis: {
    data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
```
