import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '商事登记及秘书服务', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：宁波汇智恒动自动化科技有限公司', '注册地址：江北区 庆丰路777弄',
            '注册资本：1580万', '行业类型：科技型；机器人与智能化设备的研发',
            '法定代表人：马赫'],
        suggest: `易创会协助您完成年检变更、经济普查等相关企业服务，同时，我们还提供创新券网站注册备案服务。
        创新券是由宁波市两创办发放，专用于补助小微企业购买专业服务机构所提供的服务产品。使用创新券，易创记账服务费可抵减<font color="red">5000</font>元。
        注册备案流程：
        新用户注册——上年纳税年度营业收入证明——从业人数（缴交社保）证明——小微企业资格登记
       
        如您需要易创帮助申请，可向我订购。
        服务费：<font color="red">¥99.00</font>元`,
        weAdvice: {
            label: '',
            contents: [],
            others: ''
        }
    },
    {
        name: '政策匹配及准备工作', icon: 'filing',
        description: '易创，让政策申请更容易！',
        statusLabel: '基本信息',
        status: ['人员结构：硕士3人', '创业类型：科技型；机器人与智能化设备的研发', '所属园区：江北区 庆丰路777弄', '知识产权：发明专利正在申请1项'],
        suggest: '据了解，贵公司准备2019年申报高新技术企业，高企一旦申请成功，除了税收的优惠政策；企业在后期申报项目以及对外宣传上更加有优势，但是高企' +
            '对财务要求比较高，后期我们会根据高企要求定期进行指标测算。除上述政策外，我们还为您匹配了以下创业政策:',
        weAdvice: {
            label: '',
            wordValues: [
                {word: '创业带动就业补贴', value: '最高10万元'},
                {word: '招用高校毕业生社保补贴', value: '每人每月770元'},
                {word: '发明专利资助', value: '高新区奖励3万左右'},
                {word: '宁波市国内发明专利年费', value: '补贴年费的30%-50%'},
                {word: '园区退税奖励', value: '最高退50%'},
                {word: '宁波市科技创新券', value: '2万元'},
                {word: '宁波小微企业创业创新服务券', value: '最高抵扣5000元'},
                {word: '宁波市智团创业计划', value: '最高奖励50万'},
                {word: '研发费用后补助', value: '补贴5%'},
                {word: '高企培育入库补贴', value: '5万元'},
            ]
        }
    },
    {
        name: '融资计划及准备工作', icon: 'list-box',
        description: '易创，让融资贷款更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型；机器人与智能化设备的研发', '是否引入外部投资者：-'],
        suggest: '虽然贵公司目前暂无融资计划，但您未来有意向踏入资本市场时，有以下几点建议可以提前做好准备：',
        weAdvice: {
            label: '',
            contents: ['建议贵公司去宁波股权交易所登记挂牌（甬股交新四板），挂牌甬股交不仅能获得挂牌授信，还能获得1万元-60万元的挂牌补贴。同时挂牌企业在未来做股权融资或银行贷款时，还能获得投资额或贷款额2%的补贴。',
                '与宁波市天使引导基金洽谈。获得引导基金能极大地方便后期各类项目申报。',
                '用好更便宜的银行贷款政策。目前宁波的各大银行都有推出科技贷与税金贷，政府担保、信用贷款，年化利率5%左右，成本远低于股权融资。 ',
                '招用两类人（宁波户籍劳动者，毕业5年内高校毕业生）银行贷款还有贴息补助，额度最高300万元。']
        }
    },
    {
        name: '财税计划及顾问服务', icon: 'stats',
        description: '易创，让财税筹划更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型；机器人与智能化设备的研发', '注册地址：江北区 庆丰路777弄', '税务资格：一般纳税人', '税种行业：研发制造型企业', '企业需求：高新技术企业财务服务'],
        suggest: `对于贵司属于初创型和科技型的小微企业性质，在国家鼓励创新企业发展的情况下，您有多项税收减免政策可以享受，以下请知悉：`,
        weAdvice: {
            label: '',
            contents: ['小型微利企业税收优惠，利润100万以下所得税减按5%，100万-300万减按10%。',
                '研发费加计扣除，研发费用按照实际发生额的75%在税前加计扣除，形成无形资产的，按照无形资产成本的175%在税前摊销。',
                '申请高新技术企业认定，所得税减按15%征收。']
        }
    }
];
export const SCHEDULES = [
    {
        title: '注册方案 & 股权架构设计',
        schedule: [
            {content: '经济普查', tip: '', date: '2019.3.31', executive: '公司负责人', complete: 'true'},
            {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.4.2', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '社保公积金年检', tip: '', date: '2019.5.31', executive: '公司负责人', complete: 'false'},
            {content: '工商年检', tip: '', date: '2019.6.31', executive: '易创顾问 徐蓉', complete: 'false'},
        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '创新型初创企业备案', tip: '申报智团项目必备', date: '2019.4.15', executive: '企业负责人', complete: 'false'},
            {content: '知识产权申请（未订购）', tip: '科技型项目申报的前提', date: ' 2019.5.1', executive: '易创知识产权部', complete: 'false'},
            {content: '撰写可行性分析报告（未订购）', tip: '为后续项目申报打好文件基础', date: '2019.6.1', executive: '易创项目申报部', complete: 'false'},
            {content: '研发费用补贴申请（未订购）', tip: '最高不超过支出额的5%给予补助', date: '2019.6.15', executive: '易创项目申报部', complete: 'false'},
            {content: '宁波市智团创业计划（未订购）', tip: '最高50万奖励', date: '2019.10.15', executive: '易创项目申报部', complete: 'false'},
            {content: '高新创业精英计划（未订购）', tip: '补贴50万-1000万', date: '2020.1.25', executive: '易创项目申报部', complete: 'false'},
            {content: '高新区优质型企业备案（未订购）', tip: '最高50万奖励', date: '2020.2.25', executive: '易创项目申报部', complete: 'false'},

        ]
    },
    {
        title: '融资计划',
        schedule: [
            {content: '优化商业融资计划书', tip: '', date: '2019.10.15', executive: '企业负责人', complete: 'false'},
            {content: '甬股交挂牌（未订购）', tip: '', date: '2019.11.30', executive: ' 易创项目申报部', complete: 'false'},
            {content: '申请天使引导基金', tip: '', date: '2019.12.15', executive: '企业负责人', complete: 'false'},
            {content: '约银行谈税金贷', tip: '', date: '2019.12.20', executive: ' 企业负责人', complete: 'false'},
            {content: '宁波创业担保贷款申请（未订购）', tip: '', date: '2020.3.5', executive: '易创项目申报部', complete: 'false'},
        ]
    },
    {
        title: '财税计划',
        schedule: [
            {content: '完成员工信息采集表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.10', executive: '企业负责人', complete: 'true'},
            {content: '出具社保补贴政策享受评估报告', tip: '符合条件，可享受2000元/人补贴', date: '2019.4.12', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '高企-高企申报评估与规划服务', tip: '生成规划报告', date: '2019.4.13', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-财务规范性辅导服务', tip: '规范报销/汇款/出入库/工资发放流程', date: '2019.4.14', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-首次研发项目立项辅导服务', tip: '生成研发项目立项计划表', date: '2019.4.15', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '一般纳税人2季度税收筹划', tip: '避免多交增值税', date: '2019.4.20', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '2季度企业所得税预估及筹划', tip: '避免多交增值税', date: '2019.4.20', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '业务招待费、广宣费税前扣除比例核算，进行所得税税收筹划', date: '2019.4.25', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '注册资本认缴时间确认及提醒', tip: '确保项目申报顺利进行', date: '2019.4.30', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对往来款，汇报应收应付及欠款', date: '2019.5.5', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '高企-首次跟进高企实施进度', tip: '出具高企流程规范性反馈报告', date: '2019.5.7', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-首次检测高企指标达标情况', tip: '出具高企指标检测报告', date: '2019.5.9', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-沟通研发项目实施情况', tip: '更新研发项目立项计划表', date: '2019.5.12', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '测算企业半年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.5.13', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核查企业印花税、房产税、城建税等小税种缴纳情况，并作汇报', tip: '规避企业涉税风险', date: '2019.6.12', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第一次预估', date: '2019.7.18', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对是否欠税', tip: '规避税务稽查风险', date: '2019.8.4', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '业务招待费、广宣费税前扣除比例核算，进行所得税税收筹划', date: '2019.9.19', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '对比税收与园区退税起征点', tip: '筹划放弃退税还是享受退税有利', date: '2019.9.25', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '检测注册资本金到位，到位后及时汇报并缴纳印花税', date: '2019.10.8', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '高企-第二次跟进高企实施进度', tip: '出具高企流程规范性反馈报告', date: '2019.10.12', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-第二次检测高企指标达标情况', tip: '出具高企指标检测报告', date: '2019.10.15', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-沟通研发项目实施情况', tip: '更新研发项目立项计划表', date: '2019.10.17', executive: '易创顾问 徐蓉', complete: 'false'},


            {content: '测算企业年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.11.20', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第二次预估', date: '2019.12.1', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对往来款，提醒股东及时还款', tip: '避免个税风险', date: '2019.12.4', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '定制年终奖发放策略，进行员工个人所得税税收筹划', date: '2019.12.10', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '预提费用冲销提醒', tip: '规避个税风险', date: '2019.12.15', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核算企业当年利润，进行企业所得税年度筹划', tip: '所得税第三次预估', date: '2019.12.17', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '高企-第三次跟进高企实施进度', tip: '出具高企流程规范性反馈报告', date: '2019.12.20', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '高企-第三次检测高企指标达标情况', tip: '出具高企指标检测报告', date: '2019.12.22', executive: '易创顾问 徐蓉', complete: 'false'},
        ]
    }
];
