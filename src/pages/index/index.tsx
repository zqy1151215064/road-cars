import {View} from '@tarojs/components'
import './index.scss'
import {AtButton} from 'taro-ui'

const Home = () => {

  const handleClick = () =>
    console.log('点击了')

  return (
    <View className='index'>
      <AtButton type="primary" onClick={handleClick}>12312</AtButton>
    </View>
  )
}

export default Home
