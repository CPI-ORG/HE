import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'


export default function inff({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၆ 	ဇီကာရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ဇီကာရောဂါသည် ဇီကာဗိုင်းရပ်စ်ပိုးကြောင့်ဖြစ်သည်။ ဇီကာရောဂါပိုး ကူးစက်ခံရ သည့် လူငါးဉီးတွင်မှ တစ်ဉီးတွင်သာ ရောဂါလက္ခဏာပြတတ်သည်။ ယေဘုယျအားဖြင့် ဇီကာရောဂါသည် သူ့အလိုလိုပျောက်ကင်းသွားနိုင်သည့် ရောဂါဖြစ်သော်လည်း ဆိုးရွားပြင်း ထန်သည့် အာရုံကြောဆိုင်ရာ နောက်ဆက်တွဲရောဂါများ ဖြစ်ပွားတတ်သည်ကို ရှားရှားပါးပါး တွေ့ရှိရသည်။

{"\n"}<Text style={styles.subp}>ရောဂါလက္ခဏာများ</Text>
{"\n"}•	ဇီကာဗိုင်းရပ်စ်ရောဂါတွင် အဓိကတွေ့ရှိရသော ရောဂါလက္ခဏာများမှာ
{"\n"}•	ရုတ်တရက် ဖျားခြင်း
{"\n"}•	အရေပြားတွင် အနီရောင်အကွက်/အစက်များထွက်ခြင်း
{"\n"}•	မျက်သားနီ၍ ရောင်ရမ်းခြင်း။
{"\n"}•	ကြွက်သားနှင့် အဆစ်အမြစ်များ နာကျင်ကိုက်ခဲခြင်း
{"\n"}•	မအီမသာဖြစ်ခြင်း၊ ခေါင်းကိုက်ခြင်းစသည်တို့ဖြစ်ပြီး‌ ရောဂါလက္ခဏာများအား (၂) ရက်မှ (၇)ရက်အထိ ခံစားရနိုင်ပါသည်။
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}	ဇီကာရောဂါနှင့်‌ ရောဂါနောက်ဆက်တွဲအဖြစ် ကိုယ်ဝန်ဆောင်မိခင်များတွင် ဉီးခေါင်း သေးငယ်သော ကလေးငယ်များ မွေးဖွားလာခြင်း (Microcephaly) တို့ ဆက်စပ်မှုရှိနိုင် ကြောင်း ကမ္ဘာ့ကျန်းမာရေးအဖွဲ့မှ ထုတ်ပြန်ထားပါသည်။

{"\n"}<Text style={styles.subp}>ကူးစက်နိုင်သည့်နည်းလမ်းများ</Text>
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ဇီကာရောဂါသည် ဇီကာဗိုင်းရပ်စ် ရောဂါပိုး သယ်ဆောင်သော အေးဒီစ် အမျိုးအစား ခြင်ကျားကိုက်ခံရခြင်းကြောင့် ဖြစ်ပါသည်။ အဆိုပါ အေးဒီ(စ်)ခြင်ကျားသည် နေ့အချိန်တွင် ပိုကိုက်သည်။ ရောဂါကူးစက်ခံထားရသောသူနှင့် လိင်ဆက်ဆံခြင်းမှတစ်ဆင့် ဇီကာရောဂါ ကူးစက်နိုင်ပါသည်။
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ကိုယ်ဝန်ဆောင်မိခင်များ၊ ကိုယ်ဝန်ယူရန်ပြင်ဆင်နေသူများအနေဖြင့် ရောဂါကူးစက် ခြင်းမှကာကွယ်ရန် ဇီကာရောဂါဖြစ်ပွားလျက်ရှိသော ဒေသများသို့ ခရီးသွားခြင်းကိုရှောင် ကြဉ်ပါ။
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}	ဇီကာဗိုင်းရပ်စ်ရောဂါ ကူးစက်ပြန့်ပွားသောနိုင်ငံများသို့ သွားရောက်ခဲ့သူများတွင် သံသယလက္ခဏာများ ဖြစ်ပေါ်လာပါက ကျန်းမာရေးဌာနသို့ ချက်ချင်းသတင်းပို့ ဆေးကုမှုခံ ယူပါ။

         </Text>
         
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
      backgroundColor:'#c1e5c3',
      textDecorationLine: 'underline',
    }
    
    })