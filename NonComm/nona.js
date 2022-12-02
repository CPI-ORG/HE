import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nona({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၈.၁	သွေးတိုးရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ယေဘုယျအားဖြင့် သွေးပေါင်ချိန် ၁၄၀/၉၀ mmHg နှင့်အထက်ရှိပါက သွေးတိုး ရောဂါဟု သတ်မှတ်သည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}	သွေးတိုးရောဂါသည် အသက်အရွယ်မရွေး ဖြစ်နိုင်ပါသည်။ အသက်ကြီးသူများတွင် အကြောင်းရင်းခံမရှိဘဲ သွေးတိုးရောဂါဖြစ်နိုင်ပြီး အသက်ငယ်သူများတွင် အခြားအကြောင်း ရင်းခံတစ်ခုခုကြောင့် သွေးတိုးနိုင်သည်။ ဉပမာအားဖြင့် ကျောက်ကပ်သွေးကြောကျဉ်းရောဂါ ဟော်မုန်းဂလင်းရောဂါ၊ မွေးရာပါ နှလုံးသွေးလွှတ်ကြောမကြီး ကျဉ်းရောဂါနှင့် ဆေးဝါးများ ၏  ဘေးထွက်ဆိုးကျိုးများကြောင့် သွေးတိုးနိုင်ပါသည်။</Text>
         <List.Accordion
        title="သွေးတိုးရောဂါဖြစ်နိုင်သော အကြောင်းအရင်းများမှာ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•အငန်၊ အဆီနှင့် ဟင်းချိုမှုန့် အစားများ လွန်းခြင်း\n•ဆီးချိုရောဂါရှိခြင်း\n•အဝလွန်ခြင်း\n•မိဘမျိုးရိုးတွင် သွေးတိုးရောဂါရှိခြင်း\n•ဆေးလိပ်၊ အရက်သောက်သုံးခြင်း\n•ကျောက်ကပ်ရောဂါနှင့် အခြားရောဂါ များရှိခြင်း\n•အချို့ဆေးဝါးများသောက်သုံးနေခြင်း (ဉပမာ-ပဋိသန္ဓေတားဆေးများ)\n•စိတ်ဖိစီးမှုများခြင်း\n•ကိုယ်ဝန်ဆောင်ခြင်း\n•ကိုယ်လက်လှုပ်ရှားမှုနည်းခြင်း စသည် တို့ဖြစ်သည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="မှန်ကန်သော သွေးပေါင်ချိန်အဖြေရရှိရန်အတွက် သွေးပေါင်ချိန်တိုင်းတာရာတွင် လိုက်နာ သင့်သောအချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	သွေးပေါင်မချိန်မီ လူနာကို တိတ်ဆိတ်ငြိမ်သက်သောအခန်းတွင် ၅ မိနစ်ခန့်ထိုင်ပြီး အနားယူစေရပါမည်။
•	သွေးပေါင်ချိန်မည့် လက်မောင်းတွင် တင်းကြပ်သောအဝတ်များ မဝတ်ထားရပါ။
•	လက်မောင်းကို နှလုံးနှင့်တပြေးညီ သက်တောင့်သက်သာ အနေအထားမှာ ရှိစေရပါ မည်။
•	သွေးပေါင်ချိန်စက် အသုံးပြုရာမှာလည်း စံညွှန်းမီကောင်းမွန်သောစက်ကို အသုံးပြု သင့်ပြီး သင့်တော်သော လက်မောင်းပတ် အရွယ်အစားဖြစ်ရန်လည်း လိုအပ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="အန္တရာယ်ရှိသော လက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	လေဖြတ်ခြင်း၊ လေဖြန်းခြင်း
•	နှလုံးကြီးခြင်းကြောင့် အမောဖောက်လာခြင်း
•	နှလုံးသွေးကြောကျဉ်းခြင်းကြောင့် ရင်ဘတ်အောင့်ခြင်း
•	ခြေထောက်သွေးကြောများ ကျဉ်းလာခြင်းကြောင့် လမ်းလျှောက်စဉ် ခြေထောက် ကြွက်သားများ နာလာခြင်း
•	မျက်စိဆံခြည်မျှင်သွေးကြောများ သွေးယိုစိမ့်ခြင်းနှင့် မျက်စိအမြင်လွှာပျက်စီးခြင်း ကြောင့် အမြင်မှုန်ဝါးခြင်း
•	ကျောက်ကပ်ပျက်စီးခြင်းကြောင့် ဆီးတွင်အနည်ပါခြင်း၊ ဆီးဆိပ်တက်ခြင်းနှင့် ခြေ ထောက်ဖောရောင်ခြင်း`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>အထက်ပါလက္ခဏာများ ဖြစ်ပေါ်လာပါက နီးစပ်ရာဆေးရုံ၊ ဆေးခန်းသို့ အမြန်ဆုံး သွားရောက်ပြသကုသမှု ခံယူပါ။</Text>
      </List.Accordion>

      <List.Accordion
        title="သွေးတိုးရောဂါကုသခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`  	သွေးတိုးရောဂါရှိပါက ဆေးဝါးနှင့်ကုသခြင်းအပြင် အောက်ပါအပြုအမူ အနေအထိုင် များကို လိုက်နာဆောင်ရွက်သင့်ပါသည်။
•	သင့်တော်သော ကိုယ်အလေးချိန်ရှိအောင် ထိန်းခြင်း (ခန္ဓာကိုယ်အညွှန်းကိန်း (BMI) ၁၈.၅ မှ ၂၄.၉ ကီလိုဂရမ်/စတုရန်းမီတာ) 
•	အသီးအနှံနှင့် ဟင်းသီးဟင်းရွက်များ၊ အဆီနည်းသော နို့ထွက်ပစ္စည်းများစားသုံးခြင်း
•	ပြည့်ဝဆီ (ဉပမာ ဝက်ဆီ၊ အမဲဆီကဲ့သို့သော တိရစ္ဆာန်မှရသောအဆီ၊ စားအုန်းဆီ၊ ပြန်ကြော်ဆီကဲ့သို့သော ပုံပြောင်းဆီ) ပါသော အစားအစာများ ရှောင်ကြဉ်ခြင်း`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="သွေးတိုးရောဂါကုသရာတွင် ကြုံတွေ့ရတတ်သော အခက်အခဲများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အချို့သူများတွင် သွေးတိုးရောဂါရှိနေသော်လည်း ရောဂါလက္ခဏာမပြဘဲ သွေးတိုး၏ နောက်ဆက်တွဲပြဿနာများ (လေဖြတ်ခြင်း၊ ကျောက်ကပ်ပျက်စီးခြင်းများ) ဖြစ်ပေါ် လာမှသာ သွေးတိုးရောဂါရှိမှန်း သိရှိတတ်ပါသည်။
•	ဆေးမှန်မှန်မသောက်သော လူနာများတွင် သွေးပေါင်ချိန်ထိန်းရခက်ခဲသော ပြဿနာ တွေ့ရှိရပါသည်။
•	သွေးပေါင်ချိန်ထိန်းရန် ခက်ခဲသော အခြေအနေများ ရှိတတ်ပါသည်။
(ဉပမာ	-	ဆေးမှန်မှန်မသောက်သော လူနာများ
	-	အသက် ၈၀ အောက် လူနာများတွင်
	-	ဆီးချို၊ ကျောက်ကပ်နှင့် နှလုံးသွေးကြောရောဂါရှိသောလူနာများတွင် သွေးပေါင်ချိန် ၁၃၀/၈၀ mmHg နှင့်အောက်တွင်ရှိရန်)
•	အချို့သူများတွင် ရည်မှန်းထားသော သွေးပေါင်ချိန်တွင် ထိန်းထားနိုင်ရန်အတွက် သွေးပေါင်ကျဆေးတစ်မျိုးတည်းနှင့် မလုံလောက်ဘဲ ဆေး(၂)မျိုး၊ (၃)မျိုးပေါင်းရခြင်း များရှိတတ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>
      <List.Accordion
        title="ကာကွယ်နိုင်မည့်နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အမျှင်ဓါတ်နှင့် ဗီတာမင်များပြီး လတ်ဆတ်သော သစ်သီးဝလံ၊ ဟင်းသီးဟင်းရွက်နှင့် နှံစားသီးနှံ (ပြောင်း၊ လူး၊ ဆတ်) များများစားသုံးခြင်း 
•	နို့နှင့်ဒိန်ချဉ်များကို အဆီဓါတ်ထုတ်၍ စားသုံးခြင်း
•	ပြည့်ဝဆီများအစား ငါးနှင့်သီးနှံများမှရသော မပြည့်ဝဆီနှင့် အစားထိုးစားသုံးခြင်း
•	ပဲအမျိုးမျိုး (ဉပမာ-ကုလားပဲ)၊ အစေ့အဆန် (ဉပမာ-သီဟိုဠ်စေ့)၊ အဆီပေါသောငါး ကို တစ်ပါတ်လျှင် အနည်းဆုံး နှစ်ကြိမ်စားသုံးခြင်း
•	အငန်ဓါတ်သည် သွေးပေါင်ချိန်ကို တက်စေသဖြင့် အငန်ဓါတ်များသော ငါးပိ၊ ငံပြာ ရည်တို့ကို ရှောင်ခြင်း
•	အသား/ငါးခြောက်များနှင့် အသင့်စား အစားအစာများကို ရှောင်ခြင်း စသည်တို့ဖြင့် သွေးတိုးရောဂါကို ကာကွယ်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

      <List.Accordion
        title="သွေးတိုးရောဂါရှိပါက လိုက်နာရန်အချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ကျန်းမာရေးဝန်ထမ်းများမှ ညွှန်ကြားသော ဆေးဝါးများကို ပုံမှန်သောက်ပါ။
•	သွေးကျဆေးများသည် လူနာတစ်ဦးနှင့်တစ်ဦး အာနိသင်နှင့် ဆိုးကျိုးများ မတူတတ် သဖြင့် တစ်ဦးချင်း သက်ဆိုင်ရာကျန်းမာရေးဝန်ထမ်းနှင့် တိုင်ပင်စမ်းသပ်ပြီးမှ ဆေး သောက်ပါ။
•	သွေးပေါင်မှန်မှန်ချိန်ပါ။
•	မဝလွန်း၊ မပိန်လွန်း သင့်တော်သည့် ကိုယ်အလေးချိန်ရှိအောင် ထိန်းသိမ်းပါ။
•	သင့်တော်သည့် ကိုယ်လက်လှုပ်ရှားမှုတစ်ခုခုကို နေ့စဉ်နာရီဝက်ခန့် မှန်မှန်ပြုလုပ်ပါ။
•	ဆေးလိပ်သောက်ခြင်း၊ ကွမ်းစားခြင်းကိုဖြတ်ပါ။
•	ငါး၊ ဟင်းသီးဟင်းရွက်နှင့် အသီးအနှံတို့ကို များများစားပါ။
•	အရက်အလွန်အကျွံသောက်ခြင်းကို ရှောင်ကြဉ်ပါ။
	သွေးတိုးရောဂါကို အချိန်မီသိရှိပြီး ထိထိရောက်ရောက် ဆေးကုသမှုခံယူပါက သွေး တိုးရောဂါကို အခြေခံပြီးဖြစ်ပေါ်လာမည့် နှလုံးသွေးကြောရောဂါ၊ လေဖြတ်ရောဂါ၊ ကျောက် ကပ်ပျက်စီးခြင်း၊ မျက်စိအမြင်လွှာပျက်စီးခြင်းတို့ကို အချိန်မီကာကွယ်နိုင်မည် ဖြစ်သကဲ့သို့ သက်တမ်းစေ့နေနိုင်မည် ဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#F8FFD7',
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
    backgroundColor:'#dfe5c1',
    textDecorationLine: 'underline',
  }
    
    })