import { supabase } from "@/src/lib/supabase";
import { View, Text, Button } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>

      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};

export default ProfileScreen;
