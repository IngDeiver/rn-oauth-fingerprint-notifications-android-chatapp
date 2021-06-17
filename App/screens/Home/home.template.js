import React from 'react';
import { List, Avatar, Divider } from 'react-native-paper';
import { generate } from 'get-initials';
import { View, StyleSheet, FlatList, Text, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  listEmptyComponent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#f5f6fa'
  }
});

const renderItem = (item, location) => (
  <List.Item
    title={item.name}
    onPress={() => location.navigate('Chat', {
      username: 'A user name with chating'
    })}
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
  const location = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => renderItem(item, location)}
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
