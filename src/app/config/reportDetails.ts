import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '注册方案及股权架构设计', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：宁波芮颂生物科技有限公司(查重已通过)', '注册地址：宁波 高新区 甬港现代铭楼',
            '注册资本：300万元 (20年到位)', '经营范围：生物技术开发；空气净化器及相关产品的研发与销售；电子产品、文化用品的销售；'],
        suggest: '根据我们的沟通，建议先成立一家一人有限公司，然后让外部投资者以投资人的形式增资进来。与此同时，我们去成立一个有限合伙形式的员工持股平台' +
            '，这样更有利于将来公司融资和争取各项政府补贴。\n 但是，一人有限责任公司也有潜藏的法律风险，那就是股东需要对公司债务承担连带清偿责任。因此我们建议:',
        weAdvice: {
            label: '',
            contents: ['首先，尽快完成一人有限责任公司的公司注册。预计时间七个工作日。目前还需补充一些基本信息。',
                '在春节之后，引入投资者，完成公司增资扩股变更手续，预计完成变更时间10个工作日。', '设立员工持股平台，可确定核心员工，也可先由至少两位高' +
                '管代持，预计注册时间10个工作日。']
        }
    },
    {
        name: '政策匹配及准备工作', icon: 'filing',
        description: '易创，让政策申请更容易！',
        statusLabel: '基本信息',
        status: ['法人户籍：宁波市区', '人员结构：本科1人，硕士1人（计划引进）', '创业类型：科技型，生物科技', '所属园区：甬港现代创业园', '知识产权：计划申请发明专利2项'],
        suggest: '宁波市为鼓励大众创业，万众创新，对于初创的中小企业制定了一系列普惠性政策。根据您的需求与现状，我们为您匹配了以下创业政策：',
        weAdvice: {
            label: '',
            wordValues: [{word: '创业者社会保险补贴', value: '最高补助3万元'}, {word: '创业带动就业补贴', value: '最高10万元'},
                {word: '发明专利资助', value: '高新区奖励3.8万'}, {word: '宁波市智团创业计划', value: '最高奖励50万元'}, {word: '园区退税奖励', value: '最高退50%'},
                {word: '宁波市创业担保贷款', value: '最高额度30万元'}, {word: '宁波小微企业创业创新服务券', value: '最高抵扣5000元'}, {word: '创业场租资助', value: '每年最高补贴6000元'},
                {word: '小微企业残保金免征', value: '少于30人'}, {word: '宁波市科技创新券', value: '2万元'}, {word: '宁波市国内发明专利年费', value: '补贴年费的30%-50%'},
            ]
        }
    },
    {
        name: '融资计划及准备工作', icon: 'list-box',
        description: '易创，让融资贷款更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，生物科技', '是否引入外部投资者：是'],
        suggest: '在您计划踏入资本市场，准备股权融资的那一刻，几个提前规范必须注意：知识产权、员工社保、财务审计，其次才是系统的融资规划，根据企业阶段' +
            '匹配不同类型的资本机构：天使投资人、VC、PE等，同时用好国家、地区对初创企业的扶持政策，有融又有奖，岂不更好？因此我们建议:',
        weAdvice: {
            label: '',
            contents: ['实施新四板（甬股交）挂牌，不仅挂牌费有补贴，获得融资、银行贷款还有额外奖励。', '安利一款产品：建设银行“云稅贷”，' +
            '纳税10万元，可贷100万，年化5.52%。',
                '招用这两类人（宁波户籍劳动者、毕业5年内高校毕业生）银行贷款还有贴息补助，额度最高300万元。']
        }
    },
    {
        name: '财税计划及年检服务', icon: 'stats',
        description: '易创，让财税筹划更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，生物科技', '注册地址：宁波 高新区 甬港现代铭楼', '税务资格：小规模纳税人', '税种行业：商业'],
        suggest: `小规模纳税人好处多多，增值税、所得税的特殊优待可一定要用好:1.月销售额在10万元以下（或季度30万元以下）享受增值税免征政策；2.小型微利企
    业，利润100万以下所得税减按5%，100万-300万减按10%。不过，就算超过销售限额，增值税税点也只有3%，但也请密切关注，因为年销售额超过500万元就要强制
    认定为一般纳税人了，到时候可是16%的税点，如果成本费用可抵扣项不多，这个纳税金额还是挺惊人的！因此我们建议:`,
        weAdvice: {
            label: '',
            contents: ['规范研发费用，加计扣除也可降低税收成本。', '提前规划高新技术企业，所得税减按15%。',
                '一套聪明的人力资源优化方案，社保个税也能双管齐下。']
        }
    }
];
export const SCHEDULES = [
    {
        title: '注册方案 & 股权架构设计',
        schedule: [
            {content: '名称核准', tip: '', date: '2019.2.14', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '注册地址申请', tip: '2个工作日', date: '2019.2.17', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '股东签字', tip: '股东决定、章程，在线签署', date: '2019.2.17', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '领取证照', tip: '领取营业执照，刻制公章', date: '2019.2.21', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '银行开户', tip: '招商银行会展中心支行', date: '2019.2.22', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '税务落户', tip: '小规模纳税人', date: '2019.2.25', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '增资扩股，完成投资人引入', tip: '', date: '2019.3.10', executive: '易创注册部 陈瑜波', complete: 'ture'},
            {content: '设立员工持股平台', tip: '股权投资合伙有限企业', date: ' 2019.8.20', executive: '易创注册部 陈瑜波', complete: 'false'},
            {content: '其他安排事项', tip: '', date: ' ...', executive: '...', complete: 'false'},
        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '科技型企业认定', tip: '园区退税翻倍', date: '2019', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '优质型企业备案', tip: '最高50万奖励', date: '2019.4-5', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.4-5', executive: '企业负责人', complete: 'false'},
            {content: '优质产品申报', tip: '政府采购目录', date: '2019.4-5', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '试产新产品备案', tip: '每产品2000', date: '2019.4-5', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '知识产权申请', tip: '科技型项目申报的前提', date: ' 2019.4.21', executive: '易创知产 沈佳璐', complete: 'false'},
            {content: '撰写可行性分析报告', tip: '为后续项目申报打好文件基础', date: '2019.4.24', executive: '企业负责人', complete: 'false'},
            {content: '创新型初创企业备案', tip: '申报智团项目必备', date: '2019.4.20', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '创业场租补贴', tip: '年租金的20%,每年最高6000', date: '2019.6', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '研发费用补贴申请', tip: '最高不超过支出额的5%给予补助', date: '2019.6', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '智团项目申报', tip: '最高50万元补贴', date: '2019.8', executive: '易创申报 吴磊敏', complete: 'false'},
        ]
    },
    {
        title: '融资计划',
        schedule: [
            {content: '甬股交挂牌', tip: '', date: '2019.4.14 ', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '优化商业融资计划书', tip: '', date: '2019.6.13', executive: ' 企业负责人', complete: 'false'},
            {content: '参加138期无咖“资本相亲会”', tip: '', date: ' 2019.6.28', executive: ' 企业负责人', complete: 'false'},
            {content: '申请天使引导基金', tip: '', date: '2019.7.11', executive: '企业负责人', complete: 'false'},
            {content: '约银行谈税金贷', tip: '', date: '2019.11.27', executive: ' 企业负责人', complete: 'false'},
            {content: '宁波创业担保贷款申请', tip: '', date: '2019.12.15', executive: '易创申报 吴磊敏', complete: 'false'},
        ]
    },
    {
        title: '财税计划',
        schedule: [
            {content: '检查企业汽车租赁有无续租', tip: '规避发票不合理入账风险 ', date: '2019.3.15', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '小规模纳税人2季度税收筹划 ', tip: '避免多交增值税 ', date: '2019.3.20', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '2季度企业所得税预估及筹划 ', tip: '避免多交所得税 ', date: '2019.3.20', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '完成员工信息采集表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.1', executive: '企业负责人', complete: 'false'},
            {content: '完成研发项目立项计划表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.1', executive: '企业负责人', complete: 'false'},
            {content: '出具政策享受评估报告 ', tip: '符合条件，可享受2000元/人补贴', date: '2019.4.2', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '设置研发费用台账，便于加计扣除及研发补贴申请 ', tip: '10万研发费用节税3万', date: '2019.4.17', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.4.20', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '核对往来款，理清应收及欠款', tip: '防止企业资产流失 ', date: '2019.5.5', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '测算企业半年度税负率是否达标', tip: '规避企业涉税风险 ', date: '2019.5.13', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '核查企业印花税、房产税、城建税等小税种缴纳情况，并作汇报', tip: '规避企业涉税风险 ', date: '2019.6.12', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第一次预估 ', date: '2019.7.18', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '核对是否欠税', tip: '规避税务稽查风险 ', date: '2019.8.4', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.9.19', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '对比税收与园区退税起征点', tip: '筹划放弃退税还是享受退税有利', date: '2019.10.23', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '检测注册资本金到位，到位后及时汇报并缴纳印花税', date: '2019.11.12', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '测算企业年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.11.20', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第二次预估', date: '2019.12.1', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '核对往来款，提醒股东及时还款', tip: '避免个税风险', date: '2019.12.4', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '定制年终奖发放策略，进行员工个人所得税税收筹划', date: '2019.12.20', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '预提费用冲销提醒', tip: '避免个税风险', date: '2019.12.23', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '核算企业当年利润，进行企业所得税年度筹划', tip: '所得税第三次预估', date: '2019.12.24', executive: '易创顾问 齐培培', complete: 'false'},
        ]
    }
];
