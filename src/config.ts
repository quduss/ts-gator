import os from "os";
import path from "path";


type Config = {
  dbUrl: string;
  currentUserName: string;
};

function getConfigFilePath() {
  const configFileName = ".gatorconfig.json";
  const homeDir = os.homedir();
  return path.join(homeDir, configFileName);
}