import {StyleSheet} from 'react-native';
import Constants from  'expo-constants'


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        
    },

    incidentList:{
        marginTop:48,
    },

    incident:{
        padding:24,
        paddingBottom: 0,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,

    },

    incidentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color: '#737380',
    },

    heroTitle:{
        fontSize: 20,
        lineHeight: 30,
        color: '#13131a',
        fontWeight:'bold',

    },

    heroDescription:{
        fontSize: 15,
        lineHeight: 24,
        color:'#737380',
        marginTop: 16,
        marginBottom:16,

    },

   
    action:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    actionButton:{
        
        height: 50,
        width: '48%',
        backgroundColor:'#e02041',
        borderRadius:8,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:24,
    },

    actionButtonText:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
    }

})