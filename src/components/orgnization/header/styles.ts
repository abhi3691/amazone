import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 5,
    marginTop: StatusBar.currentHeight ?? 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
  },
  qrcodeContainer: {
    marginTop: StatusBar.currentHeight ?? 50,
    marginLeft: 5,
  },
});
export default styles;
