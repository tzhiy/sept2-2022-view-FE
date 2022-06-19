# world-of-zuul-FE

这里是 world-of-zuul 游戏的前端仓库。

后端仓库地址为 👉[wutcst/sept2-2022-view](https://github.com/wutcst/sept2-2022-view)👈。

这里简要介绍游戏前端的功能，前端详细代码内容会在纸质实验报告中介绍。

前端采用 Vue、Ant-Design-Vue、axios 等进行编写。

1. 前端界面

   前端界面主要分为四个区域：地图区，控制台区，玩家状态区，操作区。

   <img src="https://raw.githubusercontent.com/tzhiy/image-repo/main/blog/QGO9WA0%7D9WDRXY9FWQ0%24ATH.png"/>

2. 地图区

   地图区展示了游戏的各个房间（room），每个房间由黄色的矩形包围。其中传送门房间里画有椭圆传送门。房间之间的路径用黄色直线标出。

   玩家由一张卡通形象图片表示。

   玩家在进行左右移动时，形象图片会跟随动态移动。

   <img src="https://raw.githubusercontent.com/tzhiy/image-repo/main/blog/6W%5D%7DF1%7DUN%40)(3%60_)QMEYL62.png"/>

3. 控制台区

   在控制台区，玩家可以使用经典的控制台指令进行游戏。在前端，可以只使用控制台指令进行完整的游戏体验。

   由于 world-of-zuul 这款游戏的特色就是使用指令进行游戏，我在此将控制台进行了保留，游戏的底层依然是类似控制台的指令操作。并且，在点击下文介绍的可视化按钮后，控制台依然会代替玩家输入对应的指令。

   <img src="https://raw.githubusercontent.com/tzhiy/image-repo/main/blog/)MFY2HWDDL3E3CV73EE2HF4.png"/>

4. 玩家状态区

   玩家状态区主要展示了玩家的力量值、身上携带物品的重量以及当前房间及背包内物品的信息。

   在该区域内，玩家可直观看到自己的信息，并对可见（在当前房间或玩家背包）且可操作（拿、丢、吃）的物品进行操作。

   点击相应选项即可进行操作，其本质是前端代替玩家发送 `take basketball` 、`eat magic-cookie` 等指令。

   <img src="https://raw.githubusercontent.com/tzhiy/image-repo/main/blog/%40X5TMJE1GZF%7E%24PUZSB4ZFR4.png"/>

5. 操作区

   该区域通过按钮进行移动、查看、回退等操作。

   玩家选择移动后，地图区的卡通形象也会移动。

   <img src="https://raw.githubusercontent.com/tzhiy/image-repo/main/blog/%7D15%40CF7%60RADY22YUC32FRMT.png"/>

前端的代码细节可见纸质实验报告。