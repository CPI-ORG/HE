import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infr({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၁၈	အသည်းရောင်အသားဝါ (ဘီ)
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         အသည်းရောင်အသားဝါရောဂါပိုးများအနက် (ဘီ) ပိုးကြောင့်ဖြစ်ပွားသည့် အသည်း ရောဂါတစ်မျိုးဖြစ်ပြီး ရုတ်တရက်အသည်းရောင်ရောဂါနှင့် နာတာရှည်အသည်းရောဂါဖြစ်‌စေ နိုင်သည့် အသက်အန္တရာယ်ရှိစေနိုင်သော ရောဂါတစ်မျိုးဖြစ်သည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
  ထို့ပြင်အသည်းရောင်အသားဝါရောဂါ(ဘီ)သည် ကျန်းမာရေးစောင့်ရှောက်မှုပေးနေ သောကျန်းမာရေးဝန်ထမ်းများအတွက် အရေးကြီးသော အန္တရာယ်ရှိသည့် လုပ်ငန်းခွင် ရောဂါတစ်မျိုးလည်း ဖြစ်ပါသည်။
	{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
  လက်ရှိတွင် စိတ်ချရ၍ အရည်အသွေးကောင်းမွန်သော ကာကွယ်ဆေးများဖြင့် ၎င်း ရောဂါအား (၉၅%) ကာကွယ်နိုင်ပါသည်။ နာတာရှည်အသည်းရောဂါခံစားနေရသော လူနာများသည် အသည်းကင်ဆာရောဂါ အဆင့်သို့ လျင်မြန်စွာ ရောက်ရှိတတ်ပြီး လအနည်း ငယ်အတွင်း အသက်သေဆုံးနိုင်ပါသည်။
  </Text>

         <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•ဖျားခြင်း\n•ဆီးအရောင်ရင့်ခြင်း၊ အသားဝါခြင်း၊ မျက်လုံးဝါခြင်း၊\n•မောပန်းနွမ်းနယ်ခြင်း\n•အစားအသောက်ပျက်ခြင်း၊\n•ပျို့အန်ခြင်း၊ ဗိုက်အောင့်ခြင်း\n•အဆစ်အမြစ်ကိုက်ခဲခြင်း၊`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	မိခင်မှကလေးသို့ ကလေးမွေးဖွားစဉ်တွင် ကူးစက်နိုင်ခြေအများဆုံးဖြစ်ပါသည်။
•	ရောဂါပိုးရှိသူနှင့် လိင်ဆက်ဆံခြင်း
•	ရောဂါပိုးဝင်နေသော သွေး၊ ခန္ဓာကိုယ်မှထွက်သော အရည်များ၊ တံတွေးများ၊ ရာသီးသွေးများနှင့် ထိတွေ့ကိုင်တွယ်မှုရှိြခင်း 
•	ရောဂါပိုးပါဝင်သော သွေးသွင်းမိခြင်း
•	ရောဂါပိုးပါဝင်သော ကိုယ်ခန္ဓာအစိတ်အပိုင်းများ အစားထိုးကုသခြင်း
•	ကျန်းမာရေးဝန်ထမ်းများအနေဖြင့် ရောဂါရှိသူလူနာအား ကုသမှုပေးနေစဉ် မတော် တဆအပ်စူးမိခြင်း (သို့) အကြောတွင်းသို့ မူးယစ်ဆေးထိုးသွင်လေ့ရှိသူများတွင် အပ်နှင့် ဆေးထိုးပြွန်များအား တစ်ဦးနှင့်တစ်ဦးဝေမျှ အသုံးပြုခြင်း၊ တစ်ခါသုံးဆေး ထိုးပြွန်အား အသုံးမပြုခြင်း
အကျဉ်းကျနေသူများ၊ မူးယစ်ဆေးဝါးအသုံးပြုလေ့ရှိသူများ၊ လုပ်ငန်းခွင်တွင် သွေး (သို့) သွေးနှင့်ဆက်စပ်ပစ္စည်းများနှင့် ထိတွေ့မှုများရှိသော ကျန်းမာရေးဝန်ထမ်းများ အသည်းရောင်အသားဝါရောဂါ (ဘီ) အဖြစ်များသော နိုင်ငံများသို့ ခရီးသွားလေ့ရှိသူ များတွင် ပိုမိုဖြစ်ပွားနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အသည်းရောင်အသားဝါရောဂါ (ဘီ) ပိုး ကူးစက်ခြင်းမခံရအောင် ကြိုတင်ကာကွယ် ဆေးအကြိမ်ပြည့်ထိုးနှံခြင်းသည် အကောင်းဆုံးဖြစ်ပါသည်။
•	ကလေးမွေးဖွားပြီး (၂၄)နာရီအတွင်း မွေးကင်းစကလေးအား အသည်းရောင်အသား ဝါရောဂါ(ဘီ) ကာကွယ်ဆေးထိုးနှံသင့်ပါသည်။ 
•	လူတိုင်း အသည်းရောင်အသားဝါ ကာကွယ်ဆေး (၃)ကြိမ် ထိုးနှံခြင်းဖြင့် ရောဂါပိုး ကူးစက်ခံရမှုမှ ကာကွယ်နိုင်ပါသည်။
•	သွေးမလှူမီ သွေးအလှူရှင်အား အိပ်ချ်အိုင်ဗွီ၊ ဆစ်ဖလစ်၊ အသည်းရောင်အသားဝါ‌ ရောဂါ(ဘီ) နှင့် (စီ) ရှိ/မရှိ စစ်ဆေးခြင်းများ ပြုလုပ်ရပါမည်။`}
titleNumberOfLines={200}/>
        </List.Accordion> 
        

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