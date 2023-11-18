import * as schemes from "./schemes.js"

const light = {
  editor: {
    background: schemes.light.white,
    foreground: schemes.light.neutral[7],
    neutral: schemes.light.neutral,
    primary: schemes.light.blue,
    log: {
      error: [
        "#B35900"
      ],
      info: [
        schemes.light.neutral[4]
      ],
      warning: [
        "#7D4E00"
      ]
    }
    // diff: {
    //   added: [
    //     ""
    //   ],
    //   deleted: [
    //     ""
    //   ],
    //   modified: [
    //     ""
    //   ]
    // }
  },
  syntax: {
    action: [
      "#673ABB"  // hsl(261,  53%,  48%)
    ],
    composition: [
      "#804F00"  // hsl( 37, 100%,  25%)
    ],
    plain: [
      schemes.light.neutral[4],
      schemes.light.neutral[5],
      schemes.light.neutral[6],
      schemes.light.neutral[7]
    ],
    string: [
      "#6988BF", // hsl(218,  40%,  58%)
      "#013A83"  // hsl(214,  98%,  26%)
    ]
  }
}

export { light }
