import {
  A as e,
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  G as o,
  H as s,
  I as c,
  J as l,
  K as u,
  L as d,
  M as f,
  N as p,
  O as m,
  P as h,
  R as g,
  S as _,
  T as v,
  U as y,
  V as b,
  W as x,
  X as S,
  Y as C,
  Z as w,
  a as T,
  b as E,
  c as D,
  d as O,
  f as k,
  g as A,
  h as j,
  i as M,
  j as N,
  k as P,
  l as F,
  m as I,
  n as L,
  o as R,
  p as z,
  q as B,
  r as V,
  s as H,
  t as U,
  u as ee,
  v as W,
  w as te,
  x as G,
  y as K,
  z as q,
} from "./upload-V21E895E.js";
var J = { class: `phone-frame` },
  Y = [`src`],
  X = { class: `phone-screen` },
  ne = I(
    a({
      __name: `PhoneFrame`,
      props: { blurred: { type: Boolean } },
      setup(e) {
        return (t, n) => (
          q(),
          f(`div`, J, [
            P(
              `img`,
              {
                src: l(j)(`./assets/phone_ui/zs_phone_01.png`),
                class: C([`phone-bg`, { faded: e.blurred }]),
              },
              null,
              10,
              Y
            ),
            P(
              `div`,
              { class: C([`phone-glass-overlay`, { active: e.blurred }]) },
              null,
              2
            ),
            P(`div`, X, [b(t.$slots, `default`, {}, void 0, !0)]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-2560cdb2`]]
  ),
  Z = D(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  re = D(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  ie = D(`book-open`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [
      `path`,
      {
        d: `M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,
        key: `ruj8y`,
      },
    ],
  ]),
  ae = D(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  oe = D(`database`, [
    [`ellipse`, { cx: `12`, cy: `5`, rx: `9`, ry: `3`, key: `msslwz` }],
    [`path`, { d: `M3 5V19A9 3 0 0 0 21 19V5`, key: `1wlel7` }],
    [`path`, { d: `M3 12A9 3 0 0 0 21 12`, key: `mv7ke4` }],
  ]),
  se = D(`git-branch`, [
    [`path`, { d: `M15 6a9 9 0 0 0-9 9V3`, key: `1cii5b` }],
    [`circle`, { cx: `18`, cy: `6`, r: `3`, key: `1h7g24` }],
    [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }],
  ]),
  ce = D(`grip-vertical`, [
    [`circle`, { cx: `9`, cy: `12`, r: `1`, key: `1vctgf` }],
    [`circle`, { cx: `9`, cy: `5`, r: `1`, key: `hp0tcf` }],
    [`circle`, { cx: `9`, cy: `19`, r: `1`, key: `fkjjf6` }],
    [`circle`, { cx: `15`, cy: `12`, r: `1`, key: `1tmaij` }],
    [`circle`, { cx: `15`, cy: `5`, r: `1`, key: `19l28e` }],
    [`circle`, { cx: `15`, cy: `19`, r: `1`, key: `f4zoj3` }],
  ]),
  le = D(`image-plus`, [
    [`path`, { d: `M16 5h6`, key: `1vod17` }],
    [`path`, { d: `M19 2v6`, key: `4bpg5p` }],
    [
      `path`,
      {
        d: `M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5`,
        key: `1ue2ih`,
      },
    ],
    [`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`, key: `1xmnt7` }],
    [`circle`, { cx: `9`, cy: `9`, r: `2`, key: `af1f0g` }],
  ]),
  Q = D(`lightbulb`, [
    [
      `path`,
      {
        d: `M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,
        key: `1gvzjb`,
      },
    ],
    [`path`, { d: `M9 18h6`, key: `x1upvd` }],
    [`path`, { d: `M10 22h4`, key: `ceow96` }],
  ]),
  ue = D(`list`, [
    [`path`, { d: `M3 5h.01`, key: `18ugdj` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M3 19h.01`, key: `noohij` }],
    [`path`, { d: `M8 5h13`, key: `1pao27` }],
    [`path`, { d: `M8 12h13`, key: `1za7za` }],
    [`path`, { d: `M8 19h13`, key: `m83p4d` }],
  ]),
  de = D(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  fe = D(`mouse-pointer-click`, [
    [`path`, { d: `M14 4.1 12 6`, key: `ita8i4` }],
    [`path`, { d: `m5.1 8-2.9-.8`, key: `1go3kf` }],
    [`path`, { d: `m6 12-1.9 2`, key: `mnht97` }],
    [`path`, { d: `M7.2 2.2 8 5.1`, key: `1cfko1` }],
    [
      `path`,
      {
        d: `M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`,
        key: `s0h3yz`,
      },
    ],
  ]),
  pe = D(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  me = D(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  he = D(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  ge = D(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  _e = D(`smartphone`, [
    [
      `rect`,
      {
        width: `14`,
        height: `20`,
        x: `5`,
        y: `2`,
        rx: `2`,
        ry: `2`,
        key: `1yt0o3`,
      },
    ],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  ve = D(`smile`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 14s1.5 2 4 2 4-2 4-2`, key: `1y1vjs` }],
    [`line`, { x1: `9`, x2: `9.01`, y1: `9`, y2: `9`, key: `yxxnd0` }],
    [`line`, { x1: `15`, x2: `15.01`, y1: `9`, y2: `9`, key: `1p4y9e` }],
  ]),
  ye = D(`square-check-big`, [
    [
      `path`,
      {
        d: `M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,
        key: `2acyp4`,
      },
    ],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  be = D(`toggle-left`, [
    [`circle`, { cx: `9`, cy: `12`, r: `3`, key: `u3jwor` }],
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `7`, key: `g7kal2` },
    ],
  ]),
  xe = D(`timer`, [
    [`line`, { x1: `10`, x2: `14`, y1: `2`, y2: `2`, key: `14vaq8` }],
    [`line`, { x1: `12`, x2: `15`, y1: `14`, y2: `11`, key: `17fdiu` }],
    [`circle`, { cx: `12`, cy: `14`, r: `8`, key: `1e1u0o` }],
  ]),
  Se = D(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  Ce = { class: `settings-panel` },
  we = { key: 0, class: `settings-header` },
  Te = { class: `settings-scroll` },
  Ee = { class: `setting-group` },
  De = { class: `setting-group` },
  Oe = { class: `avatar-choices` },
  ke = [`onClick`],
  Ae = [`src`],
  je = { class: `setting-group` },
  Me = { key: 0, class: `bg-preview-wrap` },
  Ne = [`src`],
  Pe = I(
    a({
      __name: `SettingsPanel`,
      props: { hideHeader: { type: Boolean } },
      emits: [`back`],
      setup(e, { emit: r }) {
        let a = r;
        return (r, s) => (
          q(),
          f(`div`, Ce, [
            e.hideHeader
              ? N(``, !0)
              : (q(),
                f(`div`, we, [
                  P(
                    `button`,
                    { class: `back-btn`, onClick: (s[0] ||= (e) => a(`back`)) },
                    [h(l(R), { size: 20 })]
                  ),
                  (s[3] ||= P(`span`, { class: `settings-title` }, `设置`, -1)),
                ])),
            P(`div`, Te, [
              P(`div`, Ee, [
                (s[4] ||= P(`label`, { class: `setting-label` }, `用户名`, -1)),
                o(
                  P(
                    `input`,
                    {
                      "onUpdate:modelValue": (s[1] ||= (e) =>
                        (l(W).username = e)),
                      class: `setting-input`,
                      type: `text`,
                      maxlength: `20`,
                      placeholder: `请输入用户名`,
                    },
                    null,
                    512
                  ),
                  [[n, l(W).username]]
                ),
              ]),
              P(`div`, De, [
                (s[5] ||= P(`label`, { class: `setting-label` }, `头像`, -1)),
                P(`div`, Oe, [
                  (q(),
                  f(
                    i,
                    null,
                    t([`player1`, `player2`], (e) =>
                      P(
                        `button`,
                        {
                          key: e,
                          class: C([
                            `avatar-choice`,
                            { active: l(W).playerAvatar === e },
                          ]),
                          onClick: (t) => (l(W).playerAvatar = e),
                        },
                        [
                          P(
                            `img`,
                            {
                              src: l(j)(`./assets/avatars/${e}.png`),
                              class: `avatar-preview`,
                            },
                            null,
                            8,
                            Ae
                          ),
                        ],
                        10,
                        ke
                      )
                    ),
                    64
                  )),
                ]),
              ]),
              P(`div`, je, [
                (s[6] ||= P(
                  `label`,
                  { class: `setting-label` },
                  `背景图片`,
                  -1
                )),
                o(
                  P(
                    `input`,
                    {
                      "onUpdate:modelValue": (s[2] ||= (e) =>
                        (l(W).backgroundImage = e)),
                      class: `setting-input`,
                      type: `text`,
                      placeholder: `输入图片URL（留空使用默认）`,
                    },
                    null,
                    512
                  ),
                  [[n, l(W).backgroundImage]]
                ),
                l(W).backgroundImage
                  ? (q(),
                    f(`div`, Me, [
                      P(
                        `img`,
                        {
                          src: l(j)(l(W).backgroundImage),
                          class: `bg-preview`,
                        },
                        null,
                        8,
                        Ne
                      ),
                    ]))
                  : N(``, !0),
              ]),
            ]),
            (s[7] ||= P(
              `div`,
              { class: `settings-footer` },
              [
                P(`div`, { class: `footer-title` }, `HeartLibrary`),
                P(`div`, { class: `footer-version` }, `v1.0`),
                P(`div`, { class: `footer-author` }, `作者：Ivan，如有疑问/bug反馈可加Q群：814853585`),
              ],
              -1
            )),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-d6f1b838`]]
  ),
  Fe = { class: `contact-list` },
  Ie = { key: `settings`, class: `header-inner` },
  Le = { key: `contacts`, class: `header-inner` },
  Re = { class: `header-icon` },
  ze = [`src`],
  Be = { key: `contacts`, class: `contact-scroll` },
  Ve = [`onClick`],
  He = { class: `avatar-ring` },
  Ue = [`src`],
  We = { class: `contact-info` },
  Ge = { class: `contact-name` },
  Ke = { class: `contact-preview` },
  qe = !0,
  Je = I(
    a({
      __name: `ContactList`,
      props: { characters: {}, desktop: { type: Boolean } },
      emits: [
        `select`,
        `openSettings`,
        `settingsToggle`,
        `openEditor`,
        `openGuide`,
      ],
      setup(n, { emit: r }) {
        let a = n,
          o = r,
          s = B(!1);
        function c() {
          o(`openSettings`),
            a.desktop || ((s.value = !s.value), o(`settingsToggle`, s.value));
        }
        return (r, a) => (
          q(),
          f(`div`, Fe, [
            P(
              `div`,
              { class: C([`contact-header`, { glass: qe }]) },
              [
                h(
                  K,
                  { name: `header-swap`, mode: `out-in` },
                  {
                    default: x(() => [
                      s.value && !n.desktop
                        ? (q(),
                          f(`div`, Ie, [
                            P(
                              `button`,
                              {
                                class: `header-back-btn`,
                                onClick: (a[0] ||= (e) => {
                                  (s.value = !1), o(`settingsToggle`, !1);
                                }),
                              },
                              [h(l(R), { size: 20 })]
                            ),
                            (a[4] ||= P(
                              `span`,
                              { class: `header-title` },
                              `设置`,
                              -1
                            )),
                          ]))
                        : (q(),
                          f(`div`, Le, [
                            P(`div`, Re, [
                              P(
                                `img`,
                                {
                                  src: l(j)(
                                    `./assets/phone_ui/icon_phone_chat.png`
                                  ),
                                  class: `header-icon-img`,
                                },
                                null,
                                8,
                                ze
                              ),
                            ]),
                            (a[5] ||= P(
                              `span`,
                              { class: `header-title` },
                              `HeartLibrary`,
                              -1
                            )),
                            P(
                              `button`,
                              {
                                class: `settings-btn`,
                                onClick: (a[1] ||= (e) => o(`openGuide`)),
                                title: `使用指南`,
                              },
                              [h(l(Q), { size: 18 })]
                            ),
                            P(
                              `button`,
                              {
                                class: `settings-btn`,
                                onClick: (a[2] ||= (e) => o(`openEditor`)),
                              },
                              [h(l(ie), { size: 18 })]
                            ),
                            P(`button`, { class: `settings-btn`, onClick: c }, [
                              h(l(ge), { size: 18 }),
                            ]),
                          ])),
                    ]),
                    _: 1,
                  }
                ),
              ],
              2
            ),
            h(
              K,
              { name: `panel-swap`, mode: `out-in` },
              {
                default: x(() => [
                  s.value && !n.desktop
                    ? (q(),
                      e(Pe, {
                        key: `settings`,
                        "hide-header": !0,
                        onBack: (a[3] ||= (e) => {
                          (s.value = !1), o(`settingsToggle`, !1);
                        }),
                      }))
                    : (q(),
                      f(`div`, Be, [
                        (q(!0),
                        f(
                          i,
                          null,
                          t(
                            n.characters,
                            (e, t) => (
                              q(),
                              f(
                                `div`,
                                {
                                  key: e.char_id,
                                  class: `contact-item`,
                                  style: S({
                                    animationDelay: `${400 + t * 50}ms`,
                                  }),
                                  onClick: (t) => o(`select`, e),
                                },
                                [
                                  P(`div`, He, [
                                    P(
                                      `img`,
                                      {
                                        src: l(O)(e.char_id),
                                        class: `avatar-img`,
                                      },
                                      null,
                                      8,
                                      Ue
                                    ),
                                  ]),
                                  P(`div`, We, [
                                    P(`div`, Ge, w(e.char_name), 1),
                                    P(
                                      `div`,
                                      Ke,
                                      w(
                                        e.signature ||
                                          `${e.scripts.length}段对话`
                                      ),
                                      1
                                    ),
                                  ]),
                                  (a[6] ||= P(
                                    `div`,
                                    { class: `contact-dot` },
                                    null,
                                    -1
                                  )),
                                ],
                                12,
                                Ve
                              )
                            )
                          ),
                          128
                        )),
                      ])),
                ]),
                _: 1,
              }
            ),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-4f6ded57`]]
  );
function Ye(e, t = `指挥使`) {
  let n = 0,
    r = 0,
    i = null;
  function a(e) {
    return e.replace(/==PLAYER_NAME==/g, t).replace(/==RT==/g, ``);
  }
  let o = [];
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n && n.cmd === `SetGroupId`) {
      let n = `第${String(o.length + 1).padStart(2, `0`)}章`;
      for (let r = t + 1; r < e.length; r++) {
        let t = e[r];
        if (t && t.cmd === `SetPhoneMsg`) {
          let e = t.params[0],
            r = String(t.params[2]);
          n = e === 3 || e === 4 || r.startsWith(`emoji_`) ? `[表情]` : a(r);
          break;
        }
        if (t && t.cmd === `SetGroupId`) break;
      }
      o.push({ index: o.length, startCmdIndex: t, firstLine: n });
    }
  }
  let s = u({
    messages: [],
    choices: [],
    state: `playing`,
    currentGroup: ``,
    chapters: o,
    currentChapter: 0,
  });
  function c() {
    for (; n < e.length; ) {
      let t = e[n];
      for (let e = o.length - 1; e >= 0; e--) {
        let t = o[e];
        if (t && n >= t.startCmdIndex) {
          s.currentChapter = e;
          break;
        }
      }
      if (t.cmd === `SetGroupId`) {
        let e = s.messages.length > 0;
        if (
          (e &&
            s.messages.push({
              id: r++,
              type: `divider`,
              speakerId: ``,
              text: ``,
              emotion: ``,
              isEmoji: !1,
            }),
          (s.currentGroup = String(t.params[0])),
          n++,
          e)
        ) {
          s.state = `waiting_click`;
          return;
        }
        continue;
      }
      if (t.cmd === `SetPhoneMsg`) {
        let e = t.params[0],
          i = String(t.params[1]),
          o = String(t.params[2]),
          c = e === 3 || e === 4 || o.startsWith(`emoji_`),
          l = e === 0 || e === 3,
          u = o.startsWith(`__IMG__`);
        s.messages.push({
          id: r++,
          type: l ? `npc` : `player`,
          speakerId: i,
          text: u ? `` : a(o),
          emotion: c ? o : ``,
          isEmoji: c && !u,
          customImage: u ? o.slice(7) : void 0,
        }),
          n++,
          (s.state = `waiting_click`);
        return;
      }
      if (t.cmd === `SetPhoneMsgChoiceBegin`) {
        i = String(t.params[0]);
        let e = [];
        for (let n = 1; n < t.params.length; n++) {
          let r = String(t.params[n]);
          r && !/^avg\d+_\d+$/.test(r) && e.push({ index: n, text: a(r) });
        }
        (s.choices = e), (s.state = `waiting_choice`), n++;
        return;
      }
      if (t.cmd === `SetPhoneMsgChoiceJumpTo`) {
        n++;
        continue;
      }
      if (t.cmd === `SetPhoneMsgChoiceEnd`) {
        (i = null), n++;
        continue;
      }
      n++;
    }
    s.state = `finished`;
  }
  function l(t) {
    if (!i) return;
    s.choices = [];
    let r = String(t),
      a = !1;
    for (let t = n; t < e.length; t++) {
      let o = e[t];
      if (
        o.cmd === `SetPhoneMsgChoiceJumpTo` &&
        String(o.params[0]) === i &&
        String(o.params[1]) === r
      ) {
        (n = t + 1), (a = !0);
        break;
      }
    }
    if (!a) {
      f(), c();
      return;
    }
    d();
  }
  function d() {
    for (; n < e.length; ) {
      let t = e[n];
      if (t.cmd === `SetPhoneMsgChoiceJumpTo` && String(t.params[0]) === i) {
        f(), c();
        return;
      }
      if (t.cmd === `SetPhoneMsgChoiceEnd` && String(t.params[0]) === i) {
        (i = null), n++, c();
        return;
      }
      if (t.cmd === `SetPhoneMsg`) {
        let e = t.params[0],
          i = String(t.params[1]),
          o = String(t.params[2]),
          c = e === 3 || e === 4 || o.startsWith(`emoji_`),
          l = e === 0 || e === 3,
          u = o.startsWith(`__IMG__`);
        s.messages.push({
          id: r++,
          type: l ? `npc` : `player`,
          speakerId: i,
          text: u ? `` : a(o),
          emotion: c ? o : ``,
          isEmoji: c && !u,
          customImage: u ? o.slice(7) : void 0,
        }),
          n++,
          (s.state = `waiting_click`);
        return;
      }
      n++;
    }
    s.state = `finished`;
  }
  function f() {
    for (; n < e.length; ) {
      let t = e[n];
      if (t.cmd === `SetPhoneMsgChoiceEnd` && String(t.params[0]) === i) {
        (i = null), n++;
        return;
      }
      n++;
    }
  }
  function p() {
    s.state === `waiting_click` && ((s.state = `playing`), i ? d() : c());
  }
  function m() {
    (n = 0),
      (r = 0),
      (i = null),
      (s.messages = []),
      (s.choices = []),
      (s.state = `playing`),
      (s.currentGroup = ``),
      (s.currentChapter = 0);
  }
  function h(e) {
    e < 0 ||
      e >= o.length ||
      ((n = o[e].startCmdIndex),
      (r = 0),
      (i = null),
      (s.messages = []),
      (s.choices = []),
      (s.state = `playing`),
      (s.currentGroup = ``),
      (s.currentChapter = e),
      c());
  }
  return {
    state: s,
    advance: c,
    selectChoice: l,
    tap: p,
    reset: m,
    jumpToChapter: h,
  };
}
var Xe = new Map();
function Ze(e) {
  return `${e}${e.includes(`?`) ? `&` : `?`}t=${Date.now()}`;
}
async function Qe(e) {
  let t = await (await fetch(Ze(`./data/index.json`))).json(),
    n = [];
  for (let e of t) {
    let t = `${e.char_id}_${e.char_name}`;
    for (let r of e.scripts)
      n.push({ char: e, seq: r.seq, url: `./data/${t}/chat_${r.seq}.json` });
  }
  let r = n.length,
    i = 0;
  return (
    await Promise.all(
      n.map(async (t) => {
        try {
          let e = await (await fetch(Ze(t.url))).json(),
            n = `${t.char.char_id}_${t.seq}`;
          Xe.set(n, e);
        } catch {}
        i++, e?.(i, r);
      })
    ),
    t
  );
}
function $e(e, t) {
  return Xe.get(`${e}_${t}`) || [];
}
function et(e) {
  let t = [];
  for (let n of e.scripts) t.push(...$e(e.char_id, n.seq));
  return t;
}
var tt = { class: `chat-view` },
  nt = { class: `header-avatar-ring` },
  rt = [`src`],
  it = { class: `header-info` },
  at = { class: `header-name` },
  ot = { class: `header-status` },
  st = [`disabled`],
  ct = { key: 0, class: `chapter-drawer-wrap` },
  lt = { class: `chapter-drawer` },
  ut = [`onClick`],
  dt = { class: `chapter-label` },
  ft = { class: `chapter-preview` },
  pt = { key: 1, class: `chat-loading` },
  mt = { class: `messages-container`, ref: `exportContainerRef` },
  ht = { key: 0, class: `chapter-divider` },
  gt = { class: `msg-avatar-wrap` },
  _t = [`src`],
  vt = [`src`],
  yt = [`src`],
  bt = { key: 2, class: `msg-placeholder npc-placeholder` },
  xt = { key: 3 },
  St = [`src`],
  Ct = [`src`],
  wt = { key: 2, class: `msg-placeholder player-placeholder` },
  Tt = { key: 3 },
  Et = { class: `msg-avatar-wrap` },
  Dt = [`src`],
  Ot = { key: 0, class: `choice-panel` },
  kt = [`onClick`],
  At = { key: 1, class: `tap-hint` },
  jt = { key: 2, class: `chat-end` },
  Mt = { class: `long-press-ring`, viewBox: `0 0 48 48` },
  Nt = [`stroke-dashoffset`],
  Pt = { class: `export-box` },
  Ft = { class: `export-color-row` },
  It = { class: `color-hex` },
  Lt = { class: `export-toggle-row` },
  Rt = { class: `export-actions` },
  zt = [`disabled`],
  Bt = [`disabled`],
  Vt = 500,
  Ht = 1500,
  Ut = 10,
  Wt = !0,
  Gt = I(
    a({
      __name: `ChatView`,
      props: {
        character: {},
        hideHeader: { type: Boolean },
        customCommands: {},
        narrators: {},
        sessionAvatar: {},
      },
      emits: [`back`],
      setup(a, { emit: s }) {
        let u = a,
          p = s,
          m = B(),
          b = B(),
          T = B(!0),
          E = B(!1),
          D = B(!1),
          k = B(),
          A = B(!1),
          F = B(0),
          I = B(0),
          L = B(0),
          V = 0,
          H = 0,
          U = { x: 0, y: 0 },
          te = !1,
          G = B(!1),
          J = B(!1),
          Y = B(`#1a2744`),
          X = B(!0);
        async function ne() {
          (T.value = !0), (E.value = !1);
          let e;
          (e = u.customCommands ? u.customCommands : et(u.character)),
            (b.value = Ye(e, W.username)),
            b.value.advance(),
            (T.value = !1);
        }
        d(ne),
          y(() => u.character.char_id, ne),
          y(
            () => b.value?.state.messages.length,
            async () => {
              await c(), m.value && (m.value.scrollTop = m.value.scrollHeight);
            }
          ),
          y(
            () => b.value?.state.choices.length,
            async () => {
              await c(), m.value && (m.value.scrollTop = m.value.scrollHeight);
            }
          );
        function Z(e) {
          if (u.narrators && e.startsWith(`narrator_`)) {
            let t = e.replace(`narrator_`, ``),
              n = u.narrators.find((e) => e.id === t);
            if (n) return n.avatarType === `custom` ? n.avatar : j(n.avatar);
          }
          return ee(e);
        }
        function re() {
          b.value && b.value.state.state === `waiting_click` && b.value.tap();
        }
        function ie(e) {
          b.value && b.value.selectChoice(e);
        }
        function ae(e) {
          b.value &&
            ((D.value = !0),
            (E.value = !1),
            setTimeout(() => {
              b.value.jumpToChapter(e), (D.value = !1);
            }, 200));
        }
        function oe(e) {
          e.button === 0 &&
            ((U.x = e.clientX),
            (U.y = e.clientY),
            (I.value = e.clientX),
            (L.value = e.clientY),
            (te = !1),
            Q(),
            (k.value = setTimeout(() => {
              le();
            }, Vt)));
        }
        function se(e) {
          let t = e.clientX - U.x,
            n = e.clientY - U.y;
          Math.sqrt(t * t + n * n) > Ut && Q();
        }
        function ce(e) {
          let t = A.value || V || te;
          if ((Q(), t)) {
            e.preventDefault(), e.stopPropagation(), (te = !1);
            return;
          }
          re();
        }
        function le() {
          (A.value = !0), (F.value = 0), (H = performance.now());
          function e(t) {
            let n = t - H;
            if (((F.value = Math.min(n / Ht, 1)), F.value >= 1)) {
              (A.value = !1), (V = 0), (te = !0), de();
              return;
            }
            V = requestAnimationFrame(e);
          }
          V = requestAnimationFrame(e);
        }
        function Q() {
          (k.value &&= (clearTimeout(k.value), void 0)),
            (V &&= (cancelAnimationFrame(V), 0)),
            (A.value = !1),
            (F.value = 0);
        }
        function de() {
          if (!b.value) return;
          let e = b.value;
          for (
            ;
            e.state.state === `waiting_click` &&
            (e.tap(),
            e.state.messages[e.state.messages.length - 1]?.type !== `divider`);

          );
        }
        function fe(e) {
          (A.value || k.value) && e.preventDefault();
        }
        g(() => {
          Q();
        });
        function pe() {
          G.value = !0;
        }
        function me() {
          if (!b.value) return [];
          let e = b.value.state.messages,
            t = b.value.state.currentChapter,
            n = 0,
            r = 0;
          for (let i = 0; i < e.length; i++) {
            if (i === 0) {
              if (t === 0) {
                n = 0;
                break;
              }
              r = 0;
              continue;
            }
            if (e[i].type === `divider` && (r++, r === t)) {
              n = i + 1;
              break;
            }
          }
          let i = e.length;
          for (let t = n; t < e.length; t++)
            if (e[t].type === `divider` && t > n) {
              i = t;
              break;
            }
          return e.slice(n, i);
        }
        function he(e) {
          return new Promise((t, n) => {
            let r = new Image();
            (r.onload = () => t(r)),
              (r.onerror = () => n(Error(`Failed to load: ${e}`))),
              (r.src = e);
          });
        }
        async function ge(e) {
          if (!b.value || J.value) return;
          J.value = !0;
          let t = e === `chapter` ? me() : [...b.value.state.messages];
          if (t.length === 0) {
            J.value = !1;
            return;
          }
          try {
            let n = new Map(),
              r = new Set();
            for (let e of t)
              e.type !== `divider` &&
                (r.add(Z(e.speakerId)),
                e.isEmoji && r.add(z(e.emotion)),
                e.customImage && r.add(e.customImage));
            let i = u.sessionAvatar
              ? u.sessionAvatar.startsWith(`data:`)
                ? u.sessionAvatar
                : j(u.sessionAvatar)
              : O(u.character.char_id);
            X.value && r.add(i),
              await Promise.all(
                [...r].map(async (e) => {
                  try {
                    let t = await he(e);
                    n.set(e, t);
                  } catch {}
                })
              );
            let a = 1.5,
              o = `700 15px 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif`,
              s = document.createElement(`canvas`);
            (s.width = 1), (s.height = 1);
            let c = s.getContext(`2d`);
            c.font = o;
            function l(e, t, n) {
              let r = [],
                i = ``;
              for (let a of t) {
                let t = i + a;
                e.measureText(t).width > n && i.length > 0
                  ? (r.push(i), (i = a))
                  : (i = t);
              }
              return i && r.push(i), r.length ? r : [``];
            }
            let d = [];
            for (let e of t) {
              if (e.type === `divider`) {
                d.push({ type: `divider`, height: 17, msg: e });
                continue;
              }
              let t, n, r, i;
              if (e.isEmoji || e.customImage) t = 108;
              else {
                (n = l(c, e.text || `[请输入文本]`, 212)),
                  (i = n.length * 15 * a + 20);
                let o = 0;
                for (let e of n) o = Math.max(o, c.measureText(e).width);
                (r = Math.min(240, o + 28 + 2)), (t = Math.max(38, i));
              }
              d.push({
                type: e.type,
                height: t,
                msg: e,
                lines: n,
                bubbleW: r,
                bubbleH: i,
              });
            }
            let f = X.value ? 60 : 0,
              p =
                f +
                32 +
                d.reduce((e, t, n) => e + t.height + (n > 0 ? 10 : 0), 0),
              m = document.createElement(`canvas`);
            (m.width = 375 * 2), (m.height = p * 2);
            let h = m.getContext(`2d`);
            if (
              (h.scale(2, 2),
              (h.fillStyle = Y.value),
              h.fillRect(0, 0, 375, p),
              X.value)
            ) {
              (h.fillStyle = `rgba(0, 0, 0, 0.2)`), h.fillRect(0, 0, 375, f);
              let e = n.get(i);
              e &&
                (h.save(),
                h.beginPath(),
                h.arc(30, 30, 36 / 2, 0, Math.PI * 2),
                h.closePath(),
                h.clip(),
                h.drawImage(e, 12, 12, 36, 36),
                h.restore(),
                h.beginPath(),
                h.arc(30, 30, 36 / 2, 0, Math.PI * 2),
                (h.strokeStyle = `rgba(255, 255, 255, 0.2)`),
                (h.lineWidth = 1.5),
                h.stroke()),
                (h.font = `700 14px 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif`),
                (h.fillStyle = `rgba(255, 255, 255, 0.95)`),
                h.fillText(u.character.char_name, 58, 28),
                u.character.signature &&
                  ((h.font = `500 11px 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif`),
                  (h.fillStyle = `rgba(255, 255, 255, 0.55)`),
                  h.fillText(u.character.signature, 58, 44));
            }
            function g(e, t, n, r, i, a, o) {
              let s = a ?? i,
                c = o ?? i;
              h.beginPath(),
                h.moveTo(e + s, t),
                h.lineTo(e + n - c, t),
                h.quadraticCurveTo(e + n, t, e + n, t + c),
                h.lineTo(e + n, t + r - i),
                h.quadraticCurveTo(e + n, t + r, e + n - i, t + r),
                h.lineTo(e + i, t + r),
                h.quadraticCurveTo(e, t + r, e, t + r - i),
                h.lineTo(e, t + s),
                h.quadraticCurveTo(e, t, e + s, t),
                h.closePath();
            }
            function _(e, t, n, r) {
              h.save(),
                h.beginPath(),
                h.arc(t + r / 2, n + r / 2, r / 2, 0, Math.PI * 2),
                h.closePath(),
                h.clip(),
                h.drawImage(e, t, n, r, r),
                h.restore(),
                h.beginPath(),
                h.arc(t + r / 2, n + r / 2, r / 2, 0, Math.PI * 2),
                (h.strokeStyle = `rgba(100, 140, 255, 0.25)`),
                (h.lineWidth = 1.5),
                h.stroke();
            }
            let v = f + 16;
            h.font = o;
            for (let e = 0; e < d.length; e++) {
              let t = d[e];
              if ((e > 0 && (v += 10), t.type === `divider`)) {
                let e = v + 8,
                  n = h.createLinearGradient(75, e, 300, e);
                n.addColorStop(0, `transparent`),
                  n.addColorStop(0.5, `rgba(255, 255, 255, 0.35)`),
                  n.addColorStop(1, `transparent`),
                  (h.strokeStyle = n),
                  (h.lineWidth = 1),
                  h.beginPath(),
                  h.moveTo(75, e),
                  h.lineTo(300, e),
                  h.stroke(),
                  (v += t.height);
                continue;
              }
              let r = t.msg,
                i = t.type === `npc`,
                s = Z(r.speakerId),
                c = n.get(s);
              if (r.isEmoji || r.customImage) {
                let e = r.isEmoji ? z(r.emotion) : r.customImage,
                  t = n.get(e);
                if (i) {
                  c && _(c, 12, v, 38);
                  let e = v;
                  t && h.drawImage(t, 58, e, 100, 100);
                } else {
                  c && _(c, 325, v, 38);
                  let e = v;
                  t && h.drawImage(t, 217, e, 100, 100);
                }
              } else {
                let e = t.bubbleW,
                  n = t.bubbleH,
                  r = t.lines;
                if (i) {
                  c && _(c, 12, v, 38);
                  let t = v;
                  g(58, t, e, n, 16, 4, void 0),
                    (h.fillStyle = `#f9f9f7`),
                    h.fill(),
                    (h.fillStyle = `#264278`),
                    (h.font = o);
                  for (let e = 0; e < r.length; e++)
                    h.fillText(r[e], 72, t + 10 + (e + 0.75) * 15 * a);
                } else {
                  c && _(c, 325, v, 38);
                  let t = 317 - e,
                    i = v;
                  g(t, i, e, n, 16, void 0, 4),
                    (h.fillStyle = `#4c74d3`),
                    h.fill(),
                    (h.fillStyle = `#f9f9f7`),
                    (h.font = o);
                  for (let e = 0; e < r.length; e++)
                    h.fillText(r[e], t + 14, i + 10 + (e + 0.75) * 15 * a);
                }
              }
              v += t.height;
            }
            m.toBlob((t) => {
              if (!t) return;
              let n = URL.createObjectURL(t),
                r = document.createElement(`a`);
              (r.download = `${u.character.char_name}_${
                e === `chapter`
                  ? `第` +
                    String((b.value?.state.currentChapter ?? 0) + 1).padStart(
                      2,
                      `0`
                    ) +
                    `话`
                  : `全部`
              }.png`),
                (r.href = n),
                r.click(),
                setTimeout(() => URL.revokeObjectURL(n), 1e3);
            }, `image/png`);
          } finally {
            (J.value = !1), (G.value = !1);
          }
        }
        return (s, c) => (
          q(),
          f(`div`, tt, [
            a.hideHeader
              ? N(``, !0)
              : (q(),
                f(
                  `div`,
                  { key: 0, class: C([`chat-header`, { glass: Wt }]) },
                  [
                    P(
                      `button`,
                      {
                        class: `btn-back`,
                        onClick: (c[0] ||= (e) => p(`back`)),
                      },
                      [h(l(R), { size: 20 })]
                    ),
                    P(`div`, nt, [
                      P(
                        `img`,
                        {
                          src: a.sessionAvatar
                            ? a.sessionAvatar.startsWith(`data:`)
                              ? a.sessionAvatar
                              : l(j)(a.sessionAvatar)
                            : l(O)(a.character.char_id),
                          class: `header-avatar`,
                        },
                        null,
                        8,
                        rt
                      ),
                    ]),
                    P(`div`, it, [
                      P(`div`, at, w(a.character.char_name), 1),
                      P(`div`, ot, w(a.character.signature || `在线`), 1),
                    ]),
                    b.value && b.value.state.messages.length > 0
                      ? (q(),
                        f(
                          `button`,
                          {
                            key: 0,
                            class: `btn-export`,
                            onClick: v(pe, [`stop`]),
                            disabled: J.value,
                          },
                          [
                            h(l(M), { size: 14 }),
                            (c[8] ||= P(`span`, null, `导出`, -1)),
                          ],
                          8,
                          st
                        ))
                      : N(``, !0),
                    b.value && b.value.state.chapters.length > 1
                      ? (q(),
                        f(
                          `button`,
                          {
                            key: 1,
                            class: `btn-chapters`,
                            onClick: (c[1] ||= v(
                              (e) => (E.value = !E.value),
                              [`stop`]
                            )),
                          },
                          [
                            h(l(ue), { size: 14 }),
                            (c[9] ||= P(`span`, null, `列表`, -1)),
                          ]
                        ))
                      : N(``, !0),
                  ],
                  2
                )),
            h(
              K,
              { name: `drawer` },
              {
                default: x(() => [
                  E.value && b.value
                    ? (q(),
                      f(`div`, ct, [
                        P(`div`, lt, [
                          (q(!0),
                          f(
                            i,
                            null,
                            t(
                              b.value.state.chapters,
                              (e) => (
                                q(),
                                f(
                                  `div`,
                                  {
                                    key: e.index,
                                    class: C([
                                      `chapter-item`,
                                      {
                                        active:
                                          e.index ===
                                          b.value.state.currentChapter,
                                      },
                                    ]),
                                    onClick: (t) => ae(e.index),
                                  },
                                  [
                                    P(
                                      `span`,
                                      dt,
                                      `第` +
                                        w(
                                          String(e.index + 1).padStart(2, `0`)
                                        ) +
                                        `话`,
                                      1
                                    ),
                                    P(`span`, ft, w(e.firstLine), 1),
                                  ],
                                  10,
                                  ut
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : N(``, !0),
                ]),
                _: 1,
              }
            ),
            T.value
              ? (q(),
                f(`div`, pt, [
                  ...(c[10] ||= [
                    P(`div`, { class: `loading-spinner` }, null, -1),
                  ]),
                ]))
              : (q(),
                f(
                  `div`,
                  {
                    key: 2,
                    class: C([`chat-body`, { "chapter-fade": D.value }]),
                    ref_key: `scrollEl`,
                    ref: m,
                    onPointerdown: oe,
                    onPointermove: se,
                    onPointerup: ce,
                    onPointercancel: Q,
                    onPointerleave: Q,
                    onContextmenu: fe,
                  },
                  [
                    P(
                      `div`,
                      mt,
                      [
                        b.value
                          ? (q(),
                            f(
                              i,
                              { key: 0 },
                              [
                                (q(!0),
                                f(
                                  i,
                                  null,
                                  t(
                                    b.value.state.messages,
                                    (e) => (
                                      q(),
                                      f(
                                        `div`,
                                        {
                                          key: e.id,
                                          class: C([`message-row`, e.type]),
                                        },
                                        [
                                          e.type === `divider`
                                            ? (q(),
                                              f(`div`, ht, [
                                                ...(c[11] ||= [
                                                  P(`span`, null, null, -1),
                                                ]),
                                              ]))
                                            : e.type === `npc`
                                            ? (q(),
                                              f(
                                                i,
                                                { key: 1 },
                                                [
                                                  P(`div`, gt, [
                                                    P(
                                                      `img`,
                                                      {
                                                        src: Z(e.speakerId),
                                                        class: `msg-avatar`,
                                                      },
                                                      null,
                                                      8,
                                                      _t
                                                    ),
                                                  ]),
                                                  P(
                                                    `div`,
                                                    {
                                                      class: C([
                                                        `msg-bubble npc-bubble`,
                                                        {
                                                          "emoji-bubble":
                                                            e.isEmoji ||
                                                            e.customImage,
                                                        },
                                                      ]),
                                                    },
                                                    [
                                                      e.isEmoji
                                                        ? (q(),
                                                          f(
                                                            `img`,
                                                            {
                                                              key: 0,
                                                              src: l(z)(
                                                                e.emotion
                                                              ),
                                                              class: `msg-emoji`,
                                                            },
                                                            null,
                                                            8,
                                                            vt
                                                          ))
                                                        : e.customImage
                                                        ? (q(),
                                                          f(
                                                            `img`,
                                                            {
                                                              key: 1,
                                                              src: e.customImage,
                                                              class: `msg-custom-img`,
                                                            },
                                                            null,
                                                            8,
                                                            yt
                                                          ))
                                                        : e.text
                                                        ? (q(),
                                                          f(
                                                            `span`,
                                                            xt,
                                                            w(e.text),
                                                            1
                                                          ))
                                                        : (q(),
                                                          f(
                                                            `span`,
                                                            bt,
                                                            `[请输入文本]`
                                                          )),
                                                    ],
                                                    2
                                                  ),
                                                ],
                                                64
                                              ))
                                            : (q(),
                                              f(
                                                i,
                                                { key: 2 },
                                                [
                                                  P(
                                                    `div`,
                                                    {
                                                      class: C([
                                                        `msg-bubble player-bubble`,
                                                        {
                                                          "emoji-bubble":
                                                            e.isEmoji ||
                                                            e.customImage,
                                                        },
                                                      ]),
                                                    },
                                                    [
                                                      e.isEmoji
                                                        ? (q(),
                                                          f(
                                                            `img`,
                                                            {
                                                              key: 0,
                                                              src: l(z)(
                                                                e.emotion
                                                              ),
                                                              class: `msg-emoji`,
                                                            },
                                                            null,
                                                            8,
                                                            St
                                                          ))
                                                        : e.customImage
                                                        ? (q(),
                                                          f(
                                                            `img`,
                                                            {
                                                              key: 1,
                                                              src: e.customImage,
                                                              class: `msg-custom-img`,
                                                            },
                                                            null,
                                                            8,
                                                            Ct
                                                          ))
                                                        : e.text
                                                        ? (q(),
                                                          f(
                                                            `span`,
                                                            Tt,
                                                            w(e.text),
                                                            1
                                                          ))
                                                        : (q(),
                                                          f(
                                                            `span`,
                                                            wt,
                                                            `[请输入文本]`
                                                          )),
                                                    ],
                                                    2
                                                  ),
                                                  P(`div`, Et, [
                                                    P(
                                                      `img`,
                                                      {
                                                        src: Z(e.speakerId),
                                                        class: `msg-avatar`,
                                                      },
                                                      null,
                                                      8,
                                                      Dt
                                                    ),
                                                  ]),
                                                ],
                                                64
                                              )),
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                )),
                                b.value.state.state === `waiting_choice` &&
                                b.value.state.choices.length
                                  ? (q(),
                                    f(`div`, Ot, [
                                      (q(!0),
                                      f(
                                        i,
                                        null,
                                        t(
                                          b.value.state.choices,
                                          (e) => (
                                            q(),
                                            f(
                                              `button`,
                                              {
                                                key: e.index,
                                                class: `choice-btn`,
                                                onClick: v(
                                                  (t) => ie(e.index),
                                                  [`stop`]
                                                ),
                                              },
                                              w(e.text),
                                              9,
                                              kt
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]))
                                  : N(``, !0),
                                b.value.state.state === `waiting_click`
                                  ? (q(), f(`div`, At, ` 点击继续 `))
                                  : N(``, !0),
                                b.value.state.state === `finished`
                                  ? (q(), f(`div`, jt, ` — 对话结束 — `))
                                  : N(``, !0),
                              ],
                              64
                            ))
                          : N(``, !0),
                      ],
                      512
                    ),
                  ],
                  34
                )),
            (q(),
            e(r, { to: `body` }, [
              A.value
                ? (q(),
                  f(
                    `div`,
                    {
                      key: 0,
                      class: `long-press-ring-wrap`,
                      style: S({ left: I.value + `px`, top: L.value + `px` }),
                    },
                    [
                      (q(),
                      f(`svg`, Mt, [
                        (c[12] ||= P(
                          `circle`,
                          { class: `ring-bg`, cx: `24`, cy: `24`, r: `20` },
                          null,
                          -1
                        )),
                        P(
                          `circle`,
                          {
                            class: `ring-progress`,
                            cx: `24`,
                            cy: `24`,
                            r: `20`,
                            "stroke-dasharray": 125.66,
                            "stroke-dashoffset": 125.66 * (1 - F.value),
                          },
                          null,
                          8,
                          Nt
                        ),
                      ])),
                    ],
                    4
                  ))
                : N(``, !0),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `export-modal` },
                {
                  default: x(() => [
                    G.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `export-overlay`,
                            onClick: (c[7] ||= v(
                              (e) => (G.value = !1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, Pt, [
                              (c[15] ||= P(
                                `div`,
                                { class: `export-title` },
                                `导出为图片`,
                                -1
                              )),
                              (c[16] ||= P(
                                `div`,
                                { class: `export-text` },
                                `选择导出范围与背景颜色`,
                                -1
                              )),
                              (c[17] ||= P(
                                `div`,
                                { class: `export-section-label` },
                                `背景颜色`,
                                -1
                              )),
                              P(`div`, Ft, [
                                o(
                                  P(
                                    `input`,
                                    {
                                      type: `color`,
                                      "onUpdate:modelValue": (c[2] ||= (e) =>
                                        (Y.value = e)),
                                      class: `color-input`,
                                    },
                                    null,
                                    512
                                  ),
                                  [[n, Y.value]]
                                ),
                                P(`span`, It, w(Y.value), 1),
                              ]),
                              (c[18] ||= P(
                                `div`,
                                { class: `export-section-label` },
                                `信息顶栏`,
                                -1
                              )),
                              P(`label`, Lt, [
                                (c[14] ||= P(
                                  `span`,
                                  { class: `export-toggle-text` },
                                  `显示会话头像、标题和签名`,
                                  -1
                                )),
                                P(
                                  `span`,
                                  {
                                    class: C([
                                      `toggle-switch`,
                                      { on: X.value },
                                    ]),
                                  },
                                  [
                                    o(
                                      P(
                                        `input`,
                                        {
                                          type: `checkbox`,
                                          "onUpdate:modelValue": (c[3] ||= (
                                            e
                                          ) => (X.value = e)),
                                          class: `toggle-input`,
                                        },
                                        null,
                                        512
                                      ),
                                      [[_, X.value]]
                                    ),
                                    (c[13] ||= P(
                                      `span`,
                                      { class: `toggle-track` },
                                      [P(`span`, { class: `toggle-thumb` })],
                                      -1
                                    )),
                                  ],
                                  2
                                ),
                              ]),
                              P(`div`, Rt, [
                                P(
                                  `button`,
                                  {
                                    class: `export-btn export-btn-chapter`,
                                    onClick: (c[4] ||= (e) => ge(`chapter`)),
                                    disabled: J.value,
                                  },
                                  w(J.value ? `导出中...` : `当前话`),
                                  9,
                                  zt
                                ),
                                P(
                                  `button`,
                                  {
                                    class: `export-btn export-btn-all`,
                                    onClick: (c[5] ||= (e) => ge(`all`)),
                                    disabled: J.value,
                                  },
                                  w(J.value ? `导出中...` : `全部消息`),
                                  9,
                                  Bt
                                ),
                              ]),
                              P(
                                `button`,
                                {
                                  class: `export-cancel`,
                                  onClick: (c[6] ||= (e) => (G.value = !1)),
                                },
                                `取消`
                              ),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-688e4afb`]]
  ),
  Kt = `heartlibrary-editor`;
function qt(e) {
  let t =
      {
        103: `Amber`,
        107: `Tilia`,
        108: `Kasimira`,
        110: `Firenze`,
        111: `Iris`,
        112: `Noya`,
        113: `Shimiao`,
        116: `Ridge`,
        117: `Jinglin`,
        118: `Coronis_118`,
        119: `Nanoha`,
        120: `Canace`,
        123: `Ann`,
        125: `Freesia`,
        126: `Flora`,
        127: `Teresa`,
        132: `Minova`,
        133: `Nazuka`,
        134: `Fuyuka`,
        135: `Mistique`,
        141: `Chixia`,
        142: `Cosette`,
        143: `Wraith`,
        144: `Chitose`,
        147: `Caramel`,
        149: `Gerie`,
        150: `Laru`,
        155: `Shia`,
        156: `Nazuna`,
        158: `LaruXmas`,
        159: `Coronis`,
      }[e.charId] || `player1`,
    n = `./assets/avatars/${t}.png`,
    r = [
      {
        id: $t(),
        name: e.name || t,
        avatar: n,
        avatarType: `preset`,
        position: `left`,
      },
      {
        id: $t(),
        name: `指挥使`,
        avatar: `./assets/avatars/player1.png`,
        avatarType: `preset`,
        position: `right`,
      },
    ],
    i = r[0].id,
    a = r[1].id,
    o = e.commands.map((e) => {
      if (e.cmd === `SetPhoneMsg`) {
        let t = e.params[0],
          n = t === 0 || t === 3,
          r = [
            e.params[0],
            n ? `narrator_${i}` : `narrator_${a}`,
            ...e.params.slice(2),
          ];
        return { ...e, params: r };
      }
      return e;
    });
  return {
    id: e.id,
    title: e.name,
    subtitle: e.signature || ``,
    avatar: n,
    avatarType: `preset`,
    narrators: r,
    commands: o,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  };
}
function Jt() {
  try {
    let e = localStorage.getItem(Kt);
    if (e) {
      let t = JSON.parse(e);
      if (Array.isArray(t.sessions)) return { sessions: t.sessions };
      if (Array.isArray(t.characters))
        return { sessions: t.characters.map(qt) };
    }
  } catch {}
  return { sessions: [] };
}
var $ = u(Jt());
y(
  () => ({ sessions: [...$.sessions] }),
  () => {
    localStorage.setItem(Kt, JSON.stringify({ sessions: $.sessions }));
  },
  { deep: !0 }
);
function Yt(e) {
  $.sessions.push(e);
}
function Xt(e, t) {
  let n = $.sessions.findIndex((t) => t.id === e);
  n >= 0 && ($.sessions[n] = { ...$.sessions[n], ...t, updatedAt: Date.now() });
}
function Zt(e) {
  let t = new Set(e);
  $.sessions = $.sessions.filter((e) => !t.has(e.id));
}
function Qt(e) {
  if (e.version === 2 && Array.isArray(e.sessions)) {
    for (let t of e.sessions) {
      let e = $.sessions.findIndex((e) => e.id === t.id);
      e >= 0 ? ($.sessions[e] = t) : $.sessions.push(t);
    }
    return !0;
  }
  if (e.version === 1 && Array.isArray(e.characters)) {
    let t = e.characters.map(qt);
    for (let e of t) {
      let t = $.sessions.findIndex((t) => t.id === e.id);
      t >= 0 ? ($.sessions[t] = e) : $.sessions.push(e);
    }
    return !0;
  }
  return !1;
}
function $t() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
var en = { class: `editor-list` },
  tn = { class: `editor-header glass` },
  nn = { class: `header-inner` },
  rn = { class: `editor-scroll` },
  an = { key: 0, class: `empty-hint` },
  on = [`onClick`],
  sn = { key: 0 },
  cn = { class: `avatar-ring` },
  ln = [`src`],
  un = { class: `item-info` },
  dn = { class: `item-name` },
  fn = { class: `item-sig` },
  pn = [`onClick`],
  mn = { class: `fab-group` },
  hn = [`disabled`],
  gn = [`disabled`],
  _n = { class: `modal-box` },
  vn = { class: `modal-text` },
  yn = { class: `modal-actions` },
  bn = I(
    a({
      __name: `EditorList`,
      emits: [`back`, `editSession`, `playSession`, `addSession`],
      setup(n, { emit: a }) {
        let o = a,
          s = B(!1),
          c = B(!1),
          u = B(new Set()),
          d = B(!1),
          p = B(!1),
          g = m(() => s.value || c.value);
        function _() {
          s.value
            ? ((s.value = !1), (u.value = new Set()))
            : ((c.value = !1), (s.value = !0), (u.value = new Set()));
        }
        function y() {
          c.value
            ? ((c.value = !1), (u.value = new Set()))
            : ((s.value = !1), (c.value = !0), (u.value = new Set()));
        }
        function b() {
          (s.value = !1), (c.value = !1), (u.value = new Set());
        }
        function T(e) {
          u.value.has(e) ? u.value.delete(e) : u.value.add(e),
            (u.value = new Set(u.value));
        }
        function D() {
          u.value.size !== 0 && (d.value = !0);
        }
        async function O() {
          (d.value = !1), (p.value = !0);
          let e = [...u.value];
          for (let t = 0; t < e.length; t++)
            Zt([e[t]]),
              t < e.length - 1 &&
                (await new Promise((e) => setTimeout(e, 120)));
          await new Promise((e) => setTimeout(e, 350)),
            (s.value = !1),
            (u.value = new Set()),
            (p.value = !1);
        }
        function k(e) {
          g.value ? T(e.id) : o(`playSession`, e);
        }
        function A() {
          u.value = new Set($.sessions.map((e) => e.id));
        }
        function F() {
          let e = new Set();
          for (let t of $.sessions) u.value.has(t.id) || e.add(t.id);
          u.value = e;
        }
        function I() {
          if (u.value.size === 0) return;
          let e = $.sessions.filter((e) => u.value.has(e.id)),
            t = { version: 2, sessions: e },
            n = new Blob([JSON.stringify(t, null, 2)], {
              type: `application/json`,
            }),
            r = URL.createObjectURL(n),
            i = document.createElement(`a`);
          (i.href = r),
            (i.download = `heartlibrary-export-${e.length}.json`),
            i.click(),
            URL.revokeObjectURL(r),
            (c.value = !1),
            (u.value = new Set());
        }
        function z(e) {
          return e.avatarType === `custom` ? e.avatar : j(e.avatar);
        }
        function H() {
          let e = document.createElement(`input`);
          (e.type = `file`),
            (e.accept = `.json`),
            (e.onchange = () => {
              let t = e.files?.[0];
              if (!t) return;
              let n = new FileReader();
              (n.onload = () => {
                try {
                  Qt(JSON.parse(n.result));
                } catch {}
              }),
                n.readAsText(t);
            }),
            e.click();
        }
        return (n, a) => (
          q(),
          f(`div`, en, [
            P(`div`, tn, [
              P(`div`, nn, [
                P(
                  `button`,
                  {
                    class: `header-back-btn`,
                    onClick: (a[0] ||= (e) => o(`back`)),
                  },
                  [h(l(R), { size: 20 })]
                ),
                (a[5] ||= P(`span`, { class: `header-title` }, `描绘记忆`, -1)),
                P(
                  `button`,
                  { class: `header-action-btn`, onClick: H, title: `导入工程` },
                  [h(l(M), { size: 16 })]
                ),
                P(
                  `button`,
                  {
                    class: C([`header-action-btn`, { active: c.value }]),
                    onClick: y,
                    title: `导出`,
                  },
                  [h(l(U), { size: 16 })],
                  2
                ),
              ]),
            ]),
            P(`div`, rn, [
              l($).sessions.length === 0
                ? (q(), f(`div`, an, ` 暂无会话，点击右下角 + 添加 `))
                : N(``, !0),
              h(
                E,
                { name: `item-leave`, tag: `div` },
                {
                  default: x(() => [
                    (q(!0),
                    f(
                      i,
                      null,
                      t(
                        l($).sessions,
                        (e, t) => (
                          q(),
                          f(
                            `div`,
                            {
                              key: e.id,
                              class: C([
                                `editor-item`,
                                {
                                  selected: u.value.has(e.id),
                                  "delete-mode": g.value,
                                },
                              ]),
                              style: S({ animationDelay: `${t * 50}ms` }),
                              onClick: (t) => k(e),
                            },
                            [
                              P(
                                `div`,
                                {
                                  class: C([
                                    `check-area`,
                                    { visible: g.value },
                                  ]),
                                },
                                [
                                  P(
                                    `div`,
                                    {
                                      class: C([
                                        `check-circle`,
                                        { checked: u.value.has(e.id) },
                                      ]),
                                    },
                                    [
                                      u.value.has(e.id)
                                        ? (q(), f(`span`, sn, `✓`))
                                        : N(``, !0),
                                    ],
                                    2
                                  ),
                                ],
                                2
                              ),
                              P(`div`, cn, [
                                P(
                                  `img`,
                                  { src: z(e), class: `avatar-img` },
                                  null,
                                  8,
                                  ln
                                ),
                              ]),
                              P(`div`, un, [
                                P(`div`, dn, w(e.title), 1),
                                P(`div`, fn, w(e.subtitle || `暂无简介`), 1),
                              ]),
                              h(
                                K,
                                { name: `edit-btn-fade` },
                                {
                                  default: x(() => [
                                    g.value
                                      ? N(``, !0)
                                      : (q(),
                                        f(
                                          `button`,
                                          {
                                            key: 0,
                                            class: `edit-btn`,
                                            onClick: v(
                                              (t) => o(`editSession`, e),
                                              [`stop`]
                                            ),
                                          },
                                          [h(l(V), { size: 16 })],
                                          8,
                                          pn
                                        )),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ],
                            14,
                            on
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
            ]),
            P(`div`, mn, [
              h(
                E,
                { name: `fab-slide`, tag: `div`, class: `fab-extras` },
                {
                  default: x(() => [
                    s.value
                      ? (q(),
                        f(
                          `button`,
                          {
                            key: `d-all`,
                            class: `fab fab-select`,
                            onClick: A,
                            title: `全选`,
                            style: { "transition-delay": `0.05s` },
                          },
                          [h(l(ye), { size: 20 })]
                        ))
                      : N(``, !0),
                    c.value
                      ? (q(),
                        f(
                          `button`,
                          {
                            key: `e-all`,
                            class: `fab fab-select`,
                            onClick: A,
                            title: `全选`,
                            style: { "transition-delay": `0.1s` },
                          },
                          [h(l(ye), { size: 20 })]
                        ))
                      : N(``, !0),
                    c.value
                      ? (q(),
                        f(
                          `button`,
                          {
                            key: `e-invert`,
                            class: `fab fab-invert`,
                            onClick: F,
                            title: `反选`,
                          },
                          [h(l(be), { size: 20 })]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
              P(
                `button`,
                {
                  class: C([
                    `fab fab-trash`,
                    { "delete-active": s.value, "export-morph": c.value },
                  ]),
                  onClick: (a[1] ||= (e) =>
                    s.value ? D() : c.value ? I() : _()),
                  disabled: p.value || (g.value && u.value.size === 0),
                },
                [
                  h(
                    K,
                    { name: `icon-swap`, mode: `out-in` },
                    {
                      default: x(() => [
                        c.value
                          ? (q(), e(l(U), { key: `upload`, size: 22 }))
                          : (q(), e(l(L), { key: `trash`, size: 22 })),
                      ]),
                      _: 1,
                    }
                  ),
                ],
                10,
                hn
              ),
              P(
                `button`,
                {
                  class: C([`fab fab-add`, { "fab-rotate": g.value }]),
                  onClick: (a[2] ||= (e) => (g.value ? b() : o(`addSession`))),
                  disabled: p.value,
                },
                [h(l(me), { size: 22 })],
                10,
                gn
              ),
            ]),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    d.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `modal-overlay`,
                            onClick: (a[4] ||= v(
                              (e) => (d.value = !1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, _n, [
                              (a[6] ||= P(
                                `div`,
                                { class: `modal-title` },
                                `确认删除`,
                                -1
                              )),
                              P(
                                `div`,
                                vn,
                                `将删除 ` +
                                  w(u.value.size) +
                                  ` 个会话，此操作不可撤销。`,
                                1
                              ),
                              P(`div`, yn, [
                                P(
                                  `button`,
                                  {
                                    class: `modal-btn modal-cancel`,
                                    onClick: (a[3] ||= (e) => (d.value = !1)),
                                  },
                                  `取消`
                                ),
                                P(
                                  `button`,
                                  {
                                    class: `modal-btn modal-confirm`,
                                    onClick: O,
                                  },
                                  `删除`
                                ),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-8edb22a8`]]
  );
function xn(e, t = 256, n = 0.8) {
  return new Promise((r, i) => {
    let a = new FileReader();
    (a.onerror = () => i(Error(`Failed to read file`))),
      (a.onload = () => {
        let e = new Image();
        (e.onerror = () => i(Error(`Failed to load image`))),
          (e.onload = () => {
            let i = document.createElement(`canvas`),
              { width: a, height: o } = e;
            (a > t || o > t) &&
              (a > o
                ? ((o = Math.round((t / a) * o)), (a = t))
                : ((a = Math.round((t / o) * a)), (o = t))),
              (i.width = a),
              (i.height = o),
              i.getContext(`2d`).drawImage(e, 0, 0, a, o),
              r(i.toDataURL(`image/jpeg`, n));
          }),
          (e.src = a.result);
      }),
      a.readAsDataURL(e);
  });
}
function Sn() {
  return new Promise((e) => {
    let t = document.createElement(`input`);
    (t.type = `file`),
      (t.accept = `image/*`),
      (t.onchange = () => e(t.files?.[0] ?? null)),
      t.addEventListener(`cancel`, () => e(null)),
      t.click();
  });
}
var Cn = { key: `list`, class: `narrator-modal` },
  wn = { class: `nm-header` },
  Tn = { class: `nm-list` },
  En = [`onClick`],
  Dn = { class: `nm-avatar-ring` },
  On = [`src`],
  kn = { class: `nm-info` },
  An = { class: `nm-name` },
  jn = { class: `nm-pos` },
  Mn = { class: `nm-actions` },
  Nn = [`onClick`],
  Pn = [`onClick`],
  Fn = { key: `edit`, class: `narrator-modal` },
  In = { class: `nm-header` },
  Ln = { class: `nm-title` },
  Rn = { class: `nm-edit-body` },
  zn = [`src`],
  Bn = { class: `nm-field` },
  Vn = { class: `nm-field` },
  Hn = { class: `nm-pos-toggle` },
  Un = { class: `nm-header` },
  Wn = { class: `ap-body` },
  Gn = { class: `ap-grid` },
  Kn = [`onClick`],
  qn = [`src`],
  Jn = I(
    a({
      __name: `NarratorModal`,
      props: { narrators: {}, currentNarratorId: {} },
      emits: [`select`, `update`, `close`],
      setup(e, { emit: r }) {
        let a = e,
          s = r,
          c = B(null),
          u = B(!1),
          d = B(``),
          p = B(``),
          g = B(`preset`),
          _ = B(`left`),
          y = B(!1),
          b = m(() =>
            Object.entries(F).map(([e, t]) => ({
              id: e,
              en: t,
              url: O(e),
              rawUrl: k(e),
            }))
          );
        function S(e) {
          s(`select`, e);
        }
        function T() {
          (u.value = !0),
            (d.value = ``),
            (p.value = `./assets/avatars/player1.png`),
            (g.value = `preset`),
            (_.value = `left`),
            (c.value = {
              id: $t(),
              name: ``,
              avatar: `./assets/avatars/player1.png`,
              avatarType: `preset`,
              position: `left`,
            });
        }
        function E(e) {
          (u.value = !1),
            (d.value = e.name),
            (p.value = e.avatar),
            (g.value = e.avatarType),
            (_.value = e.position),
            (c.value = { ...e });
        }
        function D() {
          if (!c.value) return;
          let e = {
              ...c.value,
              name: d.value || `未命名`,
              avatar: p.value,
              avatarType: g.value,
              position: _.value,
            },
            t = [...a.narrators];
          if (u.value) t.push(e);
          else {
            let n = t.findIndex((t) => t.id === e.id);
            n >= 0 && (t[n] = e);
          }
          s(`update`, t), (c.value = null), u.value && s(`select`, e.id);
        }
        function A() {
          c.value = null;
        }
        function M(e) {
          if (a.narrators.length <= 1) return;
          let t = a.narrators.filter((t) => t.id !== e);
          s(`update`, t),
            a.currentNarratorId === e && t.length > 0 && s(`select`, t[0].id);
        }
        function I(e) {
          (p.value = e), (g.value = `preset`), (y.value = !1);
        }
        async function z() {
          let e = await Sn();
          e &&
            ((p.value = await xn(e, 256, 0.8)),
            (g.value = `custom`),
            (y.value = !1));
        }
        function H(e) {
          return e.avatarType === `custom` ? e.avatar : j(e.avatar);
        }
        return (r, a) => (
          q(),
          f(
            `div`,
            {
              class: `narrator-modal-overlay`,
              onClick: (a[7] ||= v((e) => s(`close`), [`self`])),
            },
            [
              h(
                K,
                { name: `narrator-panel`, mode: `out-in` },
                {
                  default: x(() => [
                    !c.value && !y.value
                      ? (q(),
                        f(`div`, Cn, [
                          P(`div`, wn, [
                            (a[8] ||= P(
                              `span`,
                              { class: `nm-title` },
                              `讲述者`,
                              -1
                            )),
                            P(
                              `button`,
                              {
                                class: `nm-close`,
                                onClick: (a[0] ||= (e) => s(`close`)),
                              },
                              `×`
                            ),
                          ]),
                          P(`div`, Tn, [
                            (q(!0),
                            f(
                              i,
                              null,
                              t(
                                e.narrators,
                                (t) => (
                                  q(),
                                  f(
                                    `div`,
                                    {
                                      key: t.id,
                                      class: C([
                                        `nm-item`,
                                        {
                                          active: t.id === e.currentNarratorId,
                                        },
                                      ]),
                                      onClick: (e) => S(t.id),
                                    },
                                    [
                                      P(`div`, Dn, [
                                        P(
                                          `img`,
                                          { src: H(t), class: `nm-avatar-img` },
                                          null,
                                          8,
                                          On
                                        ),
                                      ]),
                                      P(`div`, kn, [
                                        P(`div`, An, w(t.name || `未命名`), 1),
                                        P(
                                          `div`,
                                          jn,
                                          w(
                                            t.position === `left`
                                              ? `← 左侧`
                                              : `右侧 →`
                                          ),
                                          1
                                        ),
                                      ]),
                                      P(`div`, Mn, [
                                        P(
                                          `button`,
                                          {
                                            class: `nm-act-btn`,
                                            onClick: v((e) => E(t), [`stop`]),
                                            title: `编辑`,
                                          },
                                          [h(l(V), { size: 14 })],
                                          8,
                                          Nn
                                        ),
                                        e.narrators.length > 1
                                          ? (q(),
                                            f(
                                              `button`,
                                              {
                                                key: 0,
                                                class: `nm-act-btn danger`,
                                                onClick: v(
                                                  (e) => M(t.id),
                                                  [`stop`]
                                                ),
                                                title: `删除`,
                                              },
                                              [h(l(L), { size: 14 })],
                                              8,
                                              Pn
                                            ))
                                          : N(``, !0),
                                      ]),
                                    ],
                                    10,
                                    En
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          P(`button`, { class: `nm-add-btn`, onClick: T }, [
                            h(l(me), { size: 16 }),
                            (a[9] ||= P(`span`, null, `添加讲述者`, -1)),
                          ]),
                        ]))
                      : c.value
                      ? (q(),
                        f(`div`, Fn, [
                          P(`div`, In, [
                            P(`button`, { class: `nm-back`, onClick: A }, [
                              h(l(R), { size: 18 }),
                            ]),
                            P(
                              `span`,
                              Ln,
                              w(u.value ? `添加讲述者` : `编辑讲述者`),
                              1
                            ),
                          ]),
                          P(`div`, Rn, [
                            P(
                              `div`,
                              {
                                class: `nm-edit-avatar-wrap`,
                                onClick: (a[1] ||= (e) => (y.value = !0)),
                              },
                              [
                                P(
                                  `img`,
                                  {
                                    src:
                                      g.value === `custom`
                                        ? p.value
                                        : l(j)(p.value),
                                    class: `nm-edit-avatar`,
                                  },
                                  null,
                                  8,
                                  zn
                                ),
                                (a[10] ||= P(
                                  `div`,
                                  { class: `nm-edit-avatar-hint` },
                                  `点击更换`,
                                  -1
                                )),
                              ]
                            ),
                            P(`div`, Bn, [
                              (a[11] ||= P(
                                `label`,
                                { class: `nm-field-label` },
                                `名字`,
                                -1
                              )),
                              o(
                                P(
                                  `input`,
                                  {
                                    "onUpdate:modelValue": (a[2] ||= (e) =>
                                      (d.value = e)),
                                    class: `nm-field-input`,
                                    placeholder: `讲述者名字`,
                                    maxlength: `20`,
                                  },
                                  null,
                                  512
                                ),
                                [[n, d.value]]
                              ),
                            ]),
                            P(`div`, Vn, [
                              (a[14] ||= P(
                                `label`,
                                { class: `nm-field-label` },
                                `消息位置`,
                                -1
                              )),
                              P(`div`, Hn, [
                                P(
                                  `button`,
                                  {
                                    class: C([
                                      `nm-pos-btn`,
                                      { active: _.value === `left` },
                                    ]),
                                    onClick: (a[3] ||= (e) =>
                                      (_.value = `left`)),
                                  },
                                  [
                                    h(l(Z), { size: 14 }),
                                    (a[12] ||= P(`span`, null, `左侧`, -1)),
                                  ],
                                  2
                                ),
                                P(
                                  `button`,
                                  {
                                    class: C([
                                      `nm-pos-btn`,
                                      { active: _.value === `right` },
                                    ]),
                                    onClick: (a[4] ||= (e) =>
                                      (_.value = `right`)),
                                  },
                                  [
                                    (a[13] ||= P(`span`, null, `右侧`, -1)),
                                    h(l(re), { size: 14 }),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                            P(
                              `button`,
                              { class: `nm-save-btn`, onClick: D },
                              `保存`
                            ),
                          ]),
                        ]))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
              h(
                K,
                { name: `narrator-panel` },
                {
                  default: x(() => [
                    y.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `narrator-modal avatar-picker-modal`,
                            onClick: (a[6] ||= v(() => {}, [`stop`])),
                          },
                          [
                            P(`div`, Un, [
                              P(
                                `button`,
                                {
                                  class: `nm-back`,
                                  onClick: (a[5] ||= (e) => (y.value = !1)),
                                },
                                [h(l(R), { size: 18 })]
                              ),
                              (a[15] ||= P(
                                `span`,
                                { class: `nm-title` },
                                `选择头像`,
                                -1
                              )),
                            ]),
                            P(`div`, Wn, [
                              P(
                                `button`,
                                { class: `ap-upload-btn`, onClick: z },
                                [
                                  h(l(me), { size: 20 }),
                                  (a[16] ||= P(`span`, null, `上传图片`, -1)),
                                ]
                              ),
                              P(`div`, Gn, [
                                (q(!0),
                                f(
                                  i,
                                  null,
                                  t(
                                    b.value,
                                    (e) => (
                                      q(),
                                      f(
                                        `button`,
                                        {
                                          key: e.id,
                                          class: C([
                                            `ap-item`,
                                            { active: p.value === e.rawUrl },
                                          ]),
                                          onClick: (t) => I(e.rawUrl),
                                        },
                                        [
                                          P(
                                            `img`,
                                            { src: e.url, class: `ap-img` },
                                            null,
                                            8,
                                            qn
                                          ),
                                        ],
                                        10,
                                        Kn
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ]
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-f9ff3eba`]]
  ),
  Yn = { class: `ce-modal` },
  Xn = { class: `ce-header` },
  Zn = { class: `ce-body` },
  Qn = { class: `ce-narrator-row` },
  $n = { class: `ce-narrator-chips` },
  er = [`onClick`],
  tr = [`src`],
  nr = { class: `ce-options` },
  rr = [`onClick`],
  ir = { class: `ce-opt-num` },
  ar = [`onUpdate:modelValue`],
  or = [`onClick`],
  sr = { key: 0, class: `ce-opt-body` },
  cr = { key: 0, class: `ce-empty-resp` },
  lr = { class: `ce-resp-header` },
  ur = { class: `ce-resp-narrator` },
  dr = { class: `ce-resp-pos` },
  fr = { class: `ce-resp-actions` },
  pr = [`onClick`, `disabled`],
  mr = [`onClick`, `disabled`],
  hr = [`onClick`],
  gr = [`onUpdate:modelValue`],
  _r = { key: 1, class: `ce-resp-emoji` },
  vr = [`src`],
  yr = { class: `ce-emoji-name` },
  br = { key: 2, class: `ce-resp-img-wrap` },
  xr = [`src`],
  Sr = { class: `ce-add-resp-row` },
  Cr = [`onClick`],
  wr = [`onClick`],
  Tr = [`onClick`],
  Er = { class: `ce-footer` },
  Dr = { class: `ce-emoji-box` },
  Or = { class: `ce-emoji-grid` },
  kr = [`onClick`],
  Ar = [`src`],
  jr = I(
    a({
      __name: `ChoiceEditorModal`,
      props: { narrators: {}, currentNarratorId: {}, initialData: {} },
      emits: [`confirm`, `cancel`],
      setup(r, { emit: a }) {
        let c = r,
          u = a,
          m =
            `emoji_angry_a.emoji_angry_b.emoji_awkward_a.emoji_awkward_c.emoji_awkward_d.emoji_bye_a.emoji_cheerup_a.emoji_comfort_a.emoji_comfort_c.emoji_cranky_a.emoji_cranky_b.emoji_cranky_c.emoji_cry_a.emoji_cry_b.emoji_cry_c.emoji_cry_d.emoji_distract_a.emoji_distract_c.emoji_flower_a.emoji_flower_b.emoji_flower_c.emoji_great_a.emoji_great_b.emoji_great_c.emoji_heart_a.emoji_heart_c.emoji_joy_a.emoji_joy_c.emoji_nope.emoji_paper.emoji_pride_a.emoji_pride_b.emoji_pride_c.emoji_punch_a.emoji_punch_c.emoji_question_a.emoji_question_b.emoji_rock.emoji_rose.emoji_sad_a.emoji_sad_b.emoji_sad_c.emoji_sad_d.emoji_scissors.emoji_sigh_a.emoji_sigh_b.emoji_sigh_c.emoji_sigh_d.emoji_sing_a.emoji_sing_d.emoji_sneaky_a.emoji_sneaky_c.emoji_surprise_a.emoji_surprise_c.emoji_tete_a.emoji_tete_c`.split(
              `.`
            ),
          g = B([]),
          _ = B(0),
          y = B(!1),
          b = B(null),
          S = B(``);
        function E() {
          return Math.random().toString(36).slice(2, 10);
        }
        d(() => {
          c.initialData && c.initialData.options.length > 0
            ? (g.value = JSON.parse(JSON.stringify(c.initialData.options)))
            : (g.value = [
                { text: `选项1`, responses: [] },
                { text: `选项2`, responses: [] },
              ]),
            (S.value = c.currentNarratorId);
        });
        function D(e) {
          return c.narrators.find((t) => t.id === e);
        }
        function O(e) {
          return e.avatarType === `custom` ? e.avatar : j(e.avatar);
        }
        function k() {
          g.value.push({ text: `选项${g.value.length + 1}`, responses: [] }),
            (_.value = g.value.length - 1);
        }
        function A(e) {
          g.value.length <= 1 ||
            (g.value.splice(e, 1),
            _.value >= g.value.length && (_.value = g.value.length - 1));
        }
        function M(e) {
          let t = D(S.value);
          t &&
            g.value[e].responses.push({
              uid: E(),
              speakerId: `narrator_${t.id}`,
              position: t.position,
              text: ``,
              emotion: ``,
              isEmoji: !1,
            });
        }
        function F(e) {
          (b.value = { optIdx: e }), (y.value = !0);
        }
        function I(e) {
          if (!b.value) return;
          let t = D(S.value);
          t &&
            (g.value[b.value.optIdx].responses.push({
              uid: E(),
              speakerId: `narrator_${t.id}`,
              position: t.position,
              text: ``,
              emotion: e,
              isEmoji: !0,
            }),
            (y.value = !1),
            (b.value = null));
        }
        async function R(e) {
          let t = await Sn();
          if (!t) return;
          let n = await xn(t, 512, 0.85),
            r = D(S.value);
          r &&
            g.value[e].responses.push({
              uid: E(),
              speakerId: `narrator_${r.id}`,
              position: r.position,
              text: ``,
              emotion: ``,
              isEmoji: !1,
              customImage: n,
            });
        }
        function V(e, t) {
          g.value[e].responses.splice(t, 1);
        }
        function U(e, t, n) {
          let r = g.value[e].responses,
            i = t + n;
          if (i < 0 || i >= r.length) return;
          let a = r[t];
          (r[t] = r[i]), (r[i] = a);
        }
        function ee() {
          let e = g.value.filter((e) => e.text.trim());
          e.length !== 0 && u(`confirm`, { options: e });
        }
        function W(e) {
          return D(e.speakerId.replace(`narrator_`, ``))?.name || `未知`;
        }
        return (a, c) => (
          q(),
          f(
            `div`,
            {
              class: `ce-overlay`,
              onClick: (c[4] ||= v((e) => u(`cancel`), [`self`])),
            },
            [
              P(`div`, Yn, [
                P(`div`, Xn, [
                  (c[5] ||= P(
                    `span`,
                    { class: `ce-title` },
                    `编辑选项分支`,
                    -1
                  )),
                  P(
                    `button`,
                    {
                      class: `ce-close`,
                      onClick: (c[0] ||= (e) => u(`cancel`)),
                    },
                    `×`
                  ),
                ]),
                P(`div`, Zn, [
                  P(`div`, Qn, [
                    (c[6] ||= P(
                      `span`,
                      { class: `ce-label` },
                      `回复讲述者`,
                      -1
                    )),
                    P(`div`, $n, [
                      (q(!0),
                      f(
                        i,
                        null,
                        t(
                          r.narrators,
                          (e) => (
                            q(),
                            f(
                              `button`,
                              {
                                key: e.id,
                                class: C([
                                  `ce-narrator-chip`,
                                  { active: S.value === e.id },
                                ]),
                                onClick: (t) => (S.value = e.id),
                              },
                              [
                                P(
                                  `img`,
                                  { src: O(e), class: `ce-chip-avatar` },
                                  null,
                                  8,
                                  tr
                                ),
                                P(`span`, null, w(e.name), 1),
                              ],
                              10,
                              er
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  P(`div`, nr, [
                    (q(!0),
                    f(
                      i,
                      null,
                      t(
                        g.value,
                        (r, a) => (
                          q(),
                          f(
                            `div`,
                            {
                              key: a,
                              class: C([
                                `ce-option`,
                                { expanded: _.value === a },
                              ]),
                            },
                            [
                              P(
                                `div`,
                                {
                                  class: `ce-opt-header`,
                                  onClick: (e) =>
                                    (_.value = _.value === a ? -1 : a),
                                },
                                [
                                  P(`span`, ir, w(a + 1), 1),
                                  o(
                                    P(
                                      `input`,
                                      {
                                        "onUpdate:modelValue": (e) =>
                                          (r.text = e),
                                        class: `ce-opt-input`,
                                        placeholder: `选项文本`,
                                        onClick: (c[1] ||= v(() => {}, [
                                          `stop`,
                                        ])),
                                      },
                                      null,
                                      8,
                                      ar
                                    ),
                                    [[n, r.text]]
                                  ),
                                  g.value.length > 1
                                    ? (q(),
                                      f(
                                        `button`,
                                        {
                                          key: 0,
                                          class: `ce-opt-del`,
                                          onClick: v((e) => A(a), [`stop`]),
                                          title: `删除选项`,
                                        },
                                        [h(l(L), { size: 14 })],
                                        8,
                                        or
                                      ))
                                    : N(``, !0),
                                  (q(),
                                  e(s(_.value === a ? l(T) : l(H)), {
                                    size: 16,
                                    class: `ce-opt-chevron`,
                                  })),
                                ],
                                8,
                                rr
                              ),
                              h(
                                K,
                                { name: `ce-expand` },
                                {
                                  default: x(() => [
                                    _.value === a
                                      ? (q(),
                                        f(`div`, sr, [
                                          r.responses.length === 0
                                            ? (q(),
                                              f(
                                                `div`,
                                                cr,
                                                ` 暂无回复，点击下方按钮添加 `
                                              ))
                                            : N(``, !0),
                                          (q(!0),
                                          f(
                                            i,
                                            null,
                                            t(
                                              r.responses,
                                              (e, t) => (
                                                q(),
                                                f(
                                                  `div`,
                                                  {
                                                    key: e.uid,
                                                    class: C([
                                                      `ce-resp`,
                                                      e.position,
                                                    ]),
                                                  },
                                                  [
                                                    P(`div`, lr, [
                                                      P(`span`, ur, w(W(e)), 1),
                                                      P(
                                                        `span`,
                                                        dr,
                                                        w(
                                                          e.position === `left`
                                                            ? `←`
                                                            : `→`
                                                        ),
                                                        1
                                                      ),
                                                      P(`div`, fr, [
                                                        P(
                                                          `button`,
                                                          {
                                                            class: `ce-mini`,
                                                            onClick: (e) =>
                                                              U(a, t, -1),
                                                            disabled: t === 0,
                                                          },
                                                          `↑`,
                                                          8,
                                                          pr
                                                        ),
                                                        P(
                                                          `button`,
                                                          {
                                                            class: `ce-mini`,
                                                            onClick: (e) =>
                                                              U(a, t, 1),
                                                            disabled:
                                                              t ===
                                                              r.responses
                                                                .length -
                                                                1,
                                                          },
                                                          `↓`,
                                                          8,
                                                          mr
                                                        ),
                                                        P(
                                                          `button`,
                                                          {
                                                            class: `ce-mini danger`,
                                                            onClick: (e) =>
                                                              V(a, t),
                                                          },
                                                          `×`,
                                                          8,
                                                          hr
                                                        ),
                                                      ]),
                                                    ]),
                                                    !e.isEmoji && !e.customImage
                                                      ? o(
                                                          (q(),
                                                          f(
                                                            `textarea`,
                                                            {
                                                              key: 0,
                                                              "onUpdate:modelValue":
                                                                (t) =>
                                                                  (e.text = t),
                                                              class: `ce-resp-input`,
                                                              placeholder: `回复内容...`,
                                                              rows: `1`,
                                                            },
                                                            null,
                                                            8,
                                                            gr
                                                          )),
                                                          [[n, e.text]]
                                                        )
                                                      : e.isEmoji
                                                      ? (q(),
                                                        f(`div`, _r, [
                                                          P(
                                                            `img`,
                                                            {
                                                              src: l(z)(
                                                                e.emotion
                                                              ),
                                                              class: `ce-emoji-img`,
                                                            },
                                                            null,
                                                            8,
                                                            vr
                                                          ),
                                                          P(
                                                            `span`,
                                                            yr,
                                                            w(e.emotion),
                                                            1
                                                          ),
                                                        ]))
                                                      : e.customImage
                                                      ? (q(),
                                                        f(`div`, br, [
                                                          P(
                                                            `img`,
                                                            {
                                                              src: e.customImage,
                                                              class: `ce-resp-img`,
                                                            },
                                                            null,
                                                            8,
                                                            xr
                                                          ),
                                                        ]))
                                                      : N(``, !0),
                                                  ],
                                                  2
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                          P(`div`, Sr, [
                                            P(
                                              `button`,
                                              {
                                                class: `ce-add-resp`,
                                                onClick: (e) => M(a),
                                              },
                                              `+ 文本`,
                                              8,
                                              Cr
                                            ),
                                            P(
                                              `button`,
                                              {
                                                class: `ce-add-resp`,
                                                onClick: (e) => F(a),
                                              },
                                              [
                                                h(l(ve), { size: 12 }),
                                                (c[7] ||= p(` 表情 `, -1)),
                                              ],
                                              8,
                                              wr
                                            ),
                                            P(
                                              `button`,
                                              {
                                                class: `ce-add-resp`,
                                                onClick: (e) => R(a),
                                              },
                                              [
                                                h(l(le), { size: 12 }),
                                                (c[8] ||= p(` 图片 `, -1)),
                                              ],
                                              8,
                                              Tr
                                            ),
                                          ]),
                                        ]))
                                      : N(``, !0),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                            ],
                            2
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  P(`button`, { class: `ce-add-opt`, onClick: k }, [
                    h(l(me), { size: 16 }),
                    (c[9] ||= p(` 添加选项 `, -1)),
                  ]),
                ]),
                P(`div`, Er, [
                  P(
                    `button`,
                    {
                      class: `ce-btn cancel`,
                      onClick: (c[2] ||= (e) => u(`cancel`)),
                    },
                    `取消`
                  ),
                  P(`button`, { class: `ce-btn confirm`, onClick: ee }, `确认`),
                ]),
              ]),
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    y.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `ce-emoji-overlay`,
                            onClick: (c[3] ||= v(
                              (e) => (y.value = !1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, Dr, [
                              (c[10] ||= P(
                                `div`,
                                { class: `ce-emoji-title` },
                                `选择表情`,
                                -1
                              )),
                              P(`div`, Or, [
                                (q(),
                                f(
                                  i,
                                  null,
                                  t(m, (e) =>
                                    P(
                                      `button`,
                                      {
                                        key: e,
                                        class: `ce-emoji-item`,
                                        onClick: (t) => I(e),
                                      },
                                      [
                                        P(
                                          `img`,
                                          {
                                            src: l(z)(e),
                                            class: `ce-emoji-pick-img`,
                                          },
                                          null,
                                          8,
                                          Ar
                                        ),
                                      ],
                                      8,
                                      kr
                                    )
                                  ),
                                  64
                                )),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ]
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-97186b3e`]]
  ),
  Mr = { class: `editor-form` },
  Nr = { class: `ef-header glass` },
  Pr = { class: `ef-title` },
  Fr = { key: 0, class: `session-settings-wrap` },
  Ir = { class: `session-settings` },
  Lr = { class: `ss-row` },
  Rr = [`src`],
  zr = { class: `ss-fields` },
  Br = { class: `ss-preset-row` },
  Vr = [`onClick`],
  Hr = [`src`],
  Ur = [`onPointerdown`, `onPointerenter`],
  Wr = { key: 0, class: `ef-divider` },
  Gr = [`onClick`],
  Kr = { class: `ef-avatar-wrap` },
  qr = [`src`],
  Jr = [`src`, `onDblclick`],
  Yr = [`src`, `onDblclick`],
  Xr = [`onDblclick`],
  Zr = [`onClick`],
  Qr = [`onClick`],
  $r = [`src`, `onDblclick`],
  ei = [`src`, `onDblclick`],
  ti = [`onDblclick`],
  ni = { class: `ef-avatar-wrap` },
  ri = [`src`],
  ii = { key: 3, class: `ef-choice-block` },
  ai = { class: `ef-choice-header` },
  oi = [`onClick`],
  si = [`onClick`],
  ci = { class: `ef-choice-options` },
  li = { class: `ef-choice-opt-num` },
  ui = { class: `ef-choice-opt-text` },
  di = { class: `ef-choice-opt-count` },
  fi = { key: 0, class: `ef-empty` },
  pi = { class: `ef-input-area` },
  mi = { class: `ef-tool-row` },
  hi = [`src`],
  gi = { class: `ef-narrator-name` },
  _i = { class: `ef-tool-btns` },
  vi = { class: `ef-input-row` },
  yi = [`disabled`],
  bi = { class: `emoji-picker-box` },
  xi = { class: `emoji-picker-grid` },
  Si = [`onClick`],
  Ci = [`src`],
  wi = { class: `emoji-picker-box` },
  Ti = { class: `emoji-picker-grid` },
  Ei = [`onClick`],
  Di = [`src`],
  Oi = { class: `text-edit-box` },
  ki = [`onKeydown`],
  Ai = { class: `data-modal-box` },
  ji = I(
    a({
      __name: `EditorForm`,
      props: { editingSession: {}, characterIndex: {} },
      emits: [`back`, `saved`, `play`],
      setup(a, { expose: s, emit: u }) {
        let p = a,
          g = u;
        s({ save: Ue });
        let _ = B(``),
          b = B(``),
          S = B(`./assets/avatars/player1.png`),
          T = B(`preset`),
          D = B([]),
          A = B(``),
          M = B(!1),
          I = m(() => D.value.find((e) => e.id === A.value) || D.value[0]),
          L = B([]),
          V = 0,
          H = B(``),
          U = B(!1),
          ee = B(!p.editingSession),
          G = B(!1),
          J = B(!1),
          Y = B(-1),
          X = B(),
          ne =
            `emoji_angry_a.emoji_angry_b.emoji_awkward_a.emoji_awkward_c.emoji_awkward_d.emoji_bye_a.emoji_cheerup_a.emoji_comfort_a.emoji_comfort_c.emoji_cranky_a.emoji_cranky_b.emoji_cranky_c.emoji_cry_a.emoji_cry_b.emoji_cry_c.emoji_cry_d.emoji_distract_a.emoji_distract_c.emoji_flower_a.emoji_flower_b.emoji_flower_c.emoji_great_a.emoji_great_b.emoji_great_c.emoji_heart_a.emoji_heart_c.emoji_joy_a.emoji_joy_c.emoji_nope.emoji_paper.emoji_pride_a.emoji_pride_b.emoji_pride_c.emoji_punch_a.emoji_punch_c.emoji_question_a.emoji_question_b.emoji_rock.emoji_rose.emoji_sad_a.emoji_sad_b.emoji_sad_c.emoji_sad_d.emoji_scissors.emoji_sigh_a.emoji_sigh_b.emoji_sigh_c.emoji_sigh_d.emoji_sing_a.emoji_sing_d.emoji_sneaky_a.emoji_sneaky_c.emoji_surprise_a.emoji_surprise_c.emoji_tete_a.emoji_tete_c`.split(
              `.`
            );
        d(() => {
          if (p.editingSession)
            (_.value = p.editingSession.title),
              (b.value = p.editingSession.subtitle),
              (S.value = p.editingSession.avatar),
              (T.value = p.editingSession.avatarType),
              (D.value = [...p.editingSession.narrators]),
              (A.value = D.value[0]?.id || ``),
              (L.value = He(p.editingSession.commands));
          else {
            let e = {
              id: $t(),
              name: `琥珀`,
              avatar: `./assets/avatars/Amber.png`,
              avatarType: `preset`,
              position: `left`,
            };
            (D.value = [
              e,
              {
                id: $t(),
                name: W.username || `指挥使`,
                avatar: `./assets/avatars/${W.playerAvatar}.png`,
                avatarType: `preset`,
                position: `right`,
              },
            ]),
              (A.value = e.id),
              (L.value = []);
          }
        }),
          y(
            () => L.value.length,
            async (e, t) => {
              e > t &&
                (await c(),
                setTimeout(() => {
                  X.value?.scrollTo({
                    top: X.value.scrollHeight,
                    behavior: `smooth`,
                  });
                }, 50));
            }
          );
        function Z(e) {
          let t = e.replace(`narrator_`, ``),
            n = D.value.find((e) => e.id === t);
          return n
            ? n.avatarType === `custom`
              ? n.avatar
              : j(n.avatar)
            : j(`./assets/avatars/player1.png`);
        }
        function re(e) {
          let t = e.replace(`narrator_`, ``);
          return D.value.find((e) => e.id === t)?.position || `left`;
        }
        function ae() {
          let e = H.value.trim();
          if (!e || !I.value) return;
          let t = I.value;
          L.value.push({
            id: V++,
            type: t.position === `left` ? `npc` : `player`,
            speakerId: `narrator_${t.id}`,
            text: e,
            emotion: ``,
            isEmoji: !1,
          }),
            (H.value = ``);
        }
        function ce(e) {
          if (!I.value) return;
          let t = I.value;
          L.value.push({
            id: V++,
            type: t.position === `left` ? `npc` : `player`,
            speakerId: `narrator_${t.id}`,
            text: ``,
            emotion: e,
            isEmoji: !0,
          }),
            (U.value = !1);
        }
        async function Q() {
          if (!I.value) return;
          let e = await Sn();
          if (!e) return;
          let t = await xn(e, 512, 0.85),
            n = I.value;
          L.value.push({
            id: V++,
            type: n.position === `left` ? `npc` : `player`,
            speakerId: `narrator_${n.id}`,
            text: ``,
            emotion: ``,
            isEmoji: !1,
            customImage: t,
          });
        }
        function ue() {
          L.value.push({
            id: V++,
            type: `divider`,
            speakerId: ``,
            text: ``,
            emotion: ``,
            isEmoji: !1,
          });
        }
        function de() {
          (Y.value = -1), (G.value = !0);
        }
        function fe(e) {
          (Y.value = e), (G.value = !0);
        }
        function me(e) {
          if (Y.value >= 0) {
            let t = L.value[Y.value];
            t && t.type === `choice` && (t.choiceData = e);
          } else
            L.value.push({
              id: V++,
              type: `choice`,
              speakerId: ``,
              text: ``,
              emotion: ``,
              isEmoji: !1,
              choiceData: e,
            });
          (G.value = !1), (Y.value = -1);
        }
        function _e(e) {
          L.value.splice(e, 1);
        }
        let ye = B(-1),
          be = B(``),
          xe = B(-1);
        function Se(e) {
          let t = L.value[e];
          !t ||
            t.isEmoji ||
            t.customImage ||
            ((ye.value = e), (be.value = t.text));
        }
        function Ce() {
          let e = L.value[ye.value];
          e && be.value.trim() && (e.text = be.value.trim()), (ye.value = -1);
        }
        function we() {
          ye.value = -1;
        }
        async function Te(e) {
          let t = L.value[e];
          if (!t || !t.customImage) return;
          let n = await Sn();
          n && (t.customImage = await xn(n, 512, 0.85));
        }
        function Ee(e) {
          xe.value = e;
        }
        function De(e) {
          let t = L.value[xe.value];
          t && (t.emotion = e), (xe.value = -1);
        }
        let Oe = B(!1),
          ke = B(-1),
          Ae = B(-1),
          je = null,
          Me = 0;
        function Ne(e, t) {
          e.button === 0 &&
            ((Me = e.clientY),
            (je = setTimeout(() => {
              (Oe.value = !0),
                (ke.value = t),
                (Ae.value = t),
                (document.body.style.userSelect = `none`);
            }, 400)));
        }
        function Pe(e) {
          !Oe.value &&
            je &&
            Math.abs(e.clientY - Me) > 8 &&
            (clearTimeout(je), (je = null));
        }
        function Fe() {
          if (
            ((je &&= (clearTimeout(je), null)),
            Oe.value && ke.value >= 0 && Ae.value >= 0 && ke.value !== Ae.value)
          ) {
            let [e] = L.value.splice(ke.value, 1);
            e && L.value.splice(Ae.value, 0, e);
          }
          (Oe.value = !1),
            (ke.value = -1),
            (Ae.value = -1),
            (document.body.style.userSelect = ``);
        }
        function Ie(e) {
          Oe.value && (Ae.value = e);
        }
        function Le(e) {
          D.value = e;
        }
        function Re(e) {
          A.value = e;
        }
        async function ze() {
          let e = await Sn();
          e && ((S.value = await xn(e, 256, 0.8)), (T.value = `custom`));
        }
        function Be(e) {
          (S.value = k(e)), (T.value = `preset`);
        }
        function Ve() {
          let e = [],
            t = 0,
            n = 0;
          for (let r of L.value) {
            if (r.type === `divider`) {
              t++,
                e.push({
                  cmd: `SetGroupId`,
                  params: [String(t).padStart(2, `0`)],
                });
              continue;
            }
            if (r.type === `choice` && r.choiceData) {
              n++;
              let t = String(n),
                i = [t];
              for (let e of r.choiceData.options) i.push(e.text);
              i.push(``, ``, ``, ``, `narrator_choice`),
                e.push({ cmd: `SetPhoneMsgChoiceBegin`, params: i });
              for (let n = 0; n < r.choiceData.options.length; n++) {
                e.push({
                  cmd: `SetPhoneMsgChoiceJumpTo`,
                  params: [t, String(n + 1)],
                });
                for (let t of r.choiceData.options[n].responses) {
                  let n = t.position === `left`;
                  t.isEmoji
                    ? e.push({
                        cmd: `SetPhoneMsg`,
                        params: [
                          n ? 3 : 4,
                          t.speakerId,
                          t.emotion,
                          `0`,
                          ``,
                          !1,
                          ``,
                        ],
                      })
                    : t.customImage
                    ? e.push({
                        cmd: `SetPhoneMsg`,
                        params: [
                          n ? 0 : 1,
                          t.speakerId,
                          `__IMG__${t.customImage}`,
                          `0`,
                          ``,
                          !1,
                          ``,
                        ],
                      })
                    : e.push({
                        cmd: `SetPhoneMsg`,
                        params: [
                          n ? 0 : 1,
                          t.speakerId,
                          t.text,
                          `0`,
                          ``,
                          !1,
                          ``,
                        ],
                      });
                }
              }
              e.push({ cmd: `SetPhoneMsgChoiceEnd`, params: [t] });
              continue;
            }
            let i = re(r.speakerId);
            if (r.isEmoji) {
              let t = i === `left` ? 3 : 4;
              e.push({
                cmd: `SetPhoneMsg`,
                params: [t, r.speakerId, r.emotion, `0`, ``, !1, ``],
              });
            } else if (r.customImage) {
              let t = i === `left` ? 0 : 1;
              e.push({
                cmd: `SetPhoneMsg`,
                params: [
                  t,
                  r.speakerId,
                  `__IMG__${r.customImage}`,
                  `0`,
                  ``,
                  !1,
                  ``,
                ],
              });
            } else {
              let t = i === `left` ? 0 : 1;
              e.push({
                cmd: `SetPhoneMsg`,
                params: [t, r.speakerId, r.text, `0`, ``, !1, ``],
              });
            }
          }
          return e;
        }
        function He(e) {
          let t = [],
            n = 0;
          for (; n < e.length; ) {
            let r = e[n];
            if (r.cmd === `SetGroupId`)
              t.push({
                id: V++,
                type: `divider`,
                speakerId: ``,
                text: ``,
                emotion: ``,
                isEmoji: !1,
              }),
                n++;
            else if (r.cmd === `SetPhoneMsgChoiceBegin`) {
              let i = String(r.params[0]),
                a = [];
              for (let e = 1; e < r.params.length; e++) {
                let t = String(r.params[e]);
                t &&
                  !/^avg\d+_\d+$/.test(t) &&
                  !/^narrator_/.test(t) &&
                  a.push(t);
              }
              n++;
              let o = a.map((e) => ({ text: e, responses: [] })),
                s = -1;
              for (; n < e.length; ) {
                let t = e[n];
                if (
                  t.cmd === `SetPhoneMsgChoiceEnd` &&
                  String(t.params[0]) === i
                ) {
                  n++;
                  break;
                }
                if (
                  t.cmd === `SetPhoneMsgChoiceJumpTo` &&
                  String(t.params[0]) === i
                ) {
                  (s = Number(t.params[1]) - 1), n++;
                  continue;
                }
                if (t.cmd === `SetPhoneMsg` && s >= 0 && s < o.length) {
                  let e = t.params[0],
                    n = String(t.params[1]),
                    r = String(t.params[2]),
                    i = e === 3 || e === 4 || r.startsWith(`emoji_`),
                    a = r.startsWith(`__IMG__`),
                    c = n.replace(`narrator_`, ``),
                    l =
                      D.value.find((e) => e.id === c)?.position ||
                      (e === 0 || e === 3 ? `left` : `right`);
                  o[s].responses.push({
                    uid: Math.random().toString(36).slice(2, 10),
                    speakerId: n,
                    position: l,
                    text: a || i ? `` : r,
                    emotion: i ? r : ``,
                    isEmoji: i && !a,
                    customImage: a ? r.slice(7) : void 0,
                  });
                }
                n++;
              }
              t.push({
                id: V++,
                type: `choice`,
                speakerId: ``,
                text: ``,
                emotion: ``,
                isEmoji: !1,
                choiceData: { options: o },
              });
            } else if (r.cmd === `SetPhoneMsg`) {
              let e = r.params[0],
                i = String(r.params[1]),
                a = String(r.params[2]),
                o = e === 3 || e === 4 || a.startsWith(`emoji_`),
                s = e === 0 || e === 3;
              a.startsWith(`__IMG__`)
                ? t.push({
                    id: V++,
                    type: s ? `npc` : `player`,
                    speakerId: i,
                    text: ``,
                    emotion: ``,
                    isEmoji: !1,
                    customImage: a.slice(7),
                  })
                : o
                ? t.push({
                    id: V++,
                    type: s ? `npc` : `player`,
                    speakerId: i,
                    text: ``,
                    emotion: a,
                    isEmoji: !0,
                  })
                : t.push({
                    id: V++,
                    type: s ? `npc` : `player`,
                    speakerId: i,
                    text: a,
                    emotion: ``,
                    isEmoji: !1,
                  }),
                n++;
            } else n++;
          }
          return t;
        }
        function Ue() {
          let e = Ve(),
            t = {
              id: p.editingSession?.id || $t(),
              title: _.value || `未命名会话`,
              subtitle: b.value,
              avatar: S.value,
              avatarType: T.value,
              narrators: D.value,
              commands: e,
              createdAt: p.editingSession?.createdAt || Date.now(),
              updatedAt: Date.now(),
            };
          p.editingSession ? Xt(p.editingSession.id, t) : Yt(t), g(`saved`);
        }
        function We() {
          Ue(),
            g(`play`, {
              id: p.editingSession?.id || $t(),
              title: _.value || `未命名会话`,
              subtitle: b.value,
              avatar: S.value,
              avatarType: T.value,
              narrators: D.value,
              commands: Ve(),
              createdAt: Date.now(),
              updatedAt: Date.now(),
            });
        }
        let Ge = m(() => Object.keys(F));
        function Ke(e) {
          e.key === `Enter` && !e.shiftKey && (e.preventDefault(), ae());
        }
        function qe() {
          let e = Ve(),
            t = {
              title: _.value,
              subtitle: b.value,
              avatar: S.value,
              avatarType: T.value,
              narrators: D.value,
              commands: e,
            },
            n = new Blob([JSON.stringify(t, null, 2)], {
              type: `application/json`,
            }),
            r = URL.createObjectURL(n),
            i = document.createElement(`a`);
          (i.href = r),
            (i.download = `${_.value || `会话`}.json`),
            i.click(),
            URL.revokeObjectURL(r),
            (J.value = !1);
        }
        function Je() {
          let e = document.createElement(`input`);
          (e.type = `file`),
            (e.accept = `.json`),
            (e.onchange = () => {
              let t = e.files?.[0];
              if (!t) return;
              let n = new FileReader();
              (n.onload = () => {
                try {
                  let e = JSON.parse(n.result);
                  e.commands &&
                    Array.isArray(e.commands) &&
                    (e.title && (_.value = e.title),
                    e.subtitle && (b.value = e.subtitle),
                    e.avatar &&
                      ((S.value = e.avatar),
                      (T.value = e.avatarType || `preset`)),
                    e.narrators &&
                      Array.isArray(e.narrators) &&
                      ((D.value = e.narrators),
                      (A.value = D.value[0]?.id || ``)),
                    (L.value = He(e.commands)));
                } catch {}
              }),
                n.readAsText(t);
            }),
            e.click(),
            (J.value = !1);
        }
        return (s, c) => (
          q(),
          f(`div`, Mr, [
            P(`div`, Nr, [
              P(
                `button`,
                { class: `ef-back`, onClick: (c[0] ||= (e) => g(`back`)) },
                [h(l(R), { size: 20 })]
              ),
              P(`span`, Pr, w(a.editingSession ? `编辑会话` : `新建会话`), 1),
              P(
                `button`,
                {
                  class: `ef-header-btn`,
                  onClick: (c[1] ||= (e) => (J.value = !0)),
                  title: `数据`,
                },
                [h(l(oe), { size: 16 })]
              ),
              P(
                `button`,
                {
                  class: `ef-header-btn`,
                  onClick: (c[2] ||= (e) => (ee.value = !ee.value)),
                  title: `会话设置`,
                },
                [h(l(ge), { size: 16 })]
              ),
              P(
                `button`,
                { class: `ef-header-btn`, onClick: We, title: `预览` },
                [h(l(pe), { size: 16 })]
              ),
              P(`button`, { class: `ef-save-btn`, onClick: Ue }, `保存`),
            ]),
            h(
              K,
              { name: `drawer` },
              {
                default: x(() => [
                  ee.value
                    ? (q(),
                      f(`div`, Fr, [
                        P(`div`, Ir, [
                          P(`div`, Lr, [
                            P(`div`, { class: `ss-avatar-wrap`, onClick: ze }, [
                              P(
                                `img`,
                                {
                                  src:
                                    T.value === `custom`
                                      ? S.value
                                      : l(j)(S.value),
                                  class: `ss-avatar`,
                                },
                                null,
                                8,
                                Rr
                              ),
                              (c[15] ||= P(
                                `div`,
                                { class: `ss-avatar-hint` },
                                `更换`,
                                -1
                              )),
                            ]),
                            P(`div`, zr, [
                              o(
                                P(
                                  `input`,
                                  {
                                    "onUpdate:modelValue": (c[3] ||= (e) =>
                                      (_.value = e)),
                                    class: `ss-input`,
                                    placeholder: `会话标题`,
                                    maxlength: `20`,
                                  },
                                  null,
                                  512
                                ),
                                [[n, _.value]]
                              ),
                              o(
                                P(
                                  `input`,
                                  {
                                    "onUpdate:modelValue": (c[4] ||= (e) =>
                                      (b.value = e)),
                                    class: `ss-input sm`,
                                    placeholder: `简介`,
                                    maxlength: `50`,
                                  },
                                  null,
                                  512
                                ),
                                [[n, b.value]]
                              ),
                            ]),
                          ]),
                          P(`div`, Br, [
                            (q(!0),
                            f(
                              i,
                              null,
                              t(
                                Ge.value,
                                (e) => (
                                  q(),
                                  f(
                                    `button`,
                                    {
                                      key: e,
                                      class: C([
                                        `ss-preset-btn`,
                                        {
                                          active:
                                            T.value === `preset` &&
                                            S.value === l(k)(e),
                                        },
                                      ]),
                                      onClick: (t) => Be(e),
                                    },
                                    [
                                      P(
                                        `img`,
                                        {
                                          src: l(O)(e),
                                          class: `ss-preset-img`,
                                        },
                                        null,
                                        8,
                                        Hr
                                      ),
                                    ],
                                    10,
                                    Vr
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ]))
                    : N(``, !0),
                ]),
                _: 1,
              }
            ),
            P(
              `div`,
              {
                class: `ef-chat-body`,
                ref_key: `scrollEl`,
                ref: X,
                onPointermove: Pe,
                onPointerup: Fe,
                onPointerleave: Fe,
              },
              [
                h(
                  E,
                  { name: `msg-anim`, tag: `div`, class: `ef-messages` },
                  {
                    default: x(() => [
                      (q(!0),
                      f(
                        i,
                        null,
                        t(
                          L.value,
                          (e, n) => (
                            q(),
                            f(
                              `div`,
                              {
                                key: e.id,
                                class: C([
                                  `ef-msg-row`,
                                  [
                                    e.type,
                                    {
                                      "drag-source": Oe.value && ke.value === n,
                                      "drag-over":
                                        Oe.value &&
                                        Ae.value === n &&
                                        ke.value !== n,
                                    },
                                  ],
                                ]),
                                onPointerdown: (e) => Ne(e, n),
                                onPointerenter: (e) => Ie(n),
                              },
                              [
                                e.type === `divider`
                                  ? (q(),
                                    f(`div`, Wr, [
                                      (c[16] ||= P(`span`, null, null, -1)),
                                      P(
                                        `button`,
                                        {
                                          class: `ef-msg-del divider-del`,
                                          onClick: (e) => _e(n),
                                          title: `删除`,
                                        },
                                        `×`,
                                        8,
                                        Gr
                                      ),
                                    ]))
                                  : e.type === `npc`
                                  ? (q(),
                                    f(
                                      i,
                                      { key: 1 },
                                      [
                                        P(`div`, Kr, [
                                          P(
                                            `img`,
                                            {
                                              src: Z(e.speakerId),
                                              class: `ef-avatar`,
                                            },
                                            null,
                                            8,
                                            qr
                                          ),
                                        ]),
                                        P(
                                          `div`,
                                          {
                                            class: C([
                                              `ef-bubble npc-bubble`,
                                              {
                                                "emoji-bubble":
                                                  e.isEmoji || e.customImage,
                                              },
                                            ]),
                                          },
                                          [
                                            e.isEmoji
                                              ? (q(),
                                                f(
                                                  `img`,
                                                  {
                                                    key: 0,
                                                    src: l(z)(e.emotion),
                                                    class: `ef-emoji`,
                                                    onDblclick: (e) => Ee(n),
                                                  },
                                                  null,
                                                  40,
                                                  Jr
                                                ))
                                              : e.customImage
                                              ? (q(),
                                                f(
                                                  `img`,
                                                  {
                                                    key: 1,
                                                    src: e.customImage,
                                                    class: `ef-custom-img`,
                                                    onDblclick: (e) => Te(n),
                                                  },
                                                  null,
                                                  40,
                                                  Yr
                                                ))
                                              : (q(),
                                                f(
                                                  `span`,
                                                  {
                                                    key: 2,
                                                    onDblclick: (e) => Se(n),
                                                  },
                                                  w(e.text),
                                                  41,
                                                  Xr
                                                )),
                                          ],
                                          2
                                        ),
                                        P(
                                          `button`,
                                          {
                                            class: `ef-msg-del`,
                                            onClick: (e) => _e(n),
                                            title: `删除`,
                                          },
                                          `×`,
                                          8,
                                          Zr
                                        ),
                                      ],
                                      64
                                    ))
                                  : e.type === `player`
                                  ? (q(),
                                    f(
                                      i,
                                      { key: 2 },
                                      [
                                        P(
                                          `button`,
                                          {
                                            class: `ef-msg-del`,
                                            onClick: (e) => _e(n),
                                            title: `删除`,
                                          },
                                          `×`,
                                          8,
                                          Qr
                                        ),
                                        P(
                                          `div`,
                                          {
                                            class: C([
                                              `ef-bubble player-bubble`,
                                              {
                                                "emoji-bubble":
                                                  e.isEmoji || e.customImage,
                                              },
                                            ]),
                                          },
                                          [
                                            e.isEmoji
                                              ? (q(),
                                                f(
                                                  `img`,
                                                  {
                                                    key: 0,
                                                    src: l(z)(e.emotion),
                                                    class: `ef-emoji`,
                                                    onDblclick: (e) => Ee(n),
                                                  },
                                                  null,
                                                  40,
                                                  $r
                                                ))
                                              : e.customImage
                                              ? (q(),
                                                f(
                                                  `img`,
                                                  {
                                                    key: 1,
                                                    src: e.customImage,
                                                    class: `ef-custom-img`,
                                                    onDblclick: (e) => Te(n),
                                                  },
                                                  null,
                                                  40,
                                                  ei
                                                ))
                                              : (q(),
                                                f(
                                                  `span`,
                                                  {
                                                    key: 2,
                                                    onDblclick: (e) => Se(n),
                                                  },
                                                  w(e.text),
                                                  41,
                                                  ti
                                                )),
                                          ],
                                          2
                                        ),
                                        P(`div`, ni, [
                                          P(
                                            `img`,
                                            {
                                              src: Z(e.speakerId),
                                              class: `ef-avatar`,
                                            },
                                            null,
                                            8,
                                            ri
                                          ),
                                        ]),
                                      ],
                                      64
                                    ))
                                  : e.type === `choice` && e.choiceData
                                  ? (q(),
                                    f(`div`, ii, [
                                      P(`div`, ai, [
                                        h(l(se), { size: 14 }),
                                        P(
                                          `span`,
                                          null,
                                          `选项分支 · ` +
                                            w(e.choiceData.options.length) +
                                            ` 个选项`,
                                          1
                                        ),
                                        P(
                                          `button`,
                                          {
                                            class: `ef-choice-edit`,
                                            onClick: (e) => fe(n),
                                          },
                                          `编辑`,
                                          8,
                                          oi
                                        ),
                                        P(
                                          `button`,
                                          {
                                            class: `ef-msg-del inline`,
                                            onClick: (e) => _e(n),
                                          },
                                          `×`,
                                          8,
                                          si
                                        ),
                                      ]),
                                      P(`div`, ci, [
                                        (q(!0),
                                        f(
                                          i,
                                          null,
                                          t(
                                            e.choiceData.options,
                                            (e, t) => (
                                              q(),
                                              f(
                                                `div`,
                                                {
                                                  key: t,
                                                  class: `ef-choice-opt`,
                                                },
                                                [
                                                  P(`span`, li, w(t + 1), 1),
                                                  P(`span`, ui, w(e.text), 1),
                                                  P(
                                                    `span`,
                                                    di,
                                                    w(e.responses.length) +
                                                      ` 条回复`,
                                                    1
                                                  ),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]))
                                  : N(``, !0),
                              ],
                              42,
                              Ur
                            )
                          )
                        ),
                        128
                      )),
                      L.value.length === 0
                        ? (q(), f(`div`, fi, ` 点击下方输入框开始编辑对话 `))
                        : N(``, !0),
                    ]),
                    _: 1,
                  }
                ),
              ],
              544
            ),
            P(`div`, pi, [
              P(`div`, mi, [
                P(
                  `button`,
                  {
                    class: `ef-narrator-btn`,
                    onClick: (c[5] ||= (e) => (M.value = !0)),
                  },
                  [
                    I.value
                      ? (q(),
                        f(
                          `img`,
                          {
                            key: 0,
                            src:
                              I.value.avatarType === `custom`
                                ? I.value.avatar
                                : l(j)(I.value.avatar),
                            class: `ef-narrator-avatar`,
                          },
                          null,
                          8,
                          hi
                        ))
                      : N(``, !0),
                    P(`span`, gi, w(I.value?.name || `选择`), 1),
                  ]
                ),
                P(`div`, _i, [
                  P(
                    `button`,
                    {
                      class: `ef-tool-btn`,
                      onClick: (c[6] ||= (e) => (U.value = !U.value)),
                      title: `表情`,
                    },
                    [h(l(ve), { size: 18 })]
                  ),
                  P(
                    `button`,
                    { class: `ef-tool-btn`, onClick: Q, title: `图片` },
                    [h(l(le), { size: 18 })]
                  ),
                  P(
                    `button`,
                    { class: `ef-tool-btn`, onClick: ue, title: `分隔符` },
                    [h(l(ie), { size: 18 })]
                  ),
                  P(
                    `button`,
                    { class: `ef-tool-btn`, onClick: de, title: `选项分支` },
                    [h(l(se), { size: 18 })]
                  ),
                ]),
              ]),
              P(`div`, vi, [
                o(
                  P(
                    `textarea`,
                    {
                      "onUpdate:modelValue": (c[7] ||= (e) => (H.value = e)),
                      class: `ef-input`,
                      placeholder: `输入消息...`,
                      rows: `1`,
                      onKeydown: Ke,
                    },
                    null,
                    544
                  ),
                  [[n, H.value]]
                ),
                P(
                  `button`,
                  {
                    class: `ef-send-btn`,
                    onClick: ae,
                    disabled: !H.value.trim(),
                  },
                  [h(l(he), { size: 18 })],
                  8,
                  yi
                ),
              ]),
            ]),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    U.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `modal-overlay`,
                            onClick: (c[8] ||= v(
                              (e) => (U.value = !1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, bi, [
                              (c[17] ||= P(
                                `div`,
                                { class: `emoji-picker-title` },
                                `选择表情`,
                                -1
                              )),
                              P(`div`, xi, [
                                (q(),
                                f(
                                  i,
                                  null,
                                  t(ne, (e) =>
                                    P(
                                      `button`,
                                      {
                                        key: e,
                                        class: `emoji-picker-item`,
                                        onClick: (t) => ce(e),
                                      },
                                      [
                                        P(
                                          `img`,
                                          {
                                            src: l(z)(e),
                                            class: `emoji-picker-img`,
                                          },
                                          null,
                                          8,
                                          Ci
                                        ),
                                      ],
                                      8,
                                      Si
                                    )
                                  ),
                                  64
                                )),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    xe.value >= 0
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `modal-overlay`,
                            onClick: (c[9] ||= v(
                              (e) => (xe.value = -1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, wi, [
                              (c[18] ||= P(
                                `div`,
                                { class: `emoji-picker-title` },
                                `替换表情`,
                                -1
                              )),
                              P(`div`, Ti, [
                                (q(),
                                f(
                                  i,
                                  null,
                                  t(ne, (e) =>
                                    P(
                                      `button`,
                                      {
                                        key: e,
                                        class: `emoji-picker-item`,
                                        onClick: (t) => De(e),
                                      },
                                      [
                                        P(
                                          `img`,
                                          {
                                            src: l(z)(e),
                                            class: `emoji-picker-img`,
                                          },
                                          null,
                                          8,
                                          Di
                                        ),
                                      ],
                                      8,
                                      Ei
                                    )
                                  ),
                                  64
                                )),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    ye.value >= 0
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `modal-overlay`,
                            onClick: v(we, [`self`]),
                          },
                          [
                            P(`div`, Oi, [
                              (c[19] ||= P(
                                `div`,
                                { class: `text-edit-title` },
                                `编辑消息`,
                                -1
                              )),
                              o(
                                P(
                                  `textarea`,
                                  {
                                    "onUpdate:modelValue": (c[10] ||= (e) =>
                                      (be.value = e)),
                                    class: `text-edit-input`,
                                    rows: `3`,
                                    onKeydown: [
                                      te(v(Ce, [`exact`, `prevent`]), [
                                        `enter`,
                                      ]),
                                      te(we, [`escape`]),
                                    ],
                                  },
                                  null,
                                  40,
                                  ki
                                ),
                                [[n, be.value]]
                              ),
                              P(`div`, { class: `text-edit-actions` }, [
                                P(
                                  `button`,
                                  {
                                    class: `text-edit-btn cancel`,
                                    onClick: we,
                                  },
                                  `取消`
                                ),
                                P(
                                  `button`,
                                  { class: `text-edit-btn ok`, onClick: Ce },
                                  `确认`
                                ),
                              ]),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    M.value
                      ? (q(),
                        e(
                          Jn,
                          {
                            key: 0,
                            narrators: D.value,
                            "current-narrator-id": A.value,
                            onSelect: Re,
                            onUpdate: Le,
                            onClose: (c[11] ||= (e) => (M.value = !1)),
                          },
                          null,
                          8,
                          [`narrators`, `current-narrator-id`]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    G.value
                      ? (q(),
                        e(
                          jr,
                          {
                            key: 0,
                            narrators: D.value,
                            "current-narrator-id": A.value,
                            "initial-data":
                              Y.value >= 0
                                ? L.value[Y.value]?.choiceData
                                : null,
                            onConfirm: me,
                            onCancel: (c[12] ||= (e) => (G.value = !1)),
                          },
                          null,
                          8,
                          [`narrators`, `current-narrator-id`, `initial-data`]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
            (q(),
            e(r, { to: `body` }, [
              h(
                K,
                { name: `modal-fade` },
                {
                  default: x(() => [
                    J.value
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: `modal-overlay`,
                            onClick: (c[14] ||= v(
                              (e) => (J.value = !1),
                              [`self`]
                            )),
                          },
                          [
                            P(`div`, Ai, [
                              (c[20] ||= P(
                                `div`,
                                { class: `data-modal-title` },
                                `数据管理`,
                                -1
                              )),
                              P(`div`, { class: `data-modal-actions` }, [
                                P(
                                  `button`,
                                  {
                                    class: `data-modal-btn import`,
                                    onClick: Je,
                                  },
                                  `导入 JSON`
                                ),
                                P(
                                  `button`,
                                  {
                                    class: `data-modal-btn export`,
                                    onClick: qe,
                                  },
                                  `导出 JSON`
                                ),
                              ]),
                              P(
                                `button`,
                                {
                                  class: `data-modal-cancel`,
                                  onClick: (c[13] ||= (e) => (J.value = !1)),
                                },
                                `取消`
                              ),
                            ]),
                          ]
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
            ])),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-2454b609`]]
  ),
  Mi = { class: `guide-modal` },
  Ni = { class: `guide-page-wrap` },
  Pi = { class: `guide-title` },
  Fi = { class: `guide-desc` },
  Ii = { class: `guide-dots` },
  Li = [`onClick`],
  Ri = { class: `guide-nav` },
  zi = { class: `guide-nav-btns` },
  Bi = [`disabled`],
  Vi = I(
    a({
      __name: `GuideModal`,
      emits: [`close`],
      setup(n, { emit: r }) {
        let a = r,
          o = B(0),
          c = B(`left`),
          u = [
            {
              icon: de,
              title: `对话回放`,
              desc: `选择角色后以手机界面逐条播放短信对话，支持多话切换与选项分支。点击屏幕推进对话，选择选项进入不同分支。`,
              color: `#5b8fc9`,
            },
            {
              icon: xe,
              title: `长按快进`,
              desc: `在对话中长按屏幕 0.5 秒触发圆环进度条，松手前转满后自动推进到下一个选项或分隔符，快速浏览剧情。`,
              color: `#60bb60`,
            },
            {
              icon: M,
              title: `导出长图`,
              desc: `点击聊天界面右上角的下载按钮，可将当前话或全部消息渲染为一张 PNG 长图，支持自定义背景色和信息顶栏。`,
              color: `#d4a017`,
            },
            {
              icon: V,
              title: `对话编辑器`,
              desc: `在联系人页面点击书本图标进入编辑器，创建自定义对话。底部输入框支持文本、表情、图片和分隔符。`,
              color: `#d34caa`,
            },
            {
              icon: fe,
              title: `双击编辑`,
              desc: `双击文本消息弹出编辑框修改内容，双击图片重新选择替换，双击表情打开选择器更换。`,
              color: `#f59e0b`,
            },
            {
              icon: ce,
              title: `长按拖动排序`,
              desc: `长按消息气泡进入拖动模式，拖到目标位置松手即可调整消息顺序。`,
              color: `#06b6d4`,
            },
            {
              icon: Se,
              title: `讲述者系统`,
              desc: `每个会话可配置多个讲述者，设置头像、名字和消息位置（左/右）。支持上传本地图片作为头像。`,
              color: `#e45454`,
            },
            {
              icon: se,
              title: `选项分支`,
              desc: `在编辑器中点击分支按钮，可视化编辑选项分支。每个选项可配置多条回复，支持文本、表情和图片。`,
              color: `#8b5cf6`,
            },
            {
              icon: _e,
              title: `响应式布局`,
              desc: `移动端全屏沉浸体验，桌面端手机框加侧边面板双栏布局。设置面板可自定义用户名、头像和背景图。`,
              color: `#4c74d3`,
            },
          ];
        function d() {
          o.value > 0 && ((c.value = `right`), o.value--);
        }
        function m() {
          o.value < u.length - 1 ? ((c.value = `left`), o.value++) : a(`close`);
        }
        function g(e) {
          (c.value = e > o.value ? `left` : `right`), (o.value = e);
        }
        return (n, r) => (
          q(),
          f(
            `div`,
            {
              class: `guide-overlay`,
              onClick: (r[1] ||= v((e) => a(`close`), [`self`])),
            },
            [
              P(`div`, Mi, [
                P(`div`, Ni, [
                  h(
                    K,
                    { name: c.value === `left` ? `slide-left` : `slide-right` },
                    {
                      default: x(() => [
                        (q(),
                        f(`div`, { class: `guide-page`, key: o.value }, [
                          P(
                            `div`,
                            {
                              class: `guide-icon-wrap`,
                              style: S({ background: u[o.value].color + `18` }),
                            },
                            [
                              (q(),
                              e(
                                s(u[o.value].icon),
                                {
                                  size: 32,
                                  style: S({ color: u[o.value].color }),
                                },
                                null,
                                8,
                                [`style`]
                              )),
                            ],
                            4
                          ),
                          P(`div`, Pi, w(u[o.value].title), 1),
                          P(`div`, Fi, w(u[o.value].desc), 1),
                        ])),
                      ]),
                      _: 1,
                    },
                    8,
                    [`name`]
                  ),
                ]),
                P(`div`, Ii, [
                  (q(),
                  f(
                    i,
                    null,
                    t(u, (e, t) =>
                      P(
                        `span`,
                        {
                          key: t,
                          class: C([`guide-dot`, { active: t === o.value }]),
                          onClick: (e) => g(t),
                        },
                        null,
                        10,
                        Li
                      )
                    ),
                    64
                  )),
                ]),
                P(`div`, Ri, [
                  P(
                    `button`,
                    {
                      class: `guide-skip`,
                      onClick: (r[0] ||= (e) => a(`close`)),
                    },
                    `跳过`
                  ),
                  P(`div`, zi, [
                    P(
                      `button`,
                      {
                        class: `guide-nav-btn`,
                        disabled: o.value === 0,
                        onClick: d,
                      },
                      [h(l(R), { size: 18 })],
                      8,
                      Bi
                    ),
                    P(
                      `button`,
                      { class: `guide-nav-btn primary`, onClick: m },
                      [
                        o.value === u.length - 1
                          ? (q(), f(i, { key: 0 }, [p(`开始使用`)], 64))
                          : (q(), e(l(ae), { key: 1, size: 18 })),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-05c83a0b`]]
  ),
  Hi = { class: `app-bg` },
  Ui = [`src`],
  Wi = { key: 0, class: `loading-content` },
  Gi = { class: `progress-track` },
  Ki = { class: `progress-label` },
  qi = { key: 0, class: `content-reveal` },
  Ji = { class: `panel-frame glass` };
G(
  I(
    a({
      __name: `App`,
      setup(t) {
        let n = B([]),
          i = B(null),
          a = B(!1),
          o = B(!1);
        function s() {
          o.value = !0;
        }
        function c() {
          (o.value = !1), localStorage.setItem(`heartlib_guide_seen`, `1`);
        }
        let u = B(!1),
          p = B(`list`),
          _ = B(null),
          y = B(null),
          b = B(null),
          T = m(
            () =>
              !E.value &&
              (!!i.value || a.value || p.value === `form` || !!y.value)
          ),
          E = B(!1);
        function D() {
          E.value = window.innerWidth >= 900;
        }
        let O = B(null),
          k = B(!1),
          M = B(!1),
          F = B(null);
        function I(e) {
          E.value && O.value === `editor-form`
            ? ((F.value = e), (M.value = !0))
            : e();
        }
        function L() {
          b.value?.save(), (M.value = !1);
          let e = F.value;
          (F.value = null),
            setTimeout(() => {
              e?.();
            }, 50);
        }
        function R() {
          M.value = !1;
          let e = F.value;
          (F.value = null), e?.();
        }
        function z() {
          (M.value = !1), (F.value = null);
        }
        let V = B(0),
          H = B(0),
          U = m(() => Math.round(H.value * 100));
        function ee(e) {
          E.value
            ? ((i.value = e), (O.value = `chat`), (k.value = !1))
            : (i.value = e);
        }
        function te() {
          E.value ? Y() : ((i.value = null), (y.value = null));
        }
        function G() {
          (i.value = null), (y.value = null);
        }
        function J() {
          E.value && ((O.value = `settings`), (k.value = !1));
        }
        function Y() {
          (k.value = !0),
            setTimeout(() => {
              (O.value = null),
                (i.value = null),
                (_.value = null),
                (y.value = null),
                (k.value = !1);
            }, 400);
        }
        function X() {
          (u.value = !0),
            (p.value = `list`),
            (_.value = null),
            (y.value = null),
            E.value && ((O.value = null), (k.value = !1));
        }
        function Z() {
          (u.value = !1),
            (p.value = `list`),
            (_.value = null),
            (y.value = null),
            E.value && (O.value = null);
        }
        function re() {
          (_.value = null),
            E.value
              ? ((O.value = `editor-form`), (k.value = !1))
              : (p.value = `form`);
        }
        function ie(e) {
          (_.value = e),
            E.value
              ? ((O.value = `editor-form`), (k.value = !1))
              : (p.value = `form`);
        }
        function ae(e) {
          I(() => ie(e));
        }
        function oe(e) {
          y.value = e;
          let t = {
            char_id: e.id,
            char_name: e.title,
            scripts: [
              { seq: `01`, filename: ``, command_count: e.commands.length },
            ],
            signature: e.subtitle,
          };
          E.value
            ? ((i.value = t), (O.value = `editor-play`), (k.value = !1))
            : (i.value = t);
        }
        function se(e) {
          I(() => oe(e));
        }
        function ce() {
          (_.value = null), E.value ? Y() : (p.value = `list`);
        }
        function le() {
          (_.value = null), E.value ? Y() : (p.value = `list`);
        }
        function Q(e) {
          oe(e);
        }
        d(async () => {
          D(),
            window.addEventListener(`resize`, D),
            await ue(300),
            (V.value = 1);
          let e = 0,
            t = 0,
            r = 0,
            i = 0;
          function a() {
            let n = t + i,
              a = e + r;
            H.value = n > 0 ? a / n : 1;
          }
          let [, s] = await Promise.all([
            A((n, r) => {
              (e = n), (t = r), a();
            }),
            Qe((e, t) => {
              (r = e), (i = t), a();
            }),
          ]);
          (n.value = s),
            await ue(400),
            (V.value = 2),
            await ue(1100),
            (V.value = 3),
            await ue(600),
            (V.value = 4),
            localStorage.getItem(`heartlib_guide_seen`) ||
              (await ue(500), (o.value = !0));
        }),
          g(() => {
            window.removeEventListener(`resize`, D);
          });
        function ue(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        return (t, d) => (
          q(),
          f(
            `div`,
            {
              class: C([
                `app-root`,
                [`phase-${V.value}`, { desktop: E.value }],
              ]),
            },
            [
              P(`div`, Hi, [
                P(
                  `img`,
                  {
                    src: l(j)(
                      l(W).backgroundImage || l(`./assets/background.jpg`)
                    ),
                    class: `bg-custom-img`,
                  },
                  null,
                  8,
                  Ui
                ),
              ]),
              P(
                `div`,
                { class: C([`loading-layer`, { closing: V.value >= 2 }]) },
                [
                  h(
                    K,
                    { name: `text-fade` },
                    {
                      default: x(() => [
                        V.value >= 1
                          ? (q(),
                            f(`div`, Wi, [
                              (d[1] ||= P(
                                `div`,
                                { class: `loading-text` },
                                `LOADING`,
                                -1
                              )),
                              P(`div`, Gi, [
                                P(
                                  `div`,
                                  {
                                    class: `progress-fill`,
                                    style: S({ width: U.value + `%` }),
                                  },
                                  null,
                                  4
                                ),
                              ]),
                              P(`div`, Ki, w(U.value) + `%`, 1),
                            ]))
                          : N(``, !0),
                      ]),
                      _: 1,
                    }
                  ),
                ],
                2
              ),
              h(
                K,
                { name: `frame-enter` },
                {
                  default: x(() => [
                    V.value >= 2
                      ? (q(),
                        f(
                          `div`,
                          {
                            key: 0,
                            class: C([
                              `main-layout`,
                              { settled: V.value >= 3 },
                            ]),
                          },
                          [
                            P(
                              `div`,
                              {
                                class: C([
                                  `phone-wrap`,
                                  {
                                    "panel-open":
                                      E.value && O.value && !k.value,
                                  },
                                ]),
                              },
                              [
                                h(
                                  ne,
                                  { blurred: T.value },
                                  {
                                    default: x(() => [
                                      V.value >= 3
                                        ? (q(),
                                          f(`div`, qi, [
                                            E.value
                                              ? (q(),
                                                e(
                                                  K,
                                                  {
                                                    key: 1,
                                                    name: `panel-swap`,
                                                    mode: `out-in`,
                                                  },
                                                  {
                                                    default: x(() => [
                                                      u.value
                                                        ? (q(),
                                                          e(bn, {
                                                            key: `editor-list`,
                                                            onBack: Z,
                                                            onAddSession: re,
                                                            onEditSession: ae,
                                                            onPlaySession: se,
                                                          }))
                                                        : (q(),
                                                          e(
                                                            Je,
                                                            {
                                                              key: `contacts`,
                                                              characters:
                                                                n.value,
                                                              desktop: !0,
                                                              onSelect: ee,
                                                              onOpenSettings: J,
                                                              onOpenEditor: X,
                                                              onOpenGuide: s,
                                                            },
                                                            null,
                                                            8,
                                                            [`characters`]
                                                          )),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ))
                                              : (q(),
                                                e(
                                                  K,
                                                  {
                                                    key: 0,
                                                    name: `mobile-push`,
                                                    mode: `out-in`,
                                                  },
                                                  {
                                                    default: x(() => [
                                                      u.value &&
                                                      y.value &&
                                                      i.value
                                                        ? (q(),
                                                          e(
                                                            Gt,
                                                            {
                                                              key:
                                                                `editor-play-` +
                                                                y.value.id,
                                                              character:
                                                                i.value,
                                                              "custom-commands":
                                                                y.value
                                                                  .commands,
                                                              narrators:
                                                                y.value
                                                                  .narrators,
                                                              "session-avatar":
                                                                y.value.avatar,
                                                              onBack: G,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              `character`,
                                                              `custom-commands`,
                                                              `narrators`,
                                                              `session-avatar`,
                                                            ]
                                                          ))
                                                        : u.value &&
                                                          p.value === `form`
                                                        ? (q(),
                                                          e(
                                                            ji,
                                                            {
                                                              key: `editor-form`,
                                                              "editing-session":
                                                                _.value,
                                                              "character-index":
                                                                n.value,
                                                              onBack: ce,
                                                              onSaved: le,
                                                              onPlay: Q,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              `editing-session`,
                                                              `character-index`,
                                                            ]
                                                          ))
                                                        : u.value
                                                        ? (q(),
                                                          e(bn, {
                                                            key: `editor-list`,
                                                            onBack: Z,
                                                            onAddSession: re,
                                                            onEditSession: ae,
                                                            onPlaySession: se,
                                                          }))
                                                        : i.value
                                                        ? (q(),
                                                          e(
                                                            Gt,
                                                            {
                                                              key:
                                                                `chat-` +
                                                                i.value.char_id,
                                                              character:
                                                                i.value,
                                                              onBack: te,
                                                            },
                                                            null,
                                                            8,
                                                            [`character`]
                                                          ))
                                                        : (q(),
                                                          e(
                                                            Je,
                                                            {
                                                              key: `contacts`,
                                                              characters:
                                                                n.value,
                                                              onSelect: ee,
                                                              onSettingsToggle:
                                                                (d[0] ||= (e) =>
                                                                  (a.value =
                                                                    e)),
                                                              onOpenEditor: X,
                                                              onOpenGuide: s,
                                                            },
                                                            null,
                                                            8,
                                                            [`characters`]
                                                          )),
                                                    ]),
                                                    _: 1,
                                                  }
                                                )),
                                          ]))
                                        : N(``, !0),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  [`blurred`]
                                ),
                                E.value && O.value
                                  ? (q(),
                                    f(
                                      `div`,
                                      {
                                        key: 0,
                                        class: C([
                                          `side-panel`,
                                          { leaving: k.value },
                                        ]),
                                      },
                                      [
                                        P(`div`, Ji, [
                                          h(
                                            K,
                                            {
                                              name: `panel-content`,
                                              mode: `out-in`,
                                            },
                                            {
                                              default: x(() => [
                                                O.value === `chat` && i.value
                                                  ? (q(),
                                                    e(
                                                      Gt,
                                                      {
                                                        key:
                                                          `chat-` +
                                                          i.value.char_id,
                                                        character: i.value,
                                                        onBack: Y,
                                                      },
                                                      null,
                                                      8,
                                                      [`character`]
                                                    ))
                                                  : O.value === `editor-play` &&
                                                    y.value &&
                                                    i.value
                                                  ? (q(),
                                                    e(
                                                      Gt,
                                                      {
                                                        key:
                                                          `editor-play-` +
                                                          y.value.id,
                                                        character: i.value,
                                                        "custom-commands":
                                                          y.value.commands,
                                                        narrators:
                                                          y.value.narrators,
                                                        "session-avatar":
                                                          y.value.avatar,
                                                        onBack: Y,
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        `character`,
                                                        `custom-commands`,
                                                        `narrators`,
                                                        `session-avatar`,
                                                      ]
                                                    ))
                                                  : O.value === `editor-form`
                                                  ? (q(),
                                                    e(
                                                      ji,
                                                      {
                                                        key: `editor-form`,
                                                        ref_key: `editorFormRef`,
                                                        ref: b,
                                                        "editing-session":
                                                          _.value,
                                                        "character-index":
                                                          n.value,
                                                        onBack: ce,
                                                        onSaved: le,
                                                        onPlay: Q,
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        `editing-session`,
                                                        `character-index`,
                                                      ]
                                                    ))
                                                  : O.value === `settings`
                                                  ? (q(),
                                                    e(Pe, {
                                                      key: `settings`,
                                                      onBack: Y,
                                                    }))
                                                  : N(``, !0),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                      ],
                                      2
                                    ))
                                  : N(``, !0),
                              ],
                              2
                            ),
                          ],
                          2
                        ))
                      : N(``, !0),
                  ]),
                  _: 1,
                }
              ),
              (q(),
              e(r, { to: `body` }, [
                h(
                  K,
                  { name: `unsaved-modal` },
                  {
                    default: x(() => [
                      M.value
                        ? (q(),
                          f(
                            `div`,
                            {
                              key: 0,
                              class: `unsaved-overlay`,
                              onClick: v(z, [`self`]),
                            },
                            [
                              P(`div`, { class: `unsaved-box` }, [
                                (d[2] ||= P(
                                  `div`,
                                  { class: `unsaved-title` },
                                  `未保存的更改`,
                                  -1
                                )),
                                (d[3] ||= P(
                                  `div`,
                                  { class: `unsaved-text` },
                                  `当前编辑内容尚未保存，是否保存？`,
                                  -1
                                )),
                                P(`div`, { class: `unsaved-actions` }, [
                                  P(
                                    `button`,
                                    {
                                      class: `unsaved-btn unsaved-cancel`,
                                      onClick: z,
                                    },
                                    `取消`
                                  ),
                                  P(
                                    `button`,
                                    {
                                      class: `unsaved-btn unsaved-discard`,
                                      onClick: R,
                                    },
                                    `不保存`
                                  ),
                                  P(
                                    `button`,
                                    {
                                      class: `unsaved-btn unsaved-save`,
                                      onClick: L,
                                    },
                                    `保存`
                                  ),
                                ]),
                              ]),
                            ]
                          ))
                        : N(``, !0),
                    ]),
                    _: 1,
                  }
                ),
              ])),
              (q(),
              e(r, { to: `body` }, [
                h(
                  K,
                  { name: `modal-fade` },
                  {
                    default: x(() => [
                      o.value
                        ? (q(), e(Vi, { key: 0, onClose: c }))
                        : N(``, !0),
                    ]),
                    _: 1,
                  }
                ),
              ])),
            ],
            2
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-e7bb64fe`]]
  )
).mount(`#app`);
