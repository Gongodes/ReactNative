import React from 'react'
import {ScrollView} from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card'
const index = () => {
    return (
        <ScrollView style={{backgroundColor: 'gray'}}>
      <Header />
    
      
      <Card url={'https://fotos.perfil.com/2018/08/01/trim/1140/641/tesla-model-s.jpg'} modelo={'Modelo S'}>
       
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        exercitationem laudantiumdsfs.
      </Card>
      <Card url={'http://cms.huachengauto.com/uploads/20180904/20180904133892599259.jpg'} modelo={'Modelo X'}>
       
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        exercitationem laudantiumsdfsdfsdfsdfsdfsdfsdf.
      </Card>
      <Card url={'http://image.carlab.co.kr/thumb/800x0/2017/11/07832144f4a2504f75bb43aab4aa28977dd9f4f7.jpg'} modelo={'Modelo Y'}>
       
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        exercitationem laudantiumsdfsdfsd.
      </Card>
    </ScrollView>
    )
}

export default index
