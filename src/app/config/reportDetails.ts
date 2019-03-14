import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '股权架构设计', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：宁波鸿朗环保科技有限公司', '公司性质：有限公司', '注册地址：宁波 高新区 浙大科技园',
            '注册资本：100万元', '.行业类型：科技型，环保技术'],
        suggest: '根据我们的沟通，我们已知悉您近期有变更成一人有限公司计划，为此我们作如下建议：',
        weAdvice: {
            label: '',
            contents: null,
            contentsList: [{
                main: '1、二人有限公司与一人有限存在巨大差异，您务必知悉：',
                children: ['二人有限公司股东对其认缴出资额承担有限责任；', '一人有限责任公司因公司财产与个人财产不能明确区分，可能对公司债务承担连带清偿责任']
            }, {main: '2、股权变更同时，变更您在公司的监事职务。', children: []}]
        }
    },
    {
        name: '政策匹配及准备工作', icon: 'filing',
        description: '易创，让政策申请更容易！',
        statusLabel: '基本信息',
        status: ['法人户籍：宁波', '创业类型：科技型，环保技术', '所属园区：浙大科技园', '知识产权：计划申请发明专利1-2项'],
        suggest: '宁波市为鼓励大众创业，万众创新，对于初创的中小企业制定了一系列普惠性政策。根据您的需求与现状，我们为您匹配了以下创业政策:',
        weAdvice: {
            label: '',
            wordValues: [{word: '创业带动就业补贴', value: '最高10万元'}, {word: '招用高校毕业生社保补贴', value: '每人每月770元'},
                {word: '发明专利资助', value: '高新区奖励3.8万'}, {word: '宁波市国内发明专利年费', value: '补贴年费的30%-50%'}, {word: '园区退税奖励', value: '最高退50%'},
                {word: '宁波市科技创新券', value: '2万元'}, {word: '宁波小微企业创业创新服务券', value: '最高抵扣5000元'}, {word: '高新区级产学研合作项目', value: '最高30万元'}
            ]
        }
    },
    {
        name: '融资计划及准备工作', icon: 'list-box',
        description: '易创，让融资贷款更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，环保技术', '是否引入外部投资者：-'],
        suggest: '本公司目前暂无融资计划',
        weAdvice: {
            label: '',
            contents: []
        }
    },
    {
        name: '财税计划及年检服务', icon: 'stats',
        description: '易创，让财税筹划更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，环保技术', '注册地址：宁波 高新区 浙大科技园', '税务资格：小规模纳税人', '税种行业：服务'],
        suggestList: ['小规模纳税人好处多多，增值税、所得税的特殊优待可一定要用好:', '1.月销售额在10万元以下（或季度30万元以下）' +
        '享受增值税免征政策；', '2.小型微利企业，利润100万以下所得税减按5%，100万-300万减按10%。', '不过，就算超过销售限额，增值税税点也只有3%，' +
        '但也请密切关注，因为年销售额超过500万元就要强制认定为一般纳税人了，到时候可是16%的税点，如果成本费用可抵扣项不多，这个纳税金额还是挺惊人的！' +
        '因此我们建议:'],
        suggest: '',
        weAdvice: {
            label: '',
            contents: ['规范列支研发费用，加计扣除也可降低税收成本；', '提前做好销售预判，避免不必要税金产生']
        }
    }
];
export const SCHEDULES = [
    {
        title: '股改方案 & 股权架构设计',
        schedule: [
            {content: '股权转让书、公司新章程、决议编制 ', tip: '', date: '2019.4.2', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '股权转让书、公司新章程、决议签字', tip: '', date: '2019.4.15', executive: ' 企业负责人', complete: 'false'},
            {content: '税务局完税证明开具', tip: '', date: '2019.4.17', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '工商股权变更材料提交', tip: '', date: '2019.4.19', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '领取新营业执照', tip: '', date: '2019.4.25', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '银行公司信息变更', tip: '', date: '2019.4.27', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '税务局公司信息变更', tip: '', date: '2019.4.28', executive: '易创注册部 陈瑜波', complete: 'false'},
        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '科技型企业认定(未订购)', tip: '园区退税翻倍', date: '2019.4.1', executive: '订购', complete: 'false'},
            {content: '优质型企业备案(未订购)', tip: '最高50万奖励', date: '2019.4.1', executive: '订购', complete: 'false'},
            {content: '创新券网站注册备案(未订购)', tip: '财务费用减免5000', date: '2019.5.1', executive: '订购', complete: 'false'},
            {content: '知识产权申请(未订购)', tip: '科技型项目申报的前提', date: ' 2019.5.1', executive: '订购', complete: 'false'},
            {content: '撰写可行性分析报告(未订购)', tip: '为后续项目申报打好文件基础', date: '2019.6.1', executive: '订购', complete: 'false'},
            {content: '创新型初创企业备案(未订购)', tip: '申报智团项目必备', date: '2019.7.1', executive: '订购', complete: 'false'},
            {content: '研发费用补贴申请(未订购)', tip: '最高不超过支出额的5%给予补助', date: '2019.9.1', executive: '订购', complete: 'false'},
            {content: '宁波科技大市场平台会员注册(未订购)', tip: '产学研申报的前提', date: '2019.10.1', executive: '订购', complete: 'false'},
        ]
    },
    {
        title: '融资计划',
        schedule: []
    },
    {
        title: '财税计划',
        schedule: [
            {content: '检查企业汽车租赁有无续租', tip: '规避发票不合理入账风险 ', date: '2019.3.15', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '小规模纳税人2季度税收筹划 ', tip: '避免多交增值税 ', date: '2019.3.20', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '2季度企业所得税预估及筹划 ', tip: '避免多交所得税 ', date: '2019.3.20', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '完成员工信息采集表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.1', executive: '企业负责人', complete: 'false'},
            {content: '完成研发项目立项计划表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.1', executive: '企业负责人', complete: 'false'},
            {content: '出具政策享受评估报告 ', tip: '符合条件，可享受2000元/人补贴', date: '2019.4.2', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '设置研发费用台账，便于加计扣除及研发补贴申请 ', tip: '10万研发费用节税3万', date: '2019.4.17', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.4.20', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '核对往来款，理清应收及欠款', tip: '防止企业资产流失 ', date: '2019.5.5', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '测算企业半年度税负率是否达标', tip: '规避企业涉税风险 ', date: '2019.5.13', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '核查企业印花税、房产税、城建税等小税种缴纳情况，并作汇报', tip: '规避企业涉税风险 ', date: '2019.6.12', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第一次预估 ', date: '2019.7.18', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '核对是否欠税', tip: '规避税务稽查风险 ', date: '2019.8.4', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.9.19', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '对比税收与园区退税起征点', tip: '筹划放弃退税还是享受退税有利', date: '2019.10.23', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '检测注册资本金到位，到位后及时汇报并缴纳印花税', date: '2019.11.12', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '测算企业年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.11.20', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第二次预估', date: '2019.12.1', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '核对往来款，提醒股东及时还款', tip: '避免个税风险', date: '2019.12.4', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '定制年终奖发放策略，进行员工个人所得税税收筹划', date: '2019.12.20', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '预提费用冲销提醒', tip: '避免个税风险', date: '2019.12.23', executive: '易创会计 谢琴静', complete: 'false'},
            {content: '核算企业当年利润，进行企业所得税年度筹划', tip: '所得税第三次预估', date: '2019.12.24', executive: '易创会计 谢琴静', complete: 'false'},
        ]

    }
];
