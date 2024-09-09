const { View, Text } = require("react-native");

const Index = () => {
  let name = "Hyunseung";
  name = "Ted";
  const age = 40;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "darkblue",
        }}
      >
        Hello, {name}! {age} years old.
      </Text>
    </View>
  );
};

export default Index;
