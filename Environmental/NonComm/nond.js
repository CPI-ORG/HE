import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nond({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၈.၄	လေဖြတ်ရောဂါ
         </Text>
         <Text style={styles.p}>
         •	လေဖြတ်ရောဂါသည် အရေးပေါ်အခြေအနေတစ်ခုဖြစ်ပြီး အချိန်မီကုသမှုမရရှိပါက ဦးနှောက်၏လုပ်ဆောင်ချက်များ ဆုံးရှုံးနိုင်ပါသည်။
         {"\n"}•	ဦးနှောက်သည် ၎င်း၏လုပ်ငန်းများဆောင်ရွက်နိုင်ရန် လုံလောက်သော သွေးပမာဏ ပုံမှန်ရရှိရန် လိုအပ်ပါသည်။ လေဖြတ်ရောဂါကြောင့် ဦးနှောက်သို့ သွေးသွားလာမှု ရပ်ဆိုင်းသွားခြင်းဖြစ်သည်။ ဦးနှောက်၏အစိတ်အပိုင်းများသည် လုံလောက်သော သွေးပမာဏကို မရရှိပါက ၎င်းအစိတ်အပိုင်းမှ ထိန်းချုပ်ထားသော ခန္ဓာကိုယ်၏ လုပ်ငန်းများ ရပ်ဆိုင်းသွားသဖြင့် လေဖြတ်ရောဂါလက္ခဏာများကို ဖြစ်ပေါ်စေပါ သည်။
         {"\n"}{"\n"}
လေဖြတ်ရောဂါ အမျိုးအစားများ
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}အဓိကအားဖြင့် လေဖြတ်ရောဂါအမျိုးအစား (၂) မျိုးရှိပါသည်။
{"\n"}	(၁)	ဦးနှောက်အတွင်း သွေးကြောပိတ်၍ လေဖြတ်ခြင်း
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}•	ဦးနှောက်အတွင်းရှိ သွေးကြောငယ်များ ကျဉ်း၍ ပိတ်ခြင်း
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}•	နှလုံးနှင့် သွေးလွှတ်ကြောများမှ သွေးခဲငယ်များ လာရောက်ပိတ်ဆို့ခြင်း
{"\n"}	(၂)	ဦးနှောက်အတွင်း သွေးကြောပေါက်၍ လေဖြတ်ခြင်း</Text>

<List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`သွေးသွားလာမှုရပ်ဆိုင်းသွားသည့် ဦးနှောက်၏နေရာပေါ်တွင်မူတည်၍ ရောဂါ လက္ခဏာအမျိုးမျိုး ကွဲပြားနိုင်ပါသည်။ ထိုလက္ခဏာများမှာ 
•	မျက်နှာ၊ လက်၊ ခြေတစ်ဖက်ထုံခြင်း၊ လေးလံခြင်း၊ လုံးဝမလှုပ်ရှားနိုင် တော့ခြင်း၊ မသန်စွမ်းဖြစ်ခြင်း
•	စကားပြောဆိုဆက်ဆံရာတွင် အခက်အခဲရှိခြင်း
•	အစာ၊ ရေ မျိုရခက်ခဲခြင်း
•	ဆီးဝမ်း မထိန်းနိုင်ခြင်း
•	ထိတွေ့မှုအာရုံ ပျက်ယွင်းခြင်း
•	အမြင်အာရုံ ချို့ယွင်းခြင်း
•	မှတ်ဉာဏ်ချို့ယွင်းခြင်းနှင့် အာရုံစူးစိုက်နိုင်မှုအားနည်းခြင်း
•	စိတ်မထိန်းချုပ်နိုင်ခြင်း
•	သတိလစ်မေ့မြောခြင်း၊ တက်ခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>
     
      <List.Accordion
        title="ရောဂါဖြစ်စေသော အကြောင်းရင်းများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }} 
 theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title="ပြုပြင်ပြောင်းလဲ၍ မရနိုင်သော အကြောင်းရင်းများ"
titleNumberOfLines={500} style={styles.subp}/>
<List.Item title={`(၁)	အသက်ကြီးလာခြင်း
(၂)	အမျိုးသားဖြစ်ခြင်း
(၃)	မိဘမျိုးရိုးတွင် လေဖြတ်ရောဂါနှင့် နှလုံးရောဂါရှိခြင်း
(၄)	ယခင်က လေဖြတ်၊ လေဖြန်း၊ နှလုံးသွေးကြောပိတ်ဖူးခြင်း`}
titleNumberOfLines={500} />
<List.Item title="ပြုပြင်ပြောင်းလဲ၍ရနိုင်သော အကြောင်းရင်းများ"
titleNumberOfLines={500} style={styles.subp}/>
<List.Item title={`(၁)	သွေးတိုးရောဂါရှိခြင်း
	(၂)	နှလုံးရောဂါရှိခြင်း (နှလုံးခုန်မမှန်ခြင်း၊ နှလုံးသွေးကြောကျဉ်းခြင်း)
	(၃)	လည်ပင်းရှိ သွေးလွှတ်ကြောမကြီး၊ ထူခြင်း၊ ကျဉ်းခြင်း)
	(၄)	ဆေးလိပ်သောက်ခြင်း
	(၅)	သွေးအတွင်း အဆီဓာတ်များခြင်း
	(၆)	ဆီးချိုသွေးချိုရောဂါရှိခြင်း
	(၇)	အဝလွန်ခြင်း
	(၈)	အရက်အလွန်အကျွံသောက်သုံးခြင်း
	(၉)	ခန္ဓာကိုယ်လှုပ်ရှားမှုနည်းခြင်း`}
titleNumberOfLines={500} />


      </List.Accordion>

      <List.Accordion
        title="လေဖြတ်မည့် ရှေ့ပြေးလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဦးနှောက်အတွင်း သွေးသွားလာမှု ခေတ္တရပ်ဆိုင်းသွားသည့်အခါ လေဖြတ်မည့် အရိပ် အယောင်လက္ခဏာများ ပေါ်လာတတ်ပါသည်။ ၎င်းလက္ခဏာများသည် မိနစ်အနည်းငယ်မျှ သာ ကြာမြင့်၍ သွေးသွားလာမှု ပုံမှန်ပြန်ဖြစ်ပါက ချက်ချင်းပျောက်ကွယ် သွားလေ့ရှိပါသည်။ ဤသို့ဖြစ်ခြင်းကို လေဖြန်းခြင်း (သို့မဟုတ်) အသေးစား လေဖြတ်ခြင်းဟု ခေါ်လေ့ရှိပါသည်။ ထိုအချိန်အတွင်း စနစ်တကျကုသမှု မခံယူပါက လေဖြတ်ခြင်းအဆင့်သို့ ရောက်ရှိနိုင်ပါသည်။ ၎င်းလက္ခဏာများမှာ -
•	မျက်နှာ၊ လက်၊ ခြေတစ်ဖက် ရုတ်တရက်ထုံခြင်း၊ လေးလံခြင်း၊ မျက်နှာရွဲ့ခြင်း
•	ရုတ်တရက် စကားပြောမရခြင်း၊ ပြောသောစကားကို နားမလည်ခြင်း၊ စကား ဗလုံးဗထွေးဖြစ်ခြင်း
•	ရုတ်တရက် အမြင်အာရုံဝေဝါးခြင်း၊ နှစ်ထပ်မြင်ခြင်း
•	ရုတ်တရက် လမ်းမလျှောက်နိုင်တော့ခြင်း၊ ဒယီးဒယိုင်ဖြစ်ခြင်း၊ လက်မ မြှောက်နိုင်တော့ခြင်း
•	ရုတ်တရက် မူးဝေခြင်း
•	ရုတ်တရက် ပြင်းထန်စွာ ခေါင်းကိုက်ခြင်း`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="လေဖြတ်သည်ဟု ထင်ပါက" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`(၁)	မျက်နှာ (သို့) ပါးစပ် ရွဲ့နေခြင်းရှိ/မရှိ မျက်နှာကိုကြည့်ပါ။
(၂)	လက်နှစ်ဘက်စလုံးကိုယ်တိုင်မြှောက်နိုင်ခြင်းရှိ/မရှိလက်မြှောက်ခိုင်းကြည့်ပါ။
(၃)	စကားပြောခိုင်းကြည့်ပါ။ စကားဗလုံးဗထွေးပြောနေခြင်းရှိ/မရှိ (သို့) သင်ပြော သောစကားကို နားမလည်ဖြစ်နေခြင်းရှိ/မရှိ ကြည့်ပါ။
	အထက်ပါရှေ့ပြေးလက္ခဏာများထဲမှ တစ်ခုခုကိုတွေ့သည်နှင့် အလျင်အမြန်ဆေးကု သမှုခံယူရန် အနီးဆုံးဆေးရုံသို့ သွားရပါမည်။ အထက်ပါ ရှေ့ပြေးလက္ခဏာများ မိနစ် အနည်းငယ်အတွင်း ပျောက်သွားသည့်တိုင် ဆေးရုံသို့ သွားသင့်ပါသည်။ နောက်ထပ်ဖြစ်လာ မည့် အမှန်တကယ် လေဖြတ်ခြင်းကို ကာကွယ်နိုင်မည့် နောက်ဆုံးအခွင့်အရေးဖြစ်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="နောက်ဆက်တွဲ ဆောင်ရွက်ရန်" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`လေဖြတ်ရာမှပြန်လည်ကောင်းမွန်လာကြသူများအတွက် စနစ်တကျ ရေရှည်စောင့် ရှောက်မှုပေးရန် လိုအပ်သည်။ ဦးနှောက်နှင့် အာရုံကြောဆိုင်ရာ ထိခိုက်မှုကို စိတ်ရှည်စွာပြုစု ရန် လိုအပ်သည်။
	နာလန်ထမှုမြန်ရန် ကျွမ်းကျင်သောဆေးပညာရှင်များ၏ အကူအညီရယူ၍ လူနာ ကိုယ်တိုင်နှင့် မိသားစုမှ စိတ်ရှည်စွာ ဝိုင်းဝန်းတာဝန်ယူ ဆောင်ရွက်ကြရမည်။
	ရောဂါကြောင့် သန်စွမ်းမှု ပုံမှန်မရှိတော့သည့် ကြွက်သားများအတွက် လေ့ကျင့်ခန်း များ ပြုလုပ်ပေးရမည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သွေးပေါင်ချိန် ပုံမှန်ရှိရန် ထိန်းပါ။
•	သွေးချို၊ ဆီးချိုကို စနစ်တကျ ကုသပါ။
•	သွေးတွင်းအဆီဓါတ် မတက်အောင် ထိန်းပါ။
•	ဆေးလိပ်ဖြတ်ပါ။
•	အရက်အလွန်ကျွံသောက်ခြင်းမှ ရှောင်ကြဉ်ပါ။
•	အချို၊ အငန်၊ အဆီလွန်ကဲသော အစားအစာများကို ရှောင်ကြဉ်ပါ။
•	အမျှင်ဓါတ်များသော ဟင်းသီးဟင်းရွက်၊ သစ်သီးဝလံများကို နေ့စဉ်စားသုံးပါ။
•	ကိုယ်လက်လေ့ကျင့်ခန်းကို တစ်ပါတ် (၅) ကြိမ်၊ တစ်ရက် နာရီဝက်ခန့်ပြုလုပ်ပါ။
•	ကိုယ်အလေးချိန်ကို ပုံမှန်ထိန်းပါ။
•	စိတ်ဖိစီးမှုကို ဖြေဖျောက်ပါ။
•	လေမဖြတ်မီ ရှေ့ပြေးလက္ခဏာများတွေ့ရှိပါက ဆောလျင်စွာ ကုသမှု ခံယူပါ။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>လေဖြတ်ရောဂါလက္ခဏာများပေါ်လာချိန်မှ အချိန် (၄) နာရီခွဲအတွင်း ကျွမ်းကျင်သူတို့၏ ထိရောက်သော စမ်းသပ်ကုသပေးမှုရရှိရန် လိုအပ်ပါသည်။ စောစောကုလျှင် ပို၍အကျိုးရှိပါ သည်။ လေဖြတ်ရောဂါကို စောစီးစွာသိ၍ အချိန်မီထိရေက်စွာ ကုသနိုင်လျှင် အသက်ကယ်နိုင်ပါသည်။</Text>
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