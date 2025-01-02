const gray = {
  0: "#ffffff",
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e6e6e6",
  300: "#d1d1d1",
  400: "#bfbfbf",
  500: "#a0a0a0",
  600: "#777777",
  700: "#636363",
  800: "#444444",
  900: "#232527",
  999: "#000000",
};
const navy = {
  50: "#f1f5f9",
  100: "#e2e8f0",
  200: "#cbd5e1",
  300: "#becad9",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};
const red = {
  50: "#ffeef0",
  100: "#ffd7d6",
  200: "#ffbaba",
  300: "#ff9195",
  400: "#ff6973",
  500: "#ff4053",
  600: "#ff1836",
  700: "#d9092b",
  800: "#b30024",
  900: "#8c0021",
};
const blue = {
  50: "#e6f4ff",
  100: "#bae0ff",
  200: "#91caff",
  300: "#69b1ff",
  400: "#4096ff",
  500: "#1677ff",
  600: "#0958d9",
  700: "#003eb3",
  800: "#002c8c",
  900: "#001d66",
};
const green = {
  50: "#E6FFEC",
  100: "#A7FABF",
  200: "#79ED9E",
  300: "#4FE082",
  400: "#28D46A",
  500: "#06C755",
  600: "#00A148",
  700: "#007A3B",
  800: "#00542B",
  900: "#002E19",
};
const purple = {
  50: "#FAE9FF",
  100: "#FCD4FF",
  200: "#F2A7FA",
  300: "#F085FC",
  400: "#E163F3",
  500: "#D041EC",
  600: "#A038BA",
  700: "#7A2594",
  800: "#56166E",
  900: "#360E47",
};
const yellow = {
  50: "#FFFBE6",
  100: "#FFF1B8",
  200: "#FFE58F",
  300: "#FFD666",
  400: "#FFC53D",
  500: "#FAAD14",
  600: "#D48806",
  700: "#AD6800",
  800: "#874D00",
  900: "#613400",
};
export const primitives = { gray, navy, red, blue, green, yellow, purple };

const surface = {
  primary: {
    styleNm: "Primary",
    palette: "gray",
    depth: 0,
    hex: gray[0],
    description: "기본 표면 색상입니다.",
  },
  secondary: {
    styleNm: "Secondary",
    palette: "gray",
    depth: 100,
    hex: gray[100],
    description:
      "기본 배경 색상에서 특정 레이어를 분리해야 할 때 사용합니다.\n또는 하나의 레이어에서 정보 그룹 Container로 사용할 수 있습니다.",
  },
  tertiary: {
    styleNm: "Tertiary",
    palette: "gray",
    depth: 200,
    hex: gray[200],
    description:
      "기본 배경 색상에서 특정 레이어를 분리해야 할 때 사용합니다.\nBg_light보다 더 강하게 구분이 필요할 때 사용합니다.",
  },
  invert: {
    styleNm: "Invert",
    palette: "gray",
    depth: 900,
    hex: gray[900],
    description: "반전 배경 색상입니다.",
  },
  brand: {
    styleNm: "Brand",
    palette: "red",
    depth: 500,
    hex: red[500],
    description: "강조 배경 색상입니다.",
  },
  negative: {
    styleNm: "Negative",
    palette: "red",
    depth: 50,
    hex: red[50],
    description: "부정의 배경 색상입니다.",
  },
  positive: {
    styleNm: "Positive",
    palette: "blue",
    depth: 50,
    hex: blue[50],
    description: "긍정의 배경 색상입니다.",
  },
  info: {
    styleNm: "Info",
    palette: "navy",
    depth: 50,
    hex: navy[50],
    description: "인포메이션 및 가이드 배경 색상입니다.",
  },
};
const text = {
  primary: {
    styleNm: "Primary",
    palette: "gray",
    depth: 900,
    hex: gray[900],
    description: "기본 텍스트 색상입니다. 콘텐츠에 대해 읽기 쉬운 대비를 제공합니다",
  },
  secondary: {
    styleNm: "Secondary",
    palette: "gray",
    depth: 700,
    hex: gray[700],
    description:
      "두번째 위계의 텍스트 색상입니다. 상대적으로 덜 중요한 정보에 사용합니다.\n또는 정보량이 많아 Font-Weight으로 위계 구분을 할 수 없을 때 사용할 수 있습니다.",
  },
  tertiary: {
    styleNm: "Tertiary",
    palette: "gray",
    depth: 500,
    hex: gray[500],
    description:
      "가장 약한 텍스트 색상입니다.\n상호 작용이 불가능한 비활성화 텍스트 또는 플레이스 홀더, 캡션에 사용합니다.",
  },
  invert: {
    styleNm: "Invert",
    palette: "gray",
    depth: 0,
    hex: gray[0],
    description: "반전 텍스트 색상입니다. 배경이 어두운 경우 사용합니다.",
  },
  negative: {
    styleNm: "Negative",
    palette: "red",
    depth: 500,
    hex: red[500],
    description: "부정의 텍스트 색상입니다.",
  },
  positive: {
    styleNm: "Positive",
    palette: "blue",
    depth: 500,
    hex: blue[500],
    description: "긍정의 텍스트 색상입니다.",
  },
  info: {
    styleNm: "Info",
    palette: "navy",
    depth: 500,
    hex: navy[500],
    description: "인포메이션 및 가이드 텍스트 색상입니다.",
  },
};
const icon = {
  primary: {
    styleNm: "Primary",
    palette: "gray",
    depth: 900,
    hex: gray[900],
    description: "기본 아이콘 색상입니다.",
  },
  secondary: {
    styleNm: "Secondary",
    palette: "gray",
    depth: 700,
    hex: gray[700],
    description: "두 번째 위계의 아이콘 색상입니다.",
  },
  tertiary: {
    styleNm: "Tertiary",
    palette: "gray",
    depth: 500,
    hex: gray[500],
    description: "세 번째 위계의 아이콘 색상입니다.",
  },
  invert: {
    styleNm: "Invert",
    palette: "gray",
    depth: 0,
    hex: gray[0],
    description: "반전 아이콘 색상입니다.",
  },
  negative: {
    styleNm: "Negative",
    palette: "red",
    depth: 500,
    hex: red[500],
    description: "부정의 아이콘 색상입니다.",
  },
  positive: {
    styleNm: "Positive",
    palette: "blue",
    depth: 500,
    hex: blue[500],
    description: "긍정의 아이콘 색상입니다.",
  },
  info: {
    styleNm: "Info",
    palette: "navy",
    depth: 500,
    hex: navy[500],
    description: "인포메이션 및 가이드 아이콘 색상입니다.",
  },
};
const border = {
  default: {
    styleNm: "Default",
    palette: "gray",
    depth: 300,
    hex: gray[300],
    description: "기본 테두리 색상입니다.",
  },
  hover: {
    styleNm: "Hover",
    palette: "gray",
    depth: 500,
    hex: gray[500],
    description: "Hover 테두리 색상입니다.(Web에서만 사용)",
  },
  tertiary: {
    styleNm: "Tertiary",
    palette: "gray",
    depth: 700,
    hex: gray[700],
    description: "선택된 테두리 색상입니다.",
  },
  invert: {
    styleNm: "Invert",
    palette: "gray",
    depth: 200,
    hex: gray[200],
    description: "상호 작용이 불가능한 비활성화된 테두리 색상입니다.",
  },
  negative: {
    styleNm: "Negative",
    palette: "red",
    depth: 500,
    hex: red[500],
    description: "에러 표시 테두리 색상입니다.",
  },
};
const divider = {
  default: {
    styleNm: "Default",
    palette: "gray",
    depth: 200,
    hex: gray[200],
    description: "기본 구분선 색상입니다.",
  },
  strong: {
    styleNm: "Strong",
    palette: "gray",
    depth: 400,
    hex: gray[400],
    description: "특정 부분을 강조하기 위한 구분선 색상입니다.",
  },
};
export const token = { surface, text, icon, border, divider };
