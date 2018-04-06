
/*
Code generated with Faust version 2.5.23
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev_bypass2() {
	return "{\"name\":\"zitaRev\",\"filename\":\"zitaRev_bypass2\",\"version\":\"2.5.23\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959064\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filename\":\"zitaRev_bypass2\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"zitaRev\",\"items\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/zitaRev/Zita_Rev1/Input/In_Delay\",\"index\":\"262268\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"65628\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"65620\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"65608\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/zitaRev/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"65616\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"65592\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"65596\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"959020\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/zitaRev/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"959024\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/zitaRev/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"65576\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/zitaRev/Zita_Rev1/Output/Level\",\"index\":\"24\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/zitaRev/bypass\",\"index\":\"12\"}]}]}";
}
function getBase64CodezitaRev_bypass2() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX0BfWABfwF/YAF/AX9gAn9/AX1gAX8Bf2ACf38AYAF/AGACf38AYAJ/fwBgAX8AYAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfZXhwZgADA2VudgVfcG93ZgAPA2VudgVfdGFuZgARA4+AgIAADgABBAUGBwgJCgsMDQ4QBYeAgIAAAQCggICAAAe6gYCAAAwHY29tcHV0ZQAFDGdldE51bUlucHV0cwAGDWdldE51bU91dHB1dHMABw1nZXRQYXJhbVZhbHVlAAgNZ2V0U2FtcGxlUmF0ZQAJBGluaXQACg1pbnN0YW5jZUNsZWFyAAsRaW5zdGFuY2VDb25zdGFudHMADAxpbnN0YW5jZUluaXQADRppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAODXNldFBhcmFtVmFsdWUAEQZtZW1vcnkCAArZ44CAAA6CgICAAAAL/b+AgAACBn+6AX1BACEEQQAhBUEAIQZBACEHQwAAAAAhCkMAAAAAIQtDAAAAACEMQwAAAAAhDUMAAAAAIQ5DAAAAACEPQwAAAAAhEEMAAAAAIRFDAAAAACESQwAAAAAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRdDAAAAACEYQwAAAAAhGUMAAAAAIRpDAAAAACEbQwAAAAAhHEMAAAAAIR1DAAAAACEeQwAAAAAhH0MAAAAAISBBACEIQwAAAAAhIUMAAAAAISJDAAAAACEjQwAAAAAhJEMAAAAAISVDAAAAACEmQwAAAAAhJ0MAAAAAIShDAAAAACEpQwAAAAAhKkMAAAAAIStDAAAAACEsQwAAAAAhLUMAAAAAIS5DAAAAACEvQwAAAAAhMEMAAAAAITFDAAAAACEyQwAAAAAhM0MAAAAAITRDAAAAACE1QwAAAAAhNkMAAAAAITdDAAAAACE4QwAAAAAhOUMAAAAAITpDAAAAACE7QwAAAAAhPEMAAAAAIT1DAAAAACE+QwAAAAAhP0MAAAAAIUBDAAAAACFBQwAAAAAhQkMAAAAAIUNDAAAAACFEQwAAAAAhRUMAAAAAIUZDAAAAACFHQwAAAAAhSEMAAAAAIUlDAAAAACFKQwAAAAAhS0MAAAAAIUxDAAAAACFNQwAAAAAhTkMAAAAAIU9DAAAAACFQQwAAAAAhUUMAAAAAIVJDAAAAACFTQwAAAAAhVEMAAAAAIVVDAAAAACFWQwAAAAAhV0MAAAAAIVhDAAAAACFZQwAAAAAhWkMAAAAAIVtDAAAAACFcQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQwAAAAAhY0MAAAAAIWRDAAAAACFlQQAhCUMAAAAAIWZDAAAAACFnQwAAAAAhaEMAAAAAIWlDAAAAACFqQwAAAAAha0MAAAAAIWxDAAAAACFtQwAAAAAhbkMAAAAAIW9DAAAAACFwQwAAAAAhcUMAAAAAIXJDAAAAACFzQwAAAAAhdEMAAAAAIXVDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUMAAAAAIYIBQwAAAAAhgwFDAAAAACGEAUMAAAAAIYUBQwAAAAAhhgFDAAAAACGHAUMAAAAAIYgBQwAAAAAhiQFDAAAAACGKAUMAAAAAIYsBQwAAAAAhjAFDAAAAACGNAUMAAAAAIY4BQwAAAAAhjwFDAAAAACGQAUMAAAAAIZEBQwAAAAAhkgFDAAAAACGTAUMAAAAAIZQBQwAAAAAhlQFDAAAAACGWAUMAAAAAIZcBQwAAAAAhmAFDAAAAACGZAUMAAAAAIZoBQwAAAAAhmwFDAAAAACGcAUMAAAAAIZ0BQwAAAAAhngFDAAAAACGfAUMAAAAAIaABQwAAAAAhoQFDAAAAACGiAUMAAAAAIaMBQwAAAAAhpAFDAAAAACGlAUMAAAAAIaYBQwAAAAAhpwFDAAAAACGoAUMAAAAAIakBQwAAAAAhqgFDAAAAACGrAUMAAAAAIawBQwAAAAAhrQFDAAAAACGuAUMAAAAAIa8BQwAAAAAhsAFDAAAAACGxAUMAAAAAIbIBQwAAAAAhswFDAAAAACG0AUMAAAAAIbUBQwAAAAAhtgFDAAAAACG3AUMAAAAAIbgBQwAAAAAhuQFDAAAAACG6AUMAAAAAIbsBQwAAAAAhvAFDAAAAACG9AUMAAAAAIb4BQwAAAAAhvwFDAAAAACHAAUMAAAAAIcEBQwAAAAAhwgFDAAAAACHDASACQQBqKAIAIQQgAkEEaigCACEFIANBAGooAgAhBiADQQRqKAIAIQdBACoCDCEKQ28SgzpDAAAgQUPNzEw9QQAqAhiUEAKUIQtDbxKDOkEAKgKogASUIQxBACoCuIAEIQ1DAAAgQUPNzEw9QQAqAryABJQQAiEOQQAqArSABCANQwAAAAAgDpeRlZQhD0MAAIA/IA+TIA9DAACAP5KVIRBBACoCyIAEIRFBACoCxIAEIBGVEAEhEiASQwAAAEAQAiETQQAqAsyABEEAKgLQgASUEAAhFEMAAIA/IBMgFJSTIRVDAACAPyATkyEWIBUgFpUhF0MAAAAAIBVDAAAAQBACIBZDAAAAQBAClUMAAIC/kpeRIRggFyAYkyEZIBIgGEMAAIA/IBeTkpQhGkEAKgLUgAQhG0EAKgLEgAQgG5UQASASlUMAAIC/kiEcQwAAgD9BACoC2IAEQQAqAtyABJQQA5UhHSAdQwAAgD+SIR5DAAAAAEMAAIA/IB2TIB6VkyEfQwAAgD8gHpUhIEMAAABGQwAAAABBACoC+IAQQQAqAvyAEJSXlqghCEEAKgKQwRAgEZUQASEhICFDAAAAQBACISJDAACAPyAUICKUkyEjQwAAgD8gIpMhJCAjICSVISVDAAAAACAjQwAAAEAQAiAkQwAAAEAQApVDAACAv5KXkSEmICUgJpMhJyAhICZDAACAPyAlk5KUIShBACoCkMEQIBuVEAEgIZVDAACAv5IhKUEAKgK8wRkgEZUQASEqICpDAAAAQBACIStDAACAPyAUICuUkyEsQwAAgD8gK5MhLSAsIC2VIS5DAAAAACAsQwAAAEAQAiAtQwAAAEAQApVDAACAv5KXkSEvIC4gL5MhMCAqIC9DAACAPyAuk5KUITFBACoCvMEZIBuVEAEgKpVDAACAv5IhMkEAKgLowR4gEZUQASEzIDNDAAAAQBACITRDAACAPyA0IBSUkyE1QwAAgD8gNJMhNiA1IDaVITdDAAAAACA1QwAAAEAQAiA2QwAAAEAQApVDAACAv5KXkSE4IDcgOJMhOSAzIDhDAACAPyA3k5KUITpBACoC6MEeIBuVEAEgM5VDAACAv5IhO0EAKgKUwicgEZUQASE8IDxDAAAAQBACIT1DAACAPyAUID2UkyE+QwAAgD8gPZMhPyA+ID+VIUBDAAAAACA+QwAAAEAQAiA/QwAAAEAQApVDAACAv5KXkSFBIEAgQZMhQiA8IEFDAACAPyBAk5KUIUNBACoClMInIBuVEAEgPJVDAACAv5IhREEAKgLAgiwgEZUQASFFIEVDAAAAQBACIUZDAACAPyAUIEaUkyFHQwAAgD8gRpMhSCBHIEiVIUlDAAAAACBHQwAAAEAQAiBIQwAAAEAQApVDAACAv5KXkSFKIEkgSpMhSyBFIEpDAACAPyBJk5KUIUxBACoCwIIsIBuVEAEgRZVDAACAv5IhTUEAKgLsgjEgEZUQASFOIE5DAAAAQBACIU9DAACAPyAUIE+UkyFQQwAAgD8gT5MhUSBQIFGVIVJDAAAAACBQQwAAAEAQAiBRQwAAAEAQApVDAACAv5KXkSFTIFIgU5MhVCBOIFNDAACAPyBSk5KUIVVBACoC7IIxIBuVEAEgTpVDAACAv5IhVkEAKgKYwzUgEZUQASFXIFdDAAAAQBACIVhDAACAPyAUIFiUkyFZQwAAgD8gWJMhWiBZIFqVIVtDAAAAACBZQwAAAEAQAiBaQwAAAEAQApVDAACAv5KXkSFcIFsgXJMhXSBXIFxDAACAPyBbk5KUIV5BACoCmMM1IBuVEAEgV5VDAACAv5IhX0MAAAAAQQAqArSABCANlBAAkyAQQwAAgD+SlCFgQQAqAqzEOiFhQwAAIEFDzcxMPUEAKgKwxDqUEAIhYkEAKgK0gAQgYUMAAAAAIGKXkZWUIWNDAACAPyBjkyBjQwAAgD+SlSFkQwAAAABBACoCtIAEIGGUEACTIGRDAACAP5KUIWVBACEJA0ACQCAEIAlqKgIAIWZBACoCCEEAKgIUkiFnQQAqAhRBACoCCJMhaCBnIGggCiBoIApeGyBnIApdGyFpQQAgaUMAAAAAIGm8QYCAgPwHcRs4AhAgC0N3vn8/QQAqAiCUkiFqQQAgakMAAAAAIGq8QYCAgPwHcRs4AhxDAACAP0EAKgIQkyFrQQAqAhwga5QhbCBmIGuUIW1BKEEAKAIkQf//AHFBAnRqIG04AgAgDEN3vn8/QQAqArCABJSSIW5BACBuQwAAAAAgbrxBgICA/AdxGzgCrIAEQQAqAqyABEMAAIA/kiFvQwAAgD9DAAAAPyBvlJMhcCAfQQAqAuSABJQgIEEAKgKYxDpBACoCnMQ6kpSSIXFBACBxQwAAAAAgcbxBgICA/AdxGzgC4IAEIBlBACoC7IAElCAaQQAqApjEOiAcQQAqAuCABJSSlJIhckEAIHJDAAAAACByvEGAgID8B3EbOALogARB8IAEQQAoAiRB//8BcUECdGpD8wS1PkEAKgLogASUQwjlPB6SOAIAIAUgCWoqAgAhcyBzIGuUIXRB+IAMQQAoAiRB//8AcUECdGogdDgCAEOamZk+QfiADEEAKAIkIAhrQf//AHFBAnRqKgIAlCF1Q5qZGT9BACoCiMEQlEHwgARBACgCJEEAKAL0gAxrQf//AXFBAnRqKgIAkiB1kyF2QYCBEEEAKAIkQf8PcUECdGogdjgCAEGAgRBBACgCJEEAKAKAwRBrQf8PcUECdGoqAgAhd0EAIHdDAAAAACB3vEGAgID8B3EbOAKEwRBDAAAAAEOamRk/IHaUkyF4IHhDAAAAACB4vEGAgID8B3EbIXkgH0EAKgKYwRCUICBBACoC6MM6QQAqAuzDOpKUkiF6QQAgekMAAAAAIHq8QYCAgPwHcRs4ApTBECAnQQAqAqDBEJQgKEEAKgLowzogKUEAKgKUwRCUkpSSIXtBACB7QwAAAAAge7xBgICA/AdxGzgCnMEQQaTBEEEAKAIkQf//AXFBAnRqQ/MEtT5BACoCnMEQlEMI5TwekjgCAEOamRk/QQAqArTBGZRBpMEQQQAoAiRBACgCqMEYa0H//wFxQQJ0aioCAJIgdZMhfEGswRhBACgCJEH/H3FBAnRqIHw4AgBBrMEYQQAoAiRBACgCrMEZa0H/H3FBAnRqKgIAIX1BACB9QwAAAAAgfbxBgICA/AdxGzgCsMEZQwAAAABDmpkZPyB8lJMhfiB+QwAAAAAgfrxBgICA/AdxGyF/IB9BACoCxMEZlCAgQQAqAoDEOkEAKgKExDqSlJIhgAFBACCAAUMAAAAAIIABvEGAgID8B3EbOALAwRkgMEEAKgLMwRmUIDFBACoCgMQ6IDJBACoCwMEZlJKUkiGBAUEAIIEBQwAAAAAggQG8QYCAgPwHcRs4AsjBGUHQwRlBACgCJEH//wBxQQJ0akPzBLU+QQAqAsjBGZRDCOU8HpI4AgBB0MEZQQAoAiRBACgC1MEda0H//wBxQQJ0aioCACB1Q5qZGT9BACoC4MEelJKSIYIBQdjBHUEAKAIkQf8fcUECdGogggE4AgBB2MEdQQAoAiRBACgC2MEea0H/H3FBAnRqKgIAIYMBQQAggwFDAAAAACCDAbxBgICA/AdxGzgC3MEeQwAAAABDmpkZPyCCAZSTIYQBIIQBQwAAAAAghAG8QYCAgPwHcRshhQEgH0EAKgLwwR6UICBBACoC0MM6QQAqAtTDOpKUkiGGAUEAIIYBQwAAAAAghgG8QYCAgPwHcRs4AuzBHiA5QQAqAvjBHpQgOkEAKgLQwzogO0EAKgLswR6UkpSSIYcBQQAghwFDAAAAACCHAbxBgICA/AdxGzgC9MEeQfzBHkEAKAIkQf//AXFBAnRqQ/MEtT5BACoC9MEelEMI5TwekjgCACB1Q5qZGT9BACoCjMInlEH8wR5BACgCJEEAKAKAwiZrQf//AXFBAnRqKgIAkpIhiAFBhMImQQAoAiRB/x9xQQJ0aiCIATgCAEGEwiZBACgCJEEAKAKEwidrQf8fcUECdGoqAgAhiQFBACCJAUMAAAAAIIkBvEGAgID8B3EbOAKIwidDAAAAAEOamRk/IIgBlJMhigEgigFDAAAAACCKAbxBgICA/AdxGyGLASAfQQAqApzCJ5QgIEEAKgKMxDpBACoCkMQ6kpSSIYwBQQAgjAFDAAAAACCMAbxBgICA/AdxGzgCmMInIEJBACoCpMInlCBDQQAqAozEOiBEQQAqApjCJ5SSlJIhjQFBACCNAUMAAAAAII0BvEGAgID8B3EbOAKgwidBqMInQQAoAiRB//8AcUECdGpD8wS1PkEAKgKgwieUQwjlPB6SOAIAQ5qZmT5BKEEAKAIkIAhrQf//AHFBAnRqKgIAlCGOAUGowidBACgCJEEAKAKswitrQf//AHFBAnRqKgIAII4BQ5qZGT9BACoCuIIslJKTIY8BQbDCK0EAKAIkQf8PcUECdGogjwE4AgBBsMIrQQAoAiRBACgCsIIsa0H/D3FBAnRqKgIAIZABQQAgkAFDAAAAACCQAbxBgICA/AdxGzgCtIIsQ5qZGT8gjwGUIZEBIJEBQwAAAAAgkQG8QYCAgPwHcRshkgEgH0EAKgLIgiyUICBBACoC9MM6QQAqAvjDOpKUkiGTAUEAIJMBQwAAAAAgkwG8QYCAgPwHcRs4AsSCLCBLQQAqAtCCLJQgTEEAKgL0wzogTUEAKgLEgiyUkpSSIZQBQQAglAFDAAAAACCUAbxBgICA/AdxGzgCzIIsQdSCLEEAKAIkQf//AHFBAnRqQ/MEtT5BACoCzIIslEMI5TwekjgCACCOAUHUgixBACgCJEEAKALYgjBrQf//AHFBAnRqKgIAkkOamRk/QQAqAuSCMZSTIZUBQdyCMEEAKAIkQf8fcUECdGoglQE4AgBB3IIwQQAoAiRBACgC3IIxa0H/H3FBAnRqKgIAIZYBQQAglgFDAAAAACCWAbxBgICA/AdxGzgC4IIxQ5qZGT8glQGUIZcBIJcBQwAAAAAglwG8QYCAgPwHcRshmAEgH0EAKgL0gjGUICBBACoCxMM6QQAqAsjDOpKUkiGZAUEAIJkBQwAAAAAgmQG8QYCAgPwHcRs4AvCCMSBUQQAqAvyCMZQgVUEAKgLEwzogVkEAKgLwgjGUkpSSIZoBQQAgmgFDAAAAACCaAbxBgICA/AdxGzgC+IIxQYCDMUEAKAIkQf//AHFBAnRqQ/MEtT5BACoC+IIxlEMI5TwekjgCAEGAgzFBACgCJEEAKAKEgzVrQf//AHFBAnRqKgIAII4BkkOamRk/QQAqApDDNZSTIZsBQYiDNUEAKAIkQf8PcUECdGogmwE4AgBBiIM1QQAoAiRBACgCiMM1a0H/D3FBAnRqKgIAIZwBQQAgnAFDAAAAACCcAbxBgICA/AdxGzgCjMM1Q5qZGT8gmwGUIZ0BIJ0BQwAAAAAgnQG8QYCAgPwHcRshngEgH0EAKgKgwzWUICBBACoC3MM6QQAqAuDDOpKUkiGfAUEAIJ8BQwAAAAAgnwG8QYCAgPwHcRs4ApzDNSBdQQAqAqjDNZQgXkEAKgLcwzogX0EAKgKcwzWUkpSSIaABQQAgoAFDAAAAACCgAbxBgICA/AdxGzgCpMM1QazDNUEAKAIkQf//AHFBAnRqQ/MEtT5BACoCpMM1lEMI5TwekjgCAEGswzVBACgCJEEAKAKwwzlrQf//AHFBAnRqKgIAII4BQ5qZGT9BACoCvMM6lJKTIaEBQbTDOUEAKAIkQf8fcUECdGogoQE4AgBBtMM5QQAoAiRBACgCtMM6a0H/H3FBAnRqKgIAIaIBQQAgogFDAAAAACCiAbxBgICA/AdxGzgCuMM6Q5qZGT8goQGUIaMBIKMBQwAAAAAgowG8QYCAgPwHcRshpAEgpAEgkgGSIaUBIIUBIIsBIKUBkpIhpgFBACoCiMEQQQAqArTBGUEAKgLgwR5BACoCjMInQQAqAriCLCCYASCeAUEAKgK8wzpBACoC5IIxQQAqApDDNSB5IH8gpgGSkpKSkpKSkpKSkpIhpwFBACCnAUMAAAAAIKcBvEGAgID8B3EbOALAwzogiwEghQGSIagBQQAqAriCLCCYASCeAUEAKgK8wzpBACoC5IIxQQAqApDDNSClAZKSkpKSkkEAKgKIwRBBACoCtMEZQQAqAuDBHkEAKgKMwicgeSB/IKgBkpKSkpKSkyGpAUEAIKkBQwAAAAAgqQG8QYCAgPwHcRs4AszDOkEAKgLgwR5BACoCjMInIJgBIJ4BQQAqAuSCMUEAKgKQwzUgqAGSkpKSkpJBACoCiMEQQQAqArTBGUEAKgK4gixBACoCvMM6IHkgfyClAZKSkpKSkpMhqgFBACCqAUMAAAAAIKoBvEGAgID8B3EbOALYwzpBACoCiMEQQQAqArTBGSCYASCeAUEAKgLkgjFBACoCkMM1IH8geZKSkpKSkpJBACoC4MEeQQAqAozCJ0EAKgK4gixBACoCvMM6IKYBkpKSkpMhqwFBACCrAUMAAAAAIKsBvEGAgID8B3EbOALkwzogpAEgiwGSIawBIJIBIIUBkiGtAUEAKgK0wRlBACoCjMInIJ4BQQAqArzDOkEAKgKQwzUgfyCsAZKSkpKSkkEAKgKIwRBBACoC4MEeQQAqAriCLCCYAUEAKgLkgjEgeSCtAZKSkpKSkpMhrgFBACCuAUMAAAAAIK4BvEGAgID8B3EbOALwwzogpAEghQGSIa8BIJIBIIsBkiGwAUEAKgKIwRBBACoC4MEeIJ4BQQAqArzDOkEAKgKQwzUgeSCvAZKSkpKSkkEAKgK0wRlBACoCjMInQQAqAriCLCCYAUEAKgLkgjEgfyCwAZKSkpKSkpMhsQFBACCxAUMAAAAAILEBvEGAgID8B3EbOAL8wzpBACoCiMEQQQAqAozCJ0EAKgK4giwgngFBACoCkMM1IHkgsAGSkpKSkpJBACoCtMEZQQAqAuDBHiCYAUEAKgK8wzpBACoC5IIxIH8grwGSkpKSkpKTIbIBQQAgsgFDAAAAACCyAbxBgICA/AdxGzgCiMQ6QQAqArTBGUEAKgLgwR5BACoCuIIsIJ4BQQAqApDDNSB/IK0BkpKSkpKSQQAqAojBEEEAKgKMwicgmAFBACoCvMM6QQAqAuSCMSB5IKwBkpKSkpKSkyGzAUEAILMBQwAAAAAgswG8QYCAgPwHcRs4ApTEOkOkcL0+QQAqAszDOkEAKgLYwzqSlCG0ASBgQQAqAqTEOpQhtQEgtAEgtQEgEEEAKgKoxDqUkpMhtgFBACC2AUMAAAAAILYBvEGAgID8B3EbOAKgxDogEEEAKgKgxDqUIbcBQwAAAD8gtwFBACoCqMQ6ILQBILUBkpKSIA4gtwEgtQFBACoCqMQ6kpIgtAGTlJKUIbgBIGVBACoCuMQ6lCG5ASC4ASC5ASBkQQAqArzEOpSSkyG6AUEAILoBQwAAAAAgugG8QYCAgPwHcRs4ArTEOiBkQQAqArTEOpQhuwEgBiAJaiBmQQAqAhCUQwAAAD8gbCBtIG+UIHAguAEguQGSQQAqArzEOpIguwGSIGIguwEguQFBACoCvMQ6kpIguAGTlJKUkpSUkjgCAEOkcL0+QQAqAszDOkEAKgLYwzqTlCG8ASBgQQAqAsTEOpQhvQEgvAEgvQEgEEEAKgLIxDqUkpMhvgFBACC+AUMAAAAAIL4BvEGAgID8B3EbOALAxDogEEEAKgLAxDqUIb8BQwAAAD8gvwFBACoCyMQ6ILwBIL0BkpKSIA4gvwEgvQFBACoCyMQ6kpIgvAGTlJKUIcABIGVBACoC0MQ6lCHBASDAASDBASBkQQAqAtTEOpSSkyHCAUEAIMIBQwAAAAAgwgG8QYCAgPwHcRs4AszEOiBkQQAqAszEOpQhwwEgByAJaiBzQQAqAhCUQwAAAD8gbCB0IG+UIHAgwwFBACoC1MQ6IMABIMEBkpKSIGIgwwEgwQFBACoC1MQ6kpIgwAGTlJKUkpSUkjgCAEEAQQAqAhA4AhRBAEEAKgIcOAIgQQBBACgCJEEBajYCJEEAQQAqAqyABDgCsIAEQQBBACoC4IAEOALkgARBAEEAKgLogAQ4AuyABEEAQQAqAoTBEDgCiMEQQQBBACoClMEQOAKYwRBBAEEAKgKcwRA4AqDBEEEAQQAqArDBGTgCtMEZQQBBACoCwMEZOALEwRlBAEEAKgLIwRk4AszBGUEAQQAqAtzBHjgC4MEeQQBBACoC7MEeOALwwR5BAEEAKgL0wR44AvjBHkEAQQAqAojCJzgCjMInQQBBACoCmMInOAKcwidBAEEAKgKgwic4AqTCJ0EAQQAqArSCLDgCuIIsQQBBACoCxIIsOALIgixBAEEAKgLMgiw4AtCCLEEAQQAqAuCCMTgC5IIxQQBBACoC8IIxOAL0gjFBAEEAKgL4gjE4AvyCMUEAQQAqAozDNTgCkMM1QQBBACoCnMM1OAKgwzVBAEEAKgKkwzU4AqjDNUEAQQAqArjDOjgCvMM6QQBBACoCxMM6OALIwzpBAEEAKgLAwzo4AsTDOkEAQQAqAtDDOjgC1MM6QQBBACoCzMM6OALQwzpBAEEAKgLcwzo4AuDDOkEAQQAqAtjDOjgC3MM6QQBBACoC6MM6OALswzpBAEEAKgLkwzo4AujDOkEAQQAqAvTDOjgC+MM6QQBBACoC8MM6OAL0wzpBAEEAKgKAxDo4AoTEOkEAQQAqAvzDOjgCgMQ6QQBBACoCjMQ6OAKQxDpBAEEAKgKIxDo4AozEOkEAQQAqApjEOjgCnMQ6QQBBACoClMQ6OAKYxDpBAEEAKgKkxDo4AqjEOkEAQQAqAqDEOjgCpMQ6QQBBACoCuMQ6OAK8xDpBAEEAKgK0xDo4ArjEOkEAQQAqAsTEOjgCyMQ6QQBBACoCwMQ6OALExDpBAEEAKgLQxDo4AtTEOkEAQQAqAszEOjgC0MQ6IAlBBGohCSAJQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEECDwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4iAgIAAAEEAKAIADwuOgICAAAAgACABEAQgACABEA0L/JaAgAABOX9BACEBQQAhAkEAIQNBACEEQQAhBUEAIQZBACEHQQAhCEEAIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEAIRJBACETQQAhFEEAIRVBACEWQQAhF0EAIRhBACEZQQAhGkEAIRtBACEcQQAhHUEAIR5BACEfQQAhIEEAISFBACEiQQAhI0EAISRBACElQQAhJkEAISdBACEoQQAhKUEAISpBACErQQAhLEEAIS1BACEuQQAhL0EAITBBACExQQAhMkEAITNBACE0QQAhNUEAITZBACE3QQAhOEEAITlBACEBA0ACQEEQIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEEcIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBAkgEQAwCDAELCwtBAEEANgIkQQAhAwNAAkBBKCADQQJ0akMAAAAAOAIAIANBAWohAyADQYCAAUgEQAwCDAELCwtBACEEA0ACQEGsgAQgBEECdGpDAAAAADgCACAEQQFqIQQgBEECSARADAIMAQsLC0EAIQUDQAJAQeCABCAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB6IAEIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHwgAQgB0ECdGpDAAAAADgCACAHQQFqIQcgB0GAgAJIBEAMAgwBCwsLQQAhCANAAkBB+IAMIAhBAnRqQwAAAAA4AgAgCEEBaiEIIAhBgIABSARADAIMAQsLC0EAIQkDQAJAQYCBECAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQYAQSARADAIMAQsLC0EAIQoDQAJAQYTBECAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBlMEQIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBAkgEQAwCDAELCwtBACEMA0ACQEGcwRAgDEECdGpDAAAAADgCACAMQQFqIQwgDEECSARADAIMAQsLC0EAIQ0DQAJAQaTBECANQQJ0akMAAAAAOAIAIA1BAWohDSANQYCAAkgEQAwCDAELCwtBACEOA0ACQEGswRggDkECdGpDAAAAADgCACAOQQFqIQ4gDkGAIEgEQAwCDAELCwtBACEPA0ACQEGwwRkgD0ECdGpDAAAAADgCACAPQQFqIQ8gD0ECSARADAIMAQsLC0EAIRADQAJAQcDBGSAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBByMEZIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEHQwRkgEkECdGpDAAAAADgCACASQQFqIRIgEkGAgAFIBEAMAgwBCwsLQQAhEwNAAkBB2MEdIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBgCBIBEAMAgwBCwsLQQAhFANAAkBB3MEeIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBAkgEQAwCDAELCwtBACEVA0ACQEHswR4gFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQfTBHiAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQQJIBEAMAgwBCwsLQQAhFwNAAkBB/MEeIBdBAnRqQwAAAAA4AgAgF0EBaiEXIBdBgIACSARADAIMAQsLC0EAIRgDQAJAQYTCJiAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQYAgSARADAIMAQsLC0EAIRkDQAJAQYjCJyAZQQJ0akMAAAAAOAIAIBlBAWohGSAZQQJIBEAMAgwBCwsLQQAhGgNAAkBBmMInIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBAkgEQAwCDAELCwtBACEbA0ACQEGgwicgG0ECdGpDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAQajCJyAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQYCAAUgEQAwCDAELCwtBACEdA0ACQEGwwisgHUECdGpDAAAAADgCACAdQQFqIR0gHUGAEEgEQAwCDAELCwtBACEeA0ACQEG0giwgHkECdGpDAAAAADgCACAeQQFqIR4gHkECSARADAIMAQsLC0EAIR8DQAJAQcSCLCAfQQJ0akMAAAAAOAIAIB9BAWohHyAfQQJIBEAMAgwBCwsLQQAhIANAAkBBzIIsICBBAnRqQwAAAAA4AgAgIEEBaiEgICBBAkgEQAwCDAELCwtBACEhA0ACQEHUgiwgIUECdGpDAAAAADgCACAhQQFqISEgIUGAgAFIBEAMAgwBCwsLQQAhIgNAAkBB3IIwICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBgCBIBEAMAgwBCwsLQQAhIwNAAkBB4IIxICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBAkgEQAwCDAELCwtBACEkA0ACQEHwgjEgJEECdGpDAAAAADgCACAkQQFqISQgJEECSARADAIMAQsLC0EAISUDQAJAQfiCMSAlQQJ0akMAAAAAOAIAICVBAWohJSAlQQJIBEAMAgwBCwsLQQAhJgNAAkBBgIMxICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBgIABSARADAIMAQsLC0EAIScDQAJAQYiDNSAnQQJ0akMAAAAAOAIAICdBAWohJyAnQYAQSARADAIMAQsLC0EAISgDQAJAQYzDNSAoQQJ0akMAAAAAOAIAIChBAWohKCAoQQJIBEAMAgwBCwsLQQAhKQNAAkBBnMM1IClBAnRqQwAAAAA4AgAgKUEBaiEpIClBAkgEQAwCDAELCwtBACEqA0ACQEGkwzUgKkECdGpDAAAAADgCACAqQQFqISogKkECSARADAIMAQsLC0EAISsDQAJAQazDNSArQQJ0akMAAAAAOAIAICtBAWohKyArQYCAAUgEQAwCDAELCwtBACEsA0ACQEG0wzkgLEECdGpDAAAAADgCACAsQQFqISwgLEGAIEgEQAwCDAELCwtBACEtA0ACQEG4wzogLUECdGpDAAAAADgCACAtQQFqIS0gLUECSARADAIMAQsLC0EAIS4DQAJAQcDDOiAuQQJ0akMAAAAAOAIAIC5BAWohLiAuQQNIBEAMAgwBCwsLQQAhLwNAAkBBzMM6IC9BAnRqQwAAAAA4AgAgL0EBaiEvIC9BA0gEQAwCDAELCwtBACEwA0ACQEHYwzogMEECdGpDAAAAADgCACAwQQFqITAgMEEDSARADAIMAQsLC0EAITEDQAJAQeTDOiAxQQJ0akMAAAAAOAIAIDFBAWohMSAxQQNIBEAMAgwBCwsLQQAhMgNAAkBB8MM6IDJBAnRqQwAAAAA4AgAgMkEBaiEyIDJBA0gEQAwCDAELCwtBACEzA0ACQEH8wzogM0ECdGpDAAAAADgCACAzQQFqITMgM0EDSARADAIMAQsLC0EAITQDQAJAQYjEOiA0QQJ0akMAAAAAOAIAIDRBAWohNCA0QQNIBEAMAgwBCwsLQQAhNQNAAkBBlMQ6IDVBAnRqQwAAAAA4AgAgNUEBaiE1IDVBA0gEQAwCDAELCwtBACE2A0ACQEGgxDogNkECdGpDAAAAADgCACA2QQFqITYgNkEDSARADAIMAQsLC0EAITcDQAJAQbTEOiA3QQJ0akMAAAAAOAIAIDdBAWohNyA3QQNIBEAMAgwBCwsLQQAhOANAAkBBwMQ6IDhBAnRqQwAAAAA4AgAgOEEBaiE4IDhBA0gEQAwCDAELCwtBACE5A0ACQEHMxDogOUECdGpDAAAAADgCACA5QQFqITkgOUEDSARADAIMAQsLCwuoioCAAABBACABNgIAQQBDAIA7SEMAAIA/QQAoAgCyl5Y4AgRBAEMAACBBQQAqAgSVOAIIQQBD2w/JQEEAKgIElTgCtIAEQQBDUkVhPkEAKgIElEMAAAA/ko44AsCABEEAQwAAAABDVQzdQEEAKgLAgASUk0EAKgIElTgCxIAEQQBD2w/JQEEAKgIElTgCzIAEQQBD2w9JQEEAKgIElTgC2IAEQQBD1qecPEEAKgIElEMAAAA/ko44AvCADEEAQwAAgEZDAAAAAEEAKgLAgARBACoC8IAMk5eWqDYC9IAMQQBDbxKDOkEAKgIElDgC+IAQQQBDAACAREMAAAAAQQAqAvCADEMAAIC/kpeWqDYCgMEQQQBDOIeDPkEAKgIElEMAAAA/ko44AozBEEEAQwAAAABDVQzdQEEAKgKMwRCUk0EAKgIElTgCkMEQQQBDdenfPEEAKgIElEMAAAA/ko44AqTBGEEAQwAAgEZDAAAAAEEAKgKMwRBBACoCpMEYk5eWqDYCqMEYQQBDAAAARUMAAAAAQQAqAqTBGEMAAIC/kpeWqDYCrMEZQQBDFOtEPkEAKgIElEMAAAA/ko44ArjBGUEAQwAAAABDVQzdQEEAKgK4wRmUk0EAKgIElTgCvMEZQQBDrvPvPEEAKgIElEMAAAA/ko44AtDBHUEAQwAAAEZDAAAAAEEAKgK4wRlBACoC0MEdk5eWqDYC1MEdQQBDAAAARUMAAAAAQQAqAtDBHUMAAIC/kpeWqDYC2MEeQQBDN3BXPkEAKgIElEMAAAA/ko44AuTBHkEAQwAAAABDVQzdQEEAKgLkwR6Uk0EAKgIElTgC6MEeQQBDjQ7IPEEAKgIElEMAAAA/ko44AvzBJkEAQwAAgEZDAAAAAEEAKgLkwR5BACoC/MEmk5eWqDYCgMImQQBDAAAARUMAAAAAQQAqAvzBJkMAAIC/kpeWqDYChMInQQBDAAAAPkEAKgIElEMAAAA/ko44ApDCJ0EAQwAAAABDVQzdQEEAKgKQwieUk0EAKgIElTgClMInQQBD8X5cPEEAKgIElEMAAAA/ko44AqjCK0EAQwAAAEZDAAAAAEEAKgKQwidBACoCqMIrk5eWqDYCrMIrQQBDAACAREMAAAAAQQAqAqjCK0MAAIC/kpeWqDYCsIIsQQBD9+cyPkEAKgIElEMAAAA/ko44AryCLEEAQwAAAABDVQzdQEEAKgK8giyUk0EAKgIElTgCwIIsQQBDK6G7PEEAKgIElEMAAAA/ko44AtSCMEEAQwAAAEZDAAAAAEEAKgK8gixBACoC1IIwk5eWqDYC2IIwQQBDAAAARUMAAAAAQQAqAtSCMEMAAIC/kpeWqDYC3IIxQQBD2c0cPkEAKgIElEMAAAA/ko44AuiCMUEAQwAAAABDVQzdQEEAKgLogjGUk0EAKgIElTgC7IIxQQBDqKymPEEAKgIElEMAAAA/ko44AoCDNUEAQwAAAEZDAAAAAEEAKgLogjFBACoCgIM1k5eWqDYChIM1QQBDAACAREMAAAAAQQAqAoCDNUMAAIC/kpeWqDYCiMM1QQBDtOcCPkEAKgIElEMAAAA/ko44ApTDNUEAQwAAAABDVQzdQEEAKgKUwzWUk0EAKgIElTgCmMM1QQBDMnMBPUEAKgIElEMAAAA/ko44AqzDOUEAQwAAAEZDAAAAAEEAKgKUwzVBACoCrMM5k5eWqDYCsMM5QQBDAAAARUMAAAAAQQAqAqzDOUMAAIC/kpeWqDYCtMM6C5CAgIAAACAAIAEQDCAAEA4gABALC46BgIAAAEEAQwAAAAA4AgxBAEMAAKDBOAIYQQBDAAAAADgCqIAEQQBDAICdQzgCuIAEQQBDAAAAADgCvIAEQQBDAAAAQDgCyIAEQQBDAIC7RTgC0IAEQQBDAABAQDgC1IAEQQBDAABIQzgC3IAEQQBDAABwQjgC/IAQQQBDAIC7RDgCrMQ6QQBDAAAAADgCsMQ6C42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC9CmgIAAAQBBAAvJJnsibmFtZSI6InppdGFSZXYiLCJmaWxlbmFtZSI6InppdGFSZXZfYnlwYXNzMiIsInZlcnNpb24iOiIyLjUuMjMiLCJvcHRpb25zIjoid2FzbS1pYiwgLXNjYWwgLWZ0eiAyIiwic2l6ZSI6Ijk1OTA2NCIsImlucHV0cyI6IjIiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImF1dGhvciI6IkpPUywgUmV2aXNlZCBieSBSTSJ9LHsiYmFzaWNzLmxpYi9uYW1lIjoiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5In0seyJiYXNpY3MubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlbGF5cy5saWIvbmFtZSI6IkZhdXN0IERlbGF5IExpYnJhcnkifSx7ImRlbGF5cy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiZGVzY3JpcHRpb24iOiJFeGFtcGxlIEdVSSBmb3Igeml0YV9yZXYxX3N0ZXJlbyAobW9zdGx5IGZvbGxvd2luZyB0aGUgTGludXggeml0YS1yZXYxIEdVSSkuIn0seyJmaWxlbmFtZSI6InppdGFSZXZfYnlwYXNzMiJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsibWF0aHMubGliL2F1dGhvciI6IkdSQU1FIn0seyJtYXRocy5saWIvY29weXJpZ2h0IjoiR1JBTUUifSx7Im1hdGhzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoieml0YVJldiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoieml0YVJldiIsIml0ZW1zIjpbeyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJaaXRhX1JldjEiLCJtZXRhIjpbeyIwIjoiIn0seyJ0b29sdGlwIjoifiBaSVRBIFJFVjEgRkVFREJBQ0sgREVMQVkgTkVUV09SSyAoRkROKSAmIFNDSFJPRURFUiAgQUxMUEFTUy1DT01CIFJFVkVSQkVSQVRPUiAoOHg4KS4gU2VlIEZhdXN0J3MgcmV2ZXJicy5saWIgZm9yIGRvY3VtZW50YXRpb24gYW5kICByZWZlcmVuY2VzIn1dLCJpdGVtcyI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiSW5wdXQiLCJtZXRhIjpbeyIxIjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkluIERlbGF5IiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9JbnB1dC9Jbl9EZWxheSIsImluZGV4IjoiMjYyMjY4IiwibWV0YSI6W3siMSI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiRGVsYXkgaW4gbXMgICBiZWZvcmUgcmV2ZXJiZXJhdGlvbiBiZWdpbnMifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjYwIiwibWluIjoiMjAiLCJtYXgiOiIxMDAiLCJzdGVwIjoiMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJEZWNheSBUaW1lcyBpbiBCYW5kcyAoc2VlIHRvb2x0aXBzKSIsIm1ldGEiOlt7IjIiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTEYgWCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTEZfWCIsImluZGV4IjoiNjU2MjgiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ3Jvc3NvdmVyIGZyZXF1ZW5jeSAoSHopIHNlcGFyYXRpbmcgbG93IGFuZCBtaWRkbGUgZnJlcXVlbmNpZXMifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIwMCIsIm1pbiI6IjUwIiwibWF4IjoiMTAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTG93IFJUNjAiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL0xvd19SVDYwIiwiaW5kZXgiOiI2NTYyMCIsIm1ldGEiOlt7IjIiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIGxvdy1mcmVxdWVuY3kgYmFuZCJ9LHsidW5pdCI6InMifV0sImluaXQiOiIzIiwibWluIjoiMSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTWlkIFJUNjAiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL0RlY2F5X1RpbWVzX2luX0JhbmRzXyhzZWVfdG9vbHRpcHMpL01pZF9SVDYwIiwiaW5kZXgiOiI2NTYwOCIsIm1ldGEiOlt7IjMiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJUNjAgPSB0aW1lIChpbiBzZWNvbmRzKSB0byBkZWNheSA2MGRCIGluIG1pZGRsZSBiYW5kIn0seyJ1bml0IjoicyJ9XSwiaW5pdCI6IjIiLCJtaW4iOiIxIiwibWF4IjoiOCIsInN0ZXAiOiIwLjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJIRiBEYW1waW5nIiwiYWRkcmVzcyI6Ii96aXRhUmV2L1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9IRl9EYW1waW5nIiwiaW5kZXgiOiI2NTYxNiIsIm1ldGEiOlt7IjQiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGcmVxdWVuY3kgKEh6KSBhdCB3aGljaCB0aGUgaGlnaC1mcmVxdWVuY3kgVDYwIGlzIGhhbGYgdGhlIG1pZGRsZS1iYW5kJ3MgVDYwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI2MDAwIiwibWluIjoiMTUwMCIsIm1heCI6IjIzNTIwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUk0gUGVha2luZyBFcXVhbGl6ZXIgMSIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXExIEZyZXEiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL1JNX1BlYWtpbmdfRXF1YWxpemVyXzEvRXExX0ZyZXEiLCJpbmRleCI6IjY1NTkyIiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAxIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIzMTUiLCJtaW4iOiI0MCIsIm1heCI6IjI1MDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMSBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMS9FcTFfTGV2ZWwiLCJpbmRleCI6IjY1NTk2IiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGVhayBsZXZlbCAgIGluIGRCIG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMSJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJSTSBQZWFraW5nIEVxdWFsaXplciAyIiwibWV0YSI6W3siNCI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTIgRnJlcSIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfRnJlcSIsImluZGV4IjoiOTU5MDIwIiwibWV0YSI6W3siMSI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IkNlbnRlci1mcmVxdWVuY3kgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAyIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiIxNTAwIiwibWluIjoiMTYwIiwibWF4IjoiMTAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMiBMZXZlbCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfTGV2ZWwiLCJpbmRleCI6Ijk1OTAyNCIsIm1ldGEiOlt7IjIiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlBlYWsgbGV2ZWwgICBpbiBkQiBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDIifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiItMTUiLCJtYXgiOiIxNSIsInN0ZXAiOiIwLjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiT3V0cHV0IiwibWV0YSI6W3siNSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJEcnkvV2V0IE1peCIsImFkZHJlc3MiOiIveml0YVJldi9aaXRhX1JldjEvT3V0cHV0L0RyeS9XZXRfTWl4IiwiaW5kZXgiOiI2NTU3NiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ii0xID0gZHJ5LCAxID0gd2V0In1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTGV2ZWwiLCJhZGRyZXNzIjoiL3ppdGFSZXYvWml0YV9SZXYxL091dHB1dC9MZXZlbCIsImluZGV4IjoiMjQiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJPdXRwdXQgc2NhbGUgICBmYWN0b3IifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0yMCIsIm1pbiI6Ii03MCIsIm1heCI6IjQwIiwic3RlcCI6IjAuMSJ9XX1dfSx7InR5cGUiOiJjaGVja2JveCIsImxhYmVsIjoiYnlwYXNzIiwiYWRkcmVzcyI6Ii96aXRhUmV2L2J5cGFzcyIsImluZGV4IjoiMTIifV19XX0w"; }

/*
 faust2wasm
 Additional code: GRAME 2017-2018
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class zitaRev_bypass2 extends AudioWorkletNode {
    
    constructor(context, options) {
        
        var json_object = JSON.parse(getJSONzitaRev_bypass2());
        
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";
       
        super(context, 'zitaRev_bypass2', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
            }
        }
        
        this.output_handler = null;
   
        this.json_object = json_object;
        
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
       
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        this.setPatch("init");

    }
    
    getMetadata()
    {
        return getJSONzitaRev_bypass2();
    }
    
    setParam(path, val)
    {
        //this.port.postMessage({ type:"param", key:path, value:val });
        
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    getParam(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    // TO REMOVE
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    getDescriptor()
    {
        return this.inputs_items;
    }
    
    /**
     * Controller
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    onMidi(data)
    {
        this.port.postMessage({ type:"midi", data:data });
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    /*
    *Guillaume : method which should evolve into setPatch(patch) where param is the name of a json file 
    * créer des états : parcourir input_items au lieu de faire tout ça 
    */
   setPatch(patch) {
    var controlTypes = [];
    var controls = [];

    var listeTypeControl = this.json_object.ui[0].items[0].items;
    listeTypeControl.forEach(element => {
        controlTypes.push(element);
    });

    for (var i = 0; i < controlTypes.length; i++) {
        for (var j = 0; j < controlTypes[i].items.length; j++) {
            controls.push(controlTypes[i].items[j]);
        }
    }


    if (patch === "init") {
        console.log("initialisation");
        controls.forEach(item => {
            this.setParam(item.address, item.init);
        });
    } else {
        console.log("not implemented yet");
    }

    // if (patch === "init") {
    //     for (let i = 0; i < this.inputs_items.length; i++) {

    //         console.log(this.parameters.get(this.inputs_items[i]));
    //         this.setParam(this.inputs_items[i], this.parameters.get(this.inputs_items[i]).defaultValue);

    //     }
    //     console.log(this.getParam("/zitaRev/Zita_Rev1/Output/Level"));
    // }

}
    
}

// Faust context
var faust = faust || {};

faust.create = function(context, callback)
{
    // Resume audio context each time...
    context.resume();
    
    // The main global scope
    context.audioWorklet.addModule("zitaRev_bypass2-processor.js")
    .then(function () {
         callback(new zitaRev_bypass2(context, {}));
    })
    .catch(function(error) { console.log(error); console.log("Faust zitaRev_bypass2 cannot be loaded or compiled"); });
}


var WAPlugin = WAPlugin || {};

WAPlugin.FaustZitaRev2 = class FaustZitaRev2 {

constructor(context, baseUrl) {
    this.context = context;
    this.baseUrl = baseUrl;
}

load() {
    return new Promise((resolve, reject) => {
        console.log("URL : " + (this.baseUrl + "/zitaRev_bypass2-processor.js"));
        this.context.audioWorklet.addModule(this.baseUrl + "/zitaRev_bypass2-processor.js").then(() => {
            this.plug = new zitaRev_bypass2(this.context, {});
            return (this.plug);
        }).then((faust) => {
            resolve(faust);
        }).catch((e) => {
            reject(e);
        });
    });
}

loadGui() {
    return new Promise((resolve, reject) => {
        try {
            // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
            let url = this.baseUrl + "/main.html";

            if (!this.linkExists(url)) {
                // LINK DOES NOT EXIST, let's add it to the document
                var link = document.createElement('link');
                link.rel = 'import';
                //link.id = 'urlPlugin';
                link.href = url;
                document.head.appendChild(link);

                link.onload = (e) => {
                    // the file has been loaded, instanciate GUI
                    // and get back the HTML elem
                    // HERE WE COULD REMOVE THE HARD CODED NAME
                    var element = createFaustZitaRevGUI2(this.plug);
                    //element._plug = this.plug;
                    resolve(element);
                }
            } else {
                // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                // so we can create another instance
                var element = createFaustZitaRevGUI2(this.plug);
                //element._plug = this.plug;
                resolve(element);
            }
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
};

linkExists(url) {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;

}


}