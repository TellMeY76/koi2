import {RepoDetail} from '../model/report';

export const REPO_DETAILS: RepoDetail[] = [
    {
        name: '注册方案及股权架构设计', icon: 'business',
        description: '易创，让注册公司更容易！',
        statusLabel: '注册基本信息',
        status: ['公司名称：宁波应诺药业有限公司（待定）', '注册地址：宁波新材料创新中心东区1幢1号8-4-1',
            '注册资本：1000万（待定）', '经营范围：医药产品研发，生产，制造和销售',
            ' 股东信息：周平：610万元 61%，姜凤超  230万 23%，钟壁光 20万 2%，ZUYU GUO 90万 9%，WEI WU 50万 5% ', '法定代表人/董事长：周平 ；监事：王旭 '],
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
        status: ['创业类型：科技型，人才型', '注册地址：宁波新材料创新中心', '税务资格：小规模纳税人'],
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
            {content: '名称核准', tip: '', date: '2019.2.22', executive: '易创注册部 吴汀', complete: 'false'},
            {content: '注册地址申请', tip: '2个工作日', date: '2019.2.22', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: ' 商务部文件签字', tip: '委托书、外商投资企业设立承诺书', date: '2019.2.25', import: true, executive: '全体股东', complete: 'false'},
            {content: '提交公司注册资料', tip: '股东会决议、公司章程、商务部文件等', date: '2019.2.26', executive: '易创注册部 吴汀', complete: 'false'},
            {content: ' 审核通过后，签署纸质文书资料', tip: '股东签字并回寄', date: '2019.2.28', import: true, executive: '全体股东', complete: 'false'},
            {content: '提交纸质受理资料', tip: '提交单位：高新区市场监督管理局', date: '2019.3.4', executive: '易创注册部 吴汀', complete: 'false'},
            {content: '领取营业执照、刻制公章', tip: '', date: '2019.3.7', executive: ' 易创注册部 吴汀', complete: 'false'},
            {content: '银行开户', tip: '备选中国银行中山支行 ', date: ' 2019.3.8', import: true, executive: '法人本人', complete: 'false'},
            {content: '启动增资扩股变更手续', tip: '正常变更手续预计5个工作日', date: '2019.3.11', executive: '易创顾问部 何叶飞', complete: 'false'},
            {content: '增资扩股资料签字 ', tip: '', date: '2019.3.12', executive: '新老股东', complete: 'false'},

        ]
    },
    {
        title: '政策匹配',
        schedule: [
            {content: '科技型企业认定', tip: '园区退税翻倍', date: '2019', executive: '易创顾问 齐培培', complete: 'false'},
            {content: '优质型企业备案', tip: '最高50万奖励', date: '2019.4-5', executive: '易创申报 吴磊敏', complete: 'false'},
            {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.4-5', executive: '企业负责人', complete: 'false'},
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
            {content: '申请天使引导基金', tip: '', date: '2019.7.11', executive: '企业负责人', complete: 'false'},
            {content: '约银行谈税金贷', tip: '', date: '2019.11.27', executive: ' 企业负责人', complete: 'false'},
            {content: '宁波创业担保贷款申请', tip: '', date: '2019.12.15', executive: '易创申报 吴磊敏', complete: 'false'},
        ]
    },
    {
        title: '财税计划',
        schedule: [
            {content: '票据分类及整理 ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '打印银行回单对账单', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '税控盘抄税', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '增值税发票认证', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '计算当月应交增值税并汇报', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '把控票据的合规性，根据原始凭证进行账务处理', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '发现汽车类发票，提醒客户签订租赁合同 ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '确定研发项目名称，并做研发费用单独列支', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '折旧、摊销、长期待摊费用分摊表制作 ', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '核算确认材料/库存成本  ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '制作发送工资表', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '提示发放高温补贴', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '向客户汇报本月的税收及财务状况，发送财报数据', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '电子税务局各项税费申报', tip: '每月工作', date: '2019.2.22前', executive: '易创会计', complete: 'false'},
            {content: '自然人税收管理系统个税申报', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人', complete: 'false'},
            {content: '国地税税款扣缴', tip: '每月工作', date: '2019.2.22后', executive: '易创会计', complete: 'false'},
            {content: '社保人员增减', tip: '每月工作', date: '2019.2.23前', executive: '企业负责人', complete: 'false'},
            {content: '会计组长定期审账，审完修改', tip: '每月工作', date: '2019.2.28', executive: '易创会计', complete: 'false'},

            {content: '凭证打印、装订及交接 ', tip: '', date: '2019.12.31', executive: '易创会计', complete: 'false'},
            {content: '社保基数调整 ', tip: '', date: '2019.5', executive: '易创会计', complete: 'false'},
            {content: '所得税汇算清缴', tip: '', date: '2019.5', executive: '易创会计', complete: 'false'},
            {content: '工商年度公示', tip: '', date: '2019.6', executive: '企业负责人', complete: 'false'},
            {content: '公积金年检', tip: '', date: '2019.7', executive: '易创会计', complete: 'false'},
            {content: '公积金基数调整 ', tip: '', date: '2019.7', executive: '易创会计', complete: 'false'},
            {content: '社保年检 ', tip: '', date: '2019.7月底前', executive: '易创会计', complete: 'false'},
        ]
    }
];
