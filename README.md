- rn init
- jest, enzyme, detox


## detox 세팅하기

### | detox 설치하기

```bash
yarn global add detox-cli   # 문서에는 npm -g 였는데 안되더라.
yarn add -D detox
```


### | 플랫폼 별 의존성 설치하기

#### IOS

- xcode-select --install
- brew tap wix/brew
- brew install applesimutils


### | 테스트 러너 세팅하기

jest를 사용한다.

```bash
yarn add -D jest-circus # 문서에는 없었는데 필요하더라.
detox init -r jest
```

이러면 설정파일이 왕창생긴다. 파일이 뭐가뭔지 모르겠다.

### | 플랫폼 별 detox 세팅하기

코코아 팟을 쓸 경우 `.detoxrc.json`의 `ios.build` 에서 `-project ios/[APP].xcodeproj` 를 `-workspace ios/[APP].xcworkspace`로 수정해줘야한다.

빌드 후에 빌드 타입에 따라 바이너리 패스가 바뀔 수 있으니 유의해야한다.

### | .detoxrc.json 손보기

```json
{
// ~~
  "apps": {
    "ios": {
      "type": "ios.app",
       "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/RN_TDD.app",
      // 빌드하고 나서 Debug, Released에 따라 Products/ 다음 디렉토리 경로가 바뀌니까 확인해줘야한다.
      // "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/RN_TDD.app",
      "build": "xcodebuild -workspace ios/RN_TDD.xcworkspace -scheme RN_TDD -sdk iphonesimulator -derivedDataPath ios/build"
      // 처음에는 -project 를 쓰지만 코코아팟 쓸 경우 workspace로 바꿔줘야한다.
      // "build": "xcodebuild -project ios/RN_TDD.xcodeproj -scheme RN_TDD -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "android": {
      "type": "android.apk",
      "binaryPath": "SPECIFY_PATH_TO_YOUR_APP_BINARY"
    }
  },
}
```