import {  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";
import { avatars } from "../utils/supports";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const SignUpScreen = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);

  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-start items-center">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-72"
        style={{ width: screenWidth }}
      />

      <>
        {/* lista de avatars */}
        <View
          className="absolute inset-0 z-10"
          style={{ width: screenWidth, height: screenHeight }}
        >
          <ScrollView>
            <BlurView
              className="w-full h-full px-4 py-16 flex-row flex-wrap items-center justify-evenly"
              tint="dark"
              intensity={40}
              // style={{ width: screenWidth, height: screenHeight }}
              // experimentalBlurMethod="dimezisBlurView"
            >
              {avatars?.map((item) => (
                <TouchableOpacity
                  key={item._id}
                  className="w-20 m-3 h-20 p-1 rounded-full border-2 border-primary relative"
                >
                  <Image
                    source={{ uri: item?.image.asset.url }}
                    className="w-full h-full"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}
            </BlurView>
          </ScrollView>
        </View>
      </>

      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        {/* <Image source={Logo} className="w-16 h-16" resizeMode="contain" /> */}

        <Text className="py-2 text-primaryText text-xl font-semibold">
          Faça parte da nossa comunidade!
        </Text>

        {/* avatar section */}

        <View className="w-full flex items-center justify-center relative -my-4">
          <TouchableOpacity className="w-20 h-20 p-1 rounded-full border-2 border-primary relative">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full"
              resizeMode="contain"
            />
            <View className="w-6 h-6 bg-primary rounded-full absolute top-0 right-0 flex items-center justify-center">
              <MaterialIcons name="edit" size={16} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full flex items-center justify-center">
          {/* Alert */}

          {/* nome completo */}
          <UserTextInput
            placeholder="Nome Completo"
            isPass={false}
            setStateValue={setNomeCompleto}
          />

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />
          {/* senha */}
          <UserTextInput
            placeholder="Senha"
            isPass={true}
            setStateValue={setPassword}
          />
          {/* botão de login */}
          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">Login</Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">Tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Faça login aqui!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
