import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '注册方案及股权架构设计', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：宁波亿诺药业有限公司', '注册地址：宁波新材料创新中心东区1幢1号8-4-1',
            '注册资本：1052.6316万', '经营范围：药物研发',
             '法定代表人/董事长：周平'],
        suggest: '贵公司的需求为在3月15日之前完成中外合资企业的注册手续及后续的投资款到账，根据实际情况我们有以下建议供贵公司参考：',
        weAdvice: {
            label: '',
            contents: ['资本引才政策要求资本金到位的同时在工商信用网上查到投资方的股权信息，因此建议能在3月15日之前完成增资扩股手续更为稳妥；',
                '经易创测算，注册及增资扩股手续顺利完成最快时间需要17个工作日，我们只有通过提前准备并签署下一次变更需要的文件来缩短办理时间。但部分文件会做空白时间或者空白标题处理；',
                '公司主营业务为生物医药产品的研发生产销售，但生物医药生产销售需要经食药监部门前置审批后才能注册，一般办理时间在30个工作日以上，因此建议本次注册时，经营范围只写“生物技术研发。这样才可绕开审批，等以后再慢慢变更经营范围。']
        }
    },
    {
        name: '政策匹配及准备工作', icon: 'filing',
        description: '易创，让政策申请更容易！',
        statusLabel: '基本信息',
        status: ['法人户籍：武汉市', '人员结构：博士团队', '创业类型：科技型，人才型', '所属园区：新材料科技城'],
        suggest: '根据贵公司的情况，除了可以申请创业精英和资本引才外，我们还为您匹配了以下政策：',
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
        status: ['创业类型：科技型，人才型', '是否引入外部投资者：是'],
        suggest: '我们得知贵公司已有融资计划，对获得融资的企业由多项政策扶持，因此我们建议',
        weAdvice: {
            label: '',
            contents: ['建议贵公司去宁波股权交易所登记挂牌（甬股交新四板），挂牌甬股交不仅能获得挂牌授信，还能获得1万元-60万元的挂牌补贴。同时挂牌企业在未来做股权融资或银行贷款时，能获得投资额2%的补贴。',
                '与宁波市天使引导基金洽谈。获得引导基金能极大地方便后期各项项目申报',
                '用好更便宜的银行贷款政策。目前宁波的各大银行都有推出科技贷与税金贷，政府担保、信用贷款，年化利率5%左右，成本远低于股权融资。',
                '招用这两类人（宁波户籍劳动者、毕业5年内高校毕业生）银行贷款还有贴息补助，额度最高300万元。']
        }
    },
    {
        name: '财税计划及年检服务', icon: 'stats',
        description: '易创，让财税筹划更容易！',
        statusLabel: '基本信息',
        status: ['创业类型：科技型，人才型', '注册地址：宁波新材料创新中心', '税务资格：一般纳税人'],
        suggest: `对于贵司属于初创型和科技型的小微企业性质，在国家鼓励创新企业发展的情况下，您有多项税收减免政策可以享受，以下请知悉：`,
        weAdvice: {
            label: '',
            contents: ['自4月1日起，增值税税率发生重大变革，制造业等行业税率有16%将至13%。',
                '小型微利企业税收优惠,利润100万以下所得税减按5%，100万-300万减按10%。', '研发费用加计扣除，研发费用按照实际发生额的75%在税前加计扣除，形成无形资产的，按照无形资产成本的175%。']
        }
    }
];
export const SCHEDULES = [
    {
        title: '注册方案 & 股权架构设计',
        schedule: [
            {content: '名称核准', tip: '', date: '2019.2.22', executive: '易创注册部 吴汀', complete: 'true'},
            {content: '注册地址申请', tip: '2个工作日', date: '2019.2.22', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: ' 商务部文件签字', tip: '委托书、外商投资企业设立承诺书', date: '2019.2.25', import: true, executive: '全体股东', complete: 'true'},
            {content: '提交公司注册资料', tip: '股东会决议、公司章程、商务部文件等', date: '2019.2.26', executive: '易创注册部 吴汀', complete: 'true'},
            {content: ' 审核通过后，签署纸质文书资料', tip: '股东签字并回寄', date: '2019.2.28', import: true, executive: '全体股东', complete: 'true'},
            {content: '提交纸质受理资料', tip: '提交单位：高新区市场监督管理局', date: '2019.3.4', executive: '易创注册部 吴汀', complete: 'true'},
            {content: '领取营业执照、刻制公章', tip: '', date: '2019.3.7', executive: ' 易创注册部 吴汀', complete: 'true'},
            {content: '银行开户', tip: '备选中国银行中山支行 ', date: ' 2019.3.8', import: true, executive: '法人本人', complete: 'true'},
            {content: '启动增资扩股变更手续', tip: '正常变更手续预计5个工作日', date: '2019.3.11', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: '增资扩股资料签字 ', tip: '', date: '2019.3.12', executive: '新老股东', complete: 'true'},
            {content: '投资款确认 ', tip: '目前准备了三个方案，可随时咨询', date: '2019.4.30', executive: '全体股东', complete: 'false'},

        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '科技型企业认定', tip: '园区退税翻倍', date: '2019', executive: '易创顾问 齐培培', complete: 'true'},
            {content: '优质型企业备案', tip: '最高50万奖励', date: '2020.4', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.6', executive: '企业负责人', complete: 'false'},
            {content: '知识产权申请(未订购)', tip: '科技型项目申报的前提', date: ' 2019.5.20', executive: '订购', complete: 'false'},
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
            {content: '甬股交挂牌', tip: '', date: '2019.4.30 ', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '优化商业融资计划书', tip: '', date: '2019.6.13', executive: ' 企业负责人', complete: 'false'},
            {content: '申请天使引导基金', tip: '', date: '2019.7.11', executive: '企业负责人', complete: 'false'},
            {content: '约银行谈税金贷', tip: '', date: '2019.11.27', executive: ' 企业负责人', complete: 'false'},
            {content: '宁波创业担保贷款申请', tip: '', date: '2019.12.15', executive: '易创申报 吴磊敏', complete: 'false'},
        ]
    },
    {
        title: '财税计划',
        schedule: [
            {content: '检查企业汽车租赁有无续租', tip: '规避发票不合理入账风险 ', date: '2019.3.15', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: '2季度企业所得税预估及筹划 ', tip: '避免多交所得税 ', date: '2019.3.20', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: '完成员工信息采集表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.1', executive: '企业负责人', complete: 'true'},
            {content: '完成研发项目立项计划表填写 ', tip: '为政策享受、研发费用做准备 ', date: '2019.4.30', executive: '企业负责人', complete: 'true'},
            {content: '项目经费计划表 ', tip: '', date: '2019.4.30', executive: '企业负责人', complete: 'false'},
            {content: '出具政策享受评估报告 ', tip: '符合条件，可享受2000元/人补贴', date: '2019.4.2', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: '设置研发费用台账，便于加计扣除及研发补贴申请 ', tip: '10万研发费用节税3万', date: '2019.4.17', executive: '易创顾问部 何叶飞', complete: 'true'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.4.20', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '核对往来款，理清应收及欠款', tip: '防止企业资产流失 ', date: '2019.5.5', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '测算企业半年度税负率是否达标', tip: '规避企业涉税风险 ', date: '2019.5.13', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '核查企业印花税、房产税、城建税等小税种缴纳情况，并作汇报', tip: '规避企业涉税风险 ', date: '2019.6.12', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第一次预估 ', date: '2019.7.18', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '核对是否欠税', tip: '规避税务稽查风险 ', date: '2019.8.4', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '业务招待费、广宣费、三项经费税前扣除比例核算，进行所得税税收筹划 ', date: '2019.9.19', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '对比税收与园区退税起征点', tip: '筹划放弃退税还是享受退税有利', date: '2019.10.23', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '检测注册资本金到位，到位后及时汇报并缴纳印花税', date: '2019.11.12', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '测算企业年度税负率是否达标', tip: '规避企业涉税风险', date: '2019.11.20', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '预估年度所得税，修订当年税筹方案', tip: '所得税第二次预估', date: '2019.12.1', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '核对往来款，提醒股东及时还款', tip: '避免个税风险', date: '2019.12.4', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '定制年终奖发放策略，进行员工个人所得税税收筹划', date: '2019.12.20', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '预提费用冲销提醒', tip: '避免个税风险', date: '2019.12.23', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '核算企业当年利润，进行企业所得税年度筹划', tip: '所得税第三次预估', date: '2019.12.24', executive: '易创顾问部 何叶飞', complete: 'false'},
        ]
    }
];
