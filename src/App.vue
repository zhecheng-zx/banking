<template>
  <div id="app">
    <div class="site-nav header--fixed">
      <div class="container">
        <p class="pull-left nav-tips">客服电话：400 2324 4523（周一至周五 AM9:00-PM18:00）</p>
        <p class="pull-right login-link">
          <router-link v-if="isLogin&&userName" to="/accountManager">您好，<span>{{ userName }}</span></router-link>
          <a href="javascript:void(0);" v-if="isLogin&&userName" @click="logout()">退出</a>
          <router-link v-else to="/">您好，欢迎来到大数据智能决策服务平台</router-link>
        </p>
      </div>
    </div>
    <div class="navbar header header--fixed">
      <div class="container">
        <div class="navbar-header logo">
          <router-link to="/index" v-if="isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
          <router-link to="/login" v-if="!isLogin" exact class="navbar-brand"><img src="/public/images/logo.png" /><span>金融大数据智能决策服务平台</span></router-link>
        </div>
        <ul v-if="isLogin&&userName" class="nav navbar-nav navbar-right">
          <li><router-link to="/antiFraud">反欺诈</router-link></li>
          <li><router-link to="/creditRating">信用评估</router-link></li>
          <li><router-link to="/postLoan">贷后风险监测</router-link></li>
          <li><router-link to="/riskOpinion">风险舆情</router-link></li>
          <li><router-link to="/precisionMarketing">精准营销</router-link></li>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="wrapper mt107"></router-view>
    </transition>
    <div class="footer">
      <div class="container">
        <p>联系我们</p>
        <p>4000-617-888</p>
        <p>工作时间：周一至周五8:30-18:00</p>
        <p>技术支持： support@huishu.com.cn  商务合作： liyan@huishu.com.cn</p>
      </div>
    </div>
    <!-- 免责条款 -->
    <div class="modal fade" id="statement" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden=”true” data-backdrop=”static”>
      <div class="modal-dialog">
        <h3 >免责条款</h3>
        <div class="content">
          <p>本服务条款是中科点击大数据征信平台（ http://xin.huishu.com.cn 以下称为“本网站”）的经营者中科点击（北京）科技有限公司（以下简称为“中科点击”），与用户（下称为“您”），共同缔结的对双方具有约束力的有效契约。<br/>中科点击向用户提供本网站上所展示的产品与服务（下称“中科点击服务”、“本服务”），并将不断更新服务内容，最新的中科点击服务以本网站上的相关产品的页面展示以及向用户实际提供的为准。</p>
          <p class="title">1.总则</p>
          <p>1.1 您确认已经充分阅读、理解并接受本服务条款的全部内容，一旦您选择“我已阅读”即表示您同意遵循本服务条款之所有约定。<br/>1.2 您同意：中科点击有权随时对本服务条款及相应的服务规则内容进行单方面的变更，并有权以消息推送公布，而无需另行单独通知您；若您在本服务条款内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议内容，也将遵循修改后的条款内容使用本服务；若您不同意修改后的服务条款，您应立即停止使用本服务。</p>
          <p class="title">2.账户</p>
          <p>2.1 账户安全 <br/>2.1.1 本网站有权对您的注册资料进行审查，对存在任何问题或者怀疑的注册资料，本网站有权发出通知询问您并要求您作出解释、改正。若网站后台审核未通过，本网站有权拒绝您的注册申请户禁止为您提供某些服务。<br/>2.1.2 您须自行负责对您的账户和密码保密，且须对您在该登录名和密码下发生的所有操作（包括但不限于信息披露、账户操作行为、或数据查询等）承担责任。您同意：(a)如发现任何人未经授权使用您的平台账户和密码，或发生违反保密规定的任何其他情况，您会立即通知中科点击，并授权中科点击将该信息同步给大数据征信网站；及(b)确保您在每个上网时段结束时，以正确步骤离开网站。中科点击不能也不会对因您未能遵守本款规定而发生的任何损失或损毁负责。您理解中科点击对您的请求采取行动需要合理时间，中科点击对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。<br/>
            2.1.3 除非有法律规定或司法裁定，且征得中科点击的同意，否则，您的登录帐号和密码不得以任何方式转让、赠与或继承（与账户相关的财产权益除外）。<br/>2.1.4 您理解并同意，中科点击有权了解您使用本网站产品及服务的真实背景及目的，有权要求您如实提供真实、全面、准确的信息；如果中科点击有合理理由怀疑您提供的信息不真实、您进行虚假交易，或您的行为违反中科点击的网站规则的，中科点击有权暂时或永久限制您账户下所使用的所有产品或服务的部分或全部功能。<br/>2.1.5 您理解并同意，基于运行和交易安全的需要，中科点击有权暂时停止或者限制您账号下部分或全部的资金支付功能，中科点击将通过邮件、站内信、短信或电话等方式通知您，您应及时予以关注并按照程序进行申诉等后续操作。
            <br/>2.1.6 您理解并同意，中科点击有权按照国家司法、行政、军事、安全等机关（包括但不限于公安机关、检察机关、法院、海关、税务机关、安全部门等）的要求对您的个人信息及在本网站的资金、交易及账户等进行查询、冻结或扣划。</p>
          <p>2.2 账户注销 <br/>2.2.1 中科点击保留在您违反国家、地方法律法规规定或违反本服务条款的情况下，中止或终止为您提供部分或全部服务、直至注销中科点击账户的权利。 <br/>2.2.2登录名的注销
            <br/>2.2.2.1 您理解并同意，如您连续12个月未使用您的邮箱、手机或本网站认可的其他方式和密码登录过本网站，且您的账户下不存在任何未到期的服务，中科点击有权注销您的登录名，您将不能再登录中科点击网站。
            <br/>2.2.2.2 您同意并授权中科点击网站，如您在网站中有欺诈或严重违规行为，您的中科点击登录名可能被注销，被注销后您不能再登录中科点击网站，中科点击网站服务同时终止。 <br/> 2.2.3 您保证不会采取任何影响、损害或可能影响、损害中科点击网站合法权益。
            <br/>您认可中科点击有权在您违反上述约定时有权终止向您提供服务，即您将不能再登录中科点击网站，服务也将同时终止。</p>
          <p class="title">3、网站服务使用守则</p>
          <p>为有效保障您使用本服务的合法权益，您理解并同意接受以下规则： <br/>3.1 您通过包括但不限于以下方式向中科点击发出的指令，均视为您本人的指令，不可撤回或撤销，您应自行对中科点击执行前述指令所产生的任何结果承担责任。<br/>3.1.1 通过您的中科点击账户和密码进行的所有操作；
            <br/>3.1.2 通过与您的账号绑定的手机号码向中科点击发送的全部信息；<br/>3.1.3 通过与您的账号绑定的其他硬件、终端、软件、代号、编码、代码、其他账户名等有形体或无形体向中科点击发送的信息；<br/>3.1.4 其他中科点击与您约定或中科点击认可的其他方式。<br/>
            3.2 您在使用本服务过程中，本服务条款内容、页面上出现的关于交易操作的提示或中科点击发送到您手机的信息（短信或电话等）内容是您使用本服务的相关规则，您使用本服务即表示您同意接受本服务的相关规则。您了解并同意中科点击有权单方修改服务的相关规则，而无须征得您的同意，服务规则应以您使用服务时的页面提示（或发送到该手机的短信或电话等）为准，您同意并遵照服务规则是您使用本服务的前提。<br/> 3.3 中科点击可能会以电子邮件（或发送到您手机的短信或电话等）方式通知您服务进展情况，但中科点击不保证您能够收到或者及时收到该邮件（或发送到该手机的短信或电话等），且不对此承担任何后果。因此，在服务过程中您应当及时登录到本网站查看和进行操作。因您没有及时查看和对服务状态进行修改或确认或未能提交相关申请而导致的任何纠纷或损失，中科点击不负任何责任。<br/>3.4 您授权中科点击可以通过向第三方审核您的身份和资格，取得您使用本服务的相关资料。<br/>
            3.5 在您开始使用中科点击的某一产品或服务前，可能需要和中科点击就这一产品或服务签订单独的服务协议。您只有在接受该服务协议的全部内容后方可使用该产品或服务；如您不同意该服务协议的部分或者全部的，请您不要进行后续操作。<br/>3.6 在您使用中科点击服务时，中科点击有权依照相应的产品/服务收费介绍/订单/相关协议向您收取服务费用。中科点击拥有制订及调整服务费之权利，具体服务费用以您使用本服务时页面上所列之收费方式公告或您与中科点击达成的其他书面协议为准。<br/>3.7 关于第三方
            <br/>3.7.1 如果您通过使用本服务，将获取使用来自第三方的任何产品或服务，您还可能受限于该等第三方的相关条款和条件，中科点击对此不予过问亦不承担任何责任，本服务条款不影响您与该第三方的法律关系。<br/> 3.7.2 您确认并同意，中科点击的各关联公司均为本服务条款的第三方受益人，且中科点击关联公司有权直接强制执行并依赖本服务条款中授予其利益的任何规定。除此之外，任何第三方均不得作为本服务条款的第三方受益人。</p>
          <p class="title">4、 您的权利和义务</p>
          <p>4.1 您有权利享受中科点击提供的互联网技术和信息服务，并有权利在接受中科点击提供的服务时获得中科点击的技术支持、咨询等服务，服务内容详见本网站相关产品介绍。<br/>4.2 您保证不会利用技术或其他手段破坏或扰乱本网站及中科点击其他的网站。<br/>4.3 您应尊重中科点击及其他第三方的知识产权和其他合法权利，并保证在发生侵犯上述权益的违法事件时尽力保护中科点击及其股东、雇员、合作伙伴等免于因该等事件受到影响或损失；中科点击保留您侵犯中科点击合法权益时终止向您提供服务并不退还任何款项的权利。<br/>4.4 对由于您向中科点击提供的联络方式有误以及您用于接受中科点击邮件的电子邮箱安全性、稳定性不佳而导致的一切后果，您应自行承担责任，包括但不限于因您未能及时收到中科点击的相关通知而导致的后果和损失。<br/>
            4.5您保证： <br/>4.5.1.您使用中科点击产品或服务时将遵从国家、地方法律法规、行业惯例和社会公共道德，不会利用中科点击提供的服务进行存储、发布、传播如下信息和内容：违反国家法律法规政策的任何内容（信息）；违反国家规定的政治宣传/新闻信息；涉及国家秘密/安全的信息；封建迷信/淫秽、色情、下流的信息或教唆犯罪的信息；博彩有奖、赌博游戏；违反国家民族和宗教政策的信息；妨碍互联网运行安全的信息；侵害他人合法权益的信息/其他有损于社会秩序、社会治安、公共道德的信息或内容;您同时承诺不得为他人发布上述不符合国家规定/本服务条款约定的信息内容提供任何便利，包括但不限于设置URL、BANNER链接等;<br/>4.5.2. 使用中科点击产品或服务时，应遵守您与中科点击签订的服务条款、中科点击在http://xin.huishu.com.cn相关页面上的管理规范、流程、服务说明、价格说明和您确认同意的订购页面的内容，包括但不限于：<br/>4.5.2.1. 您应按时付款；<br/>4.5.2.2. 不应出现任何破坏或试图破坏网络安全的行为等；<br/>4.5.3. 您以及您的关联方不是任何国家，国际组织或者地域实施的贸易限制，制裁或者其他法律限制的对象。<br/>如您违反上述保证，中科点击除有权根据相关服务条款采取删除信息、中止服务、终止服务的措施，并有权限制您账户如新购产品或服务等部分或全部功能，如因您上述行为给中科点击造成损失的，您应予赔偿。<br/>
          </p>
          <p class="title">5、 中科点击的权利和义务</p>
          <p>5.1 中科点击应根据您选择的服务以及交纳款项的情况向您提供合格的网络技术和信息服务。 <br/>5.2 中科点击承诺对您资料采取对外保密措施，不向第三方披露您资料，不授权第三方使用您资料，除非：
            <br/>5.2.1 依据本服务条款或者您与中科点击之间其他服务协议、合同、在线条款等规定可以提供；<br/>5.2.2 依据法律法规的规定应当提供； <br/>5.2.3 行政、司法等职权部门要求中科点击提供；<br/>5.2.4 您同意中科点击向第三方提供；<br/>5.2.5 中科点击解决举报事件、提起诉讼而提交的；<br/>5.2.6 中科点击为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；<br/>5.2.7 中科点击为向您提供产品、服务、信息而向第三方提供的，包括中科点击通过第三方的技术及服务向您提供产品、服务、信息的情况。<br/>5.3 中科点击有权根据本服务条款的约定，根据您的服务使用情况，自您的账户余额中直接扣除相关服务费用。<br/>5.4 当存在如下情形之一时，中科点击有权对您名下账户资金的部分或全部进行冻结：<br/>5.4.1 国家法律、法规、政策、法律文书的规定：<br/>5.4.2 国家有权机关要求进行冻结的：
            <br/>5.4.3 您使用中科点击服务的行为涉嫌违反国家法律法规及行政规定的；<br/>5.4.4 中科点击基于单方面合理判断，认为您的账户操作、资金进出等存在异常时；<br/>5.4.5 他人向您账户错误汇入资金等导致您可能存在不当得利的：<br/>5.4.6 您遭到他人投诉， 且对方已经提供了一定证据的：<br/>5.4.7 中科点击根据自行合理判断，认为可能产生风险的其他情况。
            <br/>中科点击按照前述规定对您的账户资金进行冻结后，将通过邮件、站内信、短信或电话等方式通知您按照相应的程序进行申诉。如果您要求进行申诉并经中科点击审核通过的，中科点击将立即解除资金冻结措施；如果您未在规定时间内进行申请，或您的申诉未能通过中科点击审核的，则您确认中科点击有权长期冻结该资金，或将相关冻结款项按原路退回该笔资金的充值来源账户（包括但不限于银行账户、支付宝账户等）。</p>
          <p class="title">6、 隐私及其他个人信息的保护</p>
          <p>一旦您同意本服务条款或使用本服务，您即同意中科点击按照以下条款来使用和披露您的个人信息。<br/>6.1 登录记录 <br/>为了保障您使用本服务的安全以及不断改进服务质量，中科点击将记录并保存您登录和使用本服务的相关信息，但中科点击承诺不将此类信息提供给任何第三方（除双方另有约定或法律法规另有规定及中科点击关联公司外）。<br/>6.2 外部链接
            <br/> 本网站含有到其他网站的链接，但中科点击对其他网站的隐私保护措施不负任何责任。中科点击可能在任何需要的时候增加商业伙伴的网站。 <br/>6.3 安全 <br/>中科点击仅按现有技术提供相应的安全措施来使中科点击掌握的信息不丢失，不被滥用和变造。这些安全措施包括向其他服务器备份数据和对用户密码加密。尽管有这些安全措施，但中科点击不保证这些信息的绝对安全。</p>
          <p class="title">7、 系统中断或故障</p>
          <p>系统可能因下列状况无法正常运作，使您无法使用各项互联网服务时，中科点击不承担损害赔偿责任，该状况包括但不限于：<br/>7.1 中科点击在系统停机维护期间。<br/>7.2 电信设备出现故障不能进行数据传输的。<br/>7.3 因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成中科点击系统障碍不能执行业务的。<br/>7.4 由于黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题等原因而造成的服务中断或者延迟。</p>
          <p class="title">8、 责任范围及责任限制</p>
          <p>8.1 中科点击仅对本服务条款中列明的责任承担范围负责。<br/>8.2 本服务之合作单位，所提供之服务及内容由该合作单位自行负责。<br/>8.3 中科点击网站不对链接到其他网站的资源、信息、产品或服务的真实性、准确性和完整性负责，因此对于任何因信赖此网站或使用此类网站上的 信息资源、产品或服务，而给用户造成任何直接或间接损失，中科点击网站均不承担责任。<br/>8.4 您了解并同意，因您使用本服务、违反本服务条款或在您的账户下采取的任何行动，而导致的任何第三方索赔，应且仅应由您本人承担。如果由此引起中科点击及其关联公司、员工、客户和合作伙伴被第三方索赔的，您应负责处理，并承担由此造成的全部责任。<br/>8.5 在法律允许的情况下，中科点击对于与本服务条款有关或由本服务条款引起的任何间接的、惩罚性的、特殊的、派生的损失，不论是如何产生的，也不论是由对本服务条款的违约还是由侵权造成的，均不负有任何责任，即使事先已被告知此等损失的可能性。另外即使本服务条款规定的排他性救济没有达到其基本目的，也应排除中科点击对上述损失的责任。<br/>8.6 中科点击网站致力于提供合理、准确、完整的征信信息，但是不保证信息的完全合理性、准确性和完整性，且不对因信息的合理性、不准确性或遗漏导致的任何损失或损害承担责任。</p>
          <p class="title"> 9、 完整协议</p>
          <p>9.1 本服务条款由本服务条款与本网站公示的各项规则组成，相关名词可互相引用参照，如有不同理解，以本服务条款为准。<br/>9.2 本服务条款的章节标题仅为行文方便而设，不具有法律或合同效力。<br/>9.3 您对本服务条款理解和认同，您即对本服务条款所有组成部分的内容理解并认同，一旦您使用本服务，您和中科点击即受本服务条款所有组成部分的约束。<br/>9.4 本服务条款部分内容被有管辖权的法院认定为违法的，不因此影响其他内容的效力。</p>
          <p class="title">10、商标、知识产权的保护</p>
          <p>10.1 除第三方产品或服务外，本网站上所有内容，包括但不限于著作、图形、照片、软件、音乐、档案、资讯、资料、架构、页面设计，均由中科点击或中科点击关联企业依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。<br/>10.2 如您在本网站的任何公共区域提交材料，则您自动允许或授权该材料的所有者已特别授权本网站享有免费使用、永久的、不能变更的、非专利的权利，并拥有在全世界范围内使用、复制、修改、改编、出版、翻译、分发这些材料（部分或全部地）和/或在这些材料中包含的任何版权期限内以任何形式、媒体或者现在已知或以后将发展的技术合并这些材料的特许。您因此允许本网站享有编辑、复制、出版和分发任何您放置在网站上可自由获得的材料的权利。<br/>10.3 非经中科点击或中科点击关联企业书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站上程序或内容。<br/>10.4 尊重知识产权是您应尽的义务，如有违反，您应承担损害赔偿责任。 </p>
          <p class="title"> 11、通知送达</p>
          <p>11.1 您理解并同意，中科点击可依据自行判断，通过网页公告、电子邮件、手机短信或常规的信件传送等方式向您发出通知，且中科点击可以信赖您所提供的联系信息是完整、准确且当前有效的；上述通知于发送之日视为已送达收件人。<br/>11.2 除非本服务条款另有约定或中科点击与您另行签订的协议明确规定了通知方式，您发送给中科点击的通知，应当通过中科点击对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。</p>
          <p class="title">  12、 法律适用与管辖</p>
          <p>本服务条款之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本服务条款产生之争议，均应依照中华人民共和国法律予以处理，并提交法院审判。</p>
        </div>
        <div class="text-center"><button class="btn btn-jr" data-dismiss="modal" @click="clearFirstLogin()">我已阅读</button></div>

      </div>
    </div>
  </div>
</template>
<style lang="css">
  #statement .modal-dialog{width:946px;padding:30px 0;color:#333333;background-color:#ffffff;}
  #statement .modal-dialog h3{text-align:center;margin-top:0;margin-bottom:20px;}
  #statement .modal-dialog .content{padding:15px;border:1px solid #333;width:856px;height:525px;overflow:auto;margin:0 auto;}
  #statement .modal-dialog .btn-jr {
    background-image: -webkit-linear-gradient(to top, #e13f4b, #d3383c);
    background-image: -moz-linear-gradient(to top, #e13f4b, #d3383c);
    background-image: -ms-linear-gradient(to top, #e13f4b, #d3383c);
    background-image: -o-linear-gradient(to top, #e13f4b, #d3383c);
    background-image: linear-gradient(to top, #e13f4b, #d3383c);
    color: #ffffff;
    padding: 8px 150px;
    margin-top:30px;
  }
  #statement .btn-jr:hover,#statement .btn-jr:focus{color: #ffffff;}
  #statement .title{margin-top:30px;}


</style>
<script>
  import {getCookie,delCookie} from './util/cookie'
  export default {
    data(){
      return {
        isLogin: this.$store.getters.getIsLogin,
        userName: this.$store.getters.getUserName
      }
    },
    computed:{

    },
    beforeMount(){
      let _this=this;
      if(this.$route.path==='\/login'||this.$route.path==='\/phoneBackPass'||this.$route.path==='\/emailBackPass'||this.$route.path==='\/forgotPassword'){
        this.$store.dispatch("MANAGER_LOGIN_STATE",{
          loginStatus:false
        }).then(() => {
          isLog();
        })
      }else{
        this.$store.dispatch("MANAGER_LOGIN_STATE",{
          loginStatus:true
        }).then(() => {
          isLog();
          this.$store.dispatch("SECURITY_CHECKSESSION").then((res) => {
            if (!res.success) {
              this.clearSession()
              this.$router.push({path: '/login'})
            }
          })
        })
      }
      var isLog = ()=>{
        _this.isLogin = _this.$store.getters.getIsLogin;
      }
      this.userName = localStorage.getItem('userName')
    },
    beforeRouteEnter(to, from, next) {
    },
    methods:{
      logout(){
        this.$store.dispatch("AUTHENTICATE_LOGOUT").then((res) => {
          this.clearSession()
          this.$router.push({path:'/login'})
        }).catch((error)=>{
          this.clearSession()
          this.$router.push({path:'/login'})
        })
      },
      clearSession(){
        delCookie("AUTHENTICATE_TOKEN")
        localStorage.removeItem('userName')
        sessionStorage.removeItem('ANTIFRAUD_SQUERYONE_tradeId')
        sessionStorage.removeItem('_import_tradeId')
        sessionStorage.removeItem('cost')
        sessionStorage.removeItem('customTempId')
        sessionStorage.removeItem('dataCount')
        sessionStorage.removeItem('from_page')
      },
      clearFirstLogin(){
        this.$store.dispatch("AUTHENTICATE_CLAUSE")
      }
    },
    watch: {
      $route(){
          console.log(this.$route.path)
        if(this.$route.path==='\/login'||this.$route.path==='\/phoneBackPass'||this.$route.path==='\/emailBackPass'||this.$route.path==='\/forgotPassword'){
          this.isLogin = false
        }else{
          this.$store.dispatch("SECURITY_CHECKSESSION").then((res)=>{
            if(!res.success){
              this.clearSession()
              this.$router.push({path:'/'})
              return
            }
            if(res.data==1){
                return
            }
            $("#statement").modal({backdrop: 'static', keyboard: false}).modal("show");
          })
          this.isLogin = true
        }
        this.userName = localStorage.getItem('userName')
      }
    },
  }
</script>
