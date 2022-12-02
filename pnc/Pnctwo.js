import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'



export default function Pnctwo({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView style={{backgroundColor:'#E6CEFF'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (ခ) သားဆက်ခြားခြင်း
      </Text>
      <Text style={styles.p}>
      မိခင်နှင့်ကလေး ကျန်းမာရေးအတွက် တစ်ဉီးကြား အနည်းဆုံး(၂)နှစ် မှ (၃)နှစ် သားဆက်ခြားပါ။ သားဆက်ခြားရာတွင် အတိုင်ပင်ခံဆွေးနွေးမှုခံယူပြီး မိမိနှင့် သင့်တော် သောသားဆက်ခြားနည်းလမ်းကို ရွေးချယ်ပါ။
      {"\n"}
      <Text style={styles.subp}>
၁။	နေ့စဉ်သောက် စားဆေး</Text>
	ရာသီသွေးစပေါ်သည့်ရက်မှ (၅)ရက်အတွင်း စပြီးသောက်ပါ။ စားဆေးသည် ကလေး (၆)လအောက် နို့တိုက်မိခင်များ၊ ရင်သားအဖုအကျိတ်ရှိသူများ၊ နှလုံး၊ သွေးတိုး၊ ဆီးချို၊ ကျောက်ကပ်ရောဂါရှိသူများတွင် သောက်သုံးရန် မသင့်ပါ။ အသက်(၃၅) နှစ်ကျော် ဆေးလိပ် သောက်သော အမျိုးသမီးများလည်း သောက်သုံးရန်မသင့်ပါ။
  {"\n"} <Text style={styles.subp}>
၂။	သုံးလခံ သားဆက်ခြားထိုးဆေး</Text>
	ရာသီသွေးစပေါ်သည့်ရက်မှ (၅) ရက်အတွင်း ထိုးနိုင်ပါသည်။ ကလေးမီးဖွားပြီးသူ များမွေးဖွားပြီး (၄၂)ရက်တွင် ဆေးထိုးနိုင်ပါသည်။ ပထမဆေးပြီး (၃)လအကြာတွင် နောက်တစ်လုံး ထပ်ထိုးပါ။ အလွန်အမင်းဝသူများ၊ အသည်းရောင် အသားဝါရောဂါ ရှိသူများ၊ ရင်သားကင်ဆာ၊ အခြားကင်ဆာ ရောဂါရှိသူများ ထိုးဆေးထိုးရန် မသင့်ပါ။ အသားထိုးဆေး နှင့် အရေပြားအောက် ထိုးဆေးဟူ၍ (၂)မျိုးရှိပါသည်။
  {"\n"}<Text style={styles.subp}>
၃။	ကွန်ဒုံး</Text>
	သန္ဓေတားလိုလျှင် သော်လည်းကောင်း၊ လိင်မှတဆင့် ကူးစက်တတ်သောရောဂါများ မှကာကွယ်ရန်လည်းကောင်း အသုံးပြုနိုင်သည်။
{"\n"} <Text style={styles.subp}>
၄။	သားအိမ်တွင်းထည့် သားဆက်ခြားပစ္စည်း
</Text>
ရာသီသွေးပေါ်နေချိန် (သို့) ပေါ်ပြီးအချိန်၊ မီးဖွားပြီး (၄၈)နာရီအတွင်း (သို့) (၄)ပတ် ကျော်လျှင်၊ သားလျှော့ပြီးလျှင် ပြီးချင်းပိုးဝင်သည့် လက္ခဏာမရှိလျှင် ထည့်သွင်းနိုင် ပါသည်။ ကိုယ်ဝန်မရှိကြောင်း သေချာလျှင် ရာသီစက်ဝန်း၏ မည်သည့်အချိန်တွင် မဆိုထည့်နိုင်သည်။ နို့တိုက်မိခင်များ၊ စားဆေး/ ထိုးဆေးများနှင့် မတည့်သော သားဆက်ခြားလိုသူများနှင့် သင့်တော်ပါသည်။ ကိုယ်ဝန်ဆောင်နိုင်ခြေရှိသော အမျိုး သမီးတိုင်း ထည့်သွင်းနိုင်ပြီး မီးဖွားပြီးသူဖြစ်ရန် မလိုပါ။
{"\n"} <Text style={styles.subp}>
၅။	လက်မောင်းအရေပြားအောက်သွင်းသားဆက်ခြားပစ္စည်း
</Text>
ရာသီသွေးပေါ်နေချိန် (သို့) ပေါ်ပြီးစအချိန်၊ ကလေးမွေးပြီး (၄)ပတ်အကြာတွင် ထည့် သွင်းနိုင်ပါသည်။ ကိုယ်ဝန်မရှိကြောင်း သေချာလျှင် ရာသီစက်ဝန်း၏ မည်သည့်အချိန် တွင်မဆိုထည့်နိုင်သည်။ အသက်အရွယ်မရွေး၊ ထည့်သွင်းနိုင်ပြီး မီးဖွားပြီးသူဖြစ်ရန် မလိုပါ။
{"\n"} <Text style={styles.subp}>
၆။	အရေးပေါ်သန္ဓေတားသောက်ဆေး
</Text>
အကာအကွယ်မဲ့ လိင်ဆက်ဆံခြင်း၊ သုံးနေကျသန္ဓေတားနည်းလမ်းများ သုံးစွဲမှုလွဲမှား ခြင်းနှင့် လိင်မှုဆိုင်ရာ အကြမ်းဖက်ခံရခြင်းတို့ ဖြစ်ပွားပြီးနောက် နာရီပေါင်း (၁၂၀) အတွင်းစောနိုင်သမျှ စောစွာသောက်ခြင်းဖြင့် ကိုယ်ဝန်မရအောင် ကာကွယ်ပေးပါ သည်။ ကိုယ်ဝန်ပျက်ခြင်းကို မဖြစ်စေပါ။
{"\n"} {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"} <Text style={[styles.subtitle,{backgroundColor:'#cfb9e5' }]}> အတိုင်းပင်ခံဆွေးနွေးခံယူပြီး သားဆက်ခြားပါ။</Text>     
      
      </Text>
      
      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#E6CEFF',
      marginBottom:10,
      marginBottom:20,
    },
  headtitle:{
    color:'#102027',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:20,
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
    marginTop:10,
    color:'#4e342e',
    fontSize:15,
    backgroundColor:'#cfb9e5',
    textDecorationLine: 'underline',
  }
    
    })