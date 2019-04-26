import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '注册方案及股权架构设计', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：征辕科技（宁波）有限公司', '注册地址：高新区 双创中心 创业大厦',
            '注册资本：500万', '行业类型：科技型，交通运输智能化系统研发',
             '法定代表人/董事长：李伟民 （上海）'],
        suggest: '根据我们的沟通，我们已知悉您后期有从事进出口业务计划，且在公司设立之初营业执照经营范围已有体现，但是进出口权证尚未办理，<b>根据《中华' +
            '人民共和国对外贸易法(2004年修订)》规定，“从事货物进出口或者技术进出口的对外贸易经营者，应当向国务院对外贸易主管部门办理备案登记”</b>。换言' +
            '之，只要在中国境内从事自营或代理进出口的企业，均需办理完进出口权后，方可正常开展对外贸易活动。没有许可证，一律不准进出口。\n      根据公司实际情况我们有以下建议请您参考：',
        weAdvice: {
            label: '',
            contents: ['结合进出口业务开展规划，实施进出口权证办理，预计办理时长7个工作日，代办服务费：2000元，请您确认并务必提前告知。',
                '针对外贸公司并非只有自营进出口单一途径，在前期出货量少，订单不稳定情况下，可以通过委托外贸代理公司代为出口，委托外贸代理的好处在于' +
                '可以帮助处理报关数据、收结外汇和办理退税，在业务起步阶段可以适当考虑。'],
            others: ''
        }
    },
    {
        name: '政策匹配及准备工作', icon: 'filing',
        description: '易创，让政策申请更容易！',
        statusLabel: '基本信息',
        status: ['人员结构：硕士3人', '创业类型：科技型，交通运输智能化系统研发', '所属园区：高新区 双创中心 创业大厦', '知识产权：发明专利正在申请1项'],
        suggest: '据了解，您未来有申报“3315”人才计划，但根据3315政策文件及历年来易创申报成功案例经验，若您要申报该项目，需要在人员架构上作重大调整，其中包括公' +
            '司法人一般是博士学历背景，项目核心团队全部为硕士及以上学历，并且法人股份占比也需达到条件要求。另人才项目除了3315外，还有“高新创业精英计划”项目，补助额度50' +
            '万-1000万，公司实际情况与该政策条件比较匹配，建议尝试申报。\n' +
            '       除上述政策外，我们还为您匹配了以下创业政策：',
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
        status: ['创业类型：科技型，交通运输智能化系统研发', '是否引入外部投资者：-'],
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
        name: '财税计划及年检服务', icon: 'stats',
        description: '易创，让财税筹划更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，交通运输智能化系统研发', '注册地址：高新区 双创中心 创业大厦', '税务资格：一般纳税人', '税种行业：研发制造型企业', '企业需求：高新技术企业财务服务'],
        suggest: `自贵司成立至今已有半年有余，对于贵司属于初创型和科技型的小微企业性质，在国家鼓励创新企业发展的情况下，您有多项税收减免政策可以享受，以下请知悉：`,
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
            {content: '申请材料准备，完成签字盖章', tip: '', date: '2019.4.24', executive: ' 易创注册部 陈瑜波', complete: 'false'},
            {content: '外经贸办理《对外贸易经营者备案登记证》', tip: '', date: '2019.4.25', executive: ' 易创注册部 陈瑜波', complete: 'false'},
            {content: '检验检疫局办理自理报检登记', tip: '', date: '2019.4.25', executive: ' 易创注册部 陈瑜波', complete: 'false'},
            {content: '外汇局办理外汇登记', tip: '', date: '2019.4.26', executive: ' 易创注册部 陈瑜波', complete: 'false'},
            {content: '银行开立外汇账户', tip: '', date: '2019.4.28', executive: ' 易创注册部 陈瑜波', complete: 'false'},
            {content: '海关办理电子口岸', tip: '', date: '2019.4.28', executive: ' 易创注册部 陈瑜波', complete: 'false'},
        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '创新型初创企业备案', tip: '申报智团项目必备', date: '2018.10.24', executive: '企业负责人', complete: 'true'},
            {content: '科技型企业认定', tip: '园区退税资格确认', date: '2019.3.24', executive: '易创申报 吴磊敏', complete: 'true'},
            {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.5.15', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '知识产权申请（未订购）', tip: '科技型项目申报的前提', date: ' 2019.6.1', executive: '易创知识产权部', complete: 'false'},
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
            {content: '完成员工信息采集表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.1.31', executive: '企业负责人', complete: 'true'},
            {content: '完成研发项目立项计划表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.3.15', executive: '企业负责人', complete: 'true'},
            {content: '设置研发费用台账，便于加计扣除及研发补贴申请 ', tip: '10万研发费用节税3万', date: '2019.3.15', executive: '易创顾问 徐蓉', complete: 'true'},

            {content: '1季度个人所得税筹划', tip: '避免多交个税', date: '2019.3.29', executive: '易创顾问 徐蓉', complete: 'true'},
            {content: '一般纳税人2季度税收筹划', tip: '避免多交增值税', date: '2019.4.29', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '2季度企业所得税预估及筹划', tip: '避免多交增值税', date: '2019.4.29', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '出具社保补贴政策享受评估报告', tip: '符合条件，可享受2000元/人补贴', date: '2019.5.9', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '业务招待费、广宣费税前扣除比例核算，进行所得税税收筹划', date: '2019.5.10', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '注册资本认缴时间确认及提醒', tip: '确保项目申报顺利进行', date: '2019.5.12', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对往来款，汇报应收应付及欠款', date: '2019.5.15', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '测算企业半年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.5.17', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核查企业印花税、房产税、城建税等小税种缴纳情况，并作汇报', tip: '规避企业涉税风险', date: '2019.6.12', executive: '易创会计 胡静', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第一次预估', date: '2019.7.18', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对是否欠税', tip: '规避税务稽查风险', date: '2019.8.4', executive: '易创会计 胡静', complete: 'false'},

            {content: '业务招待费、广宣费税前扣除比例核算，进行所得税税收筹划', date: '2019.9.19', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '对比税收与园区退税起征点', tip: '筹划放弃退税还是享受退税有利', date: '2019.10.23', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '检测注册资本金到位，到位后及时汇报并缴纳印花税', date: '2019.11.12', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '测算企业年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.11.20', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第二次预估', date: '2019.12.1', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核对往来款，提醒股东及时还款', tip: '避免个税风险', date: '2019.12.4', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '定制年终奖发放策略，进行员工个人所得税税收筹划', date: '2019.12.20', executive: '易创顾问 徐蓉', complete: 'false'},

            {content: '预提费用冲销提醒', tip: '规避个税风险', date: '2019.12.23', executive: '易创顾问 徐蓉', complete: 'false'},
            {content: '核算企业当年利润，进行企业所得税年度筹划', tip: '所得税第三次预估', date: '2019.12.24', executive: '易创顾问 徐蓉', complete: 'false'},


        ]
    }
];
