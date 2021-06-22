import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  
} from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import UserLogo from "../../assets/UserLogo.png";

const SettingScreen = () => {
  const DarkGreen = "#B1B0B6"
  const IconSize = 20;
  const NavIconSize = 25;
  return (
    <ScrollView>
      <View style={styles.con}>
        <View style={styles.ImageCon}>
          <Image source={UserLogo} style={styles.ImageImg}></Image>
        </View>
        <View style={styles.SettingCon}>
          {/* Edit Profile Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
              <View style={[{backgroundColor: '#0D8735'},styles.SettingItemIconBox]}>
              <FontIcons name="user-edit" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Edit Profile</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>
          {/* Reset Password Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#eded12'},styles.SettingItemIconBox]}>
              <FontIcons name="lock" size={IconSize} style={{color : "#000"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Reset Password</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>
          {/* Notifications Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#61B522'},styles.SettingItemIconBox]}>
              <FontIcons name="bell" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Notifications</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>

          {/* Linked Accounts Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#559AE9'},styles.SettingItemIconBox]}>
              <FontIcons name="link" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Linked Accounts</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize}  color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Divider} />
        </View>
        <View style={styles.ExtraCon}>
          {/* Support Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#989b96'},styles.SettingItemIconBox]}>
              <FontIcons name="comment" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Support</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>

          {/* Privacy Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#989b96'},styles.SettingItemIconBox]}>
              <FontIcons name="eye-slash" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Privacy</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>
          {/* Terms Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#989b96'},styles.SettingItemIconBox]}>
              <FontIcons name="file-contract" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Terms</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>

          {/* Help Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
              <View style={[{backgroundColor: '#989b96'},styles.SettingItemIconBox]}>
              <FontIcons name="question-circle" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>Help</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>

          {/* About Tab */}
          <View style={styles.Divider} />
          <View style={styles.SettingItem}>
            <View style={styles.SettingItemIconCon}>
            <View style={[{backgroundColor: '#989b96'},styles.SettingItemIconBox]}>
              <FontIcons name="ellipsis-v" size={IconSize} style={{color : "#FFF"}}/>
              </View>
            </View>
            <View style={styles.SettingItemTextCon}>
              <Text style={styles.SettingItemText}>About EcoDorp</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Settings");
              }}
              style={styles.SettingItemNavIconCon}
            >
              <View>
                <FontIcons name="chevron-right" size={NavIconSize} color={DarkGreen}></FontIcons>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Divider} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#fafcfd",
  },
  ImageImg: {
    width: 180,
    height: 180,
    backgroundColor: "#EEF9E6",
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 50,
  },
  ImageCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  SettingCon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
  ExtraCon: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
  SettingItem: {
    flexDirection: "row",
    height: 55,
    width: "100%",
  },
  SettingItemIconCon: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  SettingItemIconBox : {
    width : '65%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65%',
    borderRadius: 6,

  },
  SettingItemTextCon: {
    width: "70%",
    justifyContent: "center",
  },
  SettingItemText: {
    fontSize: 20,
    paddingLeft: 10,
  },
  SettingItemNavIconCon: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  Divider: {
    width: "100%",
    backgroundColor: "#B1B0B6",
    height: 1,
  },
});
