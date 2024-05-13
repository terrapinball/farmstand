import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signInButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '60%',
    // marginTop: 20
  },
  signInButton: {
    width: 60,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
})

export default styles;