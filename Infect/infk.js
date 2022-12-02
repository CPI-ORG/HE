import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infk({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၁၁	ကြက်ငှက်တုပ်ကွေးရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ကြက်ငှက်တုပ်ကွေးရောဂါသည် ကူးစက်မြန်ဗိုင်းရပ်စ်ရောဂါ တစ်မျိုးကြောင့် ဖြစ်ပွား ပါသည်။ အဆိုပါဗိုင်းရပ်စ်ပိုးသည် ကြက်၊ ငှက်၊ ဆောင်းခိုငှက်တို့တွင် အများအားဖြင့် တွေ့ရပြီး လူသို့ ကူးစက်ပါက အသက်အန္တရာယ်စိုးရိမ်ရသော ပြင်းထန်သည့်ရောဂါတစ်မျိုး ဖြစ်ပါသည်။
         </Text>
         
         <List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အဖျားကြီးခြင်း
•	လည်ချောင်းနာခြင်း
•	ချောင်းဆိုးခြင်း
•	ကြွက်သားများနှင့် အဆစ်အမြစ်များ နာကျင်ကိုက်ခဲခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကြက်ငှက်တုပ်ကွေးဗိုင်းရပ်စ်ပိုးသည် တိရစ္ဆာန်မှ လူသို့ ကူးစက်ပြီး အောက်ဖော်ပြပါ အခြေအနေများတွင် ရောဂါပိုးကူးစက်ခံရနိုင်ချေ ပိုးများပါသည်။
•	ဗိုင်းရပ်စ်ပိုး ကူးစက်ခံထားရသော ကြက်၊ ငှက်၊ ဘဲများနှင့် ၎င်းတို့၏ စွန့်ပစ်ပစ္စည်း များကို ထိတွေ့ကိုင်တွယ်ခြင်း
•	ဗိုင်းရပ်စ်ပိုး ကူးစက်ခံထားရသော ကြက်၊ ငှက်၊ ဘဲတို့၏ အသား၊ ဥ၊ ကလီစာ စသည်တို့ကို  စားသောက်ခြင်း
•	ဗိုင်းရပ်စ်ပိုး ကူးစက်ခံရသော မွေးမြူရေးခြံများသို့ သွားရောက်ခြင်းနှင့် အနီးပတ်ဝန်း ကျင်တွင် နေထိုင်ခြင်း
•	ဗိုင်းရပ်စ်ပိုး ကူးစက်ခံထားရသူမှ အခြားသူတစ်ဦးသို့ ကူးစက်နိုင်ခြင်း
•	ပြင်းထန်အဆုတ်ရောင် နမိုးနီးယားရောဂါလက္ခဏာများ ဖြစ်ပွားကာ အသက်သေ ဆုံးနိုင်ခြင်း`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ဆေးကုသမှုခံယူခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ကြက်ငှက်တုပ်ကွေးရောဂါကို ဗိုင်းရပ်စ်ပိုးသတ်ဆေးတို့ဖြင့် စောစီးစွာ ကုသပေးပါက ရောဂါဖြစ်ပွားမှုအား ထိရောက်စွာ ကုသနိုင်ပါသည်။ သို့သော် ဗိုင်းရပ်စ်ပိုးသည် ဆေးယဉ်ပါး ခြင်းဖြစ်ပွားလွယ်သောကြောင့် ရောဂါမကူးစက်အောင် ကြိုတင်ကာကွယ်ခြင်းသည် အကောင်ဆုံးဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        
      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`(က)	အောက်ဖော်ပြပါ အခြေအနေများကို ဆောင်ရွက်ပြီးတိုင်း လက်ကို ဆပ်ပြာဖြင့် စင်ကြယ်စွာ ဆေးကြောရမည်။
•	အစာမစားမီနှင့် အစာစားပြီးချိန်
•	အစားအစာမပြင်ဆင်မီနှင့် ပြင်ဆင်ပြီးချိန်
•	ကြက်၊ ငှက်အသားများနှင့် ကြက်၊ ငှက် စွန့်ပစ်ပစ္စည်းများ ကိုင်တွယ်ပြီးချိန်
•	လူနာအသုံးအဆောင်ပစ္စည်းများ ကိုင်တွယ်ပြီးချိန်နှင့် လူနာကို ပြုစုပြီးချိန်
•	နှပ်ညှစ်ပြီးချိန်၊ နှာချေ၊ ချောင်းဆိုးပြီးချိန်
(ခ)	နှာချေ၊ ချောင်းဆိုးသောအခါ ပါးစပ်နှင့် နှာခေါင်းစည်း အသုံးပြုခြင်း၊ တစ်ရှူး၊ လက်ကိုင်ပဝါ (သို့မဟုတ်) မိမိလက်အား တံတောင်ဆစ်ကွေး၍ နှာခေါင်းနှင့် ပါးစပ် ကိုအုပ်ပေးခြင်းပြုလုပ်ပါ။
(ဂ)	ကြက်ငှက်အသားများအား ကျက်အောင် ချက်ပြုတ်ပြီးမှ စားသုံးပါ။
(ဃ)	မွေးမြူရေးခြံများသို့ မလိုအပ်ဘဲ ဝင်ထွက်၊ သွားလာခြင်း မပြုပါနှင့်။
(င)	ကြက်ငှက်များကို လူနေရပ်ကွက်များ နေထိုင်ရာ အိမ်အတွင်းနှင့် အိမ်အောက်များ တွင်မွေးမြူခြင်းမပြုပါနှင့်။
(စ)	စီးပွားဖြစ် ကြက်ငှက်မွေးမြူရာတွင် စနစ်တကျဇီဝလုံခြုံရေးကောင်းမွန်သော မွေးမြူ ရေးစနစ်အတိုင်း လိုက်နာဆောင်ရွက်ပါ။
(ဆ)	ကြက်၊ ငှက်အသားနှင့် ကြက်၊ ငှက်၊ ဘေးထွက်ပစ္စည်းများကို စနစ်တကျ ကိုင်တွယ်၊ ပြင်ဆင်၊ စွန့်ပစ်ပါ။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      
      <List.Accordion
        title="အရေးကြီးအချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`(က)	ကြက်၊ ငှက်များ အစုလိုက်သေဆုံးမှုဖြစ်ပွားခြင်း (သို့မဟုတ်) ကြက်၊ ငှက်များတွင် ကြက်ငှက်တုပ်ကွေးရောဂါ ဖြစ်ပွားကူးစက်နေသည်ဟု သံသယရှိပါက သက်ဆိုင်ရာ ဒေသအာဏာပိုင် (သို့မဟုတ်) မွေးမြူရေးနှင့် ကုသရေးဌာနမှ တာဝန်ရှိသူသို့ ချက်ချင်းသတင်းပေးပို့ပါ။
        (ခ)	ပြည်သူလူထုအတွင်း အဆုတ်ရောင်နမိုးနီးယားရောဂါ အစုလိုက်ဖြစ်ပွားမှု (သို့မဟုတ်) ကြက်၊ ငှက်များနှင့် ထိတွေ့မှုရှိသူများတွင် တုပ်ကွေးဆန်သော ရောဂါ များဖြစ်ပွားမှုကို တွေ့ရှိခဲ့ပါက ဆေးရုံ(သို့) နီးစပ်ရာကျန်းမာရေးဌာနသို့ ချက်ချင်း သတင်းပို့အကြောင်းကြားပါ။
        (ဂ)	တုပ်ကွေးရောဂါဖြစ်ပွားလျှင် စောစီးစွာ ဆေးကုသမှုခံယူပါ။`}
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