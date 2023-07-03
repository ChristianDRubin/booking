import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React ,{useLayoutEffect} from 'react'

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  console.log(bookings);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <SafeAreaView>
          {bookings.length > 0 && bookings.map((item,index) => (
        <Pressable key={index} style={styles.pressableHeader}>
          <View>
            <Text style={styles.pressableHeaderName}>{item.name}</Text>
            <View style={styles.pressableTextViewItem}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.pressableTextItemRating}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <View style={styles.pressableTextViewItem2}>
                <Text style={styles.geniusText}>Genius Level</Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BookingScreen;