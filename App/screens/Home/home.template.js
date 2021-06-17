import React from 'react';
import {List, Avatar, Divider} from 'react-native-paper';
import {generate} from 'get-initials';
import {View, StyleSheet, FlatList, Text, RefreshControl } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  listEmptyComponent:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection:'row',
      marginTop: 10
  }
});

const renderItem = ({item}) => (
  <List.Item
    title={item.name}
    left={props => (
      <Avatar.Text
        {...props}
        size={40}
        label={generate(item.name)}
        color="white"
      />
    )}
  />
);

const ListEmptyComponent = () => (
  <View style={styles.listEmptyComponent}>
    <Text>No users</Text>
  </View>
);
const HomeTemplate = ({ users, refreshing, onRefresh }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <ListEmptyComponent />}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#6c5ce7']}
              tintColor='#6c5ce7'
            />
          }
  
      />
    </View>
  );
};

export default React.memo(HomeTemplate);
