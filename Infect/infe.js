import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infe({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၅	သွေးလွန်တုပ်ကွေးရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}သွေးလွန်တုပ်ကွေးရောဂါသည် ဒင်ဂီဂရပ်စ်ပိုး ကူးစက်ခြင်းကြောင့် ဖြစ်ပွားပါသည်။ အဆိုပါရောဂါသည် သွေးလွန်တုပ်ကွေးပိုး သယ်ဆောင်လာသည့် ခြင်ကျားအကိုက်ခံရခြင်းမှ တဆင့် ကူးစက်ဖြစ်ပွားသည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ထိုခြင်များ၏ ခန္ဓာကိုယ်တွင် အဖြူစက်များ ပါရှိသည့်အတွက် ခြင်ကျားဟုခေါ်ခြင်း ဖြစ်ပါသည်။ ခြင်ကျားများသည် ရေကြည်ရေသန့်တွင် အဓိကပေါက်ပွားကြပြီး နေ့အခါတွင် လူများကို ကိုက်လေ့ရှိပါသည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}သွေးလွန်တုပ်ကွေးရောဂါတွင် ဒင်ဂီအဖျားရောဂါ (Dengue fever)၊ သွေးလွန်တုပ် ကွေးရောဂါ (Dengue Haemorrhagic fever) နှင့် သွေးလန့်ခြင်း (Dengue shock syndrome) ဟူ၍ အဆင့်ဆင့်ဖြစ်ပွားတတ်သော ရောဂါဖြစ်သည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}သွေးလွန်တုတ်ကွေးရောဂါသည် အသက်(၁၅)နှစ်အောက်တွင် အများဆုံးဖြစ်ပွား သော်လည်း ယခုအခါတွင် အသက်အရွယ်မရွေးဖြစ်ပွားလျက်ရှိပါသည်။ ကျား/မ မရွေးတော ရောမြို့ပါ နေရာမရွေး ဖြစ်ပွားလေ့ရှိသော ရောဂါဖြစ်သည်။ တစ်နှစ်ပတ်လုံး ကူးစက်နိုင်ပြီး မိုးရာသီတွင် အဖြစ်အများဆုံးဖြစ်သည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}သွေးလွန်တုပ်ကွေးလက္ခဏာများသည် ရောဂါပိုးသယ်ဆောင်ထားသည့် ခြင်ကိုက်ခံရ ပြီး ပျမ်းမျှ (၄)ရက်မှ (၆)ရက်အကြာတွင် စတင်ပြသပါသည်။
</Text>
<List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`(က)	ဒင်းဂီးအဖျား (Dengue fever) ရောဂါတွင် ရုတ်တရက်လတ်တလာ အဖျားတက်လာ ခြင်းနှင့်အတူ ခေါင်းကိုက်ခြင်း၊ တစ်ကိုယ်လုံးကိုက်ခဲခြင်း၊ ပျို့ခြင်း၊ အန်ခြင်း၊ မစားချင်/ မသောက်ချင်ဖြစ်ခြင်းနှင့် တစ်ခါတစ်လေတွင် ခန္ဓာကိုယ်၌ အစက်အပြောက်များ ပေါ်လာ ခြင်းတို့ဖြစ်တတ်ပါသည်။ ထို့ကြောင့် ပုံမှန်ရာသီအကူးအပြောင်းတွင် ဖြစ်တတ်သည့် တုပ်ကွေးရောဂါနှင့် ကွာခြားမှု မရှိသောကြောင့် များသောအားဖြင့် ဒင်ဂီးအဖျားမှန်း မသိကြ ပါ။ သွေးပေါင်ချိန်တိုင်းကိရိယာဖြင့် စစ်ဆေးတိုင်းတာကြည့်ပါက လက်ဖျံတွင် အစက်အ‌ ပြောက်များပေါ်လာသည်မှ လွဲ၍အခြားစိုးရိမ်ရသည့် လက္ခဏာများမရှိပါ။`}
        titleNumberOfLines={200} />
        <Text style={styles.subtitle}>မိဘများ၊ အခြေခံကျန်းမာရေးဝန်ထမ်းများအနေနှင့် တုပ်ကွေးဖျား (အထူးသဖြင့် ကလေးသူ ငယ်များ) ဖျားနာပါက သွေးလွန်တုပ်ကွေးရောဂါ ဖြစ်နိုင်ခြေကို အစဉ်အမြဲ ထည့်သွင်းစဉ်း စားရပေမည်။ ရာသီတိုင်းတွင် သွေးလွန်တုတ်ကွေးဖြစ်တတ်သည်။</Text>
        <List.Item title={`(ခ)	သွေးလွန်တုပ်ကွေးရောဂါ (Dengue Haemorrhagic fever) နှင့် သွေးလန့်ခြင်း (Dengue shock syndrome) စိုးရိမ်ရသည့် လက္ခဏာများမှာ
•	ခန္ဓာကိုယ်တွင်း သွေးယိုစီးသည့်အတွက်ကြောင့် ကော်ဖီမှုန့်ရောင်၊ အညိုရောင် အဖတ်အမျှင်လေးများပါသောအရည်များ အန်ခြင်း၊ ဝမ်းမည်းမည်းသွားခြင်း၊ နှာခေါင်းသွေးယိုခြင်း၊ သွားဖုံးကြားသွေးထွက်ခြင်း
•	ခန္ဓာကိုယ်တွင် ထိခိုက်သကဲ့သို့ သွေးခြေဥသကဲ့သို့ အနီကွက်များပေါ်လာခြင်း
•	ကိုယ်အပူချိန် ရုတ်တရက်ကျဆင်းသွားခြင်း (များသောအားဖြင့် စဖျားသည့်နေ့မှ (၃)ရက်မြောက်တွင် ဖြစ်တတ်ပါသည်။)
•	ရုတ်တရက် ဗိုက်အောင့်လာခြင်း
•	ဂနာမငြိမ်ဖြစ်ခြင်း (သို့) အရမ်းမှိန်လာခြင်း
•	ခြေဖျား၊ လက်ဖျားများ အလွန်အမင်း အေးစက်ခြင်း
•	သွေးပေါင်အလွန်ကျဆင်းခြင်း၊ နောက်ဆုံးတွင် တိုင်းတာ၍ မရသည့်အခြေအနေဖြစ် ခြင်း
•	အပေါ်သွေး၊ အောက်သွေးခြားနားချက်သည် (၂၀)မီလီမီတာ မာကျူရီ (သို့) ထို့ထက် နည်းခြင်း
•	အစာ/ရေ မဝင်နိုင်လောက်အောင် အဆက်မပြတ် အန်ခြင်း စသည်တို့ဖြစ်ပါသည်။
•	ကလေးကိုယ်အပူချိန် ကျဆင်းသွား၍ မှိန်းလျှင်/ အိပ်နေလျှင် အန္တရာယ်ရှိသော အခြေ အနေဖြစ်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
<Text style={styles.subtitle}>၎င်းစိုးရိမ်ရသည့် လက္ခဏာတစ်ခုခု တွေ့ရှိခဲ့ပါက နီးစပ်ရာဆေးရုံ ဆေးခန်းသို့ ချက်ချင်း ခေါ်ဆောင်ပြသရန် လိုအပ်ပါသည်။</Text>
      </List.Accordion>

      <List.Accordion
        title="ဒင်ဂီးအဖျား (Dengue fever) တွင်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`(က)	ဂရုတစိုက်ကြည့်ရှုခြင်း (သွေးပေါင်မှန်မှန်ချိန်ခြင်း၊ ကလေးအခြေအနေစောင့်ကြည့် ခြင်း)
(ခ)	ကိုယ်ပူချိန်အတွက်သာမက နာကျင်ကိုက်ခဲနေသည်များအတွက်လည်း အသုံးပြုပါ သည်။ အခြားကိုယ်ပူကျဆေး၊ အကိုက်အခဲပျောက်ဆေး အက်စ်ပရင် (Aspirin) ကဲ့သို့ ဆေးများကို လုံးဝ မသုံးစွဲရပါ။ ထိုဆေးများသည် သွေးယိုစီးခြင်းရှိနေပါက ပိုဆိုးစေ သည့်အတွက် ဖြစ်ပါသည်။ 
(ဂ)	အရည်ပြန်လည်ဖြည့်တင်းပေးရန် လိုအပ်သဖြင့် ဓါတ်ဆားရည်သသောက်ခြင်း၊ အသီး အနှံဖျော်ရည်များ သောက်ပေးခြင်းတို့ ပြုလုပ်ရပါမည်။ နို့တိုက်ကလေးငယ်များကို      မိခင်နို့ဆက်လက် တိုက်ကျွေးရန်ဖြစ်ပါသည်။
(ဃ)	ဖျားနေသည့် ကလေးကို အစားအသောက်မကျွေးခြင်းမျိုးကို မပြုလုပ်သင့်ပါ။ ကလေးစားချင်သောက်ခြင်စိတ်ရှိမည်ဆိုပါက မည်သည့်အစားအစာမဆို ကျွေးနိုင်ပါ သည်။ သို့သော် ကလေးကို အညိုရောင်အရည်များ (ကော်ဖီ၊ လက်ဖက်ရည်၊ ချောကလက်၊ မိုင်လို၊ အိုဗာတင်း) တိုက်ကျွေးခြင်းကို ရှောင်ရပါမည်။ အဘယ်အ ကြောင့်ဆိုသော် သွေးလွန်တုပ်ကွေးဖြစ်သည့် ကလေးများသည် အစာအိမ်လမ်း ကြောင်းတလျှောက်တွင် သွေးကြောလေးများမှ သွေးယိုစိမ့်ပြီး အညိုရောင်များ အန်တတ်သဖြင့် ကော်ဖီသကဲ့သို့ အညိုရောင်ရှိသည့် အရည်များ တိုက်ကျွေးသည့် အခါ ခွဲခြားရခက်ခဲသောကြောင့် ဖြစ်ပါသည်။
ဒင်ဂီးအဖျား (Dengue fever) တွင် အောက်ပါအချက်များရှိလျှင် ဆေးရုံတင်ရပါမည်။
•	ဆေးရုံနှင့် အသွားအလာခက်သည့် နေရာတွင်နေသူများ၊ ပို့ဆောင်ရေး ခက်ခဲသည့် ဒေသတွင် နေသူများ
•	သွေးဉမွှားအရေအတွက် ၁၀၀ အောက်ကျနေသူများ၊ သွေးလန့်သည့်လက္ခဏာရှိသူများ
•	နှာခေါင်းသွေးယို၊ သွားဖုံးသွေးယိုစသည့် သွေးယိုစီးသည့် လက္ခဏာရှိသူများ
•	အလွန်အမင်း အန်နေခြင်း၊ အရည်မသောက်နိုင်ခြင်း တို့ဖြစ်နေသည့်သူများ
•	သက်ဆိုင်ရာတာဝန်ခံဆရာဝန်မှ ဆေးရုံတက်ရန် လိုအပ်သည်ဟု ဆုံးဖြတ်ပေးထား သူများ
ဆေးရုံဆေးခန်းသို့ အချိန်မီမရောက်ရှိနိုင်ပါက နောက်ဆက်တွဲဆိုးကျိုးများကြောင့် အသက်ဆုံးရှုံးသည်အထိ ဖြစ်နိုင်ပါသည်။ ထို့အပြင် သက်ဆိုင်ရာဆေးရုံမှ တာဝန်ခံ ဆရာဝန်၏ ခွင့်ပြုသည့် အချိန်မတိုင်သေးဘဲ ဆင်းပါက ဆိုးကျိုးများဖြစ်ပြီး ကလေးကို ထိခိုက်မည်ဖြစ်ကြောင်း မိဘ (သို့) မိသားစုဝင်များကို သတိပေးပြောကြားထားသင့်ပါ သည်။ ဆေးရုံဆင်းပြီးပါက တစ်ပတ်လောက်အနားယူရန် လိုအပ်ပါသည်။
မြန်မာနိုင်ငံတွင် သွေးလွန်တုပ်ကွေး ဟုတ်/မဟုတ် အတည်ပြုရာ၌ ရောဂါလက္ခဏာ များ၊ လူနာစမ်းသပ်မှုများနှင့်သာ အတည်ပြုပါသည်။ များသောအားဖြင့် Tourniquet Test စမ်းသပ်ခြင်းဖြင့် စမ်းသပ်စစ်ဆေး အတည်ပြုပါသည်။ Tourniquet Test ဆိုသည်မှာ သွေးပေါင်ချိန်တိုင်းကိရိယာဖြင့် စစ်ဆေးတိုင်းတာပါက လက်ဖျံတွင် အနီးအစက်အပြောက် များပေါ်လာခြင်းရှိ/မရှိ စစ်ဆေးခြင်းဖြစ်သည်။
ကာကွယ်နှိမ့်နင်းရေးလုပ်ငန်းများ
၁။  ကျန်းမာရေးအသိပညာပေးခြင်းနှင့်မှန်ကန်သောအလေ့အကျင့်များပေါ်ထွန်းလာစေရေး
•	သွေးလွန်တုပ်ကွေး ရောဂါလက္ခဏာများကို ပြည်သူလူထုသို့ အသိပညာပေးခြင်း
•	ခြင်ကျား၊ ပိုးလောက်လန်း နှိမ်နင်းရေးလုပ်ငန်းစဉ်များ သင်ကြားပေးခြင်း (ဉပမာ - ဖုံး၊ သွန်း၊ လဲ၊ စစ်၊ ခပ်၊ လောင်း၊ ထောင်း၊ ဖွင့်၊ မြှုပ်၊ ရှင်း၊ မှုတ်လုပ်ငန်းစဉ်များ)
•	ရောဂါဖြစ်ပွားမှုများလာပါက၊ နီးစပ်ရာကျန်းမာရေးဌာနများသို့ အချိန်မီသတင်းပေး ပို့ရန် အသပညာပေးခြင်း
•	ခြင်ဆေးမှုတ်လုပ်ငန်းများကို သွေးလွန်တုပ်ကွေးလူနာရှိသော နေအိမ်နှင့် မီတာ (၃၀၀) ပတ်လည်အတွင်းရှိ သွေးလွန်တုပ်ကွေးဖြစ်စေသော ခြင်သေစေရန်အတွက် လုပ်ဆောင်ခြင်းဖြစ်ကြောင်း ရှင်းပြခြင်း။
၂။	သွေးလွန်တုပ်ကွေးရောဂါကာကွယ်ရေးအတွက် ခြင်ကျားပိုးလောက်လန်းနှိမ်နင်းခြင်း
	(က) ရပ်ကွက်အလိုက်၊ ရွာအလိုက် လုပ်ဆောင်သင့်သည့် လုပ်ငန်းစဉ်များ -
•	တစ်ပတ်လျှင် အနည်းဆုံး (၁) ကြိမ်၊ ရပ်ကွက်လုံးပြည့်၊ ရွာလုံးပြည့် ပိုးလောက်လန်း နှိမ်နင်းသည့် လုပ်ငန်းကို ဆောင်ရွက်ရန်
•	ခြင်ကျား၊ ပိုးလောက်လန်း အဓိကပေါက်ပွားတတ်သော အိမ်တွင်း၊ အိမ်ပြင်ရှိ ရေသိုလှောင်ထားသည့် အိုးခွက်များ (ဥပမာ -  စဉ့်အိုး၊ အုတ်ရေကန်၊ ဘုရားပန်းအိုး၊ နတ်စင်အိုး စသဖြင့်)ကို ဖုံး၊ သွန်း၊ လဲ၊ စစ် ဆောင်ရွက်ရန်၊ ပြည်သူ့ကျန်းမာရေးဌာနမှ ခြင်ဆေးမှုတ်ကျန်းမာရေးအဖွဲ့များကို ပြည်သူ လူထုမှ ဝိုင်းဝန်းကူညီပေးရန်
•	မလိုအပ်သည့် အိုး၊ ခွက်၊ ဘတ်ထရီအိုး၊ တာယာဟောင်းစသည်တို့ကို စနစ် တကျမြေမြှပ်ပစ်ရန်
•	ရေအောင်းပြီး ခြင်းပေါက်ပွားနိုင်သော ဝါးငုတ်၊ သစ်ခေါင်းများကိုရှင်းလင်းရန်၊ မြေဖို့ခြင်း‌ ဆောင်ရွက်ရန်
•	မသွန်းနိုင်၊ မလှယ်နိုင်သော ရေစည်၊ ရေကန်များတွင် ပိုးလောက်လန်း သတ်ဆေး (အဘိတ်ဆေး) ခတ်ရန်
အဆိုပါ လုပ်ငန်းများကို ရပ်ကွက်၊ ကျေးရွာများရှိ လူထုမှ အဓိကဆောင်ရွက်ရန် ဖြစ်သည်။
(ခ)	ကျောင်းများတွင် သွေးလွန်တုပ်ကွေးရောဂါ ကာကွယ်ရေးလုပ်ငန်းများ ဆောင်ရွက်ခြင်းနှင့် ခြင်ကျားကင်းစင်သည့် ကျောင်းများထူထောင်ခြင်း၊
•	အဓိကအားဖြင့် ပညာရေးဝန်ကြီးဌာနနှင့် ပူးပေါင်းဆောင်ရွက်ရပါမည်။ ကျောင်းသား/သူများကို ကျန်းမာရေးပညာပေးခြင်းဖြင့် ကလေးသူငယ်များ၏ ဗဟုသုတကို မြှင့်တင်ပေး နိုင်သည်။
•	သောကြာနေ့တွင် ဆရာ/ဆရာမများမှ ကျောင်းသား/သူများအား ပိုးလောက် လန်းစစ်ဆေးခြင်း၊ ဖုံး၊ သွန်၊ လဲ၊ စစ်ဆောင်ရွက်ခြင်း၊ စနေ၊ တနင်္ဂနွေနေ့များ တွင် မိမိတို့၏အိမ်တွင်လည်း ဆောင်ရွက်ပြီး တနင်္လာနေ့တွင် ပြန်လည်တင်ပြ ရန်
•	ကျောင်းတွင် တစ်ပတ်လျှင် (၁) ကြိမ် နာရီဝက်ခန့်အချိန်ပေး၍ ပိုးလောက် လန်းရှာဖွေစေခြင်း၊ ရေလှယ်ခြင်း၊ သွန်ခြင်း၊ တစ်ပတ်အတွင်း နောက်ဆုံး ကျောင်းတက်ရသည့်နေ့ (သောကြာ) တွင် သောက်ရေအိုးများနှင့် အခြားအိုး များကို ပွတ်တိုက်ဆေးကြော၍ ကျောင်းပိတ်ရက်များတွင် မှောက်ထားခဲ့ခြင်း ဆောင်ရွက်စေသင့်ပါသည်။
•	ကင်းထောက်လုပ်ငန်းများနှင့် အသင်းလိုက်လှုပ်ရှားဆောင်ရွက်စေသည့် လုပ်ငန်းများတွင် လုပ်ငန်းများတွင် ပိုးလောက်လန်းနှိမ်နင်းရေးကို ထည့်သွင်း‌ ဆောင်ရွက်စေသင့်ပါသည်။
(ဂ)	တစ်ဉီးချင်းလုပ်ဆောင်သင့်သည့် လုပ်ငန်းစဉ်
•	ခြင်ကိုက်မခံရစေရန် အင်္ကျီလက်ရှည်၊ ဘောင်းဘီရှည် ဝတ်ဆင်ထားခြင်း
•	အိပ်သည့်အခါတိုင်း နေ့/ည မရွေးခြင်ထောင်ဖြင့် အိပ်ခြင်း (ဖြစ်နိုင်ပါက) ဆေးစိမ်ခြင်ထောင်ဖြင့် အိပ်ခြင်း၊ 
•	ခြင်နိုင်ဆေးလိမ်းခြင်း
•	အိမ်များတွင် ခြင်လုံဇကာ တပ်ဆင်ခြင်း
•	ခြင်းဆေးခွေထွန်းခြင်း၊ မီးခိုးမှိုင်းတိုက်ခြင်း၊ ခြင်ဆေးစပရေးဖျန်းခြင်း စသည် တို့မှာ အသက်ရှူလမ်းကြောင်းဆိုင်ရာ ရောဂါများ ဖြစ်ပွားနိုင်သဖြင့် မပြုလုပ် သင့်ပါ။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="သတိပြုရမည့်အချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သွေးလွန်တုပ်ကွေးသည် ရောဂါပိုးရှိသည့် ခြင်ကျားကိုက်ခံရခြင်းမှတစ်ဆင့် ကူးစက် ခြင်းဖြစ်ပါသည်။ အကောင်းဆုံး ကာကွယ်နည်းမှာ ခြင်ကိုက်မခံရအောင် နေထိုင်ခြင်း နှင့် ခြင်ကျားမပေါက်ဖွားနိုင်အောင် ပြုလုပ်ခြင်းတို့ဖြစ်ပါသည်။ မိုးတွင်းကာလ သာမက မည်သည့်အချိန်တွင်ဆို ကလေးများ ဖျားနာလျှင် သွေးလွန်တုပ်ကွေး သံသယရှိပါက ဆေးရုံး၊ ဆေးခန်း များတွင် ချက်ချင်းသွားရောက်ပြသသင့်ပါသည်။
•	အရေးကြီးဆုံးတစ်ချက်မှာ သွေးလွတ်တုပ်ကွေးသည် ယခင်ဖြစ်ဖူးသည့်သူများတွင် နောက် တစ်ခါဖြစ်လျှင် ပိုဆိုးတတ်သောကြောင့် အထူးသတိထားရန် လိုအပ်ပါသည်။ ရာသီတစ်ခု တည်းမှာပင် (၂)ခါပြန်ဖြစ်နိုင်မည့်အတွက် ပထမတစ်ခါဖြစ်ပြီးဟု သဘောထားပြီး ပေါ်ဆ၍ မရသည့်ရောဂါဖြစ်ပါသည်။
•	မိမိတို့အိမ်တွင် ရေတင်ကျန်နိုင်သည့် စွန့်ပစ်ပစ္စည်းအားလုံးကို စနစ်တကျစွန့်ပစ်ပါ။ အိမ် ပတ်ဝန်းကျင် သန့်ရှင်းပါစေ။
•	ရေစည်၊ ရေအိုးများ ဖုံးအုပ်ထားပါ။
•	ပိုးလောက်လန်းစစ်ဆေးရန် လာရောက်သည့်အဖွဲ့နှင့် ပူးပေါင်းဆောင်ရွက်ပါ။
•	မိမိတို့ရပ်ကွက်/ကျေးရွာအတွင်း ‘သွေလွန်တုပ်ကွေးရောဂါ’ နှိမ်နှင်းရေးလုပ်ငန်းများ တွင် ပါဝင်ဆောင်ရွက်ကြပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

</List.Section>

         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#D7FFD9',
      marginBottom:10,
      marginBottom:20,
    },
  headtitle:{
    color:'#102027',
    fontSize:30,
    marginTop:10,
    
  },
  subtitle:{
    color:'#260e04',
    fontSize:18,
    textDecorationLine: 'underline',
    margin:10,
  },
  p:{
    margin:7,
    color:'#4e342e',
    fontSize:15,
    lineHeight: 26,
  },
  subp:{
    color:'#4e342e',
    fontSize:15,
    backgroundColor:'#c1e5c3',
    textDecorationLine: 'underline',
  }
    
    })