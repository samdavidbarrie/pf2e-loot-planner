import React from 'react';

export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      aria-label="Sihedron Logo"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <g
        transform="translate(0,32) scale(0.0032,-0.0032)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M5301 10193 c-27 -87 -82 -259 -121 -383 -39 -124 -191 -607 -339
    -1075 -238 -755 -267 -851 -253 -863 17 -13 20 -13 138 30 l80 29 13 48 c18
  69 63 161 101 205 79 89 248 133 338 87 122 -62 168 -257 96 -406 -56 -115
  -179 -208 -292 -222 -29 -3 -56 -11 -60 -17 -4 -6 -30 -83 -59 -170 l-52 -159
  146 -306 c182 -384 171 -355 130 -337 -17 7 -702 339 -1522 736 -820 397
  -1652 801 -1850 897 l-360 174 -22 -27 -22 -28 73 -105 c40 -58 215 -311 388
  -561 172 -250 468 -679 657 -953 189 -273 347 -499 351 -502 21 -13 38 13 70
  104 l34 98 -48 71 c-87 131 -104 222 -65 347 33 107 115 175 210 175 15 0 56
  -9 92 -20 208 -64 304 -330 197 -542 l-29 -58 95 -140 c53 -78 106 -145 118
  -150 11 -5 147 -37 301 -70 338 -74 355 -78 355 -91 0 -12 6 -8 -1205 -586
  -2472 -1179 -2545 -1214 -2545 -1237 0 -48 -2 -47 416 -77 220 -15 467 -32
  549 -38 723 -52 1466 -102 1540 -104 113 -3 115 4 42 116 l-55 84 -76 7 c-125
  11 -200 40 -262 98 -128 121 -142 281 -32 373 80 68 209 100 305 76 124 -32
  233 -120 280 -228 20 -47 33 -63 48 -64 11 0 90 -6 175 -13 l155 -12 225 181
  c256 205 300 238 305 234 3 -5 -68 -301 -270 -1114 -80 -324 -175 -707 -210
  -850 -35 -143 -161 -654 -280 -1135 l-216 -875 22 -18 c12 -9 25 -17 31 -17
  10 0 60 52 579 600 1029 1088 1185 1253 1193 1268 14 25 -15 38 -115 50 l-92
  11 -73 -69 c-41 -38 -97 -82 -126 -97 -47 -25 -64 -28 -148 -28 -82 0 -102 4
  -144 25 -28 14 -64 42 -80 63 -28 35 -31 47 -34 120 -3 66 1 94 19 142 57 153
  256 259 425 226 33 -6 71 -14 85 -17 23 -5 39 9 147 125 l122 130 0 346 c0
  198 4 345 9 345 5 0 590 -727 1301 -1615 711 -888 1298 -1615 1305 -1615 7 0
  22 8 33 17 20 18 20 20 -74 598 -148 914 -189 1174 -254 1573 -33 206 -62 378
  -65 383 -12 19 -32 7 -106 -67 l-77 -76 11 -37 c6 -20 11 -81 11 -136 1 -84
  -3 -107 -22 -147 -34 -69 -99 -138 -157 -164 -97 -46 -185 -24 -270 67 -70 75
  -89 125 -89 234 1 142 52 247 157 325 32 24 47 42 47 57 0 21 -35 263 -45 309
  -3 12 -67 69 -157 139 -282 219 -388 305 -388 315 0 7 712 10 2080 10 l2080 0
  12 26 c8 17 9 31 2 41 -6 9 -75 53 -155 98 -79 45 -270 153 -424 240 -154 87
  -361 204 -460 260 -99 56 -409 231 -689 390 -454 256 -510 285 -523 272 -14
  -13 -14 -28 -3 -116 l12 -101 61 -33 c86 -45 169 -125 198 -189 19 -43 24 -70
  24 -145 0 -85 -2 -94 -30 -135 -47 -67 -108 -93 -220 -93 -111 0 -164 23 -246
  105 -79 79 -111 151 -118 269 l-6 94 -145 83 c-80 46 -152 84 -161 84 -9 0
  -157 -34 -328 -75 -171 -41 -313 -75 -317 -75 -3 0 -4 6 -1 14 5 12 393 488
  1016 1246 102 124 349 425 550 670 200 245 406 495 456 555 203 244 543 661
  555 682 12 19 12 24 -5 43 -12 13 -28 20 -40 17 -24 -5 -2353 -903 -2375 -915
  -34 -20 -20 -40 71 -97 88 -56 93 -58 123 -46 150 61 255 70 348 28 74 -33
  143 -97 164 -153 44 -114 -37 -268 -176 -333 -49 -23 -67 -26 -165 -26 -98 0
  -116 3 -167 27 -31 14 -76 44 -100 66 l-43 40 -164 -62 -164 -61 -144 -292
  c-79 -161 -148 -293 -153 -293 -12 0 -15 11 -114 475 -47 220 -195 915 -330
  1545 -135 630 -283 1327 -331 1550 -47 223 -90 415 -95 428 -7 16 -18 22 -39
  22 -30 0 -30 -1 -80 -157z m366 -3768 c230 -86 452 -168 493 -184 l75 -27 171
  -515 c95 -283 170 -520 168 -528 -7 -23 -575 -911 -583 -911 -12 0 -1023 -109
  -1067 -115 l-40 -6 -255 268 c-139 147 -307 323 -372 390 -117 121 -119 123
  -113 160 4 21 31 241 61 488 30 248 58 473 61 500 l6 50 477 292 c262 161 481
  293 488 293 6 0 200 -70 430 -155z"
        />
        <path
          d="M3280 8844 c-90 -15 -141 -28 -149 -38 -19 -23 -33 -162 -21 -224 7
    -41 7 -81 0 -135 -12 -82 -3 -178 25 -289 25 -96 31 -103 116 -143 83 -39 228
  -70 358 -77 l65 -3 19 55 c22 64 19 134 -9 193 -24 51 -45 44 -59 -18 -6 -27
  -19 -65 -29 -83 -16 -30 -19 -32 -54 -26 -47 8 -128 42 -143 60 -8 10 -6 20
  10 40 12 15 21 35 21 46 0 16 -6 19 -46 16 -46 -3 -47 -3 -61 37 -17 46 -12
  186 8 248 10 31 23 44 73 72 148 81 358 124 541 110 132 -10 261 -27 276 -36
  10 -6 15 -35 18 -93 l3 -86 -28 -11 c-18 -7 -66 -9 -121 -6 -141 7 -154 -19
  -27 -54 132 -37 260 -15 285 48 21 51 14 162 -13 228 l-24 59 -92 33 c-199 71
  -447 96 -615 64 -52 -10 -81 -11 -125 -3 -72 14 -169 22 -202 16z"
        />
        <path
          d="M6454 8707 c-25 -82 -38 -141 -33 -150 7 -12 26 -11 131 7 115 20
  122 22 129 47 6 23 -4 38 -90 129 l-96 103 -41 -136z"
        />
        <path
          d="M7041 8807 c-11 -14 -1 -24 66 -73 43 -31 92 -67 108 -79 21 -15 34
    -37 43 -71 7 -27 17 -66 23 -86 5 -21 14 -38 18 -38 10 0 82 112 95 145 4 11
  11 40 16 64 l8 43 -52 23 c-73 32 -206 73 -263 81 -38 5 -52 2 -62 -9z"
        />
        <path
          d="M6784 8676 c-22 -17 -24 -15 41 -44 28 -13 79 -42 114 -65 l64 -41
    -7 -65 c-10 -114 -22 -139 -99 -219 -76 -78 -280 -242 -301 -242 -20 0 -105
  95 -124 138 -12 26 -17 72 -18 159 -2 68 -6 127 -9 133 -12 19 -25 10 -48 -37
  -71 -142 -80 -259 -28 -383 17 -42 47 -100 67 -130 l36 -55 -4 -95 c-3 -52 0
  -110 5 -129 l9 -34 38 79 c45 93 123 176 239 255 187 128 346 272 387 351 22
  41 23 198 2 273 -17 60 -35 72 -189 126 -120 43 -145 46 -175 25z"
        />
        <path
          d="M8374 6756 c-9 -24 7 -39 108 -98 92 -54 193 -138 247 -207 29 -36
  31 -46 46 -202 32 -340 57 -509 86 -580 11 -29 73 -67 127 -80 66 -15 323 37
  380 76 24 18 26 23 13 44 -8 12 -12 11 -27 -3 -15 -16 -33 -17 -133 -14 -128
  4 -169 18 -189 63 -17 37 -15 62 8 85 25 25 100 27 136 4 63 -42 24 51 -41 96
  -40 28 -52 31 -89 26 -68 -10 -77 3 -87 125 -11 131 -36 295 -55 359 -13 43
  -23 55 -77 93 -82 58 -201 125 -312 174 -122 55 -134 58 -141 39z"
        />
        <path
          d="M1773 6611 c-171 -90 -265 -201 -319 -374 -16 -51 -16 -60 -4 -68 24
    -14 26 -12 60 47 54 96 147 183 213 199 21 6 23 4 20 -22 -4 -40 -43 -384 -46
  -408 -3 -30 44 -24 138 18 44 20 107 43 140 52 85 22 241 20 343 -5 119 -29
  126 -20 57 69 -56 74 -126 137 -223 202 l-76 51 -27 -54 c-15 -30 -34 -59 -41
  -66 -15 -12 -142 -62 -158 -62 -5 0 -16 13 -25 30 -14 27 -14 39 1 127 20 123
  41 209 61 247 14 27 14 31 -3 43 -25 18 -30 17 -111 -26z"
        />
        <path
          d="M1693 5892 c-7 -5 -18 -76 -28 -192 -18 -215 -24 -260 -35 -260 -17
  0 -109 92 -133 133 -14 24 -35 73 -47 110 -19 59 -25 68 -44 65 -19 -3 -21 -8
  -17 -58 5 -78 36 -193 67 -251 34 -62 116 -152 188 -208 44 -34 61 -42 81 -37
  24 6 25 9 18 44 -13 58 -8 344 5 369 22 40 48 38 121 -10 63 -42 68 -47 86
  -108 23 -75 21 -74 138 -23 132 58 291 171 285 203 -3 13 -22 16 -118 17 -63
  1 -142 7 -175 13 -82 17 -227 89 -303 150 -65 53 -69 55 -89 43z"
        />
        <path
          d="M3414 3877 c-12 -7 -124 -97 -249 -201 l-228 -189 -81 16 c-100 21
    -128 21 -194 2 -37 -11 -69 -32 -112 -72 -59 -54 -86 -90 -77 -99 2 -2 28 7
  58 21 90 41 182 32 279 -30 l43 -27 -7 -62 c-15 -145 -89 -321 -175 -418 -67
  -74 -158 -146 -271 -213 -110 -64 -104 -73 34 -57 170 19 300 86 424 217 128
  134 199 299 209 483 l6 104 183 251 c200 275 220 309 158 274z"
        />
        <path
          d="M8500 3870 c-25 -5 -78 -26 -119 -47 -114 -58 -128 -100 -22 -68 57
  17 161 18 177 2 12 -11 -26 -130 -72 -225 -32 -67 -63 -111 -110 -162 -37 -39
  -71 -70 -77 -70 -8 0 -323 163 -469 243 -21 11 -41 18 -44 14 -4 -4 32 -48 80
  -98 118 -124 180 -199 244 -297 l54 -83 -62 -69 c-108 -122 -281 -263 -300
  -244 -17 17 -71 166 -86 232 -7 37 -14 97 -14 133 0 48 -4 70 -15 79 -13 10
  -18 11 -28 1 -16 -16 -15 -252 2 -350 14 -76 57 -216 83 -264 l13 -27 140 69
  c458 224 663 475 775 953 20 83 51 270 46 275 -8 9 -158 11 -196 3z"
        />
        <path
          d="M2490 3187 c-36 -7 -71 -16 -77 -20 -9 -6 -13 -40 -13 -112 0 -156
  10 -169 59 -71 34 70 93 134 152 168 22 12 38 27 36 32 -5 16 -81 17 -157 3z"
        />
        <path
          d="M5140 2885 c0 -8 27 -43 60 -77 116 -118 143 -229 100 -402 -34 -135
    -111 -315 -200 -467 l-32 -54 16 -50 c28 -90 103 -203 205 -307 118 -122 128
  -129 154 -97 38 47 127 251 127 291 0 14 -18 9 -56 -17 -93 -63 -130 -34 -174
  139 l-19 74 30 93 c69 222 94 432 65 552 -19 80 -44 133 -97 205 -69 91 -179
  163 -179 117z"
        />
        <path
          d="M5560 2384 c-6 -14 -10 -36 -10 -49 0 -13 -5 -47 -11 -76 l-11 -51
  52 -53 c43 -44 57 -52 74 -45 17 6 20 14 18 46 -7 83 -66 254 -88 254 -8 0
  -19 -12 -24 -26z"
        />
      </g>
    </svg>
  );
}

export function SihedronLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Sihedron Logo"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="64"
      width="64"
      role="img"
      viewBox="0 0 64 64"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0,64) scale(0.0064,-0.0064)"
        fill="currentcolor"
        stroke="none"
      >
        <path
          d="M5301 10193 c-27 -87 -82 -259 -121 -383 -39 -124 -191 -607 -339
    -1075 -238 -755 -267 -851 -253 -863 17 -13 20 -13 138 30 l80 29 13 48 c18
  69 63 161 101 205 79 89 248 133 338 87 122 -62 168 -257 96 -406 -56 -115
  -179 -208 -292 -222 -29 -3 -56 -11 -60 -17 -4 -6 -30 -83 -59 -170 l-52 -159
  146 -306 c182 -384 171 -355 130 -337 -17 7 -702 339 -1522 736 -820 397
  -1652 801 -1850 897 l-360 174 -22 -27 -22 -28 73 -105 c40 -58 215 -311 388
  -561 172 -250 468 -679 657 -953 189 -273 347 -499 351 -502 21 -13 38 13 70
  104 l34 98 -48 71 c-87 131 -104 222 -65 347 33 107 115 175 210 175 15 0 56
  -9 92 -20 208 -64 304 -330 197 -542 l-29 -58 95 -140 c53 -78 106 -145 118
  -150 11 -5 147 -37 301 -70 338 -74 355 -78 355 -91 0 -12 6 -8 -1205 -586
  -2472 -1179 -2545 -1214 -2545 -1237 0 -48 -2 -47 416 -77 220 -15 467 -32
  549 -38 723 -52 1466 -102 1540 -104 113 -3 115 4 42 116 l-55 84 -76 7 c-125
  11 -200 40 -262 98 -128 121 -142 281 -32 373 80 68 209 100 305 76 124 -32
  233 -120 280 -228 20 -47 33 -63 48 -64 11 0 90 -6 175 -13 l155 -12 225 181
  c256 205 300 238 305 234 3 -5 -68 -301 -270 -1114 -80 -324 -175 -707 -210
  -850 -35 -143 -161 -654 -280 -1135 l-216 -875 22 -18 c12 -9 25 -17 31 -17
  10 0 60 52 579 600 1029 1088 1185 1253 1193 1268 14 25 -15 38 -115 50 l-92
  11 -73 -69 c-41 -38 -97 -82 -126 -97 -47 -25 -64 -28 -148 -28 -82 0 -102 4
  -144 25 -28 14 -64 42 -80 63 -28 35 -31 47 -34 120 -3 66 1 94 19 142 57 153
  256 259 425 226 33 -6 71 -14 85 -17 23 -5 39 9 147 125 l122 130 0 346 c0
  198 4 345 9 345 5 0 590 -727 1301 -1615 711 -888 1298 -1615 1305 -1615 7 0
  22 8 33 17 20 18 20 20 -74 598 -148 914 -189 1174 -254 1573 -33 206 -62 378
  -65 383 -12 19 -32 7 -106 -67 l-77 -76 11 -37 c6 -20 11 -81 11 -136 1 -84
  -3 -107 -22 -147 -34 -69 -99 -138 -157 -164 -97 -46 -185 -24 -270 67 -70 75
  -89 125 -89 234 1 142 52 247 157 325 32 24 47 42 47 57 0 21 -35 263 -45 309
  -3 12 -67 69 -157 139 -282 219 -388 305 -388 315 0 7 712 10 2080 10 l2080 0
  12 26 c8 17 9 31 2 41 -6 9 -75 53 -155 98 -79 45 -270 153 -424 240 -154 87
  -361 204 -460 260 -99 56 -409 231 -689 390 -454 256 -510 285 -523 272 -14
  -13 -14 -28 -3 -116 l12 -101 61 -33 c86 -45 169 -125 198 -189 19 -43 24 -70
  24 -145 0 -85 -2 -94 -30 -135 -47 -67 -108 -93 -220 -93 -111 0 -164 23 -246
  105 -79 79 -111 151 -118 269 l-6 94 -145 83 c-80 46 -152 84 -161 84 -9 0
  -157 -34 -328 -75 -171 -41 -313 -75 -317 -75 -3 0 -4 6 -1 14 5 12 393 488
  1016 1246 102 124 349 425 550 670 200 245 406 495 456 555 203 244 543 661
  555 682 12 19 12 24 -5 43 -12 13 -28 20 -40 17 -24 -5 -2353 -903 -2375 -915
  -34 -20 -20 -40 71 -97 88 -56 93 -58 123 -46 150 61 255 70 348 28 74 -33
  143 -97 164 -153 44 -114 -37 -268 -176 -333 -49 -23 -67 -26 -165 -26 -98 0
  -116 3 -167 27 -31 14 -76 44 -100 66 l-43 40 -164 -62 -164 -61 -144 -292
  c-79 -161 -148 -293 -153 -293 -12 0 -15 11 -114 475 -47 220 -195 915 -330
  1545 -135 630 -283 1327 -331 1550 -47 223 -90 415 -95 428 -7 16 -18 22 -39
  22 -30 0 -30 -1 -80 -157z m366 -3768 c230 -86 452 -168 493 -184 l75 -27 171
  -515 c95 -283 170 -520 168 -528 -7 -23 -575 -911 -583 -911 -12 0 -1023 -109
  -1067 -115 l-40 -6 -255 268 c-139 147 -307 323 -372 390 -117 121 -119 123
  -113 160 4 21 31 241 61 488 30 248 58 473 61 500 l6 50 477 292 c262 161 481
  293 488 293 6 0 200 -70 430 -155z"
        />
        <path
          d="M3280 8844 c-90 -15 -141 -28 -149 -38 -19 -23 -33 -162 -21 -224 7
    -41 7 -81 0 -135 -12 -82 -3 -178 25 -289 25 -96 31 -103 116 -143 83 -39 228
  -70 358 -77 l65 -3 19 55 c22 64 19 134 -9 193 -24 51 -45 44 -59 -18 -6 -27
  -19 -65 -29 -83 -16 -30 -19 -32 -54 -26 -47 8 -128 42 -143 60 -8 10 -6 20
  10 40 12 15 21 35 21 46 0 16 -6 19 -46 16 -46 -3 -47 -3 -61 37 -17 46 -12
  186 8 248 10 31 23 44 73 72 148 81 358 124 541 110 132 -10 261 -27 276 -36
  10 -6 15 -35 18 -93 l3 -86 -28 -11 c-18 -7 -66 -9 -121 -6 -141 7 -154 -19
  -27 -54 132 -37 260 -15 285 48 21 51 14 162 -13 228 l-24 59 -92 33 c-199 71
  -447 96 -615 64 -52 -10 -81 -11 -125 -3 -72 14 -169 22 -202 16z"
        />
        <path
          d="M6454 8707 c-25 -82 -38 -141 -33 -150 7 -12 26 -11 131 7 115 20
  122 22 129 47 6 23 -4 38 -90 129 l-96 103 -41 -136z"
        />
        <path
          d="M7041 8807 c-11 -14 -1 -24 66 -73 43 -31 92 -67 108 -79 21 -15 34
    -37 43 -71 7 -27 17 -66 23 -86 5 -21 14 -38 18 -38 10 0 82 112 95 145 4 11
  11 40 16 64 l8 43 -52 23 c-73 32 -206 73 -263 81 -38 5 -52 2 -62 -9z"
        />
        <path
          d="M6784 8676 c-22 -17 -24 -15 41 -44 28 -13 79 -42 114 -65 l64 -41
    -7 -65 c-10 -114 -22 -139 -99 -219 -76 -78 -280 -242 -301 -242 -20 0 -105
  95 -124 138 -12 26 -17 72 -18 159 -2 68 -6 127 -9 133 -12 19 -25 10 -48 -37
  -71 -142 -80 -259 -28 -383 17 -42 47 -100 67 -130 l36 -55 -4 -95 c-3 -52 0
  -110 5 -129 l9 -34 38 79 c45 93 123 176 239 255 187 128 346 272 387 351 22
  41 23 198 2 273 -17 60 -35 72 -189 126 -120 43 -145 46 -175 25z"
        />
        <path
          d="M8374 6756 c-9 -24 7 -39 108 -98 92 -54 193 -138 247 -207 29 -36
  31 -46 46 -202 32 -340 57 -509 86 -580 11 -29 73 -67 127 -80 66 -15 323 37
  380 76 24 18 26 23 13 44 -8 12 -12 11 -27 -3 -15 -16 -33 -17 -133 -14 -128
  4 -169 18 -189 63 -17 37 -15 62 8 85 25 25 100 27 136 4 63 -42 24 51 -41 96
  -40 28 -52 31 -89 26 -68 -10 -77 3 -87 125 -11 131 -36 295 -55 359 -13 43
  -23 55 -77 93 -82 58 -201 125 -312 174 -122 55 -134 58 -141 39z"
        />
        <path
          d="M1773 6611 c-171 -90 -265 -201 -319 -374 -16 -51 -16 -60 -4 -68 24
    -14 26 -12 60 47 54 96 147 183 213 199 21 6 23 4 20 -22 -4 -40 -43 -384 -46
  -408 -3 -30 44 -24 138 18 44 20 107 43 140 52 85 22 241 20 343 -5 119 -29
  126 -20 57 69 -56 74 -126 137 -223 202 l-76 51 -27 -54 c-15 -30 -34 -59 -41
  -66 -15 -12 -142 -62 -158 -62 -5 0 -16 13 -25 30 -14 27 -14 39 1 127 20 123
  41 209 61 247 14 27 14 31 -3 43 -25 18 -30 17 -111 -26z"
        />
        <path
          d="M1693 5892 c-7 -5 -18 -76 -28 -192 -18 -215 -24 -260 -35 -260 -17
  0 -109 92 -133 133 -14 24 -35 73 -47 110 -19 59 -25 68 -44 65 -19 -3 -21 -8
  -17 -58 5 -78 36 -193 67 -251 34 -62 116 -152 188 -208 44 -34 61 -42 81 -37
  24 6 25 9 18 44 -13 58 -8 344 5 369 22 40 48 38 121 -10 63 -42 68 -47 86
  -108 23 -75 21 -74 138 -23 132 58 291 171 285 203 -3 13 -22 16 -118 17 -63
  1 -142 7 -175 13 -82 17 -227 89 -303 150 -65 53 -69 55 -89 43z"
        />
        <path
          d="M3414 3877 c-12 -7 -124 -97 -249 -201 l-228 -189 -81 16 c-100 21
    -128 21 -194 2 -37 -11 -69 -32 -112 -72 -59 -54 -86 -90 -77 -99 2 -2 28 7
  58 21 90 41 182 32 279 -30 l43 -27 -7 -62 c-15 -145 -89 -321 -175 -418 -67
  -74 -158 -146 -271 -213 -110 -64 -104 -73 34 -57 170 19 300 86 424 217 128
  134 199 299 209 483 l6 104 183 251 c200 275 220 309 158 274z"
        />
        <path
          d="M8500 3870 c-25 -5 -78 -26 -119 -47 -114 -58 -128 -100 -22 -68 57
  17 161 18 177 2 12 -11 -26 -130 -72 -225 -32 -67 -63 -111 -110 -162 -37 -39
  -71 -70 -77 -70 -8 0 -323 163 -469 243 -21 11 -41 18 -44 14 -4 -4 32 -48 80
  -98 118 -124 180 -199 244 -297 l54 -83 -62 -69 c-108 -122 -281 -263 -300
  -244 -17 17 -71 166 -86 232 -7 37 -14 97 -14 133 0 48 -4 70 -15 79 -13 10
  -18 11 -28 1 -16 -16 -15 -252 2 -350 14 -76 57 -216 83 -264 l13 -27 140 69
  c458 224 663 475 775 953 20 83 51 270 46 275 -8 9 -158 11 -196 3z"
        />
        <path
          d="M2490 3187 c-36 -7 -71 -16 -77 -20 -9 -6 -13 -40 -13 -112 0 -156
  10 -169 59 -71 34 70 93 134 152 168 22 12 38 27 36 32 -5 16 -81 17 -157 3z"
        />
        <path
          d="M5140 2885 c0 -8 27 -43 60 -77 116 -118 143 -229 100 -402 -34 -135
    -111 -315 -200 -467 l-32 -54 16 -50 c28 -90 103 -203 205 -307 118 -122 128
  -129 154 -97 38 47 127 251 127 291 0 14 -18 9 -56 -17 -93 -63 -130 -34 -174
  139 l-19 74 30 93 c69 222 94 432 65 552 -19 80 -44 133 -97 205 -69 91 -179
  163 -179 117z"
        />
        <path
          d="M5560 2384 c-6 -14 -10 -36 -10 -49 0 -13 -5 -47 -11 -76 l-11 -51
  52 -53 c43 -44 57 -52 74 -45 17 6 20 14 18 46 -7 83 -66 254 -88 254 -8 0
  -19 -12 -24 -26z"
        />
      </g>
    </svg>
  );
}
