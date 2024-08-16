import { supabase } from "@/src/lib/supabase";
import { View, Text } from "react-native";
import Button from "@/src/components/Button";
const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>

      <Button onPress={() => supabase.auth.signOut()} text="Sign out" />
    </View>
  );
};

export default ProfileScreen;
