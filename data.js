(function(){
var SEED={date:"2026-06-28",dateDisplay:"2026年6月28日 星期日",papers:[
{title:"CT-VoxelMap: 面向粗糙地形的连续时间LiDAR-IMU里程计",venue:"arXiv:2604.03747",authors:"Lei Zhao 等 — 上海交通大学",stars:5,contribution:"矩阵李群上控制点增量估计的B样条连续时间LiDAR-IMU里程计。",approach:"累积三次B样条+IMU前向传播+混合体素地图+IEKF紧耦合",innovation:"控制点增量参数化；在线IMU拟合误差补偿",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"连续时间",cls:"core"},{text:"粗糙地形",cls:"core"}]},
{title:"SAGS: 面向斜坡地形的自适应地面分割多机LiDAR SLAM",venue:"Frontiers in Neurorobotics, 2026",authors:"Yu Wang 等 — 东北大学",stars:5,contribution:"IMU感知平台倾斜角动态插值地面分割参数(5°~15°)，显著提升斜坡地形地面分割精度。",approach:"IMU引导自适应地面分割+多机器人分布式LiDAR SLAM",innovation:"IMU姿态直接用于动态调整地面分割参数",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"地面分割",cls:"method"},{text:"斜坡地形",cls:"core"}]},
{title:"Skid-Steer平台紧耦合LiDAR-IMU-轮速里程计",venue:"IEEE Access 2024 / RAS Vol.187, 2025",authors:"Taku Okawara, Kenji Koide — 东北大学/AIST",stars:5,contribution:"首个因子图框架在线运动学标定(打滑/侧向/胎压)的LiDAR-IMU-轮速紧耦合方案。",approach:"全线性轮速因子+在线协方差估计(地形自适应)+GTSAM因子图",innovation:"Skid-Steer打滑在线标定；协方差地形自适应；8种地形验证",recommend:"must-read",tags:[{text:"精读+复现",cls:"recommend"},{text:"Skid-Steer",cls:"core"},{text:"因子图",cls:"method"}]},
{title:"SA-LIVO: 方向选择性融合的LiDAR-Inertial-Visual里程计",venue:"arXiv:2606.25699, 2026.06",authors:"港大MaRS",stars:4,contribution:"子空间感知的方向选择性传感器融合，信息矩阵特征分解后逐方向退化处理。",approach:"联合信息矩阵特征分解+逐方向软门控+CPU 12.3ms/帧",innovation:"方向选择性融合比全局门控更精细",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"退化处理",cls:"method"},{text:"LIVO",cls:"core"}]},
{title:"Terrain-Adaptive LiDAR-IMU SLAM: 地形自适应SLAM",venue:"ISPRS J. Photogrammetry, 2026",authors:"Aiqiang Ma 等 — 武汉大学",stars:4,contribution:"黎曼流形建模坡度+指数遗忘加权，渐变→突变坡度平滑自适应；垂直漂移降低67.78%。",approach:"球坐标强度场+黎曼流形法向量+指数遗忘窗口+多特征因子图",innovation:"黎曼流形坡度建模比欧氏空间斜率更严谨",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"黎曼流形",cls:"method"},{text:"地形自适应",cls:"core"}]},
{title:"丘陵农田履带底盘多传感器融合导航",venue:"AgriEngineering, 2026.06",authors:"Wei Zhao 等 — 云南农业大学",stars:4,contribution:"丘陵农田(5°~25°)9轴IMU+LiDAR+单线LiDAR融合，坡度-横坡双维路径代价。",approach:"IMU坡度先验+自适应地面分割+NDT扫描匹配+双维代价",innovation:"双维代价比传统2D costmap更适合丘陵农机",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"履带平台",cls:"core"},{text:"丘陵导航",cls:"core"}]},
{title:"STONE Dataset: 大规模多模态越野3D可通行性数据集",venue:"ICRA 2026",authors:"Konyul Park — KAIST",stars:4,contribution:"128线LiDAR+6目RGB+3个4D雷达，全自动无人工标注可通行性标签。",approach:"LiDAR稠密地形重建+自动标注管线(坡度/高程/粗糙度+马氏距离)",innovation:"几何优先+轨迹引导的全自动可通行性标注",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"可通行性",cls:"core"},{text:"数据集",cls:"venue"}]},
{title:"MAT: 学习何时跳跃的越野导航",venue:"RSS 2026",authors:"SAIR Lab",stars:3,contribution:"可通行性建模为速度的高斯函数，突破静态范式，减少75%绕行。",approach:"可通行性=f(位置,运动状态)+MPPI/MPC",innovation:"运动感知可通行性概念",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"可通行性",cls:"core"},{text:"RSS",cls:"venue"}]},
{title:"GNSS-FGO: 连续时间因子图融合GNSS/IMU/LiDAR",venue:"arXiv:2309.11134",authors:"Haoming Zhang, Timothy Barfoot — TU Delft/UTIAS",stars:3,contribution:"高斯过程连续时间+原始GNSS紧耦合+LiDAR+轮速因子图，17km城郊验证。",approach:"GP-WNOJ连续轨迹+GNSS伪距/多普勒紧耦合+iSAM2",innovation:"紧耦合原始GNSS避免PVT退化",recommend:"skim",tags:[{text:"精读因子设计",cls:"recommend"},{text:"GNSS紧耦合",cls:"method"}]},
{title:"GA3T: 空地异构机器人越野可通行性数据集",venue:"DARS 2026 / arXiv:2605.06478",authors:"Siwei Cai 等",stars:3,contribution:"Clearpath Husky UGV(履带)+无人机协同采集越野数据13000+帧。",approach:"LiDAR+双目+IMU+GPS+空中RGB+热红外+SAM3零样本分割",innovation:"早春稀疏树冠下空地遮挡协同感知",recommend:"skim",tags:[{text:"可用数据集",cls:"venue"},{text:"履带平台",cls:"core"}]}
],projects:[
{name:"ACE-LIO",url:"https://github.com/lian-yue0515/ACE-LIO",stars:"31⭐ (2026.06)",highlights:"自适应质心地面提取；IESKF紧耦合LIO；动态物体检测；Measurement 2026",difficulty:"★★★☆☆ ROS1需适配ROS2",value:"★★★★☆ 地面提取是丘陵导航基础模块"},
{name:"Offroad-Nav",url:"https://github.com/LARIAD/Offroad-Nav",stars:"新项目 (arXiv:2604.03096)",highlights:"完整ROS越野导航栈；Depth Anything V2+VINS-Mono+边缘掩码平滑；Isaac Sim仿真",difficulty:"★★★☆☆ ROS1框架，模块化清晰",value:"★★★★★ 端到端越野导航栈参考价值极高"},
{name:"LIO-Localization",url:"https://github.com/wdc3iii/LIO-Localization",stars:"活跃开发中 (2026.03-06)",highlights:"ROS2 Humble原生；FAST-LIO2/SPARK双后端；Livox/Velodyne/Ouster；Docker+GPU",difficulty:"★★☆☆☆ ROS2原生，Docker一键部署",value:"★★★★★ 最适合用户的ROS2工程化方案"},
{name:"grid_map + elevation_mapping",url:"https://github.com/ANYbotics/grid_map",stars:"2.5k+⭐/1.5k+⭐",highlights:"多图层2D网格；机器人中心高程建图；GPU版(CuPy)；EasyNavigation(2026.03)",difficulty:"★★★☆☆ ROS2持续完善",value:"★★★★★ ROS2越野高程建图事实标准"},
{name:"Skid-Steer LiDAR-IMU-Wheel Odometry",url:"https://github.com/TakuOkawara/full_linear_wheel_odometry_factor",stars:"学术配套 (IEEE Access+RAS)",highlights:"因子图在线标定Skid-Steer运动学；地形自适应协方差；神经网络升级版",difficulty:"★★★★☆ 依赖GTSAM+ROS",value:"★★★★★ 唯一专为Skid-Steer设计的开源紧耦合方案"}
],trends:[
{title:"从离散时间到连续时间的范式迁移",body:"CT-VoxelMap、GNSS-FGO等连续时间方法解决了IMU(高频)+LiDAR(中频)+RTK(低频)的异频融合难题。"},
{title:"子空间/方向选择性退化处理",body:"SA-LIVO方向选择性融合代表退化处理从全局门控到逐方向精细化的趋势。"},
{title:"黎曼流形地形建模兴起",body:"Terrain-Adaptive SLAM等采用黎曼流形法向量表征地形，地形感知从欧氏几何向流形建模升级。"},
{title:"可通行性从手工标注到自动自监督",body:"STONE几何优先自动标注、COTRATE自监督学习、GA3T零样本分割共同推动变革。"},
{title:"Skid-Steer/Tracked专属SLAM方案出现",body:"Okawara紧耦合方案为首个Skid-Steer专用完整框架，细分方向开始受主流关注。"},
{title:"CVPR 2026前馈化趋势",body:"前馈模型替代传统优化，以视觉为主，对LiDAR-IMU融合SLAM直接冲击有限。"}
],opportunities:{masters:[
{title:"IMU-轮速在线标定的履带式Skid-Steer LiDAR-IMU紧耦合里程计",detail:"Okawara在线标定从平坦地形扩展到丘陵(5°~25°)，增加坡度作为标定输入。",meta:'"Slope-Aware Online Kinematic Calibration for LiDAR-IMU-Wheel Tightly-Coupled Odometry on Tracked Platforms"'},
{title:"丘陵履带平台坡度自适应地面分割",detail:"SAGS的IMU倾斜角自适应分割从多机器人迁移到单机SLAM前端。",meta:"技术简单直接，可快速出实验结果"},
{title:"STONE自动标注+丘陵可通行性地图+Navigation2集成",detail:"STONE几何优先标注管线适配丘陵数据集→Nav2 Smac Hybrid-A*对比。",meta:"利用现有开源工具链，系统验证完整"}
],topConference:[
{title:"黎曼流形地形感知LiDAR-IMU-RTK融合SLAM",detail:"连续时间因子图+黎曼流形地面约束+RTK-GNSS紧耦合。三者组合全新。",meta:"目标: ICRA 2027 / IROS 2027 / IEEE RA-L"},
{title:"履带滑移-地形耦合PINN在线标定与多传感器融合",detail:"Okawara在线标定扩展到PINN，引入地形坡度+土壤类型作为物理先验。",meta:"目标: RSS 2027 / IEEE T-RO"},
{title:"Subspace-Aware LiDAR-IMU-RTK退化处理",detail:"SA-LIVO方向选择性融合扩展到三源，特别处理RTK全或无退化。",meta:"目标: IEEE RA-L + ICRA 2027"}
],deployable:[
{title:"【短期】LIO-Localization + grid_map高程建图 + RTK全局锚定",detail:"履带平台部署LIO-Localization→grid_map 2.5D→RTK-GNSS低频全局约束。",meta:"预计1-2月，技术栈成熟"},
{title:"【中期】Navigation2越野代价地图 + 坡度自适应规划",detail:"elevation_mapping输出高程/坡度→自定义Nav2 Costmap Plugin→Smac Hybrid-A*/MPPI。",meta:"预计3-6月，需开发自定义costmap插件"},
{title:"【长期】Skid-Steer在线标定的多传感器紧耦合里程计",detail:"复现Okawara框架→自采打滑数据→坡度-打滑映射→集成到LIO框架。",meta:"预计6-12月，需大量实验数据"}
]},actions:[
{priority:"P0",title:"精读 CT-VoxelMap，等待代码开源后评估移植",time:"1周",type:"论文+工程"},
{priority:"P0",title:"精读 Skid-Steer LiDAR-IMU-Wheel Odometry，在履带平台复现",time:"2-4周",type:"论文+工程"},
{priority:"P1",title:"精读 SAGS 斜坡自适应地面分割，设计丘陵验证实验",time:"1周",type:"论文"},
{priority:"P1",title:"部署 LIO-Localization + grid_map 到履带平台",time:"2-3周",type:"工程"},
{priority:"P2",title:"下载 STONE/GA3T 数据集，进行算法迁移实验",time:"1-2周",type:"数据+实验"},
{priority:"P2",title:"研究黎曼流形地形建模",time:"1周",type:"理论学习"}
]};

var T={date:"2026-06-30",dateDisplay:"2026年6月30日 星期二",papers:[
{title:"LXD-SLAM: 支持32种传感器组合的LiDAR+X密集SLAM",venue:"arXiv:2606.27811 — 同济大学",authors:"Zhong Wang 等",stars:5,contribution:"首款即插即用密集SLAM框架，支持LiDAR/Camera/IMU/Wheel/GNSS任意32种组合，GNSS绝对位姿修正实现户外无漂移建图。",approach:"统一IESKF+自适应分层预测+多层GP子网格密集建图+ESC描述子闭环+GNSS约束",innovation:"传感器组合理论完备；GP连续表面替代稀疏点云",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"多传感器融合",cls:"core"},{text:"GNSS紧耦合",cls:"method"}]},
{title:"Ultra-Fusion: 退化环境下韧性紧耦合多传感器融合SLAM",venue:"arXiv:2606.21223",authors:"Tian 等",stars:5,contribution:"统一滑动窗口支持WIO/VIO/LIO/LVIO+Wheel/GNSS，传感器退化+标定扰动下保持鲁棒。",approach:"在线LiDAR-IMU时空标定+因子级可靠性调度+滑动窗口紧耦合",innovation:"退化条件下在线标定+调度；60+系统对比验证",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"退化鲁棒",cls:"core"},{text:"在线标定",cls:"method"}]},
{title:"FAR-LIO: 快速精确鲁棒LiDAR-Inertial里程计 (IROS 2026)",venue:"IROS 2026 / arXiv:2606.26010",authors:"(IROS 2026 Accepted)",stars:4,contribution:"CUDA加速LIO，体素哈希图+GICP自适应阈值+EKF，250 km/h高速验证。",approach:"CUDA体素哈希图+GICP自适应阈值+EKF后端",innovation:"GICP自适应阈值；首次验证250km/h极高速LIO",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"GPU加速",cls:"method"},{text:"高速LIO",cls:"core"}]},
{title:"FAST-LIVGO: 退化鲁棒LiDAR-Inertial-Visual-GNSS融合里程计 (IROS 2026)",venue:"IROS 2026 / arXiv:2606.19190",authors:"Zhiyu Chen等 — 深大/港大/哈工程",stars:5,contribution:"IESKF紧耦合L-I-V-GNSS，DTW在线时空对齐+GNSS Doppler/TDCP+退化感知双模异常值剔除。",approach:"DTW在线对齐+Doppler/TDCP毫米级约束+退化双模剔除",innovation:"DTW在线时空对齐；毫米级TDCP约束；双模退化处理",recommend:"must-read",tags:[{text:"精读+复现",cls:"recommend"},{text:"GNSS紧耦合",cls:"core"},{text:"时空对齐",cls:"method"}]},
{title:"基于几何地形特征的实时可通行性地图构建",venue:"Measurement (Elsevier), 2026",authors:"(ScienceDirect)",stars:5,contribution:"2.5D网格统一建模高程与可通行性，GMM+贝叶斯核推断+KF多帧融合，集成底盘运动学/动力学约束。",approach:"2.5D高程网格+GMM+贝叶斯核推断+KF多帧融合",innovation:"可通行+15.8%，不可通行+19.6%",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"可通行性",cls:"core"},{text:"2.5D网格",cls:"method"}]},
{title:"DWG-LIO: 强地面约束与自适应动态移除的鲁棒LiDAR SLAM",venue:"Measurement Science and Technology, 2026.05",authors:"Chen 等",stars:4,contribution:"因子图强地面约束抑制Z轴漂移+同心区动态检测+时空法向量验证，Z轴误差0.264m。",approach:"强地面约束因子图+同心区动态检测+时空法向量验证",innovation:"地面约束因子抑制高程漂移；动态检测无需学习",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"地面约束",cls:"method"},{text:"高程漂移",cls:"core"}]},
{title:"GenZ-LIO: 封闭到开放边界的可泛化LIO",venue:"arXiv:2603.16273, 2026.03",authors:"—",stars:3,contribution:"尺度感知体素化+混合度量EKF+体素剪枝，适应封闭→开放空间尺度剧烈变化。",approach:"尺度感知体素化+混合度量EKF+体素剪枝匹配",innovation:"封闭→开放空间的尺度自适应",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"尺度自适应",cls:"method"}]},
{title:"Consistency-Improved LiDAR-Inertial BA (FEJ)",venue:"IEEE RA-L 2026 / arXiv:2602.06380",authors:"—",stars:3,contribution:"立体投影参数化+FEJ，提升LIO-BA估计器一致性。",approach:"立体投影参数化+FEJ+LiDAR-Inertial联合BA",innovation:"FEJ首次引入LiDAR-Inertial BA",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"估计一致性",cls:"method"}]},
{title:"履带底盘RTK-LiDAR-IMU融合果园导航：粒子滤波紧耦合",venue:"Computers and Electronics in Agriculture, 2026",authors:"Chen, Dou, Zhai 等",stars:5,contribution:"差分履带底盘粒子滤波融合LiDAR+IMU+RTK，行内跟踪4.37cm，定位误差降66.27%。",approach:"粒子滤波+3D NDT匹配+RTK-IMU紧耦合运动模型",innovation:"粒子滤波替代因子图/卡尔曼滤波",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"履带平台",cls:"core"},{text:"RTK-IMU融合",cls:"method"}]},
{title:"LIT-GS: LiDAR-Inertial-Thermal高斯泼溅 (IROS 2026)",venue:"IROS 2026 — 小米",authors:"Jiaming Xu 等",stars:3,contribution:"LiDAR平面几何约束+LIV跨模态锚定+热红外GS渲染，低光照优于纯视觉GS。",approach:"LiDAR导引几何约束+LIV锚定+热红外GS渲染",innovation:"LiDAR约束引入GS优化",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"Gaussian Splatting",cls:"method"},{text:"热红外",cls:"core"}]}
],projects:[
{name:"LIO-Localization (ROS2 Humble原生)",url:"https://github.com/wdc3iii/LIO-Localization",stars:"活跃 (2026.06.18)",highlights:"ROS2 Humble；FAST-LIO2/SPARK双后端；Livox/Velodyne/Ouster；Docker+GPU",difficulty:"★★☆☆☆",value:"★★★★★ 最适工程化方案"},
{name:"plain_slam_ros2 (超轻量级LIO)",url:"https://github.com/NaokiAkai/plain_slam_ros2",stars:"学术项目 (2026)",highlights:"<1900行C++；松/紧耦合LIO双模式；GICP闭环；仅Eigen/Sophus/nanoflann",difficulty:"★★☆☆☆",value:"★★★★☆ 教学级代码"},
{name:"elevation_mapping_cupy_ros2 (GPU高程建图)",url:"https://github.com/amilearning/elevation_mapping_cupy_ros2",stars:"ROS2移植中 (ETH RSL)",highlights:"GPU(CuPy)高程建图；CNN可通行性滤波；DARPA地下赛验证",difficulty:"★★★☆☆",value:"★★★★★ 丘陵高程建图核心"},
{name:"MOLA (模块化SLAM框架)",url:"https://github.com/MOLAorg/mola",stars:"社区维护 (2026.05)",highlights:"YAML流水线；LO/LIO/GNSS+LiDAR+IMU融合；RTK级户外定位",difficulty:"★★★☆☆",value:"★★★★☆ 定制化部署"},
{name:"GLIM v1.2.0 (通用3D LiDAR-IMU建图)",url:"https://github.com/koide3/glim",stars:"MIT (2026.01)",highlights:"因子图优化；CUDA加速；GUI地图修正；Jetson Orin",difficulty:"★★★☆☆",value:"★★★★☆ 通用性强"}
],trends:[
{title:"即插即用多传感器架构成为2026主线",body:"LXD-SLAM的32种组合和Ultra-Fusion的统一窗口代表SLAM从专用到通用的范式转变。LiDAR+IMU+RTK+Camera+Wheel五传感器方案已被主流覆盖。"},
{title:"GNSS紧耦合全面回归户外SLAM",body:"FAST-LIVGO引入Doppler+TDCP毫米级约束，LXD-SLAM集成GNSS绝对位姿，果园导航RTK-IMU粒子滤波融合。"},
{title:"GPU加速从可选变为必需",body:"FAR-LIO的CUDA 250km/h处理，elevation_mapping_cupy_ros2的CuPy加速——GPU是在线SLAM的入口条件。"},
{title:"可通行性建模从离散二值到连续场",body:"Measurement 2026几何特征+底盘约束、TRAIL隐式神经场、MAT速度感知可通行性——推动0/1升级为连续代价场。"},
{title:"地面建模从辅助到核心约束",body:"DWG-LIO强地面约束因子显著降低Z轴漂移(0.264m)。丘陵场景中地面约束应为关键因子而非预处理步骤。"},
{title:"履带平台专属SLAM方案持续涌现",body:"Okawara Skid-Steer在线标定、果园履带粒子滤波融合、农用履带坡度自适应导航。"}
],opportunities:{masters:[
{title:"丘陵履带平台LiDAR-IMU-RTK多源融合退化处理",detail:"Ultra-Fusion退化调度+FAST-LIVGO双模异常剔除迁移到丘陵履带，设计三维退化评估矩阵。",meta:"Degradation-Aware Multi-Sensor Fusion for LiDAR-IMU-RTK SLAM on Tracked Platforms"},
{title:"基于履带运动学的自适应地面约束SLAM",detail:"DWG-LIO地面约束+Okawara在线标定+IMU倾斜角动态调整权重。",meta:"DWG-LIO+SAGS+Okawara 组合创新"},
{title:"几何特征驱动的2.5D可通行性地图与Nav2集成",detail:"Measurement 2026可通行性建图+elevation_mapping_cupy GPU管线+Nav2对比。",meta:"工程+论文双重产出"}
],topConference:[
{title:"黎曼流形地形感知连续时间LiDAR-IMU-RTK紧耦合因子图SLAM",detail:"连续时间+黎曼流形+RTK Doppler/TDCP。三者组合全新。",meta:"目标: ICRA 2027 / IROS 2027 / IEEE RA-L"},
{title:"履带滑移-地形耦合PINN在线标定与多传感器融合",detail:"Okawara标定扩展到PINN，引入坡度+土壤类型+接地压力物理先验。",meta:"目标: RSS 2027 / IEEE T-RO"},
{title:"Subspace-Aware LiDAR-IMU-RTK三源退化处理",detail:"SA-LIVO方向选择性融合扩展到三源，处理RTK全或无退化。",meta:"目标: IEEE RA-L + ICRA 2027"}
],deployable:[
{title:"【短期 1-2月】LIO-Localization + elevation_mapping_cupy_ros2 + RTK",detail:"ROS2 Humble+Docker，技术栈成熟风险低。",meta:"预计 1-2 月"},
{title:"【中期 3-6月】Navigation2越野代价地图 + 坡度自适应规划",detail:"elevation_mapping输出+自定义Nav2 Costmap Plugin+Smac Hybrid-A*/MPPI。",meta:"预计 3-6 月"},
{title:"【长期 6-12月】DWG-LIO + Ultra-Fusion退化调度 + Okawara在线标定",detail:"完整丘陵履带SLAM技术栈。",meta:"预计 6-12 月"}
]},actions:[
{priority:"P0",title:"精读 LXD-SLAM + FAST-LIVGO，理解五传感器+GNSS紧耦合框架",time:"1-2周",type:"论文"},
{priority:"P0",title:"精读 DWG-LIO 地面约束因子，评估履带平台可移植性",time:"1周",type:"论文+代码"},
{priority:"P1",title:"精读 Measurement 2026 可通行性建图，设计复现方案",time:"1周",type:"论文"},
{priority:"P1",title:"部署 LIO-Localization (ROS2) + elevation_mapping_cupy_ros2",time:"2-3周",type:"工程"},
{priority:"P1",title:"精读 果园履带RTK-LiDAR-IMU导航论文",time:"1周",type:"论文"},
{priority:"P2",title:"研究 Ultra-Fusion 退化调度 + FAR-LIO GPU加速方案",time:"1周",type:"理论"},
{priority:"P2",title:"探索 glim/MOLA 替代方案",time:"1周",type:"调研"}
]};
var TODAY={date:"2026-07-01",dateDisplay:"2026年7月1日 星期三",papers:[{title:"SENTINEL: 不确定性感知SLAM — 检测退化+自动回退",venue:"ICRA 2026 / arXiv:2606.04853",authors:"Badrikanath Praharaj 等",stars:5,contribution:"检测LiDAR扫描退化(玻璃/镜面/光滑表面)后自动降级到已标定轮速里程计，防止SLAM建图污染。在真实Skid-Steer平台上纯硬件验证。",approach:"几何统计+RGB-D跨模态一致性→扫描可靠性评分→轮速里程计回退",innovation:"首次量化LiDAR扫描可靠性并自动fallback；针对Skid-Steer真实平台",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"Skid-Steer",cls:"core"},{text:"不确定性",cls:"method"}]},{title:"FusionCore: 23状态UKF IMU/轮速/GPS/视觉SLAM融合 (ROS2)",venue:"arXiv:2605.25239, 2026.05",authors:"Manan Kharwar — 开源ROS2包 Apache 2.0",stars:5,contribution:"ROS2原生23状态UKF融合IMU+轮速编码器+GPS+Visual SLAM，ECEF原生GPS无需UTM投影，含轮速偏航率偏置(第23状态)在线估计。",approach:"UKF+ECEF GPS+轮速偏航率偏置+马氏距离异常值门控+100Hz",innovation:"第23状态(轮速偏航率偏置)对Skid-Steer打滑补偿尤其关键",recommend:"must-read",tags:[{text:"精读+部署",cls:"recommend"},{text:"ROS2",cls:"core"},{text:"多传感器融合",cls:"core"}]},{title:"FAST-LIVGO: 退化鲁棒LiDAR-Inertial-Visual-GNSS融合里程计 (IROS 2026)",venue:"IROS 2026 (Accepted)",authors:"Zhiyu Chen 等 — 深圳大学/港大/哈工程",stars:5,contribution:"IESKF紧耦合L-I-V-GNSS+DTW在线时空对齐+GNSS Doppler/TDCP毫米级约束+退化感知双模异常值剔除。",approach:"DTW在线时空对齐+Doppler/TDCP+退化双模剔除+IESKF",innovation:"DTW解决异构传感器时空对齐；TDCP毫米级约束",recommend:"must-read",tags:[{text:"精读+复现",cls:"recommend"},{text:"GNSS紧耦合",cls:"core"},{text:"退化处理",cls:"method"}]},{title:"Structured-Li-GS: 结构化LiDAR引导3D高斯泼溅 (ISPRS 2026)",venue:"ISPRS Congress 2026 / arXiv:2606.27509",authors:"(ISPRS 2026 Accepted)",stars:4,contribution:"高斯锚定于LiDAR子采样点，局部表面几何初始化，无需增密操作——比传统3DGS更轻量紧凑。",approach:"LiDAR子采样锚定+局部表面法向量+光度+扁平化+深度+法向量多损失",innovation:"LiDAR几何替代SfM初始化，无需密集化",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"Gaussian Splatting",cls:"method"},{text:"LiDAR几何",cls:"core"}]},{title:"NeuroTerrain: 几何连续神经隐式SLAM — 非结构化环境可扩展探索",venue:"IEEE Int. Conf. 2026 (IEEE Xplore 2026.05)",authors:"(IEEE Xplore 2026.05)",stars:5,contribution:"曲率约束正则化+SDF Hessian正则化+不确定性驱动主动采样，相比NICE-SLAM/Co-SLAM网格完整度+18%，几何噪声-35%。",approach:"曲率约束Hessian正则化+不确定性主动采样+神经SDF",innovation:"C1/C2表面连续性约束消除洞穴/行星表面几何断裂",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"神经隐式",cls:"method"},{text:"非结构化地形",cls:"core"}]},{title:"TRAIL: 隐式神经地形可通行性表示+梯度轨迹优化",venue:"IEEE RA-L, 2026.06",authors:"(RA-L 2026)",stars:4,contribution:"隐式神经场建模地形可通行性为连续函数，联合优化路径几何与速度剖面，兼顾地形振动与通过性。",approach:"隐式神经可通行性场+梯度优化+速度-几何联合规划",innovation:"连续可通行性场替代离散网格；振动感知速度剖面",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"可通行性",cls:"core"},{text:"隐式神经场",cls:"method"}]},{title:"农业LiDAR-IMU SLAM: 异质配准+神经噪声自适应",venue:"Smart Agricultural Technology, 2026",authors:"(ScienceDirect 2026)",stars:5,contribution:"点云强度分离刚性结构(支撑杆)与柔性作物，异质配准+LSTM预测时变IMU协方差，农业慢速振动场景精度大幅提升。",approach:"强度分类+异质配准置信融合+LSTM噪声自适应器",innovation:"植被-刚性分离+神经噪声自适应(对履带振动有借鉴意义)",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"噪声建模",cls:"method"},{text:"农业+丘陵",cls:"core"}]},{title:"Trinity: 统一类无关地形分割+语义分割",venue:"arXiv:2605.27644, 2026.05",authors:"(RUGDSynth+EXTerra数据集)",stars:4,contribution:"Transformer联合语义分割+类无关可导航区域分割，提供机器人不可知的地形视觉先验。",approach:"Transformer联合分割+合成数据RUGDSynth训练+EXTerra验证",innovation:"类无关分割避免标注依赖，提供可泛化视觉地形先验",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"地形分割",cls:"method"},{text:"视觉先验",cls:"core"}]},{title:"LIT-GS: LiDAR-Inertial-Thermal高斯泼溅 (IROS 2026)",venue:"IROS 2026 — 小米",authors:"Jiaming Xu 等",stars:3,contribution:"LiDAR平面几何约束+LIV跨模态锚定+热红外GS渲染，低光照/无纹理优于纯视觉GS。",approach:"LiDAR平面约束+LIV锚定+热红外GS渲染",innovation:"LiDAR约束引入GS优化；热红外对抗光照退化",recommend:"skim",tags:[{text:"泛读",cls:"venue"},{text:"Gaussian Splatting",cls:"method"},{text:"热红外",cls:"core"}]},{title:"Skid-Steer神经运动学在线标定: LiDAR-IMU-轮速因子图",venue:"arXiv:2407.08907v2 (NN升级版)",authors:"Taku Okawara, Kenji Koide — 东北大学/AIST",stars:4,contribution:"线性运动学升级为在线训练神经网络，捕获高速漂移非线性打滑——首次将NN在线标定嵌入因子图优化。",approach:"因子图在线训练NN运动学模型+在线自适应+8种地形验证",innovation:"NN替代线性运动学——非线性打滑建模首次嵌入因子图",recommend:"must-read",tags:[{text:"精读",cls:"recommend"},{text:"Skid-Steer",cls:"core"},{text:"NN+因子图",cls:"method"}]}],projects:[{name:"FastDEM (实时2.5D高程建图引擎)",url:"https://github.com/Ikhyeon-Cho/FastDEM",stars:"活跃 (2026.05)",highlights:"100+Hz Jetson Orin CPU；ROS1/2双支持；无PCL/OpenCV/CUDA仅Eigen；KF+P2分位数估计；局部+全局地图",difficulty:"★★☆☆☆ 仅Eigen依赖",value:"★★★★★ 嵌入式丘陵高程建图最佳选择"},{name:"FusionCore (23状态UKF ROS2融合)",url:"https://github.com/manankharwar/fusioncore",stars:"新项目 (Apache 2.0)",highlights:"IMU+Wheel+GPS+Visual SLAM 23状态UKF；ECEF GPS无UTM；轮速偏航偏置；NCLT数据集验证",difficulty:"★★☆☆☆ ROS2原生",value:"★★★★★ 填补Skid-Steer ROS2传感器融合空白"},{name:"SENTINEL (不确定性感知SLAM)",url:"https://github.com/bpraharaj/SENTINEL",stars:"新项目 (ICRA 2026)",highlights:"LiDAR扫描可靠性评分；RGB-D跨模态一致性校验；自动轮速回退；仅真实硬件验证",difficulty:"★★★☆☆ 需定制传感器配置",value:"★★★★☆ 履带平台退化检测极有价值"},{name:"elevation_mapping_cupy_ros2 (GPU高程建图)",url:"https://github.com/amilearning/elevation_mapping_cupy_ros2",stars:"ROS2移植中 (ETH RSL)",highlights:"GPU(CuPy)加速；CNN可通行性滤波；多模态高程图(几何+语义+RGB)；DARPA验证",difficulty:"★★★☆☆ ROS2适配进行中",value:"★★★★★ 丘陵地形GPU建图核心"},{name:"plain_slam_ros2 (超轻量教学级LIO)",url:"https://github.com/NaokiAkai/plain_slam_ros2",stars:"学术项目 (2026)",highlights:"<1900行C++；松/紧耦合LIO双模式；GICP闭环；仅Eigen/Sophus/nanoflann；ROS2 Humble",difficulty:"★★☆☆☆ 教学级代码",value:"★★★★☆ 学习LIO最佳入门"}],trends:[{title:"不确定性感知SLAM从理论走向硬件——SENTINEL开创先河",body:"SENTINEL(ICRA 2026)首次在真实Skid-Steer机器人上实现LiDAR扫描退化检测+自动回退。结合DWG-LIO地面约束、Ultra-Fusion退化调度，不确定性感知SLAM正成为新的研究子领域。"},{title:"Skid-Steer/Tracked平台运动学标定从线性到神经",body:"Okawara线性因子图扩展为在线神经网络版，高速漂移非线性打滑首次被因子图建模。FusionCore新增轮速偏航率偏置(第23状态)。履带专属SLAM方案走向成熟。"},{title:"神经隐式场进军地形建模——连续替代离散",body:"NeuroTerrain以曲率约束SDF替代网格，TRAIL以神经场建模可通行性。从2.5D网格到3D隐式场的范式转移正在加速。"},{title:"Gaussian Splatting与LiDAR深度融合——从视觉到多模态",body:"Structured-Li-GS利用LiDAR几何初始化替换SfM，LIT-GS加入热红外抗光照退化。3DGS正从纯视觉扩展到LiDAR-Inertial-Thermal多模态表示。"},{title:"农业机器人SLAM揭示振动/噪声建模新方向",body:"农业LiDAR-IMU SLAM的LSTM噪声自适应器、履带果园粒子滤波融合，为丘陵履带平台的振动建模提供了可借鉴的方法论。"},{title:"几何先验驱动自动标注——数据集从手工到自动化",body:"STONE(ICRA 2026)纯几何自动标注、Trinity零样本地形分割、GA3T空地协同——标注管线自动化正消除数据瓶颈。"}],opportunities:{masters:[{title:"履带平台LiDAR扫描退化检测+轮速里程计自适应回退",detail:"SENTINEL退化检测+Okawara在线运动学标定+FusionCore 23状态UKF组合，设计履带专属退化评估+回退策略。",meta:"Degradation-Aware Multi-Sensor Fusion with Adaptive Wheel Odometry Fallback for Tracked Platforms"},{title:"神经噪声自适应器+履带振动建模的LiDAR-IMU里程计",detail:"农业SLAM的LSTM噪声自适应器迁移到丘陵履带，将地形坡度/土壤类型/振动频率作为LSTM输入，动态预测IMU协方差。",meta:"Vibration-Aware Neural Noise Adaptation for Tracked Robot LiDAR-Inertial Odometry"},{title:"几何先验自动标注+丘陵可通行性数据集构建",detail:"STONE几何标注管线适配履带平台，加入2.5D高程/坡度/粗糙度/摩擦系数多维度自动标注，构建丘陵履带专属数据集。",meta:"几何+物理+语义三重标注，贡献数据集"}],topConference:[{title:"NeuroTerrain-履带: 曲率约束神经隐式SLAM+可通行性联合建图",detail:"融合NeuroTerrain的SDF曲率约束+履带动力学约束+物理-informed神经渲染于统一隐式框架，实现地形重建与可通行性联合表示。",meta:"目标: ICRA 2027 / RSS 2027 / IEEE RA-L"},{title:"Skid-Steer神经运动学在线标定的LiDAR-IMU-RTK-GNSS紧耦合因子图",detail:"Okawara NN运动学+FusionCore UKF+FAST-LIVGO GNSS紧耦合三者统一到单因子图框架，处理打滑+退化+时空对齐。",meta:"目标: IEEE T-RO / RSS 2027"},{title:"面向丘陵履带的LiDAR-Inertial-Thermal视觉SLAM",detail:"LIT-GS热红外+LiDAR几何+SENTINEL退化检测=全天候全天时丘陵SLAM。",meta:"目标: IROS 2027 / IEEE RA-L + ICRA 2027"}],deployable:[{title:"【短期 1-2月】FusionCore + LIO-Localization + FastDEM",detail:"ROS2 Humble Docker部署FusionCore(传感器融合)+LIO-Localization(LIO)+FastDEM(高程建图)，三件套成熟稳定。",meta:"预计1-2月，全部ROS2原生"},{title:"【中期 3-6月】SENTINEL退化检测 + Nav2代价地图 + 坡度自适应规划",detail:"SENTINEL检测退化→回退轮速→Nav2越野代价地图(elevation_mapping→custom plugin)→Smac Hybrid-A*/MPPI。",meta:"预计3-6月，需开发自定义costmap和退化处理逻辑"},{title:"【长期 6-12月】Okawara神经运动学 + FAST-LIVGO GNSS紧耦合 + NeuroTerrain地形建图",detail:"NN标定打滑+GNSS TDCP紧耦合+曲率约束隐式地形=完整丘陵履带SLAM技术栈。",meta:"预计6-12月，需大量自采数据+模型训练"}]},actions:[{priority:"P0",title:"精读 SENTINEL，评估退化检测+轮速回退在履带平台可行性",time:"1周",type:"论文+评估"},{priority:"P0",title:"部署 FusionCore ROS2，融合本机IMU+轮速+RTK数据测试",time:"1-2周",type:"工程"},{priority:"P0",title:"精读 Okawara神经运动学升级版+FAST-LIVGO GNSS紧耦合",time:"1周",type:"论文"},{priority:"P1",title:"精读 NeuroTerrain + TRAIL 隐式地形建模",time:"1周",type:"论文"},{priority:"P1",title:"复现 Structured-Li-GS LiDAR几何引导高斯泼溅",time:"2-3周",type:"论文+代码"},{priority:"P1",title:"部署 FastDEM 替代 grid_map 进行履带平台高程建图测试",time:"1-2周",type:"工程"},{priority:"P2",title:"下载 STONE 数据集，适配履带平台自动标注管线",time:"1-2周",type:"数据+实验"},{priority:"P2",title:"研究 农业SLAM神经噪声自适应器对履带的迁移",time:"1周",type:"理论"}]};
if(!G("2026-07-01")) S(TODAY);


function G(k){try{return JSON.parse(localStorage.getItem("report_"+k))}catch(e){return null}}
function S(r){try{localStorage.setItem("report_"+r.date,JSON.stringify(r))}catch(e){}}
function A(){var K=Object.keys(localStorage).filter(function(k){return k.indexOf("report_")===0}).sort().reverse();return K.map(function(k){return JSON.parse(localStorage.getItem(k))})}
if(!G("2026-06-28")) S(SEED);
if(!G("2026-06-30")) S(T);

function renderReport(r){
 if(!r)return;
 document.getElementById("reportDate").textContent=r.dateDisplay;
 var pc=(r.papers||[]).length,prc=(r.projects||[]).length,tc=(r.trends||[]).length;
 document.getElementById("pillPapers").textContent=pc+" 篇论文";
 document.getElementById("pillProjects").textContent=prc+" 个项目";
 document.getElementById("pillTrends").textContent=tc+" 条趋势";
 var h="";
 function E(s){if(!s)return"";return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
 function star(n){var s="";for(var i=0;i<5;i++)s+='<svg class="'+(i<n?"filled":"empty")+'" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>';return s}
 if(pc){h+='<div class="section-block"><div class="section-head"><h3>最新论文</h3><span class="count">'+pc+' 篇</span></div>';
 r.papers.forEach(function(p){
  h+='<div class="paper-card"><div class="card-top"><h4>'+E(p.title)+'</h4><div class="star-rating">'+star(p.stars||0)+'</div></div>';
  h+='<div class="meta"><strong>'+E(p.authors)+'</strong><br>出处：'+E(p.venue||"—")+'</div>';
  if(p.tags){h+='<div class="tags-row">';p.tags.forEach(function(t){h+='<span class="tag '+t.cls+'">'+E(t.text)+'</span>'});h+='</div>'}
  h+='<div class="detail-grid"><div><span class="label">核心贡献：</span>'+E(p.contribution||"")+'</div><div><span class="label">技术路线：</span>'+E(p.approach||"")+'</div><div><span class="label">创新点：</span>'+E(p.innovation||"")+'</div></div>';
  if(p.recommend)h+='<div class="action-row"><span></span><span class="rec-badge '+(p.recommend=="must-read"?"must-read":"skim")+'">'+(p.recommend=="must-read"?"建议精读":"建议泛读")+'</span></div>';
  h+='</div>';
 });h+='</div>';}
 if(prc){h+='<div class="section-block"><div class="section-head"><h3>最新开源项目</h3><span class="count">'+prc+' 个</span></div>';
 r.projects.forEach(function(p){h+='<div class="project-card"><div class="proj-top"><h4><a href="'+E(p.url)+'" target="_blank" rel="noopener">'+E(p.name)+'</a></h4><div class="gh-stars"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg> '+E(p.stars)+'</div></div><div class="proj-meta">'+E(p.highlights)+'</div><div class="proj-grid"><div><span class="label">复现难度：</span>'+E(p.difficulty)+'</div><div><span class="label">工程价值：</span>'+E(p.value)+'</div></div></div>'});h+='</div>';}
 if(tc){h+='<div class="section-block"><div class="section-head"><h3>热点趋势分析</h3><span class="count">'+tc+' 条</span></div>';
 r.trends.forEach(function(t){h+='<div class="trend-item"><h4>'+E(t.title)+'</h4><p>'+E(t.body)+'</p></div>'});h+='</div>';}
 if(r.opportunities){h+='<div class="section-block"><div class="section-head"><h3>用户研究机会分析</h3></div>';
 ["masters","topConference","deployable"].forEach(function(cat){var items=r.opportunities[cat];if(!items||!items.length)return;var labels={masters:"硕士论文创新点",topConference:"顶会论文方向",deployable:"可落地平台方案"};h+='<div class="opp-block"><h4>▸ '+labels[cat]+'</h4>';items.forEach(function(o){h+='<div class="opp-item"><div class="opp-title">'+E(o.title)+'</div><div class="opp-detail">'+E(o.detail)+'</div><div class="opp-meta">'+E(o.meta)+'</div></div>'});h+='</div>'});h+='</div>';}
 if(r.actions){h+='<div class="section-block"><div class="section-head"><h3>本期重点关注行动清单</h3><span class="count">'+r.actions.length+' 项</span></div><div style="overflow-x:auto"><table class="actions-table"><thead><tr><th>优先级</th><th>行动项</th><th>预计时间</th><th>类型</th></tr></thead><tbody>';
 r.actions.forEach(function(a){h+='<tr><td><span class="priority-pill '+a.priority.toLowerCase()+'">'+a.priority+'</span></td><td>'+E(a.title)+'</td><td>'+E(a.time)+'</td><td>'+E(a.type)+'</td></tr>'});h+='</tbody></table></div></div>';}
 document.getElementById("reportContent").innerHTML=h;
}

function renderSidebar(){
 var reports=A(),list=document.getElementById("dateList");
 var items='<li><button class="active" data-date="2026-07-01"><span class="date-dot"></span>今日 7/1</button></li>';
 reports.forEach(function(r){var d=new Date(r.date+"T00:00:00");items+='<li><button data-date="'+r.date+'"><span class="date-dot"></span>'+(d.getMonth()+1)+"/"+d.getDate()+'</button></li>'});
 list.innerHTML=items;
 list.querySelectorAll("button").forEach(function(btn){btn.addEventListener("click",function(){list.querySelectorAll("button").forEach(function(b){b.classList.remove("active")});this.classList.add("active");var r=G(this.dataset.date);if(r)renderReport(r)})})
}

var R=G("2026-07-01")||SEED;
renderReport(R);
renderSidebar();
console.log("SLAM晨报: "+R.date);
})();
