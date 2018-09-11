
import { StyleSheet } from 'react-native';

const FONT_SIZE_NORMAL = 18;
const COLOR_1 = 'black';
const COLOR_2 = 'rgb(253, 235, 52)';  // yellow	
const COLOR_3 = 'rgb(234, 91, 50)';   // dark orange
const COLOR_4 = 'rgb(248, 179, 70)'; // light orange
const COLOR_5 = 'rgb(36, 180, 224)'; // light blue
const COLOR_6 = 'rgb(142, 189, 49)'; // green

export default StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0
  },

  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container3: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },

  MainContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Header1: {
    width: '100%',
    height: 44,
    backgroundColor: COLOR_5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  HeaderText1:
  {
    fontSize: 18,
    color: '#000',
    textAlign: 'center'
  },

  HeaderText2:
  {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },

  ImageStyle:
  {
    resizeMode: 'cover',
    width: '50%',
    height: '50%'
  },

  TextStyle:
  {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify'
  },

  Title1:
  {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },

  MB: {
    marginBottom: 10,
  },

  eventDate: {
    fontFamily: 'Verdana',
    fontSize: FONT_SIZE_NORMAL,
    color: COLOR_1,
  },

  eventTitle: {
    fontFamily: 'Verdana',
    fontSize: FONT_SIZE_NORMAL,
    color: COLOR_1,
  },

  bandName: {
    fontFamily: 'Verdana',
    fontSize: FONT_SIZE_NORMAL,
    color: COLOR_1,
  },

  cityName: {
    fontFamily: 'Verdana',
    fontSize: FONT_SIZE_NORMAL,
    color: COLOR_3,
  },



  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold'
  },

  flatview: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },

  flatview2: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2
  },

  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },

  id: {
    color: 'red'
  },

  separator: {
    height: 1,
    backgroundColor: "black",
    width: '100%'
  },

  header_style: {
    width: '100%',
    height: 44,
    backgroundColor: COLOR_3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },

  TextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 0,
    backgroundColor: "#FFFFFF"
  },

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 0,
  },

});