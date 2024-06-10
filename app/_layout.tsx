import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <>
   <Text>Header</Text>
   <Slot /> 
  {/* {Slot will add immidiete  children to the screen} */}
   <Text>Footer</Text>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:1,
    alignItems: 'center',
    justifyContent:"center"
  }
})

export default RootLayout