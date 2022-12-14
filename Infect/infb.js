import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infb({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၂	တီဘီရောဂါ
         </Text>
         <Text style={styles.p}>
         •	တီဘီရောဂါသည် သာမန်မျက်စိဖြင့် မမြင်နိုင်သော ဘက်တီးရီးယားပိုးကြောင့်ဖြစ်ပြီး လေမှတဆင့် ကူးစက်ပျံ့နှံ့သည့် ကူးစက်ရောဂါတစ်မျိုးဖြစ်ပါသည်။ ကမ္ဘာ့လူဉီးရေ၏ သုံးပုံတစ်ပုံသည် တီဘီရောဂါပိုး ကူးစက်ခံနေရပြီဖြစ်သည်။
         {"\n"}•	တီဘီရောဂါဖြစ်ပွားသူသည် ဆေးကုသမှုစနစ်တကျမခံယူပါက မိမိမှတဆင့် မိသားစုနှင့် ပတ်ဝန်းကျင်ရှိလူများကိုပါ အလွယ်တကူကူးစက်နိုင်ပြီး မိမိကိုယ်တိုင်လည်း ပထမအဆင့် တီဘီရောဂါကုဆေးများနှင့် မကုသနိုင်တော့သည့် ဆေးယဉ်ပါးတီဘီရောဂါ ဖြစ်လာနိုင်သည်။
         {"\n"}•	တီဘီရောဂါသည် အဆုတ်တွင် အများဆုံးဖြစ်ပွားသည့် ရောဂါတစ်မျိုးဖြစ်သည်။ ဉီးနှောက်၊ ကျောရိုး၊ အူလမ်းကြောင်းကဲ့သို့ အခြားခန္ဓာကိုယ် အစိတ်အပိုင်းများတွင်လည်း ဖြစ်နိုင်ပါသည်။
         {"\n"}•	တီဘီရောဂါသည် စနစ်တကျကုသပါက ပျောက်ကင်းနိုင်ပါသည်။
        </Text>
        <List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	သလိပ်တွင် တီဘီပိုးရှိသော ဝေဒနာရှင်များမှာ ချောင်းဆိုးခြင်း၊ နှာချေခြင်း၊ ကျယ်လောင်စွာ စကားပြောခြင်းအားဖြင့် တီဘီရောဂါပိုးများသည် လေထဲသို့ အလွယ်တကူ ပျံ့နှံ့သွားပြီး ဘေးပတ်ဝန်းကျင်ရှိလူများ ရှူရှိုက်မိရာမှ ရောဂါပိုးများ ကူးစက်ခံရနိုင်ပါသည်။
•	များသောအားဖြင့်
   *	ရောဂါရှိသူများမှ အတူနေမိသားစုသို့လည်းကောင်း၊
   *	ရုံးခန်း၊ စာသင်ခန်း၊ စက်ရုံ၊ အလုပ်ရုံစသည့်နေရာများတွင် ဝေဒနာရှင်မှ အတူလုပ်ဖော်ကိုင်ဖက်လူများသို့ ရောဂါပိုး အလွယ်တကူကူးစက်နိုင်ပါသည်။
ထို့အပြင်
   *	လူစုလူဝေးများပြားသော နေရာများဖြစ်သည့် စတိုးဆိုင်၊ စျေးဆိုင်၊ ရထားဂိတ်၊ ကားဂိတ်၊ ဗွီဒီယိုရုံ၊ ရုပ်ရှင်ရုံ စသည့်နေရာများတွင် ဝေဒနာရှင်မှ အနီးရှိ သူများသို့လည်းကောင်း
   *	ဘတ်(စ်)ကား၊ မီးရထား၊ သင်္ဘော၊ လေယာဉ်စီးပြီး ခရီးသွားလာရင်း ဝေဒနာရှင်မှ ပတ်ဝန်းကျင်ရှိလူများသို့ လည်းကောင်း ကူးစက်နိုင်ပါသည်။
•	မည်သူမဆို တီဘီရောဂါ ကူးစက်ခံရနိုင်သော်လည်း တီဘီရောဂါပိုး ကူးစက်ခံရသူတိုင်း တီဘီရောဂါဖြစ်ပွားလေ့မရှိပါ။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="အောက်ပါအခြေအနေရှိသူများ တီဘီရောဂါပိုး ကူးစက်ခံရပါက တီဘီရောဂါ ပိုမိုဖြစ်ပွားနိုင်ပါသည်။" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အာဟာရချို့တဲ့ခြင်း
•	ခုခံအားကျဆင်းနေခြင်း
•	ဆေးလိပ်သောက်ခြင်း၊ အရက်အလွန်အကျွံသောက်ခြင်း
•	အသက်အရွယ်ကြီးသူများနှင့် ငါးနှစ်အောက်ကလေးငယ်များ
•	ဆီးချိုရောဂါရှိသူများနှင့် အစာအိမ်ဖြတ်တောက်ထားရသူများ
•	အိမ်နှင့် အလုပ်နေရာများတွင် အလင်းရောင်နှင့် လေဝင်လေထွက် ကောင်းစွာမရရှိခြင်း
•	လူမှုစီးပွားရေးနိမ့်ကျခြင်းတို့သည်လည်း ရောဂါဖြစ်ပွားစေရန် အားပေးသည့် အခြေအနေများဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="တီဘီရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	(၂) ပတ်နှင့် အထက် ချောင်းဆိုးလျှင်
•	ချောင်းဆိုးသည့်အခါ သွေး (သို့မဟုတ်) သလိပ်ပါလျှင်
•	အစားအသောက်ပျက်လျှင်၊ ကိုယ်အလေးချိန်ကျပြီး တဖြည်းဖြည်းပိန်လာလျှင်
•	တငွေ့ငွေ့ဖျားလျှင် (အထူးသဖြင့် ညနေပိုင်း)
•	ညအခါချွေးအလွန်ထွက်လျှင် တီဘီရောဂါ ရှိ/မရှိစစ်ဆေးမှုခံယူပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="တီဘီရောဂါ ရှိ/မရှိ စစ်ဆေးခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ကျန်းမာရေးဌာနတွင် သလိပ်(၂)ခွက် (နံနက်စောစော သလိပ်ခွက်အပါအဝင်) စစ်ဆေးရပါမည်။
•	ပြန်ကုတီဘီလူနာများ၊ HIV လူနာများ၊ ဆေးယဉ်ပါးတီဘီလူနာနှင့် နီးစပ်သူများ၊ သလိပ်ပိုးတွေ့တီဘီလူနာများ၊ ဆေးကုသမှု (၂/၃) လပြည့်၍ သလိပ်စစ်ဆေးရာတွင် သလိပ်၌ တီဘီပိုးဆက်တွေ့နေသော လူနာများနှင့် ဆီးချိုရောဂါရှိသော တီဘီလူနာများသည် GeneXpert စက်ဖြင့် ဆေးယဉ်ပါးတီဘီရောဂါ ရှိ/မရှိ ထပ်မံစစ်ဆေးရန် လိုအပ်ပါသည်။
•	မိမိတွင် ရောဂါဖြစ်ပါက မိသားစုဝင်အားလုံးတွင် တီဘီရောဂါ ရှိ/မရှိ စစ်ဆေးရန် လိုအပ်ပါသည်။ အစိုးရကျန်းမာရေးဌာနအားလုံးနှင့် အမျိုးသားတီဘီရောဂါတိုက်ဖျက်ရေးစီမံကိန်းနှင့် ပူးပေါင်းဆောင်ရွက်နေသော ပြင်ပဆေးရုံ၊ ဆေးခန်းများတွင် တီဘီရောဂါကို ပျောက်ကင်းသည်အထိ အခမဲ့စစ်ဆေး ကုသပေးလျက်ရှိပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆေးကုသမှုခံယူခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တိုက်ရိုက်ကြည့်ရှု အချိန်တိုနှင့်ကု (DOT) နည်းဗျူဟာဖြင့် ဆေးကုသခြင်းဆိုသည်မှာ ကျန်းမာရေးဝန်ထမ်း (သို့) စေတနာ့ဝန်ထမ်း ကျန်းမာရေးလုပ်သား (သို့) စေတနာ့ဝန်ထမ်းတစ်ဉီးဉီးမှ တီဘီလူနာအား တီဘီဆေးဝါးများကို အချိန်မှန်မှန်သောက်ရန် ဂရုတစိုက် တိုက်ရိုက်စောင့်ကြပ်ကြည့်ရှု၍ ရောဂါပျောက်ကင်းသည်အထိ ဆေးတိုက်ကျွေးခြင်းဖြစ်သည်။
•	ကျန်းမာရေးဝန်ထမ်းများမှ ညွှန်ကြားထားသည့်အတိုင်း ကုသမှုတိတိကျကျခံယူပါ။
•	ဆေးများကိုရောဂါ အမျိုးအစားအလိုက် (၆)လ မှ (၈)လအထိ နေ့စဉ်မပျက်မကွက် ပုံမှန်သောက်ရပါမည်။
•	နံနက်စာမစားမီ (၁) နာရီခန့် ကြိုတင်၍ တီဘီဆေးများအားလုံးကို ရေဖြင့်သောက်ရပါမည်။
•	တီဘီဆေးကြောင့် ဆီးသွားလျှင် ဆီးအရောင်သည် လိမ္မော်ရောင်၊ အနီရောင် ဖြစ်တတ်ပါသည်။ စိုးရိမ်စရာ မရှိပါ။ သတ်မှတ်ထားသော ဆေးတွဲများကို အပြည့်အဝ မသောက်ခြင်း၊ ပြတ်တောက်၊ ပြတ်တောင်းသောက်ခြင်းကြောင့် ဆေးယဉ်ပါးသည့် အန္တရာယ် ဖြစ်လာနိုင်ပါသည်။
•	ဆေးကုသနေစဉ်အတွင်း တချို့သည် မူးဝေခြင်း၊ နားလေထွက်ခြင်း၊ နားအကြားနှင့် မျက်စိအမြင်အာရုံများ လျော့ပါးခြင်း၊ အရေပြားတွင် အဖုအပိန့်၊ အနီစက်များပေါ်လာခြင်းနှင့် မျက်လုံးဝါခြင်း၊ အသားဝါခြင်း ဖြစ်လာပါက ဆေးသောက်ခြင်းအား ရပ်ဆိုင်းပြီး နီးစပ်ရာ ဆေးရုံ၊ ဆေးခန်းများသို့ သွားရောက်ပြသရမည် ဖြစ်ပါသည်။
•	ဆေးကုသနေစဉ်အတွင်း သလိပ်ပြန်စစ်ရန် ညွှန်ကြားထားသောအချိန်တွင် သလိပ် ပြန်စစ်ရပါမည်။ (တီဘီလူနာအသစ်တွင် ဆေးကုသနေစဉ် ကာလတွင်း (၂)လ၊ (၅)လ၊ (၆)လ တို့တွင် လည်းကောင်း၊ ပြန်ကုလူနာတွင် (၃)လ၊ (၅)လ၊ (၈)လ တို့ လည်းကောင်း သလိပ်ပြန်လည် စစ်ဆေးရပါမည်။)`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="တီဘီရောဂါရှိသူများ လိုက်နာဆောင်ရွက်ရန်အချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	နှာချေလျှင်၊ ချောင်းဆိုးလျှင် အဝတ်(သို့) လက်ကိုက်ပုဝါဖြင့် ပါးစပ်နှင့် နှာခေါင်းကို လုံအောင်ဖုံးအုပ်ပါ။
•	သလိပ်၊ တံတွေးများကို တွေ့ရာမထွေးဘဲ အဖုံးပါသော ခွက်အတွင်း ထွေးပါ။
•	၎င်းခွက်ထဲသို့ ဖီနိုင်းပိုးသတ်ဆေးရည် (သို့) ကာဘော်လစ်ဆပ်ပြာရည် (သို့) ရေ ထည့်ထားပါ။ တီဘီရောဂါမဖြစ်စေရန် သလိပ်များကို ရေအိမ်အတွင်း (သို့) မြေကြီးနက် နက်တူးပြီး စွန့်ပစ်ပါ။ အဆိုပါပစ္စည်းများ မရနိုင်ပါက သလိပ်များ မစွန့်ပစ်ခင် မိနစ် (၃၀)ခန့် ကြိုတင်၍ ပွက်ပွက်ဆူနေသော ရေနွေးလောင်းထည့်ပြီးမှ စွန့်ပစ်နိုင်ပါ သည်။
•	အာဟာရပြည့်ဝစွာ စားသုံးပါ။ အစားရှောင်ရန် မလိုပါ။
•	သင့်တင့်သောကိုယ်လက်လှုပ်ရှားမှုပြုပါ။
•	လေဝင်လေထွက်ကောင်းပြီး နေရောင်ခြည်တိုက်ရိုက်ရနိုင်သည့် နေရာ၊ အခန်းများတွင် နေထိုင်ပါ။
•	လူနာအသုံးပြုပြီးသော လက်ကိုင်ပုဝါ၊ အဝတ်အထည်များကို လျှော်ဖွတ်၍ နေပူလှမ်းပြီးမှ ပြန်အသုံးပြုပါ။
•	ဆေးလိပ်၊ အရက်မသောက်ပါနှင့်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တစ်နှစ်အောက် ရင်သွေးငယ်များအား ဘီစီဂျီကာကွယ်ဆေး မပျက်မကွက်ထိုးပါ။
•	တီဘီရောဂါလက္ခဏာတစ်ခုခု ဖြစ်ပေါ်လာပါက ကျန်းမာရေးဌာနသို့ သွားရောက်ကာ ရောဂါပိုးရှိ/ မရှိ စစ်ဆေးပြီး စနစ်တကျကုသမှု ခံယူပါ။
•	စနစ်တကျ ကုသမှုခံယူခြင်းသည် အခြားသူများသို့ ကူးစက်စေခြင်းမှ အကောင်းဆုံး ကာကွယ်ပြီး မိမိကိုယ်တိုင်အတွက်လည်း ဆေးယဉ်ပါးတီဘီရောဂါ မဖြစ်ပွားအောင် ကာကွယ်ရာရောက်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="တီဘီနှင့် အိပ်ချ်အိုင်ဗွီ ဒွန်တွဲဖြစ်ပွားမှု" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အိပ်ချ်အိုင်ဗွီပိုး ကူးစက်ခံရသူများတွင် အခွင့်အရေးယူ ဝင်ရောက်တတ်သော ရောဂါများအနက် တီဘီရောဂါသည် အဖြစ်အများဆုံး ဖြစ်သည်။
•	အိပ်ချ်အိုင်ဗွီလူနာများတွင် တီဘီရောဂါဖြစ်ပွားပါက တိုက်ရိုက်ကြည့်ရှု အချိန်တိုနှင့် ကု (DOT) နည်းဗျူဟာဖြင့် စနစ်တကျဆေးကုသမှု ခံယူပါက တီဘီရောဂါ ပျောက်ကင်းနိုင်ပါသည်။
•	စနစ်တကျ ဆေးကုသမှုမခံယူပါက ဆေးယဉ်ပါးတီဘီရောဂါ ဖြစ်လာနိုင်ပြီး အခြားသူများကိုလည်း ကူးစက်စေနိုင်ပါသည်။
•	အိပ်ချ်အိုင်ဗွီပိုးရှိသူများသည် တီဘီရောဂါကူးစက်ခံရခြင်းကြောင့် အေအိုင်ဒီအက်(စ်) ရောဂါအဆင့်သို့ အရောက်မြန်နိုင်သည်။
•	တီဘီလူနာအားလုံး အိပ်ချ်အိုင်ဗွီပိုး ရှိ/မရှိ သွေးစစ်ဆေးခြင်းနှင့် လိုအပ်သော ကုသစောင့်ရှောက်မှုများပေးခြင်းကို မြို့နယ်ကျန်းမာရေးဌာနများတွင် ပြုလုပ်ပေးနေပါသည်။
•	တီဘီ/ အိပ်ချ်အိုင်ဗွီ ဒွန်တွဲလူနာများအား အေအာတီကုသမှုခံယူရန် အေအာတီဆေးကုဌာနများသို့ ညွှန်းပို့ပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆေးယဉ်ပါးတီဘီရောဂါ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တီဘီရောဂါ ကုသဆေးများကို တီဘီပိုးမှ ယဉ်ပါးသွားခြင်းဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆေးယဉ်ပါးတီဘီရောဂါ၏ လက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သာမန်တီဘီရောဂါလက္ခဏာများကဲ့သို့ ဖြစ်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သာမန်တီဘီဖြစ်စေ၊ ဆေးယဉ်ပါးတီဘီဖြစ်စေ လေထဲမှတဆင့် ကူးစက်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆေးယဉ်ပါးတီဘီရောဂါ ဖြစ်ရခြင်းအကြောင်းရင်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တီဘီလူနာများအနေနှင့်
-	ညွှန်ကြားထားသည့် ဆေးဝါးများကို စနစ်တကျ (အချိန်မှန်၊ ဆေးညွှန်းနှင့် ပမာဏမှန်၊ ဆေးပတ်မှန်) မသောက်ခဲ့ခြင်း
-	ကျန်းမာရေးစောင့်ရှောက်မှုပေးသည့်သူများမှ စနစ်တကျညွှန်ကြားခြင်းနှင့် စနစ်တကျ ကြပ်မတ်ကုသပေးခဲ့ခြင်း မရှိသဖြင့် ဆေးယဉ်ပါးသွားခြင်း
•	ဆေးယဉ်ပါးတီဘီရောဂါပိုးရှိသူထံမှ တိုက်ရိုက်ကူးစက်ခံရခြင်း`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆေးယဉ်ပါးတီဘီရောဂါကို ကုသခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ကုထုံးမှာ အနည်းဆုံးဆေး (၅)မျိုးနှင့် ကုသရပါမည်။ ဆေး(၁)မျိုးမှာ ထိုးဆေးဖြစ်ပါသည်။
•	ကျန်းမာရေးဝန်ထမ်းများ၏ တိုက်ရိုက်ကြည့်ရှု အစီအစဉ်ဖြင့် တစ်နေ့လျှင် (၂)ကြိမ် နေ့စဉ် ဆေးသောက်ရပါမည်။ ဆေးကုသချိန်သည် (၂၀) လ ကြာမြင့်ပါမည်။ ထိုးဆေးမှာ နေ့စဉ် (၁)ကြိမ်ဖြင့် အနည်းဆုံး (၆)လ ထိုးရပါမည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>
</List.Section>
<Text style={styles.subtitle}>ဆေးကုသရာတွင် ဘေးထွက်ဆိုးကျိုးများ</Text>  
<Text style={styles.p}>•	ရင်ပူခြင်း၊ ပျို့အန်ခြင်း၊ ဝမ်းလျှောခြင်းနှင့် ဆေးထိုးသည့်နေရာတွင် နာကျင်ခြင်းများ ခံစားရတတ်ပါသည်။
{"\n"}•	အများအားဖြင့် ဆေးယဉ်ပါးတီဘီဆေး၏ ဘေးထွက်ဆိုးကျိုးများသည် အလွန်ပြင်းထန်သည့်အတွက် ၎င်းဘေးထွက်ဆိုးကျိုးများကို ခံစားရသည့်အခါ ဆရာဝန်၊ ဆရာမများအား ဆောလျင်စွာ အကြောင်းကြားရပါမည်။
{"\n"}•	မိမိဆန္ဒအရ ဆေးကုသမှု ရပ်တန့်ခြင်းအား လုံးဝမပြုလုပ်သင့်ပါ။
</Text>
<Text style={styles.subtitle}>လူနာနှင့် လူနာ၏ အသုံးအဆောင်ပစ္စည်းများကို ကိုင်တွယ်ပြီးတိုင်း လက်ကို ဆပ်ပြာနှင့် စင်ကြယ်စွာဆေးကြောပါ။</Text>
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