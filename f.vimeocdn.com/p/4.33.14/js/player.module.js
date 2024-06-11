/* VimeoPlayer - v4.33.14 - 2024-06-06 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    C as r,
    c as a,
    b as s,
    e as l,
    L as c,
    g as d,
    f as u,
    x as p,
    h as _,
    j as v,
    V as m,
    t as f,
    k as h,
    r as g,
    m as b,
    p as E,
    P as y,
    T as C,
    l as T,
    n as L,
    o as w,
    q as A,
    u as S,
    G as I,
    v as k,
    w as P,
    F as O,
    y as R,
    Q as N,
    S as D,
    z as M,
    A as x,
    H as B,
    R as V,
    B as U,
    D as F,
    E as H,
    I as q,
    M as G,
    J as W,
    K as Y,
    N as $,
    O as K,
    U as j,
    W as z,
    X,
    Y as Z,
    Z as J,
    $ as Q,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as se,
    a8 as le,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as pe,
    ad as _e,
    ae as ve,
    af as me,
    ag as fe,
    ah as he,
    ai as ge,
    aj as be,
    ak as Ee,
    al as ye,
    am as Ce,
    an as Te,
    ao as Le,
    ap as we,
    aq as Ae,
    ar as Se,
    as as Ie,
    at as ke,
    au as Pe,
    av as Oe,
    aw as Re,
    ax as Ne,
    ay as De,
    az as Me,
    aA as xe,
    aB as Be,
    aC as Ve,
    aD as Ue,
    aE as Fe,
    aF as He,
    aG as qe,
    aH as Ge,
    aI as We,
    aJ as Ye,
    aK as $e,
    aL as Ke,
    aM as je,
    aN as ze,
    aO as Xe,
    aP as Ze,
    aQ as Je,
    aR as Qe,
    aS as et,
    aT as tt,
    aU as nt,
    aV as it,
    aW as ot
} from "./vendor.module.js";
export {
    a7 as BigScreen, aV as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let rt = {};

function at(e = "", t = {}) {
    var n;
    if ((null == (n = rt.en) ? void 0 : n[e]) && (e = rt.en[e]), Object.keys(t).forEach(n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        }), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function st(e) {
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? Math.floor(e / 1e3) + "." + Math.round(e % 1e3 / 100) + "K" : Math.floor(e / 1e6) + "." + Math.round(e % 1e6 / 1e5) + "M"
}

function lt(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}
const ct = function(t, ...n) {
        const i = n => n.length >= t.length ? t.apply(this, n) : (...t) => i([].concat(e(n), t));
        return i([])
    }((e, t) => Object.keys(e).every(n => e[n] === t[n])),
    dt = (e = []) => ({
        get: t => t ? e.find(ct(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(ct(t)), 1).pop()
    });

function ut(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (Te) {}
}

function pt(e = document.activeElement, t = null) {
    try {
        e.blur()
    } catch (Te) {
        t && t(Te)
    }
}

function _t(e = document.activeElement, t = null) {
    try {
        e.focus()
    } catch (Te) {
        t && t(Te)
    }
}

function vt(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function mt(e) {
    try {
        return new URL(e).origin
    } catch (Te) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function ft({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        s = n - i * a,
        l = i - n / a;
    if (s > 0 && s < o || l > 0 && l < o) {
        const e = n / (n - s),
            t = i / (i - l);
        r = Ct(Math.max(e, t), 3)
    }
    return {
        extraWidth: s,
        extraHeight: l,
        scaleFactor: r
    }
}

function ht(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function gt(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let s = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        l = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${l},top=${s},${c}`)
}

function bt(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.hk)(?=$|\/)/.test(e)
    }(e) ? mt(e) : ""
}

function Et(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.hk)\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = function(e) {
            if (lt(e)) return parseInt(e, 10);
            const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
            if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
            return parseInt(t[2], 10)
        }(i),
        a = t(window.location.search),
        s = t(`${i}`.split("?")[1]),
        l = Object.assign(a, s, o);
    return n(`${e}/video/${r}/config`, l)
}

function yt(e) {
    for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), o = [], r = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (o[r++] = t);
    var l = o.shift();
    l && (l.focus(), l.blur())
}

function Ct(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Tt() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
}

function Lt(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function wt(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) wt(e, i, t[i])
}

function At(e, t, n) {
    n.forEach(n => {
        e(n, (...e) => {
            t.apply(void 0, [n].concat(e))
        })
    })
}

function St(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function It(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce((e, t) => (...n) => e(t.apply(void 0, n)))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (;
        (null == (n = e) ? void 0 : n.parentElement) && !Lt(e, t);) {
        var n;
        e = e.parentElement
    }
    return Lt(e, t) ? e : null
}));
let kt = 0;

function Pt(e = "p") {
    return `${e}${++kt}`
}
const Ot = {
        _badPlayback: Pt(),
        _bufferStarted: Pt(),
        _spatialUnsupported: Pt(),
        _spatialFailure: Pt()
    },
    Rt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    Nt = {
        _seek: Pt(),
        _changeVolume: Pt(),
        _changeMuted: Pt(),
        _hideOverlay: Pt(),
        _showOverlay: Pt(),
        _updateOverlay: Pt(),
        _setActivePage: Pt(),
        _updateEmailCapture: Pt(),
        _updateWebinarStartTime: Pt(),
        _openPopup: Pt(),
        _reset: Pt(),
        _changeLoop: Pt(),
        _changeQuality: Pt(),
        _openVimeo: Pt(),
        _changeColor: Pt(),
        _disableVolume: Pt(),
        _enableVolume: Pt(),
        _disableCaptions: Pt(),
        _enableCaptions: Pt(),
        _forceFullscreen: Pt(),
        _turnCaptionsOn: Pt(),
        _turnCaptionsOff: Pt(),
        _changeCaptionsStyles: Pt(),
        _resetCaptionsStyles: Pt(),
        _toggleNativeControls: Pt(),
        _showOutro: Pt(),
        _hideOutro: Pt(),
        _setControlsVisibility: Pt(),
        _overrideControlbarBehavior: Pt(),
        _activatePictureInPicture: Pt(),
        _deactivatePictureInPicture: Pt(),
        _attachSpatialPlaybackEvents: Pt(),
        _toggleSpatialPlayback: Pt(),
        _revealSpatialControls: Pt(),
        _setTime: Pt(),
        _addCard: Pt(),
        _removeCard: Pt(),
        _changePlaybackRate: Pt(),
        _destroy: Pt(),
        _changeAudioTrack: Pt(),
        _requestCompleteLiveSubtitles: Pt(),
        _openRemoteComponent: Pt(),
        _closeRemoteComponent: Pt(),
        _updateLiveSubtitleRequests: Pt()
    },
    Dt = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    Mt = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    xt = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Bt = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Vt = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Ut = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Ft = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    Ht = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    qt = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    Gt = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    },
    Wt = {
        _apiError: Pt(),
        _error: Pt(),
        _playRejected: Pt(),
        _playResolved: Pt(),
        _paused: Pt(),
        _pausedForAd: Pt(),
        _resumedAfterAd: Pt(),
        _ended: Pt(),
        _volumeChanged: Pt(),
        _mutedChanged: Pt(),
        _qualityChanged: Pt(),
        _targetTimeReached: Pt(),
        _cuepoint: Pt(),
        _firstTimeUpdate: Pt(),
        _playbackRateChanged: Pt(),
        _nudgeAttempted: Pt(),
        _showNudgeNotification: Pt(),
        _nudgeEnded: Pt(),
        _fragmentChanged: Pt(),
        _fullscreenButtonPressed: Pt(),
        _pauseButtonPressed: Pt(),
        _playButtonPressed: Pt(),
        _prefsButtonPressed: Pt(),
        _ccButtonPressed: Pt(),
        _chapterSeekAttempted: Pt(),
        _chapterSeek: Pt(),
        _chapterHoverStateOn: Pt(),
        _chapterHoverStateOff: Pt(),
        _chapterChanged: Pt(),
        _scrubbingStarted: Pt(),
        _scrubbingEnded: Pt(),
        _volumeScrubbingStarted: Pt(),
        _volumeScrubbingEnded: Pt(),
        _controlBarVisibilityChanged: Pt(),
        _toastVisibilityChanged: Pt(),
        _sidedockVisibilityChanged: Pt(),
        _menuVisibilityChanged: Pt(),
        _captionsChanged: Pt(),
        _cuePointAdded: Pt(),
        _cuePointRemoved: Pt(),
        _stereoscopicButtonPressed: Pt(),
        _menuPanelOpened: Pt(),
        _menuPanelClosed: Pt(),
        _menuCentered: Pt(),
        _badgePressed: Pt(),
        _muteAutoplayed: Pt(),
        _willEnterFullscreen: Pt(),
        _didEnterFullscreen: Pt(),
        _willExitFullscreen: Pt(),
        _didExitFullscreen: Pt(),
        _likeButtonPressed: Pt(),
        _watchLaterButtonPressed: Pt(),
        _shareButtonPressed: Pt(),
        _embedButtonPressed: Pt(),
        _vodButtonPressed: Pt(),
        _collectionsButtonPressed: Pt(),
        _followButtonPressed: Pt(),
        _overlayOpened: Pt(),
        _overlayClosed: Pt(),
        _overlayCleared: Pt(),
        _overlayCloseButtonPressed: Pt(),
        _facebookButtonPressed: Pt(),
        _twitterButtonPressed: Pt(),
        _tumblrButtonPressed: Pt(),
        _emailButtonPressed: Pt(),
        _embedCodeCopied: Pt(),
        _popupOpened: Pt(),
        _debugButtonPressed: Pt(),
        _emailCaptureSubmitted: Pt(),
        _popupClosed: Pt(),
        _shareViewShown: Pt(),
        _embedViewShown: Pt(),
        _shareViewEnd: Pt(),
        _embedViewEnd: Pt(),
        _showAndroidVRDeepLink: Pt(),
        _showEmailCaptureForm: Pt(),
        _debugDataChange: Pt(),
        _debugPayloadCopied: Pt(),
        _mousedOut: Pt(),
        _mousedOver: Pt(),
        _mouseTimeout: Pt(),
        _liked: Pt(),
        _unliked: Pt(),
        _addedToWatchLater: Pt(),
        _removedFromWatchLater: Pt(),
        _userLogIn: Pt(),
        _userLoggedIn: Pt(),
        _userLoggedOut: Pt(),
        _loginFailure: Pt(),
        _colorChanged: Pt(),
        _configChanged: Pt(),
        _liveEventSettingsChanged: Pt(),
        _passwordUnlocked: Pt(),
        _privateUnlocked: Pt(),
        _enteredTinyMode: Pt(),
        _enteredMiniMode: Pt(),
        _enteredNormalMode: Pt(),
        _requestConfigReloaded: Pt(),
        _embedSettingChanged: Pt(),
        _createInteractiveChanged: Pt(),
        _ottMetadataSet: Pt(),
        _outroDisplayed: Pt(),
        _outroHidden: Pt(),
        _outroVideoPressed: Pt(),
        _becameActive: Pt(),
        _becameInactive: Pt(),
        _tipped: Pt(),
        _emailCaptureSuccess: Pt(),
        _emailCaptureFailure: Pt(),
        _webinarFormSuccess: Pt(),
        _loadVideo: Pt(),
        _swapVideo: Pt(),
        _outroLinkPressed: Pt(),
        _followed: Pt(),
        _unfollowed: Pt(),
        _outroImagePressed: Pt(),
        _outroCtaPressed: Pt(),
        _cardDisplayed: Pt(),
        _cardPressed: Pt(),
        _spaceChanged: Pt(),
        _emailCaptureEnd: Pt(),
        _displayContextChanged: Pt(),
        _titleModuleReady: Pt(),
        _sidedockModuleReady: Pt(),
        _controlBarModuleReady: Pt(),
        _videoModuleReady: Pt(),
        _overlayModuleReady: Pt(),
        _notificationModuleReady: Pt(),
        _statsModuleReady: Pt(),
        _apiModuleReady: Pt(),
        _ready: Pt(),
        _notificationHidden: Pt(),
        _alertVisibilityChanged: Pt(),
        _airPlayAvailable: Pt(),
        _airPlayNotAvailable: Pt(),
        _airPlayActivated: Pt(),
        _airPlayDeactivated: Pt(),
        _airPlayButtonPressed: Pt(),
        _adBuffering: Pt(),
        _adComplete: Pt(),
        _adClicked: Pt(),
        _adError: Pt(),
        _adPaused: Pt(),
        _adResumed: Pt(),
        _adStarted: Pt(),
        _adSkipped: Pt(),
        _allAdsCompleted: Pt(),
        _logMetric: Pt(),
        _webinarRegistrantBlocked: Pt(),
        _webinarRegistrantUnblocked: Pt(),
        _interactiveReady: Pt(),
        _interactiveHotspotClicked: Pt(),
        _interactiveOverlayPanelClicked: Pt(),
        _interactiveMarkerClicked: Pt(),
        _interactiveSeekCall: Pt(),
        _transcriptChanged: Pt(),
        _rightContentAreaVisibilityChange: Pt(),
        _rightContentAreaEnabled: Pt(),
        _rightContentAreaDisabled: Pt(),
        _transcriptNavActive: Pt(),
        _transcriptSessionStarted: Pt(),
        _transcriptKeyPressed: Pt(),
        _aiWidgetKeyPressed: Pt(),
        _qoeSurveyPresented: Pt(),
        _parentUrlAvailable: Pt(),
        _liveEventSafeToPlay: Pt(),
        _startTimeUpdated: Pt(),
        _endTimeUpdated: Pt(),
        _remoteComponentMounted: Pt(),
        _accessGateOpened: Pt(),
        _accessGateClosed: Pt(),
        _accessGateUnlocked: Pt()
    },
    Yt = {
        _seek: Pt(),
        _play: Pt(),
        _pause: Pt(),
        _playbackRateChange: Pt()
    },
    $t = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Kt = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        webinarBlocked: 10,
        webinarLocked: 11,
        webinarUnlocked: 12,
        webinarFull: 13
    },
    jt = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        TOAST_VISIBILITY_CHANGED: "toastvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        EMAIL_CAPTURE_FAILED: "emailcapturefailed",
        EMAIL_CAPTURE: "emailcapture",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        PLAYER_LOGIN_SUCCESSFUL: "playerLoginSuccessful",
        PLAYER_LOGIN_FAILED: "playerLoginFailed",
        COMPONENT_VISIBILITY_CHANGE: "componentVisibilityChange",
        APP_BREAKPOINT_CHANGE: "appBreakpointChange"
    },
    zt = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    Xt = !0 === o.iOS,
    Zt = {
        NOTHING: "nothing",
        BEGINNING: "beginning",
        EMAIL: "email",
        VOD: "vod",
        VIDEOS: "videos",
        LINK: "link",
        THREEVIDEOS: "threevideos",
        PROMOTED: "promoted",
        SHARE: "share"
    },
    Jt = ["t", "start", "at"],
    Qt = "one",
    en = "two",
    tn = "three",
    nn = "four",
    on = {
        [Qt]: "000000",
        [en]: "00adef",
        [tn]: "ffffff",
        [nn]: "000000"
    },
    rn = {
        [Qt]: "color_one",
        [en]: "color_two",
        [tn]: "color_three",
        [nn]: "color_four"
    },
    an = {
        [Qt]: "colorOne",
        [en]: "colorTwo",
        [tn]: "colorThree",
        [nn]: "colorFour"
    };
var sn;
! function(e) {
    e.POPUP = "popup", e.ON_SITE = "onsite"
}(sn || (sn = {}));
var ln = sn;
const cn = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144],
    dn = () => ({
        id: "error",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var un = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        id: "not-supported",
        title: "Unsupported viewing environment",
        message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.',
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        id: "drm-failure",
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        id: "not-supported",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        id: "not-supported",
        final: !1
    }),
    MediaDecodeError: () => ({
        id: "decode",
        final: !1
    }),
    MediaNetworkError: () => ({
        id: "network",
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    MediaUnknownError: () => ({
        id: "unknown",
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        id: "telecine-file-error",
        final: !1
    }),
    DownloadError: () => ({
        id: "telecine-download-error",
        final: !1
    }),
    MediaUrlExpired: () => ({
        id: "media-url-expired",
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        id: "scanner-error",
        final: !1
    }),
    PlayerError: dn
});
const pn = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" !== t.key && " " !== t.key || e(t)
        }
    }),
    _n = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Te) {
                return Promise.reject(Te)
            }
        }
    }((function(e) {
        return o.clipboardAPI ? function(t, n) {
            try {
                var i = function(e, t, n) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(navigator.clipboard.writeText(e), (function() {
                    return !0
                }))
            } catch (Te) {
                return n()
            }
            return i && i.then ? i.then(void 0, n) : i
        }(0, (function(t) {
            return vn(e)
        })) : vn(e)
    }));

function vn(e) {
    const t = document.createElement("textarea");
    t.value = e, document.body.appendChild(t), t.select();
    const n = document.execCommand("copy");
    return document.body.removeChild(t), n
}
const mn = (e, t, n) => {
    var i;
    return null !== (i = t[n]) && void 0 !== i ? i : e[n]
};

function fn(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const hn = e => [Kt.main, Kt.privateUnlocked, Kt.webinarUnlocked].includes(e),
    gn = (e, t) => e && (e.contains(t.target) || e === t.target),
    bn = (...e) => e.reduce((e, t) => t ? e ? `${e} ${t}` : t : e, null),
    En = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    },
    yn = (e = [], t) => e.map(e => (e.active = `${e.id}` === t, e)),
    Cn = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = vt(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    Tn = e => {
        let {
            clientX: t
        } = e;
        return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
    },
    Ln = (e, t) => Math.max(e - t.startTime, 0),
    wn = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : Ln(e, t) / o
    },
    An = (e, t) => {
        const {
            startTime: n,
            endTime: i
        } = t;
        return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
    },
    Sn = (e, t = !0) => {
        const n = 100 * (t ? Ct(e, 2) : e);
        return `${Math.max(Math.min(n,100),0)}%`
    },
    In = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    kn = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    Pn = (e, t, n) => (n - t) * e + t,
    On = (e, t, n) => (e - t) / (n - t),
    Rn = (e, t) => e.filter(e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    });
let Nn, Dn, Mn, xn, Bn, Vn, Un, Fn;
! function(e) {
    e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_OVERLAY_WRAPPER = "vp-overlay-wrapper", e.VP_OVERLAY_LABELLEDBY = "vp-overlay-labelledby", e.VP_CONTROLS = "vp-controls", e.VP_CHAPTER_BUTTON = "vp-chapter-button", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_PREFS = "vp-prefs", e.VP_MENU_INFO = "vp-menu-info", e.VP_INTERACTIVE_MARKER = "vp-interactive-marker", e.VP_PROGRESS = "vp-progress", e.VP_LIVE_STATUS = "vp-live-status", e.VP_LIVE_STATUS_CIRCLE = "vp-live-status-circle", e.VP_LIVE_VIEWER_COUNT = "vp-live-viewer-count", e.VP_PIP_OVERLAY = "vp-pip-overlay", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SPIN = "vp-spin", e.VP_TOOLTIP = "vp-tooltip", e.VP_SIDEDOCK = "vp-sidedock", e.VP_BADGE = "vp-badge", e.VP_TITLE = "vp-title", e.VP_UNMUTE = "vp-unmute", e.VP_CAPTIONS_LINE = "vp-captions-line", e.COMPASS_WRAPPER = "compass-wrapper", e.STEREOSCOPIC = "stereoscopic", e.VOD_BUTTON = "vod-button", e.VOD_ICON = "vod-icon", e.CC = "cc", e.AIRPLAY = "airplay", e.ON = "on", e.PIP = "pip", e.VOLUME = "volume", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.LOGO = "logo", e.CUEPOINT = "cuepoint", e.THUMB_PREVIEW = "thumb-preview", e.THUMB = "thumb", e.COLLECTIONS_BUTTON = "collections-button", e.COLLECTIONS_ICON = "collections-icon", e.LIKE_BUTTON = "like-button", e.LIKE_ICON = "like-icon", e.WATCH_LATER_BUTTON = "watch-later-button", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.PIP_ICON = "pip-icon"
}(Nn || (Nn = {})),
function(e) {
    e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.TITLE_TAG = "titleTag", e.BYLINE_TAG = "bylineTag", e.LONER_TAG = "lonerTag", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background", e.ACCESS_GATE = "vp-access-gate", e.ACCESS_GATE_CONTAINER = "vp-access-gate-container"
}(Dn || (Dn = {})),
function(e) {
    e.RIGHT_CONTENT_AREA = "right-content-area"
}(Mn || (Mn = {})),
function(e) {
    e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_CONTROL_BAR_BUTTON = "transcript-control-bar-button"
}(xn || (xn = {})),
function(e) {
    e.AI_WIDGET_ID = "ai-widget"
}(Bn || (Bn = {})),
function(e) {
    e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay", e.BROADCAST_OVER = "broadcast-over"
}(Vn || (Vn = {})),
function(e) {
    e.TEXT_TRACK_ID_PREFIX = "telecine-track-"
}(Un || (Un = {})),
function(e) {
    e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.APP_REDIRECT = "app-redirect", e.PRIVATE_LOCKED = "private-locked", e.WEBINAR_BLOCKED = "webinar-blocked", e.WEBINAR_CONFIRMATION = "webinar-confirmation", e.EMAIL_CAPTURE = "email-capture", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive"
}(Fn || (Fn = {}));
const Hn = [Fn.HELP],
    qn = `.${Nn.VP_OVERLAY_WRAPPER}`,
    Gn = e => e.querySelector(qn),
    Wn = e => {
        if (e) {
            const t = Gn(e);
            if (t && !t.classList.contains("hidden") && !t.classList.contains("out")) return !0
        }
        return !1
    },
    Yn = e => {
        const t = Gn(e);
        return t && Wn(e) ? t.getAttribute("name") : Fn.EMPTY
    },
    $n = e => Hn.includes(e),
    Kn = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    jn = e => (Date.now() - e) / 1e3,
    zn = e => 1e3 * e,
    Xn = () => void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now(),
    Zn = () => parseInt(`${Xn()/1e3}`, 10),
    Jn = e => Zn() - e,
    Qn = (e, t, n) => {
        const i = String(e);
        return new Array(t - i.length + 1).join(n || "0") + i
    },
    ei = (e, t) => {
        const n = Math.ceil(e) < 0;
        e = Math.abs(e);
        var i = Math.floor(e / 3600 % 60),
            o = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
        }
        return (n ? "-" : "") + (i > 0 ? i + ":" : "") + Qn(o, 2) + ":" + Qn(e, 2)
    };

function ti(e, t) {
    const n = new Intl.DateTimeFormat(t, {
        dateStyle: "full",
        timeStyle: "short"
    }).format(e);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
let ni, ii, oi;
! function(e) {
    e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty"
}(ni || (ni = {})),
function(e) {
    e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED"
}(ii || (ii = {})),
function(e) {
    e.LIGHT = "light", e.DARK = "dark"
}(oi || (oi = {}));
const ri = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    ai = (e, t, n, i) => {
        let o;
        try {
            o = new r(e)
        } catch (l) {
            return ""
        }
        const s = (e => r.white.contrast(e).ratio >= 4.5 ? oi.DARK : oi.LIGHT)(o);
        return n && (o = a(s === oi.DARK ? r.white : r.black)), null == t || i && ri(e) ? ri(e) ? o.hexWithAlpha : o.hex : ("object" == typeof t && (t = t[s]), o.alpha = t, o.hexWithAlpha)
    },
    si = e => e.map(([e, t]) => ((e, t) => e + ":" + t + ";")(e, t)).join("\n"),
    li = () => {};

function ci(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function di(e, t) {
    try {
        var n = e()
    } catch (Te) {
        return t(Te)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const ui = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Te) {
                return Promise.reject(Te)
            }
        }
    }((function(e) {
        return di(e, (function(e) {
            return ci(new Promise(e => setTimeout(e, 1e3)), (function() {
                let t;
                if (e instanceof Error) {
                    const n = e.message,
                        i = null == n ? void 0 : n.split(" ").find(e => e.includes("http"));
                    t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
                }
                return di((function() {
                    return ci(
                        import (t.href))
                }), (function() {
                    throw e
                }))
            }))
        }))
    })),
    pi = /^(%20|\s)*(javascript|data)/im,
    _i = /[^\x20-\x7E]/gim,
    vi = /^([^:]+):/gm,
    mi = [".", "/"];

function fi(e) {
    const t = e.match(vi);
    return null == t ? void 0 : t[0]
}

function hi(e) {
    return e ? decodeURI(encodeURI(function(e) {
        const t = fi(e = e.trim());
        return e && !t && (e = `https://${e}`), e
    }(function(e) {
        let t = e.replace(_i, "");
        if (function(e) {
                return mi.indexOf(e[0]) > -1
            }(t)) return t;
        const n = fi(t);
        return n && pi.test(n) ? "" : t
    }(e)))) : null
}

function gi(e, t, n) {
    const i = Array.isArray(t) ? t : [t],
        o = i.map((function(e) {
            return `vimeo_${e}`
        })).concat(i),
        r = new RegExp(`[#&](${o.join("|")})(_${n})?=([^&#]*)`).exec(e);
    let a = null;
    return r && (a = decodeURI(r[3]), a = a ? (e => {
        var t;
        let n, i = !1,
            o = "0",
            r = "0",
            a = "0",
            s = e;
        const l = s.startsWith("-");
        if (l && (s = s.substring(1)), n = s.match(/^([0-9]+)$/), (null == (t = n) ? void 0 : t.length) && (i = !0, a = n[1]), !1 === i && (n = s.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = "0", r = "0", a = "0"] = n)), !1 === i && (n = s.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = "0", o = "0"] = s.split(":").reverse())), !i) return null;
        const c = 60 * parseInt(String(o), 10) * 60 + 60 * parseInt(String(r), 10) + parseInt(String(a), 10);
        return l ? -c : c
    })(a) : null), a
}

function bi(e = "") {
    return e.includes("?")
}

function Ei(e, t, n) {
    return -1 === e.indexOf("#") ? null : gi(`#${e.split("#")[1]}`, t, n)
}
let yi, Ci, Ti, Li, wi, Ai, Si, Ii, ki, Pi, Oi, Ri, Ni, Di, Mi, xi, Bi, Vi;
! function(e) {
    e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE"
}(yi || (yi = {})),
function(e) {
    e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.ChromelessPlayer = "Chromeless"
}(Ci || (Ci = {})),
function(e) {
    e.INLINE = "inline", e.PICTURE_IN_PICTURE = "picture-in-picture"
}(Ti || (Ti = {})),
function(e) {
    e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny"
}(Li || (Li = {})),
function(e) {
    e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR"
}(wi || (wi = {})),
function(e) {
    e[e.HAVE_NOTHING = 0] = "HAVE_NOTHING", e[e.HAVE_METADATA = 1] = "HAVE_METADATA", e[e.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e[e.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e[e.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA"
}(Ai || (Ai = {})),
function(e) {
    e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset"
}(Si || (Si = {})),
function(e) {
    e.AUTO = "auto"
}(Ii || (Ii = {})),
function(e) {
    e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock"
}(ki || (ki = {})),
function(e) {
    e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner"
}(Pi || (Pi = {})),
function(e) {
    e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer"
}(Oi || (Oi = {})),
function(e) {
    e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle"
}(Ri || (Ri = {})),
function(e) {
    e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor"
}(Ni || (Ni = {})),
function(e) {
    e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor"
}(Di || (Di = {})),
function(e) {
    e[e.FONT_SIZE = Ri.FONT_SIZE] = "FONT_SIZE", e[e.FONT_FAMILY = Ri.FONT_FAMILY] = "FONT_FAMILY", e[e.FONT_OPACITY = Ri.FONT_OPACITY] = "FONT_OPACITY", e[e.COLOR = Ri.COLOR] = "COLOR", e[e.EDGE_STYLE = Ri.EDGE_STYLE] = "EDGE_STYLE", e[e.BG_OPACITY = Ni.BG_OPACITY] = "BG_OPACITY", e[e.BG_COLOR = Ni.BG_COLOR] = "BG_COLOR", e[e.WINDOW_OPACITY = Di.WINDOW_OPACITY] = "WINDOW_OPACITY", e[e.WINDOW_COLOR = Di.WINDOW_COLOR] = "WINDOW_COLOR"
}(Mi || (Mi = {})),
function(e) {
    e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T"
}(xi || (xi = {})),
function(e) {
    e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.SINGLE_VIDEO_VIEW_RECIPIENT = "single_video_view_recipient", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page"
}(Bi || (Bi = {})),
function(e) {
    e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit"
}(Vi || (Vi = {}));
const {
    VIMEO_URL: Ui,
    SVV_RECIPIENT_URL: Fi,
    SVV_MANAGE_URL: Hi,
    CLIP_URL: qi,
    PROFILE_URL: Gi,
    VOD_URL: Wi,
    VOD_VIDEO_MANAGE_URL: Yi,
    NO_DESTINATION: $i
} = {
    VIMEO_URL: "vimeoUrl",
    SVV_RECIPIENT_URL: "svvRecipientUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl",
    NO_DESTINATION: "noDestination"
}, Ki = {
    "vimeo-logo": {
        viewer: {
            unlisted: qi,
            password: qi,
            disable: Ui,
            nobody: qi,
            anybody: qi,
            ptv: Wi,
            privateMode: Ui
        },
        creator: {
            unlisted: Hi,
            password: Hi,
            disable: Hi,
            nobody: Hi,
            anybody: Hi,
            ptv: Yi,
            privateMode: Hi
        }
    },
    "video-title": {
        viewer: {
            unlisted: Fi,
            password: qi,
            disable: Gi,
            nobody: Hi,
            anybody: qi,
            ptv: Wi,
            privateMode: Ui
        },
        creator: {
            unlisted: Hi,
            password: Hi,
            disable: Hi,
            nobody: Hi,
            anybody: Hi,
            ptv: Yi,
            privateMode: Hi
        }
    },
    "video-portrait": {
        viewer: {
            unlisted: Gi,
            password: Gi,
            disable: Gi,
            nobody: Gi,
            anybody: Gi,
            ptv: Gi,
            privateMode: Ui
        },
        creator: {
            unlisted: Gi,
            password: Gi,
            disable: Gi,
            nobody: Gi,
            anybody: Gi,
            ptv: Yi,
            privateMode: Hi
        }
    },
    "video-byline": {
        viewer: {
            unlisted: Gi,
            password: Gi,
            disable: Gi,
            nobody: Gi,
            anybody: Gi,
            ptv: Gi,
            privateMode: Ui
        },
        creator: {
            unlisted: Gi,
            password: Gi,
            disable: Gi,
            nobody: Gi,
            anybody: Gi,
            ptv: Yi,
            privateMode: Hi
        }
    },
    "chapter-share-base": {
        viewer: {
            unlisted: Fi,
            password: $i,
            disable: $i,
            nobody: $i,
            anybody: qi,
            ptv: Wi,
            privateMode: $i
        },
        creator: {
            unlisted: Fi,
            password: $i,
            disable: $i,
            nobody: $i,
            anybody: qi,
            ptv: Wi,
            privateMode: $i
        }
    }
};

function ji(e = {}) {
    const t = {
        selectDestination(e) {
            const n = Ki[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            return t.isPrivateMode ? i.privateMode : i[t.videoPrivacy]
        },
        get [qi]() {
            return function(e, t) {
                var n, i;
                const o = null == (n = t.video) ? void 0 : n.id,
                    r = null == (i = t.video) ? void 0 : i.unlisted_hash;
                return `${e}/${o}${r?"/"+r:""}`
            }(t[Ui], e)
        },
        get [Fi]() {
            var n, i;
            return function(e, t, n) {
                return n ? `${e}/${t}/${n}` : `${e}/${t}`
            }(t[Ui], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [Hi]() {
            var n;
            return function(e, t) {
                return `${e}/manage/videos/${t}`
            }(t[Ui], null == (n = e.video) ? void 0 : n.id)
        },
        get [Ui]() {
            return `https://${e.vimeo_url}`
        },
        get [Gi]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.owner) ? void 0 : n.url
        },
        get [Wi]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.vod) ? void 0 : n.url
        },
        get [Yi]() {
            var t, n;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(n=t.vod)?void 0:n.id}/settings/basic`
        },
        get [$i]() {
            return ""
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !!(null == (t = e.user) ? void 0 : t.private_mode_enabled)
        },
        get isOwner() {
            var t, n, i;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (i = n.owner) ? void 0 : i.id)
        }
    };
    return t
}

function zi(e, t) {
    let n = "";
    const i = ji(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}

function Xi(e, t, n) {
    (function(e, t) {
        return -1 !== e.indexOf(`?${t}=`) || -1 !== e.indexOf(`&${t}=`)
    })(e, t) || bi(e) && (e += `&${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function Zi(e, t = window.location.href) {
    const n = ji(e),
        i = -1 !== e.embed.context.indexOf("VideoController"),
        o = -1 !== e.embed.context.indexOf("ClipController");
    if (i) {
        const e = -1 !== t.indexOf(n.svvManageUrl),
            i = -1 !== t.indexOf(n.svvRecipientUrl) || t === n.clipUrl;
        if (e) return Bi.SINGLE_VIDEO_VIEW_MANAGE;
        if (i) return Bi.SINGLE_VIDEO_VIEW_RECIPIENT
    } else if (o) return Bi.CLIP_PAGE;
    return Bi.EMBEDDED_PAGE
}

function Ji(e, t, n) {
    if (!e) return "";
    const [i] = e.split("#");
    return `${i}#t=${t}&end=${n}`
}

function Qi(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const eo = s("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    to = () => o.storageAccessAPI;
let no, io;

function oo(e) {
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : l(e.embed.interactive) ? e.request.flags.ott ? "vimeo-ott-vod" : e.video.webinar && "ended" !== e.video.webinar.status ? "vimeo-live-webinar" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod" : "vimeo-interactive-vod"
}! function(e) {
    e.started = "started", e.done = "done", e.error = "error"
}(no || (no = {})),
function(e) {
    e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended"
}(io || (io = {}));
const ro = () => {
        const [e, t, n] = "4.33.14".split(".");
        return {
            full: "4.33.14",
            major: e,
            minor: t,
            patch: n
        }
    },
    ao = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function so() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : ao && (e = "mobile"), e
}

function lo() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function co(e) {
    const {
        user: t,
        video: n
    } = e;
    let i = "viewer";
    return t.team_id && (i = t.id === t.team_origin_user_id ? "admin" : "contributor"), t.id === n.owner.id && (i = "owner"), i
}

function uo(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function po(e) {
    return (null == e ? void 0 : e.status) === io.ended ? "ended" : (null == e ? void 0 : e.status) === io.started ? "streaming" : (null == e ? void 0 : e.status) === io.pending ? "unavailable" : "unknown"
}

function _o(e) {
    return e.webinar ? "webinar" : e.live_event ? "live_event" : "other"
}

function vo(e) {
    var t;
    return (null == e ? void 0 : e.length) && (null == (t = e.find(e => e.is_current)) ? void 0 : t.id) || null
}

function mo(e) {
    return e === ki.PRIVACY_PUBLIC ? "public" : e === ki.PRIVACY_PASSWORD ? "password" : e === ki.PRIVACY_UNLISTED ? "unlisted" : e === ki.PRIVACY_HIDE_FROM_VIMEO ? "hide_from_vimeo" : "private"
}

function fo(e) {
    const t = e.x_vim_cachebc,
        n = e.x_cache;
    return t ? function(e) {
        let t = !1,
            n = !1;
        return e.split(",").forEach(e => {
            let [i, o] = e.split(":");
            "E" !== i || "h" !== o ? "h" !== o || (t = !0) : n = !0
        }), n ? Vi.EdgeCacheHit : t ? Vi.MidCacheHit : Vi.CacheMiss
    }(t) : n ? function(e) {
        return "HIT" === e.substr(0, 3) ? Vi.MidCacheHit : "HIT" === e.substr(-3) ? Vi.EdgeCacheHit : Vi.CacheMiss
    }(n) : Vi.CacheMiss
}
const ho = (e, t) => e.split("/").slice(4).join("/"),
    go = e => e.split("/")[4],
    bo = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) && (i === u.MANIFEST || i === u.SEGMENT) ? p(n, t) : null
        } catch (Te) {
            return Promise.reject(Te)
        }
    },
    Eo = () => {
        var e;
        const t = d(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    yo = () => {
        const e = d(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    Co = e => {
        const t = {
            hive: Eo,
            kollective: yo
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    To = ({
        newPriority: e,
        currentPriority: t,
        priorityOrder: n
    }) => {
        const i = n.indexOf(t),
            o = n.indexOf(e);
        return -1 === i || -1 === o || i > o
    },
    Lo = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Te) {
                return Promise.reject(Te)
            }
        }
    }((function(e) {
        return new Promise(t => {
            if (!o.intersectionObserver) return void t();
            const n = new IntersectionObserver((function(e) {
                const [i] = e;
                (null == i ? void 0 : i.isIntersecting) && (t(), n.disconnect())
            }), {
                threshold: .5
            });
            n.observe(e)
        })
    }));

function wo(e) {
    return (null == e ? void 0 : e.parentElement) === document.body
}
const Ao = () => {
    try {
        return window.self !== window.top
    } catch (Te) {
        return !0
    }
};

function So(e, t) {
    const [n, i] = t;
    let o = i - n;
    for (var r, a = _(e); !(r = a()).done;) {
        const e = r.value,
            [t, a] = e,
            s = Math.max(n, t),
            l = Math.min(i, a);
        o -= Math.max(0, l - s)
    }
    return Math.max(o, 0)
}

function Io(e) {
    return zn(Ct(e.duration, 3))
}
const ko = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return 12e3;
        const i = 12e3 - (Date.now() - n);
        return Math.min(Math.max(i, 0), 12e3)
    },
    Po = e => !!e && e.status === io.started && 0 === ko(e),
    Oo = (e, t) => ({
        type: "WEBINAR_FORM_SUCCESS",
        payload: {
            formSuccess: e,
            registrantUuid: t
        }
    });

function Ro(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function No(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (Te) {}
    return null
}
var Do;
! function(e) {
    e.NOT_LOGGED_IN = "not_logged_in", e.LOGGED_IN_STORAGE_ACCESS_REQUIRED = "logged_in_storage_access_required", e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED = "storage_access_granted_login_unconfirmed", e.ALL_ACCESS_ATTEMPTS_FAILED = "all_access_attempts_failed"
}(Do || (Do = {}));
var Mo = Do;
const xo = {
    storageAccessRequired: to,
    requestCookieAccess: e => new Promise((t, n) => document.requestStorageAccess().then(() => {
        eo("User granted storage access"), t(!0)
    }, () => {
        e(), eo("User storage access denied:"), t(!1)
    }).catch(n))
};

function Bo(e, t, n) {
    return e / t * n
}

function Vo(e = "") {
    try {
        const t = null == e ? void 0 : e.split(".")[1];
        return (e => parseInt(`${Date.now()/1e3}`, 10) - e)(JSON.parse(atob(t)).exp) >= 0
    } catch (Te) {
        throw new Error("Failed to parse PHP token.")
    }
}
const Uo = !!window.newrelic && "function" == typeof window.newrelic.addToTrace && "function" == typeof window.newrelic.noticeError && "function" == typeof window.newrelic.setErrorHandler && "function" == typeof window.newrelic.setCustomAttribute,
    Fo = ["chrome-extension:", "moz-extension:"].includes(document.location.protocol),
    Ho = Date.now(),
    qo = ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image", "window.__withBuiltIn is not a function", "window.__timeSinceLastTimeout is not a function", "div:has(> iframe[id=", "No cast extension found", "Cast is not available on this browser."];

function Go(e) {
    return "dev" === e.request.build.js ? "dev" : "4.33.14"
}

function Wo(e) {
    switch (e.player_url) {
        case "player.vimeo.com":
            return "PROD";
        case "player-backend-ci.vimeows.com":
        case "master.playerci-py.vimeows.com":
            return "CI";
        case "player2.vimeo.dev":
            return "DEV";
        default:
            return
    }
}
let Yo, $o, Ko;
! function(e) {
    e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1", e.DVR_MODE_ENTERED = "vimeo.dvr_mode_entered", e.SEEK_BEHIND_LIVE_EDGE = "vimeo.seek_behind_live_edge", e.SKIP_TO_LIVE_CLICK = "vimeo.skip_to_live_click", e.SEEK_TO_LIVE_EDGE = "vimeo.seek_to_live_edge", e.PLAY_VIDEO = "vimeo.play_video", e.FINISH_VIDEO = "vimeo.finish_video", e.START_VIDEO_SCRUB = "vimeo.start_video_scrub", e.END_VIDEO_SCRUB = "vimeo.end_video_scrub", e.WATCH_VIDEO_HEARTBEAT = "vimeo.watch_video_heartbeat", e.EMBED_SEGMENT = "vimeo.embed_segment", e.PLAY_SEGMENT = "vimeo.play_segment", e.WATCH_FULL_VIDEO = "vimeo.watch_full_video", e.SEEK_INSIDE_SEGMENT = "vimeo.seek_inside_segment", e.SHARE_CHAPTER = "vimeo.share_chapter", e.CHAPTER_PLAYED = "vimeo.chapter_played", e.OPEN_AI_OPTIONS = "vimeo.open_ai_options"
}(Yo || (Yo = {})),
function(e) {
    e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context", e.LIVE = "live_context", e.PRODUCT_ANALYTICS = "product_analytics_context", e.TARGET_TEAM = "target_team_context", e.USER_FACING_VIDEO_ANALYTICS = "user_facing_video_analytics_context"
}($o || ($o = {})),
function(e) {
    e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 2] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 1] = "MULTI_AUDIO_TRACK_CLICK", e[e.PLAY_VIDEO = 2] = "PLAY_VIDEO", e[e.FINISH_VIDEO = 2] = "FINISH_VIDEO", e[e.START_VIDEO_SCRUB = 2] = "START_VIDEO_SCRUB", e[e.END_VIDEO_SCRUB = 1] = "END_VIDEO_SCRUB", e[e.WATCH_VIDEO_HEARTBEAT = 2] = "WATCH_VIDEO_HEARTBEAT", e[e.EMBED_SEGMENT = 1] = "EMBED_SEGMENT", e[e.PLAY_SEGMENT = 1] = "PLAY_SEGMENT", e[e.WATCH_FULL_VIDEO = 1] = "WATCH_FULL_VIDEO", e[e.SEEK_INSIDE_SEGMENT = 1] = "SEEK_INSIDE_SEGMENT", e[e.SHARE_CHAPTER = 1] = "SHARE_CHAPTER", e[e.CHAPTER_PLAYED = 1] = "CHAPTER_PLAYED", e[e.OPEN_AI_OPTIONS = 4] = "OPEN_AI_OPTIONS", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 25] = "WEB", e[e.VIDEO = 10] = "VIDEO", e[e.PLAYER = 2] = "PLAYER", e[e.LIVE = 6] = "LIVE", e[e.PRODUCT_ANALYTICS = 41] = "PRODUCT_ANALYTICS", e[e.TARGET_TEAM = 6] = "TARGET_TEAM", e[e.USER_FACING_VIDEO_ANALYTICS = 1] = "USER_FACING_VIDEO_ANALYTICS", e[e.DEFAULT = -1] = "DEFAULT"
}(Ko || (Ko = {}));
const jo = {
        [Yo.WEB_GLOBAL]: Ko.WEB_GLOBAL,
        [Yo.COPY_VIDEO_EMBED_CODE]: Ko.COPY_VIDEO_EMBED_CODE,
        [Yo.PLAYER_PERFORMANCE_MEASUREMENT]: Ko.PLAYER_PERFORMANCE_MEASUREMENT,
        [Yo.CHAPTER_SEGMENT_CLICK]: Ko.CHAPTER_SEGMENT_CLICK,
        [Yo.CLICK]: Ko.CLICK,
        [Yo.TIMING_OBJECT_CONNECT]: Ko.TIMING_OBJECT_CONNECT,
        [Yo.TIMING_OBJECT_DISCONNECT]: Ko.TIMING_OBJECT_DISCONNECT,
        [Yo.EMBEDDED_TRANSCRIPT_CLICK]: Ko.EMBEDDED_TRANSCRIPT_CLICK,
        [Yo.CLOSED_CAPTIONS_CLICK]: Ko.CLOSED_CAPTIONS_CLICK,
        [Yo.MULTI_AUDIO_TRACK_CLICK]: Ko.MULTI_AUDIO_TRACK_CLICK,
        [Yo.VIEW_PLAYER_CSAT_V1]: Ko.DEFAULT,
        [Yo.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: Ko.DEFAULT,
        [Yo.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: Ko.DEFAULT,
        [Yo.DISMISS_PLAYER_CSAT_V1]: Ko.DEFAULT,
        [Yo.DVR_MODE_ENTERED]: Ko.DEFAULT,
        [Yo.SEEK_BEHIND_LIVE_EDGE]: Ko.DEFAULT,
        [Yo.SKIP_TO_LIVE_CLICK]: Ko.DEFAULT,
        [Yo.SEEK_TO_LIVE_EDGE]: Ko.DEFAULT,
        [Yo.PLAY_VIDEO]: Ko.PLAY_VIDEO,
        [Yo.FINISH_VIDEO]: Ko.FINISH_VIDEO,
        [Yo.START_VIDEO_SCRUB]: Ko.START_VIDEO_SCRUB,
        [Yo.END_VIDEO_SCRUB]: Ko.END_VIDEO_SCRUB,
        [Yo.WATCH_VIDEO_HEARTBEAT]: Ko.WATCH_VIDEO_HEARTBEAT,
        [Yo.EMBED_SEGMENT]: Ko.EMBED_SEGMENT,
        [Yo.PLAY_SEGMENT]: Ko.PLAY_SEGMENT,
        [Yo.WATCH_FULL_VIDEO]: Ko.WATCH_FULL_VIDEO,
        [Yo.SEEK_INSIDE_SEGMENT]: Ko.SEEK_INSIDE_SEGMENT,
        [Yo.SHARE_CHAPTER]: Ko.SHARE_CHAPTER,
        [Yo.CHAPTER_PLAYED]: Ko.CHAPTER_PLAYED,
        [Yo.OPEN_AI_OPTIONS]: Ko.OPEN_AI_OPTIONS,
        [$o.TEAM]: Ko.TEAM,
        [$o.ACTION]: Ko.ACTION,
        [$o.VIEW]: Ko.VIEW,
        [$o.WEB]: Ko.WEB,
        [$o.VIDEO]: Ko.VIDEO,
        [$o.PLAYER]: Ko.PLAYER,
        [$o.LIVE]: Ko.LIVE,
        [$o.PRODUCT_ANALYTICS]: Ko.PRODUCT_ANALYTICS,
        [$o.USER_FACING_VIDEO_ANALYTICS]: Ko.USER_FACING_VIDEO_ANALYTICS,
        [$o.TARGET_TEAM]: Ko.TARGET_TEAM
    },
    zo = [$o.PLAYER, $o.VIDEO, $o.WEB, $o.TEAM],
    Xo = {
        [Yo.VIEW_PLAYER_CSAT_V1]: [].concat(zo, [$o.VIEW]),
        [Yo.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(zo, [$o.ACTION]),
        [Yo.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(zo, [$o.ACTION]),
        [Yo.DISMISS_PLAYER_CSAT_V1]: [].concat(zo, [$o.ACTION]),
        [Yo.DVR_MODE_ENTERED]: [].concat(zo, [$o.VIEW, $o.LIVE, $o.PRODUCT_ANALYTICS]),
        [Yo.SEEK_BEHIND_LIVE_EDGE]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS]),
        [Yo.SKIP_TO_LIVE_CLICK]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS]),
        [Yo.SEEK_TO_LIVE_EDGE]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS]),
        [Yo.PLAY_VIDEO]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS, $o.TARGET_TEAM, $o.USER_FACING_VIDEO_ANALYTICS]),
        [Yo.FINISH_VIDEO]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS, $o.TARGET_TEAM, $o.USER_FACING_VIDEO_ANALYTICS]),
        [Yo.START_VIDEO_SCRUB]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS, $o.TARGET_TEAM, $o.USER_FACING_VIDEO_ANALYTICS]),
        [Yo.END_VIDEO_SCRUB]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS, $o.TARGET_TEAM, $o.USER_FACING_VIDEO_ANALYTICS]),
        [Yo.WATCH_VIDEO_HEARTBEAT]: [].concat(zo, [$o.ACTION, $o.LIVE, $o.PRODUCT_ANALYTICS, $o.TARGET_TEAM, $o.USER_FACING_VIDEO_ANALYTICS]),
        [Yo.WATCH_FULL_VIDEO]: [].concat(zo, [$o.ACTION, $o.PRODUCT_ANALYTICS]),
        [Yo.SEEK_INSIDE_SEGMENT]: [].concat(zo, [$o.ACTION, $o.PRODUCT_ANALYTICS]),
        [Yo.SHARE_CHAPTER]: [].concat(zo, [$o.ACTION, $o.PRODUCT_ANALYTICS]),
        [Yo.CHAPTER_PLAYED]: [].concat(zo, [$o.ACTION, $o.PRODUCT_ANALYTICS]),
        [Yo.EMBED_SEGMENT]: [].concat(zo, [$o.VIEW, $o.PRODUCT_ANALYTICS]),
        [Yo.PLAY_SEGMENT]: [].concat(zo, [$o.ACTION, $o.PRODUCT_ANALYTICS]),
        [Yo.OPEN_AI_OPTIONS]: [$o.TEAM, $o.ACTION, $o.PRODUCT_ANALYTICS, $o.WEB, $o.VIDEO]
    };
let Zo, Jo, Qo;
! function(e) {
    e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback"
}(Zo || (Zo = {}));
const er = Ct(1e6 * Math.random(), 0);
let tr = function() {
    function e(e) {
        this.player = e, this._configure(), this._setupEventListeners()
    }
    var t = e.prototype;
    return t._configure = function() {
        const e = "PROD" === Wo(this.player.config) ? v.Service.FRESNEL_PROD : v.Service.FRESNEL_DEV,
            t = ir(Yo.WEB_GLOBAL, this.player.config),
            n = new v.Configuration(e, t);
        v.BigPictureClient.configure(n)
    }, t._setupEventListeners = function() {
        this.player.events.on(m.TIME_UPDATE, ({
            currentTime: e
        }) => {
            Qo = e
        }), this.player.events.on(Wt._transcriptSessionStarted, ({
            id: e,
            startTime: t,
            defaultLanguage: n
        }) => {
            Jo = {
                id: e,
                startTime: t,
                defaultLanguage: n
            }
        })
    }, e
}();

function nr(e) {
    return jo[e]
}

function ir(e, t, n = {}) {
    const i = function(e, t, n = {}) {
            return Object.assign({}, function(e, t) {
                var n, i, r, a, s;
                const {
                    user: l,
                    request: c,
                    video: d,
                    embed: u
                } = t;
                switch (e) {
                    case Yo.WEB_GLOBAL:
                        return {
                            user: {
                                subscription_type: l.account_type || null,
                                is_mod: !!l.mod,
                                session_id: c.session || null,
                                teams: l.team_id ? [{
                                    team_id: l.team_id,
                                    team_role: co(t)
                                }] : [],
                                user_id: l.id || null,
                                vuid: No("vuid") || null,
                                flags: c.flags ? Object.keys(c.flags) : null,
                                is_free_trial: !1
                            },
                            application: {
                                application: "vimeo",
                                vimeo_language: c.lang || "en",
                                product: oo(t),
                                build_environment: "production",
                                version: ro()
                            },
                            platform: {
                                device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                                screen: {
                                    dpi: screen.pixelDepth,
                                    height: screen.height,
                                    width: screen.width,
                                    size: `${screen.width} x ${screen.height}`
                                },
                                network: null,
                                platform: "web"
                            }
                        };
                    case Yo.COPY_VIDEO_EMBED_CODE:
                        return {
                            hash: d.unlisted_hash,
                            height: d.height,
                            is_video_password_protected: "password" === d.privacy,
                            product: Zo.WORKFLOW,
                            sizing: u.playsinline ? "fixed" : "responsive",
                            video_embed_privacy: d.embed_permission,
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            width: d.width,
                            actor_resource_role: null,
                            actor_team_role: null,
                            entry_page: null,
                            is_preset_applied: null,
                            location: null,
                            page: null,
                            path: null,
                            team_owner_id: null,
                            team_size: null,
                            team_subscription_type: null,
                            upload_id: null,
                            video_app_id: null,
                            video_status: null,
                            video_type: null
                        };
                    case Yo.PLAYER_PERFORMANCE_MEASUREMENT:
                        return {
                            module_player: !1,
                            device_type: so(),
                            browser: Object.keys(o.browser).find(e => o.browser[e]) || "",
                            device_os: lo(),
                            iframed: Ao(),
                            measurement_type: null,
                            measurement_value: null
                        };
                    case Yo.CHAPTER_SEGMENT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: d.owner.id,
                            is_creator_mode: !!l.owner,
                            chapter_seek_event_delta: null,
                            fragment_no_chapters_at_seek: null,
                            is_chapter_seek: null,
                            nearest_chapter_start_time: null,
                            seek_event_start_time: null,
                            total_no_chapters_at_seek: null
                        };
                    case Yo.CLICK:
                        return {
                            page: Zi(t),
                            click_type: null,
                            copy: null,
                            device_type: null,
                            feature: null,
                            location: null,
                            name: null,
                            path: null,
                            target: null,
                            target_path: null,
                            type: null
                        };
                    case Yo.EMBEDDED_TRANSCRIPT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: d.owner.id,
                            total_clip_duration: Ct(d.duration, 2),
                            embedded_transcript_session_id: null == (r = Jo) ? void 0 : r.id,
                            session_duration: Ct(jn(null == (a = Jo) ? void 0 : a.startTime), 2),
                            default_transcript_language: null == (s = Jo) ? void 0 : s.defaultLanguage,
                            video_timestamp: Ct(Qo, 2) || 0,
                            copy: null,
                            current_transcript_language: null,
                            element: null,
                            location: null,
                            name: null
                        };
                    case Yo.CLOSED_CAPTIONS_CLICK:
                        return {
                            video_id: d.id,
                            video_privacy: d.privacy,
                            final_action_reset_all: null,
                            has_changed_background: null,
                            has_changed_font: null,
                            has_changed_window: null,
                            has_clicked_background: null,
                            has_clicked_window: null,
                            has_clicked_customize: null,
                            has_clicked_font: null,
                            has_customized: null,
                            has_reset_all: null,
                            language_selected: null
                        };
                    case Yo.MULTI_AUDIO_TRACK_CLICK:
                        return {
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            video_owner_id: `${d.owner.id}`,
                            page: Zi(t),
                            event_name: null,
                            has_selected_track: null,
                            initial_track: null,
                            track_selected: null
                        };
                    case Yo.OPEN_AI_OPTIONS:
                        return {
                            if_uploader: !!l.owner,
                            value: null
                        };
                    default:
                        return {}
                }
            }(e, t), n)
        }(e, t, n),
        r = nr(e);
    return new v.Event(e, r, i)
}

function or(e, t, n = {}, i = {}) {
    const r = ir(e, t, n),
        a = function(e, t, n = {}) {
            const i = Xo[e];
            return i ? i.reduce((e, i) => {
                var r;
                if (i === $o.LIVE && !(null == (r = t.video) ? void 0 : r.live_event_id)) return e;
                const a = nr(i),
                    s = n[i] || {},
                    l = function(e, t, n = {}) {
                        return Object.assign({}, function(e, t) {
                            var n, i, r, a;
                            const {
                                embed: s,
                                user: l,
                                request: c,
                                video: d
                            } = t;
                            switch (e) {
                                case $o.TEAM:
                                    return {
                                        team_owner_id: l.team_origin_user_id,
                                        team_subscription_type: l.account_type,
                                        team_role: co(t),
                                        team_id: l.team_id,
                                        joined_team_at: null,
                                        resource_permission_level: null,
                                        team_size: null
                                    };
                                case $o.WEB:
                                    return {
                                        location: "player",
                                        page_name: Zi(t),
                                        referrer: c.referrer,
                                        copy: null,
                                        path: null,
                                        referrer_page_name: null,
                                        target: null,
                                        target_path: null
                                    };
                                case $o.VIDEO:
                                    return {
                                        video_id: d.id,
                                        title: d.title,
                                        video_privacy: d.privacy,
                                        video_embed_privacy: d.embed_permission,
                                        content_rating: [`${null==(n=d.rating)?void 0:n.id}`],
                                        duration: Math.round(d.duration),
                                        resolution: `${d.width}x${d.height}`,
                                        video_height: d.height,
                                        video_width: d.width,
                                        orientation: uo(d.width, d.height),
                                        is_auto_cc_enabled: null,
                                        upload_method_api: null,
                                        upload_method_api_id: null,
                                        is_demo: null,
                                        video_owner_id: d.owner.id,
                                        video_owner_account_type: d.owner.account_type,
                                        video_categories: null,
                                        has_embed_available: !!s.settings.embed,
                                        video_version_id: vo(null == (i = d.version) ? void 0 : i.available),
                                        embed_context: s.context
                                    };
                                case $o.PLAYER:
                                    return {
                                        player_session_id: c.session,
                                        total_video_duration: d.duration,
                                        video_timestamp: Ct(Qo, 2) || 0
                                    };
                                case $o.ACTION:
                                    return {
                                        feature: "player",
                                        action_type: o.touch ? "tap" : "click"
                                    };
                                case $o.VIEW:
                                    return {
                                        feature: "player",
                                        view_type: "impression"
                                    };
                                case $o.LIVE:
                                    return {
                                        recurring_live_event_id: `${d.live_event_id}`,
                                        live_event_id: null,
                                        live_status: po(null == d ? void 0 : d.live_event),
                                        live_production_method: null,
                                        encoder_type: null,
                                        audience_type: _o(d),
                                        lead_source: null,
                                        event_privacy: mo(d.privacy),
                                        live_feature: null,
                                        is_guest_speaker: null
                                    };
                                case $o.PRODUCT_ANALYTICS:
                                    return {
                                        product: "viewer_experience",
                                        feature: "player",
                                        location: "player",
                                        modal_name: null,
                                        flow: null,
                                        element: null,
                                        copy: null,
                                        device_type: so(),
                                        is_user_facing_data: null,
                                        entity_type: null
                                    };
                                case $o.TARGET_TEAM:
                                    return {
                                        is_team_member: !!l.team_id,
                                        team_owner_id: l.team_origin_user_id,
                                        team_subscription_type: l.account_type,
                                        team_role: co(t),
                                        team_id: l.team_id,
                                        team_size: null,
                                        resource_permission_level: null,
                                        joined_team_at: null
                                    };
                                case $o.USER_FACING_VIDEO_ANALYTICS:
                                    return {
                                        session_ts: null == c ? void 0 : c.timestamp,
                                        session_id: er,
                                        lead_id: (null == l || null == (r = l.lead) ? void 0 : r.id) || null,
                                        content_type: (null == l || null == (a = l.lead) ? void 0 : a.type) || null,
                                        is_vimeo_source: !0,
                                        is_do_not_track: !!s.dnt
                                    };
                                default:
                                    return {}
                            }
                        }(e, t), n)
                    }(i, t, s);
                return e[i] = new v.EventContext(i, a, l), e
            }, {}) : {}
        }(e, t, i);
    v.BigPictureClient.sendEventWithContexts(r, a)
}

function rr(t) {
    let n, i = null,
        r = null,
        a = null,
        s = null,
        l = 0,
        c = 0,
        d = [],
        u = !1,
        p = !1,
        _ = !1,
        v = 0,
        g = 0,
        b = !0,
        E = !0;

    function y() {
        if (t.backbone.isLive()) {
            const e = ({
                currentTime: n
            }) => {
                0 !== n && (C(), t.events.off(m.TIME_UPDATE, e))
            };
            t.events.on(m.TIME_UPDATE, e)
        } else C()
    }

    function C() {
        A(), u = !0, I(), or(Yo.PLAY_VIDEO, t.config, k(Yo.PLAY_VIDEO)), s = a
    }

    function T() {
        t.backbone.seeking || (u = !1, w(), or(Yo.FINISH_VIDEO, t.config, k(Yo.FINISH_VIDEO)), E = !1, S(), t.config.embed.loop || t.events.once(m.PLAY, y))
    }

    function L() {
        u && p && !_ && (p = !1, I(), or(Yo.END_VIDEO_SCRUB, t.config, k(Yo.END_VIDEO_SCRUB)), s = a, A())
    }

    function w() {
        let e = v;
        (t.backbone.seeking || _) && (e = g), a = Ct(e, 3), l && (or(Yo.WATCH_VIDEO_HEARTBEAT, t.config, function() {
            const e = k(Yo.WATCH_VIDEO_HEARTBEAT);
            return h(h({}, e), {}, {
                log_view_time: l,
                log_view_time_excluding_repeats: c,
                previous_log_end_time: s,
                is_first_log: b
            })
        }()), l = 0, c = 0, b = !1, s = a)
    }

    function A() {
        n || (n = setInterval(w, 1e4))
    }

    function S() {
        clearInterval(n), n = null
    }

    function I() {
        const e = Ct(zn(t.currentTime), 3);
        i ? i++ : i = 1, r = e, a = e, l = 0, c = 0, g = e
    }

    function k(e) {
        let n;
        switch (e) {
            case Yo.FINISH_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: r,
                    log_end_time: a,
                    is_first_log: E
                };
                break;
            case Yo.PLAY_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: r,
                    log_end_time: a,
                    video_duration_ms: Io(t.backbone)
                };
                break;
            default:
                n = {
                    session_segment_id: i,
                    segment_start_time: r,
                    log_end_time: a
                }
        }
        return n
    }
    t.events.once(m.PLAY, y), t.events.on(m.PAUSE, (function() {
        t.backbone.ended || t.backbone.seeking || _ || (w(), S())
    })), t.events.on(m.SEEKING, (function() {
        u && !p && (p = !0, w(), or(Yo.START_VIDEO_SCRUB, t.config, k(Yo.START_VIDEO_SCRUB)), S())
    })), t.events.on(m.SEEKED, f(L, 750)), t.events.on(m.ENDED, T), t.events.on(m.TIME_UPDATE, (function() {
        v = zn(Ct(t.currentTime, 3));
        const n = _ ? g : v,
            i = Ct(n - g, 3),
            a = [r, n];
        if (!(i <= 0 || t.backbone.seeking)) {
            if (l += i, o.iOS && t.backbone.isLive()) {
                c += Ct(So(d, a), 3);
                const t = function(e, t) {
                    const [n, i] = t;
                    return e.map((e, t) => {
                        const [o, r] = e;
                        return n >= o && n <= r || i >= o && i <= r || o <= n && r >= i || n <= o && i >= r ? t : null
                    }).filter(e => null !== e)
                }(d, a);
                d = function(t, n, i) {
                    const [o, r] = n;
                    let a;
                    if (i.length) a = Math.min.apply(Math, e(i));
                    else {
                        const e = t.findIndex(e => o < e[0]);
                        a = -1 === e ? t.length : e
                    }
                    const s = e(t),
                        l = [Math.min.apply(Math, [o].concat(e(i.map(e => t[e][0])))), Math.max.apply(Math, [r].concat(e(i.map(e => t[e][1]))))];
                    return s.splice(a, i.length, l), s
                }(d, a, t)
            } else {
                const e = t.backbone.played;
                c += Ct(So(d, a), 3), d = function(e) {
                    const t = e.length,
                        n = [];
                    for (let i = 0; i < t; i++) {
                        const t = e.start(i),
                            o = e.end(i);
                        n.push([zn(Ct(t, 3)), zn(Ct(o, 3))])
                    }
                    return n
                }(e)
            }
            g = n, t.config.embed.loop && function(e) {
                if (u && e >= Io(t.backbone) - 300) {
                    T();
                    const e = () => {
                        t.currentTime >= 0 && (t.events.off(m.TIME_UPDATE, e), C())
                    };
                    t.events.on(m.TIME_UPDATE, e)
                }
            }(v)
        }
    })), t.events.on(Wt._scrubbingStarted, (function() {
        _ = !0
    })), t.events.on(Wt._scrubbingEnded, (function() {
        _ = !1, p && L()
    })), t.events.on(Wt._configChanged, e => {
        e && (S(), i = null, r = null, a = null, s = null, l = 0, c = 0, d = [], u = !1, p = !1, _ = !1, v = 0, g = 0, E = !0, b = !0)
    }), window.addEventListener("pagehide", (function() {
        w()
    }))
}

function ar(e) {
    return Math.random() <= e
}

function sr(e, t, n = .1) {
    ar(n) && ((e, t = {}) => {
        if (Uo && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1,
                player_lifespan_seconds: Math.round((Date.now() - Ho) / 1e3)
            });
            newrelic.noticeError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", e => {
    e.preventDefault(), e.reason && sr(e.reason, {
        unhandled_rejection: 1
    })
});
var lr = {
    setUp: function(e) {
        ((e, t = Ci.VimeoPlayer) => {
            Uo && (((e, t) => {
                var n, i, o;
                const r = {
                    environment: "dev" === e.request.build.js ? "dev" : "production",
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: oo(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: 1 === (null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.background) ? 1 : 0,
                    player_name: t
                };
                if (e.request.ab_tests)
                    for (const a in e.request.ab_tests) {
                        const t = e.request.ab_tests[a];
                        r[`${a}_test`] = 1, r[`${a}_group`] = t.group;
                        for (const e in t.data) r[`${a}_data_${e}`] = t.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let a in r) newrelic.setCustomAttribute(a, r[a])
            })(e, t), newrelic.setErrorHandler((function(t) {
                var n;
                return !!((e, t) => {
                    var n;
                    return !!(o.appleMail || !t.request || Fo || qo.some(t => {
                        var n, i;
                        return (null == e || null == (n = e.message) ? void 0 : n.includes(t)) || (null == e || null == (i = e.name) ? void 0 : i.includes(t))
                    }) || (null == e || null == (n = e.message) ? void 0 : n.startsWith("ReportingObserver")) && Math.random() > .01)
                })(t, e) || ((null == t || null == (n = t.message) ? void 0 : n.startsWith("Non-Error exception captured")) && newrelic.addToTrace({
                    name: "nonErrorException",
                    start: Date.now()
                }), !1)
            })))
        })(e.config)
    },
    captureException: sr,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            Uo && newrelic.addToTrace({
                name: e,
                start: Date.now()
            })
        })(e)
    }
};
let cr;

function dr({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function s() {
        return n && n - 6e4 <= Date.now()
    }

    function l(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout(() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(lr.captureException))
        }, 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, s;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) return t = e, n = l(t.request.expires), Promise.resolve({
            old: c,
            loaded: t
        });
        Date.now(), a = b(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), a.video.webinar && a.video.webinar.registrant && (i.webinar_registrant_uuid = a.video.webinar.registrant), cr || (cr = bt(e));
        const u = Et(cr || ((null == (o = t) ? void 0 : o.player_url) ? `https://${null==(s=t)?void 0:s.player_url}` : ""), e, i);
        return g(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then(e => (t = e, t.view !== Kt.error && (n = l(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        })).catch(e => {
            lr.captureException(e)
        })
    }

    function d() {
        var i;
        clearTimeout(r), Date.now();
        const a = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: s,
                session: c,
                timestamp: d,
                expires: u
            } = t.request,
            p = t.request.ott_chromecast_token;
        let _ = `https://${t.player_url}/video/${t.video.id}/config/request?session=${c}&signature=${s}&time=${d}&expires=${u}`;
        return p && (_ = `${_}&ott_chromecast_token=${p}`), a && (_ += `${-1===_.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(a)}`), g(_, {
            withCredentials: !0,
            retry: 3
        }).json().then(i => (t.request = i, a && (t.request.referrer = a), n = l(t.request.expires), Date.now(), o = null, e.fire(Wt._requestConfigReloaded), t.request)).catch(t => {
            const n = {
                id: "network",
                title: "Network error",
                message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
                final: !0
            };
            throw e.fire(Wt._error, n.id, n), t
        })
    }
    return window.addEventListener("online", () => {
        s() && (o = d().catch(lr.captureException))
    }), e.on(Wt._error, e => {
        o || "media-url-expired" !== e || (o = d().catch(lr.captureException))
    }), {
        get isExpired() {
            return s()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return (null == (e = t) ? void 0 : e.video.id) ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => s() ? (o || (o = d()), o) : Promise.resolve(t.request),
        loadRequest: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}

function ur(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function pr({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const s = parseInt(e, 10),
        l = parseInt(t, 10);
    return 0 === s || isNaN(s) || (r ? a.w = s : a.mw = s), 0 === l || isNaN(l) || (r ? a.h = l : a.mh = l), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function _r(e) {
    return function(e) {
        return new Promise((t, n) => {
            const i = new Image;

            function o() {
                lr.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        })
    }(e).catch(t => (lr.captureException(t, {
        extra: {
            imageUrl: e
        }
    }), new Promise(() => {})))
}
const vr = {
        id: "7742C69E",
        name: "prod"
    },
    mr = {
        id: "BA42D416",
        name: "prod"
    },
    fr = {
        id: "78077C77",
        name: "prod"
    },
    hr = {
        connected: Pt(),
        disconnected: Pt(),
        playing: Pt(),
        paused: Pt(),
        buffering: Pt(),
        idle: Pt(),
        ended: Pt(),
        initialized: Pt(),
        castStateChanged: Pt(),
        sessionStateChanged: Pt(),
        timeUpdated: Pt(),
        mediaLoadedSuccess: Pt(),
        mediaLoadedFailed: Pt(),
        error: Pt()
    };
let gr = function() {
    function e({
        player: e,
        textAlert: t = null
    }) {
        this._textAlert = t, this._player = e, this._onControlSeek = this.onControlSeek.bind(this), this._onChangeVolume = this.onChangeVolume.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onVolumeLevelChanged = this.onVolumeLevelChanged.bind(this), this._onIsMutedChanged = this.onIsMutedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = L(this._endVideo, 500)
    }
    var t = e.prototype;
    return t.calculateStartTime = function(e = null) {
        let t = Number(e) || this._player.backbone.currentTime - 7;
        return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
    }, t.loadMedia = function({
        contentId: e,
        currentTime: t = null,
        duration: n = null,
        token: i = null,
        bypassToken: o = null,
        autoRequest: r = !1,
        autoCaption: a = !0,
        autoDisconnect: s = !0,
        tracks: l = []
    } = {}) {
        if (br.isLoadingMedia) return Promise.resolve(!1);
        const c = this._player.config;
        e = e || c.video.id;
        const u = c.request,
            p = u.drm;
        let _;
        if (null == p ? void 0 : p.fastly) {
            const t = d(u, "files.dash.default_cdn");
            e = d(u, `files.dash.cdns.${t}.url`), _ = d(p, "cdms.widevine.license_url"), l = (u.text_tracks || []).map(e => {
                const {
                    pathname: t,
                    search: n
                } = E(e.url);
                return h(h({}, e), {}, {
                    url: `https://player.vimeo.com${t}${n}`
                })
            })
        }
        const v = this.calculateStartTime(t);
        n = Number(n) || this.duration, i = i || c.user.vimeo_api_client_token, o = o || c.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
        const m = {
            contentId: e,
            duration: n,
            autoRequest: r,
            tracks: l,
            currentTime: v,
            requestCustomData: {
                token: i,
                bypassToken: o,
                tokenType: "jwt"
            }
        };
        return this._player.config.request.ott_chromecast_token && (m.requestCustomData.ottChromecastToken = this._player.config.request.ott_chromecast_token), this._player.config.ottCastOptions && (m.ottCastOptions = this._player.config.ottCastOptions), (_ ? this._getLicenseUrl(_).then(e => h(h({}, m), {}, {
            mediaCustomData: {
                widevineLicenseServerURL: e
            }
        })) : Promise.resolve(m)).then(e => br.loadMedia(e)).then(() => (br.fire(hr.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._player.events.fire(y), this._player.events.fire(Nt._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._player.backbone.enabledTextTrack), this._player.backbone.paused || this._player.backbone.pause(), !0)).catch(e => (br.fire(hr.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e)))
    }, t._getLicenseUrl = function(e) {
        return new Promise((t, n) => {
            const i = new XMLHttpRequest;
            i.open("GET", e), i.onload = () => {
                const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                if (i.status >= 200 && i.status < 300) try {
                    t(i.response)
                } catch (Te) {
                    n(e(Te))
                } else n(e(i.status))
            }, i.onerror = n, i.send()
        })
    }, t.init = function() {
        this.removeInitListeners(), this.addInitListeners()
    }, t.addInitListeners = function() {
        this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
    }, t.endCurrentSession = function(e = !0) {
        br.castContext && br.castContext.endCurrentSession(e)
    }, t.syncBackbone = function() {
        !this.isOutroRendered && this._player.backbone.paused && (this._player.backbone.currentTime = this.lastCurrentTime, this.syncTime())
    }, t.stopBackbone = function() {
        this._player.events.fire(Nt._reset)
    }, t.storeBackboneData = function() {
        this.lastCurrentTime = this._player.backbone.currentTime
    }, t.applyBackboneData = function() {
        this.lastCurrentTime && (this._player.backbone.currentTime = this.lastCurrentTime)
    }, t.enableUI = function() {
        if (this._textAlert) {
            var e;
            const t = null == (e = br.currentSessionObj) ? void 0 : e.receiver;
            t && this._textAlert.show("Casting on " + t.friendlyName)
        }
        this._player.preview.show(), this._player.element.classList.add("is-casting")
    }, t.disableUI = function() {
        this._textAlert && this._textAlert.hide(), this.isOutroRendered || (this._player.preview.hide(), this._player.backbone.element.classList.remove("invisible")), this._player.element.classList.remove("is-casting")
    }, t.syncTime = function() {
        const e = this.lastCurrentTime / this.duration;
        br.fire(hr.timeUpdated, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            percent: e
        }), e > 0 && this._player.events.fire(m.TIME_UPDATE, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            timeProgress: e
        })
    }, t._endVideo = function() {
        return this._isEndOfVideo = !0, this._player.events.fire(Wt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch(() => {
            this.showOutro()
        }) : this.showOutro(), br.fire(hr.ended), !0
    }, t.showOutro = function() {
        this.isOutroRendered || (this._isOutroRendered = !0, this._player.events.fire(Nt._showOutro))
    }, t.dispose = function() {
        this.endCurrentSession(), this.removeAllRemoteListeners()
    }, t.onIsMediaLoadedChanged = function(e) {
        !1 === e.value ? this.isTimeEnded && this.endVideo() : this._player.backbone.paused || this._player.backbone.pause()
    }, t.onPlayerStateChanged = function(e) {
        switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
            case br.PlayerState.PLAYING:
                br.fire(hr.playing);
                break;
            case br.PlayerState.PAUSED:
                br.fire(hr.paused);
                break;
            case br.PlayerState.BUFFERING:
                br.fire(hr.buffering);
                break;
            case br.PlayerState.IDLE:
            default:
                br.fire(hr.idle)
        }
    }, t.onVolumeLevelChanged = function(e) {
        this._player.events.fire(Nt._changeVolume, e.value, !0)
    }, t.onIsMutedChanged = function(e) {
        this._player.events.fire(Nt._changeVolume, e.value ? 0 : br.remotePlayer.volumeLevel, !0)
    }, t.onCurrentTimeChanged = function(e) {
        this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
    }, t.onChangeVolume = function(e) {
        this.volumeLevel = e
    }, t.onCaptionsChanged = function(e) {
        const t = br.currentSession;
        t && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
            action: "setActiveByLanguage",
            value: null == e ? void 0 : e.language
        })
    }, t.onSessionStateChanged = function(e) {
        switch (e.sessionState) {
            case br.SessionState.SESSION_STARTING:
                this.addPreventLocalPlayerEvents();
                break;
            case br.SessionState.SESSION_RESUMED:
            case br.SessionState.SESSION_STARTED:
                this.loadMedia();
                break;
            case br.SessionState.SESSION_ENDING:
            case br.SessionState.SESSION_ENDED:
                break;
            case br.SessionState.SESSION_START_FAILED:
                this.removePreventLocalPlayerEvents()
        }
        br.fire(hr.sessionStateChanged, e.sessionState)
    }, t.onCastStateChanged = function(e) {
        br.fire(hr.castStateChanged)
    }, t.onIsConnectedChanged = function(e) {
        e.value ? this.onConnected() : this.onDisconnected()
    }, t.onConnected = function() {
        this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), br.fire(hr.connected)
    }, t.onDisconnected = function() {
        this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), br.fire(hr.disconnected)
    }, t.onConfigChanged = function() {
        this.loadMedia()
    }, t.onReset = function() {
        this.loadMedia()
    }, t.onPlayOrPausePressed = function() {
        this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && br.remotePlayerController.playOrPause(), this._player.events.halt()
    }, t.onControlSeek = function(e) {
        this.currentTime = e, this._player.events.halt()
    }, t.addSessionStateListener = function() {
        br.castContext && br.castContext.addEventListener(br.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
    }, t.addCastStateListener = function() {
        br.castContext && br.castContext.addEventListener(br.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
    }, t.addMessageListener = function() {
        const e = br.currentSession;
        e && e.addMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.onMessageReceived = function(e, t) {
        "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), br.fire(hr.error, new Error("Chromecast encountered an error and media finished."))))
    }, t.addIsConnectedListener = function() {
        br.remotePlayerController && br.remotePlayerController.addEventListener(br.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.addPreventLocalPlayerEvents = function() {
        this._player.events.prependOn([Wt._playButtonPressed, Wt._pauseButtonPressed, Wt._scrubbingStarted, Wt._scrubbingEnded, C.BUFFER_STARTED, C.BUFFER_ENDED, Nt._seek, Wt._volumeChanged, Wt._captionsChanged, Wt._configChanged, Nt._reset], this._preventPlayerDefaultEvent)
    }, t.addRemotePlayerListenersOnIdle = function() {
        this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
    }, t.addLocalPlayerListeners = function() {
        this._player.events.prependOn(Wt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Wt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Wt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.prependOn(Wt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.prependOn(C.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.prependOn(C.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.prependOn(Nt._seek, this._onControlSeek), this._player.events.prependOn(Wt._volumeChanged, this._onChangeVolume), this._player.events.on(Wt._captionsChanged, this._onCaptionsChanged), this._player.events.on(Wt._configChanged, this._onConfigChanged), this._player.events.on(Nt._reset, this._onReset)
    }, t.preventPlayerDefaultEvent = function() {
        this._player.events.halt()
    }, t.addCurrentTimeChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.addEventListener(br.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.addIsMediaLoadedChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.addEventListener(br.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.addPlayerStateChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.addEventListener(br.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.addVolumeLevelChangedListener = function() {
        br.remotePlayerController && (br.remotePlayerController.addEventListener(br.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), br.remotePlayerController.addEventListener(br.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.addRemotePlayerListenersOnPlaying = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
    }, t.removeRemotePlayerListenersOnIdle = function() {
        this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
    }, t.removeInitListeners = function() {
        br.castContext && (br.castContext.removeEventListener(br.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), br.castContext.removeEventListener(br.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), br.remotePlayerController && br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.removeRemotePlayerListenersOnPlaying = function() {
        this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
    }, t.removeMessageListener = function() {
        const e = br.currentSession;
        e && e.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.removeCurrentTimeChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.removeIsMediaLoadedChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.removePlayerStateChangedListener = function() {
        br.remotePlayerController && br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.removeVolumeLevelChangedListener = function() {
        br.remotePlayerController && (br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), br.remotePlayerController.removeEventListener(br.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.removePreventLocalPlayerEvents = function() {
        this._player.events.off([Wt._playButtonPressed, Wt._pauseButtonPressed, Wt._scrubbingStarted, Wt._scrubbingEnded, C.BUFFER_STARTED, C.BUFFER_ENDED, Nt._seek, Wt._volumeChanged, Wt._captionsChanged, Wt._configChanged, Nt._reset], this._preventPlayerDefaultEvent)
    }, t.removeLocalPlayerListeners = function() {
        this._player.events.off(Wt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Wt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Wt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.off(Wt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.off(C.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.off(C.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.off(Nt._seek, this._onControlSeek), this._player.events.off(Wt._volumeChanged, this._onChangeVolume), this._player.events.off(Wt._captionsChanged, this._onCaptionsChanged), this._player.events.off(Wt._configChanged, this._onConfigChanged), this._player.events.off(Nt._reset, this._onReset)
    }, t.removeRemotePlayerListeners = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
    }, t.removeAllRemoteListeners = function() {
        this.removeRemotePlayerListeners(), this.removeInitListeners()
    }, T(e, [{
        key: "currentTime",
        get: function() {
            return this.lastCurrentTime || 0
        },
        set: function(e) {
            br.remotePlayer && br.remotePlayerController && (br.remotePlayer.currentTime = e, br.remotePlayerController.seek(), this.lastCurrentTime = e)
        }
    }, {
        key: "isTimeEnded",
        get: function() {
            return this.lastCurrentTime + .5 >= this.duration
        }
    }, {
        key: "isOutroRendered",
        get: function() {
            return this._isOutroRendered || !1
        }
    }, {
        key: "isLooped",
        get: function() {
            return this._player.config.embed.loop
        }
    }, {
        key: "isEndOfVideo",
        get: function() {
            return this._isEndOfVideo || !1
        }
    }, {
        key: "volumeLevel",
        set: function(e) {
            br.remotePlayer && br.remotePlayerController && (br.remotePlayer.volumeLevel = e, br.remotePlayerController.setVolumeLevel())
        },
        get: function() {
            return br.remotePlayer ? br.remotePlayer.volumeLevel : 0
        }
    }, {
        key: "duration",
        get: function() {
            return this._player.config.video.duration
        }
    }, {
        key: "isPlayingOrPaused",
        get: function() {
            return br.remotePlayer ? br.remotePlayer.playerState === br.PlayerState.PLAYING || br.remotePlayer.playerState === br.PlayerState.PAUSED : null
        }
    }, {
        key: "isIdle",
        get: function() {
            return br.remotePlayer ? null === br.remotePlayer.playerState || br.remotePlayer.playerState === br.PlayerState.IDLE : null
        }
    }, {
        key: "isMediaLoaded",
        get: function() {
            return !!br.remotePlayer && br.remotePlayer.isMediaLoaded
        }
    }]), e
}();
const br = w(new(function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    A(t, e);
    var n = t.prototype;
    return n.init = function({
        appId: t,
        chromecastPlayer: n = null
    } = {}) {
        var i, o;
        return t || (t = (null == n || null == (i = n._player) ? void 0 : i.config.request.flags.ott) ? (null == n || null == (o = n._player) ? void 0 : o.config.ottCastOptions) ? n._player.config.ottCastOptions.appId ? n._player.config.ottCastOptions.appId : mr.id : fr.id : vr.id), this.chromecastPlayer = n, this.setup().then(n => (n && (e.prototype.init.call(this, {
            receiverApplicationId: t,
            autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
        }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(hr.initialized)), n)).catch(e => (this.fire(hr.error, e), Promise.reject(e)))
    }, n.dispose = function() {
        this.chromecastPlayer = null
    }, T(t, [{
        key: "chromecastPlayer",
        get: function() {
            return this._chromecastPlayer
        },
        set: function(e) {
            if (e && !(e instanceof gr)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
            this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
        }
    }]), t
}(S)));

function Er(e) {
    return e.replace(/(_\w)/g, e => e[1].toUpperCase())
}

function yr(e) {
    return function e(t, n) {
        return Object.keys(n).reduce((i, o) => (n[o] && "object" == typeof n[o] ? i[t(o)] = e(t, n[o]) : i[t(o)] = n[o], i), {})
    }(Er, e)
}
const Cr = e => ({
        type: "CONFIG_LOAD",
        payload: h({}, yr(e))
    }),
    Tr = e => ({
        type: "LIVE_SETTINGS_UPDATE",
        payload: e
    });

function Lr(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.liveEvent ? h(h({}, e), n.video.liveEvent) : null;
        case "LIVE_UPDATE":
            return h(h({}, e), n);
        case "LIVE_SET_START_TIME":
            return h(h({}, e), {}, {
                ingest: h(h({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return h(h({}, e), {}, {
                settings: h(h({}, e.settings), n)
            });
        default:
            return e
    }
}
const wr = e => {
        var t;
        return !!(null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Ar = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    Sr = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.scheduledStartTime) || null
    },
    Ir = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.startTime) || null
    },
    kr = e => {
        var t;
        return "pending" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Pr = e => {
        var t;
        return "active" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Or = e => {
        var t;
        return "started" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Rr = e => {
        var t;
        return "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Nr = e => wr(e) && !Rr(e),
    Dr = e => {
        var t, n;
        return "done" === (null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status)
    },
    Mr = e => {
        var t, n;
        return null == e || null == (t = e.liveEvent) || null == (n = t.settings) ? void 0 : n.eventSchedule
    };
var xr = Object.freeze({
    __proto__: null,
    default: Lr,
    liveExists: wr,
    liveStatus: Ar,
    liveArchiveStatus: e => {
        var t, n;
        return null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status
    },
    dashLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.dash_noredirect
    },
    hlsLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.hls
    },
    scheduledLiveStartTime: Sr,
    liveStartTime: Ir,
    isLivePending: kr,
    isLiveActive: Pr,
    isLiveStarted: Or,
    isLiveEnded: Rr,
    liveInProgress: Nr,
    isLiveArchived: Dr,
    hasEventSchedule: Mr
});

function Br(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Vr() {}

function Ur(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Te) {
            return Promise.reject(Te)
        }
    }
}
const Fr = Ur((function(e) {
        return new Promise((t, n) => {
            qr(e) ? t() : (e.events.once(m.LOADED_DATA, () => {
                qr(e) && t()
            }), e.events.once(m.PLAYING, () => {
                n("Video started playing before start time thumbnail could be shown")
            }))
        })
    })),
    Hr = Ur((function(e) {
        return function(t) {
            var n = function() {
                if (Gr(e)) return function(e) {
                    if (e && e.then) return e.then(Vr)
                }(function(t, n) {
                    try {
                        var i = Br(e.ready(), (function() {
                            return Br(e.inView(), (function() {
                                return e.backbone.preload = "auto", Br(Fr(e), (function() {
                                    ! function(e) {
                                        var t, n;
                                        null == (t = e.backbone.element) || null == (n = t.classList) || n.remove("invisible"), e.preview.hide()
                                    }(e)
                                }))
                            }))
                        }))
                    } catch (Te) {
                        return
                    }
                    return i && i.then ? i.then(void 0, n) : i
                }(0, (function(e) {})))
            }();
            if (n && n.then) return n.then(Vr)
        }()
    }));

function qr(e) {
    return e.currentTime === e.startTime && e.backbone.readyState >= Ai.HAVE_CURRENT_DATA
}

function Gr(e) {
    var t, n;
    const i = 1 === (null == e || null == (t = e.config) || null == (n = t.embed) ? void 0 : n.autoplay);
    return o.videoContentPreload && e.segmentedPlaybackEnabled && !i
}

function Wr(e) {
    return !!Gr(e) && e.backbone.readyState < Ai.HAVE_CURRENT_DATA
}
const Yr = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Te) {
            return Promise.reject(Te)
        }
    }
}((function(e) {
    const {
        events: t
    } = e;
    return new Promise(n => {
        t.on(Wt._parentUrlAvailable, (function(i) {
            const {
                backbone: o
            } = e, {
                startTime: r,
                endTime: a
            } = function(e, t) {
                const {
                    video: n,
                    embed: i
                } = t.config, o = n.id, r = n.duration, a = i.chapters, s = function(e, t) {
                    return Ei(e, "chapter", t)
                }(e, o);
                let l, c;
                return s ? (({
                    startTime: l,
                    endTime: c
                } = Kr(s, a)), zr(t, s)) : (l = function(e, t) {
                    return Ei(e, Jt, t)
                }(e, o), c = function(e, t) {
                    return Ei(e, "end", t)
                }(e, o)), ({
                    startTime: l,
                    endTime: c
                } = jr(l, c, r)), {
                    startTime: l,
                    endTime: c
                }
            }(i, e);
            n({
                startTime: r,
                endTime: a
            }), null !== r && o.currentTime !== r && t.fire(Nt._setTime, r, r / o.duration)
        }))
    })
}));

function $r(e) {
    const {
        video: t,
        embed: n
    } = e.config;
    let i;
    if (!(null == t ? void 0 : t.live_event)) {
        let i = null,
            r = null;
        const a = function(e, t) {
            return gi(e.hash, "chapter", t)
        }(document.location, t.id);
        a ? (({
            startTime: i,
            endTime: r
        } = Kr(a, n.chapters)), zr(e, a)) : ({
            startTime: i,
            endTime: r
        } = function(e, t) {
            let n = function(e, t) {
                    return gi(e.hash, Jt, t)
                }(document.location, e),
                i = function(e, t) {
                    return gi(e.hash, "end", t)
                }(document.location, e);
            var o, r;
            return null !== n && function(e) {
                var t; - 1 !== e.indexOf("at=") && (null == (t = history) ? void 0 : t.replaceState) && history.replaceState("", "", window.location.pathname + window.location.search)
            }(null == (o = document) || null == (r = o.location) ? void 0 : r.hash), ({
                startTime: n,
                endTime: i
            } = jr(n, i, t)), {
                startTime: n,
                endTime: i
            }
        }(t.id, t.duration)), o(i, r), null === i && null === r && function(e, t, n) {
            e && e.then || (e = Promise.resolve(e)), t && e.then(t)
        }(Yr(e), (function({
            startTime: e,
            endTime: t
        }) {
            o(e, t)
        }))
    }

    function o(o, r) {
        null !== o && (e.startTime = ht(o, 0, t.duration)), null !== r && (e.endTime = r, i = function({
            player: e,
            startTime: t,
            endTime: n,
            loop: i = !1
        }) {
            let o = !0,
                r = !1;
            const {
                events: a
            } = e;
            return function() {
                const i = n - t,
                    o = {
                        duration: i,
                        endTime: n,
                        startTime: t
                    },
                    r = {
                        get currentFragment() {
                            return o
                        },
                        firstFragmentDuration: i,
                        checkForNewFragment: li,
                        reset: li,
                        hibernate: li,
                        wake: li
                    },
                    a = function(e, t) {
                        return [1e3 * e, 1e3 * t]
                    }(t, n);
                e.overrideFragmentsHandler(r, a)
            }(), Hr(e), a.on(m.TIME_UPDATE, s), a.on(Wt._playButtonPressed, c), a.on(Wt._configChanged, d), a.on(m.SEEKED, u), a.once(y, (function() {
                o && or(Yo.PLAY_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                })
            })), () => {
                o = !1, a.off(m.TIME_UPDATE, s), a.off(Wt._playButtonPressed, c), a.off(Wt._configChanged, d), a.off(m.SEEKED, u), e.restoreLastFragmentsHandler()
            };

            function s({
                currentTime: o
            }) {
                o >= n && (i ? l(t) : (e.backbone.pause(), a.fire(m.ENDED)))
            }

            function l(t) {
                r = !1, e.backbone.currentTime = t
            }

            function c() {
                e.backbone && (e.backbone.currentTime >= n || e.backbone.currentTime < t) && l(t)
            }

            function d(t) {
                t && (e.startTime = null, e.endTime = null)
            }

            function u() {
                o && r && or(Yo.SEEK_INSIDE_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                }), r = !0
            }
        }({
            player: e,
            startTime: null != o ? o : 0,
            endTime: r,
            loop: n.loop
        }), e.ready().then(() => {
            or(Yo.EMBED_SEGMENT, e.config, {
                start_time: o,
                end_time: r
            })
        }).catch(e => {}))
    }
    return {
        clearSegmentedPlayback: () => null == i ? void 0 : i()
    }
}

function Kr(e, t) {
    const n = null == t ? void 0 : t.find(t => t.id === e);
    let i = {
        startTime: null,
        endTime: null
    };
    return n && (i = {
        startTime: n.timecode,
        endTime: null
    }), i
}

function jr(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o < 0 && (o = Math.max(0, n + o)), o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function zr(e, t) {
    e.events.once(y, () => {
        or(Yo.CHAPTER_PLAYED, e.config, {
            chapter_id: t
        })
    })
}

function Xr(e, t, n) {
    let i = Promise.resolve();
    const r = !Gr(e) && !!e.config.video.thumbs.base;

    function a() {
        return n.getAttribute("data-thumb")
    }

    function s() {
        return ur(t.get("ui.player.width") * o.devicePixelRatio, t.get("ui.player.height") * o.devicePixelRatio)
    }

    function l() {
        return t.get(wr) && !t.get(Or) || !e.config.embed.autoplay || br.isCastConnected
    }

    function c() {
        if (!r) return Promise.resolve();
        const {
            width: i,
            height: o
        } = s(), c = pr({
            width: i,
            height: o,
            baseUrl: e.config.video.thumbs.base
        });
        n.setAttribute("data-thumb", c), n.setAttribute("data-thumb-width", i);
        const d = _r(c).then(e => (t.dispatch(((e, t) => ({
            type: "PREVIEW_SET_SIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), l() && (n.style.backgroundImage = `url(${a()})`), e));
        return l() ? Promise.race([d, new Promise(e => setTimeout(e, 2e3))]) : Promise.resolve()
    }
    return i = c(), e.events.on(Wt._didEnterFullscreen, () => {
        n.classList.contains("vp-preview-invisible") && "beginning" !== e.config.embed.outro || (i = c())
    }), t.watch("ui.player.width", L(() => {
        i = i.then(() => function() {
            const {
                width: e
            } = s(), t = n.getAttribute("data-thumb-width");
            return e <= parseInt(t, 10) || 0 === e ? Promise.resolve() : c()
        }()).catch(e => {})
    }, 150)), t.watch("ui.preview.scaleFactor", e => {
        n.classList.toggle("vp-preview-cover", e > 1)
    }), {
        show: function() {
            n.style.backgroundImage = `url(${a()})`, n.classList.remove("vp-preview-invisible")
        },
        hide: function() {
            n.classList.add("vp-preview-invisible")
        },
        resetThumbnail: function() {
            n.setAttribute("data-thumb", ""), n.setAttribute("data-thumb-width", ""), n.style.backgroundImage = ""
        },
        getThumbnail: a,
        loadThumbnail: c,
        thumbnailPromise: i
    }
}

function Zr(e) {
    const t = !Gr(e);

    function n(e) {
        if ("opacity" === e.propertyName) {
            const e = i();
            var t;
            e && (I(e).off("transitionend", n), null == e || null == (t = e.parentNode) || t.removeChild(e))
        }
    }

    function i() {
        return document.querySelector(".vp-placeholder")
    }
    return {
        hide: function() {
            if (t) {
                const e = i();
                e && (I(e).on("transitionend", n), e.classList.add("vp-placeholder-fadeout"))
            }
        }
    }
}
const Jr = e => ({
        type: "CAPTIONS_SET_FONT_SIZE",
        payload: e
    }),
    Qr = e => ({
        type: "CAPTIONS_SET_FONT_FAMILY",
        payload: e
    }),
    ea = e => ({
        type: "CAPTIONS_SET_FONT_OPACITY",
        payload: e
    }),
    ta = e => ({
        type: "CAPTIONS_SET_COLOR",
        payload: e
    }),
    na = e => ({
        type: "CAPTIONS_SET_BACKGROUND_OPACITY",
        payload: e
    }),
    ia = e => ({
        type: "CAPTIONS_SET_BACKGROUND_COLOR",
        payload: e
    }),
    oa = e => ({
        type: "CAPTIONS_SET_WINDOW_OPACITY",
        payload: e
    }),
    ra = e => ({
        type: "CAPTIONS_SET_WINDOW_COLOR",
        payload: e
    }),
    aa = e => ({
        type: "CAPTIONS_SET_EDGE_STYLE",
        payload: e
    }),
    sa = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: ia
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: ta
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: Jr
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: Qr
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: ea
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: aa
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: na
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: ra
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: oa
        }
    }),
    la = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    },
    ca = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let da = null;

function ua(e) {
    const t = sa(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = No("player")
        } catch (Te) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = Ro(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = Ro(n), i && function(t, n) {
            if (da) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    da.then(n => {
                        const i = mt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    }).catch(t => {
                        lr.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    })
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            ca.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            ca.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(ca);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=Ro(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    document.cookie = a
                } catch (Te) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        switch (t) {
            case "sync_quality":
                e.events.fire(Nt._changeQuality, n, !0);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(Nt._changeVolume, n, !0);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(Nt._turnCaptionsOff, !0);
                    break
                }
                e.events.fire(Nt._turnCaptionsOn, n, !0);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Wt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(Wt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Wt._becameInactive)
        }
    }
    return e.events.on(Wt._qualityChanged, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = Ro(t), n || r("volume", t, !1)
            };
            e.events.on(Wt._volumeChanged, t), e.events.on(Wt._mutedChanged, (e, n) => {
                e && t(0, n)
            })
        }(), e.events.on(Wt._captionsChanged, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = Ro(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(Nt._changeCaptionsStyles, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, Ro(n))
        })), e.events.on(Nt._resetCaptionsStyles, (function() {
            e.store.dispatch({
                type: "CAPTIONS_RESET"
            }), Object.keys(t).forEach(e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            })
        })), e.events.on(Wt._transcriptChanged, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = Ro(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(Nt._changeAudioTrack, (function(n, i) {
                e.config.request.cookie.audio_language = (null == n ? void 0 : n.language) ? Ro(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? Ro(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(Wt._qoeSurveyPresented, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Wt._playButtonPressed, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Wt._becameActive))
        })), e.events.on([Wt._pauseButtonPressed, Wt._ended], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(Wt._userLoggedIn, (function() {
            r("login", !0)
        })), n && !da && (da = function(t) {
            return new Promise((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = mt(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout(() => {
                    i()
                }, 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            })
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = mt(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    lr.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}

function pa(e, t) {
    return function(e, t = null) {
        const n = {
            feature: t,
            $deeplink_path: "app.vimeo.com/" + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        };
        let i = "",
            o = [];
        for (let r in n) o.push(`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`);
        return i = o.join("&"), `https://bnc.lt/a/key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d?${i}`
    }(`videos/${e}`, t)
}

function _a() {}

function va(e, t, n) {
    const i = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (Te) {
                    return Promise.reject(Te)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t, n;
                    if (cn.includes(null == e || null == (t = e.config) || null == (n = t.user) ? void 0 : n.id)) return function(e, t) {
                        return e && e.then ? e.then(_a) : Promise.resolve()
                    }(X(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.loadConfigRequestObject()
            }))
        })),
        r = e.events;
    let a = e.backbone;
    const s = sa(),
        l = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad);
    var c = (o.iOS >= 8 || Xt) && !o.iPad,
        d = !1,
        u = !1,
        p = !1,
        _ = !1,
        v = null,
        f = !1,
        h = !1,
        g = !1,
        b = !1,
        E = !1,
        T = !1;

    function L(e) {
        a.element.classList.remove("invisible"), w()
    }

    function w() {
        let e = a.play();
        return T && (e = e.catch(A)), e.catch(I).then(Z)
    }

    function A(e) {
        if (T = !1, S(e)) return r.fire(Nt._changeMuted, !0, !0), a.play();
        throw e
    }

    function S(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function I(e) {
        return r.fire(Wt._playRejected, e), new Promise(() => {})
    }

    function Z() {
        r.fire(Wt._playResolved)
    }

    function J(e) {
        try {
            a.currentTime = e
        } catch (t) {}
    }

    function Q() {
        _ || f || d && a.paused && w()
    }

    function ee() {
        let t = "none";
        ("metadata" === e.config.request.flags.preload_video || l || o.iOS >= 8 || Xt) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === a.currentScannerName && (t = "auto")), o.isGoogleBot && (t = "none"), a.preload = t, r.on(Wt._mousedOver, (function() {
            e.config.request && "metadata_on_hover" === e.config.request.flags.preload_video && !p && e.verifyConfig().then(() => (a.preload = "metadata", !0)).catch(e => {})
        })), r.on(C.LOAD_SEGMENT_FAILED, (function(e) {
            lr.captureException(e)
        }))
    }

    function te() {
        E = !1;
        const t = a.video;
        if (a.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (a.hasTextTrack(t)) {
                    const e = !0;
                    r.fire(Nt._turnCaptionsOn, t, e)
                }
            } else r.on(C.TEXT_TRACKS_AVAILABLE, () => {
                n(), i()
            }), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (a.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                r.fire(Nt._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach(t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some(e => e.id === r);
                e.store.dispatch(i(a ? r : la[t]))
            })
        }
    }

    function ne(e, t, n, i) {
        if (u) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), u = !1
        }
    }

    function ie() {
        e.startTime > 0 && r.fire(Nt._setTime, e.startTime, e.startTime / a.duration)
    }

    function oe() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(wr) && !t.get(Or)) return;
            if (t.get(wr) && !Po(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                r.fire(Wt._liveEventSafeToPlay), r.fire(Wt._playButtonPressed)
            }), ko(null == (i = e.config.video) ? void 0 : i.live_event));
            r.fire(Wt._playButtonPressed)
        }
    }
    a.element.classList.add("invisible"), c && a.element.classList.add("hide-webkit-controls"), e.config.video.live_event && n.classList.add("live-background"), e.config.embed.transparent && n.classList.add("transparent"), t.watch(Ar, (function(e) {
            "started" === e && setTimeout(() => {
                te(), a.element.classList.remove("invisible"), r.fire(Wt._liveEventSafeToPlay), r.fire(Wt._playButtonPressed)
            }, 12e3)
        })), t.watch(Dr, i), t.watch("ui.video.scaleFactor", e => {
            a.element.classList.toggle("vp-telecine-cover", e > 1)
        }),
        function t() {
            r.once(Wt._swapVideo, t), a = e.backbone, At(a.on, r.fire, [k, P, O, R, y, N, D, M, x, B, V, U, F, H.ACTIVATED, H.AVAILABLE, H.DEACTIVATED, H.UNAVAILABLE, q.ARCHIVE_DONE, q.EVENT_ACTIVE, q.EVENT_ENDED, q.EVENT_STARTED, q.STREAM_OFFLINE, q.STREAM_ONLINE, q.BUFFER_GAP_JUMP, q.BUFFER_GAP_JUMP_PREVENT, q.STALL_JUMP, q.SETTINGS_UPDATED, q.LOW_LATENCY_FALLBACK, q.LIVE_STATS_SUCCESS, q.LIVE_STATS_FAILURE, q.LATENCY_UPDATED, G.MEDIASESSION_PAUSE, G.MEDIASESSION_PLAY, G.MEDIASESSION_SEEK_BACKWARD, G.MEDIASESSION_SEEK_FORWARD, C.AV_DURATION_MISMATCH, C.BANDWIDTH, C.BUFFER_ENDED, C.BUFFER_OCCUPANCY, C.BUFFER_STARTED, C.CHAPTER_CUES_UPDATED, C.CUE_POINT, C.CURRENT_FILE_CHANGE, C.DOWNLOAD_END, C.DOWNLOAD_TIMEOUT, C.DRM_AUTH_SUCCESS, C.DRM_KEY_SWITCH, C.DROPPED_FRAMES, C.MANIFEST_LOADED, C.MANIFEST_TIMEOUT, C.QUOTA_EXCEEDED_ERROR, C.SCANNER_CHANGE, C.STREAM_BUFFER_START, C.STREAM_CHANGE, C.STREAM_CHANGE_START, C.STREAM_TARGET_CHANGE, C.AVAILABLE_STREAMS_CHANGED, C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, C.TEXT_TRACKS_AVAILABLE, C.DROPPED_FRAME_PERCENT_EXCEEDED, C.LOAD_SEGMENT_FAILED, C.AUDIO_TRACK_CHANGED, C.SEGMENT_CUES_LOADED, W.CAMERA_CHANGE, W.CAMERA_UPDATE, W.MOTION_END, W.MOTION_START, W.SPATIAL_UNSUPPORTED, W.WEBVR_ENTER, W.WEBVR_EXIT, W.WEBVR_HARDWARE_AVAILABLE, Y.BRAIN_ML_SWITCH_TO_SKYFIRE, Y.BRAIN_ML_MODEL_INPUTS, m.DURATION_CHANGE, m.ENDED, m.ERROR, m.LOAD_START, m.LOADED_DATA, m.LOADED_METADATA, m.PAUSE, m.PLAY, m.PLAYING, m.PROGRESS, m.RATE_CHANGE, m.RESIZE, m.SEEKED, m.SEEKING, m.STALLED, m.TIME_UPDATE, m.VOLUME_CHANGE, m.WAITING, m.ENTER_PICTURE_IN_PICTURE, m.LEAVE_PICTURE_IN_PICTURE, m.WEBKIT_BEGIN_FULLSCREEN, m.WEBKIT_END_FULLSCREEN])
        }(), At(br.on, r.fire, [hr.connected, hr.disconnected]), ee(), r.on(m.LOADED_METADATA, (function(t) {
            e.config.video.duration = a.duration, e.config.video.video_width = a.videoWidth, e.config.video.video_height = a.videoHeight
        })), r.on(m.DURATION_CHANGE, (function(t) {
            e.config.video.duration = a.duration
        })), r.on(C.SCANNER_CHANGE, () => {
            ee(), setTimeout(() => {
                r.fire(a.supportsSettingVolume ? Nt._enableVolume : Nt._disableVolume), r.fire(a.supportsTextTracks ? Nt._enableCaptions : Nt._disableCaptions)
            }, 0), lr.captureBreadcrumb(`Scanner changed to ${a.currentScannerName}`, {}, "video")
        }), r.on([q.EVENT_ACTIVE, q.EVENT_STARTED, q.EVENT_ENDED, q.ARCHIVE_DONE], n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: "LIVE_UPDATE",
                payload: e
            }))(n))
        }), r.on(Wt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                if ("disable" !== e.config.video.privacy && e.config.video.spatial && o.iOS && !E || a.element.classList.remove("invisible"), v) return r.fire(Wt._error, v), void e.preview.show();
                if (d = !0, f) e.preview.show();
                else {
                    if (a.off(m.PLAY, L), l && (h = !0, r.fire(Nt._forceFullscreen)), t.get(Or) && (T = !0), !p) return e.config.video.spatial && o.iOS && !E ? (E = !0, r.fire(Nt._showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? e.config.video.share_url : pa(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }), void r.once(m.PLAY, L)) : void w().catch(console.error);
                    p && Q()
                }
            }()
        })).on(Wt._pauseButtonPressed, () => {
            d = !1, e.displayContext.pause()
        }).on(Wt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !a.paused && !e.config.embed.settings.background || d) && (d = !1, r.fire(Wt._pauseButtonPressed))
        })), r.on(m.ERROR, (function(t) {
            if (S(t) && !T) {
                if (e.config.embed.autoplay = 0, a.pause(), e.startTime) return J(e.startTime), void r.fire(Wt._paused, a.currentTime);
                if (0 === a.currentTime) return void r.fire(Nt._reset);
                r.fire(Wt._paused, a.currentTime)
            }
        })), r.on(m.PLAY, (function(e) {
            a.element.classList.remove("invisible")
        })), r.on(m.PAUSE, (function(e, t) {
            _ || r.fire(Wt._paused, e, t)
        })), r.on(m.TIME_UPDATE, (function({
            currentTime: e
        }) {})), r.on(m.ENDED, (function(t) {
            _ || e.config.embed.loop || (h && r.fire(Wt._fullscreenButtonPressed), d = !1, r.fire(Wt._ended, t))
        })), r.on(C.DRM_AUTH_SUCCESS, () => {
            u = !0
        }), r.on(y, () => {
            p = !0, r.once(m.TIME_UPDATE, () => {
                r.fire(Wt._firstTimeUpdate)
            })
        }), r.on(C.BUFFER_STARTED, () => {
            _ || r.fire(Ot._bufferStarted)
        }), r.on(Y.BRAIN_ML_SWITCH_TO_SKYFIRE, () => {
            "ml_brain" in e.config.request.ab_tests && delete e.config.request.ab_tests.ml_brain
        }),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                if (t) return;
                if (o.name.includes($)) return;
                if (o.name === K) return void r.fire(Nt._disableCaptions);
                lr.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let a = e.config.video.live_event ? .25 : .01;
                if (o.name === j && !n) {
                    n = !0, a = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        s = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        p = t.file_codecs,
                        _ = e.config.video.file_codecs,
                        v = e.config.user.logged_in,
                        m = t.build.js;
                    lr.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: s,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: p,
                        video_file_codecs: _,
                        logged_in: v,
                        version: m
                    }, "MediaUrlBadRequest config", "error")
                } - 1 !== o.name.indexOf("Mimir") && (a = .5, lr.captureBreadcrumb(o.name, o, "ABR", "error"));
                const s = "string" != typeof o.message ? o.name : o.message,
                    l = new Error(s);
                l.name = o.name;
                const c = "object" == typeof o.message ? o.message : null;
                lr.captureException(l, c, a);
                const d = un[o.name];
                if ("function" != typeof d) return;
                const u = d();
                if (u.final && r.off(m.ERROR, i), v = u.deferred ? u.id : null, o.name === z) {
                    let t = e.config.request.dynamic_drm_translation_map,
                        n = o.message.code;
                    t && n && t[n] && (u.title = t[n].title, u.message = t[n].msg), lr.captureBreadcrumb("DRM failure", o, "video")
                }
                r.fire(Wt._error, u.id, u, s)
            }
            window.addEventListener("pagehide", () => {
                t = !0
            }, !1), r.on(m.ERROR, i), r.on("test-error", i)
        }(), r.on(Nt._changeLoop, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, a.loop = n
        })), r.fire(Nt._changeLoop, e.config.embed.loop), r.on(Wt._chapterSeekAttempted, (t, n) => {
            e.events.fire(Wt._chapterSeek, n), e.events.fire(Nt._seek, t), p || r.fire(Wt._playButtonPressed)
        }), r.on(Wt._scrubbingStarted, (function() {
            f || (d = !a.paused, _ = !0, a.pause())
        })), r.on(Wt._scrubbingEnded, (function(e) {
            _ = !1, p ? e || Q() : r.fire(Wt._playButtonPressed)
        })), r.on(Nt._seek, (function(e) {
            f || r.fire(Nt._setTime, e)
        })), r.on(Nt._setTime, (function(t) {
            p || e.fragmentsHandler.checkForNewFragment(t, a.duration), J(t)
        })),
        function() {
            r.on(Nt._changeVolume, (function(t, n, i) {
                i && (t += a.volume), t = Ct(t = ht(t, 0, 1)), e.displayContext !== a && (e.displayContext.volume = t), a.volume = t, e.events.fire(Wt._volumeChanged, t, n), a.muted && e.events.fire(Nt._changeMuted, !1, n)
            })), r.on(Nt._changeMuted, (function(t, n = !1) {
                a.muted = !!t, e.events.fire(Wt._mutedChanged, t, n)
            })), r.on(m.VOLUME_CHANGE, () => {
                r.fire(Wt._volumeChanged, a.volume, !0)
            });
            const t = e.config.request.cookie.volume;
            r.fire(Nt._changeVolume, t, !0), r.fire(Nt._changeMuted, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            r.on(Nt._changeQuality, (function(n, i) {
                (a.video.currentFile.mime === Rt.dash || t.get(Or)) && (i = !0), e = i, a.quality = n
            })), r.on(N, (function(t) {
                r.fire(Wt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = a.playbackRate;
            r.on(m.RATE_CHANGE, (function(t) {
                a.playbackRate !== e && (r.fire(Wt._playbackRateChanged, a.playbackRate, e), e = a.playbackRate)
            })), r.on(Nt._changePlaybackRate, (function(e) {
                a.playbackRate = e
            })), r.on(Wt._loadVideo, (function() {
                try {
                    a.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                f = !0, "interactive" !== e && p && !b && (d = d || !a.paused, a.pause(), r.fire(Wt._paused, a.currentTime))
            }

            function t() {
                f = !1, d && !b && (h || g || !l || r.fire(Nt._forceFullscreen), Q())
            }
            r.on(Wt._overlayOpened, e), r.on(Wt._accessGateOpened, e), r.on(Wt._overlayClosed, t), r.on(Wt._accessGateClosed, t), r.on(Wt._menuVisibilityChanged, (function(n, i) {
                i && "preact-menu" !== i && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), r.on(Wt._popupOpened, (function(e) {
            p && !b && (d = !a.paused, a.pause())
        })), r.on(Wt._popupClosed, (function(e) {
            b || Q()
        })), r.on(Wt._didEnterFullscreen, (function(t, n) {
            a.element.classList.remove("hide-webkit-controls"), t && (g = !0), t || (p || o.browser.safari || (a.poster = e.preview.getThumbnail()), h = !0, setTimeout(() => {
                a.textTracks.forEach(e => {
                    "hidden" === e.mode && (e.mode = "showing")
                })
            }, 500)), n || !o.windowsPhone || o.browser.edge || r.fire(Nt._toggleNativeControls, !0)
        })), r.on(Wt._didExitFullscreen, (function(e) {
            a.poster = "", e || a.pause(), p || a.element.classList.add("invisible"), h = !1, g = !1, c && a.element.classList.add("hide-webkit-controls"), a.textTracks.forEach(e => {
                "showing" === e.mode && (e.mode = "hidden")
            })
        })), r.on(y, (function() {
            a.poster = ""
        })), r.on(Nt._toggleNativeControls, (function(e) {
            if (e) return a.controls = !0, void n.classList.add("native-controls");
            a.controls = !1, n.classList.remove("native-controls")
        })), r.on(Wt._requestConfigReloaded, (function() {
            te()
        })), r.on(Wt._configChanged, (function() {
            te(), oe()
        })), r.on(Nt._reset, (function() {
            if (e.segmentedPlaybackEnabled) ie();
            else {
                const t = e.element.querySelector("[telecine-snapshot]");
                t && "none" !== t.style.display || (e.preview.show(), a.element.classList.add("invisible")), setTimeout(() => {
                    a.unload(), r.fire(Wt._paused, a.currentTime), p = !1, d = !1, v = null
                }, 300)
            }
        })),
        function() {
            let t;
            r.on(Nt._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    (e.config.request.flags.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && a.videoElement && a.videoElement.setAttribute("crossorigin", "anonymous"), a.enableTextTrack(n)
                } catch (o) {}
            })).on(Nt._turnCaptionsOff, (function(n = !1) {
                t = n, e.config.request.flags.ott && a.videoElement && a.videoElement.removeAttribute("crossorigin"), a.disableTextTrack()
            })).on(Nt._requestCompleteLiveSubtitles, (function() {
                a.requestCompleteLiveSubtitles()
            })).on(Nt._updateLiveSubtitleRequests, (function(e) {
                a.setCaptionsShouldLoad(e)
            })), r.on(k, (function(e, n) {
                e && a.enableTextTrack(e.id), r.fire(Wt._captionsChanged, e, t || n)
            })), r.on(m.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = a.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), r.on(m.WEBKIT_END_FULLSCREEN, (function() {
                var t;
                e.config.request.flags.ott || null == (t = a.videoElement) || t.removeAttribute("crossorigin")
            }))
        }(), r.on(H.AVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Wt._airPlayAvailable)
            }
        })), r.on(H.UNAVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Wt._airPlayNotAvailable)
            }
        })), r.on(H.ACTIVATED, (function({
            type: e
        }) {
            switch (b = !0, e) {
                case "AirPlay":
                    r.fire(Wt._airPlayActivated)
            }
        })), r.on(H.DEACTIVATED, (function({
            type: e
        }) {
            switch (b = !1, e) {
                case "AirPlay":
                    r.fire(Wt._airPlayDeactivated)
            }
        })), r.on(Wt._airPlayButtonPressed, (function() {
            a.showExternalDisplayPicker("AirPlay")
        })), r.on(Nt._activatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.requestPictureInPicture()
        }), r.on(Nt._deactivatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.exitPictureInPicture()
        }), te(), o.spatialPlayback ? (r.fire(Nt._attachSpatialPlaybackEvents), r.on([m.PLAY, m.SEEKED], () => {
            r.fire(Nt._revealSpatialControls)
        }), r.on(W.SPATIAL_UNSUPPORTED, () => {
            p ? r.fire(Ot._spatialFailure, f) : r.once(Wt._firstTimeUpdate, () => {
                r.fire(Ot._spatialFailure, f)
            })
        })) : r.once(Wt._firstTimeUpdate, () => {
            e.config.video.spatial && r.fire(Ot._spatialUnsupported, f)
        }), window.addEventListener("beforeunload", () => {
            const t = e.config.request.drm;
            t && ne(t.hoover_url, t.user, t.asset, t.hoover_token)
        }, !1), r.on(Wt._loadVideo, () => {
            const t = e.config.request && e.config.request.drm;
            t && ne(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), e.events.on(Nt._destroy, () => a.destroy()), e.ready().then(() => (setTimeout(() => oe(), 0), ie(), null)).catch(e => {}), r.fire(Wt._videoModuleReady)
}

function ma(e, t) {
    var n, i, r, a, s, l, d = 0,
        u = {},
        p = new c,
        _ = !1;

    function v() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function f() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function b() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, r = 0, a = 0, s = 0, l = !1
    }

    function E(t, n, i, o) {
        e.verifyConfig().then(() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (lr.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), lr.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const s = e.config.request.urls.player_telemetry_url + t;
            return p.logRequestPromiseWithUrl(s, a, !i).then(t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(Wt._requestConfigReloaded, () => {
                        E(s, n, i, o + 1)
                    });
                    setTimeout(() => {
                        E(s, n, i, o + 1)
                    }, 1e3)
                }
            }).catch(e => {
                throw e
            })
        }).catch(e => {})
    }

    function T(n, i, o) {
        const a = e.backbone.currentFile || {};
        let {
            id: s = 0,
            mime: l = Rt.h264,
            metadata: {
                profile: c = -1
            } = {}
        } = a;
        l === Rt.dash && ({
            id: s = 0,
            profile: c = -1
        } = u), e.performDelegateAction(Gt, (d, u = {}) => {
            let p = d => {
                var p, _;
                let v = h(h({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: u.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: (null == (p = e.config.video.vod) ? void 0 : p.id) ? e.config.video.vod.id : null,
                    vodSaleId: (null == (_ = e.config.video.vod) ? void 0 : _.sale_id) ? e.config.video.vod.sale_id : null,
                    sessionTime: Ct(r),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: f(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(s)) ? s : "0",
                    delivery: $t[l],
                    profileId: c,
                    quality: a.metadata ? a.metadata.quality : null,
                    duration: Ct(e.config.video.duration),
                    seconds: Ct(i)
                }, d), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: Go(e.config)
                });
                ! function(e, t, n) {
                    var i;
                    if (null == (i = e.user) ? void 0 : i.lead) {
                        var o, r;
                        const t = null == (o = e.user.lead) ? void 0 : o.id;
                        n.leadUuid = t, n.contentType = null == (r = e.user.lead) ? void 0 : r.type
                    } else if (e.video.webinar) {
                        const i = `${e.video.webinar.id}_webinar_registrant`;
                        if (!t.get("webinar.webinarRegistrantUuid")) {
                            const e = No(i);
                            t.dispatch((e => ({
                                type: "WEBINAR_REGISTRANT_UUID_AVAILABLE",
                                payload: {
                                    registrantUuid: e
                                }
                            }))(e))
                        }
                        n.leadUuid = t.get("webinar.webinarRegistrantUuid")
                    }
                }(e.config, t, v), E(n, v, o)
            };
            const _ = e.config.video.live_event ? 1 : 0;
            let v = t.get(Ir),
                m = {
                    isLive: _
                };
            if (_) {
                if (!v) return void g(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then(e => (e && e.ingest && (t.dispatch((e => ({
                    type: "LIVE_SET_START_TIME",
                    payload: e
                }))(e.ingest.start_time)), v = t.get(Ir)), v && (m.liveStartTime = v), p(m), e)).catch(e => {});
                m.liveStartTime = v
            }
            p(m)
        })
    }

    function L() {
        !l && e.playLoggingEnabled && (l = !0, T("/log/play", e.backbone.currentTime))
    }

    function w(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled && l && !_) {
            var r = v();
            o && a + 1e3 > r || (a = r, n || T("/log/partial", t, i))
        }
    }

    function A(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
            vodSaleId: (null == (o = e.config.video.vod) ? void 0 : o.sale_id) ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: Ct(e.config.video.duration),
            seconds: Ct(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Go(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        E("/log/" + t, r)
    }
    return b(),
        function() {
            e.events.on(m.TIME_UPDATE, (function({
                currentTime: e,
                duration: t,
                timeProgress: o,
                playbackRate: a
            }) {
                var l = Math.floor(e);
                if (!n && s + 1e3 < v()) {
                    const t = 0 !== e && 0 === i;
                    e > i && !t && (r += (e - i) / a), i = e
                }
                l % 30 == 0 && w(e)
            })), e.events.on(Wt._playbackRateChanged, (function(t, n) {
                A("playback_rate_change", {
                    oldPlaybackRate: n
                }), w(e.backbone.currentTime)
            })), e.events.once(y, (function() {
                t.get(wr) && t.get(Or) ? e.events.once(Wt._firstTimeUpdate, () => L()) : L()
            })), e.events.on(C.SCANNER_CHANGE, (function(t) {
                _ = !0, e.events.once(y, () => {
                    _ = !1
                })
            })), e.events.on(Wt._paused, (function(t) {
                0 === e.backbone.duration && 0 === e.backbone.currentTime || e.backbone.ended || w(t)
            })), e.events.on(m.SEEKED, (function({
                currentTime: t
            }) {
                (e.backbone.isLive() || 0 !== e.backbone.duration || 0 !== e.backbone.currentTime) && (d = t, n || w(d))
            })), e.events.on(Wt._scrubbingStarted, (function() {
                s = v(), n = !0
            })), e.events.on(Wt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, w(i)
            })), e.events.on(Wt._prefsButtonPressed, (function() {
                w(e.backbone.currentTime)
            })), e.events.on(Wt._ended, (function() {
                e.backbone.isLive() || (r += e.config.video.duration - i), w(e.backbone.isLive() ? i : e.config.video.duration, !1, !1)
            })), e.events.on(C.STREAM_CHANGE, (function(e) {
                u = e
            }));
            let o = [],
                a = !1;

            function l() {
                o.length && e.performDelegateAction(Gt, (t, n = {}) => {
                    var i, r;
                    E("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
                        vodSaleId: (null == (r = e.config.video.vod) ? void 0 : r.sale_id) ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Go(e.config),
                        motionLog: JSON.stringify(o)
                    }, !1)
                })
            }
            e.events.on(W.MOTION_START, () => {
                a = !0,
                    function t() {
                        let n = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                            i = Math.round(100 * n.lat) / 100,
                            s = Math.round(100 * n.long) / 100;
                        const l = {
                            sessionTime: r,
                            videoTime: e.backbone.currentTime,
                            coordinates: {
                                lat: i,
                                lon: s
                            }
                        };
                        o.push(l), setTimeout(() => {
                            a && t()
                        }, 1e3)
                    }()
            }), e.events.on(W.MOTION_END, () => {
                a = !1, l()
            }), e.events.on(Wt._loadVideo, () => {
                l(), o = []
            }), window.addEventListener("pagehide", (function() {
                if (e.backbone && e.backbone.currentTime > 0) {
                    const t = !0,
                        n = !1;
                    w(e.backbone.currentTime, t, n), l()
                }
            }), !1)
        }(), [{
            type: "share_press",
            event: Wt._shareButtonPressed
        }, {
            type: "facebook_press",
            event: Wt._facebookButtonPressed
        }, {
            type: "twitter_press",
            event: Wt._twitterButtonPressed
        }, {
            type: "tumblr_press",
            event: Wt._tumblrButtonPressed
        }, {
            type: "email_press",
            event: Wt._emailButtonPressed
        }, {
            type: "embed_press",
            event: Wt._embedButtonPressed
        }, {
            type: "login_success",
            event: Wt._userLoggedIn
        }, {
            type: "airplay",
            event: Wt._airPlayActivated
        }, {
            type: "vod_press",
            event: Wt._vodButtonPressed
        }, {
            type: "collection_press",
            event: Wt._collectionsButtonPressed
        }, {
            type: "email_capture_submitted",
            event: Wt._emailCaptureSubmitted
        }].forEach((function(t) {
            e.events.on(t.event, function(e) {
                return function() {
                    A(e)
                }
            }(t.type))
        })), e.events.on(Wt._outroDisplayed, (function(t) {
            var n = {
                outroType: e.config.embed.outro,
                ownerAccountType: e.config.video.owner.account_type,
                playerWidth: e.element.clientWidth,
                playerHeight: e.element.clientHeight
            };
            (null == t ? void 0 : t.length) && (n.outroVideos = t.join(",")), A("outro_displayed", n)
        })).on(Wt._outroVideoPressed, (function(t) {
            A("outro_video_press", {
                ownerAccountType: e.config.video.owner.account_type,
                videoId: t
            })
        })).on(Wt._followButtonPressed, (function() {
            A("outro_follow_press", {
                add: !e.config.user.following
            })
        })).on(Wt._outroCtaPressed, (function(t) {
            A("outro_cta_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Wt._outroLinkPressed, (function(t) {
            A("outro_link_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Wt._outroImagePressed, (function(t) {
            A("outro_image_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Wt._likeButtonPressed, (function() {
            A("like_press", {
                add: !e.config.user.liked
            })
        })).on(Wt._watchLaterButtonPressed, (function() {
            A("watch_later_press", {
                add: !e.config.user.watch_later
            })
        })).on(Wt._popupOpened, (function(e) {
            0 === e.indexOf("login-") && A("login_attempt")
        })).on(Wt._captionsChanged, (function(e, t) {
            t || (e ? A("text_track_change", {
                textTrackLanguage: e.language,
                textTrackKind: e.kind
            }) : A("text_track_change"))
        })).on(Wt._badgePressed, (function(e) {
            1 !== e && 12 !== e || A("badge_press", {
                badgeId: e
            })
        })).on(Wt._overlayOpened, (function(e) {
            "email-capture" === e && A("email_capture_displayed")
        })).on(Wt._overlayClosed, (function(e) {
            "email-capture" === e && A("email_capture_dismissed")
        })).on(Wt._cardPressed, (function(t) {
            A("card_press", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: "link"
            })
        })).on(Wt._cardDisplayed, (function(t, n) {
            e.config.embed.editor || A("card_displayed", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: n.url ? "link" : "text"
            })
        })), e.events.on(Wt._configChanged, (function(e) {
            e && b()
        })), e.events.fire(Wt._statsModuleReady), {}
}
const fa = {
    settings: {}
};

function ha(e = fa, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return h(h({}, e), n.embed);
        default:
            return e
    }
}
var ga = Object.freeze({
    __proto__: null,
    default: ha,
    transparent: e => e.embed.transparent
});

function ba(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return h(h({}, e), n.video);
        default:
            return e
    }
}
const Ea = e => e.video.height / e.video.width;
var ya = Object.freeze({
    __proto__: null,
    default: ba,
    ratio: Ea
});

function Ca(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.webinar ? h(h({}, e), n.video.webinar) : null;
        case "WEBINAR_FORM_SUCCESS":
            return h(h({}, e), {}, {
                formSuccess: n.formSuccess,
                registrantUuid: n.registrantUuid
            });
        case "WEBINAR_REGISTRANT_UUID_AVAILABLE":
            return h(h({}, e), {}, {
                registrantUuid: n.registrantUuid
            });
        default:
            return e
    }
}
const Ta = e => {
        var t;
        return !!(null == (t = e.webinar) ? void 0 : t.formSuccess)
    },
    La = e => {
        var t;
        return null == (t = e.webinar) ? void 0 : t.registrantUuid
    };
var wa = Object.freeze({
    __proto__: null,
    default: Ca,
    webinarFormSuccess: Ta,
    webinarRegistrantUuid: La
});

function Aa(e = {}, t) {
    switch (t.type) {
        case "CONTAINER_RESIZE":
            return h(h({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Sa = Object.freeze({
    __proto__: null,
    default: Aa,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function Ia(e = {}, t) {
    switch (t.type) {
        case "PLAYER_CONTAINER_RESIZE":
            return h(h({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var ka = Object.freeze({
    __proto__: null,
    default: Ia,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});

function Pa(e = {}, t) {
    switch (t.type) {
        case "PREVIEW_SET_SIZE":
            return h(h({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Oa = Object.freeze({
    __proto__: null,
    default: Pa,
    scaleFactor: e => ft({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: Ga.width(e),
        elementHeight: Ga.height(e)
    }).scaleFactor
});

function Ra(e = la, t) {
    switch (t.type) {
        case "CAPTIONS_RESET":
            return h(h({}, e), la);
        case "CAPTIONS_SET_FONT_SIZE":
            return h(h({}, e), {}, {
                fontSize: t.payload
            });
        case "CAPTIONS_SET_COLOR":
            return h(h({}, e), {}, {
                color: t.payload
            });
        case "CAPTIONS_SET_FONT_FAMILY":
            return h(h({}, e), {}, {
                fontFamily: t.payload
            });
        case "CAPTIONS_SET_FONT_OPACITY":
            return h(h({}, e), {}, {
                fontOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_OPACITY":
            return h(h({}, e), {}, {
                bgOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_COLOR":
            return h(h({}, e), {}, {
                bgColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_COLOR":
            return h(h({}, e), {}, {
                windowColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_OPACITY":
            return h(h({}, e), {}, {
                windowOpacity: t.payload
            });
        case "CAPTIONS_SET_EDGE_STYLE":
            return h(h({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var Na = Object.freeze({
    __proto__: null,
    default: Ra,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * Ga.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const Da = e => {
        const t = t => Math.min(e.height(t) / Ea(t), e.width(t)),
            n = t => Math.min(e.width(t) * Ea(t), e.height(t)),
            i = i => ft({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            s = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            l = ee.createSelector(r, a, (e, t) => ({
                width: e,
                height: t
            })),
            c = ee.createSelector(Ea, s, (e, t, n) => ({
                ratio: e,
                size: t
            }));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: s,
            boundingRect: l,
            settings: c
        }
    },
    Ma = {
        xxs: 0,
        xs: 390,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    xa = (e, t) => {
        const n = ee.createSelector(e, t, (e, t) => ({
                width: e,
                height: t
            })),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = l(n.embed.settings.customLogo) && o < 300 || r < 169,
                    s = !l(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || s
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = l(t.embed.settings.customLogo) && n <= 375,
                    r = !l(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= Ma.xxs && n < Ma.xs
            },
            s = t => {
                const n = e(t);
                return n >= Ma.xs && n < Ma.sm
            },
            c = t => {
                const n = e(t);
                return n >= Ma.sm && n < Ma.md
            },
            d = t => {
                const n = e(t);
                return n >= Ma.md && n < Ma.lg
            },
            u = t => {
                const n = e(t);
                return n >= Ma.lg && n < Ma.xl
            },
            p = t => {
                const n = e(t);
                return n >= Ma.xl && n < Ma.xxl
            },
            _ = t => e(t) >= Ma.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: s,
                    sm: c,
                    md: d,
                    lg: u,
                    xl: p,
                    xxl: _
                };
                return Object.keys(Ma).find(n => t[n](e))
            },
            xxl: _,
            xl: p,
            lg: u,
            md: d,
            sm: c,
            xs: s,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var Ba = Object.freeze({
        __proto__: null,
        scaleFactor: e => ft({
            width: e.video.width,
            height: e.video.height,
            elementWidth: Ga.width(e),
            elementHeight: Ga.height(e)
        }).scaleFactor
    }),
    Va = Object.freeze({
        __proto__: null,
        isLinkTitleVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 203 || e.container.width >= 415,
        isLinkDescriptionVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 340 || e.container.width >= 415 && e.container.height >= 234
    }),
    Ua = Object.freeze({
        __proto__: null,
        isEmailCaptureVisible: ({
            ui: e
        }) => e.container.width >= 300 && e.container.height >= 169
    });
const Fa = e => Ga.isVerticalVideo(e) ? Ga.isTinyMode(e) : Ga.isMiniMode(e) || Ga.isTinyMode(e) || Ga.xs(e) || Ga.xxs(e);
var Ha = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && Ga.width(e) < 415,
    isMenuFullWidth: Fa,
    isMenuVerticalVideoMode: e => !Fa(e) && Ga.isVerticalVideo(e) && Ga.xxs(e) && Ga.height(e) > 300,
    doMenuItemsWrap: e => Ga.width(e) < 240
});

function qa(e = {}, t, n) {
    return {
        container: Aa(e.container, t),
        preview: Pa(e.preview, t),
        captions: Ra(e.captions, t),
        playercontainer: Ia(e.playercontainer, t)
    }
}
const Ga = xa(e => $a.width(e), e => $a.height(e)),
    Wa = xa(e => Ya.width(e), e => Ya.height(e)),
    Ya = Da(Sa),
    $a = Da(ka);
var Ka = Object.freeze({
    __proto__: null,
    default: qa,
    container: Sa,
    player: Ga,
    appLayout: Ya,
    playerLayout: $a,
    preview: Oa,
    video: Ba,
    outro: Va,
    overlay: Ua,
    controlbar: Ha,
    captions: Na,
    playercontainer: ka,
    app: Wa
});

function ja(e = {}, t) {
    const n = h(h({}, function(e = {}, t) {
        switch (t.type) {
            case "CONFIG_LOAD":
                return h(h({}, e), t.payload);
            default:
                return e
        }
    }(e, t)), {}, {
        embed: ha(e.embed, t),
        video: ba(e.video, t),
        liveEvent: Lr(e.liveEvent, t),
        webinar: Ca(e.webinar, t)
    });
    return h(h({}, n), {}, {
        ui: qa(e.ui, t)
    })
}
var za = Object.freeze({
        __proto__: null,
        default: ja,
        embed: ga,
        video: ya,
        liveEvent: xr,
        ui: Ka,
        webinar: wa
    }),
    Xa = te((function(e) {
        ! function() {
            var t = {
                templates: {},
                render: function(e, n) {
                    return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
                },
                map: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                escape: function(e) {
                    return null == e ? "" : String(e).replace(/[&<>"'\\/]/g, (function(e) {
                        return t.map[e]
                    }))
                },
                helpers: {}
            };
            t.templates.adcountdown = function(e) {
                return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>'
            }, t.templates.buffer_pattern = function(e) {
                return '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>'
            }, t.templates.logo = function(e) {
                return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
            }, t.templates.outer = function(e) {
                var t = '<div class="vp-content-area-background" aria-hidden="true"></div><div class="vp-video-wrapper" data-content-area-sibling-eligible aria-hidden="true"><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview" id="vp-preview"></div></div><div class="vp-text-alert-wrapper hidden" data-content-area-sibling-eligible><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target" data-content-area-sibling-eligible></div><div class="vp-outro-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-outro" role="dialog"></div></div><div class="vp-player-ui-container" data-content-area-sibling-eligible></div><div class="vp-player-ui-overlays" data-content-area-sibling-eligible><div class="vp-vimeo-interactive-wrapper"></div></div><div class="vp-access-gate-container"></div><div class="vp-controls-wrapper" data-content-area-sibling-eligible></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-modal="true" aria-labelledby="vp-overlay-labelledby" hidden data-content-area-sibling-eligible><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">';
                return t += this.render("icon_prev") || "", t += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + e.strings.close + '">', (t += this.render("icon_close") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><span id="new-window" hidden>' + e.strings.opensANewWindow + "</span>"
            }, t.templates.threesixty_reminder = function(e) {
                var t = '<div class="intro-wrap text-only"><div> ';
                return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), t + " <div>" + e.text + "</div></div></div>"
            }, t.templates.time_series_graph = function(e) {
                return '<svg width="' + e.width + '" height="' + e.height + '" viewBox="0 0 ' + e.width + " " + e.height + '"><g><polyline stroke="white" fill="none" points="' + e.points + '"></polyline></g><g> ' + e.markers + " </g></svg>"
            }, t.templates.notice = function(e) {
                return "<h3><span>" + e.strings.text + "<span></h3>"
            }, t.templates.stream_studder = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + ' <span>Having issues? <button type="button" class="vp-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>'
            }, t.templates.warning_alert = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + " <span>" + e.strings.text + "<span></h3>"
            }, t.templates.icon_broken_heart = function(e) {
                return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_check = function(e) {
                return "<svg xmlns='http://www.w3.org/2000/svg' class='check-icon' viewBox='-4 -4 18 18'><path class='fill' fill='#ffffff' d='M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z'/></svg>"
            }, t.templates.icon_clock = function(e) {
                return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
            }, t.templates.icon_close = function(e) {
                return '<svg viewBox="0 0 20 20" class="icon-close"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#fff" fill-rule="evenodd"></path></svg>'
            }, t.templates.icon_embed = function(e) {
                return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + e.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>'
            }, t.templates.icon_facebook = function(e) {
                return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + e.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>'
            }, t.templates.icon_follow = function(e) {
                return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>'
            }, t.templates.icon_heart = function(e) {
                return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_lock = function(e) {
                return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
            }, t.templates.icon_mail = function(e) {
                return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + e.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>'
            }, t.templates.icon_prev = function(e) {
                return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>'
            }, t.templates.icon_tumblr = function(e) {
                return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + e.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>'
            }, t.templates.icon_twitter = function(e) {
                return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + e.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>'
            }, t.templates.icon_vod = function(e) {
                return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
            }, t.templates.icon_vod_download = function(e) {
                return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>'
            }, t.templates.icon_vod_rent = function(e) {
                return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>'
            }, t.templates.icon_vod_subscribe = function(e) {
                return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>'
            }, t.templates.icon_warning = function(e) {
                return '<svg class="warning-icon" focusable="false" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>'
            }, t.templates.app_redirect = function(e) {
                var t = '<div class="vp-overlay-content"> ';
                return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "), e.hideRedirectButton || (t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"', e.newWindow && (t += ' data-new-window="1" target="_blank" rel="noopener"'), t += ' aria-describedby="new-window">' + e.strings.buttonText + "</a></div> "), e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "), e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "), t + "</div>"
            }, t.templates.email_capture = function(e) {
                var t = '<div class="vp-email-capture-wrapper ';
                return e.showWebinarForm && (t += "vp-webinar-wrapper"), t += '"><div class="vp-email-capture ', e.registrationFull && (t += "hidden"), t += '"> ', e.text || (t += ' <div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> "), t += ' <form class="vp-email-capture-form" novalidate><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += ' <div class="vp-email-capture-title" id="vp-overlay-labelledby"> ', e.showWebinarForm && e.showWebinarLogin ? t += this.render("email_capture_title", {
                    title: e.reg_login_title
                }) || "" : e.text && (t += this.render("email_capture_title", {
                    title: e.text
                }) || ""), t += ' </div></div><div class="vp-email-capture-form-fields-bubble-wrapper"><div class="vp-email-capture-form-fields-wrapper"><div class="vp-email-capture-form-fields-slider"> ', t += this.render("email_capture_fields", {
                    customFields: e.customFields
                }) || "", t += ' </div></div><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-message"></div></div></div><div class="vp-email-capture-form-buttons"><input class="vp-email-capture-form-button vp-email-capture-form-button--back" tabIndex="-1" type="button" value="' + e.strings.back + '" aria-hidden="true"><div class="vp-email-capture-form-button--next-submit-wrapper"><div class="vp-email-capture-form-button--next-submit-slider"><input class="vp-email-capture-form-button vp-email-capture-form-button--next" tabIndex="-1" type="button" value="' + e.strings.next + '" aria-hidden="true"><input class="vp-email-capture-form-button vp-email-capture-form-button--submit" tabIndex="-1" type="submit" value="' + e.strings.submit + '" aria-hidden="true"></div></div></div> ', e.showWebinarForm ? t += this.render("webinar_disclaimer", {
                    text: e.strings.webinar,
                    url: e.privacyPolicy
                }) || "" : t += this.render("email_capture_disclaimer", {
                    text: e.strings,
                    url: e.privacyPolicy
                }) || "", e.showWebinarForm && (t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "", t += " </div> "), t += ' </form><div class="vp-email-capture-form-skip"> ', e.allowSkip && (t += this.render("email_capture_skip", {
                    position: e.position,
                    skipText: e.strings.skip,
                    skipToVideoText: e.strings.skip_to_video,
                    positionIsAfter: e.positionIsAfter
                }) || ""), t += ' </div><div class="vp-email-capture-progress-wrapper"><div class="vp-email-capture-steps"> ' + e.strings.step + ' <span class="vp-email-capture-current-step"></span> ' + e.strings.of + ' <span class="vp-email-capture-total-steps">' + e.customFields.length + '</span></div><div class="vp-email-capture-progress-bar"><span class="vp-email-capture-progress-meter"></span></div></div></div><div class="vp-email-capture-thank-you hidden"><div class="vp-email-capture-thank-you-box"><h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.successful + "</p></div> ", e.positionIsAfter || (t += ' <div class="vp-email-capture-video-countdown vp-email-capture-video-countdown-meter-wrapper" aria-label="' + e.strings.video_starts + '"><div class="vp-email-capture-video-countdown-meter"></div><div class="vp-email-capture-video-countdown-meter-text"> ' + e.strings.video_starts + ' <span class="vp-email-capture-video-countdown-timer"></span></div></div> '), t += ' </div><div class="vp-email-capture-reg-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.reg_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.reg_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-login-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.login_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.login_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-reg-full ', e.registrationFull || (t += "hidden"), t += '"><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += " </div> ", t += this.render("webinar_full", {
                    text: e.strings.webinar.reg_full
                }) || "", t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', (t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "") + ' </div></div></div><div class="vp-email-capture-dropdown-overlay"></div>'
            }, t.templates.email_capture_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper"><div class="vp-email-capture-disclaimer" value="';
                return t += this.escape(e.text.disclaimer) || "", t += '">', t += this.escape(e.text.disclaimer) || "", t += "</div> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.privacy_policy + "</a> "), t + "</div>"
            }, t.templates.email_capture_field = function(e) {
                var t = "";
                if ("dropdown" === e.field.field_type && e.field.field_metadata && e.field.field_metadata.options) {
                    if (e.field.required) {
                        t += ' <div class="vp-email-capture-form-custom-field required vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly required /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option-disabled" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var n = 0; n < e.field.field_metadata.options.length; n++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[n].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[n].option_label + " </li> ";
                        t += " </ul></div></div> "
                    } else {
                        t += ' <div class="vp-email-capture-form-custom-field vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var i = 0; i < e.field.field_metadata.options.length; i++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[i].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[i].option_label + " </li> ";
                        t += " </ul></div></div> "
                    }
                    t += ""
                } else e.field.required ? (t += ' <div class="vp-email-capture-form-custom-field required" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" maxlength="180" tabIndex="-1" required /></div> ') : (t += ' <div class="vp-email-capture-form-custom-field" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="180" /></div> '), t += "";
                return t + ""
            }, t.templates.email_capture_fields = function(e) {
                for (var t = "", n = 0; n < e.customFields.length; n++) t += this.render("email_capture_field", {
                    field: e.customFields[n]
                }) || "", t += "";
                return t + ""
            }, t.templates.email_capture_logo = function(e) {
                var t = '<img src="';
                return (t += this.escape(e.url) || "") + '" alt="" class="vp-email-capture-logo">'
            }, t.templates.email_capture_skip = function(e) {
                var t = "";
                return e.positionIsAfter && (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipText + '">'), t += "", e.positionIsAfter || (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipToVideoText + '">'), t + ""
            }, t.templates.email_capture_start_time = function(e) {
                return '<div class="vp-email-capture-start-time"> ' + e.startTime + "</div>"
            }, t.templates.email_capture_title = function(e) {
                var t = "";
                return (t += this.escape(e.title) || "") + ""
            }, t.templates.error = function(e) {
                var t = '<div class="vp-overlay-content error"><div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> ";
                return e.title && (t += " <h1>" + e.title + "</h1> "), e.message && (t += " <p>" + e.message + "</p> "), t + "</div>"
            }, t.templates.outro_email = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_image = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> ';
                return e.url && (t += '<a class="vp-outro-imageLink js-imageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), e.bgimage && (t += '<div class="vp-outro-image" style="background-image: url(' + e.bgimage + ');"', e.alt_text && (t += ' aria-label="', t += this.escape(e.alt_text) || "", t += '" role="img"'), t += "></div>"), e.url && (t += "</a>"), t + "</div>"
            }, t.templates.outro_link = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', e.title && (t += '<h1 class="vp-outro-textTitle js-outro-title">', t += this.escape(e.title) || "", t += "</h1>"), e.description && (t += '<p class="vp-outro-textDescription js-outro-text">', t += this.escape(e.description) || "", t += "</p>"), e.text && e.url && (t += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', t += this.escape(e.text) || "", t += "</span></a></div> "), e.text2 && e.url2 && (t += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + e.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', t += this.escape(e.text2) || "", t += "</a></div> "), t + " </div></div>"
            }, t.templates.outro_nothing = function(e) {
                return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_share = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', (t += this.render("icon_prev") || "") + "</button></nav>"
            }, t.templates.outro_staticimage = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> ';
                return e.url && (t += '<a class="vp-outro-staticImageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t += ' <img class="vp-outro-staticImage" src="' + e.svg_url + '"> ', e.url && (t += "</a>"), t + " </div></div>"
            }, t.templates.outro_text = function(e) {
                return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + e.text + "</div></div></div>"
            }, t.templates.outro_videos = function(e) {
                var t = '<div class="vp-outro-bg"';
                e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
                for (var n = 0; n < e.contexts.length; n++) {
                    var i = e.contexts[n];
                    t += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + i.videos.length, i.promoted && (t += " vp-outro-videosSection--promoted"), t += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + i.context + "</h1> ", e.showFollowButton && !i.promoted && (t += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="', e.following ? t += "true" : t += "false", t += '"> ', t += this.render("icon_follow") || "", t += ' <span class="vp-outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '), t += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + i.videos.length + '"> ';
                    for (var o = 0; o < i.videos.length; o++) t += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == n && (t += " hovered"), t += '" href="' + i.videos[o].url + '" ', e.target && (t += ' target="_blank" rel="noopener" '), t += ' data-video-id="' + i.videos[o].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + i.videos[o].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', t += this.escape(i.videos[o].title) || "", t += "</h1> ", i.videos[o].byline && (t += ' <h2 class="vp-outro-videoByline">', t += this.escape(i.videos[o].byline) || "", t += "</h2> "), t += " </header></a> ";
                    t += " </ul></div> "
                }
                return t + "</div>"
            }, t.templates.outro_vod = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + e.url + '" target="_blank" rel="noopener">';
                t += this.escape(e.title) || "", t += "</a></h1> ";
                var n = e.countries,
                    i = e.country;
                if (this.helpers.isAvailableInCountry(n, i))
                    if (e.purchased) t += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.strings.watch + "</a> ";
                    else {
                        if (!e.isComingSoon) {
                            t += ' <ul class="vp-outro-vod"> ';
                            for (var o = 0; o < e.buttons.length; o++) {
                                t += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + e.buttons[o].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[o].product_id + '" target="_blank" rel="noopener" data-product-id="' + e.buttons[o].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === e.buttons[o].type ? t += this.render("icon_vod_download") || "" : "rent" === e.buttons[o].type ? t += this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[o].type ? t += this.render("icon_vod_subscribe") || "" : t += this.render("icon_vod") || "", t += " </div> ";
                                var r = e.currency,
                                    a = e.buttons[o];
                                t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", r, a) + "</p></a></li> "
                            }
                            t += " </ul> "
                        }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                    }
                return t + " </div></div>"
            }, t.templates.password = function(e) {
                return '<div class="vp-overlay-content password form"><h1 class="header" id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>'
            }, t.templates.private_locked = function(e) {
                return '<div class="vp-overlay-content login"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + e.strings.buttonText + "</a></div>"
            }, t.templates.share = function(e) {
                var t = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share" id="vp-overlay-labelledby">' + e.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + e.playerShareUrl + "/facebook" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + e.playerShareUrl + "/twitter" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + e.playerShareUrl + "/tumblr" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.tumblrIcon + " </a> ";
                return e.shareUrl && (t += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" role="button" aria-describedby="new-window" > ' + e.emailIcon + " </a> "), t += " </ul> ", e.embed && (t += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + e.url + '#share" target="_blank" rel="noopener" role="button" > ' + e.embedIcon + " </a></li></ul> "), e.shareUrl && (t += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="vp-share-screen vp-share-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + e.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="vp-share-footnote vp-share-footnote--embed">' + e.strings.customize + "</p> "), t += " </div></section> "), t + "</div>"
            }, t.templates.webinar_confirmation = function(e) {
                var t = '<div class="vp-email-capture-reg-thank-you"><div class="vp-email-capture-thank-you-box"> ';
                return e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t + ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.thank_you_subtitle + "</p></div></div>"
            }, t.templates.webinar_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper vp-webinar-disclaimer-wrapper"> ';
                return t += ' <div class="vp-webinar-compliance-checkbox-border"><input type="checkbox" class="vp-disclaimer-checkbox"></div><div class="vp-disclaimer-text-wrapper"><label for="vp-disclaimer-checkbox" class="vp-email-capture-disclaimer vp-webinar-disclaimer"> ' + e.text.disclaimer + " </label> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.host_privacy_policy + "</a> "), t + ' <div class="vp-opt-in-bubble hidden"><p class="vp-opt-in-bubble-message">' + e.text.opt_in_error + "</p></div></div></div>"
            }, t.templates.webinar_ended = function(e) {
                var t = '<div class="vp-text-alert-wrapper "> ';
                return e.strings.title && (t += ' <div class="vp-alert-text">' + e.strings.title + "</div> "), t + "</div>"
            }, t.templates.webinar_full = function(e) {
                return '<div class="vp-reg-full-wrapper"><h2 class="vp-reg-full-text"> ' + e.text + " </h2></div>"
            }, t.templates.webinar_registration_bypass_btn = function(e) {
                var t = "";
                return e.showWebinarLogin ? e.showWebinarLogin && !e.registrationFull && (t += ' <button class="vp-email-capture-reg-go-back vp-webinar-email-capture-reg-go-back">' + e.regGoBack + "</button>") : t += ' <button class="vp-email-capture-reg-bypass">' + e.regBypass + "</button>", t + ""
            }, e.exports ? e.exports = t : window.Aftershave = t
        }()
    }));
const Za = function(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    }), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function Ja(e, t, n) {
    const i = c() ? n.parentElement : n,
        o = n.querySelector(".vp-video-wrapper"),
        r = f(s, 150),
        a = f(l, 150);

    function s() {
        const {
            width: e,
            height: n
        } = vt(i);
        t.dispatch(((e, t) => ({
            type: "CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function l() {
        const {
            width: e,
            height: n
        } = vt(o);
        t.dispatch(((e, t) => ({
            type: "PLAYER_CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: o
    }) {
        c() && (i.classList.toggle("vp-center", "contain" === e), function(e, t) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map(t => e.style.removeProperty(t))
        }(n), "contain" !== e ? o > 0 && wt(n, {
            height: `calc(100% - ${o}px)`,
            bottom: `${o/2}px`
        }) : wt(n, o > 0 ? {
            maxWidth: `calc((100vh - ${o}px) / ${t})`,
            maxHeight: `calc(100vh - ${o}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: `${o/2}px`
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new ne(r).observe(i), new ne(a).observe(o), window.addEventListener("orientationchange", r), window.addEventListener("orientationchange", a), e.events.on(Wt._didEnterFullscreen, r), e.events.on(Wt._didExitFullscreen, r), e.events.on(Wt._didEnterFullscreen, a), e.events.on(Wt._didExitFullscreen, a), s(), l()
}

function Qa(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function es(e) {
    const {
        videoObject: t
    } = ns();
    null == e || !e.length || null != t && t.transcript || ts({
        transcript: e.map(({
            text: e
        }) => e).join(" ")
    })
}

function ts(e) {
    const {
        videoObject: t,
        element: n
    } = ns();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function ns() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function is(e, t) {
    switch (e.view) {
        case Kt.privateLocked:
            throw new ie("The video is private.", "PrivacyError", t);
        case Kt.privatePassword:
            throw new ie("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case Kt.error:
            throw new ie(e.message, "NotFoundError", t)
    }
}

function os(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}

function rs(e) {
    const t = e.events;
    let n, i, o, a = w(),
        s = !1,
        c = !1,
        u = null,
        p = !1,
        _ = null,
        v = null;

    function f(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function g() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function b() {
        var t = Ct(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function E(n, i, o, a = []) {
        const s = rn[i];
        let l = e.config.embed[s];
        l || i !== en || (l = e.config.embed.color);
        let c = e.config.embed.settings[`force_${s}`];
        if (c || i !== en || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new ie(`The creator of the video has chosen to always use ${new r(l).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new r(n);
            t.fire(Nt._changeColor, o.hex, i), a.forEach((function(t) {
                const n = rn[t],
                    i = e.config.embed[n];
                try {
                    new r(i).contrast(o).ratio
                } catch (Te) {}
            }))
        } catch (Te) {
            throw new ie("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let y = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            or(Yo.TIMING_OBJECT_CONNECT, e.config)
        },
        notifyTimingObjectDisconnect() {
            or(Yo.TIMING_OBJECT_DISCONNECT, e.config)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t), t ? (e.events.prependOn(Wt._fullscreenButtonPressed, g), n.listeners.exitFullscreen = !0, e.events.fire(Wt._willEnterFullscreen), e.events.fire(Wt._didEnterFullscreen, !0, !0)) : (e.events.off(Wt._fullscreenButtonPressed, g), n.listeners.exitFullscreen = !1, e.events.fire(Wt._willExitFullscreen), e.events.fire(Wt._didExitFullscreen, !0))
        },
        on(e, t) {
            e in zt && (e = zt[e]);
            const i = St(jt);
            if (i.indexOf(e) < 0) throw new ie(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && a.on(e, t), n && (n.listeners[e] = !0), e === jt.LOADED && k()
        },
        off(e, t) {
            t && a.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise((n, i) => {
            t.once(Wt._playResolved, n), t.once(Wt._playRejected, e => {
                i(new ie(e.message, e.name, "play"))
            }), is(e.config, "play"), t.fire(Yt._play), t.fire(Wt._playButtonPressed)
        }),
        destroy() {
            t.fire(Nt._destroy)
        },
        pause() {
            is(e.config, "pause"), t.fire(Yt._pause), t.fire(Wt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: n,
                url: i,
                params: o
            } = function(e) {
                if (!e) return {};
                if (lt(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!lt(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!n && !i) throw new ie("The video id must be an integer.", "TypeError", "loadVideo");
            if (i && i.match(null === new RegExp(`^https?://${e.config.player_url}/video/([0-9]+)/config`))) throw new ie("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
            return e.loadVideo(i || n, o).then(() => t).catch(() => {
                throw is(e.config, "loadVideo"), new ie("An error occurred loading the video.", "Error", "loadVideo")
            })
        },
        unload() {
            e.config.view !== Kt.main && e.config.view !== Kt.privateUnlocked && e.config.view !== Kt.webinarUnlocked || t.fire(Nt._reset)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new ie(`Cue point time must be positive number less than the duration of the video (${Ct(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout(() => {
                    t.fire(Wt._cuePointAdded, o)
                }, 0), o.id
            } catch (Te) {
                if ("CuePointsNotSupported" === Te.name) throw new ie("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new ie("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter(e => e.id === n)[0];
            if (!i) throw new ie(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout(() => {
                t.fire(Wt._cuePointRemoved, i)
            }, 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(e => (e.language = e.lang, e));
            if (!r.some(e => e.language.toLowerCase() === n.toLowerCase())) throw new ie(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const a = o ? `${n}.${o}` : n,
                {
                    track: s
                } = ((e, t = []) => {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter(e => r && e.language === n || e.language === o).sort((e, t) => {
                        const r = 2 * Number(e.language === o && e.kind === i) + 2 * Number(e.language === n) + 1 * Number(e.kind === i);
                        return 2 * Number(t.language === o && t.kind === i) + 2 * Number(t.language === n) + 1 * Number(t.kind === i) - r
                    });
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                })(a, r);
            if (!s || o && s.kind !== o) throw new ie(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(Nt._turnCaptionsOn, s.id), i < 3 ? null : new Promise((e, n) => {
                t.once(Wt._captionsChanged, (t, n) => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                })
            })
        },
        disableTextTrack() {
            t.fire(Nt._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise((i, o) => {
                if (!se.element === e) {
                    const r = () => {
                            se.off("enter", r), i()
                        },
                        a = (t, i) => {
                            se.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new ie(r.msg, r.name, `${e?"request":"exit"}Fullscreen`))
                        };
                    return se.on("enter", r), se.on("error", a), void t.fire(Wt._fullscreenButtonPressed)
                }
                i()
            })
        },
        requestFullscreen: () => y.toggleFullscreen(!0),
        exitFullscreen: () => y.toggleFullscreen(!1),
        get fullscreen() {
            return !!se.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new ie("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                (function(e, t, n) {
                    const {
                        duration: i,
                        id: o,
                        privacy: r
                    } = e.video;
                    "disable" !== r && "anybody" !== r && "unlisted" !== r || ts({
                        hasPart: function(e, t, n, i) {
                            if (t < 30 || 0 === i.length) return [];
                            const o = [];
                            return i.forEach((r, a) => {
                                const {
                                    startTime: s,
                                    text: l
                                } = r;
                                if (s < t) {
                                    var c;
                                    const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                        r = `vimeo_t_${e}`,
                                        [d] = n.split("#"),
                                        u = `${d}#${r}=${s}`;
                                    o.push({
                                        "@type": "Clip",
                                        name: l,
                                        startOffset: s,
                                        endOffset: t,
                                        url: u
                                    })
                                }
                            }), o.length && (o[o.length - 1].endOffset = t), o
                        }(o, i, t, n)
                    })
                })(e.config, n, o), t.fire(Wt._parentUrlAvailable, n), i()
            } catch (r) {
                o(new ie((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        }),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!br.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            E(e, en, "setColor")
        },
        set colorOne(e) {
            E(e, Qt, "setColorOne", [en, tn])
        },
        set colorTwo(e) {
            E(e, en, "setColorTwo", [Qt])
        },
        set colorThree(e) {
            E(e, tn, "setColorThree", [Qt])
        },
        set colorFour(e) {
            E(e, nn, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map(e => ({
                time: e.time,
                data: e.data,
                id: e.id
            }))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new ie(`Seconds must be a positive number less than the duration of the video (${Ct(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(Yt._seek), t.fire(Nt._seek, n), t.fire(Wt._mousedOver), i < 3 ? null : new Promise((e, n) => {
                t.once(m.SEEKED, ({
                    currentTime: t
                }) => {
                    e(t)
                })
            })
        },
        get duration() {
            return Ct(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(Nt._changeLoop, e)
        },
        set muted(e) {
            t.fire(Nt._changeMuted, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === b()
        },
        get paused() {
            return !(e.backbone && "paused" in e.backbone && !e.backbone.paused)
        },
        get buffered() {
            return os(e.backbone.buffered)
        },
        get played() {
            return os(e.backbone.played)
        },
        get seekable() {
            return os(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new ie("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new ie("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(Nt._changePlaybackRate, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map(e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            }))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new ie("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return b()
        },
        set volume(n) {
            if (n = parseFloat(n), 1 === i && (n /= 100), isNaN(n) || n < 0 || n > 1) throw new ie("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            v = n, e.backbone.supportsSettingVolume || 0 !== n ? t.fire(Nt._changeVolume, n, !0) : t.fire(Nt._changeMuted, !0, !0)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!Qa(e.config.video.owner)) throw new ie("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map(e => e.id);
            if (!n.includes(t)) throw new ie(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideo(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            e.config.user.liked !== n && t.fire(Wt._likeButtonPressed, n)
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            e.config.user.watch_later !== n && t.fire(Wt._watchLaterButtonPressed, n)
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex(e => t === e.id);
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            }))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new ie(`Chapter timecode must be positive number less than the duration of the video (${Ct(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (Te) {
                if ("ChaptersNotSupported" === Te.name) throw new ie(Te.message, "UnsupportedError", "_addChapter");
                throw new ie("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (Te) {
                throw new ie("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new ie("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (Te) {
                if ("ChaptersNotSupported" === Te.name) throw new ie("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new ie("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(Nt._addCard, e)
        },
        _removeCard(e) {
            t.fire(Nt._removeCard, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(Nt._hideOutro), setTimeout(() => {
                e.config.embed.outro = n, t.fire(Nt._showOutro, n, i)
            }, 400)) : t.fire(Nt._showOutro, n, i)
        },
        _hideOutro() {
            t.fire(Nt._hideOutro)
        },
        _setEmailCapture(t) {
            if (!t) return void y._unsetEmailCapture();
            let n = t.customFields ? e.config.embed.email_capture_form || {} : e.config.embed.email || {};
            n.position = t.position.toLowerCase(), n.timecode = t.timecode, t.nohide = !0, t.noblur = !0, t.nofocus = d(t, "nofocus", !0), y._showOverlay("email-capture", t)
        },
        _updateEmailCapture(n) {
            var i;
            n.custom_fields ? (l(null == (i = e.config.video.webinar) ? void 0 : i.registration_form) || (e.config.video.webinar.registration_form = n), t.fire(Nt._updateEmailCapture, n)) : this._setEmailCapture(n)
        },
        _updateWebinarStartTime(n) {
            e.config.video.webinar && (e.config.video.webinar.scheduled_start_time = n), t.fire(Nt._updateWebinarStartTime, n)
        },
        _setActiveEmailCapturePage(e) {
            t.fire(Nt._setActivePage, e)
        },
        _unsetEmailCapture() {
            e.config.embed.outro && (t.fire(Nt._hideOutro), delete e.config.embed.outro), e.config.embed.email && (t.fire(Nt._hideOverlay, {
                unmakeModal: !0
            }), delete e.config.embed.email)
        },
        _hideOverlay(e) {
            t.fire(Nt._hideOverlay, {
                name: e,
                unmakeModal: !0
            })
        },
        _showOverlay(e, n) {
            t.fire(Nt._showOverlay, e, n)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.video.live_event && (Object.keys(n).forEach(i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(Wt._liveEventSettingsChanged, i, o), t.fire(q.SETTINGS_UPDATED, i, o)
            }), t.fire(Wt._configChanged, !1, e.config))
        },
        _setEmbedSettings(n) {
            Object.keys(n).forEach(i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire(Wt._embedSettingChanged, i, r)
            }), t.fire(Wt._configChanged, !1, e.config)
        },
        _setEmbedSetting(n, i) {
            i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire(Wt._embedSettingChanged, n, i), t.fire(Wt._configChanged, !1, e.config)
        },
        _setCreateInteractive(n, i) {
            e.config.embed.create_interactive = n, e.config.embed.interactive = i, t.fire(Wt._createInteractiveChanged, n, e.config), t.fire(Wt._configChanged, !1, e.config)
        },
        _setOTTVideoMetadata(n) {
            e.config.request.flags.ott && (e.ottVideoMetadata = n, t.fire(Wt._ottMetadataSet, n))
        },
        _toggleDebugPanel() {
            t.fire(Wt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            t.fire(Nt._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            t.fire(Nt._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (Te) {
                throw new ie(Te.message, Te.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (Te) {
                throw new ie(Te.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = br.currentSession;
            t && le(e) && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = {
                    get details() {
                        const e = vt(document.querySelector(".headers > h1")),
                            t = vt(document.querySelector(".sub-title")),
                            n = vt(document.querySelector(".vp-portrait")),
                            i = Math.max(e.width, t.width) + n.width,
                            o = Math.max(n.height, e.height + t.height);
                        return {
                            top: 10,
                            left: 10,
                            width: Math.max(200, i),
                            height: Math.max(60, o)
                        }
                    },
                    get sidedock() {
                        return {
                            top: 10,
                            left: t - 10 - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = i.customLogo,
                            o = Math.max(60, e.height);
                        return {
                            height: o,
                            top: n - 10 - o,
                            left: 10,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            i = e ? vt(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - 10 - i.height,
                            left: t - 10 - i.width,
                            width: i.width,
                            height: i.height
                        }
                    }
                };
            return i
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            y.on.apply(y, e)
        },
        removeEventListener(...e) {
            y.off.apply(y, e)
        },
        seekTo(e) {
            y.currentTime = e
        },
        changeColor(e) {
            y.color = e
        }
    };
    const T = {
        addCuePoint: ({
            time: e,
            data: t
        }) => y.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            y.enableTextTrack(e, t)
        }
    };

    function L(e, t) {
        n && n.emit(e, t), a.fire(e, t)
    }
    const A = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        L(e, i)
    };

    function S({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: Ct(e),
            percent: Ct(n),
            duration: Ct(t)
        }
    }

    function I(e) {
        return {
            playbackRate: e
        }
    }

    function k() {
        L(jt.LOADED, p ? null : (p = !0, {
            id: e.config.video.id
        }))
    }

    function O(e) {
        return u = e, R(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new ie("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new ie("There was an error loading the files for this video.", "FileError")
            }
            return new ie("An error occurred during playback.", "PlaybackError")
        }(u))
    }

    function R(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            if (e.config.embed.on_site) return;
            f(e.config.embed.api);
            const i = e.config.request.referrer,
                o = oe(i),
                r = "null" !== o ? o : "*";
            n = new re, n.configureClient(window.parent, r), n.filter((function() {
                return ae()
            })), n.listeners = St(jt).reduce((e, t) => h(h({}, e), {}, {
                [t]: !1
            }), {}), n.listeners[jt.READY] = !0, n.listeners[jt.ERROR] = !0, n.filter(e => n.listeners[e]), t.on(Wt._remoteComponentMounted, (e, t, i) => {
                n.addAllowedActor(e, null == t ? void 0 : t.contentWindow, i)
            })
        }(),
        function() {
            if (!n) return;
            const t = Za({}, y, T);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    L(jt.ERROR, R(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (le(e)) return f(3), e;
                    try {
                        const t = JSON.parse(e);
                        return f(2), t
                    } catch (t) {
                        return f(null), L(jt.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    (null == (n = e.config.embed) ? void 0 : n.player_id) && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in zt)
                                    if (zt[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), le(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (Te) {}
                    return t
                }
            })
        }(), t.on(C.BUFFER_STARTED, A(jt.BUFFER_START)), t.on(C.BUFFER_ENDED, A(jt.BUFFER_END)), t.on(C.CUE_POINT, A(jt.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(P, A(jt.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on(Wt._chapterChanged, A(jt.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex(e => t === e.id);
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(Wt._ended, A(jt.ENDED, (function() {
            return c = !1, {
                seconds: Ct(e.config.video.duration),
                percent: 1,
                duration: Ct(e.config.video.duration)
            }
        }))), t.on(Wt._paused, A(jt.PAUSE, (function(t) {
            return c = !1, {
                seconds: Ct(t),
                percent: Ct(t / e.config.video.duration),
                duration: Ct(e.config.video.duration)
            }
        }))), t.on(Wt._playbackRateChanged, A(jt.PLAYBACK_RATE_CHANGE, I)), t.on(Wt._playbackRateChanged, A(jt.RATE_CHANGE, I)), t.on(Wt._captionsChanged, A(jt.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(Wt._volumeChanged, A(jt.VOLUME_CHANGE, (function(e) {
            return {
                volume: Ct(e)
            }
        }))), t.on(Wt._controlBarVisibilityChanged, A(jt.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Wt._toastVisibilityChanged, A(jt.TOAST_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Wt._configChanged, (function(n) {
            v && setTimeout((function() {
                e.backbone.supportsSettingVolume || 0 !== v ? t.fire(Nt._changeVolume, v, !0) : t.fire(Nt._changeMuted, !0, !0)
            }), 0), n && k()
        })), t.on(Wt._error, (function(e) {
            const t = O(e);
            s && L(jt.ERROR, t)
        })), t.on(Wt._didEnterFullscreen, A(jt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(Wt._didExitFullscreen, A(jt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(Wt._qualityChanged, A(jt.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(Wt._adStarted, A(jt.AD_STARTED)), t.on(Wt._adComplete, A(jt.AD_COMPLETED)), t.on(Wt._adError, A(jt.AD_ERROR)), t.on(Wt._adSkipped, A(jt.AD_SKIPPED)), t.on(Wt._allAdsCompleted, A(jt.AD_ALL_COMPLETED)), t.on(Wt._adClicked, A(jt.AD_CLICKED)), t.on(Wt._interactiveHotspotClicked, A(jt.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(Wt._interactiveOverlayPanelClicked, A(jt.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(Wt._ready, (function() {
            s = !0, L(jt.READY), u && (L(jt.ERROR, O(u)), u = null)
        })), t.on(q.EVENT_ENDED, A(jt.LIVE_EVENT_ENDED)), t.on(q.EVENT_STARTED, A(jt.LIVE_EVENT_STARTED)), t.on(q.STREAM_OFFLINE, A(jt.LIVE_STREAM_OFFLINE)), t.on(q.STREAM_ONLINE, A(jt.LIVE_STREAM_ONLINE)), t.on(W.CAMERA_CHANGE, A(jt.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(W.MOTION_END, A(jt.MOTION_END)), t.on(W.MOTION_START, A(jt.MOTION_START)), t.on(W.WEBVR_HARDWARE_AVAILABLE, A(jt.WEBVR_HARDWARE_AVAILABLE)), t.on(W.WEBVR_ENTER, A(jt.ENTER_WEBVR)), t.on(W.WEBVR_EXIT, A(jt.EXIT_WEBVR)), t.on(W.SPATIAL_UNSUPPORTED, A(jt.SPATIAL_UNSUPPORTED)), t.on(m.PLAY, A(jt.PLAY, (function(t) {
            return c ? null : (c = !0, {
                seconds: Ct(t),
                percent: Ct(t / e.config.video.duration),
                duration: Ct(e.config.video.duration)
            })
        }))), t.on(m.PLAYING, A(jt.PLAYING, (function() {
            return c ? {
                seconds: Ct(e.currentTime),
                percent: Ct(e.currentTime / e.config.video.duration),
                duration: Ct(e.config.video.duration)
            } : null
        }))), t.on(m.PROGRESS, A(jt.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: Ct(e),
                percent: Ct(n),
                duration: Ct(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(m.SEEKING, A(jt.SEEKING, S)), t.on(m.SEEKED, A(jt.SEEKED, S)), t.on(m.TIME_UPDATE, A(jt.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: Ct(e),
                percent: Ct(n),
                duration: Ct(t)
            }
        }))), t.on(m.LOADED_METADATA, A(jt.LOADED_METADATA)), t.on(m.DURATION_CHANGE, A(jt.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(m.WAITING, A(jt.WAITING)), t.on(m.LOADED_DATA, A(jt.LOADED_DATA)), t.on(m.LOAD_START, A(jt.LOAD_START)), t.on(m.RESIZE, A(jt.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(m.ENTER_PICTURE_IN_PICTURE, A(jt.ENTER_PICTURE_IN_PICTURE)), t.on(m.LEAVE_PICTURE_IN_PICTURE, A(jt.LEAVE_PICTURE_IN_PICTURE)), t.on(hr.connected, A(jt.CHROMECAST_CONNECTED)), t.on(Wt._airPlayAvailable, A(jt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !0)), t.on(Wt._airPlayNotAvailable, A(jt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !1)), t.on(Wt._airPlayActivated, A(jt.REMOTE_PLAYBACK_CONNECT)), t.on(Wt._airPlayDeactivated, A(jt.REMOTE_PLAYBACK_DISCONNECT)), t.on(Nt._reset, (function() {
            u = null, p = !1
        })), e.doNotTrackEnabled || (t.on(Wt._emailCaptureSuccess, () => {
            L(jt.EMAIL_CAPTURE)
        }), t.on(Wt._emailCaptureFailure, () => {
            L(jt.EMAIL_CAPTURE_FAILED)
        })), t.on(Wt._spaceChanged, (function(e = {}) {
            n && (n.listeners[jt.SPACE_CHANGE] = !0, L(jt.SPACE_CHANGE, e))
        })), t.fire(Wt._apiModuleReady), y
}
let as = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
    }
    var t = e.prototype;
    return t.show = function(e) {
        this.alertContentElement.innerHTML = e, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
const ss = h(h({}, ce), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr",
    WEBINAR_REGISTRANT_BLOCKED: "webinar-registrant-blocked",
    WEBINAR_REGISTRANT_UNBLOCKED: "webinar-registrant-unblocked"
});

function ls(e) {
    return It("av01", e) ? "AV1" : It("dvh1", e) ? "HEVC_DVH1" : It("hvc1", e) ? "HEVC" : It("avc1", e) ? "AVC" : null
}

function cs(e) {
    return It("mp4a", e) ? "AAC" : It("opus", e) ? "OPUS" : null
}

function ds(e, t) {
    var n, i;
    return (null == e || null == (n = e.request) || null == (i = n.ab_tests) ? void 0 : i[t]) ? e.request.ab_tests[t] : {}
}

function us(t, n, i, r) {
    const a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Te) {
                return Promise.reject(Te)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t, n) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    s = r[e.stream];
                if (!s) return;
                const l = function(e, n, i, o, r, a) {
                    const s = i.headers;
                    delete s[""];
                    let l = {};
                    Object.keys(s).forEach(e => {
                        const t = s[e],
                            n = e.replace(v, "_");
                        l[n] = t
                    });
                    let c = a.slice();
                    return c.forEach(e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    }), {
                        host: me(n.data.url),
                        product: oo(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        headers: l,
                        buffered: Ct(pe(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, a, s, r);
                let d = l;
                o && (d = fe({
                    extraContext: o
                }, l)), t.events.fire(Wt._logMetric, {
                    name: ss.CHUNK_DOWNLOADED,
                    data: d
                });
                const u = {
                    ak_reference_id: l.headers.akamai_grn || null,
                    akamai_edge_ip: l.headers.akamai_request_bc || null,
                    content_length: l.headers.content_length || null,
                    content_type: l.headers.content_type || null,
                    x_vim_cachebc: l.headers.x_vim_cachebc || null,
                    x_cache: l.headers.x_cache || null,
                    x_cache_hits: l.headers.x_cache_hits || null
                };
                l.headers = u, ds(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: Tt(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new c(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", l, Go(t.config)), J += a.byteLength, ee = l
            }
            "akamai-grn" in r && (F = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    if ("x-cache-hits" in e) {
                        let n = e["x-cache-hits"].match(/(0|1)(?:, (0|1))?/);
                        null !== n && (H = {
                            url: t,
                            servedBy: e["x-served-by"],
                            edge: n[1] ? !!parseInt(n[1], 10) : null,
                            tier1: n[2] ? !!parseInt(n[2], 10) : null,
                            tier2: null
                        })
                    } else if ("x-vim-cachebc" in e) {
                        let n = e["x-vim-cachebc"].match(/E:(m|h)(?:,TD0:(m|h))?(?:,TD1:(m|h))?(?:,TD2:(m|h))?/);
                        if (null !== n) {
                            H = {
                                url: t,
                                edge: n[1] ? n[1] : null,
                                tier1: n[2] ? n[2] : null,
                                tier2: n[3] ? n[3] : null
                            };
                            for (let e in H) "edge" !== e && "tier1" !== e && "tier2" !== e || ("h" === H[e] ? H[e] = !0 : "m" === H[e] && (H[e] = !1))
                        }
                    }
                }(i);
            let s = {};
            F && (s.akamai_reference_id = F), s.manifest_load_durations = t.backbone.manifestLoadDurations, s.successful_segment_count = t.backbone.successfulSegments.length, s.failed_segment_count = t.backbone.failedSegments.length, K = s
        }))
    }));
    let s, u, p;
    const _ = new WeakMap,
        v = new RegExp("-", "g");
    let f, h = null,
        g = null,
        b = !1,
        E = !1,
        T = !1,
        L = "auto",
        w = {},
        A = {},
        S = null,
        I = null,
        k = null,
        P = [],
        O = null,
        R = {},
        N = !1,
        D = !1,
        M = !1,
        B = 0,
        V = 0,
        U = 0,
        F = null,
        H = null,
        $ = !1,
        K = null,
        j = null,
        z = null,
        X = !1,
        Z = !1,
        J = 0,
        Q = 0,
        ee = null;

    function te() {
        const e = _.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: u,
            _metricsBufferTracker: p
        } = e) : (p = new _e, u = new ue(t.backbone.videoElement, ie), ne(), _.set(t.backbone.videoElement, {
            _videoMonitor: u,
            _metricsBufferTracker: p
        }))
    }

    function ne() {
        const e = p;
        u.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(C.BUFFER_STARTED, () => {
                    b && (X || $ || ($ = !0, e.trackBufferStart(u.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                }), t.events.on(C.BUFFER_ENDED, () => {
                    b && $ && ($ = !1, e.trackBufferEnd(u.logBufferEnd, {
                        cdn_data: H
                    }), e.resetLastBufferTime())
                })
            },
            addEventData(e) {
                const t = Z;
                switch (Z = !1, e) {
                    case ss.VIDEO_START_TIME:
                        return K;
                    case ss.VIDEO_SEEK:
                        const e = j;
                        return j = null, e;
                    case ss.VIDEO_PLAYED:
                    case ss.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            },
            customMinuteTracker: {
                shouldCount: () => {
                    var e;
                    return t.backbone.isLive() && (null == (e = t.config.video.live_event) ? void 0 : e.dvr) && !t.backbone.atLiveEdge
                },
                onCount: e => {
                    Q = e
                }
            }
        }), u.initHooks()
    }

    function ie(n, r = {}) {
        (function(e) {
            var n, i, o, r;
            switch (e) {
                case ss.VIDEO_SEEK:
                case ss.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (o = i.settings) ? void 0 : o.background);
                case ss.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (r = t.config.video.live_event) ? void 0 : r.low_latency;
                case ss.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return ar(.1);
                default:
                    return !1
            }
        })(n) || ((r = Object.assign(u ? u.globalProperties() : {}, Object.assign(function() {
            var e, n, r, a, s;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (n = e.owner) ? void 0 : n.id,
                product: oo(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Go(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (s = t.config.user) ? void 0 : s.team_origin_user_id,
                vuid: No("vuid"),
                fps: t.config.video.fps
            };
            var c;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), i.get(Nr) && (l.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), t.config.video.webinar && (l.webinar_uuid = t.config.video.webinar.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = Xn(),
                        o = ve("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        s = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let l = [];
                    a && (l = d(t.config, "request.files.progressive") || d(t.config, "request.files.hls") || []), r && (l = d(t.config, "request.files.dash.streams", [])), s && (l = t.backbone.video.currentFile.mime === Rt.dashMpd ? d(t.config, "request.files.dash.streams", []) : d(t.config, "request.files.hls.streams", []));
                    const c = Array.from(l).sort(o).map(e => e.profile);
                    let u = -1,
                        p = 0,
                        _ = null;
                    if (Object.keys(A).forEach(e => {
                            const t = c.indexOf(parseInt(e, 10));
                            t > u && (u = t);
                            const n = A[e].reduce((e, t) => ((t.end || i) - t.start) / 1e3 + e, 0);
                            n > p && (p = n, _ = e)
                        }), n.highest_profile = c[u], n.highest_available_profile = c[c.length - 1], n.most_used_profile = _, (r || s) && P) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(P))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(P))) / 1e3;
                        const t = P.reduce((e, t) => e + t, 0);
                        n.average_speed = Math.round(t / P.length) / 1e3
                    }
                    return n
                }();
            let {
                id: a = 0,
                mime: s = Rt.h264,
                metadata: {
                    profile: c = null
                } = {}
            } = o, u = !1, p = !1;
            switch (s) {
                case Rt.dash:
                    0 === o.restrictedStreamIndexes.length && (u = !0), d(t.config, "request.files.dash.separate_av") && (p = !0), c = w ? w.profile : null;
                    break;
                case Rt.hls:
                    u = !0
            }
            let _ = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3,
                auto: u,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== $t[s] ? $t[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : null,
                dropped_frame_percent: U,
                event_time: h + Jn(g),
                fullscreen: D,
                picture_in_picture: M,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                profile_id: c ? String(c) : null,
                codec: l(w) ? "" : ls(w.codecs),
                audio_codec: cs(null == (n = t.backbone) || null == n.getCurrentStream || null == (i = n.getCurrentStream("audio")) ? void 0 : i.codecs) || null,
                quality: w ? w.quality : null,
                quality_downswitch_count: V,
                quality_upswitch_count: B,
                separate_av: p,
                target_profile_id: z,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3,
                video_duration: Ct(t.config.video.duration)
            };
            if (t.backbone.isLive()) {
                var v;
                void 0 !== t.backbone.latency && (_.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (_.is_low_latency = t.backbone.lowLatencyMode);
                const e = !!(null == (v = t.config.video.live_event) ? void 0 : v.dvr);
                _.dvr = e, e && (_.in_dvr_mode = e && !t.backbone.atLiveEdge, _.dvr_minutes_watched = Q)
            }
            if (t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = Co(e);
                _.ecdn = !0, _.ecdn_provider = e, _.ecdn_bytes_via_cdn = n, _.ecdn_bytes_via_peering = i, _.ecdn_peers = o
            }
            return _
        }(), function() {
            let e = {};
            if (t.config.request.ab_tests)
                for (const n in t.config.request.ab_tests) {
                    const i = t.config.request.ab_tests[n];
                    e[`${n}_test`] = 1, e[`${n}_group`] = i.group;
                    for (const t in i.data) e[`${n}_data_${t}`] = i.data[t]
                }
            return e
        }()), r)).name = n, t.events.fire(Wt._logMetric, {
            name: n,
            data: r
        }), s.log(r).catch(e => {}))
    }

    function oe(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        u.handleExternalError(i, t)
    }
    g = Zn(), h = t.config.request.timestamp, t.config.request.drm, s = new c(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Wt._error, oe), t.events.on(Nt._reset, (function() {
        N = !1
    })), t.events.on(Nt._seek, (function() {
        X = !0
    })), t.events.on(Wt._didEnterFullscreen, (function() {
        D = !0, ie(ss.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(Wt._didExitFullscreen, (function() {
        D = !1, ie(ss.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(m.ENTER_PICTURE_IN_PICTURE, (function() {
        M = !0, ie(ss.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(m.LEAVE_PICTURE_IN_PICTURE, (function() {
        M = !1, ie(ss.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Wt._configChanged, (function() {
        h = t.config.request.timestamp, g = Zn(), b = !1, E = !1, T = !1, L = "auto", w = {}, A = {}, S = null, I = null, k = null, P = [], O = null, R = {}, N = !1, D = !1, B = 0, V = 0, U = 0, H = null, z = null, J = 0, t.config.request.drm, Q = 0, u && (u.reset(), ne())
    })), t.events.on(Wt._nudgeAttempted, (function() {
        j = {
            seek_type: "nudge"
        }
    })), t.events.on(Wt._scrubbingStarted, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        j = {
            seek_type: t
        }
    })), t.events.on(Wt._chapterSeek, (function(e) {
        j = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Wt._interactiveSeekCall, (function(e) {
        j = {
            seek_type: e.type
        }
    })), t.events.on(Wt._interactiveMarkerClicked, (function(e) {
        j = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(y, (function() {
        N || br.isCastConnected || (t.performDelegateAction(Gt, (e, t = {}) => {
            N = !0, f.then(() => u.logStartRequest()).catch(() => {})
        }), ds(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                r = [{
                    uuid: Tt(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new c(e).logRequestPromiseWithUrl(e, JSON.stringify(r), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Go(t.config)))
    })), t.events.on(Wt._overlayOpened, (function(e) {
        "email-capture" === e && ie(ss.SLATE_DISPLAYED, {
            slate_type: "email"
        }), "interactive" === e && ie(ss.SLATE_DISPLAYED, {
            slate_type: "interactive"
        })
    })), t.events.on(Wt._playbackRateChanged, (function(e, t) {
        ie(ss.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(Nt._changeQuality, (function(e) {
        t.backbone.video.currentFile.mime === Rt.dash && ("auto" === e || E ? "auto" === e && E && !T && (ie(ss.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: L,
            auto: 1
        }), T = !0) : (ie(ss.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), E = !0), L = e)
    })), t.events.on(Nt._turnCaptionsOn, (function(e) {
        O !== e && (O = e, ie(ss.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(Nt._turnCaptionsOff, (function() {
        O && (O = null, ie(ss.CAPTIONS_DISABLED))
    })), t.events.on(hr.connected, (function() {
        ie(ss.CHROMECAST_CONNECTED)
    })), t.events.on(hr.disconnected, (function() {
        ie(ss.CHROMECAST_DISCONNECTED)
    })), t.events.on(C.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        w = e;
        const r = e.profile ? e.profile : e.id,
            a = Xn();
        if (A[r] = A[r] || [], S) {
            const e = A[S].length - 1;
            A[S][e] && (A[S][e].end = a)
        }
        I && (n[t].bitrate > I ? B += 1 : V += 1), A[r].push({
            start: a
        }), R[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let s = {
            previous_audio_bitrate: k / 1e3,
            previous_video_bitrate: I / 1e3,
            previous_profile_id: String(S),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = ee) ? void 0 : o.profile_id) && (ee.headers.x_vim_cachebc || ee.headers.x_cache) && (s.cache_hit = fo(ee.headers)), ie(ss.VIDEO_STREAM_CHANGE, s), S = r, I = n[t].bitrate, k = n[t].audioBitrate
    })), t.events.on(C.STREAM_TARGET_CHANGE, (function(e) {
        e && (z = String(e.profile || "") || null)
    })), t.events.on(m.PLAYING, (function() {
        X = !1
    })), t.events.once(Wt._firstTimeUpdate, (function() {
        b = !0
    })), t.events.on(Wt._adBuffering, (function() {
        ie(ss.AD_BUFFERING)
    })), t.events.on(Wt._adComplete, (function() {
        ie(ss.AD_COMPLETE)
    })), t.events.on(Wt._adClicked, (function() {
        ie(ss.AD_CLICKED)
    })), t.events.on(Wt._adError, (function(e) {
        ie(ss.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Wt._adPaused, (function() {
        ie(ss.AD_PAUSED)
    })), t.events.on(Wt._adResumed, (function() {
        ie(ss.AD_RESUMED)
    })), t.events.on(Wt._adStarted, (function(e) {
        ie(ss.AD_STARTED, {
            startup_duration: e.time ? Ct(e.time / 1e3, 2) : null
        })
    })), t.events.on(Wt._adSkipped, (function() {
        ie(ss.AD_SKIPPED)
    })), t.events.on(Wt._pausedForAd, (function() {
        o.iPhone && u.setDisplayContext(1)
    })), t.events.on(Wt._resumedAfterAd, (function() {
        o.iPhone && u.setDisplayContext(0)
    })), t.events.on(Wt._webinarRegistrantBlocked, (function() {
        ie(ss.WEBINAR_REGISTRANT_BLOCKED)
    })), t.events.on(Wt._webinarRegistrantUnblocked, (function() {
        ie(ss.WEBINAR_REGISTRANT_UNBLOCKED)
    })), t.events.on(C.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        U = Math.round(100 * t) / 100
    })), t.events.on(C.BANDWIDTH, (function({
        speed: e
    }) {
        P.push(e), P.length > 500 && P.shift()
    })), t.events.on(C.MANIFEST_TIMEOUT, (function() {
        ie(ss.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(C.MANIFEST_LOADED, (function() {
        ie(ss.VIDEO_MANIFEST_LOADED)
    })), t.events.on(C.DOWNLOAD_END, a), t.events.on(C.DOWNLOAD_TIMEOUT, (function() {
        ie(ss.DOWNLOAD_TIMEOUT)
    })), t.events.on(C.DRM_KEY_SWITCH, (function() {
        ie(ss.DRM_KEY_SWITCH)
    })), t.events.on(C.SCANNER_CHANGE, (function() {
        H = null
    })), t.events.on(C.AV_DURATION_MISMATCH, (function(e) {
        ie(ss.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(C.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: C.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = Ct(pe(0, e), 2), t.bytes_loaded = J, ie(ss.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(C.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: C.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ie(ss.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach((e, i) => {
            const o = n.reduce((t, n) => (t.push(e[n]), t), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ie(ss.VIDEO_PLAYBACK_ERROR, r)
        })
    })), t.events.on(G.MEDIASESSION_PLAY, (function() {
        ie(ss.MEDIASESSION_PLAY)
    })), t.events.on(G.MEDIASESSION_PAUSE, (function() {
        ie(ss.MEDIASESSION_PAUSE)
    })), t.events.on(G.MEDIASESSION_SEEK_FORWARD, (function() {
        ie(ss.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(G.MEDIASESSION_SEEK_BACKWARD, (function() {
        ie(ss.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(Yt._seek, (function() {
        j = {
            seek_type: "api"
        }
    })), t.events.on(Yt._play, (function() {
        Z = !0
    })), t.events.on(Yt._pause, (function() {
        Z = !0
    })), t.events.on(W.WEBVR_ENTER, (function() {
        ie(ss.ENTER_WEBVR, !0)
    })), t.events.on(W.WEBVR_EXIT, (function() {
        ie(ss.EXIT_WEBVR, !0)
    })), t.events.on(Y.BRAIN_ML_MODEL_INPUTS, (function(e) {
        var n;
        (null == (n = e.geolocation) ? void 0 : n.length) && e.geolocation[0].length ? e.geolocation = e.geolocation[0][0] : e.geolocation = "", t.config.request.urls.fresnel_mimir_inputs_url && function(e, t, n, i) {
            const o = {
                    chunk_request_id: n.chunkRequestID,
                    duration: n.duration,
                    available_qualities: n.availableQualities,
                    next_chunk_sizes: n.nextChunkSizes,
                    last_buffer_sizes: n.lastBufferSizes,
                    last_chunk_download_times: n.lastChunkDownloadTimes,
                    last_chunk_sizes: n.lastChunkSizes,
                    last_chunk_qualities: n.lastChunkQualities,
                    num_remaining_chunks: n.numRemainingChunks,
                    last_playback_heads: n.lastPlaybackHeads,
                    geolocation: n.geolocation,
                    session_id: t
                },
                r = Date.now(),
                a = [{
                    uuid: Tt(),
                    created_at: r,
                    event: {
                        name: "mimir_inputs",
                        version: 1,
                        ts_ms: r,
                        fields: o
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new c(e).logRequestPromiseWithUrl(e, JSON.stringify(a), !0)
        }(t.config.request.urls.fresnel_mimir_inputs_url + "?beacon=1", t.config.request.session, e, Go(t.config))
    })), t.events.on(q.STALL_JUMP, (function({
        msg: e
    }) {
        oe("livestall", {
            final: !1
        }, e)
    })), t.events.on(q.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        oe("livefallback", {
            final: !1
        }, e)
    })), f = new Promise((e, n) => {
        var i;
        (null == (i = t.backbone) ? void 0 : i.video) && e(), t.events.on(x, e)
    }), f.then(te).catch(() => {}), t.events.on(Wt._swapVideo, te), de.getFirstConsistentlyInteractive().then(e => {
        Ct(e)
    }).catch(() => {})
}

function ps(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new c(r),
        s = f((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        l = f((function() {
            u("seeking")
        }), 500);

    function d() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, s) {
        (s = Object.assign({}, s, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: br.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === s.timestamp && (s.timestamp = Math.round(.001 * Date.now()));
        const l = n(r, s);
        return a.logRequestPromiseWithUrl(l, {}, !0, "GET").catch(e => {})
    }

    function p() {
        e.events.on(m.ENDED, _), e.events.on(m.ERROR, v), e.events.on(m.PAUSE, h), e.events.on(m.PLAY, g), e.events.on(m.TIME_UPDATE, s), e.events.on(m.SEEKING, l), e.events.on(m.SEEKED, b), e.events.on(m.WAITING, E), e.events.on(Wt._didEnterFullscreen, y), e.events.on(Wt._didExitFullscreen, C), e.events.on(Wt._adComplete, T), e.events.on(Wt._adClicked, L), e.events.on(Wt._adError, w), e.events.on(Wt._adStarted, A), e.events.on(Wt._adSkipped, S)
    }

    function _() {
        s.cancel(), u("ended")
    }

    function v() {
        s.cancel(), u("error")
    }

    function h() {
        s.cancel(), u("pause")
    }

    function g() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function b() {
        l.cancel(), u("seeked")
    }

    function E() {
        u("waiting")
    }

    function y() {
        t = !0
    }

    function C() {
        t = !1
    }

    function T() {
        u(ss.AD_COMPLETE)
    }

    function L() {
        u(ss.AD_CLICKED)
    }

    function w() {
        u(ss.AD_ERROR)
    }

    function A() {
        u(ss.AD_STARTED)
    }

    function S() {
        u(ss.AD_SKIPPED)
    }
    e.events.on(Wt._configChanged, d), d(), e.config.ott ? p() : new Promise((t, n) => {
        e.ottVideoMetadata ? t() : e.events.on(Wt._ottMetadataSet, e => {
            t()
        })
    }).then(() => {
        o = e.ottVideoMetadata, p()
    }).catch(e => {})
}

function _s(e, t) {
    let n, i, r, a, s, l, c, d, u, p, _, v, f = !1;
    const h = w();
    let g = {};

    function b() {
        i && (N(), i = null), a && (a.destroy(), a = null), r && clearInterval(r), s = null, l = !1, c = !1, u = !1, d = !1, p = !1, f = !1, v = new Promise((e, t) => {
            _ = e
        }), e.events.once(y, () => {
            p = !0
        }), e.events.on(m.ERROR, (function(e) {
            !e || "NotAllowedError" !== e.name && "AbortError" !== e.name || (p = !1)
        })), n = document.querySelector(".vp-ads-wrapper"), n || (n = document.createElement("div"), n.classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(n), n.innerHTML = Xa.render("adcountdown")), i = n.querySelector(".vp-ads-tag"), g = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, a = new he(n, g), a.on(ge.ADS_MANAGER_LOADED, () => {
            a.on(ge.AD_BUFFERING, E), a.on(ge.AD_COMPLETE, T), a.on(ge.AD_CLICK, C), a.on(ge.AD_ERROR, L), a.on(ge.AD_STARTED, A), a.on(ge.AD_SKIPPED, S), a.on(ge.ALL_ADS_COMPLETED, I), a.on(ge.CONTENT_PAUSE_REQUESTED, k), a.on(ge.CONTENT_RESUME_REQUESTED, P),
                function() {
                    if (!p) {
                        if (f) return;
                        e.events.once(y, () => {
                            _(), p = !0
                        })
                    }
                    v.then(M).catch(e => {}), e.events.on(m.ENDED, () => {
                        f || (l = !0, a.setContentComplete())
                    })
                }(), e.store.watch("ui.player.width", x), e.events.on(Wt._didEnterFullscreen, x, !0), e.events.on(Wt._didExitFullscreen, x, !1), p && _()
        })
    }

    function E() {
        c && e.events.fire(Wt._adBuffering)
    }

    function C() {
        e.events.fire(Wt._adClicked)
    }

    function T() {
        o.iPhone && e.backbone.addVideoEventListeners(), r && clearInterval(r), c = !1, e.events.fire(Wt._adComplete)
    }

    function L(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Wt._adError, n), "adPlayError" === n.errorType && e.events.fire(Wt._resumedAfterAd)
    }

    function A(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let i = t.getAd();
        i.isLinear() && (r = setInterval(() => {
            let e = "AD " + (e => {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            })(a.remainingTime);
            n.querySelector(".vp-ads-countdown").innerHTML = e
        }, 1e3), setTimeout(R, 1e3)), c = !0;
        let l = {
            type: i.isLinear() ? "linear" : "nonlinear"
        };
        s && (l.time = Date.now() - s, s = null), e.events.fire(Wt._adStarted, l)
    }

    function S(t) {
        e.events.fire(Wt._adSkipped, t)
    }

    function I(t) {
        u = !0, o.iPhone || a.destroy(), e.events.fire(Wt._allAdsCompleted, t)
    }

    function k() {
        e.events.fire(Wt._pausedForAd), s = Date.now(), l || (d = !0, e.backbone.paused ? e.events.once(m.PLAYING, () => {
            e.backbone.pause()
        }) : e.backbone.pause())
    }

    function P() {
        N(), e.events.fire(Wt._resumedAfterAd), o.iPhone && u && a.destroy(), l || O()
    }

    function O() {
        d = !1, e.backbone.play()
    }

    function R() {
        i = n.querySelector(".vp-ads-tag"), i.classList.remove("hidden"), i.removeAttribute("hidden")
    }

    function N() {
        i.classList.add("hidden"), i.setAttribute("hidden", "")
    }

    function D() {
        return {
            width: t.getBoundingClientRect().width,
            height: t.getBoundingClientRect().height
        }
    }

    function M() {
        const {
            width: t,
            height: n
        } = D();
        try {
            a.start(t, n)
        } catch (i) {
            l && e.events.fire(Wt._adComplete), d && O()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = D();
        a.resize(t, n, e)
    }
    const B = {
        pause: () => (e.events.fire(Wt._adPaused), a.pause()),
        play: () => (e.events.fire(Wt._adResumed), a.play()),
        get volume() {
            return a.volume
        },
        set volume(e) {
            a.volume = e
        },
        toggleCastingState(e) {
            f = !!e, f && a.destroy()
        },
        events: h
    };
    return b(), e.events.on(Wt._configChanged, b), B
}
const vs = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"];
let ms = function() {
        function e(e) {
            this._player = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._player.events.fire(Wt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._player.events.fire(Wt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._player.events.fire(Wt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = b({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            if (e === ss.CHUNK_DOWNLOADED) {
                let e = {};
                return e.host = t.host, e.duration = Ct(t.duration, 2), e.size = t.size, e.index = t.index, e.profile_id = t.profile_id, e.quality = t.quality, e.buffered = Ct(t.buffered, 2), e.ttfb = Ct(t.ttfb, 2), e.extraContext = t.extraContext, e.headers = be(t.headers, ["x_vim_cachebc", "x_cache", "akamai_request_bc", "akamai_grn", "content_type"]), e.cache_hit = fo(e.headers), e
            }
            if (e === ss.VIDEO_PLAYBACK_ERROR || e === ss.VIDEO_LOAD_FAILURE || e === ss.VIDEO_START_FAILURE || e === ss.VIDEO_READY) return t;
            if (void 0 !== t.autoplay && void 0 !== t.looping) {
                let e = {};
                return e.cdn = t.cdn, e.quality = t.quality, void 0 !== t.reason && (e.reason = t.reason), e
            }
            return t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._player.backbone.currentTime,
                o = Date.now(),
                r = Ct(pe(i, this._player.backbone.buffered), 2);
            this._addToSeries("markers", {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._player.events.on(Wt._configChanged, () => {
                this.reset()
            }), this._player.events.on(C.BANDWIDTH, this._onBandwidthChange.bind(this)), this._player.events.on(C.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._player.events.on(C.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._player.events.on(C.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._player.events.on(C.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._player.events.on(C.STREAM_CHANGE, this._onStreamChange.bind(this)), this._player.events.on(C.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._player.events.on(m.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._player.events.on(W.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._player.events.on(Wt._logMetric, this._onLogMetric.bind(this)), this._player.events.on(q.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._player.events.on(q.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._player.events.on(q.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries("vr_headset", e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval(() => {
                const e = this._player.backbone.buffered,
                    t = this._player.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._player.backbone.latency;
                    this._setToSeries("live_latency", e)
                } else this._setToSeries("live_latency", 0)
            }, 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._player.store.watch("ui.player.boundingRect", e => {
                const t = this.getCurrent("video_dims"),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries("video_dims", n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            })
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${Ct(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = vs.reduce((e, t) => (e[t] = [], e), {})
        }, t._setDefaults = function() {
            const e = this._player.backbone.currentFile;
            this._addToSeries("files", e), this._addToSeries("scanner", this._player.backbone.currentScannerName), "HLSLiveScanner" === this._player.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries("min_bandwidth", 0), this._setToSeries("max_badwidth", 0);
            const t = this._player.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries("video_dims", n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries("bandwidth", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent("max_badwidth"),
                i = this.getCurrent("min_bandwidth");
            (!i || t < i) && this._setToSeries("min_bandwidth", t), (!n || t > n) && this._setToSeries("max_badwidth", t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries("total_frames", n), this._setToSeries("dropped_frames", t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._player.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const s = n[t],
                l = this._getResolutionString(s),
                c = ls(s.codecs),
                d = null == (i = this._player.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = cs(null == d ? void 0 : d.codecs),
                p = `${c}${u?` / ${u}`:""}`,
                _ = null == (o = this._player.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${l}`), this._addToSeries("streams", {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${s.height}p`,
                bitrate: s.bitrate,
                ambisonicConnected: null == _ ? void 0 : _.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : s.channels) && void 0 !== r ? r : void 0,
                framerate: s.framerate,
                height: s.height,
                width: s.width,
                id: s.id,
                codec: p
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent("files"),
                t = this._player.backbone.currentFile;
            this._addToSeries("files", t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? $t[e.mime] : null,
                r = $t[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries("buffer_occupancy", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent("scanner"),
                t = this._player.backbone.currentScannerName;
            this._setToSeries("scanner", t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._player.events.fire(Wt._debugDataChange)
        }, e
    }(),
    fs = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._onReset = () => this.reset(), this._player.events.on(Nt._reset, this._onReset)
        }, t._detachEventHandlers = function() {
            this._player.events.off(Nt._reset, this._onReset)
        }, t.hibernate = function() {
            this._detachEventHandlers()
        }, t.wake = function() {
            this._attachEventHandlers()
        }, t._getFragment = function(e, t, n) {
            if (l(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                }),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                s = n[o + 1],
                c = r ? t : (s - 1) / 1e3;
            return {
                startTime: a,
                endTime: c,
                duration: c - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Wt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(m.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !l(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(m.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, T(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !l(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return l(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }]), e
    }();
var hs;
! function(e) {
    e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint"
}(hs || (hs = {}));
const gs = 4e-4 / Object.keys(hs).length,
    bs = {};
let Es, ys;
! function(e) {
    e.EMPTY = "empty", e.LEAD_CAPTURE_FORM = "lead_capture_form"
}(Es || (Es = {})),
function(e) {
    e.BEFORE_VIDEO = "before_video", e.DURING_VIDEO = "during_video", e.AFTER_VIDEO = "after_video"
}(ys || (ys = {}));
const Cs = `.${Dn.ACCESS_GATE}`,
    Ts = e => e.querySelector(Cs),
    Ls = e => {
        if (e) {
            const t = Ts(e);
            if (t) return t.id || Es.EMPTY
        }
        return Es.EMPTY
    },
    ws = e => !!e && (!!Ts(e) && Ls(e) !== Es.EMPTY),
    As = (e, t) => {
        const i = t.vimeo_url;
        let o = {
            lc_param_session_id: t.request.session
        };
        return t.video.unlisted_hash && (o.lc_param_unlisted_hash = t.video.unlisted_hash), n(`https://${i}${e}`, o)
    },
    Ss = (e, t) => {
        switch (e) {
            case Es.LEAD_CAPTURE_FORM:
                return {
                    purpose: e,
                    url: As(`/leadcapture/video/${t.video.id}/form`, t),
                    title: "Lead Capture Form"
                };
            default:
                return {
                    purpose: Es.EMPTY,
                    url: "",
                    title: ""
                }
        }
    },
    Is = (e, t) => Zi(t) === Bi.SINGLE_VIDEO_VIEW_MANAGE || !!((e, t) => {
        if (e === Es.LEAD_CAPTURE_FORM) {
            const e = No((e => {
                const {
                    id: t,
                    unlisted_hash: n
                } = e.video;
                return "lc_" + ((e, t = 0) => {
                    let n = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let o, r = 0; r < e.length; r++) o = e.charCodeAt(r), n = Math.imul(n ^ o, 2654435761), i = Math.imul(i ^ o, 1597334677);
                    return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString()
                })(n ? `${t}:${n}` : `${t}`)
            })(t));
            return null != e ? e : ""
        }
        return ""
    })(e, t),
    {
        Provider: ks,
        useStore: Ps
    } = Le(),
    Os = ({
        player: e,
        children: t
    }) => Te(ks, {
        createStore: () => we(t => {
            function n(n) {
                const i = Ss(n, e.config);
                t(() => h({}, i)), e.events.fire(Wt._accessGateOpened, i.purpose)
            }

            function i() {
                const t = e.config.embed.access_gates;
                if (!t) return Es.EMPTY;
                const n = t.find(e => e.placement === ys.BEFORE_VIDEO);
                return n ? Is(null == n ? void 0 : n.gate_type, e.config) ? Es.EMPTY : null == n ? void 0 : n.gate_type : Es.EMPTY
            }
            return function() {
                const t = e.config.embed.access_gates;
                (null == t ? void 0 : t.length) && t.forEach(t => {
                    ! function(t) {
                        const {
                            gate_type: i,
                            placement: o,
                            timecode: r
                        } = t;
                        Is(i, e.config) || (o === ys.DURING_VIDEO && e.events.on(m.TIME_UPDATE, (function t({
                            currentTime: o
                        }) {
                            o >= r && (n(i), e.events.off(m.TIME_UPDATE, t))
                        })), o === ys.AFTER_VIDEO && e.events.on(Wt._ended, (function t() {
                            n(i), e.events.off(Wt._ended, t)
                        })))
                    }(t)
                });
                const o = i();
                o !== Es.EMPTY && e.events.once(Wt._ready, () => {
                    e.events.fire(Wt._accessGateOpened, o)
                })
            }(), h({
                events: e.events,
                iframeLoaded: !1,
                remoteComponentReady: !1,
                setIframeLoaded: function() {
                    t(() => ({
                        iframeLoaded: !0
                    }))
                },
                setRemoteComponentReady: function() {
                    t(() => ({
                        remoteComponentReady: !0
                    }))
                },
                openGate: n,
                closeGate: function() {
                    t(() => h({}, Ss(Es.EMPTY, e.config))), e.events.fire(Wt._accessGateClosed)
                }
            }, function() {
                const t = i();
                return Ss(t, e.config)
            }())
        }),
        children: t
    });
let Rs;
! function(e) {
    e.DOLBY_VISION = "dolbyVision", e.CLOSE = "close", e.PIP = "pip", e.AIRPLAY = "airPlay", e.ENTER_FULLSCREEN = "enterFullscreen", e.EXIT_FULLSCREEN = "exitFullscreen", e.GEAR = "gear", e.VIMEO = "vimeo", e.VIMEO_SMALL = "vimeoSmall", e.ENTER_PICTURE_IN_PICTURE = "enterPictureInPicture", e.EXIT_PICTURE_IN_PICTURE = "exitPictureInPicture", e.PAUSE = "pause", e.PLAY = "play", e.REPLAY = "replay", e.CHAPTERS = "chapters", e.POINT = "point", e.CC = "cc", e.CC_FILLED = "ccFilled", e.CHECKMARK = "checkmark", e.STEREOSCOPIC = "stereoscopic", e.PERSON_FILLED = "personFilled", e.CHEVRON_DOWN = "chevronDown", e.CHEVRON_RIGHT = "chevronRight", e.CLOCK = "clock", e.CLOCK_FILLED = "clockFilled", e.COLLECTIONS = "collections", e.DISMISS_X = "dismissX", e.HEART = "heart", e.HEART_FILLED = "heartFilled", e.ONDEMAND = "ondemand", e.PAPER_PLANE = "paperPlane", e.POP_OUT = "popOut", e.VOLUME_OFF_FILLED = "volumeOffFilled", e.VOLUME_ON_FILLED = "volumeOnFilled", e.FAST_FORWARD = "fastForward", e.INFO_CIRCLE = "infoCircle", e.TRANSCRIPT_ON = "transcriptOn", e.TRANSCRIPT_OFF = "transcriptOff", e.SEARCH = "search", e.CHEVRON_UP = "chevronUp", e.CLOSE_CIRCLE = "closeCircle", e.SPINNER = "spinner", e.SLIDERS = "sliders", e.SWITCH_CONTAINER = "switchContainer", e.SWITCH_CIRCLE = "switchCircle", e.WARN_CIRCLE = "warnCircle", e.THUMBS_UP = "thumbsUp", e.THUMBS_DOWN = "thumbsDown", e.THUMBS_UP_FILLED = "thumbsUpFilled", e.THUMBS_DOWN_FILLED = "thumbsDownFilled", e.LINK = "link", e.SPARKLE_TWO_STARS_FILLED = "sparkleTwoStarsFilled"
}(Rs || (Rs = {}));
const Ns = {
        [Rs.CLOSE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [Rs.AIRPLAY]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                "data-airplay-icon": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"
                })
            }))
        },
        [Rs.DOLBY_VISION]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 844 126",
                "aria-labelledby": "dv-logo-title"
            }, t), {}, {
                children: [Te("title", {
                    id: "dv-logo-title",
                    children: "Dolby Vision"
                }), Te("path", {
                    d: "M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })]
            }))
        },
        [Rs.PIP]: e => {
            let {
                direction: t = "enter"
            } = e, n = Ae(e, ["direction"]);
            return Te("svg", h(h({
                className: Nn.PIP_ICON,
                viewBox: "0 0 16 12"
            }, n), {}, {
                children: [Te("polygon", {
                    className: Nn.FILL,
                    points: "6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"
                }), Te("rect", {
                    className: Nn.FILL,
                    x: "7",
                    y: "7",
                    width: "9",
                    height: "5"
                }), Te("polyline", {
                    className: Nn.FILL,
                    transform: "enter" === t ? "translate(4, 4) rotate(180) translate(-4, -4)" : "",
                    points: "5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"
                })]
            }))
        },
        [Rs.ENTER_FULLSCREEN]: () => Te("svg", {
            className: Dn.ENTER_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-enter-fullscreen": !0,
            children: Te("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"
            })
        }),
        [Rs.EXIT_FULLSCREEN]: () => Te("svg", {
            className: Dn.EXIT_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-exit-fullscreen": !0,
            children: [Te("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"
            }), Te("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"
            }), Te("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"
            }), Te("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"
            })]
        }),
        [Rs.GEAR]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"
                })
            }))
        },
        [Rs.VIMEO]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "54",
                height: "18",
                viewBox: "0 0 54 18",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"
                })
            }))
        },
        [Rs.VIMEO_SMALL]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                })
            }))
        },
        [Rs.ENTER_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                "data-enter-pip": !0,
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",
                    fill: "white"
                })
            }))
        },
        [Rs.EXIT_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-exit-pip": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"
                })
            }))
        },
        [Rs.PAUSE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-pause-icon": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: Nn.FILL,
                    d: "M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                })
            }))
        },
        [Rs.PLAY]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-play-icon": !0
            }, t), {}, {
                children: Te("path", {
                    d: "M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",
                    className: Nn.FILL
                })
            }))
        },
        [Rs.REPLAY]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    className: Nn.FILL,
                    d: "M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"
                })
            }))
        },
        [Rs.CHAPTERS]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"
                })
            }))
        },
        [Rs.POINT]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("circle", {
                    className: Nn.FILL,
                    cx: "4",
                    cy: "4",
                    r: "4"
                })
            }))
        },
        [Rs.CC]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24",
                "data-cc-icon": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"
                })
            }))
        },
        [Rs.CC_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24",
                "data-cc-filled-icon": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"
                })
            }))
        },
        [Rs.CHECKMARK]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",
                    fill: "white"
                })
            }))
        },
        [Rs.STEREOSCOPIC]: () => Te("svg", {
            viewBox: "0 0 64 64",
            children: Te("path", {
                d: "M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"
            })
        }),
        [Rs.PERSON_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fill: "white",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"
                })
            }))
        },
        [Rs.CHEVRON_DOWN]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.CHEVRON_RIGHT]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.CLOCK]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
                })
            }))
        },
        [Rs.CLOCK_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"
                })
            }))
        },
        [Rs.COLLECTIONS]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.DISMISS_X]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#1A2E3B",
                    fillRule: "evenodd"
                })
            }))
        },
        [Rs.HEART]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.HEART_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.ONDEMAND]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: Te("path", {
                    d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.PAPER_PLANE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 18.1 20.95"
            }, t), {}, {
                children: Te("path", {
                    d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.POP_OUT]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: [Te("path", {
                    d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
                    fill: "#1a2e3b"
                }), Te("path", {
                    d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
                    fill: "#1a2e3b"
                })]
            }))
        },
        [Rs.VOLUME_OFF_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                })
            }))
        },
        [Rs.VOLUME_ON_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
                })
            }))
        },
        [Rs.FAST_FORWARD]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
                })
            }))
        },
        [Rs.INFO_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",
                    fill: "white"
                })
            }))
        },
        [Rs.TRANSCRIPT_ON]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"
                })
            }))
        },
        [Rs.TRANSCRIPT_OFF]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"
                })
            }))
        },
        [Rs.SEARCH]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    className: Nn.FILL,
                    d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"
                })
            }))
        },
        [Rs.CHEVRON_UP]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    d: "M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Rs.CLOSE_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: Te("path", {
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [Rs.SPINNER]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-spinner": !0
            }, t), {}, {
                children: [Te("circle", {
                    "data-spinner-trace": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                }), Te("circle", {
                    "data-spinner-circle": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                })]
            }))
        },
        [Rs.SLIDERS]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"
                })
            }))
        },
        [Rs.SWITCH_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                    fill: "white"
                })
            }))
        },
        [Rs.SWITCH_CONTAINER]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "32",
                height: "16",
                viewBox: "0 0 32 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: Te("rect", {
                    width: "32",
                    height: "16",
                    rx: "8",
                    fill: "#2F8363"
                })
            }))
        },
        [Rs.WARN_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
                    fill: "white"
                })
            }))
        },
        [Rs.THUMBS_UP]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",
                    fill: "white"
                })
            }))
        },
        [Rs.THUMBS_DOWN]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",
                    fill: "white"
                })
            }))
        },
        [Rs.THUMBS_UP_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",
                    fill: "white"
                })
            }))
        },
        [Rs.THUMBS_DOWN_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",
                    fill: "white"
                })
            }))
        },
        [Rs.LINK]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    className: Nn.FILL,
                    d: "M11.2929 8.46447C10.9024 8.07395 10.9024 7.44078 11.2929 7.05026L13.4142 4.92894C14.9763 3.36684 17.509 3.36684 19.0711 4.92894C20.6332 6.49103 20.6332 9.02369 19.0711 10.5858L16.9498 12.7071C16.5593 13.0976 15.9261 13.0976 15.5356 12.7071C15.145 12.3166 15.145 11.6834 15.5356 11.2929L17.6569 9.17158C18.4379 8.39053 18.4379 7.1242 17.6569 6.34315C16.8758 5.5621 15.6095 5.5621 14.8285 6.34315L12.7071 8.46447C12.3166 8.85499 11.6834 8.85499 11.2929 8.46447ZM8.46443 11.2929C8.07391 10.9024 7.44074 10.9024 7.05022 11.2929L4.9289 13.4142C3.3668 14.9763 3.3668 17.509 4.9289 19.0711C6.49099 20.6332 9.02365 20.6332 10.5858 19.0711L12.7071 16.9497C13.0976 16.5592 13.0976 15.9261 12.7071 15.5355C12.3165 15.145 11.6834 15.145 11.2929 15.5355L9.17154 17.6569C8.39049 18.4379 7.12416 18.4379 6.34311 17.6569C5.56206 16.8758 5.56206 15.6095 6.34311 14.8284L8.46443 12.7071C8.85495 12.3166 8.85495 11.6834 8.46443 11.2929ZM9.87874 12.7071C9.48821 13.0976 9.48821 13.7308 9.87874 14.1213C10.2693 14.5118 10.9024 14.5118 11.293 14.1213L14.1214 11.2929C14.5119 10.9024 14.5119 10.2692 14.1214 9.87868C13.7309 9.48816 13.0977 9.48816 12.7072 9.87868L9.87874 12.7071Z"
                })
            }))
        },
        [Rs.SPARKLE_TWO_STARS_FILLED]: e => {
            let t = Object.assign({}, e);
            return Te("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: Te("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "m20.861 4.11 1.042.362-.004.002a.398.398 0 0 1 .245.504.386.386 0 0 1-.248.246l-1.037.361c-.458.16-.812.514-.972.972l-.361 1.042a.4.4 0 0 1-.508.243.386.386 0 0 1-.244-.25l-.36-1.037a1.569 1.569 0 0 0-.971-.972L16.4 5.222a.397.397 0 0 1 .014-.754l1.031-.358c.457-.159.81-.513.97-.971l.364-1.042a.395.395 0 0 1 .75.007l.36 1.035c.159.458.513.812.971.971ZM15.732 10.906l2.62.911.002-.002a.734.734 0 0 1 .45.93.72.72 0 0 1-.46.452l-2.612.91a4.21 4.21 0 0 0-2.61 2.607l-.91 2.622a.738.738 0 0 1-.923.453.71.71 0 0 1-.461-.465l-.906-2.608a4.215 4.215 0 0 0-2.608-2.608L4.697 13.2a.73.73 0 0 1 0-1.383l2.617-.91A4.21 4.21 0 0 0 9.922 8.3l.91-2.623a.72.72 0 0 1 .366-.415.733.733 0 0 1 1.015.419l.91 2.619a4.209 4.209 0 0 0 2.609 2.607Z"
                })
            }))
        }
    },
    Ds = e => {
        let {
            name: t,
            className: n
        } = e, i = Ae(e, ["name", "className"]);
        const o = Ns[t];
        return o && Te(o, h({
            className: n
        }, i))
    };
let Ms, xs, Bs, Vs, Us, Fs, Hs, qs, Gs;
! function(e) {
    e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl"
}(Ms || (Ms = {})),
function(e) {
    e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom"
}(xs || (xs = {})),
function(e) {
    e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom"
}(Bs || (Bs = {})),
function(e) {
    e.LEFT = "left", e.RIGHT = "right"
}(Vs || (Vs = {})),
function(e) {
    e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit"
}(Us || (Us = {})),
function(e) {
    e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl"
}(Fs || (Fs = {})),
function(e) {
    e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500"
}(Hs || (Hs = {})),
function(e) {
    e.CUSTOM = "custom", e.WHITE = "white"
}(qs || (qs = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(Gs || (Gs = {}));
const Ws = e => {
        let {
            className: t = "",
            size: n = Gs.SM
        } = e, i = Ae(e, ["className", "size"]);
        const o = bn(Nn.VP_SPIN, n === Gs.LG && "Spinner_module_lg__8e25942d", n === Gs.SM && "Spinner_module_sm__8e25942d", t);
        return Te(Ds, h({
            name: Rs.SPINNER,
            className: `Spinner_module_spinner__8e25942d ${o}`
        }, i))
    },
    Ys = 1e3,
    $s = [jt.PLAYER_LOGIN_SUCCESSFUL, jt.PLAYER_LOGIN_FAILED, jt.COMPONENT_VISIBILITY_CHANGE, jt.APP_BREAKPOINT_CHANGE],
    Ks = e => {
        const {
            id: t,
            url: n,
            title: i,
            visible: o,
            userLoggedIn: r,
            appBreakpoint: a,
            onIframeLoad: s = li,
            onError: l = li,
            onRemoteComponentReady: c = li,
            waitForReady: d = !1,
            isAnimating: u = !1,
            timeout: p = Ys,
            className: _
        } = e, [v, m] = Se(!1), [f, g] = Se(!1), [b, E] = Se(!1), y = Ie(re()), C = Ie(null), T = Ie(null), L = bn("RemoteComponent_module_remoteComponent__2a7ae354", v && "RemoteComponent_module_loaded__2a7ae354", _), w = () => {
            d && E(!0), c()
        };
        return ke((function() {
            C.current && function(e, t, n) {
                const {
                    url: i,
                    onPlay: o = li,
                    onPause: r = li,
                    onSeek: a = li,
                    onClose: s = li,
                    onLoginRequest: l = li,
                    onRemoteComponentReady: c = li
                } = e, d = mt(i);
                t.configureClient(n.contentWindow, d), t.extendMethods({
                    play: o,
                    pause: r,
                    set currentTime(e) {
                        a(e)
                    },
                    closeRemoteComponent: s,
                    remoteComponentRequestLogin: l,
                    remoteComponentReady: c
                }), $s.forEach((function(e) {
                    t.listeners[e] = !0
                }))
            }(h(h({}, e), {}, {
                onRemoteComponentReady: w
            }), y.current, C.current), clearTimeout(T.current), T.current = setTimeout(() => {
                v || (m(!1), g(!0), l("Load timeout"))
            }, p)
        }), []), ke((function() {
            r && y.current.emit(jt.PLAYER_LOGIN_SUCCESSFUL)
        }), [r]), ke((function() {
            o || document.activeElement !== C.current || C.current.blur(), u || y.current.emit(jt.COMPONENT_VISIBILITY_CHANGE, o)
        }), [o, u]), ke((function() {
            y.current.emit(jt.APP_BREAKPOINT_CHANGE, a)
        }), [a]), Te(Pe, {
            children: [!b && !f && Te(Ws, {}), Te("iframe", {
                id: t,
                ref: C,
                onLoad: () => {
                    f || (clearTimeout(T.current), m(!0), s(), d || E(!0))
                },
                title: i,
                src: n,
                className: L
            })]
        })
    };
var js = {
    roundedBox: "shared_module_roundedBox__285596c9",
    hidden: "shared_module_hidden__285596c9",
    focusable: "shared_module_focusable__285596c9",
    focusableMarker: "shared_module_focusableMarker__285596c9",
    focusableCircle: "shared_module_focusableCircle__285596c9",
    focusableButton: "shared_module_focusableButton__285596c9",
    visuallyHidden: "shared_module_visuallyHidden__285596c9"
};
const zs = {
        [Bs.PRIMARY]: "Button_module_primary__0563da21",
        [Bs.ALTERNATIVE]: "Button_module_alternative__0563da21",
        [Bs.CUSTOM]: "Button_module_customColor__0563da21"
    },
    Xs = {
        [xs.MD]: "Button_module_md__0563da21",
        [xs.SM]: "Button_module_sm__0563da21",
        [xs.XS]: "Button_module_xs__0563da21",
        [xs.CUSTOM]: "Button_module_customSize__0563da21"
    },
    Zs = {
        [xs.MD]: "Button_module_iconMd__0563da21",
        [xs.SM]: "Button_module_iconSm__0563da21"
    },
    Js = Oe((e, t) => {
        let {
            children: n,
            className: i,
            color: o = Bs.PRIMARY,
            size: r = xs.MD,
            focusable: a = !0,
            icon: s,
            iconPosition: l = Vs.LEFT,
            iconSize: c = xs.SM,
            type: d
        } = e, u = Ae(e, ["children", "className", "color", "size", "focusable", "icon", "iconPosition", "iconSize", "type"]);
        const p = bn("Button_module_button__0563da21", a && js.focusable, zs[o], Xs[r], s && "Button_module_icon__0563da21", s && Zs[c], s && l === Vs.RIGHT && "Button_module_iconRight__0563da21", i);
        return Te("button", h(h({
            className: p,
            ref: t,
            type: d || Us.BUTTON
        }, u), {}, {
            children: [l === Vs.LEFT && s, n && Te("span", {
                className: "Button_module_buttonChildren__0563da21",
                children: n
            }), l === Vs.RIGHT && s]
        }))
    });
var Qs = {
    text: "Text_module_text__dcc7d59a",
    sm: "Text_module_sm__dcc7d59a",
    md: "Text_module_md__dcc7d59a",
    lg: "Text_module_lg__dcc7d59a",
    xl: "Text_module_xl__dcc7d59a",
    bpxxs_fontsm: "Text_module_bpxxs_fontsm__dcc7d59a",
    bpxxs_fontmd: "Text_module_bpxxs_fontmd__dcc7d59a",
    bpxxs_fontlg: "Text_module_bpxxs_fontlg__dcc7d59a",
    bpxxs_fontxl: "Text_module_bpxxs_fontxl__dcc7d59a",
    bpxs_fontsm: "Text_module_bpxs_fontsm__dcc7d59a",
    bpxs_fontmd: "Text_module_bpxs_fontmd__dcc7d59a",
    bpxs_fontlg: "Text_module_bpxs_fontlg__dcc7d59a",
    bpxs_fontxl: "Text_module_bpxs_fontxl__dcc7d59a",
    bpsm_fontsm: "Text_module_bpsm_fontsm__dcc7d59a",
    bpsm_fontmd: "Text_module_bpsm_fontmd__dcc7d59a",
    bpsm_fontlg: "Text_module_bpsm_fontlg__dcc7d59a",
    bpsm_fontxl: "Text_module_bpsm_fontxl__dcc7d59a",
    bpmd_fontsm: "Text_module_bpmd_fontsm__dcc7d59a",
    bpmd_fontmd: "Text_module_bpmd_fontmd__dcc7d59a",
    bpmd_fontlg: "Text_module_bpmd_fontlg__dcc7d59a",
    bpmd_fontxl: "Text_module_bpmd_fontxl__dcc7d59a",
    bplg_fontsm: "Text_module_bplg_fontsm__dcc7d59a",
    bplg_fontmd: "Text_module_bplg_fontmd__dcc7d59a",
    bplg_fontlg: "Text_module_bplg_fontlg__dcc7d59a",
    bplg_fontxl: "Text_module_bplg_fontxl__dcc7d59a",
    bpxl_fontsm: "Text_module_bpxl_fontsm__dcc7d59a",
    bpxl_fontmd: "Text_module_bpxl_fontmd__dcc7d59a",
    bpxl_fontlg: "Text_module_bpxl_fontlg__dcc7d59a",
    bpxl_fontxl: "Text_module_bpxl_fontxl__dcc7d59a",
    bpxxl_fontsm: "Text_module_bpxxl_fontsm__dcc7d59a",
    bpxxl_fontmd: "Text_module_bpxxl_fontmd__dcc7d59a",
    bpxxl_fontlg: "Text_module_bpxxl_fontlg__dcc7d59a",
    bpxxl_fontxl: "Text_module_bpxxl_fontxl__dcc7d59a",
    bold: "Text_module_bold__dcc7d59a",
    normal: "Text_module_normal__dcc7d59a",
    medium: "Text_module_medium__dcc7d59a",
    custom: "Text_module_custom__dcc7d59a",
    white: "Text_module_white__dcc7d59a"
};
const el = {
        [Fs.SM]: "sm",
        [Fs.MD]: "md",
        [Fs.LG]: "lg",
        [Fs.XL]: "xl"
    },
    tl = {
        [Hs.BOLD]: Qs.bold,
        [Hs.NORMAL]: Qs.normal,
        [Hs.NUM_500]: Qs.medium
    },
    nl = {
        [qs.CUSTOM]: Qs.custom,
        [qs.WHITE]: Qs.white
    },
    il = ({
        element: e = "span",
        children: t,
        size: n = Fs.SM,
        sizeMap: i,
        weight: o = Hs.BOLD,
        color: r = qs.WHITE,
        className: a = "",
        id: s = "",
        ariaHidden: l = !1,
        role: c
    }) => {
        let d = [];
        i ? Object.keys(i).forEach(e => {
            const t = el[i[e]];
            d.push(Qs[`bp${e}_font${t}`])
        }) : d.push(Qs[el[n]]);
        const u = bn.apply(void 0, [Qs.text].concat(d, [tl[o], nl[r], a]));
        return Re(e, {
            className: u,
            id: s,
            ariaHidden: l,
            role: c
        }, t)
    };
const ol = ({
        onReload: e
    }) => {
        const t = bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES, "AccessGateError_module_reload__e2728294");
        return Te("div", {
            className: "AccessGateError_module_container__e2728294",
            "data-component-type": "access-gate",
            children: [Te(Ds, {
                name: Rs.INFO_CIRCLE,
                className: "AccessGateError_module_icon__e2728294",
                "aria-hidden": "true"
            }), Te(il, {
                size: Fs.LG,
                weight: Hs.NORMAL,
                className: "AccessGateError_module_messageText__e2728294",
                role: "alert",
                children: "Unable to load registration form"
            }), Te(Js, {
                className: t,
                size: xs.CUSTOM,
                onClick: e,
                "data-component-type": "reload-access-gate",
                children: Te(il, {
                    size: Fs.MD,
                    weight: Hs.BOLD,
                    children: "Try again"
                })
            })]
        })
    },
    rl = (e = 5e3) => {
        const [t, n] = Se(!1), [i, o] = Se(e), [r, a] = Se(Date.now());
        return {
            hasError: t,
            componentTimeout: i,
            componentVersion: r,
            onError: () => {
                n(!0)
            },
            onReload: () => {
                n(!1), o(i + 500), a(Date.now())
            }
        }
    },
    al = {
        enter: {
            opacity: 0
        },
        enterActive: {
            opacity: 1,
            transition: "opacity 250ms ease-out"
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: "opacity 250ms ease-out"
        },
        exitDone: {
            display: "none"
        }
    },
    sl = () => {
        const e = Ps(e => e.purpose),
            t = Ps(e => e.url),
            n = Ps(e => e.title),
            i = Ps(e => e.remoteComponentReady),
            o = Ps(e => e.iframeLoaded),
            r = Ps(e => e.closeGate),
            a = Ps(e => e.setRemoteComponentReady),
            s = Ps(e => e.setIframeLoaded),
            l = e !== Es.EMPTY,
            c = l && !o,
            d = l && i,
            u = bn(Dn.ACCESS_GATE, "AccessGate_module_accessGate__d4f7e836", c && "AccessGate_module_iframeLoading__d4f7e836", d && "AccessGate_module_visible__d4f7e836"),
            {
                componentVersion: p,
                hasError: _,
                componentTimeout: v,
                onError: m,
                onReload: f
            } = rl();
        return Te(Ne, { in: l,
            styles: al,
            duration: 250,
            children: Te("div", {
                className: "AccessGate_module_accessGateWrapper__d4f7e836",
                children: [_ && Te(ol, {
                    onReload: f
                }), !_ && l && Te(Ks, {
                    visible: d,
                    id: e,
                    url: t,
                    title: n,
                    className: u,
                    timeout: v,
                    waitForReady: !0,
                    onClose: r,
                    onError: m,
                    onRemoteComponentReady: a,
                    onIframeLoad: s
                }, p)]
            })
        })
    };

function ll(e, t) {
    const n = t.querySelector(`.${Dn.ACCESS_GATE_CONTAINER}`);
    De(Te(Os, {
        player: e,
        children: Te(sl, {})
    }), n)
}

function cl({
    element: t,
    delegate: n = {},
    cssLoadedPromise: i = Promise.resolve(null),
    name: r = null
}) {
    Me.set(lr);
    let a = !1;
    const s = xe(ja, Ve(e => (...t) => {
            const n = e.apply(void 0, t),
                i = dt();

            function o(e, t) {
                return (e = [].concat(e)).map(e => t(n.createGetter(e)))
            }
            return h(h({}, n), {}, {
                watch: function(e, t) {
                    return o(e, e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    })
                },
                unwatch: function(e, t) {
                    return o(e, e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    })
                }
            })
        }, function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = Z(e => {
                    if (J(e)) return e;
                    const t = d(o(), e);
                    return J(t) ? t : t => d(t, e)
                });
                return h(h({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = Q(n, t)), n
                    }
                })
            }
        }(za), Be.apply(void 0, []))),
        l = new Map,
        u = w(),
        p = new dr({
            events: u
        }),
        _ = Tt();
    t.classList.add(`player-${_}`), t.classList.add("loading"), t.id || (t.id = `player${_}`), t.innerHTML = Xa.render("outer", {
        strings: {
            back: "Back",
            close: "Close overlay",
            opensANewWindow: "(opens a new window)"
        }
    });
    const v = t.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        v.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (Te) {
            lr.captureException(Te)
        }
    }
    let f, b, E, y, T, L, A, S = null,
        I = null,
        k = null,
        P = null,
        O = null,
        R = null,
        N = null,
        D = null,
        M = null,
        x = null,
        B = null,
        V = !1,
        U = null,
        F = null,
        H = {};
    const q = new Promise((e, t) => {
        L = e, A = t, V = !0
    }).then(() => (V = !1, u.fire(Wt._ready), null));
    let G = {
        get config() {
            return p.config
        },
        set config(e) {
            p.config = e
        },
        get delegate() {
            return n
        },
        set delegate(e) {
            n = e
        },
        ready(e) {
            if (!e) return q;
            q.then(() => e()).catch(e => {
                lr.captureException(e)
            })
        },
        get sessionId() {
            return p.config.request.session
        },
        get name() {
            return r
        },
        destroy() {
            V && A("Cancelling player initialization."), u.fire(Nt._destroy)
        }
    };

    function W(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), (null == (t = i.request) ? void 0 : t.urls.js) && Fe(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== Kt.main && i.view !== Kt.privateUnlocked && i.view !== Kt.webinarUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, (null == (o = history) ? void 0 : o.replaceState) && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== Kt.main && i.view !== Kt.privateUnlocked && i.view !== Kt.webinarUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            (null == e ? void 0 : e.embed) && (null == t ? void 0 : t.embed) && [
                ["color", en],
                ["color_one", Qt],
                ["color_two", en],
                ["color_three", tn],
                ["color_four", nn]
            ].forEach(([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && u.fire(Nt._changeColor, t.embed[n], i)
            })
        }(n, i), O && O.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return b = null, y = S, u.fire(Nt._reset), s.dispatch(Cr(i)), u.fire(Wt._configChanged, r, i), e
    }

    function Y() {
        var e;
        null == (e = k) || e.hide(), t.classList.remove("loading"), L()
    }

    function $(e) {
        return i.then(() => {
            if (z(e), I && I.resetThumbnail(), "function" != typeof H.authorizationHandler) throw new Error("Config was not authorized.");
            return H.authorizationHandler(Y)
        }).then(e => (p.config = e, b = null, s.dispatch(Cr(p.config)), u.fire(Nt._reset), u.fire(Wt._configChanged, !0, p.config), e))
    }

    function K() {
        a || (u.on(Wt._userLogIn, (function(e) {
            p.reload().then(t => {
                if (!p.config.user.logged_in) return u.fire(Wt._loginFailure), t;
                switch (u.fire(Wt._userLoggedIn, e), e) {
                    case "like":
                        p.config.user.liked && u.fire(Wt._liked);
                        break;
                    case "watch-later":
                        p.config.user.watch_later && u.fire(Wt._addedToWatchLater);
                        break;
                    case "private":
                        u.fire(Wt._privateUnlocked, t.loaded)
                }
                return t
            }).catch(e => {
                lr.captureException(e)
            })
        })), u.on(Wt._userLoggedOut, () => {
            p.reload().catch(e => {
                lr.captureException(e)
            })
        }), a = !0)
    }

    function j(e) {
        B = $r(e), K(),
            function(e) {
                var n;
                (I = new Xr(e, s, t.querySelector(".vp-preview")), k = new Zr(e), u.on([C.BUFFER_ENDED, m.PLAYING], () => {
                    I.hide()
                }), S = new Ue(v, p.config), y = S, D = new ms(e), new va(e, s, t.querySelector(".vp-video-wrapper")), X(e), e.doNotTrackEnabled) || (p.config.request.urls.test_imp && function(e, t) {
                    if (!e.config.request.ab_tests) return;
                    const n = new c(t);
                    for (const i in e.config.request.ab_tests) {
                        const t = e.config.request.ab_tests[i];
                        if (!t.track) continue;
                        const o = {
                            session_id: e.config.request.session,
                            test_id: i,
                            test_group: String(t.group)
                        };
                        n.log(o, !0, !1).catch(e => {})
                    }
                }(e, `${p.config.request.urls.test_imp}?beacon=1`), new us(e, t, s, p.config.request.urls.fresnel), new tr(e), new ma(e, s), new ps(e), (null == (n = e.config.request.flags) ? void 0 : n.view_time_tracking_forced) && new rr(e), function(e) {
                    function t(t) {
                        return function({
                            value: n
                        }) {
                            bs[t] || (bs[t] = !0, function(t, n) {
                                or(Yo.PLAYER_PERFORMANCE_MEASUREMENT, e.config, {
                                    measurement_type: t,
                                    measurement_value: n
                                })
                            }(t, n))
                        }
                    }
                    Math.random() <= gs && (Ee(t(hs.FIRST_INPUT_DELAY)), ye(t(hs.CUMULATIVE_LAYOUT_SHIFT)), Ce(t(hs.LARGEST_CONTENTFUL_PAINT)))
                }(e));
                O = new ua(e),
                    function(e) {
                        if (!Qi(e.config)) return;
                        const n = new gr({
                            textAlert: new as(t),
                            player: e
                        });
                        br.init({
                            chromecastPlayer: n
                        }), br.on([hr.error, hr.mediaLoadedFailed], e => {
                            lr.captureException(e)
                        })
                    }(e), z(e)
            }(e)
    }

    function z(e) {
        P || (P = new rs(e), Za(G, P), He.set(lr))
    }

    function X(e) {
        const n = p.config.request.ads;
        n && (n.adcode && n.adunit || n.adurl) && (R = new _s(e, t.querySelector(".vp-video-wrapper")), u.on(Wt._pausedForAd, () => {
            y = R, u.fire(Wt._displayContextChanged)
        }), u.on(Wt._resumedAfterAd, () => {
            y = S, u.fire(Wt._displayContextChanged)
        }), br && (br.on(hr.connected, () => {
            R.toggleCastingState(!0)
        }), br.on(hr.disconnected, () => {
            R.toggleCastingState(!1)
        })))
    }

    function ee(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = Et(bt(e), e, t)), n
    }
    let te = {
        get store() {
            return s
        },
        get config() {
            return p.config
        },
        get element() {
            return t
        },
        get events() {
            return u
        },
        get uuid() {
            return _
        },
        get expose() {
            return G
        },
        get backbone() {
            return S
        },
        get adHandler() {
            return R
        },
        get displayContext() {
            return y
        },
        get preview() {
            return I
        },
        get doNotTrackEnabled() {
            return p.config.embed.dnt || p.config.request.flags.dnt
        },
        get playLoggingEnabled() {
            return p.config.embed.log_plays && p.config.request.flags.plays
        },
        get currentTime() {
            return br.isCastConnected ? br.chromecastPlayer.currentTime : S.currentTime
        },
        get debugCollector() {
            return D
        },
        overrideFragmentsHandler(e, t) {
            var n;
            null == (n = M) || n.hibernate(), f = p.config.embed.interactive, x = M, M = e, p.config.embed.interactive = p.config.embed.interactive || {
                markers: 0
            }, p.config.embed.interactive.fragments = t, u.fire(Wt._fragmentChanged)
        },
        restoreLastFragmentsHandler() {
            var e;
            M = x, null == (e = M) || e.wake(), p.config.embed.interactive && (p.config.embed.interactive = f), u.fire(Wt._fragmentChanged)
        },
        get fragmentsHandler() {
            return M
        },
        get ottVideoMetadata() {
            return N
        },
        set ottVideoMetadata(e) {
            N = e
        },
        get startTime() {
            return U
        },
        set startTime(e) {
            var t;
            null !== U && null === e && null === F && (null == (t = B) || t.clearSegmentedPlayback()), U = e, u.fire(Wt._startTimeUpdated, U)
        },
        get endTime() {
            return F
        },
        set endTime(e) {
            var t;
            null !== F && null === e && null === U && (null == (t = B) || t.clearSegmentedPlayback()), F = e, u.fire(Wt._endTimeUpdated, F)
        },
        get segmentedPlaybackEnabled() {
            return null !== U && null !== F
        },
        inView: () => Lo(t),
        init: (e, n) => E || (M = new fs(te), new Ja(te, s, t), H = n, E = p.load(e).then(e => (new ll(te, t), e)).then(W).catch(e => (K(), $(te))).then(() => "function" == typeof H.initializationHandler ? Promise.resolve(n.initializationHandler()) : null).then(() => (j(te), "function" == typeof H.postInitializationHandler ? Promise.resolve(n.postInitializationHandler()) : null)).then(() => Promise.all([I.thumbnailPromise, i])).then(Y).then(() => (lr.setUp(te), null)).catch(e => {
            lr.captureException(e)
        }), E),
        loadVideo(e, n) {
            if (T === e && b) return b;
            if (I && I.resetThumbnail(), null == n ? void 0 : n.video_version) {
                let e = p.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map(e => e.id), -1 === e.indexOf(n.video_version)) return Promise.reject("Invalid version id specified")
            }
            u.fire(Wt._loadVideo), T = e, t.classList.add("loading");
            const i = ee(e, n),
                o = l.get(i);
            return e = o ? o._config.loaded : e, b = p.load(e, n).then(e => {
                if (o) {
                    const e = S.element;
                    S = o._backbone, S.element.style.visibility = "visible", e.parentNode.replaceChild(S.element, e), u.fire(Wt._swapVideo)
                }
                return e = W(e), R || X(te), e
            }).catch(e => $(te)).then(e => {
                let t = I.loadThumbnail();
                return Promise.resolve(t)
            }).then(Y), b
        },
        preloadVideo(e, t, n) {
            const i = ee(t, n),
                o = l.get(i);
            return o ? Promise.resolve(o) : new dr({
                events: u
            }).load(t, n).then(t => {
                t.loaded.preload = !0;
                const n = S.element.cloneNode(!1);
                n.style.visibility = "hidden", S.element.parentNode.insertBefore(n, S.element);
                const o = new Ue(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return l.set(i, r), r
            })
        },
        performDelegateAction(t, i = (() => {}), o = []) {
            var r, a;
            let s;
            var l;
            null != (r = n) && r[t.will] && (s = (l = n)[t.will].apply(l, [p.config.video.id].concat(e(o))), !1 === s) || (i.apply(void 0, [p.config.video.id].concat(e(o), [s])), (null == (a = n) ? void 0 : a[t.did]) && n[t.did]())
        },
        ready: () => q,
        verifyConfig: () => p.verify(),
        loadConfigRequestObject: () => p.loadRequest().then(e => {
            const t = h(h({}, p.config), {}, {
                request: e
            });
            return W({
                old: p.config,
                loaded: t
            })
        }).catch(e => $(te)),
        updatePhpTokens: () => new Promise((e, t) => {
            const {
                vimeo_api_client_token: n,
                vimeo_api_interaction_tokens: i,
                vimeo_live_client_token: o,
                vimeo_bucketed_live_client_token: r
            } = p.config.user;
            let a = !1;
            if (n && (a = Vo(n)), i) {
                let e, t, n;
                i.likes && (e = Vo(i.likes)), i.watch_later && (t = Vo(i.watch_later)), i.following && (n = Vo(i.following)), a = e || t || n
            }
            if (o && (a = Vo(o)), r && (a = Vo(r)), a) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = p.config.request, a = `https://${p.config.player_url}/video/${p.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                g(a, {
                    withCredentials: !0
                }).json().then(t => (p.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, p.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, p.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, p.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e())).catch(e => {
                    lr.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                })
            } else e()
        })
    };
    return te
}

function dl(e, t, n) {
    var i = null,
        r = o.touch ? 4500 : 2e3,
        a = !0,
        s = !0,
        l = !1,
        c = null,
        d = [],
        u = !1,
        p = null,
        _ = null,
        v = null,
        f = !0,
        h = !1,
        g = !1,
        b = !1,
        E = !1,
        T = !1;
    let L, w;
    var A = n.querySelector(".vp-target"),
        S = n.querySelector(".vp-controls");
    let k = n.querySelector('button[class*="_playButton_"]');
    var P = n.querySelector(".vp-title"),
        O = n.querySelector(".vp-video");
    let R = n.querySelector(".vp-sidedock"),
        N = n.querySelectorAll(".vp-menu"),
        M = n.querySelector(".vp-ads-wrapper"),
        x = n.querySelector(".compass-wrapper");
    const B = e.config.embed.autoplay && e.config.request.flags.autohide_controls,
        V = o.touch ? 300 : 0;
    let U = null;
    const F = ds(e.config, "webvr").group || !1;

    function H() {
        clearTimeout(i), i = null
    }

    function q() {
        "preact-menu" !== v && (v && v.isNewMenu && v.isFullwidth() || T && (clearTimeout(i), i = setTimeout(() => Y(!1, !0), r)))
    }

    function G() {
        se.element && se.element.classList.contains("js-player-fullscreen") && (l || (n.classList.add("player-cursor-hide"), s = !0, l = !0))
    }

    function Y(t, i) {
        var r, l, c;
        if ("preact-menu" === v && i) return;
        if (v && v.isNewMenu && v.isFullwidth()) return;
        if (!h && !f && !n.classList.contains("player-ad")) return;
        if (b) return;
        H(), S = te(), k = ne(), R = ee(), N = n.querySelectorAll(".vp-menu");
        const d = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = R) ? void 0 : r.contains(document.activeElement)) || (null == (l = S) ? void 0 : l.contains(document.activeElement)) || (null == (c = k) ? void 0 : c.contains(document.activeElement))),
            u = document.activeElement && "preact-menu" === v && Array.from(N).find(e => null == e ? void 0 : e.contains(document.activeElement));
        d || u || (e.events.fire(t ? Wt._mousedOut : Wt._mouseTimeout), s = !0, o.spatialPlayback && e.config.video.spatial || (A.classList.add("hidden"), A.setAttribute("hidden", "")), a = !0, G())
    }

    function $() {
        q(), E || h && f && !n.classList.contains("player-ad") || (e.events.fire(Wt._mousedOver), A.classList.remove("hidden"), A.removeAttribute("hidden"))
    }

    function K() {
        h || f ? n.removeAttribute("tabindex") : h || f || g || n.setAttribute("tabindex", "0")
    }

    function j() {
        e.events.on([m.TIME_UPDATE, m.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === i && (e.events.fire(Wt._targetTimeReached), e.events.off([m.TIME_UPDATE, m.SEEKED], t))
        }))
    }

    function z() {
        O.classList.remove("threesixty-video"), e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing")
    }

    function X() {
        d.forEach(e => clearTimeout(e)), d = []
    }

    function Z(e) {
        e && (e.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            e.classList.add("in")
        }))
    }

    function J(e) {
        e && (e.classList.add("leaving"), window.requestAnimationFrame(() => {
            I(e).on("transitionend", (function t(n) {
                "opacity" === n.propertyName && (e.classList.remove("in"), e.classList.remove("leaving"), e.classList.add("cloaked"), I(e).off("transitionend", t))
            }))
        }))
    }

    function Q(e) {
        R = ee(), vt(R).width > 60 ? e.classList.add("vp-alert-bumpdown") : e.classList.remove("vp-alert-bumpdown")
    }

    function ee() {
        return R || (R = n.querySelector(".vp-sidedock"), R)
    }

    function te() {
        return S || (S = n.querySelector(".vp-controls"))
    }

    function ne() {
        return k || (k = n.querySelector('button[class*="_playButton_"]'), k)
    }
    return function() {
            var t = !0;

            function i() {
                $()
            }

            function c(i) {
                var c;
                if (r = 2e3, s) s = !1;
                else if (void 0 === L || void 0 === w || i.screenX !== L || i.screenY !== w)
                    if (L = i.screenX, w = i.screenY, l && (n.classList.remove("player-cursor-hide"), l = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && (null == (c = e.config.video) ? void 0 : c.spatial)) {
                            const t = vt(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                s = n > e.element.clientWidth - 45 && o < r;
                            if (u || !a && !s) return
                        }
                        a && $(), q()
                    } else H(), G(), t && (Y(!0), t = !1)
            }

            function d(e) {
                var t;
                M = M || (M = n.querySelector(".vp-ads-wrapper"), M), null != (t = M) && t.contains(e.target) || Y(!0)
            }

            function p(e) {
                var t, i, o, r;
                S = te(), R = ee(), k = ne(), x = x || (x = n.querySelector(".compass-wrapper"), x);
                var a = (null == (t = S) ? void 0 : t.contains(e.target)) || (null == (i = R) ? void 0 : i.contains(e.target)) || (null == (o = k) ? void 0 : o.contains(e.target));
                let s = null == (r = x) ? void 0 : r.contains(e.target);
                h && f || s ? a || !h && !f || Y(!0) : (clearTimeout(U), U = setTimeout($, V))
            }

            function _(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return c(e)
            }
            o.pointerEvents ? I(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return r = 2e3, i();
                r = 4500, p(e)
            })).on("pointermove", _).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return d(e)
            })) : I(n).on("touchmove", (function() {
                r = 4500, q()
            })).on("touchend", p).on("mouseenter", i).on("mousemove", c).on("mouseleave", d), e.events.on(Wt._didEnterFullscreen, (function() {
                o.pointerEvents ? I(se.element).on("pointermove", _) : I(se.element).on("mousemove", c)
            })), e.events.on(Wt._didExitFullscreen, (function() {
                o.pointerEvents ? I(se.element).off("pointermove", _) : I(se.element).off("mousemove", c)
            }))
        }(), e.events.on(m.PLAY, (function(e) {
            B || 0 === e || $()
        })).on(Wt._paused, $).on([C.BUFFER_ENDED, m.SEEKED, Wt._scrubbingEnded, Wt._volumeChanged, Wt._menuPanelOpened], q).on(y, (function() {
            T = !0
        })), e.events.on(Wt._menuVisibilityChanged, (function(e) {
            e && q()
        })), e.events.on(Wt._overlayOpened, K).on(Wt._accessGateOpened, K).on(Wt._controlBarVisibilityChanged, (function(e) {
            f = e, K()
        })).on(Wt._sidedockVisibilityChanged, (function(e) {
            h = e, K()
        })), e.events.on(Wt._outroDisplayed, (function() {
            b = !0, $()
        })).on(Wt._outroHidden, (function() {
            b = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Wt._menuVisibilityChanged, (function(e, t) {
                v = "preact-menu" === e ? e : e ? t : null
            })), I(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (v) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return R = ee(), P = P || (P = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = P) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || O.contains(e)) && !(null == (i = R) ? void 0 : i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const s = T && o.spatialPlayback && e.config.video.spatial && c;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!s) {
                        if (T && t) return;
                        return void e.events.fire(Wt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (s) {
                        let t = _ && _.x === i.clientX && _.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Wt._playButtonPressed : Wt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(wr) && !t.get(Or) && !t.get(Dr)) return;
                        e.events.fire(e.backbone.paused ? Wt._playButtonPressed : Wt._pauseButtonPressed)
                    } else e.events.fire(Wt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), I(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return A.classList.remove("hidden"), A.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), A.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return A.classList.remove("hidden"), A.removeAttribute("hidden"), !1
            })), e.events.on(Nt._toggleNativeControls, (function(e) {
                if (e) return i = !0, void A.classList.add("hidden");
                i = !1, A.classList.remove("hidden")
            }))
        }(),
        function() {
            function t() {
                g = !0, n.removeAttribute("tabindex")
            }

            function i() {
                g = !1, K()
            }
            var r, a;
            o.touch || (I(n).on("focus", "a, button, input, [tabindex]", (function() {
                a = this, clearTimeout(r), r = null, document.activeElement === this && $()
            })), I(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (r = setTimeout(Y, 50))
            })), n.addEventListener("focus", (function(e) {
                $(), a && a.focus()
            }), !1), e.events.on(Wt._overlayOpened, t), e.events.on(Wt._overlayClosed, i), e.events.on(Wt._accessGateOpened, t), e.events.on(Wt._accessGateClosed, i))
        }(), e.events.on(Wt._didEnterFullscreen, (function(e) {
            G(), c && c.adjustRenderSize(), b && $()
        })).on(Wt._didExitFullscreen, (function(e) {
            a = !0, c && c.adjustRenderSize(), e ? Y() : ($(), H())
        })), j(), e.events.on(Nt._reset, (function() {
            a = !0, s = !0, f = !0, h = !1, E = !1, T = !1, j(), H()
        })), e.events.on(Nt._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    c && e.apply(void 0, t)
                },
                i = t(t => {
                    const n = e.element.classList.contains("webvr");
                    c && n && c.toggleVR()
                }),
                r = t(t => {
                    c.isVRPresenting ? setTimeout(() => {
                        e.events.fire(W.WEBVR_ENTER)
                    }, 100) : setTimeout(() => {
                        e.events.fire(W.WEBVR_EXIT)
                    }, 100)
                });
            e.events.on(Nt._revealSpatialControls, t(() => {
                e.element.classList.contains("webvr") || e.element.classList.add("grabbable")
            })), e.events.on(Wt._ended, t(() => {
                z(), o.webvr && c.isVRPresenting && F && c.toggleVR()
            })), e.events.on(y, t(() => {
                e.config.video.spatial ? function() {
                    function t(e) {
                        p && (p.innerHTML = Xa.render("threesixty_reminder", e))
                    }
                    e.backbone.getEffectByName("ThreeSixtyEffect"), e.events.once(Wt._firstTimeUpdate, () => {
                            const n = e.config.embed.cards;
                            (null == n ? void 0 : n.length) && n[0].timecode < 15 || (d.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Click and drag to look around"
                                }), Q(p), Z(p), setTimeout(() => J(p), 3e3)
                            }, 7e3)), o.android || d.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Use arrow keys to see more"
                                }), Q(p), Z(p), setTimeout(() => J(p), 3e3)
                            }, 14e3)))
                        }),
                        function() {
                            const e = n;
                            if (p) return;
                            let t = p = document.createElement("div");
                            t.classList.add("cloaked"), t.classList.add("vp-alert-round"), t.classList.add("vp-alert-round--top"), t.classList.add("vp-alert-round--threesixty"), e.appendChild(t)
                        }()
                }() : e.config.video.spatial || (z(), X())
            })), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Wt._stereoscopicButtonPressed, t(() => {
                X(), o.webvr && c.hasVRHeadset && F ? c.toggleVR() : e.events.fire(Wt._showAndroidVRDeepLink)
            })), e.events.on(W.WEBVR_HARDWARE_AVAILABLE, t(e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && F && t.classList.remove("off")
            })), e.events.on(W.WEBVR_ENTER, t(t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), c.isUserInteracting = !1
            })), e.events.on(W.WEBVR_EXIT, t(t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), c.isUserInteracting = !0
            })));
            let a = null;
            const s = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u || n || (u = !0, t.preventDefault(), e.element.classList.add("grabbing"), _ = {
                        x: t.clientX,
                        y: t.clientY
                    }, c.makeContact(_))
                }),
                l = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u && !n && (X(), c.move({
                        x: t.clientX,
                        y: t.clientY
                    }))
                }),
                v = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u && !n && (e.element.classList.remove("grabbing"), c.releaseContact(!1), u = !1)
                }),
                m = t(t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (c.isUserInteracting || (c.isUserInteracting = !0), null !== a && clearTimeout(a), X(), a = setTimeout(() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), c.isUserInteracting = !1
                    }, 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), c.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                }),
                f = t(e => {
                    u || (u = !0, c.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                h = t(e => {
                    u && (e.preventDefault(), X(), c.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                g = t(e => {
                    c.releaseContact(!0), u = !1
                }),
                b = t(e => {
                    u || X(), c.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                }),
                E = t(t => {
                    u = !1, e.element.classList.remove("grabbing"), c.abandonMotion()
                });
            e.events.on(y, () => {
                o.android && c && window.addEventListener("deviceorientation", b, !1)
            }), e.events.once(y, () => {
                e.store.watch("ui.player.boundingRect", () => {
                    c && c.adjustRenderSize(), u = !1
                }), o.pointerEvents ? (I(A).on("pointerdown", s), window.addEventListener("pointermove", l), window.addEventListener("pointerup", v), window.addEventListener("pointerleave", E)) : (I(A).on("mousedown", s).on("wheel", m), A.addEventListener("touchstart", f, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", h, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", g, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", l), window.addEventListener("mouseup", v), window.addEventListener("mouseleave", E))
            })
        })), e.events.on(D, e => {
            z(), c = e, X()
        }), e.events.on(Wt._nudgeAttempted, () => {
            E = !0, clearTimeout(U), U = null
        }), e.events.on(Wt._nudgeEnded, () => {
            E = !1
        }), {}
}
let ul = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
    }
    var t = e.prototype;
    return t.show = function(e = "", t = "", n = "") {
        this.alertContentTitle.innerHTML = e, this.alertContentTime.innerHTML = t, this.alertContentFooter.innerHTML = n, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
let pl = function() {
    function e(e, t, n) {
        this.textAlert = new as(e), this.timeAlert = new ul(e), this.player = t, this.store = n, this.startTime = new Date(this.store.get(Sr, null)), this._disabled = !1, this._setUpLiveEvents(), this._checkStatus()
    }
    var t = e.prototype;
    return t.disable = function() {
        this.hide(), this._disabled = !0
    }, t.hide = function() {
        this.textAlert.hide(), this.timeAlert.hide()
    }, t._checkStatus = function() {
        (this.store.get(kr) || this.store.get(Pr)) && this._onLiveEventActive(), this.store.get(Rr) && this._onLiveStreamEnded()
    }, t._setUpLiveEvents = function() {
        this.player.events.on(q.EVENT_ACTIVE, this._onLiveEventActive.bind(this)), this.player.events.on(q.STREAM_ONLINE, this._onLiveStreamOnline.bind(this)), this.player.events.on(q.STREAM_OFFLINE, this._onLiveStreamOffline.bind(this)), this.player.events.on(q.SETTINGS_UPDATED, this._onLiveSettingsUpdate.bind(this)), this.player.events.once(q.EVENT_ENDED, this._onLiveStreamEnded.bind(this)), this.player.events.on(Wt._webinarRegistrantBlocked, this._onLiveStreamEnded.bind(this)), this.player.events.on(Wt._webinarRegistrantUnblocked, this._onLiveStreamOnline.bind(this))
    }, t._onLiveSettingsUpdate = function(e, t) {
        "event_schedule" === e && this.store.dispatch(Tr({
            eventSchedule: t
        })), "hide_live_label" === e && this.store.dispatch(Tr({
            hideLiveLabel: t
        }))
    }, t._onLiveEventActive = function() {
        this._setLiveEventSchedule(this.store.get(Mr))
    }, t._displayTimeAlert = function() {
        const e = this._timeToDisplayText(this.player.config.request.lang);
        this.timeAlert.show(e[0], e[1], e[2]), !this.store.get(kr) && !this.store.get(Pr) || this._disabled || setTimeout(this._checkStatus.bind(this), 1e3)
    }, t._timeToEventStart = function() {
        return this.startTime - new Date
    }, t._timeToDisplayText = function(e) {
        const t = this._timeToEventStart(),
            n = Math.ceil(t / 1e3).toFixed(0),
            i = Math.ceil(t / 6e4).toFixed(0),
            o = Math.ceil(t / 36e5).toFixed(0),
            r = Math.ceil(t / 864e5).toFixed(0),
            a = (new Date).toDateString() === this.startTime.toDateString();
        if (r > 1 || !a) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(this.startTime) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(this.startTime)).split("\n");
        if (o > 1 && a) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(this.startTime)).split("\n");
        let s;
        const l = i > 1;
        return s = l ? "minutes" : n > 1 ? "seconds" : "second", ("This event will start in\n" + (l ? i : n) + " " + s).split("\n")
    }, t._onLiveStreamOnline = function() {
        this.hide()
    }, t._onLiveStreamOffline = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && !this.player.backbone.atLiveEdge || (this.textAlert.show("Live stream offline"), o.iOS && se.element && (this.player.events.fire(Wt._willExitFullscreen), se.exit()))
    }, t._onLiveStreamEnded = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && 0 !== this.player.backbone.currentTime || this.textAlert.show("Live event ended")
    }, t._setLiveEventSchedule = function(e) {
        e ? this._timeToEventStart() > 0 ? (this.textAlert.hide(), this._displayTimeAlert()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) : (this.timeAlert.hide(), this.textAlert.hide())
    }, e
}();

function _l(e, t) {
    var n, i = t.querySelector(".vp-notification");

    function r(e, r) {
        if (null !== t.parentElement.offsetParent) {
            t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
            var s = function(e) {
                    var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                        i = t.clientHeight;
                    return t.clientHeight > t.clientWidth && (i = t.clientWidth), {
                        height: Math.round(i * n),
                        width: Math.round(i * n * 1.6)
                    }
                }(e),
                l = "width:" + s.width + "px;height:" + s.height + "px";
            i.style.cssText = l, i.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || function(e, t) {
                var n = e.querySelector(".hour-hand"),
                    i = e.querySelector(".minute-hand");
                if (n && i) {
                    var r = t ? 1 : -1,
                        a = new Date,
                        s = Math.abs(a.getHours() - 12),
                        l = a.getMinutes(),
                        c = l / 60 * 360 - 135,
                        d = s / 12 * 360 + l / 60 * 5,
                        u = d + 45 * r,
                        p = c + 540 * r;
                    n.style[o.transformProperty] = "rotate(" + d + "deg)", i.style[o.transformProperty] = "rotate(" + c + "deg)", window.requestAnimationFrame((function() {
                        e.classList.add("animate"), o.browser.firefox || o.browser.opera || window.requestAnimationFrame((function() {
                            n.style[o.transformProperty] = "rotate(" + u + "deg)", i.style[o.transformProperty] = "rotate(" + p + "deg)"
                        }))
                    }))
                }
            }(i, "watchlater" === e), clearTimeout(n), t.classList.remove("animate"), window.requestAnimationFrame((function() {
                t.classList.remove("invisible"), n = setTimeout(a, 750)
            }))
        }
    }

    function a() {
        t.classList.add("animate"), t.classList.add("invisible")
    }

    function s() {
        t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), i.innerHTML = "", i.classList.remove("filled"), i.classList.remove("animate"), e.events.fire(Wt._notificationHidden)
    }
    return I(t).on("transitionend", (function(e) {
        i.contains(e.target) && "height" === e.propertyName ? setTimeout(a, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(s)
    })), e.events.on(Wt._liked, (function(e) {
        e || r("like", Xa.render("icon_heart"))
    })), e.events.on(Wt._unliked, (function(e) {
        e || r("unlike", Xa.render("icon_broken_heart"))
    })), e.events.on(Wt._addedToWatchLater, (function(e) {
        e || r("watchlater", Xa.render("icon_clock"))
    })), e.events.on(Wt._removedFromWatchLater, (function(e) {
        e || r("unwatchlater", Xa.render("icon_clock"))
    })), e.events.fire(Wt._notificationModuleReady), {}
}

function vl(e, t, n, i) {
    var o = !1;
    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
    var r = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var r = e.changedTouches[0].pageX - window.pageXOffset,
                    a = e.changedTouches[0].pageY - window.pageYOffset,
                    s = document.elementFromPoint(r, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e), o = !0, t
        },
        a = function(e) {
            if (!o) return n.call(this, e);
            o = !1
        };
    (t = "function" == typeof t ? null : t) ? I(e).on("click", t, a).on("touchend", t, r): I(e).on("click", a).on("touchend", r)
}

function ml(t, n) {
    const i = w();
    let r = !1,
        a = !1;

    function s(e) {
        gt(e, "facebook", {
            width: 580,
            height: 400
        })
    }

    function l(e) {
        gt(e, "twitter", {
            width: 550,
            height: 420
        })
    }

    function c(e) {
        gt(e, "tumblr", {
            width: 540,
            height: 600
        })
    }

    function d(e) {
        const n = t.element.querySelector(".vp-outro-wrapper");
        return "player_embed" + (n && n.classList.contains("in") ? "_end_screen" : "_share_overlay") + (e ? "_button" : "_keyboard")
    }
    let u = {
        get events() {
            return i
        },
        setup() {
            var i;
            n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
            const o = n.querySelector(".js-embedCopy");
            o && (o.style.width = function(t, n, i = 2) {
                n = Object.keys(n).map(e => n[e]);
                const o = t.cloneNode();
                o.style.visibility = "hidden", o.style.padding = 0, t.parentElement.appendChild(o);
                let r = n.map(e => (o.innerText = e, o.clientWidth));
                const a = Math.max.apply(Math, e(r)),
                    s = window.getComputedStyle(t),
                    l = parseFloat(s.fontSize);
                return t.parentElement.removeChild(o), `${(a+i)/l}em`
            }(o, ["Copy", "Copied!"])), t.events.on(Wt._facebookButtonPressed, s).on(Wt._twitterButtonPressed, l).on(Wt._tumblrButtonPressed, c)
        },
        destroy() {
            t.events.off(Wt._facebookButtonPressed, s).off(Wt._twitterButtonPressed, l).off(Wt._tumblrButtonPressed, c)
        },
        getShareData(e = {}, n) {
            var i, a;
            const s = t.config.video.title,
                l = t.config.video.owner.name,
                c = t.config.video.share_url;
            r = document.queryCommandSupported && document.queryCommandSupported("copy");
            const d = t.config.video.unlisted_hash ? `?h=${t.config.video.unlisted_hash}` : "";
            return e.template = Xa.render("share", {
                url: t.config.video.url,
                shareUrl: c,
                playerShareUrl: `https://${t.config.player_url}/video/${t.config.video.id}/share`,
                unlistedHashParam: d,
                title: s,
                owner: l,
                embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed,
                embedOnly: null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only,
                embedCode: qe(t.config.video.embed_code),
                copyButton: r,
                customizeEmbed: !!t.config.video.url,
                readOnly: !o.touch,
                facebookIcon: Xa.render("icon_facebook", {
                    title: "Share on Facebook"
                }),
                twitterIcon: Xa.render("icon_twitter", {
                    title: "Share on Twitter"
                }),
                tumblrIcon: Xa.render("icon_tumblr", {
                    title: "Share on Tumblr"
                }),
                emailIcon: Xa.render("icon_mail", {
                    title: "Share via Email"
                }),
                embedIcon: Xa.render("icon_embed", {
                    title: "Get embed code"
                }),
                strings: {
                    share: "Share",
                    emailSubject: "Check out “" + s + "” from " + l + " on Vimeo",
                    emailBody: "Check out “" + s + "” from " + l + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + c + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                    embedTitle: "Embed",
                    embedSubtitle: "Add this video to your site with the embed code below.",
                    copy: "Copy",
                    copySuccess: "Copied!",
                    customize: `<a href="${t.config.video.url}#embed" target="_blank" rel="noopener" aria-describedby="new-window">` + "Customize this embed</a> on Vimeo"
                }
            }), e._firstFocusElement = ".js-facebook", (null == (a = t.config.embed.settings.share) ? void 0 : a.embed_only) && (e.wrapperClass = "embed-only", e._firstFocusElement = ".js-embed-input"), e
        },
        showShareView() {
            n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Wt._shareViewShown)
        },
        showEmbedView() {
            t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Wt._embedViewShown)
        },
        buildBPLocationString: d
    };
    return function() {
        var e;
        I(n).on("transitionend", ".js-share-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Wt._embedViewEnd), this.classList.add("cloaked"))
        })).on("transitionend", ".js-embed-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Wt._shareViewEnd), this.classList.add("cloaked"), yt(n))
        })).on(["copy", "cut"], "input[name=embed_code]", (function() {
            or(Yo.COPY_VIDEO_EMBED_CODE, t.config, {
                location: d(a),
                path: window.location.pathname
            }), a = !1, t.events.fire(Wt._embedCodeCopied)
        })), vl(n, ".js-facebook", (function() {
            return t.events.fire(Wt._facebookButtonPressed, this.href), pt(), !1
        })), vl(n, ".js-twitter", (function() {
            return t.events.fire(Wt._twitterButtonPressed, this.href), pt(), !1
        })), vl(n, ".js-tumblr", (function() {
            return t.events.fire(Wt._tumblrButtonPressed, this.href), pt(), !1
        })), vl(n, ".js-email", (function() {
            return t.events.fire(Wt._emailButtonPressed), window.top.location = this.href, pt(), !1
        })), vl(n, ".js-embed", (function() {
            return t.events.fire(Wt._embedButtonPressed), u.showEmbedView(), pt(), !1
        })), vl(n, ".js-embedCopy", (function() {
            if (r) {
                n.querySelector("input[name=embed_code]").select(), a = !0;
                try {
                    document.execCommand("copy") && function() {
                        t.events.fire(Wt._embedCodeCopied);
                        var i = n.querySelector(".js-embedCopy");
                        i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(e), e = setTimeout((function() {
                            i.innerHTML = i.getAttribute("data-label")
                        }), 2e3)
                    }()
                } catch (Te) {
                    a = !1
                }
                return document.activeElement.blur(), !1
            }
        })), o.touch ? I(n).on("focus", "input[name=embed_code]", (function() {
            var e = this;
            setTimeout((function() {
                e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly")
            }), 0)
        })).on("blur", "input", (function() {
            this.removeAttribute("readonly")
        })) : I(n).on("click", "input[name=embed_code]", (function() {
            this.setSelectionRange(0, 9999)
        }))
    }(), u
}

function fl(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var i = Promise.resolve(e());
        return t ? i.then(t) : i
    } catch (Te) {
        return Promise.reject(Te)
    }
}

function hl() {}

function gl(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Te) {
            return Promise.reject(Te)
        }
    }
}

function bl(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function El(e, t, n) {
    const i = gl((function() {
            return u = !0, s === Zt.BEGINNING ? (c.innerHTML = "", void e.events.fire(Nt._reset)) : function(e, t) {
                var n = function() {
                    if (w()) return fl(r, (function() {
                        i()
                    }))
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                let i = function() {
                    if ([Zt.VIDEOS, Zt.THREEVIDEOS, Zt.PROMOTED].includes(s)) {
                        var t;
                        if (0 === ((null == (t = d) ? void 0 : t.contexts) || []).reduce((function(e, t) {
                                return e + t.videos.length
                            }), 0)) return null;
                        d.showFollowButton = !e.config.user.owner && e.config.user.logged_in, d.strings = {
                            follow: "Follow",
                            following: "Following",
                            unfollow: "Unfollow"
                        }
                    }
                    return d && (d.target = !e.config.embed.on_site), E = s, [Zt.THREEVIDEOS, Zt.PROMOTED].includes(s) && (E = Zt.VIDEOS), Xa.render("outro_" + E, d)
                }();
                i && (c.innerHTML = i, c.setAttribute("data-type", E), n.classList.remove("hidden"), n.removeAttribute("hidden"), p = !0, [Zt.VIDEOS, Zt.THREEVIDEOS].includes(s) ? function() {
                    const e = document.querySelector(".js-outro-followWrap");
                    if (e) {
                        const t = window.getComputedStyle(e),
                            n = parseFloat(t.fontSize);
                        e.style.width = `${e.clientWidth/n}em`
                    }
                }() : s === Zt.LINK ? (t.watch("ui.outro.isLinkTitleVisible", S), t.watch("ui.outro.isLinkDescriptionVisible", k), S(t.get("ui.outro.isLinkTitleVisible")), k(t.get("ui.outro.isLinkDescriptionVisible"))) : s === Zt.SHARE && function() {
                    const e = n.querySelector(".js-outro-content"),
                        t = a.getShareData();
                    e.innerHTML = t.template, a.setup()
                }(), window.requestAnimationFrame((function() {
                    window.requestAnimationFrame((function() {
                        n.classList.add("in"), O()
                    }))
                })))
            }))
        })),
        r = gl((function() {
            if (e.config.embed.outro === Zt.VOD) return s = Zt.VOD, void(d = A(s));
            f = !0;
            const t = e.config.embed.email_capture_form || e.config.embed.email || {},
                n = e.config.video.unlisted_hash ? `h=${e.config.video.unlisted_hash}&` : "",
                i = `https://${e.config.player_url}/video/${e.config.video.id}/outro?${n}on_site=${e.config.embed.on_site}&type=${e.config.embed.outro}&email=${t?1:0}`;
            return function(e) {
                if (e && e.then) return e.then(hl)
            }(function(t, n) {
                try {
                    var o = bl(g(i, {
                        withCredentials: !0
                    }), (function(t) {
                        return bl(t.json(), (function(t) {
                            s = t.type, (d = A(s, t.data)) && (d.bgimage && _r(d.bgimage), d.contexts && d.contexts.forEach(e => {
                                e.videos.forEach(e => {
                                    _r(e.thumbnail)
                                })
                            })), Qa(e.config.video.owner) && function(t, n) {
                                [Zt.VIDEOS, Zt.THREEVIDEOS, Zt.PROMOTED].includes(t) && n.contexts && n.contexts.forEach(t => {
                                    t.videos.reduce((t, n) => t.then(function(t) {
                                        return () => e.preloadVideo("auto", t.id, {
                                            autoplay: !0
                                        }).catch(e => {})
                                    }(n)), Promise.resolve())
                                })
                            }(s, d)
                        }))
                    }))
                } catch (Te) {
                    return
                }
                return o && o.then ? o.then(void 0, n) : o
            }(0, (function(e) {})))
        }));
    var a, s, l, c = n.querySelector(".vp-outro"),
        d = null,
        u = !1,
        p = !1,
        _ = !1,
        v = !1,
        f = !1,
        h = L(O, 250);
    let b = !1,
        E = null,
        C = e.config.request.ads instanceof Object,
        T = !1;
    const w = () => !f && null === d && !e.config.embed.loop;

    function A(t, n = {}) {
        const {
            width: i,
            height: r
        } = ur(e.element.clientWidth * o.devicePixelRatio, e.element.clientHeight * o.devicePixelRatio);
        if (n.img_base && (n.bgimage = pr({
                width: i,
                height: r,
                baseUrl: n.img_base
            })), t === Zt.VOD) {
            const t = void 0 !== e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                i = e.config.video.vod.is_coming_soon,
                o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available;
            let r = "Coming soon to Vimeo On Demand.";
            i && o && (r = "Coming soon to Vimeo On Demand on " + o + "."), t && (r = "Pre-order now. Watch on " + o + "."), n = {
                purchased: e.config.user.purchased,
                title: e.config.video.vod.feature_title,
                url: e.config.video.vod.url,
                currency: e.config.request.currency,
                countries: e.config.video.vod.countries,
                country: e.config.request.country,
                buttons: e.config.video.vod.purchase_options,
                translationMap: e.config.request.dynamic_translation_map,
                isPreorder: t,
                isComingSoon: i,
                releaseDate: o,
                strings: {
                    watch: t ? "Watch on " + o : "Watch Now",
                    preRelease: r
                }
            }
        }
        return [Zt.VIDEOS, Zt.THREEVIDEOS, Zt.PROMOTED].includes(t) && (e.config.user.following = n.following, (n = {
            contexts: Array.isArray(n) ? n : [n],
            owner: e.config.video.owner.id,
            bgimage: n.bgimage,
            following: n.following
        }).contexts && n.contexts.forEach(e => {
            e.videos.forEach(t => {
                if (t.fullTitle = t.title, t.byline = "", t.owner.id !== n.owner && (t.fullTitle = t.title + " from " + t.owner.name, t.byline = "from " + t.owner.name), t.thumbnail_base) {
                    const n = Math.round(i / e.videos.length);
                    t.thumbnail = pr({
                        width: n,
                        height: Math.round(n / 1.778),
                        baseUrl: t.thumbnail_base
                    })
                }
            })
        })), t === Zt.LINK && (n.url = hi(n.url), n.url2 = hi(n.url2)), t === Zt.SHARE && (n.strings = {
            back: "Back"
        }), n
    }

    function S(e) {
        c.classList.toggle("vp-outro--link-medium", e)
    }

    function k(e) {
        c.classList.toggle("vp-outro--link-large", e)
    }

    function P() {
        if (p) return a.destroy(), u = !1, _ = !1, p = !1, void window.requestAnimationFrame((function() {
            n.classList.remove("in"), e.events.fire(Wt._outroHidden), N()
        }));
        u && (u = !1, e.events.fire(Wt._outroHidden))
    }

    function O() {
        var t;
        if (!_ && n.clientWidth) {
            I(window).off("resize", h), _ = !0;
            var i = [];
            (null == (t = d) ? void 0 : t.contexts) && d.contexts.forEach(e => {
                e.videos && e.videos.forEach(e => {
                    var t = e.id,
                        n = c.querySelector('[data-video-id="' + t + '"]');
                    n && n.clientWidth > 0 && i.push(t)
                })
            }), e.events.fire(Wt._outroDisplayed, i)
        }
    }

    function R() {
        const t = e.config.embed.email_capture_form || e.config.embed.email || {};
        "after-video" !== t.position && "after" !== t.position || b ? e.events.fire(Nt._showOutro) : (b = !0, l = setTimeout(() => {
            e.events.fire(Wt._showEmailCaptureForm), e.events.once(Wt._emailCaptureEnd, () => {
                e.events.fire(Nt._showOutro)
            })
        }, 250))
    }

    function N() {
        I(window).off("resize", h), I(window).on("resize", h)
    }
    return e.events.on(y, (function() {
            [Zt.NOTHING, Zt.BEGINNING, Zt.EMAIL].includes(e.config.embed.outro) && (s = e.config.embed.outro, d = !1)
        })), e.events.on(Wt._allAdsCompleted, () => {
            T = !0
        }), e.events.on(m.TIME_UPDATE, gl((function({
            currentTime: t,
            duration: n
        }) {
            const i = function(e, t, n, i) {
                return t ? i - n : e
            }(n, e.segmentedPlaybackEnabled, e.startTime, e.endTime);
            return v = !1, b = !1,
                function(e) {
                    var n = function() {
                        if (t >= i - 10 && w()) return fl(r, (function() {
                            v && R()
                        }))
                    }();
                    if (n && n.then) return n.then(hl)
                }()
        }))), e.events.on(Wt._ended, () => {
            if (v = !0, C && !T) return e.events.once(Wt._allAdsCompleted, R), void(C = !1);
            R()
        }), e.events.on(Wt._loadVideo, () => {
            clearTimeout(l)
        }), e.events.on(Wt._webinarRegistrantBlocked, () => {
            e.config.video.webinar && clearTimeout(l)
        }), e.events.on(Nt._showOutro, (function(t, n) {
            e.performDelegateAction(qt, () => {
                t && (s = t, d = null, f = !1), n && n.data && (d = A(t, n.data)), i()
            })
        })), I(n).on("click", ".js-videoLink", (function(t) {
            const n = parseInt(this.getAttribute("data-video-id"), 10);
            e.events.fire(Wt._outroVideoPressed, n);
            const i = Zi(e.config),
                o = [Bi.SINGLE_VIDEO_VIEW_MANAGE, Bi.SINGLE_VIDEO_VIEW_RECIPIENT].includes(i);
            Qa(e.config.video.owner) && !o && (t.preventDefault(), e.startTime = null, e.endTime = null, e.loadVideo(n, {
                autoplay: !0
            }))
        })), I(n).on("click", ".js-cta", (function(t) {
            e.events.fire(Wt._outroCtaPressed, this.href)
        })), I(n).on("click", ".js-link", (function(t) {
            e.events.fire(Wt._outroLinkPressed, this.href)
        })), I(n).on("click", ".js-imageLink", (function(t) {
            e.events.fire(Wt._outroImagePressed, this.href)
        })), I(n).on("transitionend", (function(e) {
            n.classList.contains("in") || (n.classList.add("hidden"), n.setAttribute("hidden", ""))
        }), !1), e.events.on([Nt._hideOutro, Nt._reset, m.PLAY, m.SEEKED, Wt._scrubbingStarted], P), e.events.on(Wt._outroDisplayed, (function() {
            e.element.classList.add("player-outroVisible")
        })).on(Wt._outroHidden, (function() {
            e.element.classList.remove("player-outroVisible")
        })), vl(n, ".js-outro-follow", (function() {
            e.events.fire(Wt._followButtonPressed)
        })), I(n).on("mouseleave", ".js-outro-follow", (function(e) {
            const t = document.querySelector(".js-outro-follow");
            t && t.classList.remove("vp-outro-follow--activated")
        })), e.events.on(Wt._followed, (function() {
            const e = document.querySelector(".js-outro-follow");
            e && (e.setAttribute("aria-pressed", !0), e.classList.add("vp-outro-follow--activated"))
        })), e.events.on(Wt._unfollowed, (function() {
            const e = document.querySelector(".js-outro-follow");
            e && e.setAttribute("aria-pressed", !1)
        })),
        function() {
            function t() {
                setTimeout((function() {
                    n.classList.add("hidden")
                }), 150)
            }

            function i() {
                n.classList.contains("in") && n.classList.remove("hidden")
            }
            e.events.on(Nt._showOverlay, t), e.events.on(Wt._accessGateOpened, t), e.events.on(Wt._overlayClosed, i), e.events.on(Wt._accessGateClosed, i)
        }(), e.events.on(Nt._reset, (function() {
            d = null, f = !1, C = e.config.request.ads instanceof Object
        })), vl(n, ".js-vod-button", (function() {
            var t = this.getAttribute("data-product-id");
            return e.events.fire(Wt._vodButtonPressed, t), !1
        })), vl(n, ".js-vod-watch", (function() {
            if (!("date_available" in e.config.video.vod)) return P(), e.events.fire(Wt._vodButtonPressed), !1
        })), c && ((a = new ml(e, c)).events.on(Wt._embedViewShown, (function() {
            e.config.embed.settings.share.embed_only || (n.querySelector(".js-back").classList.remove("cloaked"), n.classList.add("embed-active"))
        })).on(Wt._shareViewShown, (function() {
            n.classList.remove("embed-active")
        })), vl(n, ".js-back", (function() {
            return a.showShareView(), !1
        })), a.events.on(Wt._shareViewEnd, (function() {
            n.querySelector(".js-back").classList.add("cloaked")
        }))), N(), {}
}
let yl = 0;

function Cl(e = "b") {
    return `${e}${++yl}`
}
Cl(), Cl(), Cl(), Cl(), Cl(), Cl(), Cl(), Cl();
const Tl = Cl(),
    Ll = Cl(),
    wl = Cl(),
    Al = Cl(),
    Sl = Cl(),
    Il = Cl(),
    kl = Cl(),
    Pl = Cl(),
    Ol = Cl(),
    Rl = Cl(),
    Nl = Cl(),
    Dl = Cl(),
    Ml = Cl(),
    xl = Cl();
var Bl = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: Tl,
        TELECINE_READY: Ll,
        TELECINE_VIDEO_INIT: wl,
        PLAY_INITIATED: Al,
        QUALITY_CHANGED: Sl,
        FORCED_QUALITY: Il,
        CUE_CHANGED: kl,
        CAPTIONS_CHANGED: Pl,
        SPATIAL_PLAYBACK_TOGGLED: Ol,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: Rl,
        HLS_QUALITY_CHANGED: Nl,
        REQUEST_COMPLETE_LIVE_SUBTITLES: Dl,
        COMPLETE_LIVE_SUBTITLES_LOADED: Ml,
        COMPLETE_LIVE_SUBTITLES_ERROR: xl
    }),
    Vl = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
h(h(h(h(h(h(h(h(h({}, m), C), Ge), Vl), W), H), G), Y), Bl);
const Ul = h(h({}, Ge), Vl);

function Fl(e, t = null) {
    return "after-video" === (t = t || e.position) || "after" === t
}

function Hl(e) {
    return pr({
        height: 72 * o.devicePixelRatio,
        width: 640 * o.devicePixelRatio,
        baseUrl: e
    })
}
let ql = function() {
    function e(e) {
        this.element = e, this.cachedElements = {}
    }
    var t = e.prototype;
    return t.getElement = function(e) {
        return this.cachedElements[e] || (this.cachedElements[e] = this.element.querySelector(e)), this.cachedElements[e]
    }, t.removeElement = function(e) {
        this.getElement(e) && (this.cachedElements[e].remove(), this.cachedElements[e] = null)
    }, t.updateAll = function(e, t) {
        this.updateTitle(e.text || e.custom_message), this.updateSkipBtn(e.allow_skip || e.skippable, e.position), this.updatePrivacyPolicy(e.privacy_policy), this.updateCustomLogo(e.custom_logo), this.updateFields(e.custom_fields, t)
    }, t.updateTitle = function(e) {
        const t = this.getElement(".vp-email-capture-title");
        e && t ? t.textContent = Jl(e) : !e && t && (t.textContent = "")
    }, t.updateSkipBtn = function(e, t) {
        const n = this.getElement(".vp-email-capture-form-button--cancel");
        if (e && n) n.value = Fl(null, t) ? "Skip" : "Skip to video";
        else if (e && !n) {
            const e = this.getElement(".vp-email-capture-form-skip");
            let n = Xa.render("email_capture_skip", {
                position: t,
                skipText: "Skip",
                skipToVideoText: "Skip to video",
                positionIsAfter: Fl(null, t)
            });
            e.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-form-button--cancel")
    }, t.updatePrivacyPolicy = function(e) {
        const t = this.getElement(".vp-email-capture-privacy-policy");
        if (e && t) t.href = encodeURI(e);
        else if (e && !t) {
            const t = this.getElement(".vp-email-capture-disclaimer-wrapper"),
                n = Xa.render("email_capture_privacy_policy", {
                    text: "Privacy policy",
                    url: e
                });
            t.insertAdjacentHTML("beforeend", n)
        } else !e && t && this.removeElement(".vp-email-capture-privacy-policy")
    }, t.updateCustomLogo = function(e) {
        const t = this.getElement(".vp-email-capture-title-logo-wrap"),
            n = this.getElement(".vp-email-capture-logo");
        if (e && n) n.src = Hl(e);
        else if (e && !n && t) {
            const n = Xa.render("email_capture_logo", {
                url: Hl(e)
            });
            t.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-logo")
    }, t.updateFields = function(e, t) {
        if (e) {
            let n = this.getElement(".vp-email-capture-form-fields-slider").children;
            n.length && Array.from(n).forEach(t => {
                e.some(e => t.dataset.id === String(e.id)) || t.remove()
            }), e.forEach(e => {
                this.updateField(e, t)
            })
        }
        t()
    }, t.updateField = function(e) {
        const {
            id: t,
            position_in_form: n
        } = e, i = this.getElement(".vp-email-capture-form-fields-slider");
        let o = this.element.querySelector(`[for=custom-field-${t}]`),
            r = this.element.querySelector(`#custom-field-${t}`);
        if (o && r) {
            let t = r.parentElement,
                o = i.children;
            const s = Array.from(o).indexOf(t),
                l = Xa.render("email_capture_field", {
                    field: e
                });
            var a = document.createElement("div");
            a.innerHTML = l, i.children[s].replaceWith(a.children[0]), s !== n && i.insertBefore(o[s], o[n])
        } else {
            const t = Xa.render("email_capture_field", {
                field: e
            });
            n === i.children.length ? i.insertAdjacentHTML("beforeend", t) : i.children[n].insertAdjacentHTML("beforebegin", t)
        }
    }, t.updateWebinarStartTime = function(e, t) {
        const n = this.getElement(".vp-email-capture-wrapper"),
            i = n.querySelectorAll(".vp-email-capture-start-time"),
            o = ti(new Date(e), t);
        if (e && i.length) Array.from(i).forEach(e => {
            e.textContent = o
        });
        else if (e && !i.length) {
            const e = this.getElement(".vp-email-capture-title-logo-wrap"),
                t = n.querySelectorAll(".vp-email-capture-thank-you-title");
            let i = Xa.render("email_capture_start_time", {
                startTime: o
            });
            e.insertAdjacentHTML("afterbegin", i), Array.from(t).forEach(e => {
                i = Xa.render("email_capture_start_time", {
                    startTime: o
                }), e.insertAdjacentHTML("afterbegin", i)
            })
        } else !e && i.length && Array.from(i).forEach(e => {
            e.parentNode.removeChild(e)
        })
    }, t.clearCachedElements = function() {
        this.cachedElements = {}
    }, e
}();

function Gl(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Wl(e, t) {
    try {
        var n = e()
    } catch (Te) {
        return t(Te)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Yl() {}
const $l = "vp-email-capture-form-dropdown-option-active";

function Kl(e) {
    if (e && e.then) return e.then(Yl)
}

function jl(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Te) {
            return Promise.reject(Te)
        }
    }
}
const zl = {
    skip_to_video: "Skip to video",
    skip: "Skip",
    next: "Next",
    back: "Back",
    submit: "Submit",
    disclaimer: "Share your information with the owner of this video",
    privacy_policy: "Privacy policy",
    thank_you: "Thank you!",
    video_starts: "Video starts in",
    successful: "Your information was successfully submitted.",
    step: "Step",
    of: "of",
    aria_label: "Email capture form",
    webinar: {
        disclaimer: 'I agree that the host will see my viewing activities for this webinar, and I agree to <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/terms" target="_blank" rel="noopener">Vimeo\'s Terms of Service</a> and <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
        host_privacy_policy: "and the webinar host's Privacy Policy",
        reg_full: "Sorry, registration is full.",
        reg_login_title: "Enter your email to see if you’re registered",
        reg_thank_you: "Thanks for registering!",
        reg_thank_you_subtitle: "Check your email for your registration confirmation. We'll also send you a reminder and a link to the event 24 hours before it begins.",
        reg_bypass: "Already registered?",
        reg_go_back: "Register for this event",
        login_thank_you: "Great news! You’re already registered.",
        login_thank_you_subtitle: "Check your email for your registration confirmation.",
        email_not_valid: "Email address not valid. Please try another email address.",
        email_not_registered: "Email not registered for this event",
        opt_in: "Opt into emails from this event host",
        event_is_live: "This event is live",
        unscheduled: "Unscheduled",
        add_to_calendar: "Add to calendar",
        opt_in_error: "Opting in is required to register for this webinar.",
        opt_in_login_error: "Opting in is required to check your registration status."
    }
};

function Xl(e = []) {
    return e.map(e => h(h({}, e), {}, {
        field_label: Zl(e.field_name)
    })).sort((e, t) => e.position_in_form - t.position_in_form)
}

function Zl(e) {
    switch (e) {
        case "Email address":
            return "Email address";
        case "First name":
            return "First name";
        case "Last name":
            return "Last name";
        default:
            return e
    }
}

function Jl(e) {
    switch (e) {
        case "Sign up for our mailing list":
            return "Sign up for our mailing list";
        case "Register to watch live":
            return "Register to watch live";
        default:
            return e
    }
}

function Ql(e, t, n) {
    var i, o, r, a;
    const s = jl((function() {
            yt(n);
            const i = Z(E),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function a(t) {
                P.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? j(!1) : (L.setCustomValidity("Uh oh. There was a problem. Please try again."), L.setAttribute("aria-invalid", "true"), e.events.fire(Wt._emailCaptureFailure), H())
            }
            const s = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/login?context=${encodeURIComponent(_)}&time=${o}&expires=${r}`;
            return P.classList.add("loading"), Kl(Wl((function() {
                return Gl(g(s, {
                    method: "POST",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Gl(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(Oo(!0, n.video.webinar.registrant)), e.events.fire(Wt._webinarFormSuccess, n), p ? (K(), e.events.fire(Wt._playButtonPressed)) : j(!1)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return Kl(Wl((function() {
                    return Gl(e.response.json(), (function(e) {
                        a(e)
                    }))
                }), (function() {
                    a()
                })))
            })))
        })),
        c = jl((function() {
            yt(n);
            const i = Z(E, {
                    isRegistration: !0
                }),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function a(t) {
                P.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? j(!0) : 3158 === (null == t ? void 0 : t.error_code) ? z() : (L.setCustomValidity("Uh oh. There was a problem. Please try again."), L.setAttribute("aria-invalid", "true"), e.events.fire(Wt._emailCaptureFailure), H())
            }
            const s = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/registration?context=${encodeURIComponent(_)}&time=${o}&expires=${r}`;
            return P.classList.add("loading"), Kl(Wl((function() {
                return Gl(g(s, {
                    method: "PUT",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Gl(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(Oo(!0, n.video.webinar.registrant)), e.events.fire(Wt._webinarFormSuccess, n), p ? (K(), e.events.fire(Wt._playButtonPressed)) : j(!0)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return Kl(Wl((function() {
                    return Gl(e.response.json(), (function(e) {
                        a(e)
                    }))
                }), (function() {
                    a()
                })))
            })))
        })),
        d = w(),
        u = !l(null == (i = e.config.video.webinar) ? void 0 : i.registration_form),
        p = "started" === (null == (o = e.config.video.webinar) ? void 0 : o.status),
        _ = e.config.embed.context,
        v = ["Vimeo\\Controller\\VideoSettings\\ServiceController.getInteractions", "Vimeo\\Controller\\Api\\Resources\\Webinar\\WebinarController."].includes(_);
    let m, f, h, b, E, y, C, T, L, A, S, k, P, O, R, N, D = new ql(n),
        M = !1,
        x = !1,
        B = F(e.config),
        V = null == (r = B) || null == (a = r.custom_fields) ? void 0 : a[C - 1],
        U = e.config.view === Kt.webinarFull;

    function F(e) {
        var t, n, i;
        return u ? (null == (i = e.video.webinar) ? void 0 : i.registration_form) || {} : (null == (t = e.embed) ? void 0 : t.email_capture_form) || (null == (n = e.embed) ? void 0 : n.email) || {}
    }

    function H() {
        var e;
        const t = S.querySelector(".vp-validation-bubble-message"),
            n = null == (e = V) ? void 0 : e.field_type;
        t.innerHTML = L.validationMessage || ("dropdown" === n ? "This field is required." : "There is an error with this input."), S.classList.remove("hidden"), S.classList.remove("vp-validation-bubble-animate"), window.requestAnimationFrame((function() {
            S.classList.add("vp-validation-bubble-animate")
        })), L.focus()
    }

    function q() {
        T.classList.add("vp-email-capture-input-invalid"), H()
    }

    function G() {
        S.classList.remove("vp-validation-bubble-animate"), T.classList.remove("vp-email-capture-input-invalid"), k && (R.classList.remove("vp-webinar-compliance-checkbox-invalid"), k.classList.remove("vp-opt-in-bubble-animate"), k.classList.add("hidden"))
    }
    const W = ({
        target: e
    }) => {
        e === h && (h.removeEventListener("transitionend", W), L.focus())
    };

    function Y(e, t = !0) {
        var i, o;
        const r = n.querySelector(".vp-email-capture-disclaimer-wrapper"),
            a = n.querySelector(".vp-email-capture-current-step"),
            s = n.querySelector(".vp-email-capture");
        T && (T.setAttribute("aria-hidden", !0), L.tabIndex = -1), C && (!f && !v || v) && (f = vt(m).height), C = e, V = null == (i = B) || null == (o = i.custom_fields) ? void 0 : o[C - 1], T = b[C - 1], L = E[C - 1], T && L && (T.setAttribute("aria-hidden", !1), L.tabIndex = 0), window.requestAnimationFrame(() => {
                h.style.transform = `translateY(-${f*(C-1)}px)`, a.textContent = C, A.style.width = `${C/b.length*100}%`
            }), t && h.addEventListener("transitionend", W), s.classList.toggle("vp-email-capture-first-step", 1 === C), u && (r.classList.toggle("hidden", C < b.length), x ? r.classList.add("vp-email-capture-login-disclaimer-wrapper") : (O.classList.toggle("hidden", C === b.length), r.classList.remove("vp-email-capture-login-disclaimer-wrapper"))),
            function() {
                const e = n.querySelector(".vp-email-capture-form-button--back"),
                    t = n.querySelector(".vp-email-capture-form-button--next");
                1 === C && (y.classList.remove("half"), e.classList.remove("show"), e.classList.add("hidden"), e.tabIndex = -1), C > 1 && (y.classList.add("half"), e.classList.remove("hidden"), e.tabIndex = 0, e.setAttribute("aria-hidden", !1), window.requestAnimationFrame(() => {
                    e.classList.add("show")
                })), C < b.length ? (t.tabIndex = 0, t.setAttribute("aria-hidden", !1), P.tabIndex = -1, P.setAttribute("aria-hidden", !0), y.classList.remove("showSubmitBtn")) : (P.tabIndex = 0, P.setAttribute("aria-hidden", !1), t.tabIndex = 1, t.setAttribute("aria-hidden", !0), y.classList.add("showSubmitBtn"))
            }()
    }

    function $() {
        if (!L.required) return !0;
        var e;
        if (u && "dropdown" === (null == (e = V) ? void 0 : e.field_type)) return !(V.required && !L.value.length && (L.setCustomValidity("This field is required."), 1));
        return "email" !== L.type || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(L.value) ? !(L.checkValidity && !L.checkValidity() && ((L.validity.valueMissing || L.validity.typeMismatch) && L.setCustomValidity("This field is required."), L.validity.typeMismatch && L.setCustomValidity("Please enter a valid response."), 1)) : (L.setCustomValidity("Please enter a valid email address."), !1)
    }
    const K = () => {
        I(n).off(["click", "touchend"], ".vp-email-capture-form-button--cancel"), I(n).off(["click", "keydown"], ".vp-email-capture-form-button--next"), I(n).off(["click", "keydown"], ".vp-email-capture-form-button--back"), I(n).off(["click"], ".vp-email-capture-form-button--submit"), I(n).off(["keyup", "blur"], ".vp-email-capture-form-button--next-submit-wrapper"), I(n).off("click", ".vp-email-capture-wrapper"), I(n).off(["keyup", "input", "focus", "blur"], ".vp-email-capture-form-input"), I(n).off("submit", ".vp-email-capture-form"), I(n).off(["keyup", "click", "focus", "blur"], ".vp-disclaimer-checkbox"), I(window).off("resize"), M = !1, d.fire(Wt._emailCaptureEnd)
    };

    function j(t = !0) {
        let i;
        const o = n.querySelector(".vp-email-capture");
        i = t ? n.querySelector(".vp-email-capture-reg-thank-you") : n.querySelector(".vp-email-capture-login-thank-you"), o.classList.add("hidden"), i.classList.remove("hidden"), e.events.once(Ul.EVENT_STARTED, () => {
            K()
        })
    }

    function z(e = !1) {
        const t = n.querySelector(".vp-email-capture"),
            i = n.querySelector(".vp-email-capture-reg-full");
        e ? (t.classList.remove("hidden"), i.classList.add("hidden")) : (t.classList.add("hidden"), i.classList.remove("hidden")), U = !0
    }

    function X() {
        function t(t) {
            P.classList.remove("loading"), L.setCustomValidity("Uh oh. There was a problem. Please try again."), L.setAttribute("aria-invalid", "true"), e.events.fire(Wt._emailCaptureFailure), H()
        }
        P.classList.add("loading"),
            function(i, o) {
                yt(n);
                const r = Array.from(E),
                    a = new XMLHttpRequest,
                    {
                        referrer: s,
                        signature: l,
                        timestamp: c,
                        expires: d
                    } = e.config.request,
                    u = `https://${e.config.player_url}/video/${e.config.video.id}/submit-email?signature=${l}&time=${c}&expires=${d}&referrer=${s}`;
                a.open("POST", u + window.location.search, !0);
                const p = {};
                r.forEach(e => {
                    p[e.name] = e.value
                });
                const _ = JSON.stringify(p);
                a.setRequestHeader("Content-Type", "application/json"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                    var i;
                    try {
                        i = JSON.parse(a.responseText)
                    } catch (Te) {}! function(i, o) {
                        !1 !== i ? (e.config.embed.email_capture_form = null, e.config.embed.email = null, e.events.fire(Wt._emailCaptureSuccess), function() {
                            const e = n.querySelector(".vp-email-capture"),
                                t = n.querySelector(".vp-email-capture-thank-you");
                            e.classList.add("hidden"), t.classList.remove("hidden"), window.requestAnimationFrame(() => {
                                const e = n.querySelector(".vp-email-capture-video-countdown-timer"),
                                    i = n.querySelector(".vp-email-capture-video-countdown-meter");
                                t.classList.add("in"), e && (i.classList.add("vp-email-capture-video-countdown-meter--active"), e.textContent = 3);
                                let o = 2;
                                const r = setInterval(() => {
                                    o <= 0 ? (K(), clearInterval(r)) : (e && (e.textContent = o), o -= 1)
                                }, 1e3)
                            })
                        }()) : t(o.status)
                    }(i, a)
                }, a.onerror = function(e) {
                    o(e)
                }, a.send(_)
            }(0, t)
    }

    function Z(e, t = {}) {
        const n = {},
            {
                isRegistration: i
            } = t;
        if (Array.from(e).forEach(e => {
                const t = e.name,
                    i = e.value;
                switch (t) {
                    case "email":
                        n.email = i;
                        break;
                    case "First name":
                        n.first_name = i;
                        break;
                    case "Last name":
                        n.last_name = i;
                        break;
                    default:
                        n.data || (n.data = {}), n.data[t] = i
                }
            }), i) {
            let e;
            const {
                timeZone: t
            } = (new Intl.DateTimeFormat).resolvedOptions();
            n.time_zone = t;
            try {
                e = Ao() && (() => {
                    try {
                        return window.parent.origin === window.origin
                    } catch (e) {
                        return !1
                    }
                })() ? bi(window.top.location.href) ? window.top.location.href : window.location.href : window.location.href ? window.location.href : document.referrer
            } catch (Te) {
                e = ""
            }
            e && (n.webinarRegistrantSource = {
                metadata: {
                    url: e
                },
                type: "Player"
            })
        }
        return JSON.stringify(n)
    }
    const J = e => $() ? (G(), Y(C + 1), !0) : (q(), !1),
        Q = () => {
            var t, i;
            return C === b.length && (u && !N.getAttribute("checked") ? (N.classList.add("vp-disclaimer-checkbox-invalid"), n.querySelector(".vp-opt-in-bubble-message").innerText = x ? zl.webinar.opt_in_login_error : zl.webinar.opt_in_error, k.classList.remove("hidden"), k.classList.remove("vp-opt-in-bubble-animate"), window.requestAnimationFrame((function() {
                k.classList.add("vp-opt-in-bubble-animate")
            })), R.classList.add("vp-webinar-compliance-checkbox-invalid"), N.focus(), !1) : $() ? ((function(e, t = null) {
                return "before-video" === (t = t || e.position) || "before" === t
            }(B) && !e.config.video.live_event || "started" === (null == (t = e.config.video.live_event) ? void 0 : t.status)) && (e.events.fire(Wt._playButtonPressed), e.events.fire(Wt._pauseButtonPressed)), G(), e.events.fire(Wt._emailCaptureSubmitted), u ? x ? s() : c() : (X(), (Fl(B) || e.config.video.live_event) && "started" !== (null == (i = e.config.video.live_event) ? void 0 : i.status) || e.events.fire(Wt._playButtonPressed)), !1) : (q(), !1))
        };

    function ee(e) {
        x = e;
        let t = B.custom_fields;
        x && (t = [{
                field_name: "Email address",
                required: 1,
                position_in_form: 0,
                id: 1,
                locked: 1
            }]),
            function(e) {
                const t = Xa.render("email_capture_fields", {
                    customFields: Xl(e),
                    strings: zl
                });
                document.querySelector(".vp-email-capture-form-fields-slider").innerHTML = t, n.querySelector(".vp-email-capture-total-steps").innerText = e.length, b = n.querySelectorAll(".vp-email-capture-form-custom-field"), E = n.querySelectorAll(".vp-email-capture-form-input"), T = b[C - 1], L = E[C - 1], f = null, re(), Y(C > b.length ? b.length : C, !1)
            }(t), O.innerHTML = Xa.render("webinar_registration_bypass_btn", {
                showWebinarLogin: x,
                regBypass: zl.webinar.reg_bypass,
                regGoBack: zl.webinar.reg_go_back,
                registrationFull: U
            });
        let i = x ? zl.webinar.reg_login_title : B.custom_message;
        document.querySelector(".vp-email-capture-title").innerHTML = Xa.render("email_capture_title", {
            title: i
        }), G(), U && z(x), x || ie()
    }
    const te = () => {
            const e = n.querySelectorAll(".vp-email-capture-form-dropdown-options"),
                t = n.querySelector(".vp-email-capture-form-custom-field");
            e.forEach(e => {
                if ((null == t ? void 0 : t.offsetWidth) && e) {
                    const n = `${Math.ceil(.85*t.offsetWidth)}px`;
                    e.style.width !== n && (e.style.width = n)
                }
            })
        },
        ne = e => {
            const t = n.querySelector(`.vp-email-capture-form-dropdown-${e}`),
                i = n.querySelector(`#custom-field-${e}`),
                o = n.querySelector(".vp-email-capture-dropdown-overlay"),
                r = n.querySelector(`#custom-field-options-overlay-${e}`),
                a = n.querySelector(`#custom-field-options-${e}`),
                s = null == a ? void 0 : a.querySelectorAll(".vp-email-capture-form-dropdown-option");
            if (!(i && o && a && s && r)) return;
            let l = -1,
                c = !1;
            te();
            const d = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.remove(t)
                },
                u = (e, t) => {
                    d(e, t), e[l].classList.add(t), e[l].focus()
                },
                p = () => {
                    c && (c = !1, o.classList.remove("active"), o.setAttribute("aria-expanded", "false"), o.removeChild(a), r.appendChild(a), L.focus(), L.readOnly = !0)
                },
                _ = (e, t) => {
                    ! function(e) {
                        e.forEach((function(e) {
                            e.classList.remove("selected")
                        }))
                    }(s), 0 !== t || V.required ? (i.value = e.innerText, T.classList.add("active"), e.classList.add("selected")) : (i.value = "", T.classList.remove("focus"), T.classList.remove("active")), p()
                },
                v = () => {
                    var e;
                    S.classList.add("hidden"), T.classList.remove("vp-email-capture-input-invalid"), o.classList.contains("active") ? (i.value.length ? T.classList.add("focus") : T.classList.remove("focus"), o.classList.remove("active"), o.removeChild(a), r.appendChild(a)) : (o.classList.add("active"), o.appendChild(a), null == (e = s[0]) || e.focus()), c = !0, L.readOnly = !0, o.setAttribute("aria-expanded", "true");
                    const t = Array.from(s).findIndex(e => e.classList.contains("selected"));
                    l = t < 0 ? 0 : t, u(s, $l)
                },
                m = e => {
                    (null == a ? void 0 : a.contains(e.target)) || p()
                };
            o.removeEventListener("click", m), o.addEventListener("click", m), t.removeEventListener("click", v), t.addEventListener("click", v);
            const f = e => {
                if (c && s.length > 0) {
                    switch (e.code) {
                        case "Escape":
                            p();
                            break;
                        case "ArrowUp":
                            l--, l < 0 && (l = s.length - 1), u(s, $l);
                            break;
                        case "ArrowDown":
                        case "Tab":
                            l++, l > s.length - 1 && (l = 0), u(s, $l);
                            break;
                        case "Enter":
                        case "Space":
                            d(s, $l), l > -1 && (s[l].click(), l = -1)
                    }
                    e.preventDefault()
                }
            };
            a.removeEventListener("keydown", f), a.addEventListener("keydown", f);
            const h = e => {
                c || "Enter" !== e.code && "Space" !== e.code || (v(), e.preventDefault(), e.stopPropagation())
            };
            i.removeEventListener("keydown", h), i.addEventListener("keydown", h), s.forEach((function(e, t) {
                const n = () => {
                        _(e, t)
                    },
                    i = n => {
                        "Enter" === n.key && _(e, t)
                    };
                e.removeEventListener("click", n), e.addEventListener("click", n), e.removeEventListener("keydown", i), e.addEventListener("keydown", i)
            }))
        };

    function ie() {
        B.custom_fields.forEach(e => {
            "dropdown" === e.field_type && ne(e.id)
        })
    }
    let oe = {
        get events() {
            return d
        },
        getData(t = {}, n = {}) {
            var i;
            B = F(e.config);
            const o = n.custom_logo || B.custom_logo,
                r = n.custom_fields || B.custom_fields || [{
                    field_name: "Email address",
                    required: 1,
                    position_in_form: 0,
                    id: 1,
                    locked: 1
                }, {
                    field_name: "Name",
                    required: 0,
                    position_in_form: 1,
                    id: 2,
                    static_field: 1
                }];
            r.sort((e, t) => e.position_in_form - t.position_in_form);
            const a = n.privacy_policy || B.privacy_policy,
                s = (null == (i = e.config.video.webinar) ? void 0 : i.scheduled_start_time) || null,
                l = s ? ti(new Date(s), e.config.request.lang) : "";
            return t.template = Xa.render("email_capture", {
                allowSkip: n.allow_skip || B.skippable || B.allow_skip,
                customLogo: o ? Hl(o) : null,
                text: Jl(n.text || B.custom_message || B.text),
                customFields: Xl(r),
                privacyPolicy: a,
                positionIsAfter: Fl(B),
                strings: zl,
                showWebinarForm: u,
                showWebinarLogin: x,
                webinarStartTime: l,
                isWebinarStarted: p,
                registrationFull: n.registration_full || U
            }), D.clearCachedElements(), t._firstFocusElement = ".vp-email-capture-form-input", t.modal = !0, t.logo = !1, t.preventBackgroundClose = !0, t.noblur = n.noblur, t.nofocus = n.nofocus, t
        }
    };

    function re() {
        const e = n.querySelector(".locked_field"),
            t = n.querySelectorAll(".static_field");
        e && (e.type = "email", e.name = "email"), t && Array.from(t).forEach(e => {
            "Name" === e.name && (e.name = "name")
        })
    }
    return e.events.on(Wt._overlayOpened, i => {
                if ("email-capture" === i) {
                    if (m = n.querySelector(".vp-email-capture-form-fields-wrapper"), h = n.querySelector(".vp-email-capture-form-fields-slider"), b = n.querySelectorAll(".vp-email-capture-form-custom-field"), E = n.querySelectorAll(".vp-email-capture-form-input"), y = n.querySelector(".vp-email-capture-form-button--next-submit-wrapper"), A = n.querySelector(".vp-email-capture-progress-meter"), S = n.querySelector(".vp-validation-bubble"), k = n.querySelector(".vp-opt-in-bubble"), P = n.querySelector(".vp-email-capture-form-button--submit"), O = document.querySelector(".vp-email-capture-reg-bypass-wrapper"), R = document.querySelector(".vp-webinar-compliance-checkbox-border"), N = n.querySelector(".vp-disclaimer-checkbox"), N) {
                        const e = function(e) {
                                return `${(e=(e=(e=e.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g,"")).replace(/[\r\n%#()<>?\\[\\\]^` { |
                                }] / g,
                            encodeURIComponent)
                }
                `}(Xa.render("icon_check"));N.style.backgroundImage=`
                url("data:image/svg+xml;,${e}")
                `}re(),Y(1,!1),function(){var i;if(M)return;t.watch("ui.player.breakpoint",()=>{f=vt(m).height,window.requestAnimationFrame(()=>{h.style.transform=`
                translateY(-$ {
                        f * (C - 1)
                    }
                    px)
                `})});let o=!1;vl(n,".vp-email-capture-form-button--cancel",()=>{var t;K(),(Fl(B)||e.config.video.live_event)&&"started"!==(null==(t=e.config.video.live_event)?void 0:t.status)||e.events.fire(Wt._playButtonPressed)}),I(n).on("click",".vp-email-capture-form-button--next",J),I(n).on("click",".vp-email-capture-form-button--back",e=>{G(),Y(C-1)}),I(n).on("keyup",".vp-email-capture-form-button--next-submit-wrapper",e=>{y.classList.add("showfocus")}),I(n).on("blur",".vp-email-capture-form-button--next-submit-wrapper",e=>{y.classList.remove("showfocus")}),I(n).on("click",".vp-email-capture-wrapper",()=>{y.classList.remove("showfocus"),L.classList.remove("showfocus")}),I(n).on("keydown",".vp-email-capture-form-button--back",e=>{o=!0}),I(n).on("keydown",".vp-email-capture-form-button--next",e=>{o=!0}),I(n).on("keyup",".vp-email-capture-form-input",e=>{var t;"dropdown"!==(null==(t=V)?void 0:t.field_type)&&("Enter"===e.key&&C<b.length&&!o&&J(),9!==e.which||L.classList.contains("showfocus")||L.classList.add("showfocus"),o=!1)}),I(n).on("submit",".vp-email-capture-form",e=>!1),I(n).on("click",".vp-email-capture-form-button--submit",Q),I(n).on("input",".vp-email-capture-form-input",()=>{L.value.length?(T.classList.add("active"),L.setCustomValidity(""),$()&&G()):T.classList.remove("active")}),I(n).on("focus",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");if(null==e?void 0:e.classList.contains("active")){const t=V.id,i=n.querySelector(`#
                custom - field - options - overlay - $ {
                    t
                }
                `),o=n.querySelector(`#
                custom - field - options - $ {
                    t
                }
                `);e.classList.remove("active"),e.removeChild(o),i.appendChild(o)}T.classList.add("focus")}),I(n).on("blur",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");e&&e.classList.contains("active")||T.classList.remove("focus"),L.value.length?T.classList.add("active"):T.classList.remove("active")}),I(n).on("focus",".vp-disclaimer-checkbox",()=>{R.classList.add("showFocus")}),I(n).on("blur",".vp-disclaimer-checkbox",()=>{R.classList.remove("showFocus")}),I(n).on("click",".vp-disclaimer-checkbox",()=>{if(N.getAttribute("checked"))return N.removeAttribute("checked"),void G();N.setAttribute("checked","checked"),G()}),u&&(I(n).on("click",".vp-email-capture-reg-bypass",()=>{ee(!0)}),I(n).on("click",".vp-email-capture-reg-go-back",()=>{ee(!1)})),null==(i=B.custom_fields)||i.forEach(e=>{"dropdown"===e.field_type&&I(window).on("resize",te)}),M=!0}(),u&&ie()}}),u&&e.events.on(Nt._updateWebinarStartTime,t=>{D.updateWebinarStartTime(t,e.config.request.lang)}),e.events.on(Nt._setActivePage,e=>{Y(e,!1)}),e.events.on(Nt._updateEmailCapture,e=>{if(!n.querySelector(".vp-email-capture-form"))return;u&&x&&ee(!1);const t=Object.assign(e,{custom_fields:Xl(e.custom_fields)});D.updateAll(t,()=>{const e=n.querySelector(".vp-email-capture-form-fields-slider").children;e.length&&Array.from(e).forEach(e=>{"dropdown"===e.dataset.type&&ne(e.dataset.id)}),b=n.querySelectorAll(".vp-email-capture-form-custom-field"),E=n.querySelectorAll(".vp-email-capture-form-input"),n.querySelector(".vp-email-capture-total-steps").innerText=b.length,T=b[C-1],L=E[C-1],Y(C>b.length?b.length:C,!1)})}),e.events.on(Wt._configChanged,()=>{const n=F(e.config);t.get(Ta)||!l(B)&&!l(n)&&B.id===n.id||e.events.fire(Nt._hideOverlay,{name:"email-capture",unmakeModal:!0})}),oe}function ec(e,i,r){var a,s,l,c=r.querySelector(".vp-overlay-cell"),d=r.querySelector(".vp-overlay"),u=r.querySelector(".vp-overlay-icon-wrapper"),p=u.querySelector(".vp-overlay-icon"),_=r.querySelector(".vp-overlay-logo"),v=!1,f=null,h=null;const g=new ml(e,d),b=new Ql(e,i,d);let E=!1,y=!1,C=ln.POPUP,T=!1;function L(){var e=vt(r),t=vt(d),n=vt(_),i=t.bottom+(e.height-t.bottom)/2;return e.height-i-n.height/2+"px"}function w(){var e=vt(r),t=vt(d),n=vt(u),i=e.height/2,o=e.height-(e.bottom-t.bottom)/2;return{top:i-n.height/2+"px",transform:"translateY("+(o-i)+"px)"}}function A(t,n){r.setAttribute("data-name",t),d.innerHTML=n.template,o.iOS&&se.element&&(e.events.fire(Wt._willExitFullscreen),se.exit()),n.noblur||pt(l=document.activeElement),n.modal&&(r.classList.add("modal"),r.setAttribute("data-modal","true")),n.preventBackgroundClose&&r.setAttribute("data-background-close","false"),n.wrapperClass&&r.classList.add(n.wrapperClass),n.icon.type&&(n.logo?(_.classList.remove("hidden"),u.classList.add("cloaked"),window.requestAnimationFrame((function(){_.innerHTML=Xa.render("logo"),_.style.bottom=L()}))):u.classList.remove("cloaked"),u.classList.remove("hidden"),p.innerHTML=n.icon.html,window.requestAnimationFrame((function(){var e=w();u.style.top=e.top,u.style[o.transformProperty]=e.transform})),r.setAttribute("data-icon",n.icon.type),u.setAttribute("data-icon",n.icon.type),p.setAttribute("data-icon",n.icon.type)),r.classList.add("invisible"),r.classList.remove("hidden"),r.removeAttribute("hidden"),r.classList.remove("out"),r.classList.add("in"),h=n,f=t,v=!0,e.events.fire(Wt._overlayOpened,t),e.element.classList.add("player-overlayVisible"),window.requestAnimationFrame((function(){r.classList.remove("invisible"),!n.nofocus&&e.element.contains(l)&&function(e){if(e){const t=r.querySelector(e);t&&t.focus()}}(n._firstFocusElement),window.requestAnimationFrame((function(){d.classList.add("in"),c.classList.add("in")}))}))}function S(){d.classList.remove("in"),d.classList.add("out")}function k(t){if("true"!==r.getAttribute("data-modal")&&v){r.removeAttribute("data-background-close"),c.classList.remove("in"),c.classList.add("out"),S(),r.classList.remove("in"),r.classList.add("out"),clearTimeout(a),a=setTimeout(P,200),(null==t?void 0:t.preventDefault)&&t.preventDefault();var n=r.querySelector(".js-back");n&&n.classList.add("cloaked"),g.destroy(),e.events.fire(Wt._overlayClosed,f),e.element.classList.remove("player-overlayVisible"),v=!1,f=null,h=null,window.requestAnimationFrame((function(){l&&(_t(l),l=null)}))}}function P(){v||(r.setAttribute("hidden",""),r.removeAttribute("data-name"),r.removeAttribute("data-icon"),r.classList.add("hidden"),r.classList.remove("out"),r.classList.remove("embed-active"),r.classList.remove("modal"),r.classList.remove("embed-only"),c.classList.remove("out"),c.classList.remove("in"),u.removeAttribute("data-icon"),u.classList.add("hidden"),u.classList.remove("animate"),p.removeAttribute("data-icon"),p.innerHTML="",_.classList.add("hidden"),d.classList.remove("out"),d.innerHTML="",e.events.fire(Wt._overlayCleared))}function O(){r.classList.remove("modal"),r.setAttribute("data-modal","false")}function R(e){if("yes"===e.form.getAttribute("data-bubble")){e.form.setAttribute("data-bubble","no");var t=r.querySelector(".vp-validation-bubble");t.querySelector(".vp-validation-bubble-message").innerHTML=e.validationMessage||"There is an error with this input.";var n=vt(e),i=vt(e.form);t.style.left=n.left-i.left+"px",t.style.top=n.height+1+"px",t.classList.remove("hidden"),e.focus(),window.requestAnimationFrame((function(){t.classList.add("vp-validation-bubble-animate")})),N()}}function N(e){var t=r.querySelector(".vp-validation-bubble");if(t){if(e)return clearTimeout(s),void t.classList.remove("vp-validation-bubble-animate");clearTimeout(s),s=setTimeout((function(){t.classList.remove("vp-validation-bubble-animate")}),5e3)}}function D(e){var t=r.querySelector("input[type=password]");return t.form.classList.contains("submitted")?(t.setAttribute("aria-invalid","false"),t.setCustomValidity(""),t.checkValidity&&!t.checkValidity()?(t.setAttribute("aria-invalid","true"),t.validity.valueMissing&&t.setCustomValidity("Please enter the password."),e||R(t),!1):(N(!0),!0)):null}function M(){p.classList.add("open")}function x(){p.classList.add("pulled-back")}function B(t,n={}){t.icon={type:"lock",html:Xa.render("icon_lock")},t._firstFocusElement=".js-login",t.modal=!0,t.logo=!0;const{loginText:i,buttonTarget:o}=((e=Mo.NOT_LOGGED_IN)=>{const t={loginText:to()?{title:"Sign in to Vimeo to watch this video",subtitle:"You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",buttonText:"Sign in"}:{title:"Sign in to Vimeo",subtitle:"This video is private. Sign in to watch.",buttonText:"Sign in"}};switch(e){case Mo.LOGGED_IN_STORAGE_ACCESS_REQUIRED:t.loginText={title:"Allow cookies",subtitle:"Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",buttonText:"Continue"};break;case Mo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:t.loginText={title:"Continue to sign in",subtitle:"You may now sign in to watch this video.",buttonText:"Continue"};break;case Mo.ALL_ACCESS_ATTEMPTS_FAILED:t.loginText={title:"Video unavailable",subtitle:"Try watching on vimeo.com.",buttonText:"Watch on Vimeo"},t.buttonTarget=ln.ON_SITE}return t})(n.loginState);return t.template=Xa.render("private_locked",{action:`
                https: //${e.config.vimeo_url}/log_in`,strings:i}),C=null!=o?o:C,t}function V(){const t=e.config.embed.email_capture_form||e.config.embed.email||{};if(e.backbone){const n=t.timecode||0;E=e.backbone.currentTime>n}("before-video"===t.position||"before"===t.position)&&!E&&U()}function U(){i.get("ui.overlay.isEmailCaptureVisible")?e.events.fire(Nt._showOverlay,"email-capture"):y=!0}return e.events.on(Nt._hideOverlay,(function(e={}){e.name&&f!==e.name||(e.unmakeModal&&O(),k())})),e.events.on(Nt._showOverlay,(function(t,n={}){var i=function(){var i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};switch(t){case"help":return f=t,void(v=!0);case"share":return A(t,g.getShareData(i,n)),void g.setup();case"private-locked":return void A(t,B(i));case"password":return void A(t,function(t){return t.icon={type:"lock",html:Xa.render("icon_lock")},t.template=Xa.render("password",{action:`https://${e.config.player_url}/video/${e.config.video.id}/check-password?referrer=${e.config.request.referrer}`,strings:{title:"Password Required",subtitle:"If you’ve got it, enter it below.",password:"Password",watch:"Watch Video"}}),t._firstFocusElement=".js-password",t.modal=!0,t.logo=!!e.config.embed.settings.logo,t}(i));case"error":return void A(t,function(e,t){return e.template=Xa.render("error",{title:t.title,message:t.message,aria_label:"Error"}),e._firstFocusElement=".js-close",e.modal=!!t.modal,e.logo=!!t.logo,t.icon&&"lock"===t.icon&&(e.icon={type:"lock",html:Xa.render("icon_lock")}),e}(i,n));case"email-capture":return void A(t,b.getData(i,n));case"app-redirect":return void A(t,function(t,{redirectUrl:n,title:i,buttonText:o,ignoreText:r,bottomText:a,newWindow:s}={}){const l=Lt(e.config.video.privacy,["disable","unlisted"]);return t.template=Xa.render("app_redirect",{hideRedirectButton:l,redirectUrl:n,newWindow:s,strings:{title:i,buttonText:o,ignoreText:r,bottomText:a}}),t.modal=!1,t.logo=!1,t.preventBackgroundClose=!0,t}(i,n));case"webinar-confirmation":return void A(t,function(t){var n,i;const o=(null==(n=e.config.video.webinar)?void 0:n.scheduled_start_time)||null,r=o?ti(new Date(o),e.config.request.lang):"",a=null==(i=e.config.video.webinar)?void 0:i.custom_logo;return t.template=Xa.render("webinar_confirmation",{customLogo:a?Hl(a):null,webinarStartTime:r,strings:{thank_you:zl.webinar.login_thank_you,thank_you_subtitle:zl.webinar.login_thank_you_subtitle}}),t.modal=!0,t}(i));case"webinar-blocked":A(t,function(e){return e.template=Xa.render("webinar_ended",{strings:{title:"Live event ended"}}),e.modal=!0,e}(i))}};return v&&!n.nohide?"share"!==f&&"help"!==f||f!==t?(e.events.once(Wt._overlayCleared,i),O(),void k()):void k():T?(e.events.once(Wt._accessGateClosed,i),O(),void k()):void i()})),e.events.on(Nt._updateOverlay,(function(e,t={}){const n={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if("private-locked"===e){const{template:e}=B(n,t);d.innerHTML=e}})),I(r).on("input","input",(function(){this.form.classList.add("interacted")})).on("transitionend",".vp-validation-bubble",(function(e){"opacity"===e.propertyName&&"0"===window.getComputedStyle(this,"").opacity&&this.classList.add("hidden")})),e.events.on([Wt._overlayCloseButtonPressed,m.PLAY],k),e.events.on(Wt._privateUnlocked,(function(){"private-locked"===f&&(O(),k())})),e.events.on(Wt._configChanged,(function(){"share"===f&&(h=g.getShareData({modal:!1,template:null,logo:!1,icon:{type:null,html:null}}),d.innerHTML=h.template,g.setup())})),I(window).on("resize",(function(){if(v){_.style.bottom=L();var e=w();u.style.top=e.top,u.style[o.transformProperty]=e.transform}})),I(r).on("transitionend",".vp-overlay-logo",(function(e){"opacity"===e.propertyName&&this.classList.contains("animate")&&(_.classList.add("hidden"),_.classList.remove("animate"))})),I(r).on("transitionend",".vp-overlay-icon-wrapper",(function(e){e.propertyName.indexOf("transform")>-1&&(""===this.style[o.transformProperty]?(this.classList.remove("centered"),"lock"!==this.getAttribute("data-icon")||p.classList.contains("open")||p.querySelector("canvas")?x():setTimeout(M,100)):"translateY(-10px)"===this.style[o.transformProperty]&&(u.classList.add("centered"),u.style[o.transformProperty]=""))})),I(r).on("transitionend",".vp-overlay-icon",(function(e){e.propertyName.indexOf("transform")>-1&&(this.classList.contains("out")?(O(),k()):this.classList.contains("pulled-back")?(p.classList.add("out"),p.classList.remove("pulled-back")):this.classList.contains("open")&&x())})),i.watch("ui.overlay.isEmailCaptureVisible",(function(t){!t&&v&&"email-capture"===f?(y=v,O(),k()):t&&y&&(y=!1,e.events.fire(Nt._showOverlay,"email-capture"))})),e.events.on(Wt._ready,V),e.events.on(Wt._configChanged,V),e.events.on(m.TIME_UPDATE,(function({currentTime:t=0}){const n=e.config.embed.email_capture_form||e.config.embed.email||{};("during-video"===n.position||"during"===n.position)&&(t<n.timecode&&(E=!1),t>=n.timecode&&!E&&(E=!0,U()))})),e.events.on(Wt._showEmailCaptureForm,(function(){U()})),b.events.on(Wt._emailCaptureEnd,()=>{e.events.fire(Wt._emailCaptureEnd),O(),k()}),g.events.on(Wt._embedViewShown,(function(){e.config.embed.settings.share.embed_only||(r.querySelector(".js-back").classList.remove("cloaked"),r.classList.add("embed-active"))})).on(Wt._shareViewShown,(function(){r.classList.remove("embed-active")})),vl(r,".js-back",(function(){return g.showShareView(),!1})),g.events.on(Wt._shareViewEnd,(function(){r.querySelector(".js-back").classList.add("cloaked")})),o.stereoscopic&&(e.events.on(Wt._showAndroidVRDeepLink,(function(){e.events.fire(Nt._showOverlay,"app-redirect",{redirectUrl:e.doNotTrackEnabled?e.config.video.share_url:pa(e.config.video.id,"player-spatial-redirect"),title:"Headset viewing isn’t currently supported in your mobile browser.",buttonText:"Watch in the Vimeo app",ignoreText:null,bottomText:null,newWindow:!e.config.embed.on_site})})),I(d).on("click",".app-redirect-ignore",(function(){k()})),I(d).on("click","[data-new-window]",(function(e){return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),!1}))),I(d).on("click",".popup",(function(){if(C===ln.POPUP&&e.events.fire(Nt._openPopup,"login-private-locked"),C===ln.ON_SITE){const{video:t,vimeo_url:n}=e.config,i=`https://${n}/${t.id}`;window.open(i,"_blank")}return!1})),I(d).on("click",".password input[type=submit]",(function(){this.form.classList.add("submitted"),this.form.setAttribute("data-bubble","yes"),D(!0)})).on("submit",".password form",(function(){return function(i){if(!D())return!1;var a=i.querySelector("input[type=password]"),s=i.querySelector("input[type=submit]");function l(e){s.classList.remove("loading"),a.setCustomValidity("Uh oh. There was a problem. Please try again."),a.setAttribute("aria-invalid","true"),R(a)}s.classList.add("loading"),function(e,i,o){yt(r);var a=Array.from(e.querySelectorAll("input")).map((function(e){return e.name?encodeURIComponent(e.name)+"="+encodeURIComponent(window.btoa(function(e){return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(e,t)=>String.fromCharCode("0x"+t))}(e.value))):encodeURIComponent(e.value)})).join("&"),s=new XMLHttpRequest;const l=n(e.action,t(window.location.search));s.open(e.method,l,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.withCredentials=!0,s.timeout=3e3,s.onload=function(){var e;try{e=JSON.parse(s.responseText)}catch(Te){}i(e,s)},s.onerror=function(e){o(e)},s.send(a)}(i,(function(t,n){if(!1!==t){if(e.events.fire(Wt._passwordUnlocked,t),"icon-hidden"===window.getComputedStyle(c,":after").content)return O(),void k();_.classList.add("animate"),u.classList.remove("cloaked"),u.classList.add("animate"),window.requestAnimationFrame((function(){u.style[o.transformProperty]="translateY(-10px)"})),O(),S()}else l(n.status)}),l)}(this),!1})).on(["focus","input"],[".password input[type=email]",".password input[type=password]"],(function(){D()})),e.events.on(Wt._error,(function(t,n={modal:!0,final:!0}){if(!1===n.final)return;let i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if(i.modal=n.modal,i.template=Xa.render("error",{title:n.title,message:n.message}),i._firstFocusElement=".js-close",v)return k(),void e.events.once(Wt._overlayCleared,()=>A(t,i));A(t,i)})),e.events.on(Wt._configChanged,(function(){window.requestAnimationFrame((function(){"email-capture"!==f&&"webinar-confirmation"!==f&&(O(),k())}))})),vl(r,".js-close",(function(){e.events.fire(Wt._overlayCloseButtonPressed)})),I(r).on(["click","touchend"],[".vp-overlay-content",".js-share",".vp-overlay-logo"],(function(e){e.stopPropagation()})).on(["click","touchend"],[".vp-overlay-cell","nav"],(function(){return"false"===r.getAttribute("data-background-close")||(e.events.fire(Wt._overlayCloseButtonPressed),!1)})),e.events.on(Nt._showOutro,(function(){r.classList.add("hidden")})),e.events.on(Wt._outroHidden,(function(){r.classList.contains("in")&&r.classList.remove("hidden")})),function(){var t;e.config.view!==Kt.webinarUnlocked||(null==(t=e.config.video.webinar)?void 0:t.status)||(e.events.fire(Nt._showOverlay,"webinar-confirmation"),e.events.once(q.EVENT_STARTED,()=>{e.events.fire(Nt._hideOverlay,{unmakeModal:!0})}))}(),e.events.on(Wt._accessGateOpened,(function(){T=!0})),e.events.on(Wt._accessGateClosed,(function(){T=!1})),e.events.fire(Wt._overlayModuleReady),{}}const tc=["a",".button-link",".vp-overlay-wrapper .footnote.share a:hover",".menu li:hover",".menu li.active",".vp-outro-link:hover",".vp-outro-videosTitle a:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-share-footnote a:hover",".vp-panel-collapsible button.vp-panel-button:hover"],nc=["a:hover",".button-link:hover"],ic=[".vp-overlay-wrapper .close:hover .fill",".vp-overlay-wrapper .back:hover .fill"],oc=[".controls-outro a:hover .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],rc=[".vp-overlay .buttons li",".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',"li.vp-panel-item-on:before",".vp-share-buttons li","button.vp-share-embedCopy",".vp-outro-button","a.vp-outro-vodButton",".vp-email-capture-progress-meter",".vp-chapters-active-indicator"],ac=["li.vp-panel-item-on:before"],sc=[".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',".vp-share-footnote--embed a",".vp-outro-button",".vp-outro-button:hover",".vp-outro-wrapper .vp-outro-link:hover","button.vp-share-embedCopy",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-panel-collapsible button.vp-panel-button:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],lc=['.vp-share-wrapper a[role="button"] .fill',".vp-outro-vodButton .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],cc=["li.vp-panel-item-on:before"],dc=["li.vp-panel-item-on:before"],uc=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],pc=[".vp-share-button .fill",".vp-outro-vodButton .fill"],_c=["li.vp-panel-item-on:before",".vp-email-capture-form-fields-slider .vp-email-capture-form-custom-field.focus",".vp-email-capture-disclaimer-wrapper .vp-webinar-compliance-checkbox-border.showFocus"],vc=['.vp-overlay .vp-overlay-content input[type="submit"]:active','.vp-overlay a[role="button"]:active',".vp-outro-vodWrapper a.vp-outro-vodButton:active",".vp-email-capture-form-button--next:hover",".vp-email-capture-form-button--next:focus",".vp-email-capture-form-button--submit:hover",".vp-email-capture-form-button--submit:focus"],mc=[".vp-email-capture-form-button--next",".vp-email-capture-form-button--submit"],fc=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],hc=[".vp-share-button .fill",".vp-outro-vodButton .fill"];function gc(e,{uuid:t,id:n,isMobileDevice:i}){var o=null;function a(e,o){var r=`.player-${t} `,a=r+e.join(","+r);if(o){var s=`${n} `;a+=`,${s}${e.join(","+s)}`}return i&&(a=a.replace(/:hover/g,":active")),a.replace(/ &/g,"")}return e.events.on(Nt._changeColor,(n,i)=>{let s;const l=rn[i],c=on[i];try{s=new r(n)}catch(u){s=new r(c)}if(i===en){let n=function(e){o?function(){for(;o.cssRules.length>0;)o.deleteRule(0)}():function(){var e=document.createElement("style");e.setAttribute("data-player",t),document.querySelector("head").appendChild(e),o=e.sheet}();var n=e.complement,i=new r(30,30,30,.9),s=new r(0,0,0,.15).overlayOn(e);i.contrast(n).ratio<3&&n.lighten(5,3,i);var l,c=e.lightness<40?e.clone().lighten(15,3,e):e.clone().darken(15,3,e),d=r.white.contrast(e).ratio<4.5?r.black:r.white;ut(a(_c),"border-color:"+s.hex,o),ut(a(tc),"color:"+e.hex,o),ut(a(oc),"fill:"+e.hex,o),ut(a(rc),"background-color:"+e.hex,o),ut(a(ac),"border-color:"+e.hex,o),ut(a(nc),"color:"+n.hex,o),ut(a(ic),"fill:"+n.hex,o),ut(a(vc),"background-color:"+s.hex,o),e.luminance>.95&&(n=e.clone().darken(15,3,e),ut(a(sc),"color:"+n.hex,o),ut(a(lc),"fill:"+n.hex,o),ut(a(cc),"background-color:"+n.hex,o),ut(a(dc),"border-color:"+n.hex,o),c=n.clone().darken(15,3,n)),e.yiq>175&&e.luminance<.95&&(l=c.clone().darken(15,3,c),ut(a(uc),"color:"+c.hex,o),ut(a(pc),"fill:"+c.hex,o));let u=new r(e.hex);return u.alpha=.8,ut(a(mc),"background-color:"+u.rgba,o),ut(a(fc),"color:"+d.hex,o),ut(a(hc),"fill:"+d.hex,o),{main:e.hex,selected:c.hex,sidedockHover:l?c.hex:e.luminance>.95?n.hex:r.white.hex,sidedockSelected:e.luminance>.95?n.hex:e.hex,sidedockSelectedHover:l?l.hex:c.hex}}(s);e.config._colors=n}const d=ri(n)?s.hexWithAlpha:s.hex;e.config.embed[l]=d.replace("#","")}),e.events.fire(Nt._changeColor,e.config.embed.color_one,Qt),e.events.fire(Nt._changeColor,e.config.embed.color_two||e.config.embed.color,en),e.events.fire(Nt._changeColor,e.config.embed.color_three,tn),e.events.fire(Nt._changeColor,e.config.embed.color_four,nn),{}}function bc(e){let t=null;return function(){const n=function({player:e,dependencies:t=xo}){const n={onLoginRequested:function(t){c=t,!i()||a?(d(),u()):(s++,o(d).then(t=>t?(a=!0,r||u(),void e.events.fire(Wt._userLogIn,"private")):void(m(1)?_(Mo.ALL_ACCESS_ATTEMPTS_FAILED):u())).catch(e=>{}))}},{storageAccessRequired:i,requestCookieAccess:o}=t;let r=!1,a=!1,s=0,l=0,c=li;function d(){r=!0,c()}function u(){e.events.once(Wt._loginFailure,p)}function p(){l++;const e=v();m()?_(Mo.ALL_ACCESS_ATTEMPTS_FAILED):_(!e&&r?Mo.LOGGED_IN_STORAGE_ACCESS_REQUIRED:Mo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)}function _(t){e.events.fire(Nt._updateOverlay,"private-locked",{loginState:t})}function v(){return s>=2}function m(e=2){const t=!i()&&r&&l>0,n=l>=e,o=v();return n&&o||t}return n}({player:e});e.events.on(Nt._openPopup,(function(i,o){let r=`https://${e.config.player_url}`,a=`${r}/video/${e.config.video.id}`;switch(i){case"basic":t=gt(`${a}/login/basic`,"login",{width:670,height:545}),e.events.fire(Wt._popupOpened,i);break;case"login-like":t=gt(`${a}/login/like`,"login",{width:670,height:545}),e.events.fire(Wt._popupOpened,i);break;case"login-watch-later":t=gt(`${a}/login/watch-later`,"login",{width:670,height:545}),e.events.fire(Wt._popupOpened,i);break;case"login-private-locked":n.onLoginRequested((function(){t=gt(`${a}/login/private`,"login",{width:670,height:545}),e.events.fire(Wt._popupOpened,i)}));break;case"purchase":let s=`${r}/video/${e.config.video.vod.feature_id||e.config.video.id}/purchase/vod`;(null==o?void 0:o.productId)&&(s+=`/${o.productId}`),s+=`?referrer=${encodeURIComponent(e.config.request.referrer)}`,t=gt(s,"purchase",{width:790,height:670}),e.events.fire(Wt._popupOpened,i)}})),window.closePopup=function(n){if(t){try{t.close(),e.events.fire(Wt._popupClosed,n)}catch(Te){}t=null}}}(),e.config.embed.on_site||(window.confirmPurchase=function(t,n,i){n?e.loadVideo(t):i&&e.events.fire(Wt._playButtonPressed)}),e.config.embed.on_site||(window.confirmLoginAction=function(t,n){e.events.fire(Wt._userLogIn,n)}),{}}const Ec={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",74:"j",75:"k",76:"l"},yc={106:"j",107:"k",108:"l"},Cc=["up","down","left","right"],Tc=["right","l"],Lc=["left","j"],wc=["scrub"],Ac=[xn.TRANSCRIPT_LIST];function Sc(e,t,n){var i,r=!!e.config.embed.on_site,a=n.querySelector(".volume"),s=!1,l=null,c=!1,d=e.config.video.fps/5,u=d,p=0,_=!1,v=f(C,80);function m(n){var i;return!t.get(wr)||!(wc.includes(n)&&(null==(i=e.config.video.live_event)||!i.dvr))&&(t.get(Or)||t.get(Dr))}function h(){return!r&&(e.config.view===Kt.main||e.config.view===Kt.privateUnlocked||e.config.view===Kt.webinarUnlocked)}function g(){s&&i===Fn.HELP&&e.events.fire(Wt._overlayCloseButtonPressed)}function b(e){return"number"!=typeof e.which&&(e.which=e.keyCode),e}function E(e){if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Ec?Ec[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(t){if(e.config.embed.settings.background)return!0;var n=t.target||t.srcElement;return"INPUT"===n.tagName||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable}function C(n,i){var o,r,a;const s=Tc.includes(n);if(!m("scrub"))return;if((null==(o=e.backbone)||null==(r=o.telecine)?void 0:r.ended)&&s)return;if((null==(a=e.config.video.live_event)?void 0:a.dvr)&&s&&e.backbone.atLiveEdge)return;_||(i&&!e.backbone.paused&&e.events.fire(Wt._pauseButtonPressed),e.events.fire(Wt._scrubbingStarted,{seekType:"keyboard",isFrameByFrame:i}),_=!0),function(n){var i=n,o=Math.ceil(d),r=Math.ceil(function(){const n=t.get(wr)?e.backbone.liveEdgeTime-e.backbone.liveTailTime:e.config.video.duration;return Math.max(d,.618*n)}()-d);u=function(e,t,n,i){return e/=100,n*(--e*e*e+1)+t}(i,o,r)}(p),1==++p&&(u=5*e.config.video.fps);const l=i?1:u,c=s?l:-l,v=e.currentTime*e.config.video.fps;!function(n,i){let o,r;t.get(wr)?(o=e.backbone.liveTailTime,r=e.backbone.liveEdgeTime):(o=e.fragmentsHandler.currentFragment.startTime,r=e.fragmentsHandler.currentFragment.endTime);let a=n/e.config.video.fps;a<o?a=o:a>=r?a=r-.001:e.events.fire(Wt._showNudgeNotification,{direction:a-e.currentTime>0?"forward":"backward",time:1!==p||i?null:5}),e.events.fire(Nt._seek,a)}((s?Math.ceil(v):Math.floor(v))+c,i)}function T(e){if("preact-menu"===l)return!1;var t=l.getTabIndexItems(),n=t.indexOf(document.activeElement),i="up"===e?n-1:n+1,o=null;return!(o=i>=t.length?t[0]:i<0?t[t.length-1]:t[i])||(o.focus(),!1)}function L(){if(l)return!0;if(!m("play/pause"))return!0;if(!document.activeElement||document.activeElement===document.body){const t=e.backbone.paused?Wt._playButtonPressed:Wt._pauseButtonPressed;return e.events.fire(t),g(),!1}}function w(){const t=e.backbone.muted,n=e.backbone.volume;return t?(e.events.fire(Nt._changeMuted,!1),0===n&&e.events.fire(Nt._changeVolume,1)):t||0!==n?!t&&n>0&&e.events.fire(Nt._changeMuted,!0):e.events.fire(Nt._changeVolume,1),!1}function A(){return"preact-menu"!==l&&(l?(l.element.contains(document.activeElement)&&l.button.focus(),l.hide(),!1):s?(e.events.fire(Wt._overlayCloseButtonPressed),!1):void 0)}function S(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||T("up"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(g(),e.events.fire(Nt._changeVolume,.05,!1,!0),!1)))}function I(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||T("down"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(g(),e.events.fire(Nt._changeVolume,-.05,!1,!0),!1)))}function k(t,n){const r=Cc.includes(n);if("preact-menu"===l)return!0;if(e.displayContext===e.adHandler)return!0;if(l)return!l.element.contains(document.activeElement)||!r||T("left"===n?"up":"down");if(s&&i!==Fn.HELP)return!0;if(g(),o.spatialPlayback&&e.config.video.spatial&&r)return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n),!1;if(document.activeElement&&document.activeElement===a&&r){var c="left"===n?-.05:.05;return e.events.fire(Nt._changeVolume,c,!1,!0),!1}t.shiftKey||0===p?C(n,t.shiftKey):v(n,t.shiftKey)}return function(){function t(e){s=!0,i=e,e!==Fn.NOT_SUPPORTED&&e!==Fn.EMAIL_CAPTURE&&e!==Es.LEAD_CAPTURE_FORM||(r=!0)}function n(){s=!1,i=null}e.events.on(Wt._overlayOpened,t),e.events.on(Wt._accessGateOpened,t),e.events.on(Wt._overlayClosed,n),e.events.on(Wt._accessGateClosed,n)}(),e.events.on(Wt._menuVisibilityChanged,(function(e,t){l=e?t||e:null})),e.events.on(Wt._transcriptNavActive,(function(e){c=e})),e.events.on(Wt._configChanged,(function(e){e&&(r=!1)})),function(){const{like:t,watch_later:n,share:r}=e.config.embed.settings;var a={c:[Wt._ccButtonPressed,!0],h:[Wt._prefsButtonPressed,!0],T:Wt._transcriptKeyPressed,f:Wt._fullscreenButtonPressed,d:Wt._debugButtonPressed,A:Wt._aiWidgetKeyPressed,k:L,j:k,l:k,m:w,space:L,up:S,down:I,left:k,right:k,esc:A,"?":[Nt._showOverlay,Fn.HELP]};function c(t){if(b(t),function(e){return!(e.ctrlKey||e.metaKey||e.altKey||"keypress"===e.type&&e.charCode in yc||(e.which in Ec?"keydown"!==e.type:"keypress"!==e.type))}(t)&&!y(t)&&h()){var n=E(t);if(n in a){if("function"==typeof a[n]){if(!1===a[n](t,n)){var o;if(t.preventDefault(),Ac.includes(null==(o=t.target)?void 0:o.id))return;t.stopPropagation()}return}if(!1===function(t){if(t=Array.isArray(t)?t:[t],s&&i===Fn.HELP){if(e.events.fire(Wt._overlayCloseButtonPressed),t[0]===Nt._showOverlay&&"help"===t[1])return!1;if(t[0]!==Nt._openVimeo)return setTimeout((function(){e.events.fire.apply(null,t)}),250),!1}return e.events.fire.apply(null,t),!1}(a[n])){var r;if(t.preventDefault(),Ac.includes(null==(r=t.target)?void 0:r.id))return;t.stopPropagation()}}}}e.config.embed.on_site||(a.v=Nt._openVimeo),t&&(a.x=Wt._likeButtonPressed),n&&(a.w=Wt._watchLaterButtonPressed),r&&(a.s=Wt._shareButtonPressed),e.config.embed.keyboard&&(document.addEventListener("keydown",c,!1),document.addEventListener("keypress",c,!1),document.addEventListener("keyup",(function(t){if("preact-menu"!==l&&(b(t),!y(t)&&h())){var n=E(t);o.spatialPlayback&&e.config.video.spatial&&Cc.includes(n)?e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(n):m("scrub")&&(Lc.includes(n)||Tc.includes(n))&&function(t){v.cancel(),u=d,p=0;var n=t.shiftKey;e.events.fire(Wt._scrubbingEnded,n),_=!1}(t)}}),!1))}(),e.events.on(Wt._becameActive,(function(){r=!1})).on(Wt._becameInactive,(function(){r=!0})),e.config.embed.on_site&&document.querySelector(".player")===n&&(r=!1),function(){let e,t=!1;document.body.addEventListener("keyup",e=>{9!==e.which||document.body.classList.contains("showfocus")||document.body.classList.add("showfocus")}),document.body.addEventListener("keydown",n=>{32!==n.which&&13!==n.which||(t=!0,clearTimeout(e),e=setTimeout(()=>{t=!1},200))}),document.body.addEventListener("click",e=>{t||document.body.classList.remove("showfocus")})}(),e.events.on(Nt._destroy,()=>{r=!0}),{pause:function(){r=!0},unpause:function(){r=!1}}}function Ic(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}function kc(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}var Pc=Object.freeze({__proto__:null,formatVodLabel:function(e,t,n,i){var o=i[t];return o?(o=Ic(o=kc(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null},getDisplayPrice:Ic,isAvailableInCountry:function(e,t){return!e||0===e.length||-1!==e.indexOf(t)},translateFromRequest:kc});function Oc(){}let Rc=function(){function e(e,t){this._player=e,this._store=t,this._playbackBlocked=!1,this._disabled=!1,this._setupPolling()}var t=e.prototype;return t.disable=function(){this._disabled=!0},t._blockRegistrant=function(){this._player.backbone.endLive(),this._player.events.fire(Wt._webinarRegistrantBlocked),this._player.events.fire(Nt._showOverlay,"webinar-blocked"),this._playbackBlocked=!0},t._unblockRegistrant=function(){this._player.backbone.reactivate(),this._player.events.fire(Wt._webinarRegistrantUnblocked),this._player.events.fire(Nt._hideOverlay,{unmakeModal:!0}),this._playbackBlocked=!1},t._pollRegistrantStatus=function(){try{const e=this,t=e._player.config.video.webinar.id,n=e._store.get(La),i=`https://${e._player.config.player_url}/video/${e._player.config.video.id}/webinar/${t}/registrant/${n}/status`;return function(e){if(e&&e.then)return e.then(Oc)}(function(t,n){try{var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(g(i,{withCredentials:!0}).json(),(function(t){t.is_blocked&&!e._playbackBlocked?e._blockRegistrant():e._playbackBlocked&&!t.is_blocked&&e._unblockRegistrant()}))}catch(Te){return n(Te)}return o&&o.then?o.then(void 0,n):o}(0,(function(e){lr.captureException(e)})))}catch(Te){return Promise.reject(Te)}},t._shouldPoll=function(){return!!(this._player.config.video.webinar&&this._player.config.video.webinar.id&&"ended"!==this._player.config.video.webinar.status&&this._store.get(La))},t._setupPolling=function(){this._disabled||(this._shouldPoll()&&this._pollRegistrantStatus(),setTimeout(this._setupPolling.bind(this),this._playbackBlocked?6e4:3e4))},e}(),Nc=function(){function e(e,{displayTimeout:t=0,label:n="Alert"}={}){w(this),this._container=e,this._visible=!1,this._message=null,this._alert=null,this._alertLabel=n;const i=Math.round(t/1e3);0!==i&&(this._alertLabel=`${n} Will be dismissed in ${i} seconds`),this._displayTimer=null,this._displayTimeout=t,this._renderTemplate(),this._attachEvents()}var t=e.prototype;return t.show=function(e,t=this._displayTimeout){!0!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.remove("hidden"),this._alert.removeAttribute("hidden"),window.requestAnimationFrame(()=>{this._alert.classList.add("in")}),(this._alert.querySelector("[data-alert-autofocus]")||this._alert).focus(),this._visible=!0,this.fire("show",e),0!==t&&(this._displayTimer=setTimeout(()=>{this.hide("timeout")},t)))},t.hide=function(e){!1!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.add("leaving"),window.requestAnimationFrame(()=>{const e=this;this._setHideAttributes(),I(this._alert).on("transitionend",(function t(n){"opacity"===n.propertyName&&(e._alert.classList.remove("leaving"),e._alert.classList.add("hidden"),e._alert.setAttribute("hidden",""),I(e._alert).off("transitionend",t))}))}),this._visible=!1,this.fire("hide",e))},t._setHideAttributes=function(){this._alert.classList.remove("in")},t._renderTemplate=function(){this._alert||(this._alert=document.createElement("div"),this._alert.classList.add("vp-alert"),this._alert.setAttribute("role","alertdialog"),this._alert.setAttribute("aria-atomic","true"),this._alert.classList.add("hidden"),this._alert.setAttribute("hidden",""),this._container.appendChild(this._alert),this._setHideAttributes()),this._message instanceof HTMLElement?(this._alert.innerHTML="",this._alert.appendChild(this._message)):(this._alert.textContent=this._message,this._alert.innerHTML=this._message);const e=document.createElement("button");e.setAttribute("data-close",""),e.setAttribute("aria-label","Close alert"),e.classList.add("close"),e.innerHTML=Xa.render("icon_close"),this._alert.appendChild(e)},t._attachEvents=function(){I(this._alert).on("click","[data-close]",e=>{this.hide(e)})},T(e,[{key:"visible",get:function(){return this._visible}},{key:"message",get:function(){return this._message},set:function(e){e instanceof HTMLElement&&this._message&&e.textContent===this._message.textContent||e!==this._message&&(this._message=e,this._renderTemplate())}}]),e}(),Dc=function(){function e(e,t,n){this.player=e,this.backbone=t,this.isBufferingTooLong=!1,this.isBufferingTooFrequent=!1,this.autoAlertWasDismissed=!1,this.bufferCount=-1,this.badPlaybackTimer=null,this._setUpAlertUI(n),this._attachEventHandlers()}var t=e.prototype;return t.handleBufferStarted=function(){this.bufferCount+=1,this._startBadPlaybackTimer()},t.handleBufferEnded=function(){clearTimeout(this.badPlaybackTimer),this.badPlaybackTimer=null,this.isBufferingTooLong=!1},t._attachEventHandlers=function(){this.player.events.on(Wt._debugPayloadCopied,()=>{this._showDebugPayloadCopied()}),this.player.events.on(Ot._spatialUnsupported,e=>{this._showSpatialUnsupportedAlert(e)}),this.player.events.on(Ot._spatialFailure,e=>{this._showSpatialFailureAlert(e)}),this.player.events.on(Ot._bufferStarted,this.handleBufferStarted.bind(this)),this.player.events.on(C.BUFFER_ENDED,this.handleBufferEnded.bind(this)),this.player.events.on(Ot._badPlayback,()=>{this.autoAlertWasDismissed||(this.showAlert("stream_studder"),lr.captureBreadcrumb("Alert shown",{message:"stream_studder"},"video"))}),this.player.events.on(Wt._qualityChanged,e=>{"auto"===e&&this.alertUI.hide("qualitymenuauto")})},t._showSpatialUnsupportedAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.'}})},t._showDebugPayloadCopied=function(){this.showAlert("notice",{strings:{text:"Debug Payload Copied"}},5e3)},t._showSpatialFailureAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.'}})},t.showAlert=function(e,t=null,n){this.alertUI&&!this.player.config.embed.settings.background&&(this.alertUI.message=Xa.render(e,t),this.alertUI.show(null,n))},t._setUpAlertUI=function(e){this.alertUI=new Nc(e,{displayTimeout:1e3}),this.alertUI.on("show",e=>{this.player.events.fire(Wt._alertVisibilityChanged,!0,e)}),this.alertUI.on("hide",e=>{const t=e.target,n=t&&"function"==typeof t.getAttribute;if(n)switch(t.getAttribute("data-context")){case"suggestion":this.player.events.fire(Nt._changeQuality,"auto"),e="suggestion";break;default:e="close"}(n||"qualitymenuauto"===e)&&(this.autoAlertWasDismissed=!0),this.player.events.fire(Wt._alertVisibilityChanged,!1,e)})},t._startBadPlaybackTimer=function(){null===this.badPlaybackTimer&&0!==this.bufferCount&&(this.badPlaybackTimer=setTimeout(()=>{this.isBufferingTooLong=!0,this._notifyBadPlayback()},1e4))},t._notifyBadPlayback=function(){"MediaSourceScanner"===this.backbone.currentScannerName&&(this.isBufferingTooLong||this.isBufferingTooFrequent)&&(this.backbone.video.currentFile.restrictedStreamIndexes.length<=0||(this.isBufferingTooLong,this.isBufferingTooFrequent,this.player.events.fire(Ot._badPlayback),this.bufferCount=0,this.badPlaybackTimer=null,this.isBufferingTooFrequent=!1,this.isBufferingTooLong=!1))},e}();function Mc(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function xc(e,t){try{var n=e()}catch(Te){return t(Te)}return n&&n.then?n.then(void 0,t):n}function Bc(){}let Vc=function(){function e(e,t){this._player=e,this._store=t,this._failedRequests=0,this._viewerCount=0,this._setUpEvents()}var t=e.prototype;return t._setUpEvents=function(){this._player.events.on(q.STREAM_ONLINE,()=>{this._getViewerCount()})},t._getViewerCount=function(){try{const e=this;if(!e._store.get(Or)||!e._player.config.video.live_event.show_viewer_count)return;const t=setTimeout(()=>{e._getViewerCount()},3e4);let n=`${e._player.config.video.id}`;"unlisted"===e._player.config.video.privacy&&(n+=`:${e._player.config.video.unlisted_hash}`);let i=`https://${e._player.config.vimeo_api_url}/videos/${n}/stats/live`,o={jwt_token:e._player.config.user.vimeo_bucketed_live_client_token};return Uc(xc((function(){return Mc(e._player.updatePhpTokens(),(function(){return Uc(xc((function(){return Mc(g({url:i,searchParams:o}).json(),(function(t){t.viewers?(e._failedRequests=0,e._viewerCount=t.viewers.current,e._player.events.fire(q.LIVE_STATS_SUCCESS,{viewerCount:e._viewerCount})):e._failedRequests++}))}),(function(){e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(q.LIVE_STATS_FAILURE)})))}))}),(function(n){lr.captureException(n),e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(q.LIVE_STATS_FAILURE)})))}catch(Te){return Promise.reject(Te)}},t._hideViewerCount=function(){return this._failedRequests>3},e}();function Uc(e){if(e&&e.then)return e.then(Bc)}function Fc(e){if(void 0===Fc._sdkScriptPromise){let t;t="PROD"===Wo(e.config)?"https://embedder-sdk.wirewax.com/latest/wirewax-embedder-sdk@beta.umd.js":"https://embedder-sdk.wirewax.tv/latest/wirewax-embedder-sdk@beta.umd.js",Fc._sdkScriptPromise=window.WIREWAX?Promise.resolve():We(t)}return Fc._sdkScriptPromise}let Hc=function(){function e(e){this.embedders={},this.player=e,this.playerContainer=e.element.querySelector(".vp-vimeo-interactive-wrapper"),this.embedderInstanceId=`vp-vimeo-interactive-instance-${Math.random().toString(36).substring(2)}`,this.vimeoInteractiveContainer=(e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList.add("vp-vimeo-interactive-container"),t})(this.embedderInstanceId),this.playerContainer.appendChild(this.vimeoInteractiveContainer),this.playHandlerCalled=!1,this.playHandler=this.handlePlay.bind(this),this.pauseHandler=this.handlePause.bind(this),this.seekedHandler=this.handleSeeked.bind(this),this.endedHandler=this.handleEnded.bind(this),this.init()}var t=e.prototype;return t.init=function(){let e=!1;this.cancelInit=()=>{e=!0},this.initialized=!1,Fc(this.player).then(()=>{var t;e||(this.initialized=!0,this.setupEmbedder(this.player.config.embed.interactive_id,null==(t=this.player.config.embed)?void 0:t.interactive_params,this.player.config.embed.create_interactive))}).catch(e=>{})},t.setupEmbedder=function(e,t,n){try{t=JSON.parse(t)}catch(r){}const i=n.has_create_interactive?{vidDataURL:n.viddata_url}:{vidId:e,interactiveParams:t||null},o=window.WIREWAX(this.embedderInstanceId,i);return this.embedder=o,this.embedder.ready().then(()=>{if(null===this.embedder)return void o.destroy();this.embedderReady=!0,this.registerVimeoInteractive();const e=this.embedder.getInteractiveData("hotspots");this.player.events.fire(Wt._interactiveReady,{hotspots:e})}).catch(e=>{})},t.registerVimeoInteractive=function(){this.setVimeoInteractiveCurrentTime=()=>{this.embedder.setCurrentTime(this.player.backbone.currentTime),this.animationId=window.requestAnimationFrame(this.setVimeoInteractiveCurrentTime)},this.player.events.on(m.PLAY,this.playHandler),this.player.events.on(m.PAUSE,this.pauseHandler),this.player.events.on(m.SEEKED,this.seekedHandler),this.player.events.on(m.ENDED,this.endedHandler),this.player.events.once(m.TIME_UPDATE,()=>{this.playHandlerCalled||this.playHandler()}),this.player.config.embed.autoplay&&(this.startTimeUpdate(),this.embedder.play()),this.addVimeoInteractiveEventListeners(),this.embedders[this.player.backbone.element.id]=this.embedder},t.addVimeoInteractiveEventListeners=function(){this.embedder.on("play",()=>{this.player.backbone.play()}),this.embedder.on("pause",()=>{this.player.backbone.pause()}),this.embedder.on("seeked",({seekTo:e,seekType:t})=>{this.player.events.fire(Wt._interactiveSeekCall,{type:t}),this.player.backbone.currentTime=e}),this.embedder.on("hotspotClick",this.handleHotspotClick.bind(this)),this.embedder.on("overlayPanelClick",this.handleOverlayPanelClick.bind(this)),this.embedder.on("toggleOverlay",this.handleToggleOverlay.bind(this))},t.destroyVimeoInteractive=function(){this.initialized?this.embedderReady?(this.stopTimeUpdate(),this.embedder.destroy(),this.embedder=null,this.embedders[this.player.backbone.element.id]={},this.playerContainer.removeChild(this.vimeoInteractiveContainer),this.playHandlerCalled=!1,this.player.events.off(m.PLAY,this.playHandler),this.player.events.off(m.PAUSE,this.pauseHandler),this.player.events.off(m.SEEKED,this.seekedHandler),this.player.events.off(m.ENDED,this.endedHandler),this.embedderReady=!1):this.embedder=null:this.cancelInit()},t.handlePlay=function(){this.startTimeUpdate(),this.embedder.play(),this.playHandlerCalled=!0},t.handlePause=function(){this.stopTimeUpdate(),this.embedder.pause()},t.handleSeeked=function(e){const{currentTime:t}=e;this.embedder.setCurrentTime(t)},t.handleEnded=function(){this.embedder.setEnded(!0),this.embedder.setCurrentTime(this.player.backbone.duration)},t.startTimeUpdate=function(){window.cancelAnimationFrame(this.animationId),this.animationId=window.requestAnimationFrame(this.setVimeoInteractiveCurrentTime)},t.stopTimeUpdate=function(){window.cancelAnimationFrame(this.animationId)},t.handleHotspotClick=function(e){this.player.events.fire(Wt._interactiveHotspotClicked,e)},t.handleOverlayPanelClick=function(e){this.player.events.fire(Wt._interactiveOverlayPanelClicked,e)},t.handleToggleOverlay=function(e){e.overlayOnDisplay?(this.player.events.fire(Wt._overlayOpened,"interactive"),this.vimeoInteractiveContainer.classList.add("vp-interactive-overlay-open")):(this.player.events.fire(Wt._overlayClosed,"interactive"),this.vimeoInteractiveContainer.classList.remove("vp-interactive-overlay-open"))},e}();let qc,Gc,Wc;!function(e){e.PQ="PQ",e.DV5="DV5",e.DV81="DV81",e.DV82="DV82",e.DV84="DV84",e.HDR10="HDR10",e.HDR10_PLUS="HDR10_PLUS",e.HLG="HLG"}(qc||(qc={})),function(e){e.FREE="free",e.BASIC="basic",e.STARTER="starter",e.STANDARD="standard",e.ADVANCED="advanced",e.BUSINESS="business",e.PLUS="plus",e.PLUS_LAPSED="plus_lapsed",e.PRO="pro",e.PRO_LAPSED="pro_lapsed",e.PRO_EXPIRED="pro_expired",e.PRODUCER="producer",e.PRODUCER_LAPSED="producer_lapsed",e.LIVE_PRO="live_pro",e.LIVE_BUSINESS="live_business",e.LIVE_BUSINESS_LAPSED="live_business_lapsed",e.LIVE_PREMIUM="live_premium",e.LIVE_PREMIUM_LAPSED="live_premium_lapsed",e.ENTERPRISE="enterprise",e.ENTERPRISE_LAPSED="enterprise_lapsed",e.CUSTOM="custom",e.GUEST="none"}(Gc||(Gc={})),function(e){e.KOLLECTIVE="kollective",e.HIVE="hive"}(Wc||(Wc={}));const Yc={[Wc.KOLLECTIVE]:"Kollective",[Wc.HIVE]:"Hive"};function $c({config:e,debugCollector:t,backbone:n}){var i,r,a,s,l;const c=e.request.session,d=t.getCurrent(Si.FIELD_VIDEO_DIMS),u=t.getCurrent(Si.FIELD_TOTAL_FRAMES)||0,p=t.getCurrent(Si.FIELD_DROPPED_FRAMES)||0,_=t.getCurrent(Si.FIELD_FILES),v=t.getCurrent(Si.FIELD_STREAMS),m=t.getCurrent(Si.FIELD_SCANNERS),f=t.getCurrent(Si.FIELD_BANDWIDTH),h=m===Pi.HLS_LIVE_SCANNER,g=m===Pi.MEDIA_SOURCE_SCANNER,b=Ye(n.currentTime,n.buffered),E=n.currentTime+b,y=function(e){if(!e)return null;const t=e.length;let n=0,i=[];for(;n<t;n++){const t=e.start(n),o=e.end(n);i.push({i:n,start:t,end:o})}return i}(n.buffered),C=n.bufferTarget,T=n.presentationDelay,L=e.embed.dnt||e.request.flags.dnt,w={isLive:h,isDash:g,embedSize:d,sessionId:c,testGroup:Object.keys(e.request.ab_tests).map(t=>{var n;return`${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`}).join(", "),isDNTEnabled:L,totalFrames:u,droppedFrames:p,bufferTarget:C,presentationDelay:T,ua:null==(i=navigator)?void 0:i.userAgent,clipId:e.video.id,readyState:n.readyState,support:JSON.stringify(o),bufferEnd:Ct(E,3),bufferAhead:Ct(b,3),currentTime:Ct(n.currentTime,3),clientIp:null==(r=e.request)||null==(a=r.client)?void 0:a.ip,playerVersion:Go(e),bufferedRanges:JSON.stringify(y),brainDebug:JSON.stringify(n.brainDebug),codec:v?v.codec:null,hideCloseButton:!!e.embed.settings.background,isCopyDisabled:!!L,vrHeadsetName:t.getCurrent(Si.FIELD_VR_HEADSET),droppedFramesPercent:0!==u?`${(p/u*100).toFixed(2)}%`:0,resolution:v?`${v.width}×${v.height}@${Math.round(v.framerate)} ${Math.round(v.bitrate/1e3).toLocaleString()} Kbps ${v.audioBitrate?` / ${Math.round(v.audioBitrate/1e3).toLocaleString()} Kbps`:""}`:null,payloadId:`${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,bandwidthKbps:f?`${Math.floor(f.value/1e3).toLocaleString()} Kbps`:0,bandwidthMinKbps:`${Math.floor(t.getCurrent(Si.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,bandwidthMaxKbps:`${Math.floor(t.getCurrent(Si.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,separateAudioVideo:!(null==(s=e.request.files)||!s.dash||!e.request.files.dash.separate_av)};(null==v?void 0:v.audioChannels)&&(w.resolution+=v.ambisonicConnected&&v.ambisonicOrder?` ambisonic ${v.ambisonicOrder} (${v.audioChannels}ch)`:` ${v.audioChannels}ch`),_&&(w.delivery=_.mime),e.request.drm&&Object.assign(w,{drmEnabled:!0,drmFastly:!!e.request.drm.fastly});const A=null==(l=e.video.ecdn)?void 0:l.ecdn_provider;if(A){const{ecdnBytesByCdn:e,ecdnBytesPeered:t,ecdnPeers:n}=Co(A),i={p2pSources:n.toString(),p2pOffload:`${Kc(t,e)}%`,ecdnVendor:Yc[A]};Object.assign(w,i)}return h&&Object.assign(w,function(e,t){var n;const i=(null==(n=e.video.live_event)?void 0:n.id)||null;let o="";try{o=`${t.getCurrent(Si.FIELD_LIVE_LATENCY).toFixed(2)}`}catch(Te){}return{liveLatency:o,liveSessionID:i}}(e,t)),g||h?Object.assign(w,{bandwidthSeriesData:jc(t)}):Object.assign(w,{bandwidthSeriesData:{max:1,debugMarkers:[],timeSeries:[]}}),w}function Kc(e,t){return 0===e&&0===t?0:Ct(e/(t+e)*100,1)}function jc(e){const t=e.getSeries(Si.FIELD_BANDWIDTH),n=e.getCurrent(Si.FIELD_MAX_BANDWIDTH);return{debugMarkers:e.getSeries(Si.FIELD_MARKERS),timeSeries:t,max:n}}let zc=function(){function e(e=((e,t)=>e<t)){this._data={},this._sortedKeys=[],this._sort=e}var t=e.prototype;return t._insert=function(e){var t=this._sortedKeys.length;if(0===t)this._sortedKeys.push(e);else{for(var n=0;n<t;n++)if(this._sort(e,this._sortedKeys[n])){this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e);break}n===t&&this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e)}},t._binarySearch=function(e,t,n,i){if(i<n)return-1;let o=parseInt(n+(i-n)/2,10);return e[o]>t?this._binarySearch(e,t,n,o-1):e[o]<t?this._binarySearch(e,t,o+1,i):o},t.delete=function(e){const t=this._binarySearch(this._sortedKeys,e,0,this._sortedKeys.length);if(-1===t)throw new Error("key does not exist");this._sortedKeys.splice(t,1),delete this._data[e]},t.set=function(e,t){return this._data[e]=t,this._insert(e),this},t.get=function(e){return this._data[e]},t.keys=function(){return this._sortedKeys.slice()},t.values=function(){return this.keys().map(e=>this._data[e])},t.forEach=function(e){const t=this._sortedKeys.length;for(let n=0;n<t&&!1!==e(this._data[this._sortedKeys[n]],this._sortedKeys[n],this);n++);},T(e,[{key:"size",get:function(){return this._sortedKeys.length}}]),e}();const Xc={},Zc=e=>{var t,n;const i=new zc;return(null==(t=e.embed)||null==(n=t.cards)?void 0:n.length)&&e.embed.cards.forEach(e=>{const t=e.url?h(h({},e),{},{url:hi(e.url)}):e;i.set(e.timecode,yr(t))}),i},Jc=e=>{const{events:t,set:n}=e,i=function(e){return{cardsMap:Zc(e.config),activeCard:null,hoveredCard:null,displayedCard:null,cardPressed:void 0}}(e),o=e=>{const{hoveredCard:t,activeCard:n}=e,i=null!==t?t:n;return{cards:h(h({},e),{},{displayedCard:i})}},r=e=>{e&&t.fire(Wt._cardDisplayed,e.id,e)},a=e=>e.timecode;return t.on(Wt._configChanged,(e,t)=>{n(e=>{const n=h(h({},e.cards),{},{cardsMap:Zc(t),activeCard:null,hoveredCard:null});return o(n)})}),t.on(Nt._addCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.set(e.timecode,e),r(e);const i=h(h({},t.cards),{},{cardsMap:n,activeCard:e.timecode});return o(i)})}),t.on(Nt._removeCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.delete(e.timecode);const i=h(h({},t.cards),{},{cardsMap:n,activeCard:null,hoveredCard:null});return o(i)})}),t.on(m.TIME_UPDATE,({currentTime:e})=>{n(t=>{const n=((e,t)=>{const{cardsMap:n}=e.cards;let i=n.values().filter(e=>((e,t)=>t>=a(e)&&t<(e=>a(e)+(e.displayTime||6))(e))(e,t)).slice(-1)[0];return(null==i?void 0:i.timecode)||null})(t,e),i=t.cards.cardsMap.get(n);if(n===t.cards.activeCard)return Xc;const s=h(h({},t.cards),{},{activeCard:n});return r(i),o(s)})}),t.on(Wt._ended,()=>{n(e=>{const t=h(h({},e.cards),{},{activeCard:null,hoveredCard:null});return o(t)})}),{cards:i,setCards:(e,i)=>{"cardPressed"!==e?((e,t)=>{n(n=>{const i=h(h({},n.cards),{},{[e]:t});return o(i)})})(e,i):t.fire(Wt._cardPressed,i)}}};function Qc(e){var t,n,i,r;const{config:a}=e,{title:s}=a.video,{title:c,portrait:d}=a.embed.settings,u=0===a.embed.on_site,p=a.embed.settings.spatial_label,_=!(!a.video.spatial||!p),v=a.request.file_codecs||a.video.file_codecs,m=!l(v),f=a.request.hdr_formats||[],g=m&&(null==(t=v.hevc)||null==(n=t.hdr)?void 0:n.length)>0,b=f.includes(qc.HDR10_PLUS),E=f.includes(qc.DV84)||m&&(null==(i=v.hevc)||null==(r=i.dvh1)?void 0:r.length)>0,y=a.video.channel_layout||"stereo",C=a.video.owner[o.devicePixelRatio>1?"img_2x":"img"],T=a.video.owner.name,L=zi("video-portrait",a),w=zi("video-byline",a);let A=zi("video-title",a);const S=function(e){let t={displayByline:!1,displayBadge:!1};if(e.embed.settings.byline){const{type:n,url:i}=e.embed.settings.byline_badge||{};Object.assign(t,{displayByline:!0,displayBadge:!e.video.live_event,bylineBadgeType:n,bylineBadgeUrl:i})}return t}(a);return e.segmentedPlaybackEnabled&&(A=Ji(A,e.startTime,e.endTime)),h({ownerLinkUrl:L,titleLinkUrl:A,bylineLinkUrl:w,displayTitle:!!c,displayPortrait:!!d,ownerName:T,targetBlank:u,portraitImg:C,title:s,is360:_,hasHDR:g,hasHDR10Plus:b,hasDolbyVision:E,channelLayout:y},S)}const ed=e=>`opacity ${e}ms ease-out`,td=({children:e,visible:t,duration:n=250,styleOverrides:i={},onFaded:o,delay:r=0})=>{const a=gp(e=>e.embed.background||!e.embed.controls),s=ed(n),l={enter:{opacity:0},enterActive:{opacity:1,transition:s,transitionDelay:`${r}ms`},enterDone:{opacity:1},exit:{opacity:1},exitActive:{opacity:0,transition:s,transitionDelay:`${r}ms`},exitDone:a?{display:"none"}:{overflow:"hidden",opacity:0,pointerEvents:"none"}};return Object.keys(i).forEach(e=>{e in l&&Object.assign(l[e],i[e])}),Te(Ne,{in:t,duration:n,styles:l,alwaysMounted:!0,onExited:()=>{o&&o()},children:e})};let nd,id;function od(e){var t;const{request:n,video:i}=e.config,o=zi("vimeo-logo",e.config);return{overrideBehavior:!1,trailerButtonText:null==(t=i.vod)?void 0:t.button_text,vimeoLogoUrl:o,thumbnailPreview:n.thumb_preview}}!function(e){e.EMPTY="empty",e.UNMUTE="unmute",e.WATCH_FULL_VIDEO="watchFullVideo"}(id||(id={}));const rd=[id.WATCH_FULL_VIDEO,id.UNMUTE];function ad(e){const{config:t}=e,{autoplay:n,settings:i}=t.embed;return{purpose:e.segmentedPlaybackEnabled&&n&&i.watch_full_video?id.WATCH_FULL_VIDEO:id.EMPTY}}function sd({displayList:e,playback:t,embed:n}){const{outro:i,controlBar:o}=e,{isSegmentedPlaybackEnabled:r,paused:a,scrubbing:s}=t;return!!r&&!i&&o&&!(a&&!s)&&n.watchFullVideo}const ld=e=>!e.title&&!e.portrait&&!e.byline,cd=e=>{const{config:t,element:n}=e,{embed:i}=t,o=n.classList.contains("player-tiny"),r=ad(e),a=(null==r?void 0:r.purpose)===id.WATCH_FULL_VIDEO;return!(o||ws(n)||Wn(n)||t.view&&!hn(t.view)||null!=i&&i.autoplay||ld(null==i?void 0:i.settings)||!Kn(i)||a)},dd=e=>{var t;const{view:n,video:i,embed:r,request:a}=e.config,{vod:s}=i,l=n!==Kt.main&&n!==Kt.privateUnlocked&&n!==Kt.webinarUnlocked,c=!!r.settings.instant_sidedock,d=(null==(t=e.store)?void 0:t.get("ui.player.mode"))===Li.TINY,u=s&&"purchase_options"in s&&!!s.purchase_options.length,p=s&&fn(s.countries,a.country);return!(Wn(e.element)||ws(e.element)||d)&&!!Kn(r)&&!e.segmentedPlaybackEnabled&&(o.touch||l||c||u&&p)},ud=e=>{var t;const{view:n,embed:i,request:o}=e.config;return!(ws(e.element)||Wn(e.element)||n&&!hn(n)||i.autoplay&&(null==(t=o.flags)?void 0:t.autohide_controls)||!Kn(i))};function pd({element:e}){return{purpose:Yn(e)}}const _d=({element:e,config:t})=>{if(e.classList.contains("player-mini")||e.classList.contains("player-tiny"))return!1;const{embed:n}=t;return!(!n.settings.badge||n.autoplay&&16!==n.settings.badge.id)};let vd,md,fd,hd;!function(e){e.IDLE="idle",e.LOADED="loaded",e.ERROR="error",e.LOADING="loading"}(vd||(vd={})),function(e){e.MAIN="main",e.LANGUAGE="language"}(md||(md={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(fd||(fd={})),function(e){e.PREV="prev",e.NEXT="down",e.FIRST="first",e.LAST="last"}(hd||(hd={}));const gd="en",bd=e=>e.replace(/<\/?[\w\s]*>|<.+[\W]>/g,""),Ed={language:"en",id:"",label:"Transcript",rtl:!1},yd=(e,t)=>{const{lang:n,cookie:i}=e.request,{captions:o,transcript:r}=i,[a]=(r||"").split("."),[s]=(o||"").split(".");return r&&t.find(e=>e.language.includes(a))||s&&t.find(e=>e.language.includes(s))||n&&t.find(e=>n.includes(e.language))||t.find(e=>e.language.includes("en"))||t[0]||Ed},Cd=(e,t)=>e.findIndex(e=>e.startTime<=t&&e.endTime>t),Td=(e,t)=>!!e.find(e=>e.index===t),Ld=e=>e?e.endTime-e.startTime:0;function wd(e,t,n,i){return(e=>e.map((e,t,n)=>{const i=n[t+1];return i&&i.startTime<e.endTime?h(h({},e),{},{endTime:i.startTime}):e}))(((e,t=20,n=20,i=10)=>{if(0===e.length)return[];let o,r,a,s,l;return c(e[0]),e.reduce((function(a,s,l,u){var p;const{text:_,endTime:v}=s,m=function(e,t){return e+1===t.length}(l,u);if(r+=`${_} `,m)return d(v,a);const f=_.split(" "),h=function(e){return function(e){return[".","?","!"].some(t=>e.trim().endsWith(t))}(e[e.length-1])}(f);o+=f.length;const g=o>=n,b=o>=t&&h,E=function(e,t,n){return t-e>n}(s.endTime,null==(p=u[l+1])?void 0:p.startTime,i);return(g||b||E)&&(a=d(v,a),c(e[l+1])),a}),[]).map((e,t)=>h(h({},e),{},{originalIndex:t}));function c(e){e&&(o=0,r="",a=e.startTime,s=e.originalIndex,l=e.startTimeDisplay)}function d(e,t){return t.concat({originalIndex:s,text:r.trim(),startTime:a,startTimeDisplay:l,endTime:e})}})(((e,t,n,i)=>{let o;return o=t?e.reduce((e,n)=>(n.startTime>=t.startTime&&n.endTime<=t.endTime&&e.push(h(h({},n),{},{startTimeDisplay:ei(Ln(n.startTime,t))})),e),[]):(e=>e.map(e=>h(h({},e),{},{startTimeDisplay:ei(e.startTime)})))(n||i?e.filter(e=>{const t=!n||e.startTime>=n,o=!i||e.startTime<=i;return t&&o}):e),o})((e=>e.map((e,t)=>({startTime:e.startTime,endTime:e.endTime,startTimeDisplay:"",text:bd(e.text),originalIndex:t})))(e),!o.isGoogleBot&&t,n,i)))}function Ad(e){var t;return(null==(t=e[0])?void 0:t.startTime)||0}function Sd(e){var t;return(null==(t=e[e.length-1])?void 0:t.endTime)||0}const Id=(e,t)=>{let n={index:0,diff:1/0};for(let i=0;i<t.length;i++){if(t[i].startTime<=e&&t[i].endTime>=e)return i;const o=Math.abs(t[i].startTime-e),r=Math.abs(t[i].endTime-e),a=Math.min(o,r);a<n.diff&&(n={index:i,diff:a})}return n.index},kd=e=>o.isGoogleBot||(null==e?void 0:e.config.embed.tq),Pd=[Fn.EMPTY,Fn.HELP,Fn.SHARE,Fn.INTERACTIVE],Od=({element:e,config:t})=>{const{embed:n}=t;return!!n.settings.playbar&&!!Kn(n)&&!e.classList.contains("player-tiny")},Rd=e=>{const t=kd(e);return o.isGoogleBot&&t};function Nd(e){e(e=>({displayList:h(h({},e.displayList),{},{aiWidget:!1})}))}function Dd({element:e}){return{purpose:Ls(e)}}const Md=e=>{const{set:t,get:n}=e,i=function(e){const t=dd(e),n=cd(e),i=(e=>pd(e).purpose!==Fn.EMPTY)(e),o=(({store:e,config:t,events:n,set:i})=>{var o,r;return n.on(Wt._configChanged,(e,t)=>{i(e=>{var n,i;return{displayList:h(h({},e.displayList),{},{cards:!!(null==(n=t.embed)||null==(i=n.cards)?void 0:i.length)&&!e.appearance.isMenuBlockingUI})}})}),!!(null==(o=t.embed)||null==(r=o.cards)?void 0:r.length)&&!e.get("ui.controlbar.isMenuFullWidth")})(e),r=_d(e),a=ud(e),s=Od(e),l=Rd(e),c=kd(e),d=function(e){const{purpose:t}=ad(e);return t!==id.EMPTY}(e),u=(e=>Dd(e).purpose!==Es.EMPTY)(e),p=i||u;return(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:h(h({},e.displayList),{},{outro:t})}))};t.on(Wt._outroDisplayed,()=>n(!0)),t.on([Wt._outroHidden,m.PLAY,m.SEEKED,Wt._scrubbingStarted,Nt._reset],()=>n(!1))})(e),(({store:e,config:t,set:n})=>{e.watch("ui.controlbar.isMenuFullWidth",e=>{n(n=>{var i,o;return{displayList:h(h({},n.displayList),{},{cards:!!(null==(i=t.embed)||null==(o=i.cards)?void 0:o.length)&&!e})}})})})(e),(({set:e,events:t,store:n})=>{n.watch("ui.player.mode",t=>{t===Li.TINY&&e(e=>({displayList:h(h({},e.displayList),{},{debugPanel:!1})}))}),t.on(Wt._debugButtonPressed,()=>{e(e=>n.get("ui.player.mode")===Li.TINY?Xc:{displayList:h(h({},e.displayList),{},{debugPanel:!e.displayList.debugPanel})})})})(e),(({set:e,get:t,store:n,subscribe:i,events:o})=>{function r(n={}){t().displayList.sideDock&&e(e=>{const{playback:t,displayList:i,appearance:r,embed:a,cards:s}=e,{fullPlayerElement:l,alert:c,menu:u,toast:p}=i,{playInitiated:_,targetTimeReached:v}=t,{forceExitedFullscreen:m}=r,f=mn(r,n,"mousedOverSidedock"),g=l||c||u&&r.isMenuBlockingUI||!!s.displayedCard||p&&d();return m?Xc:_&&v||g||a.autoHideControls?f?Xc:!r.externalDisplay&&!r.pictureInPictureActive||g?(o.fire(Wt._sidedockVisibilityChanged,!1),{appearance:h(h({},e.appearance),{},{mousedOverSidedock:f}),displayList:h(h({},e.displayList),{},{sideDock:!1})}):Xc:Xc})}function a(i={}){t().displayList.sideDock||e(e=>{const{displayList:t,appearance:r,embed:a,cards:s,playback:l}=e,{menu:c,fullPlayerElement:u,alert:p,toast:_}=t,v=u||p||c&&r.isMenuBlockingUI||!!s.displayedCard||_&&d();return Kn(a)?v||n.get("ui.player.mode")===Li.TINY||l.isSegmentedPlaybackEnabled?Xc:(o.fire(Wt._sidedockVisibilityChanged,!0),{appearance:h(h({},e.appearance),{},{shouldRestoreSidedock:!1,mousedOverSidedock:mn(e.appearance,i,"mousedOverSidedock")}),displayList:h(h({},e.displayList),{},{sideDock:!0})}):Xc})}function s(){return r({mousedOverSidedock:!1})}function l(e,t){e&&t&&s()}function c(e,t){!e&&t&&a()}function d(){return[Ms.XXS,Ms.XS].includes(t().appearance.playerBreakpoint)}o.on([Wt._mousedOut,Wt._mouseTimeout,Wt._nudgeAttempted],r),o.on([Wt._mousedOver,Wt._airPlayActivated,m.ENTER_PICTURE_IN_PICTURE],a),o.on(Wt._configChanged,(function(t,n){const i=dd({config:n});e(e=>({displayList:h(h({},e.displayList),{},{sideDock:i})}))})),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>!e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.alert},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?l(e,t().appearance.isMenuBlockingUI):c(e,t().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?l(t().displayList.menu,e):c(t().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>e?s():a()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},n=>{n?e(e=>({displayList:h(h({},e.displayList),{},{sideDock:!1})})):t().displayList.sideDock||a()}),i(e=>{var t;return null==e||null==(t=e.cards)?void 0:t.displayedCard},e=>e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e&&d()&&s()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.isSegmentedPlaybackEnabled},e=>{e?s():a()}),n.watch("ui.player.mode",n=>{n===Li.TINY&&t().displayList.sideDock?e(e=>({displayList:h(h({},e.displayList),{},{sideDock:!1}),appearance:h(h({},e.appearance),{},{shouldRestoreSidedock:!0})})):t().appearance.shouldRestoreSidedock&&a()})})(e),(e=>{const{set:t,get:n,subscribe:i,events:o,config:r,element:a}=e;function s(){t(e=>{const{appearance:t,playback:n,embed:i}=e,{externalDisplay:o}=t,{scrubbing:a,paused:s}=n,l=u(e),{embed:c}=r;return Kn(i)?t.playerSizeMode===Li.TINY||ld(c.settings)||l?Xc:o?{displayList:h(h({},e.displayList),{},{title:!0})}:!s||a?Xc:{displayList:h(h({},e.displayList),{},{title:!0})}:Xc})}function l(){t(e=>{const{appearance:t,playback:n}=e,{externalDisplay:i}=t,{playInitiated:o}=n,r=u(e);return t.playerSizeMode===Li.TINY||r?{displayList:h(h({},e.displayList),{},{title:!1})}:i||!o?Xc:{displayList:h(h({},e.displayList),{},{title:!1})}})}function c(e,t){e&&t&&l()}function d(e,t){!e&&t&&s()}function u(e){const{fullPlayerElement:t,outro:n,menu:i,toast:o,topCenterActionItem:r}=e.displayList,{isMenuBlockingUI:a}=e.appearance;return t||n||i&&a||o||r}i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?c(e,n().appearance.isMenuBlockingUI):d(e,n().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?c(n().displayList.menu,e):d(n().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},e=>{[Fn.NOT_SUPPORTED,Fn.HELP,Fn.EMPTY].includes(e)||l()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Li.TINY?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e?l():s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.topCenterActionItem},e=>e?l():s()),o.on(Wt._ended,l).on(Nt._reset,s).on(Wt._configChanged,(e,n)=>{t(e=>({displayList:h(h({},e.displayList),{},{title:cd({config:n,element:a})})}))})})(e),(({set:e,subscribe:t})=>{t(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},t=>(t=>{e(e=>({displayList:h(h({},e.displayList),{},{overlay:t})}))})(t!==Fn.EMPTY))})(e),(({set:e,events:t})=>{t.on(Wt._alertVisibilityChanged,t=>{e(e=>({displayList:h(h({},e.displayList),{},{alert:t})}))})})(e),(({events:e,subscribe:t,set:n,get:i})=>{function o(){n(e=>{const{menu:t}=e.displayList;return t?{displayList:h(h({},e.displayList),{},{menu:!1})}:Xc})}e.on(Nt._reset,o),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},t=>{const n=t?"preact-menu":"";e.fire(Wt._menuVisibilityChanged,n)}),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var t,n,r,a;return e&&((null==(t=i())?void 0:t.appearance.appBreakpoint)===Ms.XS||(null==(n=i())?void 0:n.appearance.appBreakpoint)===Ms.XXS||(null==(r=i())?void 0:r.appearance.appSizeMode)===Li.MINI||(null==(a=i())?void 0:a.appearance.appSizeMode)===Li.TINY)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appBreakpoint},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===Ms.XS||e===Ms.XXS)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appSizeMode},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===Li.MINI||e===Li.TINY)&&o()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:h(h({},e.displayList),{},{ad:t})}));t.on(Wt._pausedForAd,()=>n(!0)),t.on([Wt._resumedAfterAd,Nt._reset],()=>n(!1))})(e),(({set:e,get:t,config:n,events:i,subscribe:o,store:r,element:a})=>{let s=n;const l=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>({displayList:h(h({},e.displayList),{},{badge:!1})}))},c=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>{const{appearance:t}=e;return[Li.MINI,Li.TINY].includes(t.playerSizeMode)?Xc:s.embed.settings.badge?{displayList:h(h({},e.displayList),{},{badge:!0}),appearance:h(h({},e.appearance),{},{shouldRestoreBadge:!1})}:Xc})};function d(t){e(e=>({displayList:h(h({},e.displayList),{},{badge:_d({config:t,element:a})})}))}i.on(Wt._controlBarVisibilityChanged,e=>{var t,n,i;16===(null==(t=s.embed)||null==(n=t.settings)||null==(i=n.badge)?void 0:i.id)&&(e?c({isStockBadgeBehavior:!0}):l({isStockBadgeBehavior:!0}))}),i.on(Wt._ended,l),i.on(Wt._configChanged,(e,t)=>{s=t,d(t)}),i.on(Nt._reset,()=>{d(s)}),r.watch("ui.player.mode",n=>{n!==Li.TINY&&n!==Li.MINI||!t().displayList.badge?t().appearance.shouldRestoreBadge&&c():e(e=>({displayList:h(h({},e.displayList),{},{badge:!1}),appearance:h(h({},e.appearance),{},{shouldRestoreBadge:!0})}))}),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>!e&&l()),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>{(function(e){return[Fn.NOT_SUPPORTED,Fn.HELP,null].includes(e)})(e)||l(),e||t().playback.playInitiated||c()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:h(h({},e.displayList),{},{notification:t})}));t.on([Wt._liked,Wt._unliked,Wt._addedToWatchLater,Wt._removedFromWatchLater],e=>{e||n(!0)}),t.on([Wt._notificationHidden,Nt._reset],()=>n(!1))})(e),(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:h(h({},e.displayList),{},{pipOverlay:t})}))};t.on(m.ENTER_PICTURE_IN_PICTURE,()=>n(!0)),t.on(m.LEAVE_PICTURE_IN_PICTURE,()=>n(!1))})(e),(({set:e,events:t,config:n,subscribe:i,element:o})=>{function r(n={}){e(e=>{const{controlBar:i,embed:o,playback:r,displayList:a,appearance:s}=e,l=mn(s,n,"mousedOverControlBar"),c={appearance:h(h({},e.appearance),{},{mousedOverControlBar:l})};return i.overrideBehavior||s.forceExitedFullscreen?c:r.playInitiated&&r.targetTimeReached||a.fullPlayerElement||o.autoHideControls||a.ad?l?c:!s.externalDisplay&&!s.pictureInPictureActive||a.fullPlayerElement?r.buffering||r.scrubbing?c:(t.fire(Wt._controlBarVisibilityChanged,!1),h(h({},c),{},{displayList:h(h({},e.displayList),{},{controlBar:!1})})):c:c})}function a(){e(e=>{const{displayList:n,controlBar:i,embed:o}=e;return Kn(o)?i.overrideBehavior||n.fullPlayerElement?Xc:(t.fire(Wt._controlBarVisibilityChanged,!0),{displayList:h(h({},e.displayList),{},{controlBar:!0})}):Xc})}function s(){return r({mousedOverControlBar:!1})}function l(t){const n=ud({config:t,element:o});e(e=>({displayList:h(h({},e.displayList),{},{controlBar:n})}))}t.on([Wt._mousedOver,Wt._scrubbingStarted,Nt._changeVolume,Nt._reset],a),t.on(Wt._mousedOut,s),t.on(Wt._mouseTimeout,r),t.on(Wt._configChanged,(function(e,t){l(t)})),t.on([q.STREAM_ONLINE,q.STREAM_OFFLINE,q.EVENT_ENDED],(function(){l(n)})),t.on(Nt._setControlsVisibility,(function(t){e(e=>e.controlBar.overrideBehavior?{displayList:h(h({},e.displayList),{},{controlBar:t})}:Xc)})),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>e&&a()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?s():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>{e?r():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>{e&&a()})})(e),(e=>{const{get:t,set:n,events:i,subscribe:o,config:r}=e;function a(){n(e=>{const{transcript:t}=e.displayList;return t?s(e,!1):Xc})}function s(e,t){return{displayList:h(h({},e.displayList),{},{transcript:t})}}i.on(Wt._configChanged,()=>{n(t=>s(t,kd(e)))}),i.on(Wt._transcriptKeyPressed,(function(){var e,i,o,a,s,l,c,d,u;const p=null==(e=t())||null==(i=e.overlay)?void 0:i.purpose,_=null==(o=t().displayList)?void 0:o.transcript,v=null==(a=t())||null==(s=a.displayList)?void 0:s.outro,m=null==(l=t())||null==(c=l.displayList)?void 0:c.accessGate,f=null==(d=t())||null==(u=d.captions)?void 0:u.textTracks,g=!!_||!v&&Pd.includes(p)&&!!f.length&&!m;t().embed.transcript&&g&&(n(e=>h(h({},e),{},{displayList:h(h({},e.displayList),{},{transcript:!e.displayList.transcript})})),or(Yo.EMBEDDED_TRANSCRIPT_CLICK,r,{name:_?"exit_embed_transcript":"open_embed_transcript",copy:null,location:"keyboard_shortcut",element:"",current_transcript_language:""}))})),i.on(Wt._rightContentAreaDisabled,a),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.stereoscopicEnabled},e=>e&&a()),o(e=>{var t,n;return(null==e||null==(t=e.displayList)?void 0:t.overlay)&&!Pd.includes(null==e||null==(n=e.overlay)?void 0:n.purpose)},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.accessGate},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var n,o;(({events:e},t)=>{e.fire(Nt._updateLiveSubtitleRequests,t)})({events:i},e);const a=null==(n=t())||null==(o=n.captions)?void 0:o.textTrackEls;e&&(({config:e,events:t},n)=>{var i;const o=n.map(e=>({id:e.id,label:e.label,language:e.srclang})),r=(null==(i=yd(e,o))?void 0:i.language)||"";t.fire(Wt._transcriptSessionStarted,{id:Tt(),startTime:Date.now(),defaultLanguage:r})})({config:r,events:i},a)}),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.aiWidget},e=>e&&a())})(e),(e=>{const{set:t,subscribe:n,events:i}=e;function o(){t(e=>({displayList:h(h({},e.displayList),{},{progressBar:!1})}))}function r(){t(e=>{const{appearance:t,displayList:n,embed:i}=e;return i.playbar?n.ad||t.playerSizeMode===Li.TINY?Xc:{displayList:h(h({},e.displayList),{},{progressBar:!0})}:Xc})}n(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Li.TINY?o():r()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?o():r()}),i.on(Wt._configChanged,(n,i)=>{t(t=>({displayList:h(h({},t.displayList),{},{progressBar:Od(h(h({},e),{},{config:i}))})}))})})(e),(e=>{const{subscribe:t,set:n,get:i,events:o}=e;function r(e){o.fire(Wt._rightContentAreaVisibilityChange,e),n(t=>({displayList:h(h({},t.displayList),{},{rightContentArea:e}),appearance:h(h({},t.appearance),{},{rightContentAreaAnimating:!0})})),clearTimeout(a),a=setTimeout((function(){n(e=>({appearance:h(h({},e.appearance),{},{rightContentAreaAnimating:!1})}))}),400)}let a;t(e=>{var t,n;return(null==e||null==(t=e.displayList)?void 0:t.transcript)||(null==e||null==(n=e.displayList)?void 0:n.aiWidget)},e=>{var t,n;const o=null==(t=i())||null==(n=t.displayList)?void 0:n.rightContentArea;e&&!o?r(!0):!e&&o&&r(!1)}),Rd(e)&&o.fire(Wt._rightContentAreaVisibilityChange,!0)})(e),(({set:e,get:t,events:n,subscribe:i,config:o,backbone:r})=>{function a(){e(e=>({displayList:h(h({},e.displayList),{},{captions:!1})}))}function s(){e(e=>{const{appearance:t,embed:n}=e;return n.cc?t.pictureInPictureActive||n.background?Xc:{displayList:h(h({},e.displayList),{},{captions:!0})}:(r.disableTextTrack(),Xc)})}n.on(y,s),n.on(m.ENTER_PICTURE_IN_PICTURE,a),n.on(m.LEAVE_PICTURE_IN_PICTURE,s),n.on(Wt._ended,()=>{o.embed.outro!==Zt.NOTHING&&a()}),n.on(Nt._reset,a),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.scrubbing},e=>{e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.captions)?void 0:t.activeCues},e=>{var n,i;e.length&&(null==(n=t())||null==(i=n.playback)?void 0:i.playInitiated)?s():a()})})(e),(e=>{const{subscribe:t,events:n}=e;t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>n.fire(Wt._toastVisibilityChanged,e))})(e),(e=>{const{subscribe:t,set:n,get:i,events:o}=e;t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>e&&Nd(n)),o.on(Nt._closeRemoteComponent,e=>{e===Bn.AI_WIDGET_ID&&Nd(n)}),o.on(Wt._aiWidgetKeyPressed,()=>{const{toggleDisplayList:e,embed:t}=i();t.aiWidget&&e("aiWidget")})})(e),(({set:e,subscribe:t})=>{t(e=>{var t;return null==e||null==(t=e.accessGate)?void 0:t.purpose},t=>(t=>{e(e=>({displayList:h(h({},e.displayList),{},{accessGate:t})}))})(t!==Es.EMPTY))})(e),(({set:e,get:t,subscribe:n})=>{function i(){e(e=>({displayList:h(h({},e.displayList),{},{fullPlayerElement:t().displayList.accessGate||t().displayList.overlay})}))}n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},()=>i()),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.accessGate},()=>i())})(e),{debugPanel:!1,cards:o,sideDock:t,title:n,controlBar:a,outro:!1,overlay:i,alert:!1,menu:!1,ad:!1,badge:r,notification:!1,nudgeNotification:!1,pipOverlay:!1,transcript:c,progressBar:s,rightContentArea:l,captions:!1,toast:!1,topCenterActionItem:d,aiWidget:!1,accessGate:u,fullPlayerElement:p}}(e),o=(e,n)=>{t(t=>({displayList:h(h({},t.displayList),{},{[e]:n})}))};return{displayList:i,setDisplayList:o,toggleDisplayList:e=>{const t=n().displayList[e];o(e,!t)}}};function xd(e){var t;const{config:i,store:o}=e,{embed:r,video:a}=i,s=o.get("ui.player.width"),l=o.get("ui.player.height"),c=a.width,d=a.height,{videoHeight:u}=Bd(s,l,c,d),p=Wr(e);return{playerBreakpoint:o.get("ui.player.breakpoint"),appBreakpoint:o.get("ui.app.breakpoint"),playerSizeMode:o.get("ui.player.mode"),appSizeMode:o.get("ui.app.mode"),transcriptNavActive:!1,fullscreen:!1,forceExitedFullscreen:!1,pictureInPictureActive:!1,externalDisplay:!1,mousedOverSidedock:!1,mousedOverControlBar:!1,isMenuBlockingUI:o.get("ui.controlbar.isMenuFullWidth"),isMenuVerticalVideoMode:o.get("ui.controlbar.isMenuVerticalVideoMode"),shouldRestoreSidedock:!1,shouldRestoreBadge:!1,isVerticalVideo:o.get("ui.player.isVerticalVideo"),boundingClientRect:vt(e.element),isDisplayContextBackbone:e.displayContext===e.backbone,showAirPlayPicker:!1,shouldMenuItemsWrap:o.get("ui.controlbar.doMenuItemsWrap"),stereoscopicEnabled:!1,videoHeight:u,containerHeight:o.get("ui.container.height"),colorOne:ai(r.color_one)||ai(on[Qt]),colorTwo:ai(r.color_two)||ai(r.color)||ai(on[en]),colorThree:ai(r.color_three)||ai(on[tn]),colorFour:ai(r.color_four)||ai(on[nn]),placeholderThumbnail:n(null==a||null==(t=a.thumbs)?void 0:t.base,{mw:"80",q:"85"}),rightContentAreaAnimating:!1,isStartTimeThumbLoading:p}}function Bd(e,t,n,i){const o=n/i,r=o>e/t;return{videoWidth:r?e:Math.round(t*o),videoHeight:r?Math.round(e/o):t}}const Vd=(e,t)=>{ke(()=>{!function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(t.ready(),(function(){e()}))}))()})},Ud=({isMenuDisplayed:e,defaultPanel:t,setPanel:n})=>{ke(()=>{e||setTimeout(()=>{n(t)},250)},[e])};const Fd=e=>{let{href:t,children:n,element:i="div",className:o="",targetBlank:r=!0}=e,a=Ae(e,["href","children","element","className","targetBlank"]);const s=Re(i,h(h({},a),{},{className:o}),n);return t?Te("a",h(h(h({href:t,className:bn("Link_module_link__5efef3b8",o)},r?{target:"_blank",rel:"noopener"}:{}),a),{},{"aria-describedby":"new-window",children:n})):s},Hd=$e({menuEventFromKeyboard:!1,isAccordionToggling:!1,activeAccordion:"",setMenuEventFromKeyboard:()=>{},setAccordionToggling:()=>{},setActiveAccordion:()=>{}}),qd=({children:e})=>{const[t,n]=Se(!1),[i,o]=Se(!1),[r,a]=Se(""),s={menuEventFromKeyboard:t,isAccordionToggling:i,activeAccordion:r,setMenuEventFromKeyboard:n,setAccordionToggling:o,setActiveAccordion:a};return Te(Hd.Provider,{value:s,children:e})},Gd=({children:t,menuRef:n,panelRef:i,headerRef:o,buttonRef:r,panel:a,isMenuDisplayed:s,setMenuDisplayed:l,toggleKey:c})=>{const{menuEventFromKeyboard:d,setMenuEventFromKeyboard:u}=Ke(Hd),p=gp(e=>e.embed.keyboard),_=gp(e=>e.embed.background),v=gp(e=>e.config.view),m=je((t,n)=>{let i=[];const o=(null==t?void 0:t.children)||[],r=(null==n?void 0:n.children)||[];return[].concat(e(o),e(r)).forEach(e=>{var t;const n=window.getComputedStyle(e);!n.display||"none"===n.display||(e.tabIndex>-1&&i.push(e),(null==(t=e.children)?void 0:t.length)&&(i=i.concat(m(e,[]))))}),i},[]),f=je(()=>{var e,t;((null==o||null==(e=o.current)?void 0:e.contains(document.activeElement))||(null==i||null==(t=i.current)?void 0:t.contains(document.activeElement)))&&(null==r?void 0:r.current)&&(document.body.classList.add("showfocus"),r.current.focus())},[r,o,i]),h=je(e=>{let t=m(o.current,i.current),n=t.indexOf(document.activeElement),r="up"===e?n-1:n+1,a=null;a=r>=t.length?t[0]:r<0?t[t.length-1]:t[r],a&&a.focus()},[m,o,i]),g=je(e=>!(e.ctrlKey||e.metaKey||e.altKey)&&(e.which in En?"keydown"===e.type:"keypress"===e.type),[]),b=je(e=>{if(_)return!0;const t=e.target||e.srcElement;return"INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable},[_]),E=je(()=>hn(v),[v]),y=je(e=>{if(!g(e)||b(e)||!E())return;const t=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("up")},i=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("down")},o=(e=>{if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in En?En[e.which]:String.fromCharCode(e.which).toLowerCase()})(e),r={up:t,down:i,left:t,right:i,esc:()=>{(null==n?void 0:n.current)&&(f(),l(!1))}};c&&(r[c]=()=>{u(!0),l(!s)}),"function"==typeof r[o]&&r[o]()},[s,c,n,h,f,l,u,b,g,E]);return ke(()=>(p&&(document.addEventListener("keydown",y,!1),document.addEventListener("keypress",y,!1)),()=>{document.removeEventListener("keydown",y,!1),document.removeEventListener("keypress",y,!1)}),[p,y]),ke(()=>{d&&s&&(()=>{const e=m(o.current,i.current);e.length>0&&(document.body.classList.add("showfocus"),e[0].focus())})()},[i,o,a,s]),ke(()=>{s||f()},[s]),Te(Pe,{children:t})};const Wd=Oe(({isMenuDisplayed:e,isMenuBlockingUI:t,setMenuDisplayed:n=li,panel:i,buttonRef:o,progressBarAndButtonsRef:r,panelContent:a,headerContent:s,toggleKey:l,className:c,id:d,type:u,resizeDependencies:p,ariaAttributes:_={}},v)=>{const m=Ie(null);v=v||m;const f=Ie(null),g=Ie(null),b=Ie(null),E=Ie(null),[y,C]=Se({height:"auto"}),[T,w]=Se({}),[A,S]=Se(!1),[I,k]=Se(!1),P=gp(e=>e.appearance.isMenuBlockingUI);t=void 0===t?P:t;const O=gp(e=>e.appearance.isMenuVerticalVideoMode),R=gp(e=>e.appearance.boundingClientRect),N=gp(e=>e.appearance.playerBreakpoint),D=gp(e=>e.displayList.controlBar),{isAccordionToggling:M}=Ke(Hd),x=e=>{const t=window.getComputedStyle(e);return parseFloat(t.fontSize)},B=()=>{S(!1),cancelAnimationFrame(null==E?void 0:E.current)},V=()=>{var n;if(!((null==(n=v)?void 0:n.current)&&e))return;if(t)return k(!1),void C(e=>h(h({},e),{},{height:"100%"}));let i="auto";const o=vt(v.current),r=x(v.current),a=o.bottom-v.current.scrollHeight,s=Math.max(R.top,0)-a;if(s>0){let e=v.current.scrollHeight-s-r;i=`${e/r}em`}C(e=>h(h({},e),{},{height:i})),k(s>0)},U=()=>{if(!(null==g?void 0:g.current))return;if(t)return void w({});if(!e)return void w({height:"0"});const n=x(g.current),i=`${(g.current.scrollHeight+16)/n}em`;w({height:i})},F=()=>{V(),A&&(E.current=requestAnimationFrame(F))},H=()=>{B(),U(),V()},q=L(i=>{var r;(null==(r=v)?void 0:r.current)&&(null==o?void 0:o.current)&&e&&(o.current.contains(i.target)||v.current.contains(i.target)||!document.contains(i.target)||t||n(!1))},200),G=L(()=>{t||n(!1)},200);ke(()=>(document.addEventListener("click",q,!1),window.addEventListener("blur",G,!1),()=>{document.removeEventListener("click",q,!1),window.removeEventListener("blur",G,!1)}),[v,o,e]),ke(()=>((()=>{var n;const i=(null==(n=v)?void 0:n.current)&&(null==o?void 0:o.current)&&(null==r?void 0:r.current)&&e,a=O&&N===Ms.XXS&&(null==R?void 0:R.width);if(!i)return;if(t)return void C(e=>h(h({},e),{},{right:""}));if(a){const e=`${R.width-16}px`;return void C(t=>h(h({},t),{},{width:e,right:"0"}))}const s=vt(o.current),l=vt(r.current),c=vt(v.current);let d=-8;const u=s.right-s.width/2+c.width/2+8;u<l.right&&(d=l.right-u);const p=x(v.current);C(e=>h(h({},e),{},{right:`${d/p}em`}))})(),!e||t?H():(U(),S(!0),F()),()=>{B()}),[e,i,null==R?void 0:R.width,t,N,p]),ke(()=>{D||n(!1)},[D]),ke(()=>{(null==f?void 0:f.current)&&(M?t?V():(w(e=>h(h({},e),{},{height:"auto"})),S(!0),F()):t?(S(!1),H()):(U(),F()))},[M]);const W=bn(Nn.VP_MENU,"Menu_module_menu__15826ce0",c,I&&"Menu_module_scroll__15826ce0",t&&"Menu_module_fullWidth__15826ce0",O&&"Menu_module_verticalVideo__15826ce0");return Te(Gd,{menuRef:v,panelRef:g,headerRef:b,buttonRef:o,panel:i,isMenuDisplayed:e,setMenuDisplayed:n,toggleKey:l,children:Te(td,{visible:e,styleOverrides:{exitDone:{display:"none"}},children:Te("div",{id:d,className:W,ref:v,style:y,onTransitionEnd:e=>{e.target===(null==f?void 0:f.current)&&"height"===e.propertyName&&(V(),B())},"data-menu":u||!0,role:"menu","aria-label":_.ariaLabel,hidden:!e||void 0,children:[s&&Te("div",{ref:b,children:s}),Te("div",{ref:f,className:"Menu_module_menuBody__15826ce0",style:T,children:Te("div",{className:"Menu_module_menuPanel__15826ce0",ref:g,children:a})})]})})})});const Yd=({buffer:e=!1})=>Te("div",{className:`Divider_module_divider__700c72a0 ${e?"Divider_module_buffer__700c72a0":""}`});const $d=({onBack:e=null,title:t,isMenuBlockingUI:n,setMenuDisplayed:i=li,hasCloseButton:o=!0,onClose:r=(()=>i(!1)),size:a=Fs.MD})=>{var s;const l=gp(e=>e.appearance.isMenuBlockingUI);n=null!==(s=n)&&void 0!==s?s:l;const c=bn("MenuHeader_module_menuHeader__71ceb64e",n&&"MenuHeader_module_fullWidth__71ceb64e",e&&"MenuHeader_module_hasBack__71ceb64e",!o&&"MenuHeader_module_hideCloseButton__71ceb64e");return Te("div",{className:c,children:[Te("header",{className:"MenuHeader_module_header__71ceb64e",children:[Te("div",{className:"MenuHeader_module_backButtonWrapper__71ceb64e",children:Te(Js,{className:`${Dn.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_backButton__71ceb64e`,onClick:e,"aria-label":"Back",color:Bs.ALTERNATIVE,icon:Te(Ds,{name:Rs.CHEVRON_RIGHT}),iconSize:xs.MD})}),Te(il,{size:a,className:"MenuHeader_module_title__71ceb64e",children:t}),Te("div",{className:"MenuHeader_module_closeButtonWrapper__71ceb64e",children:Te(Js,{className:`${Dn.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_closeButton__71ceb64e`,"aria-label":"Close menu",onClick:r,color:Bs.ALTERNATIVE,icon:Te(Ds,{name:Rs.DISMISS_X}),iconSize:xs.MD})})]}),Te(Yd,{})]})};const Kd=e=>{let{className:t,id:n,active:i,withActive:o=!0,onSelect:r,onMouseEnter:a,onMouseLeave:s,element:l="div",styled:c=!0,children:d,role:u="menuitemradio"}=e,p=Ae(e,["className","id","active","withActive","onSelect","onMouseEnter","onMouseLeave","element","styled","children","role"]);const{onClick:_,onKeyDown:v}=Iu(r),m=bn("MenuOption_module_option__eac51652",o&&"MenuOption_module_withActive__eac51652",c&&"MenuOption_module_styled__eac51652",t),f=h({className:m,role:u,"aria-checked":i,"data-id":n,tabIndex:0,onClick:_,onKeyDown:v,onMouseDown:e=>e.preventDefault(),onMouseEnter:a,onMouseLeave:s},p);return Re(l,f,d)};let jd,zd,Xd;!function(e){e.PREFS="prefs",e.CHAPTERS="chapters",e.CC="cc",e.TRANSCRIPT="transcript"}(jd||(jd={})),function(e){e.EMPTY="empty",e.PREFS="prefs",e.QUALITY="quality",e.SPEED="speed",e.AUDIO="audio",e.CHAPTERS="chapters",e.LANGUAGES="languages",e.CUSTOMIZE="customize",e.FONT="font",e.BACKGROUND="background",e.WINDOW="window",e.PREVIEW="preview",e.TRANSCRIPT_SETTINGS="transcriptSettings",e.TRANSCRIPT_LANGUAGES="transcriptLanguages"}(zd||(zd={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(Xd||(Xd={}));const Zd=({className:e,onSelect:t,label:n,value:i,id:o,isAccordion:r=!1,isOpened:a=!1,size:s=Xd.MEDIUM,role:l="menuitemradio"})=>{let c,d=Fs.MD;return s===Xd.LARGE?(d=Fs.LG,c=Fs.MD):r&&(d=Fs.SM),Te(Kd,{className:bn("MenuOptionButton_module_optionButton__20852ebc",s===Xd.SMALL&&"MenuOptionButton_module_small__20852ebc",e),onSelect:t,id:o,withActive:!1,role:l,children:[Te(il,{size:d,weight:r?Hs.BOLD:Hs.NORMAL,className:"MenuOptionButton_module_label__20852ebc",children:n}),i&&Te(il,{weight:Hs.NORMAL,size:c,className:"MenuOptionButton_module_value__20852ebc",children:i}),Te("div",{className:bn("MenuOptionButton_module_icon__20852ebc",a&&"MenuOptionButton_module_open__20852ebc"),children:Te(Ds,{name:r?Rs.CHEVRON_DOWN:Rs.CHEVRON_RIGHT})})]})};const Jd=Fs.MD,Qd=Fs.SM,eu=({onSelect:e,onMouseEnter:t,onMouseLeave:n,label:i,active:o,id:r,ordered:a=!1,index:s,isAccordion:l=!1,tabIndex:c})=>{const d=bn("MenuOptionListItem_module_listItem__2926ceaf",a&&"MenuOptionListItem_module_ordered__2926ceaf",o&&"MenuOptionListItem_module_active__2926ceaf",l&&"MenuOptionListItem_module_accordion__2926ceaf");return Te(Kd,{element:"li",className:d,onSelect:e,onMouseEnter:t,onMouseLeave:n,active:o,id:r,tabIndex:c,children:[Te("div",a?{className:"MenuOptionListItem_module_number__2926ceaf",children:s}:{className:`MenuOptionListItem_module_check__2926ceaf ${o?"MenuOptionListItem_module_activeCheck__2926ceaf":""}`,children:Te(Ds,{name:Rs.CHECKMARK})}),Te(il,{className:"MenuOptionListItem_module_text__2926ceaf",weight:Hs.NORMAL,size:l?Qd:Jd,children:i}),a&&o&&Te("div",{className:"MenuOptionListItem_module_point__2926ceaf",children:Te(Ds,{name:Rs.POINT})})]})};const tu=({items:e,onSelect:t,onMenuOptionMouseEnter:n,onMenuOptionMouseLeave:i,ordered:o=!1,isAccordion:r=!1,listItemTabIndex:a=0,itemComponent:s})=>{const l=o?"ol":"ul",c={className:"MenuOptionList_module_list__087838b4",role:"group"},d=e.map(e=>{const l={key:e.id,id:e.id,active:e.active,label:e.label,onSelect:t,onMouseEnter:n,onMouseLeave:i,ordered:o,isAccordion:r,tabIndex:a};return s?s(h(h({},l),e)):Te(eu,h({},l))});return Re(l,c,d)};const nu=({label:e,items:t=[],onSelect:n})=>{var i;const o=Ie(null),r=Ie(null),{setAccordionToggling:a,activeAccordion:s,setActiveAccordion:l}=Ke(Hd),[c,d]=Se(!1),[u,p]=Se({}),_=null==(i=t.find(e=>e.active))?void 0:i.label,v=t=>{const n=void 0!==t?t:!c;d(n),a(!0),n&&l(e)},m=e=>{e.target===r.current&&"height"===e.propertyName&&a(!1)},f=e=>{(null==o?void 0:o.current)&&!o.current.contains(e.target)&&o.current!==e.target&&v(!1)};return ke(()=>(document.addEventListener("click",f),document.addEventListener("transitionend",m),()=>{l(""),document.removeEventListener("click",f),document.removeEventListener("transitionend",m)}),[]),ke(()=>{p((()=>{let e={};if(c&&(null==r?void 0:r.current)){const t=window.getComputedStyle(r.current),n=parseFloat(t.fontSize);e={height:`${r.current.scrollHeight/n}em`}}return e})())},[c,r]),ke(()=>{s&&s!==e&&v(!1)},[s]),t.length&&Te("div",{className:"Accordion_module_accordion__6525797b",role:"menu",ref:o,children:[Te(Zd,{label:e,value:_,onSelect:()=>v(),isAccordion:!0,isOpened:c}),Te("div",{className:"Accordion_module_content__6525797b",ref:r,style:u,children:Te(tu,{items:t,onSelect:n,isAccordion:!0,listItemTabIndex:c?0:-1})})]})};const iu=({label:e,className:t=""})=>Te("div",{className:`MenuFieldLabel_module_menuField__7a3a0ef4 ${t}`,children:Te(il,{className:"MenuFieldLabel_module_label__7a3a0ef4",children:e})}),ou=({items:e=[],label:t,onSelect:n})=>{const i=gp(e=>e.appearance.shouldMenuItemsWrap);return Te(Pe,{children:[Te(iu,{label:t}),Te("ul",{className:`ButtonRow_module_buttonRow__2aef5483 ${i?"ButtonRow_module_wrap__2aef5483":""}`,role:"menu","aria-label":t,children:e.map(e=>Te(Kd,{element:"li",className:`ButtonRow_module_filledButton__2aef5483 ${e.active?"ButtonRow_module_active__2aef5483":""}`,active:e.active,id:e.id,onSelect:n,styled:!1,children:Te(il,{className:"ButtonRow_module_label__2aef5483",children:e.label})},e.id))})]})};const ru=({items:e=[],label:t,onSelect:n})=>{const i=gp(e=>e.appearance.shouldMenuItemsWrap);return Te(Pe,{children:[Te(iu,{label:t}),Te("ul",{className:`ColorSwabs_module_colorSwabs__63fe80c1 ${i?"ColorSwabs_module_wrap__63fe80c1":""}`,role:"menu","aria-label":t,children:e.map(e=>Te(Kd,{id:e.id,element:"li",className:`ColorSwabs_module_colorSwab__63fe80c1 ${e.active?"ColorSwabs_module_active__63fe80c1":""}`,active:e.active,"aria-label":e.label,onSelect:n,styled:!1,children:Te("div",{className:"ColorSwabs_module_inner__63fe80c1",style:{backgroundColor:e.id}})},e.id))})]})};let au;!function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(au||(au={}));const su=({children:t,tooltipContent:n,className:i="",containerEl:r,position:a,margin:s,visible:l=null,id:c=null})=>{var d,u,p;const[_,v]=Se(!1),m=()=>v(!0),f=()=>v(!1),g=null!==l,b=l||_,E=lu("onPointerEnter",t,e=>{"mouse"===e.pointerType&&m()}),y=lu("onPointerLeave",t,f),C=lu("onFocus",t,m),T=lu("onBlur",t,f);Nu("Escape",f);let L=null==t?void 0:t.ref;const w=Ie(null);L=L||w;const A=Ie(null),S=bn("Tooltip_module_tooltipContainer__56441453",null==t||null==(d=t.props)?void 0:d.className,g&&l&&"Tooltip_module_forceVisible__56441453"),I=h(h({},null==t?void 0:t.props),{},{className:S,ref:L,onPointerEnter:E,onPointerLeave:y,onFocus:C,onBlur:T,onPointerDown:e=>e.preventDefault(),"aria-labelledby":null!=c?c:null,"data-touch-device":o.touch.toString()}),k=(({tooltipEl:e,wrappedEl:t,visible:n,containerEl:i,position:o=au.TOP,margin:r=0})=>{const[a,s]=Se({top:null,bottom:null,left:o===au.LEFT?"auto":"50%",right:o===au.LEFT?`calc(100% + ${r}px)`:"auto"}),l=gp(e=>e.element);return s(a=>{const s=h(h(h({},a),function(){const i={};if(e&&t&&n){const{left:n,right:a}=l.getBoundingClientRect(),{left:s,right:c,width:d}=t.getBoundingClientRect(),{width:u}=e.getBoundingClientRect();if(o===au.TOP||o===au.BOTTOM){const e=(u-d)/2,t=s-e,o=c+e,l=Math.max(n+r-t,0),p=Math.max(o+r-a,0);Object.assign(i,{left:`calc(50% + ${l-p}px)`})}}return i}()),function(){const t={};if(e&&i&&n){const{bottom:e}=i.getBoundingClientRect(),{top:n}=l.getBoundingClientRect();switch(o){case au.BOTTOM:const i=e-n-r;isNaN(i)||Object.assign(t,{top:`${i}px`})}}return t}());return ze(s,a)?a:s}),a})({tooltipEl:null==A?void 0:A.current,wrappedEl:null==(u=L)?void 0:u.current,containerEl:null==r?void 0:r.current,position:a,margin:s,visible:g&&l||_}),P=bn("Tooltip_module_tooltip__56441453",Nn.VP_TOOLTIP,i,a===au.LEFT&&"Tooltip_module_tooltipLeft__56441453"),O=Te(td,{visible:b,children:Te("span",{id:c,ref:A,style:k,className:P,"aria-hidden":"true",children:n})}),R=Xe(null==t||null==(p=t.props)?void 0:p.children),N=[O].concat(e(R));return Ze(t,I,N)};function lu(e,t,n){return i=>{var o;(null==t||null==(o=t.props)?void 0:o[e])&&t.props[e](i),n(i)}}const cu=e=>Te(Fd,{className:e.classNames,href:e.url,tabIndex:e.url?"0":"-1",style:e.style,children:Te("img",{className:e.imgClassNames,src:e.img,alt:e.imgAlt})});const du=["Shift","Tab"],uu=!!o.iOS&&"SearchInput_module_mobileSafari__300ae4ab",pu=Oe(({onChange:e,onEnter:t,onSearchIterate:n,value:i,numSearchResults:o,ariaControls:r,disabled:a,placeholder:s,searchItemIterator:l},c)=>{var d;const u={defaultPlaceholder:"Search",clearResults:"Clear Search Results",previousResult:"Previous search result",nextResult:"Next search result",noResults:"No results",numberResults:1===o?o+" result":o+" results"},[p,_]=Se(!1),[v,m]=Se(!1),f=Ie(null),g=i.length>0,b=Du("Shift");let E=s;o&&p&&(E=u.numberResults),!o&&i&&p&&(E=u.noResults);const[y,C]=Se(u.nextResult),[T,L]=Se(u.previousResult);s=null!==(d=s)&&void 0!==d?d:u.defaultPlaceholder,ke((function(){return clearTimeout(f.current),f.current=setTimeout(()=>{_(!0)},1e3),()=>clearTimeout(f.current)}),[i]);const w=()=>{(null==c?void 0:c.current)&&(null==c.current.focus||c.current.focus())},A=()=>{e&&e(""),t&&t(""),w()},S=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=l<o-1?l+1:0,o&&C("Result "+(t+1)+" of "+o),n&&n(t)},I=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=l>0?l-1:o-1,o&&L("Result "+(t+1)+" of "+o),n&&n(t)},k=bn("SearchInput_module_inputForm__300ae4ab",g&&"SearchInput_module_active__300ae4ab"),P=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"SearchInput_module_searchButton__300ae4ab",js.focusableButton),O=0!==o&&Number.isInteger(l)?`${l+1}/${o}`:"0/0";return(Te("form",{className:k,role:"search","data-component-type":"SearchInput","data-focused":`${v}`,"data-disabled":`${a}`,onReset:()=>A(),onSubmit:e=>{e.preventDefault(),t&&t(i),b?I():S()},onClick:w,children:[!g&&Te("div",h(h({"data-icon":"search",className:"SearchInput_module_searchIcon__300ae4ab"},pn(w)),{},{children:Te(Ds,{name:Rs.SEARCH,"aria-hidden":"true"})})),Te("input",{"aria-live":"polite",type:"text",ref:c,className:uu,onFocus:()=>m(!0),onBlur:()=>m(!1),onKeyDown:e=>{du.includes(e.key)||e.stopPropagation()},"aria-controls":r,onInput:t=>{t.preventDefault(),e&&e(t.target.value),_(!1)},value:i,placeholder:s,"aria-describedby":"searchResultsStatus",disabled:a}),i&&Te("span",{id:"searchResultsStatus","aria-live":"polite",className:js.visuallyHidden,children:E}),g&&Te(Pe,{children:[Number.isInteger(l)&&Te("div",{"data-purpose":"search-item",className:"SearchInput_module_searchItem__300ae4ab","aria-hidden":"true",children:O}),Te(Js,h(h({"aria-live":"polite"},pn(I)),{},{"data-purpose":"decrement-search","aria-label":T,icon:Te(Ds,{name:Rs.CHEVRON_UP}),size:xs.CUSTOM,className:P,disabled:a||!o,onBlur:()=>{L(u.previousResult)}})),Te(Js,h(h({"aria-live":"polite"},pn(S)),{},{"aria-label":y,"data-purpose":"increment-search",icon:Te(Ds,{name:Rs.CHEVRON_DOWN}),size:xs.CUSTOM,className:P,disabled:a||!o,onBlur:()=>{C(u.nextResult)}})),Te(Js,h(h({},pn(A)),{},{"data-icon":"close","data-purpose":"close","aria-label":u.clearResults,icon:Te(Ds,{name:Rs.CLOSE_CIRCLE,"data-icon":"close"}),size:xs.CUSTOM,type:Us.RESET,className:P,disabled:a}))]})]}))});let _u;!function(e){e.RTL="rtl",e.LTR="ltr"}(_u||(_u={}));const vu={black:"#000",red:"#f00",yellow:"#ff0",green:"#0f0",blue:"#00f",white:"#fff",cyan:"#0ff",magenta:"#f0f"};const mu=({cues:e,language:t,direction:n,className:i,fontSize:o,fontFamily:a,fontOpacity:s,color:l,windowOpacity:c,windowColor:d,bgOpacity:u,bgColor:p,edgeStyle:_,height:v,style:m={}})=>{const f=sa(),g=(e,t)=>{const n=new r(vu[e]||e);return n.alpha=t/100,n.rgba},b=h(h(h(h(h({},{fontSize:`${(e=>Math.max(10,Math.round(.045*v*e)))(o)}px`}),(()=>{const e=((e,t)=>f.fontFamily.items.find(e=>e.id===t))(0,a);return{fontVariant:"small_capitals"===e.id?"small-caps":"initial",fontFamily:e.value}})()),{color:g(l,s)}),(()=>{const e=`0, 0, 0, ${Number(s)/100}`;let t="none";switch(_){case"shadow":t=`2px 2px 2px rgba(${e})`;break;case"outline":t=`1px 1px 0 rgba(${e}), -1px 1px 0 rgba(${e}), 1px -1px 0 rgba(${e}), -1px -1px 0 rgba(${e})`;break;case"raised":t=`rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;break;case"depressed":t=`rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;break;default:t="none"}return{textShadow:t}})()),m),E=h({},{backgroundColor:g(d,c)}),y=h({},{background:g(p,u)}),C=bn(Nn.VP_CAPTIONS,"CaptionsRenderer_module_captions__63d9c011",i),T=(()=>{let t=[];return e.forEach(e=>{const n=e.html.split("<br>");t=t.concat(n)}),t})();return Te("div",{className:C,"aria-live":"assertive",lang:t,dir:n,style:b,children:Te("span",{className:"CaptionsRenderer_module_captionsWindow__63d9c011",style:E,children:T.map(e=>Te("span",{className:`CaptionsRenderer_module_captionsLine__63d9c011 ${Nn.VP_CAPTIONS_LINE}`,style:y,dangerouslySetInnerHTML:{__html:e}},e))})})};const fu=Oe(({children:e,className:t,style:n,role:i="dialog",ariaLabelledby:o},r)=>Te("div",{role:i,"aria-labelledby":o,className:`ToastBase_module_toast__a4511d95 ${t||""}`,ref:r,style:n,children:e}));const hu=()=>Te("div",{className:"ToastDivider_module_divider__63cf057e"});const gu=e=>{let{tooltipLabel:t,icon:n,onClick:i,containerRef:o,fullToast:r,className:a,onMouseEnter:s,onMouseLeave:l}=e,c=Ae(e,["tooltipLabel","icon","onClick","containerRef","fullToast","className","onMouseEnter","onMouseLeave"]);const d=gp(e=>e.appearance.playerBreakpoint),u=["xl","xxl"].includes(d)?16:8,p=bn("ToastButton_module_toastButton__f07084f7",Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,r&&"ToastButton_module_fullToast__f07084f7",a);return t?Te(su,{tooltipContent:t,position:au.BOTTOM,containerEl:o,margin:u,children:Te(Js,h({color:r?Bs.PRIMARY:Bs.ALTERNATIVE,size:xs.CUSTOM,icon:n,iconSize:xs.CUSTOM,onClick:i,onMouseEnter:s,onMouseLeave:l,className:p},c))}):Te(Js,h({color:r?Bs.PRIMARY:Bs.ALTERNATIVE,size:xs.CUSTOM,icon:n,iconSize:xs.CUSTOM,onClick:i,onMouseEnter:s,onMouseLeave:l,className:p},c))},bu={[Ms.XXS]:Fs.MD,[Ms.LG]:Fs.LG,[Ms.XXL]:Fs.XL},Eu=({onClick:e,onMouseEnter:t,onMouseLeave:n,label:i})=>Te(gu,{fullToast:!0,onClick:e,onMouseEnter:t,onMouseLeave:n,children:Te(il,{sizeMap:bu,color:qs.CUSTOM,children:i})});const yu=({transitionTime:e,delay:t=400,ariaLabelledby:n})=>{const i=`width ${e-t}ms linear`,[o,r]=Se({});return ke(()=>{const e=setTimeout(()=>{r({transition:i,width:"100%"})},t);return()=>{clearTimeout(e)}},[r,i,t]),Te("div",{className:"ToastProgress_module_progressWrapper__71004122",role:"progressbar","aria-labelledby":n,children:Te("div",{className:"ToastProgress_module_progress__71004122",style:o})})};const Cu=({id:e,children:t,className:n})=>{const i=bn("ToastMessage_module_label__88d8df97",n);return Te(il,{id:e,weight:Hs.NORMAL,className:i,sizeMap:{[Ms.XXS]:Fs.SM,[Ms.SM]:Fs.MD,[Ms.XL]:Fs.LG,[Ms.XXL]:Fs.XL},children:t})};const Tu=({onClick:e,describedBy:t,selected:n})=>Te(gu,{className:`CloseToastButton_module_close__e44e3d03 ${n?"CloseToastButton_module_selected__e44e3d03":""}`,icon:Te(Ds,{name:Rs.DISMISS_X}),onClick:e,"aria-label":"Close","aria-describedby":t}),Lu=({children:e,targetContent:t,onContentChange:n=li,delay:i=250,styleOverrides:o})=>{const r=Ie(null),[a,s]=Se(t),l=t!==a,c=l&&!a,d=!l&&!!t;return clearTimeout(r.current),c?(s(t),n(t)):l&&(r.current=setTimeout((function(){s(t),n(t)}),i)),Te(td,{visible:d,duration:i,styleOverrides:o,children:null==e?void 0:e(a)})},wu=e=>{const{onPlay:t,onPause:n,onSeek:i,onLoginRequest:o,url:r,visible:a}=e,s=Ae(e,["onPlay","onPause","onSeek","onLoginRequest","url","visible"]),l=gp(e=>e.setPlayback),c=gp(e=>e.setUser),d=gp(e=>e.user.loggedIn),u=gp(e=>e.appearance.appBreakpoint),p=gp(e=>e.appearance.colorOne),_=gp(e=>e.appearance.colorTwo),v=gp(e=>e.appearance.colorThree),m=gp(e=>e.appearance.colorFour),[f,g]=Se(Au(r,b()));function b(){return{loggedIn:d,appBreakpoint:u,visible:a,colorOne:p,colorTwo:_,colorThree:v,colorFour:m}}return ke((function(){g(Au(r,b()))}),[r]),Te(Ks,h({userLoggedIn:d,onPlay:()=>{l("paused",!1),null==t||t()},onPause:()=>{l("paused",!0),null==n||n()},onSeek:e=>{l("currentTime",e),null==i||i(e)},onLoginRequest:()=>{c("loggedIn",!0),null==o||o()},appBreakpoint:u,url:f,visible:a},s))};function Au(e,t){const i=Object.keys(t).filter(e=>void 0!==t[e]),o=be(t,i);return n(e,o)}const Su=e=>{const{withStore:t=!0}=e;return Te(t?wu:Ks,h({},e))},Iu=e=>{const{setMenuEventFromKeyboard:t}=Ke(Hd);return{onClick:n=>{t(!1),n.preventDefault(),n.stopPropagation(),e(n)},onKeyDown:n=>{t(!0),["Enter"," "].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),e(n))}}},ku=()=>{const e=gp(e=>e.playback.paused),t=gp(e=>e.playback.scrubbing),n=gp(e=>e.playback.scrubbingByFrame),i=gp(e=>e.playback.playInitiated),o=gp(e=>e.playback.isChromecastPlaying),r=gp(e=>e.playback.isChromecastConnected),a=gp(e=>e.playback.buffering),s=gp(e=>e.playback.isAdPlaying),l=gp(e=>e.embed.isTrailer),c=gp(e=>e.embed.autoPlay),d=gp(e=>e.displayList.outro),u=gp(e=>e.displayList.ad),p=l&&!i;let _=Oi.PLAY;p?_=Oi.TRAILER:c&&(_=Oi.PAUSE);const[v,m]=Se(_);return r&&m(o?Oi.PAUSE:Oi.PLAY),u&&m(s?Oi.PAUSE:Oi.PLAY),ke(()=>{d?m(Oi.REPLAY):t&&!d&&m(e?Oi.PLAY:Oi.PAUSE)},[d]),ke(()=>{t&&!n||a||p||r||d||u||m(e?Oi.PLAY:Oi.PAUSE)},[e,a,p,r,d,u]),ke(()=>{i&&m(Oi.PAUSE)},[i]),{buttonState:v,setButtonState:m}};let Pu;function Ou(){}!function(e){e.IDLE="idle",e.LOADING="loading",e.LOADED="loaded",e.ERROR="error"}(Pu||(Pu={}));const Ru=e=>{const[t,n]=Se(Pu.IDLE),i=Ie();return{readyState:t,load:je(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){if(null==i||!i.current)return function(e){if(e&&e.then)return e.then(Ou)}(function(t,o){try{var r=function(){let t;return n(Pu.LOADING),function(n,i){var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(ui(e),(function(e){t=e}));return o&&o.then?o.then(i):i()}(0,(function(){i.current=t,n(Pu.LOADED)}))}()}catch(Te){return o()}return r&&r.then?r.then(void 0,o):r}(0,(function(e){n(Pu.ERROR)})))})),[e]),module:(null==i?void 0:i.current)||null}},Nu=(e,t,n)=>{ke(()=>{function i(n){n.key!==e&&n.code!==e||t(n)}function o(t){t.key!==e&&t.code!==e||!n||n(t)}return window.addEventListener("keydown",i),n&&window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",i),n&&window.removeEventListener("keyup",o)}},[t,n,e])},Du=e=>{const[t,n]=Se(!1);return Nu(e,()=>{n(!0)},()=>{n(!1)}),t},Mu=()=>{const e=gp(e=>e.config);return je((t,n,i={})=>{or(t,e,n,i)},[e])};let xu;!function(e){e[e.AUTO=0]="AUTO",e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER"}(xu||(xu={}));const Bu=()=>{const e=gp(e=>e.embed.playButtonPosition),t=gp(e=>e.embed.playbar),n=gp(e=>e.appearance.playerSizeMode),i=gp(e=>e.appearance.isVerticalVideo),{buttonState:o}=ku(),r=n===Li.TINY,a=n===Li.MINI&&i;return o===Oi.REPLAY?xu.BOTTOM:r||a||e===xu.CENTER?xu.CENTER:e===xu.BOTTOM||e!==xu.AUTO||t?xu.BOTTOM:xu.CENTER},Vu=()=>{const e=gp(e=>e.playback.volume),t=gp(e=>e.playback.muted),n=gp(e=>e.setPlayback),i=()=>{n("muted",!1),e<=0&&n("volume",100)},o=()=>{n("muted",!0)};return{mute:o,unmute:i,toggleMuted:()=>{t||e<=0?i():o()}}};function Uu(e){var t,n,i,r,a,s;const{config:l,events:c}=e,{embed:d,request:u,video:p}=l,_=!!d.autoplay,v=!!(d.autoplay&&(null==(t=u.flags)?void 0:t.autohide_controls)),m=!!d.settings.playbar,f=!!d.settings.like,h=!!d.settings.share,g=!!(null==(n=d.settings.share)?void 0:n.embed_only),b=!!d.settings.collections,E=!!d.settings.watch_later,y=!(null==(i=d.settings)||!i.watch_trailer||d.autoplay||!d.on_site),C=!(!d.settings.speed||!e.backbone.supportsPlaybackRate),T=!!d.keyboard,L=!!d.settings.logo,w=!!d.settings.volume,A=!!d.settings.fullscreen,S=!!(null==(r=p.live_event)||null==(a=r.settings)?void 0:a.hide_live_label),I=!!(null==(s=p.live_event)?void 0:s.show_viewer_count),k=!!d.settings.custom_logo,P=function(e){var t;const{config:n}=e;let i={customLogoUrl:null,customLogoImg:null,customLogoSticky:!1,customLogoWidth:null,customLogoHeight:null};if(!(null==(t=n.embed.settings.custom_logo)?void 0:t.img))return i;const r=n.embed.settings.custom_logo;let a=r.img;return o.devicePixelRatio>=2&&(a=a.replace(/(mw|mh)=(\d+)/g,(function(e,t,n){return t+"="+2*parseInt(n,10)}))),i={customLogoUrl:hi(r.url),customLogoImg:a,customLogoSticky:r.sticky,customLogoWidth:r.width,customLogoHeight:r.height},i}(e),O=!!d.settings.background,R=0!==d.settings.controls,N=!!d.transparent,D=!!d.on_site,M=Fu(e),x=!!d.settings.audio_tracks,B=!!d.settings.airplay,V=!!d.settings.chapters,U=!!d.settings.chromecast,F=!!d.settings.cc,H=!!d.settings.quality,q=d.settings.play_button_position,G=!!d.settings.watch_full_video,W=!!d.settings.ask_ai,Y=!!p.spatial&&!!d.settings.spatial_compass,$=p.id,K=p.unlisted_hash,j=l.vimeo_url,z=!!l.embed.settings.badge,X=d.tq||"",Z=!!M;return Z&&c.fire(Wt._rightContentAreaEnabled),{autoPlay:_,autoHideControls:v,playbar:m,like:f,share:h,embedOnlyShare:g,collections:b,watchLater:E,isTrailer:y,speedChangeEnabled:C,keyboard:T,showVimeoLogo:L,volume:w,fullscreen:A,hideLiveLabel:S,showViewerCount:I,customLogo:k,customLogoFields:P,background:O,controls:R,transparent:N,transcript:M,rightContentAreaEnabled:Z,onsite:D,multipleAudioTracks:x,airplay:B,chapters:V,cc:F,chromecast:U,quality:H,playButtonPosition:q,parentUrl:"",watchFullVideo:G,aiWidget:W,compass:Y,videoId:$,videoUnlistedHash:K,vimeoUrl:j,badge:z,transcriptQuery:X}}function Fu(e){const{embed:t,video:n}=e.config,i=n.live_event,o=!i||i.archive.status===no.done||i.dvr;return!!t.settings.transcript&&o}const Hu=[{id:.5,label:"0.5x"},{id:.75,label:"0.75x"}],qu={id:1,label:"Normal"},Gu=[{id:1.25,label:"1.25x"},{id:1.5,label:"1.5x"},{id:2,label:"2x"}],Wu=[qu].concat(Gu),Yu=[].concat(Hu,[qu],Gu),$u=[].concat(Hu,[qu]);function Ku(e){var t,n;const{config:i,backbone:r}=e,a=ju(e),s=!!o.airPlay,l=!r||r.supportsTextTracks,c=i.embed.quality?yn(r.qualities,i.embed.quality):r.qualities,d=zu(r.qualities,i.embed.quality),u=Ju(i);return{playInitiated:!1,targetTimeReached:!1,scrubbing:!1,scrubbingByFrame:!1,paused:!i.embed.autoplay||(null==(t=i.video.live_event)||null==(n=t.archive)?void 0:n.status)===no.done,buffering:!1,loadedTime:0,currentTime:r.currentTime,liveEdgeTime:r.liveEdgeTime,atLiveEdge:r.atLiveEdge,liveTailTime:r.liveTailTime,hasFragments:u,currentFragment:e.fragmentsHandler.currentFragment,duration:i.video.duration,qualities:c,currentQuality:d,playbackRates:a,loadedMetadata:!1,loadedData:!1,pictureInPictureEnabled:null==r?void 0:r.pictureInPictureEnabled,supportsAirPlay:s,supportsTextTracks:l,supportsStereoscopic:Xu(e),supportsChromecast:Qi(e.config),isChromecastConnected:!1,isChromecastPlaying:!1,isChromecastBuffering:!1,isChromecastSetupWithAvailableDevices:Zu(),isAdPlaying:!1,supportsSettingVolume:!r||r.supportsSettingVolume,volume:r.volume,muted:r.muted||!!i.embed.muted,audioTracks:r.audioTracks,isSegmentedPlaybackEnabled:e.segmentedPlaybackEnabled,startTime:e.startTime,endTime:e.endTime}}function ju(e){const{backbone:t,config:n}=e;let i=[];if(t.supportsPlaybackRate&&n.embed.settings.speed){const e=function(e,t){return e?Wu:t?$u:Yu}(t.atLiveTail,t.atLiveEdge);i=yn(e,`${t.playbackRate}`)}return i}function zu(e,t){var n;if(t){var i;const n="string"==typeof t?t:t.quality||`${t.height}p`,o=null==e||null==(i=e.find(e=>e.id===n))?void 0:i.label;if(o)return o}return null==e||null==(n=e.find(e=>e.active))?void 0:n.label}function Xu(e){const{config:t}=e;return"disable"!==t.video.privacy&&(o.webvr||o.stereoscopic)&&t.video.spatial&&ds(t,"webvr").group}function Zu(){return br.castState!==yi.NOT_SETUP&&br.castState!==yi.NO_DEVICES_AVAILABLE}function Ju(e){var t;return!l(null==(t=e.embed.interactive)?void 0:t.fragments)}function Qu(e){const{atLiveEdge:t,liveEdgeTime:n,liveTailTime:i}=e;return{atLiveEdge:t,liveEdgeTime:n,liveTailTime:i}}function ep({config:e}){const{user:t,video:n}=e;return{liked:t.liked,loggedIn:t.logged_in,watchLater:t.watch_later,ownerName:n.owner.name,collected:!1,shared:!1}}const tp={isVOD:!1,vodButtonVisible:!1};function np(e){const{video:t,embed:n,user:i,request:o}=e.config;let r=h({},tp);if(t.vod&&"purchase_options"in t.vod&&t.vod.purchase_options.length){const e=!0,a=t.vod.is_coming_soon,s="ondemand.main"===n.context||"Vimeo\\Controller\\OnDemandController.main"===n.context,l=t.vod&&i.purchased;let c=n.settings.vod&&fn(t.vod.countries,o.country);c&&a&&s&&(c=!1);const[d]=t.vod.purchase_options;let u=null;d&&(u=function(e,t,n,i){var o=i.label_string;return o?(o=function(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}(o=function(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null}(o.dynamic_translation_map,0,o.currency,d)),r.isVOD=e,r.vodLabel=u,r.purchased=!!l,r.productId=d.product_id,r.isExpiring=!!d.expiring,r.vodButtonVisible=c}return r}function ip({config:e}){const{badge:t}=e.embed.settings;let n=o.devicePixelRatio>1?"img_2x":"img";return o.svg&&t.svg&&(n="svg"),{link:t.link,img:t[n],margin:t.margin||!1,width:t.width,height:t.height,name:t.name,shadow:!!t.shadow,id:t.id}}function op(e){const t=zi("chapter-share-base",e.config),n=Ao()?t:window.location.href;return{chapters:rp(e),chapterShareBaseUrl:n,activeCueId:null}}function rp(e){const t=Array.from(e.backbone.chapters),n=e.config.embed.chapters||[];return t.map(e=>{const t=n.find(t=>t.timecode===e.startTime);return{cueId:e.id,startTime:e.startTime,endTime:e.endTime,text:e.text,chapterId:null==t?void 0:t.id,clipId:null==t?void 0:t.clip_id,timecode:null==t?void 0:t.timecode,title:null==t?void 0:t.title}})}function ap(e){var t,n,i,o,r;const{backbone:a,config:s}=e,l=a.enabledTextTrack,c=a.textTracks,d=!!s.video.live_event,{textTracks:u,activeTextTrackId:p,language:_,direction:v}=sp(c,d,l),m=lp(e),f=(null==c||null==(t=c.filter(e=>e.trackElement))?void 0:t.map(e=>e.trackElement))||[],g=1===(null==s||null==(n=s.request)||null==(i=n.flags)?void 0:i.ott)||"dev"===(null==s||null==(o=s.request)||null==(r=o.build)?void 0:r.js)||"gedevplayer.vimeows.com"===(null==s?void 0:s.player_url),b=(c||[]).reduce((e,t)=>t.rtl?e.concat(t.id):e,[]);return h({textTracks:u,textTrackEls:f,activeTextTrackId:p,requiresCrossOrigin:g,activeCues:[],language:_,direction:v,rtlTracks:b},m)}function sp(e,t,n){let i=[],o=dp(n);return(null==e?void 0:e.length)&&(o||(o="off"),i.push({label:"Off",id:"off",active:"off"===o}),e.forEach(e=>{let n="CC"===e.label.substring(e.label.length-2),r="captions"!==e.kind||n?"":" CC",a=t?"Display Captions":e.label+r;const s=dp(e),l={label:a,id:s,active:o===s};i.push(l)})),{textTracks:i,activeTextTrackId:o,language:null==n?void 0:n.language,direction:cp(n)}}function lp(e){const{store:t}=e,n=sa();return Object.keys(n).forEach(e=>{const i=t.get(`ui.captions.${e}`);n[e]=i}),n}function cp(e){return e?e.rtl?_u.RTL:_u.LTR:null}function dp(e){return e?""!==e.id?`${e.id}`:`${e.language}.${e.kind}`:""}function up(e){var t;const{config:n}=e,i=n.video.live_event,o=null==i?void 0:i.status,r=!!o,a=null==i||null==(t=i.archive)?void 0:t.status,s=_p(o),l=pp(a),c=s.isStarted&&Po(i);return h(h(h({isLiveEvent:r,isPlayable:c},s),l),{},{dvrEnabled:null==i?void 0:i.dvr,viewerCount:st(0),liveStatsRequestSucceeded:null})}function pp(e){return{isArchived:"done"===e}}function _p(e){return{isStarted:e===io.started,isEnded:e===io.ended}}function vp(e){const{config:t}=e,{interactive:n}=t.embed,i=!!(null==n?void 0:n.markers);return{hotspots:[],enabled:!l(n),ready:!1,showMarkers:i}}let mp;!function(e){e.EMPTY="empty",e.QOE_SURVEY="qoe_survey",e.SKIP_TO_LIVE="skip_to_live",e.BROADCAST_OVER="broadcast_over"}(mp||(mp={}));const fp=[mp.QOE_SURVEY,mp.BROADCAST_OVER,mp.SKIP_TO_LIVE],{Provider:hp,useStore:gp,useStoreApi:bp}=Le(),Ep=({player:e,children:t})=>{const[n,i]=Se(!1);return Vd(()=>i(!0),e),n?Te(hp,{createStore:()=>we(Je((t,n,{subscribe:i})=>{const o=h(h({set:t,get:n,subscribe:i},e),{},{get backbone(){return e.backbone},get displayContext(){return e.displayContext},get config(){return e.config},get fragmentsHandler(){return e.fragmentsHandler},get startTime(){return e.startTime},set startTime(t){e.startTime=t},get endTime(){return e.endTime},set endTime(t){e.endTime=t},get segmentedPlaybackEnabled(){return e.segmentedPlaybackEnabled}}),{config:r,backbone:s,element:c,expose:d,uuid:u,verifyConfig:p,events:_}=e;return h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h({},(e=>{const{set:t,events:n}=e,i=$c(e);return n.on(Wt._debugDataChange,()=>{t(()=>({debug:$c(e)}))}),{debug:i}})(o)),(e=>{const{set:t,events:n}=e,i=od(e),o=(e,n)=>{t(t=>({controlBar:h(h({},t.controlBar),{},{[e]:n})}))};return n.on(Wt._configChanged,()=>{t(()=>({controlBar:od(e)}))}),n.on(Nt._overrideControlbarBehavior,e=>{o("overrideBehavior",e)}),{controlBar:i,setControlBar:o}})(o)),Md(o)),(e=>{const{store:t,set:n,events:i,element:o,backbone:r,config:a}=e,s=xd(e),l=(e,t)=>n(n=>({appearance:h(h({},n.appearance),{},{[e]:t})}));return t.watch("ui.player.breakpoint",e=>l("playerBreakpoint",e)),t.watch("ui.player.mode",e=>l("playerSizeMode",e)),t.watch("ui.app.breakpoint",e=>l("appBreakpoint",e)),t.watch("ui.app.mode",e=>l("appSizeMode",e)),t.watch("ui.controlbar.isMenuFullWidth",e=>l("isMenuBlockingUI",e)),t.watch("ui.player.isVerticalVideo",e=>{l("isVerticalVideo",e)}),t.watch("ui.controlbar.isMenuVerticalVideoMode",e=>l("isMenuVerticalVideoMode",e)),t.watch("ui.player.width",()=>{l("boundingClientRect",vt(o))}),t.watch("ui.controlbar.doMenuItemsWrap",e=>{l("shouldMenuItemsWrap",e)}),t.watch("ui.player.width",e=>{const{videoHeight:n}=Bd(e,t.get("ui.player.height"),a.video.width,a.video.height);l("videoHeight",n)}),t.watch("ui.player.height",e=>{const{videoHeight:n}=Bd(t.get("ui.player.width"),e,a.video.width,a.video.height);l("videoHeight",n)}),t.watch("ui.container.height",e=>{l("containerHeight",e)}),i.on(Wt._willEnterFullscreen,()=>l("fullscreen",!0)),i.on(Wt._didExitFullscreen,e=>{n(t=>{const n={fullscreen:!1,forceExitedFullscreen:t.appearance.forceExitedFullscreen};return e||(n.forceExitedFullscreen=!0),{appearance:h(h({},t.appearance),n)}})}),i.on(m.WEBKIT_END_FULLSCREEN,()=>{l("fullscreen",!1)}),i.on(Wt._airPlayActivated,()=>{n(e=>({appearance:h(h({},e.appearance),{},{showAirPlayPicker:!0})}))}),i.on(Wt._airPlayDeactivated,()=>{n(e=>({appearance:h(h({},e.appearance),{},{showAirPlayPicker:!1})}))}),i.on(Nt._reset,()=>{n(()=>({appearance:xd(e)}))}),i.on(Wt._airPlayActivated,()=>{n(e=>({appearance:h(h({},e.appearance),{},{externalDisplay:!0})}))}),i.on(Wt._airPlayDeactivated,()=>{n(e=>({appearance:h(h({},e.appearance),{},{externalDisplay:!1})}))}),i.on(m.ENTER_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:h(h({},e.appearance),{},{pictureInPictureActive:!0})}))}),i.on(m.LEAVE_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:h(h({},e.appearance),{},{pictureInPictureActive:!1})}))}),i.on(W.WEBVR_ENTER,()=>{n(e=>({appearance:h(h({},e.appearance),{},{stereoscopicEnabled:!0})}))}),i.on(W.WEBVR_EXIT,()=>{n(e=>({appearance:h(h({},e.appearance),{},{stereoscopicEnabled:!1})}))}),i.on(Nt._changeColor,(e,t)=>{const i=an[t];n(t=>({appearance:h(h({},t.appearance),{},{[i]:ai(e)})}))}),i.on(m.LOADED_DATA,()=>{n(t=>({appearance:h(h({},t.appearance),{},{isStartTimeThumbLoading:Wr(e)})}))}),{appearance:s,setAppearance:(e,t)=>{"fullscreen"!==e?"pictureInPictureActive"!==e?"showAirPlayPicker"!==e?("stereoscopicEnabled"===e&&i.fire(Wt._stereoscopicButtonPressed),"transcriptNavActive"===e&&i.fire(Wt._transcriptNavActive,t),l(e,t)):i.fire(Wt._airPlayButtonPressed):i.fire(r.pictureInPictureActive?Nt._deactivatePictureInPicture:Nt._activatePictureInPicture):i.fire(Wt._fullscreenButtonPressed)}}})(o)),(e=>{const{set:t,events:n,subscribe:i,get:o}=e,r=Uu(e);return n.on(Wt._configChanged,()=>{t(()=>({embed:Uu(e)}))}),n.on(Wt._parentUrlAvailable,(function(e){e&&t(t=>({embed:h(h({},t.embed),{},{parentUrl:e})}))})),i(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isArchived},i=>{var r,a;const s=Fu(e),l=null==(r=o())||null==(a=r.embed)?void 0:a.transcript;i&&s&&!l&&(n.fire(Wt._rightContentAreaEnabled),t(e=>({embed:h(h({},e.embed),{},{rightContentAreaEnabled:!0,transcript:!0})})))}),{embed:r}})(o)),Jc(o)),(e=>{const{events:t,set:n}=e,i=()=>{clearTimeout(nd),nd=setTimeout(()=>{n(e=>({displayList:h(h({},e.displayList),{},{nudgeNotification:!1})})),t.fire(Wt._nudgeEnded)},1050)},o=e=>{i(),n(t=>({displayList:h(h({},t.displayList),{},{nudgeNotification:!0}),nudge:e}))};return t.on(Wt._showNudgeNotification,({direction:e,time:t})=>{o({direction:e,time:t})}),{nudge:{direction:null,time:null},setNudge:(e,t)=>{i(),n(n=>({nudge:h(h({},n.nudge),{},{[e]:t})}))},setNudgeProperties:o}})(o)),(e=>{const{events:t,set:n,get:i,backbone:o,subscribe:r,config:a}=e,s=(e,t)=>{n(n=>({playback:h(h({},n.playback),{},{[e]:t})}))},l=Ku(e);return t.on(Nt._reset,()=>{n(()=>({playback:Ku(e)}))}),t.on(Wt._configChanged,t=>{t&&n(()=>({playback:Ku(e)}))}),t.on(y,()=>s("playInitiated",!0)),t.on(m.PLAY,()=>{n(e=>({playback:h(h({},e.playback),{},{scrubbing:!1,scrubbingByFrame:!1,paused:!1,playInitiated:!0})}))}),t.on(Wt._playButtonPressed,()=>s("paused",!1)),t.on([m.PAUSE,Wt._paused,Wt._pauseButtonPressed],()=>s("paused",!0)),t.on(Wt._targetTimeReached,()=>s("targetTimeReached",!0)),t.on(C.BUFFER_STARTED,()=>s("buffering",!0)),t.on(C.BUFFER_ENDED,()=>s("buffering",!1)),t.on(Wt._scrubbingStarted,e=>{s("scrubbing",!0),"keyboard"===(null==e?void 0:e.seekType)&&(null==e?void 0:e.isFrameByFrame)&&s("scrubbingByFrame",!0)}),t.on(Wt._scrubbingEnded,()=>{s("scrubbing",!1),s("scrubbingByFrame",!1)}),t.on(Nt._setTime,e=>{n(t=>{const n=t.liveEvent.dvrEnabled?t.playback.liveTailTime:0,i=t.liveEvent.dvrEnabled?t.playback.liveEdgeTime:t.playback.duration,o=ht(e,n,i);return{playback:h(h({},t.playback),{},{currentTime:o})}})}),t.on(m.TIME_UPDATE,({currentTime:t,timeProgress:i,liveEdgeTime:o,atLiveEdge:r,liveTailTime:a,atLiveTail:s})=>{n(n=>{const l=Math.min(Ct(100*i),100);t=t||n.playback.duration*l||0;const c=ju(e);return{playback:h(h({},n.playback),{},{currentTime:t,liveEdgeTime:o,atLiveEdge:r,liveTailTime:a,atLiveTail:s,playbackRates:c})}})}),t.on(Wt._ended,()=>{const e=i().liveEvent.dvrEnabled&&!i().playback.atLiveEdge,t=i().liveEvent.dvrEnabled&&i().playback.atLiveEdge;e||n(e=>({playback:h(h({},e.playback),{},{currentTime:t?0:e.playback.currentFragment.duration})}))}),t.on(m.PROGRESS,({loaded:e})=>{n(t=>({playback:h(h({},t.playback),{},{loadedTime:e})}))}),t.on([Wt._fragmentChanged,m.DURATION_CHANGE],()=>{const t=i().playback.currentFragment;if(!ze(t,e.fragmentsHandler.currentFragment)){const t=Ju(e.config);n(n=>({playback:h(h({},n.playback),{},{hasFragments:t,currentFragment:e.fragmentsHandler.currentFragment})}))}}),t.on(m.LOADED_METADATA,()=>{n(e=>({playback:h(h({},e.playback),{},{loadedMetadata:!0})}))}),t.on(m.LOADED_DATA,()=>{n(e=>({playback:h(h({},e.playback),{},{loadedData:!0})}))}),t.on([C.STREAM_CHANGE,B],e=>{const t={currentQuality:zu(o.qualities,e)};i().liveEvent.isLiveEvent&&Object.assign(t,{qualities:o.qualities}),n(e=>({playback:h(h({},e.playback),t)}))}),t.on(Wt._qualityChanged,e=>{n(t=>({playback:h(h({},t.playback),{},{qualities:o.qualities,currentQuality:zu(o.qualities,e)})}))}),t.on(C.AUDIO_TRACK_CHANGED,()=>s("audioTracks",o.audioTracks)),t.once(R,()=>s("pictureInPictureEnabled",o.pictureInPictureEnabled)),t.on(Wt._airPlayAvailable,()=>{n(e=>({playback:h(h({},e.playback),{},{supportsAirPlay:!0})}))}),t.on(Wt._airPlayNotAvailable,()=>{n(e=>({playback:h(h({},e.playback),{},{supportsAirPlay:!1})}))}),t.on(Wt._playbackRateChanged,()=>{n(t=>({playback:h(h({},t.playback),{},{playbackRates:ju(e)})}))}),t.on(Wt._volumeChanged,e=>{n(t=>({playback:h(h({},t.playback),{},{volume:e,muted:o.muted})}))}),t.on(Wt._mutedChanged,e=>{n(t=>({playback:h(h({},t.playback),{},{muted:e})}))}),t.on(C.AVAILABLE_STREAMS_CHANGED,()=>{n(e=>({playback:h(h({},e.playback),{},{qualities:o.qualities,currentQuality:zu(o.qualities)})}))}),br.on(hr.connected,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastConnected:!0})}))}),br.on(hr.disconnected,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastConnected:!1})}))}),br.on(hr.initialized,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastSetupWithAvailableDevices:Zu()})}))}),br.on(hr.castStateChanged,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastSetupWithAvailableDevices:Zu()})}))}),br.on(hr.playing,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastPlaying:!0,isChromecastBuffering:!1})}))}),br.on(hr.buffering,()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastBuffering:!0})}))}),br.on([hr.error,hr.idle,hr.paused,hr.ended,hr.disconnected],()=>{n(e=>({playback:h(h({},e.playback),{},{isChromecastPlaying:!1,isChromecastBuffering:!1})}))}),br.on(hr.error,()=>{n(e=>({playback:h(h({},e.playback),{},{supportsChromecast:!1})}))}),t.on([Wt._adClicked,Wt._adPaused,Wt._adComplete,Wt._adError,Wt._adSkipped,Wt._allAdsCompleted],()=>{n(e=>({playback:h(h({},e.playback),{},{isAdPlaying:!1})}))}),t.on([Wt._adStarted,Wt._adResumed],()=>{n(e=>({playback:h(h({},e.playback),{},{isAdPlaying:!0})}))}),t.on([Wt._startTimeUpdated,Wt._endTimeUpdated],()=>{n(t=>({playback:h(h({},t.playback),{},{isSegmentedPlaybackEnabled:e.segmentedPlaybackEnabled,startTime:e.startTime,endTime:e.endTime})}))}),t.on(q.LATENCY_UPDATED,(function(){n(e=>e.playback.paused||e.playback.buffering?e.playback.scrubbing?Xc:{playback:h(h({},e.playback),Qu(o))}:Xc)})),t.on(C.SCANNER_CHANGE,(function(){n(e=>({playback:h(h({},e.playback),Qu(o))}))})),r(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.atLiveEdge},e=>!e&&i().liveEvent.dvrEnabled&&!i().liveEvent.isArchived&&or(Yo.DVR_MODE_ENTERED,a)),{playback:l,clearSegment:()=>{e.startTime=null,e.endTime=null},setPlayback:(e,r,a)=>{if("paused"!==e){if("qualities"===e)return t.fire(Nt._changeQuality,r),void n(e=>{const t=yn(e.playback.qualities,r);return{playback:h(h({},e.playback),{},{qualities:t,currentQuality:zu(t)})}});if("playbackRates"===e)return t.fire(Nt._changePlaybackRate,r),void n(e=>{const t=yn(e.playback.playbackRates,r);return{playback:h(h({},e.playback),{},{playbackRates:t})}});if("scrubbing"!==e)if("currentTime"!==e)if("volume"!==e)if("muted"!==e)if("audioTracks"!==e)s(e,r);else{const e=o.audioTracks.find(e=>e.id===`${r}`);e&&(o.enableAudioTrack(e),t.fire(Nt._changeAudioTrack,e))}else t.fire(Nt._changeMuted,r);else t.fire(Nt._changeVolume,r);else switch(null==a?void 0:a.seekType){case"interactive-marker":t.fire(Nt._seek,r),t.fire(Wt._playButtonPressed),t.fire(Wt._interactiveMarkerClicked,{type:"interactive-marker",action:null==a?void 0:a.action});break;case"nudge":t.fire(Wt._nudgeAttempted),t.fire(Nt._seek,r),i().playback.playInitiated||t.fire(Wt._playButtonPressed);break;default:t.fire(Nt._seek,r)}else r?t.fire(Wt._scrubbingStarted):t.fire(Wt._scrubbingEnded)}else!1===r?t.fire(Wt._playButtonPressed):t.fire(Wt._pauseButtonPressed)}}})(o)),(e=>{const{events:t,get:n,set:i}=e,o=(e,t)=>{i(n=>({user:h(h({},n.user),{},{[e]:t})}))};return t.on(Wt._liked,()=>o("liked",!0)),t.on(Wt._unliked,()=>o("liked",!1)),t.on(Wt._addedToWatchLater,()=>o("watchLater",!0)),t.on(Wt._removedFromWatchLater,()=>o("watchLater",!1)),t.on(Wt._configChanged,(t,n)=>{e.set(()=>({user:ep({config:n})}))}),t.on(Wt._userLoggedIn,()=>{n().user.loggedIn||o("loggedIn",!0)}),{user:ep(e),setUser:(i,r)=>{if("liked"!==i)if("watchLater"!==i)if("collected"!==i)if("shared"!==i)"loggedIn"!==i||!0!==r||n().user.loggedIn?o(i,r):t.fire(Nt._openPopup,"basic");else{const{share:n}=e.config.embed.settings,i=(null==n?void 0:n.embed_only)?Wt._embedButtonPressed:Wt._shareButtonPressed;t.fire(i)}else t.fire(Wt._collectionsButtonPressed);else t.fire(Wt._watchLaterButtonPressed);else t.fire(Wt._likeButtonPressed)}}})(o)),(e=>{const{set:t,get:n,events:i,config:o,subscribe:r}=e,a=np(e);function s(e){e&&n().vod.vodButtonVisible?t(e=>({vod:h(h({},e.vod),{},{vodButtonVisible:!1})})):e||!n().vod.isVOD||n().vod.vodButtonVisible||t(e=>({vod:h(h({},e.vod),{},{vodButtonVisible:!0})}))}return r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.fullPlayerElement},e=>{s(e)}),r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>s(e)),i.on(Wt._configChanged,(n,i)=>{t(()=>({vod:np(h(h({},e),{},{config:i}))}))}),{vod:a,setVod:(e,n)=>{if("purchased"!==e||!0!==n)t(t=>({vod:h(h({},t.vod),{},{[e]:n})}));else{const[e]=o.video.vod.purchase_options;i.fire(Wt._vodButtonPressed,e.product_id)}}}})(o)),(e=>{const{set:t,get:n,events:i,config:o}=e,r=pd(e),a=(e,i)=>{if("purpose"!==e)t(t=>({overlay:h(h({},t.overlay),{},{[e]:i})}));else{const e=n().overlay.purpose===i?Fn.EMPTY:i;t(t=>({overlay:h(h({},t.overlay),{},{purpose:e})}))}};return i.on(Wt._overlayOpened,e=>{a("purpose",e)}),i.on(Wt._overlayClosed,()=>{a("purpose",Fn.EMPTY)}),i.on(Nt._showOverlay,e=>{$n(e)&&!n().displayList.accessGate&&i.fire(Wt._overlayOpened,e)}),i.on(Wt._overlayCloseButtonPressed,()=>{$n(n().overlay.purpose)&&i.fire(Wt._overlayClosed)}),{overlay:r,setOverlay:(t,r)=>{if("purpose"!==t||r!==Fn.SHARE){if("purpose"===t&&r===Fn.EMPTY){if($n(n().overlay.purpose))return void i.fire(Wt._overlayClosed);r=Yn(e.element)}a(t,r)}else{var s;const{embed:e}=o,t=(null==(s=e.settings.share)?void 0:s.embed_only)?Wt._embedButtonPressed:Wt._shareButtonPressed;i.fire(t)}}}})(o)),(e=>{const{set:t,events:n,subscribe:i}=e,o=Qc(e);return n.on(Wt._configChanged,(n,i)=>{t(()=>({title:Qc(h(h({},e),{},{config:i}))}))}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.isSegmentedPlaybackEnabled},n=>{let i=zi("video-title",e.config);n&&(i=Ji(i,e.startTime,e.endTime)),t(e=>({title:h(h({},e.title),{},{titleLinkUrl:i})}))}),{title:o}})(o)),(e=>{const{events:t,set:n}=e,i=ip(e);return t.on(Wt._configChanged,(e,t)=>{n(()=>({badge:ip({config:t})}))}),{badge:i,setBadge:(e,i)=>{"id"!==e?((e,t)=>{n(n=>({badge:h(h({},n.badge),{},{[e]:t})}))})(e,i):t.fire(Wt._badgePressed,i)}}})(o)),(e=>{const{set:t,events:n}=e,i=(e,n)=>{t(t=>({chapters:h(h({},t.chapters),{},{[e]:n})}))},o=op(e),r=({backbone:e})=>{if(e.chaptersTrack){const t=()=>n.fire(Wt._chapterChanged,null==e?void 0:e.currentChapterID);e.chaptersTrack.addEventListener("cuechange",t)}};return r(e),n.on(Wt._chapterChanged,e=>{t(t=>({chapters:h(h({},t.chapters),{},{activeCueId:e})}))}),n.on(C.CHAPTER_CUES_UPDATED,()=>i("chapters",rp(e))),n.on(Wt._configChanged,()=>{t(()=>({chapters:op(e)})),r(e)}),{chapters:o,setChapters:i}})(o)),(e=>{const{set:t,get:n,events:i,backbone:o}=e,r=sa(),s=e=>{var i,r;const a=sp(o.textTracks,null==(i=n())||null==(r=i.liveEvent)?void 0:r.isLiveEvent,e);t(e=>({captions:h(h({},e.captions),a)}))},l=ap(e);return i.on(Wt._captionsChanged,e=>{s(e)}),i.on(C.TEXT_TRACKS_AVAILABLE,()=>{s()}),i.on(Wt._configChanged,()=>{t(()=>({captions:ap(e)}))}),i.on(P,(e,n=[])=>{o.enabledTextTrack&&"disabled"!==(null==e?void 0:e.mode)&&t(e=>({captions:h(h({},e.captions),{},{activeCues:a(n)})}))}),i.on(Nt._turnCaptionsOff,()=>{t(e=>({captions:h(h({},e.captions),{},{activeCues:[]})}))}),{captions:l,setCaptions:(n,o)=>{if("activeTextTrackId"===n)return"off"!==o&&o?void i.fire(Nt._turnCaptionsOn,o):void i.fire(Nt._turnCaptionsOff);if(Mi.hasOwnProperty(n)){const a=r[n];return i.fire(Nt._changeCaptionsStyles,a,o),void t(t=>({captions:h(h({},t.captions),lp(e))}))}((e,n)=>{t(t=>({captions:h(h({},t.captions),{},{[e]:n})}))})(n,o)},resetCaptionsStyles:()=>{i.fire(Nt._resetCaptionsStyles),t(t=>({captions:h(h({},t.captions),lp(e))}))}}})(o)),(e=>{const{events:t,set:n,subscribe:i}=e,o=up(e),r=(e,t)=>{n(n=>({liveEvent:h(h({},n.liveEvent),{},{[e]:t})}))};t.on(Wt._configChanged,()=>{n(()=>({liveEvent:up(e)}))});const{EVENT_ACTIVE:a,EVENT_PENDING:s,EVENT_STARTED:l,EVENT_ENDED:c}=q,d={[a]:io.active,[s]:io.pending,[l]:io.started,[c]:io.ended};Object.keys(d).forEach(e=>t.on(e,()=>n(t=>({liveEvent:h(h({},t.liveEvent),_p(d[e]))}))));const{ARCHIVE_STARTED:u,ARCHIVE_DONE:p,ARCHIVE_ERROR:_}=q,v={[u]:no.started,[p]:no.done,[_]:no.error};return Object.keys(v).forEach(e=>t.on(e,()=>n(t=>({liveEvent:h(h({},t.liveEvent),pp(v[e]))})))),t.on(q.LIVE_STATS_SUCCESS,({viewerCount:e})=>{n(t=>({liveEvent:h(h({},t.liveEvent),{},{viewerCount:st(e),liveStatsRequestSucceeded:!0})}))}),t.on(q.LIVE_STATS_FAILURE,()=>{n(e=>({liveEvent:h(h({},e.liveEvent),{},{liveStatsRequestSucceeded:!1})}))}),t.on(Wt._liveEventSafeToPlay,()=>{r("isPlayable",!0)}),i(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isStarted},e=>!e&&r("isPlayable",!1)),{liveEvent:o,setLiveEvent:r}})(o)),(e=>{const{events:t,set:n}=e;return t.on(Wt._webinarRegistrantBlocked,()=>{n(e=>({webinar:h(h({},e.webinar),{},{webinarRegistrantBlocked:!0})}))}),t.on(Wt._webinarRegistrantUnblocked,()=>{n(e=>({webinar:h(h({},e.webinar),{},{webinarRegistrantBlocked:!1})}))}),{webinar:{webinarRegistrantBlocked:!1},setWebinar:(e,t)=>{n(n=>({webinar:h(h({},n.webinar),{},{[e]:t})}))}}})(o)),(e=>{const{set:t,events:n}=e,i=vp(e),o=e=>{l(e.embed.interactive)||n.once(Wt._interactiveReady,({hotspots:e})=>{t(t=>({interactive:h(h({},t.interactive),{},{hotspots:e,ready:!0})}))})},r=n=>{o(n),t(()=>({interactive:vp(e)}))};return o(e.config),n.on(Wt._configChanged,(e,t)=>{e&&r(t)}),n.on(Wt._createInteractiveChanged,(e,t)=>{r(t)}),{interactive:i,setInteractive:(e,n)=>{t(t=>({interactive:h(h({},t.interactive),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,events:n,config:i}=e;return n.on(Wt._configChanged,()=>{t(()=>({cuePoints:{cuePoints:[]}}))}),i.embed.on_site&&(n.on(Wt._cuePointAdded,e=>{t(t=>{const n=t.cuePoints.cuePoints.concat(e);return{cuePoints:h(h({},t.cuePoints),{},{cuePoints:n})}})}),n.on(Wt._cuePointRemoved,e=>{t(t=>{const n=t.cuePoints.cuePoints.filter(t=>t.id!==e.id);return{cuePoints:h(h({},t.cuePoints),{},{cuePoints:n})}})})),{cuePoints:{cuePoints:[]},setCuePoints:(e,n)=>{t(t=>({cuePoints:h(h({},t.cuePoints),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,get:n,events:i,subscribe:o,element:r,config:a}=e,s={purpose:mp.EMPTY};let l=function(e){const{request:t,video:n,embed:i}=e.config,{qoe_survey_forced:o,ott:r}=t.flags,{qoe_survey_vote:a}=t.cookie,{duration:s,live_event:l}=n;return!(!o&&(s<60&&!l||!Kn(i)||r||jn(7776e6)<a/1e3||!(Math.random()<.005)))}(e);const c=(e,i)=>{Kn(a.embed)&&To({newPriority:i,currentPriority:n().toast.purpose,priorityOrder:fp})&&t(t=>({toast:h(h({},t.toast),{},{[e]:i})}))},d=()=>{l&&To({newPriority:mp.QOE_SURVEY,currentPriority:n().toast.purpose,priorityOrder:fp})&&(e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth),i="visible"===document.visibilityState;return n&&i})(r)&&(c("purpose",mp.QOE_SURVEY),i.fire(Wt._qoeSurveyPresented),l=!1)};function u(){t(e=>{const{liveEvent:t,toast:n,playback:i,displayList:o}=e;return t.dvrEnabled&&n.purpose!==mp.SKIP_TO_LIVE?i.atLiveEdge?Xc:t.isPlayable?i.paused&&!i.scrubbing?Xc:o.controlBar?{toast:{purpose:mp.SKIP_TO_LIVE}}:Xc:Xc:Xc})}function p(){t(e=>e.toast.purpose!==mp.SKIP_TO_LIVE?Xc:{toast:{purpose:mp.EMPTY}})}return o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>{var t,i,o,r;const a=function(e,t){return t?6e5:Math.round(.4*e*1e3)}(null==(t=n())||null==(i=t.playback)?void 0:i.duration,null==(o=n())||null==(r=o.liveEvent)?void 0:r.isLiveEvent);e&&a&&setTimeout(d,a)}),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.atLiveEdge},e=>{e?p():u()}),o(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isEnded},e=>e&&void t(e=>e.liveEvent.dvrEnabled&&e.liveEvent.isEnded?{toast:{purpose:mp.BROADCAST_OVER}}:Xc)),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{n().liveEvent.isEnded||n().playback.scrubbing||(e?p():u())}),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.controlBar},e=>e?u():p()),{toast:s,setToast:c,closeToast:()=>{c("purpose",mp.EMPTY)}}})(o)),(e=>{const{get:t,set:n,subscribe:i,config:o,backbone:r}=e,a=ad(e),s=(e,i)=>{Kn(o.embed)&&To({newPriority:i,currentPriority:t().topCenterActionItem.purpose,priorityOrder:rd})&&n(t=>({topCenterActionItem:h(h({},t.topCenterActionItem),{},{[e]:i})}))},l=e=>{e&&t().topCenterActionItem.purpose!==e||s("purpose",id.EMPTY)},c=()=>l(id.UNMUTE),d=()=>s("purpose",id.WATCH_FULL_VIDEO),u=()=>l(id.WATCH_FULL_VIDEO);return i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.loadedData},e=>{if(!e)return;const n=t(),i=n.embed.autoPlay||n.liveEvent.isLiveEvent,o=0===n.playback.volume||n.playback.muted,a=Kn(n.embed),l=r.hasAudio||n.liveEvent.isLiveEvent;o&&i&&a&&l&&s("purpose",id.UNMUTE)}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.volume},e=>e>0&&c()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.muted},e=>!e&&c()),i(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isEnded},e=>e&&c()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.isSegmentedPlaybackEnabled},()=>{sd(t())?d():u()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.controlBar},()=>{sd(t())?d():u()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},()=>{sd(t())?d():u()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},()=>{sd(t())?d():u()}),{topCenterActionItem:a,setTopCenterActionItem:s,closeTopCenterActionItem:l}})(o)),(e=>{const{events:t,set:n}=e,i=(e,t)=>{n(n=>({spatial:h(h({},n.spatial),{},{[e]:t})}))};return t.on(W.WEBVR_ENTER,()=>{i("webVRActive",!0)}),t.on(W.WEBVR_EXIT,()=>{i("webVRActive",!1)}),t.on(W.CAMERA_UPDATE,e=>{n(t=>({spatial:h(h({},t.spatial),{},{latitude:e.pitch,longitude:e.yaw})}))}),{spatial:function(e){const{spatial:t}=e.config.video;return{webVRActive:!1,longitude:0,latitude:0,fieldOfView:null==t?void 0:t.fov}}(e),setSpatial:i}})(o)),(e=>{const{set:t,events:n}=e,i=Dd(e),o=(e,n)=>{t(t=>({accessGate:h(h({},t.accessGate),{},{[e]:n})}))};return n.on(Wt._accessGateOpened,e=>{o("purpose",e)}),n.on(Wt._accessGateClosed,()=>{o("purpose",Es.EMPTY)}),{accessGate:i,setAccessGate:o}})(o)),{},{config:r,backbone:s,element:c,name:(null==d?void 0:d.name)||Ci.VimeoPlayer,uuid:u,verifyConfig:p,events:_,subscribe:i})})),children:t}):null};const yp=({children:e,text:t})=>{const n=Ie(t),[i,r]=Se(!1),[a,s]=Se(!1),l=()=>{a||s(!0)},c=()=>{i&&(l(),r(!1))},d=()=>{i||o.touch||(l(),r(!0))},u=je(()=>{a&&s(!1)},[a]),p={className:"LabeledButton_module_box__9d065662",onMouseEnter:d,onMouseLeave:c,onFocus:d,onBlur:c},_=h({className:"LabeledButton_module_labeledButton__9d065662"},pn(t=>{c(),e.props.onClick&&e.props.onClick(t)})),v=`${ed(250)} transform 250 ease-out`,m={visible:i,styleOverrides:{enterActive:{transform:"translateX(0)",transition:v},exitActive:{transform:"translateX(5px)",transition:v}}};return n.current!==t&&(a?m.onFaded=u:n.current=t),Te("div",h(h({},p),{},{children:[Te(td,h(h({},m),{},{children:Te("label",h(h({},_),{},{role:"presentation","aria-hidden":"true",children:Te("span",{children:n.current})}))})),e]}))},Cp=Oe((e,t)=>{let{on:n,label:i,icon:o,onClick:r,className:a="",children:s}=e,l=Ae(e,["on","label","icon","onClick","className","children"]);const c=gp(e=>e.displayList.sideDock);return Te(Js,h(h({tabIndex:c?0:-1,ref:t,size:xs.SM,icon:o,"aria-label":i,onClick:r,className:`${Dn.EXCLUDE_GLOBAL_BUTTON_STYLES} ${n&&Nn.ON} ${a}`},l),{},{children:s}))}),Tp=()=>{const e=gp(e=>e.embed.collections),t=gp(e=>e.setUser);return e&&Te(yp,{text:"Add to collections",children:Te(Cp,{label:"Add to collections",className:Nn.COLLECTIONS_BUTTON,onClick:()=>t("collected",!0),icon:Te(Ds,{name:Rs.COLLECTIONS,className:Nn.COLLECTIONS_ICON,focusable:"false"})})})},Lp=e=>{const t=Ie(!1),n=gp(e=>e.setUser),i=gp(e=>e.user.loggedIn);return ke(()=>{t.current&&i&&"function"==typeof e&&(e(),t.current=!1)},[i]),()=>{i?e():(n("loggedIn",!0),t.current=!0)}},wp=()=>{const e=gp(e=>e.setUser),t=gp(e=>e.user.liked),n=gp(e=>e.user.loggedIn),i=gp(e=>e.embed.like),o=je(t=>e("liked",!t),[e]);let r=t?"Unlike":"Like",a=r;n||(a="Like (this opens in a new window)");const s=Lp(()=>o(t));return i&&Te(yp,{text:r,children:Te(Cp,{label:a,className:Nn.LIKE_BUTTON,on:t,icon:Te(Ds,{name:t?Rs.HEART_FILLED:Rs.HEART,className:Nn.LIKE_ICON,focusable:"false"}),"data-like-button":!0,onClick:s})})};const Ap=()=>{const e=gp(e=>e.setOverlay),t={share:gp(e=>e.embed.embedOnlyShare)?"Embed":"Share"};return gp(e=>e.embed.share)&&Te(yp,{text:t.share,children:Te(Cp,{label:t.share,"data-share-button":!0,onClick:()=>e("purpose",Fn.SHARE),icon:Te(Ds,{name:Rs.PAPER_PLANE,className:"share-icon ShareButton_module_shareIcon__da819942",focusable:"false"})})})};const Sp=()=>{const{vodLabel:e,purchased:t,isExpiring:n,vodButtonVisible:i}=gp(e=>e.vod),o=gp(e=>e.setVod),r=pn(()=>o("purchased",!0));return i&&Te("div",h(h({},r),{},{className:`VODButton_module_vodButtonContainer__65824b9e ${n?"VODButton_module_expiring__65824b9e":""}`,"data-vod-expiring":n,"data-vod-purchased":t,"data-vod-button":!0,children:Te(Js,{size:xs.SM,iconPosition:Vs.RIGHT,className:`${Dn.EXCLUDE_GLOBAL_BUTTON_STYLES} ${Nn.VOD_BUTTON} VODButton_module_vodButton__65824b9e ${t&&Nn.ON}`,"data-vod-button":!0,icon:Te(Ds,{name:Rs.ONDEMAND,className:Nn.VOD_ICON,"data-vod-icon":!0}),children:Te("span",{"data-vod-button-label":!0,children:e})})}))},Ip=()=>{const e=gp(e=>e.embed.watchLater),t=gp(e=>e.user.watchLater),n=gp(e=>e.user.loggedIn),i=gp(e=>e.setUser),o=je(e=>i("watchLater",!e),[i]);let r=t?"Remove from Watch Later":"Add to Watch Later",a=r;n||(a="Add to Watch Later (this opens in a new window)");const s=Lp(()=>o(t));return e&&Te(yp,{text:r,children:Te(Cp,{label:a,className:Nn.WATCH_LATER_BUTTON,on:t,onClick:s,icon:Te(Ds,{name:t?Rs.CLOCK_FILLED:Rs.CLOCK,className:Nn.WATCH_LATER_ICON,focusable:"false"}),"data-watch-later-button":!0})})};const kp=()=>{const e=gp(e=>e.embed.aiWidget),t=gp(e=>e.toggleDisplayList),n=gp(e=>e.displayList.aiWidget),i=Ie(null),o=Ie(!1),r=n?[Bn.AI_WIDGET_ID,Mn.RIGHT_CONTENT_AREA].join(" "):Mn.RIGHT_CONTENT_AREA;return ke(()=>{function e(){document.activeElement.id===Bn.AI_WIDGET_ID&&(o.current=!0)}return window.addEventListener("blur",e),()=>{window.removeEventListener("blur",e)}},[]),Nu("Tab",e=>{const t=document.activeElement===document.body;var n;o.current&&t&&(e.preventDefault(),o.current=!1,null==(n=i.current)||n.focus())}),e&&Te(yp,{text:"Vimeo AI",children:Te(Cp,{label:"Vimeo AI","data-ai-button":!0,onClick:()=>t("aiWidget"),ref:i,"aria-expanded":n,"aria-controls":r,icon:Te(Ds,{name:Rs.SPARKLE_TWO_STARS_FILLED,focusable:"false",className:"AIButton_module_icon__49b913c8"})})})},Pp=()=>{const e=gp(e=>e.displayList.sideDock),t=gp(e=>e.setAppearance),n=gp(e=>e.appearance.fullscreen),i=gp(e=>e.displayList.outro),o=gp(e=>e.vod.vodButtonVisible),r=gp(e=>e.vod.purchased),a={className:bn(Nn.VP_SIDEDOCK,"SideDock_module_root__9f5759fb",e&&"SideDock_module_visible__9f5759fb",i&&"SideDock_module_outroVisible__9f5759fb",n&&"SideDock_module_fullscreen__9f5759fb"),onPointerEnter:()=>t("mousedOverSidedock",!0),onMouseEnter:()=>t("mousedOverSidedock",!0),onPointerLeave:()=>t("mousedOverSidedock",!1),onMouseLeave:()=>t("mousedOverSidedock",!1)};return o&&!r?Te("div",h(h({},a),{},{"data-sidedock":!0,children:[Te(Sp,{}),Te(td,{visible:e,children:Te("div",{className:"SideDock_module_sidedockInner__9f5759fb","data-sidedock-inner":!0,children:[Te(wp,{}),Te(Ip,{}),Te(Tp,{}),Te(Ap,{})]})})]})):Te(td,{visible:e,children:Te("div",h(h({},a),{},{"data-sidedock":!0,children:[o&&r&&Te(Sp,{}),Te(wp,{}),Te(Ip,{}),Te(Tp,{}),Te(Ap,{}),Te(kp,{})]}))})};let Op,Rp;!function(e){e.MARKER_SEEKED="seeked",e.MARKER_ENDED="ended",e.MARKER_UPSWITCH="upswitch",e.MARKER_DOWNSWITCH="downswitch",e.MARKER_SWITCH_COMPLETE="switchcomplete",e.MARKER_RESIZE="resize",e.MARKER_SCANNER_CHANGE="scannerchange",e.MARKER_FILE_CHANGE="filechange",e.MARKER_STALLED="stalled",e.MARKER_BUFFER_GAP_JUMP="buffergapjump",e.MARKER_BUFFER_GAP_JUMP_PREVENT="buffergapjumpprevent",e.MARKER_STALL_JUMP="stalljump"}(Op||(Op={})),function(e){e.MARKER_SEEKED="#0088cc",e.MARKER_ENDED="#503873",e.MARKER_UPSWITCH="#5a9e02",e.MARKER_DOWNSWITCH="#d93636",e.MARKER_RESIZE="#FF8A00",e.MARKER_SCANNER_CHANGE="#e9ff00",e.MARKER_FILE_CHANGE="#b5d3e2",e.MARKER_STALLED="#f44283"}(Rp||(Rp={}));const Np=Object.entries(Op).reduce((e,[t,n])=>(e[n]=Rp[t],e),{}),Dp=({max:e=1,timeSeries:t=[],debugMarkers:n=[]})=>{const i=t.length,o=i<100?0:i-100,r=t[o],a=t[i-1],s=r?r.time:0,l=a?a.time:0,c=t.slice(o).map(t=>{let n=(t.time-s)/(l-s)*250,i=14-14*t.value/e;return isNaN(i)&&(i=0),isNaN(n)&&(n=0),`${n},${function(e,t,n){return Math.min(Math.max(e,0),14)}(i)}`}).join(" ");return Te("svg",{width:250,height:14,viewBox:"0 0 250 14",children:[Te("g",{children:Te("polyline",{stroke:"white",fill:"none",points:c})}),Te("g",{children:!!n.length&&n.filter(e=>e.t>=s&&e.t<=l).map((e,t)=>{let n=(e.t-s)/(l-s)*250;return isNaN(n)&&(n=0),Te("g",{children:Te("line",{className:"BandwidthSeriesDisplay_module_marker__718ed0d2",x1:n,y1:"0",x2:n,y2:14,strokeWidth:"1",stroke:Np[e.type]})},`${e.t}-${t}`)})})]})};const Mp=({title:e="",children:t})=>Te("p",{children:[Te("span",{children:e}),Te("b",{children:t})]}),xp=({payloadId:e,showSessionId:t})=>{const{codec:n,isLive:i,isDash:o,delivery:r,resolution:a,embedSize:s,drmEnabled:l,drmFastly:c,sessionId:d,ecdnVendor:u,p2pSources:p,p2pOffload:_,totalFrames:v,liveLatency:m,currentTime:f,bufferEnd:h,bufferAhead:g,bufferTarget:b,presentationDelay:E,droppedFrames:y,vrHeadsetName:C,liveSessionID:T,bandwidthKbps:L,bandwidthMinKbps:w,bandwidthMaxKbps:A,separateAudioVideo:S,bandwidthSeriesData:I,droppedFramesPercent:k}=gp(e=>e.debug),{max:P,debugMarkers:O,timeSeries:R}=I;return Te("div",{className:"DebugValues_module_values__cf9b5b97",children:[!!r&&Te(Mp,{title:"Delivery:",children:r}),!!n&&Te(Mp,{title:"Codec:",children:n}),!!a&&Te(Mp,{title:"Playing:",children:a}),!!s&&Te(Mp,{title:"Embed Size:",children:s}),o&&Te(Mp,{title:"Separate AV:",children:`${S}`}),(o||i)&&Te(Mp,{title:"Dropped Frames:",children:[y," / ",v," - ",k]}),!!C&&Te(Mp,{title:"VR Hardware:",children:C}),i&&!!T&&Te(Mp,{title:"Live Session ID:",children:T}),!!u&&Te(Pe,{children:[Te(Mp,{title:"eCDN Vendor:",children:u}),Te(Mp,{title:"Peers - P2P Delivery:",children:[p," - ",_]})]}),l&&Te(Mp,{title:"DRM:",children:["Enabled; Fastly DRM: ",`${c}`]}),i&&Te(Mp,{title:"Live Latency / Target:",children:[m," / ",E]}),Te(Mp,{title:"Playhead / Buffer End:",children:[f," / ",h]}),Te(Mp,{title:"Buffer Ahead / Target:",children:[g," / ",b]}),(o||i)&&Te(Pe,{children:[Te("p",{children:[Te("span",{children:"Bandwidth:"}),Te("b",{children:L}),Te("div",{className:"DebugValues_module_bandwidthMinMax__cf9b5b97",children:["(",Te("b",{className:"DebugValues_module_bandwidthMin__cf9b5b97",children:w}),Te("b",{className:"DebugValues_module_bandwidthMax__cf9b5b97",children:A}),")"]})]}),Te("div",{className:"DebugValues_module_timeSeries__cf9b5b97",children:Te(Dp,{max:P,debugMarkers:O,timeSeries:R})})]}),d&&t&&Te("p",{children:[Te("span",{children:"Debug Key:"}),Te("br",{}),Te("b",{className:"DebugValues_module_sessionId__cf9b5b97",children:d})]}),e&&Te("p",{children:[Te("span",{children:"Debug Key:"}),Te("br",{}),Te("b",{className:"DebugValues_module_payloadId__cf9b5b97",children:e})]})]})};let Bp;function Vp(){}const Up=Oe(({onCopyFailed:e,labelResetDelay:t,className:n},i)=>{const[o,r]=Se(!1),a=gp(e=>e.debug),{bandwidthSeriesData:s}=a,l=Ae(a,["bandwidthSeriesData"]),c=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){const n={version:2,tpl:l,mark:s.debugMarkers};return clearTimeout(Bp),function(e){if(e&&e.then)return e.then(Vp)}(function(o,a){try{var s=function(){const o=btoa(JSON.stringify(n));return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(_n(o),(function(n){n?(r(!0),Bp=setTimeout(()=>{clearTimeout(Bp),r(!1)},t)):e(),i.current.focus()}))}()}catch(Te){return a()}return s&&s.then?s.then(void 0,a):s}(0,(function(t){e()})))}));return Te(Js,{ref:i,className:n,onClick:c,color:Bs.CUSTOM,children:o?"Copied":"Copy Debug Payload"})});let Fp;function Hp(){}const qp=({onSendSuccess:e,labelResetDelay:t,className:n})=>{const{player_url:i,request:o}=gp(e=>e.config),[r,a]=Se(!1),[s,l]=Se(!1),c=gp(e=>e.debug),{bandwidthSeriesData:d}=c,u=Ae(c,["bandwidthSeriesData"]),{signature:p,expires:_,timestamp:v}=o,m=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){const{clipId:n,payloadId:o}=u,r=`https://${i}${`/debug_payload/${n}/${o}?s=${p}&expires=${_}&time=${v}`}`,s={version:2,tpl:u,mark:d.debugMarkers};return clearTimeout(Fp),function(e){if(e&&e.then)return e.then(Hp)}(function(t,n){try{var i=function(t,n){try{var i=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(Qe({url:r,method:"post",json:s,timeout:1e4}).json(),(function({ID:t}){e(t),a(!0)}))}catch(Te){return n()}return i&&i.then?i.then(void 0,n):i}(0,(function(){l(!0)}))}catch(Te){return n(!0,Te)}return i&&i.then?i.then(n.bind(null,!1),n.bind(null,!0)):n(!1,i)}(0,(function(e,n){return Fp=setTimeout(()=>{clearTimeout(Fp),a(!1),l(!1)},t),function(e,t){if(e)throw t;return t}(e,n)})))}));let f="Send Debug Payload";return r?f="Sent":s&&(f="Something Went Wrong"),Te(Js,{className:n,onClick:m,color:Bs.CUSTOM,children:f})},Gp=()=>{const e=gp(e=>e.name),t=gp(e=>e.appearance.playerBreakpoint),n=gp(e=>e.displayList.debugPanel),i=gp(e=>e.setDisplayList),{isDNTEnabled:o,hideCloseButton:r,isCopyDisabled:a,clipId:s}=gp(e=>e.debug),[l,c]=Se(void 0),[d,u]=Se(!1),[p,_]=Se(null),v=Ie(null),m=Ie(null),f=Ie(null),g=!r&&e!==Ci.ChromelessPlayer,b=!a&&e!==Ci.ChromelessPlayer,E=bn("DebugPanel_module_root__56861123",js.roundedBox,(t===Ms.XS||t===Ms.XXS)&&"DebugPanel_module_smallPlayer__56861123");return ke(()=>{n?f.current?f.current.focus():m.current&&m.current.focus():p&&(p.focus(),document.body.classList.add("showfocus"))},[n,p]),n&&Te("div",{ref:v,className:E,onFocus:e=>{var t;(null==(t=v.current)?void 0:t.contains(e.relatedTarget))||_(e.relatedTarget)},children:[s&&Te("p",h(h({},pn(()=>{_n(`${s}`)})),{},{children:[Te("span",{children:"Clip ID: "}),Te("b",{className:"DebugPanel_module_clipId__56861123",children:s})]})),Te(xp,{payloadId:l,showSessionId:d}),Te("input",{type:"text",className:"DebugPanel_module_debugCode__56861123"}),b&&Te(Pe,{children:[Te(Up,{labelResetDelay:1500,onCopyFailed:()=>u(!0),className:"DebugPanel_module_button__56861123",ref:f}),Te(qp,{labelResetDelay:1500,onSendSuccess:e=>c(e),className:"DebugPanel_module_button__56861123"})]}),g&&Te("button",h(h({},pn(()=>i("debugPanel",!1))),{},{className:"DebugPanel_module_closeButton__56861123","aria-label":"Close stats debug panel",ref:m,children:Te(Ds,{name:Rs.DISMISS_X})})),!!o&&"No Debug Key available as Do Not Track is enabled."]})};const Wp=()=>{const{link:e,img:t,margin:n,width:i,height:o,name:r,id:a}=gp(e=>e.badge),s=gp(e=>e.setBadge),l=gp(e=>e.displayList.badge),c=r+" Badge",d={};return n&&Object.assign(d,{margin:n}),Te(td,{visible:l,children:Te("div",{className:`${Nn.VP_BADGE} Badge_module_badge__d9322d84`,style:d,"data-badge":!0,children:Te(Fd,{href:e,onClick:()=>s("id",a),targetBlank:!0,className:`Badge_module_badgeLink__d9322d84 ${js.focusable}`,children:Te("img",{src:t,width:i,height:o,alt:c})})})})};var Yp={tagsWrapper:"TitleTags_module_tagsWrapper__0930ecb0",tag:"TitleTags_module_tag__0930ecb0",liveCounter:"TitleTags_module_liveCounter__0930ecb0",titleTag:"TitleTags_module_titleTag__0930ecb0",dolbyVisionTag:"TitleTags_module_dolbyVisionTag__0930ecb0",bylineTag:"TitleTags_module_bylineTag__0930ecb0",lonerTag:"TitleTags_module_lonerTag__0930ecb0"};const $p=({clip:e,is360:t,hasHDR:n,hasHDR10Plus:i,hasDolbyVision:o,channelLayout:r,context:a,className:s})=>{const l="5.1"===r||"7.1"===r,c=r.startsWith("ambisonic"),d=bn(Yp.tag,Yp[a],s);return Te("div",{className:Yp.tagsWrapper,"data-title-tags":!0,children:[e&&Te("span",{className:d,children:"Clip"}),t&&Te("span",{className:d,children:c?"360 ambisonic":"360"}),n&&!i&&Te("span",{className:d,children:"HDR"}),i&&Te("span",{className:d,children:"HDR10+"}),o&&Te("span",{className:`${d} ${Yp.dolbyVisionTag}`,children:Te(Ds,{name:Rs.DOLBY_VISION})}),l&&Te("span",{className:d,children:r})]})};const Kp=()=>{const{displayTitle:e,displayPortrait:t,ownerLinkUrl:n,targetBlank:i,portraitImg:o,titleLinkUrl:r,title:a,ownerName:s,is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,bylineLinkUrl:_,displayByline:v}=gp(e=>e.title),m=gp(e=>e.displayList.title),f=gp(e=>e.embed.badge),h=gp(e=>e.displayList.badge),[g,b]=Se(t&&!h),E=gp(e=>e.playback.isSegmentedPlaybackEnabled);return ke(()=>{let e;return!h&&t?e=setTimeout(()=>b(!0),250):b(!1),()=>clearTimeout(e)},[h,t]),Te(Pe,{children:[f&&Te(Wp,{}),Te(td,{visible:m,children:Te("div",{className:`${Nn.VP_TITLE} Title_module_title__13cf4be8`,role:"presentation",children:Te("header",{className:"Title_module_header__13cf4be8",role:"presentation",children:[g&&Te("div",{className:"Title_module_portrait__13cf4be8",children:Te(Fd,{href:n,targetBlank:i,variant:"minimal",className:bn("Title_module_portraitLink__13cf4be8",js.focusableCircle),tabIndex:m?0:-1,children:Te("img",{src:o,alt:"Link to video owner's profile",width:"60",height:"60","data-trackClick":"video-portrait"})})}),Te("div",{className:"Title_module_headers__13cf4be8",children:[e&&Te(Fd,{href:r,targetBlank:i,"data-track-click":"video-title",variant:"minimal",className:js.focusable,tabIndex:m?0:-1,children:Te(il,{color:qs.CUSTOM,sizeMap:{[Ms.XXS]:Fs.MD,[Ms.XS]:Fs.LG,[Ms.SM]:Fs.XL},className:bn("Title_module_headerText__13cf4be8","Title_module_mainTitle__13cf4be8"),children:[a,Te($p,{clip:E,is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,context:Dn.TITLE_TAG,className:"Title_module_titleTag__13cf4be8"})]})}),v&&Te(Fd,{href:_,targetBlank:i,variant:"minimal",className:`${e?"Title_module_subtitleLink__13cf4be8":""} ${js.focusable}`,tabIndex:m?0:-1,children:Te(il,{color:qs.CUSTOM,className:bn("Title_module_headerText__13cf4be8","Title_module_subtitle__13cf4be8"),children:[s,!a&&Te($p,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,context:Dn.BYLINE_TAG,className:"Title_module_titleTag__13cf4be8"})]})}),!a&&!v&&Te($p,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,context:Dn.TITLE_TAG,className:"Title_module_titleTag__13cf4be8"})]})]})})})]})};const jp=({id:e,timecode:t,className:n,teaser:i,url:o,imageUrl:r,headline:a,inView:s})=>{const l=gp(e=>e.appearance.isVerticalVideo),c=gp(e=>e.setCards),d=gp(e=>e.setPlayback),u=()=>{c("hoveredCard",null),c("cardPressed",e),o&&d("paused",!0)},p=bn("Card_module_card__6a2b6800",n,s&&"Card_module_active__6a2b6800",r&&"Card_module_hasThumbnail__6a2b6800",l&&"Card_module_vertical__6a2b6800");return Te("div",{className:p,onMouseEnter:()=>c("hoveredCard",t),onMouseLeave:()=>c("hoveredCard",null),onClick:u,onKeyUp:e=>{"Enter"===e.key&&u()},role:"link",tabIndex:-1,"aria-hidden":!s,children:Te(Fd,{href:o,className:"Card_module_inner__6a2b6800",tabIndex:s?0:-1,children:[!!r&&Te("div",{className:"Card_module_imageWrap__6a2b6800",children:Te("img",{className:"Card_module_image__6a2b6800",src:r,alt:""})}),Te("div",{className:"Card_module_body__6a2b6800",children:[Te(il,{size:Fs.MD,className:"Card_module_text__6a2b6800 Card_module_title__6a2b6800",children:a}),!!i&&Te(il,{weight:Hs.NORMAL,element:"p",className:"Card_module_text__6a2b6800 Card_module_detail__6a2b6800",children:i})]}),!!o&&Te("div",{className:"Card_module_popOutWrapper__6a2b6800",children:Te(Ds,{name:Rs.POP_OUT,className:"Card_module_popOut__6a2b6800"})})]})})};const zp=()=>{const e=gp(e=>e.cards.cardsMap),t=gp(e=>e.cards.displayedCard),n=gp(e=>e.displayList.cards),i=gp(e=>e.displayList.fullPlayerElement),o=e=>t===e&&!i;return n&&Te("div",{className:"Cards_module_cardsWrapper__e224f7b9",children:e.values().map(e=>Te(jp,{id:e.id,timecode:e.timecode,className:e.className,teaser:e.teaser,url:e.url,imageUrl:e.imageUrl,headline:e.headline,inView:o(e.timecode)},e.id))})};const Xp=({show:e})=>{const{buffering:t,currentTime:n,loadedTime:i,currentFragment:o}=gp(e=>e.playback),r=wn(n,o),a=wn(i,o);return e&&Te("div",{className:"TinyProgressBar_module_tinyBar__f8a567ff",children:Te("svg",{className:"TinyProgressBar_module_tinyBarSVG__f8a567ff",width:"100%",height:"100%",viewBox:"0 0 70 40",focusable:"false",children:[Te("defs",{children:[Te("clipPath",{id:"rounded-border",children:Te("rect",{height:"100%",width:"100%",x:"0",y:"0",rx:"5"})}),Te("pattern",{id:"tiny-buffer","data-tiny-buffer-pattern":!0,className:"TinyProgressBar_module_bufferPattern__f8a567ff",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10",viewBox:"0 0 10 10",children:[Te("line",{x1:"5",y1:"-1",x2:"-5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),Te("line",{x1:"10",y1:"-1",x2:"0",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),Te("line",{x1:"15",y1:"-1",x2:"5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"})]})]}),Te("g",{clipPath:"url(#rounded-border)",children:t?Te("rect",{className:"TinyProgressBar_module_buffer__f8a567ff",height:"3",width:"110%",x:"0",y:"37",fill:"url(#tiny-buffer)"}):Te(Pe,{children:[Te("rect",{className:"TinyProgressBar_module_loaded__f8a567ff","data-tiny-loaded":!0,height:"3",width:Sn(a),x:"0",y:"37"}),Te("rect",{className:"TinyProgressBar_module_played__f8a567ff","data-tiny-played":!0,height:"3",width:Sn(r),x:"0",y:"37"})]})})]})})};const Zp=({className:e,controlBarVisibilityHandlers:t})=>{const n=gp(e=>e.displayList.controlBar),i=gp(e=>e.liveEvent.isLiveEvent),o=gp(e=>e.liveEvent.isPlayable),r=gp(e=>e.liveEvent.isArchived),a=gp(e=>e.liveEvent.isEnded),s=gp(e=>e.liveEvent.dvrEnabled),l=gp(e=>e.setPlayback),c=gp(e=>e.controlBar.trailerButtonText),d=gp(e=>e.embed.playbar),u=gp(e=>e.appearance.playerSizeMode),{buttonState:p,setButtonState:_}=ku(),v=Bu(),m=!i||o||r||s&&a,f=u===Li.TINY||!d,h=p===Oi.TRAILER,g={[Oi.PLAY]:{icon:Rs.PLAY,onClick:()=>{l("paused",!1),_(Oi.PAUSE)},label:"Play",className:"PlayButton_module_playIcon__fc6bec57"},[Oi.PAUSE]:{icon:Rs.PAUSE,onClick:()=>{l("paused",!0),_(Oi.PLAY)},label:"Pause",className:"PlayButton_module_pauseIcon__fc6bec57"},[Oi.REPLAY]:{icon:Rs.REPLAY,onClick:()=>{l("paused",!1),_(Oi.PAUSE)},label:"Play",className:"PlayButton_module_replayIcon__fc6bec57"},[Oi.TRAILER]:{icon:Rs.PLAY,onClick:()=>{l("paused",!1)},label:"Play",className:"PlayButton_module_trailerIcon__fc6bec57"}}[p],b=bn("PlayButton_module_playButtonWrapper__fc6bec57",v===xu.CENTER&&"PlayButton_module_center__fc6bec57",h&&"PlayButton_module_trailer__fc6bec57"),E=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"PlayButton_module_playButton__fc6bec57",h&&"PlayButton_module_trailer__fc6bec57",js.focusable,e||"");return m&&Te(td,{visible:n,children:Te("div",{className:b,children:Te(su,{id:"play-button-tooltip",tooltipContent:g.label,className:`Tooltip_module_playTooltip__56441453 ${h?"Tooltip_module_trailerPlayTooltip__56441453":""}`,children:Te(Js,{className:E,onClick:g.onClick,icon:Te(Ds,{className:g.className,name:g.icon}),iconSize:xs.CUSTOM,color:Bs.CUSTOM,onTouchStart:t.onTouchStart,onTouchEnd:t.onTouchEnd,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,"data-play-button":!0,children:[Te(Xp,{show:f}),h&&Te("span",{className:"PlayButton_module_text__fc6bec57",children:c||"Watch Trailer"})]})})})})};const Jp=e=>{const t=gp(e=>e.displayList.menu);return(o.touch||t)&&Object.assign(e,{visible:!1}),Te(su,h({},e))},Qp=Oe((e,t)=>{let{className:n="",icon:i,children:o,tooltipLabel:r,hasTooltip:a=!0,id:s}=e,l=Ae(e,["className","icon","children","tooltipLabel","hasTooltip","id"]);const c=gp(e=>e.appearance.playerBreakpoint),d=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"ControlBarButton_module_controlBarButton__88a67ab4",js.focusable,n),u=["xl","xxl"].includes(c)?16:8;return a?Te(Jp,{id:s?`${s}-tooltip`:null,tooltipContent:r,margin:u,children:Te(Js,h(h({id:s,color:Bs.CUSTOM,size:xs.XS,ref:t,className:d,icon:i,iconSize:xs.CUSTOM},l),{},{children:o}))}):Te(Js,h({color:Bs.CUSTOM,size:xs.XS,ref:t,className:d,icon:i,iconSize:xs.CUSTOM},l))});const e_=()=>{const e=gp(e=>e.appearance.fullscreen),t=gp(e=>e.setAppearance),n=bn(Nn.FULLSCREEN,"FullscreenButton_module_fullscreen__e0e92a4f"),i=e?"Exit full screen":"Fullscreen",o=e?Rs.EXIT_FULLSCREEN:Rs.ENTER_FULLSCREEN;return Te(Qp,{id:"fullscreen-control-bar-button",onClick:()=>t("fullscreen",!e),className:n,icon:Te(Ds,{name:o}),tooltipLabel:i,"data-fullscreen-button":!0})};const t_=Oe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=Iu(()=>t(!e));return Te(Qp,{id:"prefs-control-bar-button",ref:n,className:`${Nn.VP_PREFS} PrefsButton_module_prefsButton__61ec289e`,"aria-expanded":e,"aria-haspopup":"true",icon:Te(Ds,{name:Rs.GEAR,className:"PrefsButton_module_gearIcon__61ec289e"}),onClick:i,onKeyDown:o,tooltipLabel:"Settings","data-prefs-button":!0})}),n_=()=>{const e=gp(e=>e.appearance.pictureInPictureActive),t=gp(e=>e.setAppearance),n=e?"Exit Picture-in-Picture":"Picture-in-Picture",i=e?Rs.EXIT_PICTURE_IN_PICTURE:Rs.ENTER_PICTURE_IN_PICTURE;return Te(Qp,{id:"pip-control-bar-button",className:Nn.PIP,icon:Te(Ds,{name:i,className:e?Nn.ON:""}),onClick:()=>t("pictureInPictureActive",!e),tooltipLabel:n,"data-pip-button":!0})},i_=Oe((e,t)=>{const n=gp(e=>e.playback.volume),i=gp(e=>e.playback.muted),o=i?"Unmute":"Mute",{toggleMuted:r}=Vu();return Te(Qp,{ref:t,onClick:r,icon:Te(Ds,!i&&n>0?{name:Rs.VOLUME_ON_FILLED,"data-volume-icon":!0}:{name:Rs.VOLUME_OFF_FILLED,"data-volume-muted-icon":!0}),"aria-label":o,"aria-keyshortcuts":"m","data-volume-button":!0,hasTooltip:!1})});const o_=()=>{const e=gp(e=>e.controlBar.vimeoLogoUrl),t=gp(e=>e.appearance.playerBreakpoint),n=gp(e=>e.appearance.playerSizeMode),i=[Li.MINI,Li.TINY].includes(n)||[Ms.XS,Ms.XXS].includes(t);return Te(Fd,{className:bn(Nn.LOGO,"VimeoLogo_module_vimeoLogo__3ab50b3e",js.focusable),href:e,variant:"minimal","data-vimeo-logo":!0,"aria-label":"Watch on Vimeo",children:Te(Ds,i?{name:Rs.VIMEO_SMALL,"data-vimeo-small-icon":!0}:{name:Rs.VIMEO,"data-vimeo-icon":!0})})},r_=()=>{const e=gp(e=>e.appearance.showAirPlayPicker),t=gp(e=>e.setAppearance),n=e?"Turn off AirPlay":"Choose an AirPlay device";return Te(Qp,{onClick:()=>t("showAirPlayPicker",!e),className:Nn.AIRPLAY,"aria-label":n,tooltipLabel:"AirPlay","data-airplay-button":!0,icon:Te(Ds,{name:Rs.AIRPLAY,className:e?Nn.ON:""})})},a_=Oe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=Iu(()=>t(!e));return Te(Qp,{ref:n,className:Nn.VP_CHAPTER_BUTTON,onClick:i,onKeyDown:o,"aria-expanded":e,icon:Te(Ds,{name:Rs.CHAPTERS}),tooltipLabel:"Chapters","data-chapter-button":!0,id:"chapters-control-bar-button"})}),s_=Oe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=gp(e=>e.captions.activeTextTrackId),{onClick:o,onKeyDown:r}=Iu(()=>t(!e)),a=i&&"off"!==i?Rs.CC_FILLED:Rs.CC;return Te(Qp,{id:"cc-control-bar-button",ref:n,className:Nn.CC,"aria-haspopup":"true","aria-expanded":e,icon:Te(Ds,{name:a}),onClick:o,onKeyDown:r,tooltipLabel:"CC/Subtitles","data-cc-button":!0})}),l_=()=>{const e=gp(e=>e.setAppearance),t=gp(e=>e.appearance.stereoscopicEnabled),n=t?"Disable stereoscopic playback":"Enable stereoscopic playback";return Te(Qp,{className:Nn.STEREOSCOPIC,onClick:()=>e("stereoscopicEnabled",!t),"aria-label":n,icon:Te(Ds,{name:Rs.STEREOSCOPIC}),tooltipLabel:"Stereoscopic","data-stereoscopic-button":!0})};const c_=()=>{const e=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"ChromecastButton_module_chromecastButton__9ec33deb","ControlBarButton_module_controlBarButton__88a67ab4",js.focusable,Nn.VP_CAST_BUTTON);return(()=>{const[e,t]=Se(!1);ke(()=>{setTimeout(()=>t(!0),500)},[])})(),Te(su,{id:"chromecast-control-bar-button-tooltip",tooltipContent:"GoogleCast",children:Te("button",{className:e,is:"google-cast-button","data-chromecast-button":!0})})},d_=()=>{const e=Mu(),t=gp(e=>e.displayList.transcript),n=gp(e=>e.toggleDisplayList),{onClick:i,onKeyDown:o}=Iu(()=>{n("transcript"),e(Yo.EMBEDDED_TRANSCRIPT_CLICK,{name:t?"exit_embed_transcript":"open_embed_transcript",copy:"Transcript",location:"control_bar",element:"transcript_button",current_transcript_language:""})}),r=Te(Ds,{name:t?Rs.TRANSCRIPT_ON:Rs.TRANSCRIPT_OFF}),a=t?[xn.TRANSCRIPT_VIEWER,Mn.RIGHT_CONTENT_AREA].join(" "):Mn.RIGHT_CONTENT_AREA;return Te(Qp,{id:xn.TRANSCRIPT_CONTROL_BAR_BUTTON,onClick:i,onKeyDown:o,icon:r,tooltipLabel:"Transcript","aria-controls":a,"aria-expanded":t})};const u_=({className:e})=>{const t=gp(e=>e.displayList.controlBar),n=gp(e=>e.appearance.playerSizeMode)===Li.TINY,i=gp(e=>e.embed.customLogo),o=gp(e=>e.displayList.ad),{customLogoUrl:r,customLogoImg:a,customLogoSticky:s}=gp(e=>e.embed.customLogoFields),l=gp(e=>e.user.ownerName),c=i&&!n&&!o,d=bn(Nn.CUSTOM_LOGO,"CustomLogo_module_customLogo__29e363fc",r?"CustomLogo_module_link__29e363fc":"",js.focusable,e);return c&&Te(td,{visible:s||t,children:Te(cu,{classNames:d,imgClassNames:"CustomLogo_module_customLogoImg__29e363fc",url:r,img:a,imgAlt:l})})},p_=({className:e,marker:t})=>{const n=gp(e=>e.setPlayback),i=gp(e=>e.playback.currentFragment),o=(t.startTime-i.startTime)/i.duration*100,r=e=>n("currentTime",e.path[0].dataset.time),a="Seek to "+Math.round(100*t.startTime)/100+" seconds.";return Te("div",{id:`cuepoint-${t.id}`,className:e,style:{left:`${o}%`},"data-time":t.startTime,role:"button","aria-label":a,tabIndex:0,onClick:r,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&r(e)},"data-cue-point-marker":!0})};const __=()=>{const e=gp(e=>e.playback.currentFragment),t=gp(e=>e.cuePoints.cuePoints),n=bn("CuePointMarkers_module_cuePoints__c121afd2",js.focusableMarker,Nn.CUEPOINT),i=t.filter(t=>e.startTime<=t.time&&t.time<=e.endTime).map(e=>({id:e.id,startTime:e.time}));return Te(Pe,{children:!!i.length&&i.map(e=>Te(p_,{className:n,marker:e},e.startTime))})};const v_=()=>{const e=gp(e=>e.playback.currentTime),t=gp(e=>e.playback.currentFragment),n=gp(e=>e.liveEvent.isLiveEvent),i=gp(e=>e.liveEvent.isArchived),o=gp(e=>e.playback.liveEdgeTime),r=gp(e=>e.playback.liveTailTime),a=gp(e=>e.playback.atLiveEdge),s=Ln(e,t),l={progressBar:"Progress Bar",ariaTextVOD:ei(s)+" of "+ei(t.duration),ariaTextLiveEdge:"Live time at "+ei(o),ariaTextLiveDVR:ei(Math.abs(o-s))+" behind Live"};let c=l.ariaTextVOD,d=0,u=t.duration;return n&&!i&&(c=a?l.ariaTextLiveEdge:l.ariaTextLiveDVR,d=Math.round(r),u=Math.round(o)),Te("div",{className:`FocusTarget_module_focusTarget__02e194b8 ${js.focusable}`,role:"slider","aria-label":l.progressBar,"aria-valuemin":d,"aria-valuemax":u,"aria-valuenow":Math.round(s),"aria-valuetext":c,tabIndex:0,"data-progress-bar-focus-target":!0})};const m_=({hotspot:e,setTabFocusedHotspotMarker:t,setHoverFocusedHotspotMarker:n})=>{const i=gp(e=>e.setPlayback),o=gp(e=>e.playback.currentFragment),r=(e.start-o.startTime)/o.duration,a={visibleLabel:e.visibleLabel,ariaLabel:e.ariaLabel,id:e.hotspotId,startTime:e.start,left:r},s=bn("HotspotMarker_module_interactiveMarker__a53a1a54",Nn.VP_INTERACTIVE_MARKER,js.focusableMarker);function l(e){i("currentTime",e.path[0].dataset.time,{action:e.type,seekType:"interactive-marker"})}return Te("div",{className:s,role:"button",style:{left:Sn(r,!1)},"aria-label":e.ariaLabel,"data-time":e.start,tabIndex:0,onClick:l,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&l(e)},onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),onFocus:()=>t(a),onBlur:()=>t(null),"data-hotspot-marker":!0})},f_=({hotspots:e,setHoverFocusedHotspotMarker:t,setTabFocusedHotspotMarker:n})=>Te(Pe,{children:e.map(e=>Te(m_,{hotspot:e,setTabFocusedHotspotMarker:n,setHoverFocusedHotspotMarker:t},e.start))});const h_=({time:e,left:t,visible:n=!0,disabled:i=!1})=>Te(td,{visible:n,children:Te("div",{className:"Timecode_module_timecodeContainer__6a968513",role:"presentation",style:{left:t},"aria-hidden":"true","data-progress-bar-timecode-container":!0,children:Te("div",{className:`Timecode_module_timecode__6a968513 ${i?"Timecode_module_disabled__6a968513":""}`,"data-progress-bar-timecode":!0,children:ei(e)})})}),g_=()=>{const e=gp(e=>e.playback.currentTime),t=gp(e=>e.playback.liveEdgeTime),n=gp(e=>e.playback.liveTailTime),i=gp(e=>e.playback.atLiveEdge),o=gp(e=>e.playback.currentFragment),r=gp(e=>e.playback.playInitiated),a=gp(e=>e.playback.paused),s=gp(e=>e.playback.buffering),l=gp(e=>e.liveEvent.isLiveEvent),c=gp(e=>e.liveEvent.dvrEnabled),d=gp(e=>e.liveEvent.isEnded),u=gp(e=>e.liveEvent.isArchived),[p,_]=Se(l?t:o.duration),v=l&&!u?1:0,[m,f]=Se(v);ke(()=>{const a=Ln(e,o);if(l)if(c){if(c){const a=d&&!r&&0===e,s=u&&0!==o.duration;a?(_(o.duration),f(0)):s?(_(e),f(e/o.duration)):i?(f(1),_(e)):(f(On(e,n,t)),_(e-t))}}else u&&(r||0!==e)?(f(wn(e,o)),_(a)):u?(_(o.duration),f(v)):(f(1),_(e));else r||0!==a?(f(wn(e,o)),_(a)):(_(o.duration),f(v))},[e,r,o,l,d,u,t,i]);const h=(!l||u||c&&0!==t||!a&&!s&&0!==t)&&!isNaN(p);return Te(h_,{time:p,left:Sn(m,!1),disabled:l&&!c,visible:h})};const b_={xs:120,md:160,xl:200},E_=({visible:e=!1,mousePercent:t=0,progressBarWidth:n,isMousedOverProgress:i=!1,tabOrHoverFocusedHotspotMarker:o=null})=>{const r=gp(e=>e.displayList.menu),a=gp(e=>e.playback.currentFragment),s=gp(e=>e.playback.duration),l=gp(e=>e.playback.liveEdgeTime),c=gp(e=>e.playback.liveTailTime),d=gp(e=>e.liveEvent.isLiveEvent),u=gp(e=>e.liveEvent.dvrEnabled),p=gp(e=>e.liveEvent.isArchived),_=gp(e=>e.appearance.boundingClientRect),v=gp(e=>e.appearance.isVerticalVideo),m=gp(e=>e.appearance.playerBreakpoint),f=gp(e=>e.verifyConfig),g=gp(e=>e.chapters.chapters),b=gp(e=>e.embed.chapters),E=gp(e=>e.controlBar.thumbnailPreview),y=gp(e=>e.playback.isSegmentedPlaybackEnabled),[C,T]=Se({width:0,height:0,backgroundImage:"",backgroundSize:"",backgroundPosition:""}),[L,w]=Se(!1),A=_.height>300&&n>=185,S=0!==l&&!isNaN(l);let I=A&&!r&&(!d||u&&S)&&e;const[k,P]=Se(0);i?P(t):o?P(o.left):I=!1;const O=In(k,a);let R;R=u?p&&0!==a.duration?kn(k,a):((e,t,n)=>Pn(e,t,n)-n)(k,c,l):kn(k,a),isNaN(R)&&(I=!1);let N="";if(g.length&&b&&!y){const e=g.find(e=>e.startTime<=O&&e.endTime>=O);N=(null==e?void 0:e.text)||""}const D=(null==o?void 0:o.visibleLabel)||"",M=((e,t)=>b_[e]*(t?9/16:1))((e=>{switch(e){case Ms.XL:case Ms.XXL:return"xl";case Ms.SM:case Ms.MD:case Ms.LG:return"md";default:return"xs"}})(m),v),x=M/(null==E?void 0:E.frame_width);return ke(()=>{!L&&A&&e&&E&&f().then(()=>_r(E.url).then(()=>{w(!0),T({width:E.frame_width*x,height:E.frame_height*x,backgroundImage:`url(${E.url})`,backgroundSize:`${E.width*x}px ${E.height*x}px`,backgroundPosition:""})})).catch(()=>{})},[e,L,A,E,x,f]),ke(()=>{w(!1)},[E]),ke(()=>{E&&T(e=>h(h({},e),{},{width:E.frame_width*x,height:E.frame_height*x,backgroundSize:`${E.width*x}px ${E.height*x}px`}))},[m]),ke(()=>{if(E&&A){let e=0,t=0;if(E){const n=s/E.frames,i=Math.min(E.frames-1,Math.ceil(O/n)),o=i%E.columns,r=Math.floor(i/E.columns);e=-o*E.frame_width*x,t=-r*E.frame_height*x}T(n=>h(h({},n),{},{backgroundPosition:`${e}px ${t}px`}))}},[k,_,E,A,s,x,O]),Te(td,{visible:I,children:Te("div",{className:`${Nn.THUMB_PREVIEW} ThumbnailPreview_module_thumbnailPreview__c559a995`,role:"presentation","aria-hidden":"true",style:{left:Sn(k,!1),maxWidth:M},children:[!!C.backgroundImage&&L&&Te("div",{className:`${Nn.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__c559a995`,style:{width:`${C.width}px`,height:`${C.height}px`,backgroundImage:C.backgroundImage,backgroundSize:C.backgroundSize,backgroundPosition:C.backgroundPosition}}),Te("div",{className:"ThumbnailPreview_module_thumbnailPreviewText__c559a995",children:[D&&Te("span",{className:"ThumbnailPreview_module_text__c559a995",children:D}),D&&N&&Te("span",{className:"ThumbnailPreview_module_separator__c559a995"}),N&&Te("span",{className:"ThumbnailPreview_module_text__c559a995",children:N}),Te("span",{className:"ThumbnailPreview_module_time__c559a995",children:ei(R)})]})]})})};const y_=({segment:e,isExpanded:t})=>{const n=gp(e=>e.playback.currentFragment),i=gp(e=>e.playback.loadedTime),o=gp(e=>e.playback.currentTime),r=gp(e=>e.playback.liveEdgeTime),a=gp(e=>e.playback.liveTailTime),s=gp(e=>e.playback.atLiveEdge),l=gp(e=>e.liveEvent.isLiveEvent),c=gp(e=>e.liveEvent.dvrEnabled),d=gp(e=>e.liveEvent.isPlayable),u=gp(e=>e.liveEvent.isArchived),p=gp(e=>e.liveEvent.isEnded),_=gp(e=>e.playback.playInitiated),v=l&&!u,m=0!==r&&!isNaN(r);let f,h;const g=l?1:((e,t)=>(e.endTime-e.startTime)/t.duration)(e,n);if(l)if(c){if(c){const t=p&&!_&&0===o,l=u&&0!==n.duration;t?(f=0,h=0):l?(f=An(i,e),h=An(o,e)):s?(f=1,h=1):(f=On(i,a,r),h=On(o,a,r))}}else u?(f=An(i,e),h=An(o,e)):(f=d?1:0,h=0);else f=An(i,e),h=An(o,e);const b=Sn(g,!1),E=Sn(h,!1),y=Sn(f),C=bn("ChapterSegment_module_chapterWrapper__d4d891b5",v&&(!c||!m)&&"ChapterSegment_module_disabled__d4d891b5",t&&"ChapterSegment_module_expanded__d4d891b5"),T=e.startTime===n.startTime?0:2;return Te("div",{className:C,style:{width:`calc(${b} - ${T}px)`},children:Te("div",{className:"ChapterSegment_module_chapter__d4d891b5",children:[Te("div",{className:`ChapterSegment_module_loaded__d4d891b5 ${n.duration<60?"ChapterSegment_module_shortVideo__d4d891b5":""}`,style:{width:y},"data-progress-bar-loaded":!0}),Te("div",{className:"ChapterSegment_module_played__d4d891b5",style:{width:E},"data-progress-bar-played":!0})]})})};const C_=({hoveredChapterId:e})=>{const t=gp(e=>e.playback.currentFragment),n=gp(e=>e.chapters.chapters),i=gp(e=>e.embed.chapters),o=gp(e=>e.appearance.playerBreakpoint),r=gp(e=>e.playback.isSegmentedPlaybackEnabled);let a;return a=o===Ms.XXS||!i||r?[{startTime:t.startTime,endTime:t.endTime}]:((e,t)=>{const n=Rn(e,t);let i=[];return 0===n.length?i.push({startTime:t.startTime,endTime:t.endTime}):n.forEach((e,o)=>{let r=e.startTime,a=e.endTime;0===o&&e.startTime>t.startTime&&i.push({startTime:t.startTime,endTime:e.startTime}),0===o&&e.startTime<t.startTime&&(r=t.startTime),o===n.length-1&&e.endTime>t.endTime&&(a=t.endTime),i.push({startTime:r,endTime:a,chapterId:e.startTime})}),i})(n,t),Te("div",{className:"ChapterSegments_module_chapterSegmentsWrapper__6e982b76",children:a.map(t=>Te(y_,{segment:t,isExpanded:t.chapterId===e},t.startTime))})};const T_=({hoveredChapterId:t})=>{const n=gp(e=>e.chapters.chapters),i=gp(e=>e.embed.chapters),r=gp(e=>e.playback.currentFragment),a=gp(e=>e.playback.liveEdgeTime),s=gp(e=>e.playback.liveTailTime),l=gp(e=>e.liveEvent.isLiveEvent),c=gp(e=>e.liveEvent.isArchived),d=gp(e=>e.liveEvent.dvrEnabled),u=gp(e=>e.playback.atLiveEdge),p=gp(e=>e.setPlayback),_=gp(e=>e.element),v=gp(e=>e.interactive.hotspots),m=gp(e=>e.interactive.showMarkers),f=Mu(),[g,b]=Se(!1),[E,y]=Se(!1),[C,T]=Se(0),[w,A]=Se(null),[S,I]=Se(null),[k,P]=Se(null),O=Ie(null),[R,N]=Se(Cn(null==O?void 0:O.current)),D=R.rightOffsetValue-R.leftOffsetValue,M=L(()=>{N(Cn(null==O?void 0:O.current))},300),x=Ie(new ne(M)),B=Ie(u),V=Ie(c);ke(()=>{B.current=u,V.current=c},[u,c]),ke(()=>{const e=x.current,t=null==O?void 0:O.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]);const U=(e,t=3)=>Ct(ht((e-R.leftOffsetValue)/D,0,1),t),F=e=>{e?_.classList.add("scrubbing"):_.classList.remove("scrubbing")};function H(e){if(2===(null==e?void 0:e.button)||(null==e?void 0:e.ctrlKey))return;if(p("scrubbing",!0),F(!0),"pointerdown"===e.type||"MSPointerDown"===e.type){A(e.pointerId);try{e.target.msSetPointerCapture?e.target.msSetPointerCapture(w):e.target.setPointerCapture(w)}catch(Te){}document.addEventListener("pointermove",q),document.addEventListener("pointerup",G)}else"touchstart"===e.type?(document.addEventListener("touchmove",q),document.addEventListener("touchend",G)):(document.addEventListener("mousemove",q),document.addEventListener("mouseup",G));const t=Tn(e),o=U(t),l=!d||c&&0!==r.duration?In(o,r):Pn(o,s,a);p("currentTime",l),(e=>{if(!n.length||!i)return;const t=((e,t)=>t.reduce((t,n)=>{if(null===t)return n;const i=n.startTime-e,o=t.startTime-e;return Math.abs(i)>Math.abs(o)?t:n},null))(e,n);if(!t)return;const o=t.startTime,a=e-o,s=Math.abs(a)<=5,l=Rn(n,r);f(Yo.CHAPTER_SEGMENT_CLICK,{seek_event_start_time:e,is_chapter_seek:s,nearest_chapter_start_time:o,chapter_seek_event_delta:a,total_no_chapters_at_seek:n.length,fragment_no_chapters_at_seek:l.length})})(l)}function q(e){if(w&&w!==e.pointerId||!1===e.isPrimary)return;const t=Tn(e),n=U(t),i=!d||c&&0!==r.duration?In(n,r):Pn(n,s,a);p("currentTime",i),T(n)}function G(e){const t=e.type;"pointerup"===t||"MSPointerUp"===t?(document.removeEventListener("pointermove",q),document.removeEventListener("pointerup",G),A(null)):"touchend"===t?(document.removeEventListener("touchmove",q),document.removeEventListener("touchend",G)):(document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",G)),p("scrubbing",!1),F(!1),d&&!V.current&&f(B.current?Yo.SEEK_TO_LIVE_EDGE:Yo.SEEK_BEHIND_LIVE_EDGE)}ke(()=>()=>{document.removeEventListener("touchmove",q),document.removeEventListener("touchend",G),document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",G),document.removeEventListener("pointermove",q),document.removeEventListener("pointerup",G)},[]);let W={};(!l||d&&a||c)&&(W=o.pointerEvents?{onPointerDown:H}:{onTouchStart:H,onMouseDown:H});const Y=function(t,n,i){let o=1;return(e(t).sort((e,t)=>e.start-t.start).reduce((e,t)=>{let r=Object.assign({},t);if(!(n.startTime<=r.start&&r.start<=n.endTime))return e;let a="Hotspot: "+r.name;if(r.visibleLabel=a,r.ariaLabel=a,r.leftPositionInProgressBar=(r.start-n.startTime)/n.duration*100,!e.length)return e.push(r),e;const s=e.length-1,l=function(e,t,n,i){const o=Bo(e,n,i),r=Bo(t,n,i);return Math.floor(r-o)}(e[s].start-n.startTime,r.start-n.startTime,n.duration,i);return!isNaN(l)&&l<=5?(o+=1,e[s].visibleLabel=o+" hotspots",e[s].ariaLabel=o+" hotspots: "+(e[s].name+=`, ${r.name}`)):isNaN(l)||(o=1,e.push(r)),e},[]))}(v,r,D),$=!!Y.length&&m;return Te("div",h(h({className:"ProgressBar_module_progressBarContainer__4c917885",ref:O,onMouseEnter:()=>{N(Cn(null==O?void 0:O.current)),y(!0)},onMouseMove:e=>{const{clientX:t}=e,n=U(t);T(n),b(!1),I(null)},onMouseLeave:()=>y(!1),onFocus:()=>b(!0),onBlur:()=>b(!1),role:"presentation"},W),{},{children:Te("div",{className:`${Nn.VP_PROGRESS} ProgressBar_module_progressBar__4c917885`,"data-progress-bar":!0,children:[Te(v_,{}),Te(C_,{hoveredChapterId:t}),Te(__,{}),$&&Te(f_,{hotspots:Y,setTabFocusedHotspotMarker:I,setHoverFocusedHotspotMarker:P}),Te(E_,{visible:E||g,mousePercent:C,isMousedOverProgress:E,progressBarWidth:D,tabOrHoverFocusedHotspotMarker:S||k}),Te(g_,{})]})}))};const L_=({setMenuDisplayed:e})=>{const t=gp(e=>e.setDisplayList);return Te(Js,{className:`${Nn.VP_MENU_INFO} DebugPanelButton_module_debugPanelButton__b625b798`,onClick:()=>{e(!1),t("debugPanel",!0)},icon:Te(Ds,{className:"DebugPanelButton_module_debugPanelButtonIcon__b625b798",name:Rs.INFO_CIRCLE}),color:Bs.CUSTOM,children:Te("span",{className:"DebugPanelButton_module_debugPanelButtonText__b625b798",children:"Debug log"})})},w_={[zd.EMPTY]:()=>Te(Pe,{}),[zd.PREFS]:({setPanel:e,setMenuDisplayed:t})=>{const n=gp(e=>e.embed.speedChangeEnabled),i=gp(e=>e.embed.multipleAudioTracks),r=gp(e=>e.embed.quality),a=gp(e=>e.playback.qualities),s=gp(e=>e.playback.currentQuality),l=gp(e=>e.playback.playbackRates),c=gp(e=>e.playback.audioTracks),d=r&&(null==a?void 0:a.length)>0,u=i&&(null==c?void 0:c.length)>1,p=(e=[])=>{var t;return null==(t=e.find(e=>e.active))?void 0:t.label},_={quality:{label:"Quality",value:s,onSelect:()=>e(zd.QUALITY)},speed:{label:"Speed",value:p(l),onSelect:()=>e(zd.SPEED)},audio:{label:"Audio",value:p(c),onSelect:()=>e(zd.AUDIO)}};return Te(Pe,{children:[d&&Te(Zd,h({},_.quality)),n&&Te(Zd,h({},_.speed)),u&&Te(Zd,h({},_.audio)),o.touch&&Te(Pe,{children:[Te(Yd,{buffer:!0}),Te(L_,{setMenuDisplayed:t})]})]})},[zd.QUALITY]:()=>{const{qualities:e}=gp(e=>e.playback),t=gp(e=>e.setPlayback);return Te(tu,{items:e,onSelect:e=>t("qualities",e.currentTarget.dataset.id)})},[zd.SPEED]:()=>{const{playbackRates:e}=gp(e=>e.playback),t=gp(e=>e.setPlayback);return Te(tu,{items:e,onSelect:e=>t("playbackRates",e.currentTarget.dataset.id)})},[zd.AUDIO]:()=>{var e;const t=gp(e=>e.playback.audioTracks),n=gp(e=>e.setPlayback),i=Mu(),o=Ie(!1),r=Ie(null==(e=t.find(e=>e.enabled))?void 0:e.label);return ke(()=>(i(Yo.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_opened",has_selected_track:o.current,initial_track:r.current}),()=>{i(Yo.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_closed",has_selected_track:o.current,initial_track:r.current})}),[i]),Te(tu,{items:t,onSelect:e=>{n("audioTracks",e.currentTarget.dataset.id),o.current=!0,i(Yo.MULTI_AUDIO_TRACK_CLICK,{event_name:"select_audio_track",track_selected:e.currentTarget.innerText,has_selected_track:o.current,initial_track:r.current})}})}},A_={[zd.EMPTY]:()=>Te(Pe,{}),[zd.QUALITY]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Quality",onBack:()=>e(zd.PREFS),setMenuDisplayed:t}),[zd.SPEED]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Speed",onBack:()=>e(zd.PREFS),setMenuDisplayed:t}),[zd.PREFS]:({setMenuDisplayed:e})=>gp(e=>e.appearance.isMenuBlockingUI)&&Te($d,{title:"Settings",setMenuDisplayed:e}),[zd.AUDIO]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Audio",onBack:()=>e(zd.PREFS),setMenuDisplayed:t})},S_=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>{const o=zd.PREFS,[r,a]=Se(o),s=gp(e=>e.playback.playbackRates);Ud({isMenuDisplayed:e,defaultPanel:o,setPanel:a});const l=(e=>w_[e]||w_[zd.EMPTY])(r),c=(e=>A_[e]||A_[zd.EMPTY])(r),d=r===zd.SPEED?s.length:null;return Te(Wd,{ariaAttributes:{ariaLabel:"Settings"},type:jd.PREFS,isMenuDisplayed:e,setMenuDisplayed:t,panel:r,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:xi.PrefsMenu,panelContent:Te(l,{setPanel:a,setMenuDisplayed:t}),headerContent:Te(c,{setPanel:a,setMenuDisplayed:t}),resizeDependencies:d})},I_=({setMenuDisplayed:e})=>gp(e=>e.appearance.isMenuBlockingUI)&&Te($d,{title:"Chapters",setMenuDisplayed:e});const k_=({linkUrl:e,hoverStyles:t,chapterId:n})=>{const i=Ie(null),r=Ie(null),[a,s]=Se(!1),l=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"shared_module_baseButtonStyles__fb28e265",o.touch&&"CopyLinkButton_module_touchDevice__cb8fea67","CopyLinkButton_module_copyLinkButton__cb8fea67",t),c=()=>{clearTimeout(i.current),clearTimeout(r.current)},d=Mu(),u=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(t){return t.preventDefault(),t.stopPropagation(),function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(_n(e),(function(){d(Yo.SHARE_CHAPTER,{chapter_id:n}),s(!0),c(),i.current=setTimeout(()=>s(!1),2e3)}))}));return Te(su,{id:"copy-link-button-tooltip",tooltipContent:a||o.touch?Te("span",{className:"CopyLinkButton_module_linkCopied__cb8fea67",children:[Te(Ds,{name:Rs.CHECKMARK,className:"CopyLinkButton_module_linkCopiedIcon__cb8fea67"}),"Link copied"]}):"Copy link",visible:a,position:au.LEFT,margin:4,children:Te(Js,{icon:Te("div",{className:"CopyLinkButton_module_shareIconContainer__cb8fea67",children:Te(Ds,{name:Rs.LINK})}),iconSize:xs.MD,size:xs.CUSTOM,className:l,onMouseLeave:()=>{c(),r.current=setTimeout(()=>s(!1),150)},onClick:u})})};const P_=({startTime:e,id:t,chapterId:n,active:i,label:o,onMouseEnter:r,onMouseLeave:a,onSelect:s})=>{const{onClick:l,onKeyDown:c}=Iu(s),d=bn("ChaptersPanelMenuOption_module_chapterListItem__3b0d335e",i&&"ChaptersPanelMenuOption_module_active__3b0d335e"),u=bn("shared_module_baseButtonStyles__fb28e265",Dn.EXCLUDE_GLOBAL_BUTTON_STYLES),p=gp(e=>e.embed.parentUrl),_=gp(e=>e.chapters.chapterShareBaseUrl),v=gp(e=>e.debug.clipId),m=p?function(e,t,n){const[i]=n.split("#");return`${i}#vimeo_chapter_${e}=${t}`}(v,n,p):function(e,t){if(!t)return"";const[n]=t.split("#");return`${n}#chapter=${e}`}(n,_);return Te("li",{className:d,children:[Te("button",{"data-id":t,"data-testid":"chapter-list-item-button",role:"menuitemradio",tabIndex:0,"aria-checked":i,className:u,onClick:l,onKeyDown:c,onMouseDown:e=>e.preventDefault(),onMouseEnter:r,onMouseLeave:a,children:Te("div",{className:"ChaptersPanelMenuOption_module_chapterInfoContainer__3b0d335e",children:[Te("div",{className:"ChaptersPanelMenuOption_module_chapterTitleText__3b0d335e",children:o}),Te("div",{className:"ChaptersPanelMenuOption_module_chapterStartTime__3b0d335e",children:ei(e)})]})}),m&&Te(k_,{linkUrl:m,chapterId:n,hoverStyles:"ChaptersPanelMenuOption_module_copyLinkButton__3b0d335e"})]},t)},O_=({setMenuDisplayed:e,onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n})=>{const i=gp(e=>e.events),o=gp(e=>e.chapters.chapters),r=gp(e=>e.chapters.activeCueId),a=o.map(e=>({label:e.text,id:e.cueId,active:e.cueId===r,startTime:e.startTime,chapterId:e.chapterId}));return Te(tu,{items:a,onSelect:t=>{const n=t.currentTarget.dataset.id;"string"==typeof n&&i.fire(Wt._chapterSeekAttempted,parseFloat(n)+.001,"menu"),e(!1)},onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n,itemComponent:P_})},R_=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r})=>Te(Wd,{type:jd.CHAPTERS,isMenuDisplayed:e,setMenuDisplayed:t,panel:zd.CHAPTERS,buttonRef:n,progressBarAndButtonsRef:i,panelContent:Te(O_,{setMenuDisplayed:t,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r}),headerContent:Te(I_,{setMenuDisplayed:t})});const N_=()=>{const e=gp(e=>e.captions.fontSize),t=gp(e=>e.captions.fontFamily),n=gp(e=>e.captions.fontOpacity),i=gp(e=>e.captions.color),o=gp(e=>e.captions.bgColor),r=gp(e=>e.captions.bgOpacity),a=gp(e=>e.captions.windowOpacity),s=gp(e=>e.captions.windowColor),l=gp(e=>e.captions.edgeStyle),c=gp(e=>e.appearance.videoHeight);return Te("div",{className:"PreviewWindow_module_previewWindow__ca393743",children:Te("div",{className:"PreviewWindow_module_checkeredBackground__ca393743",children:Te(mu,{cues:[{html:"This is a preview\n of a caption"}],className:"PreviewWindow_module_previewCaption__ca393743",fontSize:e,fontFamily:t,fontOpacity:n,color:i,bgColor:o,bgOpacity:r,windowOpacity:a,windowColor:s,edgeStyle:l,height:c})})})};const D_=({updateMetricsPayload:e})=>{const t=gp(e=>e.resetCaptionsStyles);return Te(Kd,{element:"button",className:`${Dn.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__bc4bf57a ${js.focusable}`,onSelect:()=>{t(),e({has_reset_all:!0,final_action_reset_all:!0})},withActive:!1,styled:!1,children:Te("span",{children:"Reset all"})})},M_={[zd.EMPTY]:()=>Te(Pe,{}),[zd.LANGUAGES]:({setPanel:e,updateMetricsPayload:t})=>{const n=gp(e=>e.captions.textTracks),i=gp(e=>e.setCaptions),{isMenuBlockingUI:o,isMenuVerticalVideoMode:r}=gp(e=>e.appearance),a=o||r,s={customize:{label:"Customize",onSelect:()=>{e(zd.CUSTOMIZE),t({has_clicked_customize:!0})}},preview:{label:"Preview",onSelect:()=>e(zd.PREVIEW)}};return Te(Pe,{children:[Te(tu,{items:n,onSelect:e=>{i("activeTextTrackId",e.currentTarget.dataset.id)}}),Te(Yd,{buffer:!0}),Te(Zd,h({},s.customize)),a&&Te(Pe,{children:[Te(Yd,{buffer:!0}),Te(Zd,h({},s.preview))]})]})},[zd.CUSTOMIZE]:({setPanel:e,updateMetricsPayload:t})=>{const n=gp(e=>e.appearance.isMenuBlockingUI),i=gp(e=>e.appearance.isMenuVerticalVideoMode),o=n||i,r={font:{label:"Font",onSelect:()=>{e(zd.FONT),t({has_clicked_font:!0})},size:Xd.SMALL},background:{label:"Background",onSelect:()=>{e(zd.BACKGROUND),t({has_clicked_background:!0})},size:Xd.SMALL},window:{label:"Window",onSelect:()=>{e(zd.WINDOW),t({has_clicked_window:!0})},size:Xd.SMALL},preview:{label:"Preview",onSelect:()=>e(zd.PREVIEW)}};return Te(Pe,{children:[Te(Zd,h({},r.font)),Te(Zd,h({},r.background)),Te(Zd,h({},r.window)),Te(D_,{updateMetricsPayload:t}),o&&Te(Pe,{children:[Te(Yd,{buffer:!0}),Te(Zd,h({},r.preview))]})]})},[zd.FONT]:({setPanel:e,updateMetricsPayload:t})=>{const n=gp(e=>e.setCaptions),i=gp(e=>e.captions.fontSize),o=gp(e=>e.captions.fontFamily),r=gp(e=>e.captions.fontOpacity),a=gp(e=>e.captions.color),s=gp(e=>e.captions.edgeStyle),l=gp(e=>e.appearance.isMenuBlockingUI),c=gp(e=>e.appearance.isMenuVerticalVideoMode),d=l||c,u=sa(),p=()=>t({has_changed_font:!0,has_customized:!0,final_action_reset_all:!1}),_={fontFamily:{label:u.fontFamily.title,items:yn(u.fontFamily.items,o),onSelect:e=>{n("fontFamily",e.currentTarget.dataset.id),p()}},color:{label:u.color.title,items:yn(u.color.items,a),onSelect:e=>{n("color",e.currentTarget.dataset.id),p()}},fontSize:{label:u.fontSize.title,items:yn(u.fontSize.items,`${i}`),onSelect:e=>{n("fontSize",e.currentTarget.dataset.id),p()}},fontOpacity:{label:u.fontOpacity.title,items:yn(u.fontOpacity.items,r),onSelect:e=>{n("fontOpacity",e.currentTarget.dataset.id),p()}},edgeStyle:{label:u.edgeStyle.title,items:yn(u.edgeStyle.items,s),onSelect:e=>{n("edgeStyle",e.currentTarget.dataset.id),p()}},preview:{label:"Preview",onSelect:()=>e(zd.PREVIEW)}};return Te(Pe,{children:[Te(nu,h({},_.fontFamily)),Te(ru,h({},_.color)),Te(ou,h({},_.fontSize)),Te(ou,h({},_.fontOpacity)),Te(nu,h({},_.edgeStyle)),Te(D_,{updateMetricsPayload:t}),d&&Te(Pe,{children:[Te(Yd,{}),Te(Zd,h({},_.preview))]})]})},[zd.BACKGROUND]:({setPanel:e,updateMetricsPayload:t})=>{const n=gp(e=>e.setCaptions),i=gp(e=>e.captions.bgColor),o=gp(e=>e.captions.bgOpacity),r=gp(e=>e.appearance.isMenuBlockingUI),a=gp(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,l=sa(),c=()=>t({has_changed_background:!0,final_action_reset_all:!1,has_customized:!0}),d={bgColor:{label:l.bgColor.title,items:yn(l.bgColor.items,i),onSelect:e=>{n("bgColor",e.currentTarget.dataset.id),c()}},bgOpacity:{label:l.bgOpacity.title,items:yn(l.bgOpacity.items,o),onSelect:e=>{n("bgOpacity",e.currentTarget.dataset.id),c()}},preview:{label:"Preview",onSelect:()=>e(zd.PREVIEW)}};return Te(Pe,{children:[Te(ru,h({},d.bgColor)),Te(ou,h({},d.bgOpacity)),Te(D_,{updateMetricsPayload:t}),s&&Te(Pe,{children:[Te(Yd,{}),Te(Zd,h({},d.preview))]})]})},[zd.WINDOW]:({setPanel:e,updateMetricsPayload:t})=>{const n=gp(e=>e.setCaptions),i=gp(e=>e.captions.windowOpacity),o=gp(e=>e.captions.windowColor),r=gp(e=>e.appearance.isMenuBlockingUI),a=gp(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,l=sa(),c=()=>t({has_changed_window:!0,final_action_reset_all:!1,has_customized:!0}),d={windowColor:{label:l.windowColor.title,items:yn(l.windowColor.items,o),onSelect:e=>{n("windowColor",e.currentTarget.dataset.id),c()}},windowOpacity:{label:l.windowOpacity.title,items:yn(l.windowOpacity.items,i),onSelect:e=>{n("windowOpacity",e.currentTarget.dataset.id),c()}},preview:{label:"Preview",onSelect:()=>e(zd.PREVIEW)}};return Te(Pe,{children:[Te(ru,h({},d.windowColor)),Te(ou,h({},d.windowOpacity)),Te(D_,{updateMetricsPayload:t}),s&&Te(Pe,{children:[Te(Yd,{}),Te(Zd,h({},d.preview))]})]})},[zd.PREVIEW]:({updateMetricsPayload:e})=>Te(Pe,{children:[Te(N_,{}),Te(D_,{updateMetricsPayload:e})]})},x_={[zd.EMPTY]:()=>Te(Pe,{}),[zd.LANGUAGES]:({setMenuDisplayed:e})=>gp(e=>e.appearance.isMenuBlockingUI)&&Te($d,{title:"CC/Subtitles",setMenuDisplayed:e}),[zd.CUSTOMIZE]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Customize",onBack:()=>e(zd.LANGUAGES),setMenuDisplayed:t}),[zd.FONT]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Font",onBack:()=>e(zd.CUSTOMIZE),setMenuDisplayed:t}),[zd.BACKGROUND]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Background",onBack:()=>e(zd.CUSTOMIZE),setMenuDisplayed:t}),[zd.WINDOW]:({setPanel:e,setMenuDisplayed:t})=>Te($d,{title:"Window",onBack:()=>e(zd.CUSTOMIZE),setMenuDisplayed:t}),[zd.PREVIEW]:({previousPanel:e,setPanel:t,setMenuDisplayed:n})=>Te($d,{title:"Preview",onBack:()=>t(e),setMenuDisplayed:n})},B_=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,updateMetricsPayload:o})=>{const r=zd.LANGUAGES,[a,s]=Se(r),[l,c]=Se(r),d=(e=>M_[e]||M_[zd.EMPTY])(a),u=(e=>x_[e]||x_[zd.EMPTY])(a),p=e=>{c(a),s(e)};return Ud({isMenuDisplayed:e,defaultPanel:r,setPanel:s}),Te(Wd,{type:jd.CC,ariaAttributes:{ariaLabel:"CC/Subtitles"},isMenuDisplayed:e,setMenuDisplayed:t,panel:a,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:xi.CCMenu,panelContent:Te(d,{setPanel:p,setMenuDisplayed:t,previousPanel:l,updateMetricsPayload:o}),headerContent:Te(u,{setPanel:p,setMenuDisplayed:t,previousPanel:l})})};const V_=()=>{const e=Ie(null),t=Ie(null),n=gp(e=>e.setPlayback),i=gp(e=>e.setDisplayList),r=gp(e=>e.playback.volume),a=gp(e=>e.playback.muted)?0:r,s=gp(e=>e.playback.supportsSettingVolume),l=gp(e=>e.displayList.controlBar),c=gp(e=>e.appearance.playerSizeMode),d=c===Li.TINY||c===Li.MINI,[u,p]=Se(!1),_=100*a,[v,m]=Se(!1),[f,g]=Se(!1),b=u&&s&&!d,E=Math.round(100*a)+"% volume";ke(()=>{l||p(!1)},[l]);const y=e=>{I(e)},C=()=>{p(!0),i("menu",!1)},T=n=>{gn(e.current,n)||gn(null==t?void 0:t.current,n)||p(!1),m(!1),document.removeEventListener("mouseup",T),document.removeEventListener("mousemove",y),document.removeEventListener("pointerup",T),document.removeEventListener("pointermove",y)},L=e=>{m(!0),I(e),o.pointerEvents?(document.addEventListener("pointerup",T),document.addEventListener("pointermove",y)):(document.addEventListener("mouseup",T),document.addEventListener("mousemove",y))},w=()=>{v||p(!1)},A=()=>g(!0),S=()=>g(!1);function I(t){let i=t.clientY;t.targetTouches&&t.targetTouches.length&&(i=t.targetTouches[0].clientY,t.preventDefault());const o=function(t){const n=vt(e.current).top,i=vt(e.current).bottom;return ht((i-t)/(i-n),0,100)}(i);n("volume",o)}const k=bn("VolumeControl_module_volumeControl__05432d27",Nn.VOLUME,js.focusable),P=bn("VolumeControl_module_volumeBar__05432d27",f||v?"VolumeControl_module_mouseEnteredSlider__05432d27":""),O=o.pointerEvents?{onPointerEnter:C,onPointerLeave:w}:{onMouseEnter:C,onMouseLeave:w},R=o.pointerEvents?{onPointerDown:L,onPointerEnter:A,onPointerLeave:S}:{onMouseDown:L,onMouseEnter:A,onMouseLeave:S};return Te("div",h(h({className:"VolumeControl_module_volumeControlContainer__05432d27"},O),{},{"data-volume-control-container":!0,children:[Te(i_,{ref:t}),Te(td,{visible:b,children:Te("div",h(h({role:"slider",className:k,ref:e,tabIndex:0,"aria-label":"Volume (use up/down arrow keys to change)","aria-valuenow":100*a,"aria-valuetext":E,"aria-valuemin":0,"aria-valuemax":100,onBlur:()=>{v||p(!1)},onFocus:()=>{p(!0),i("menu",!1)},onTouchMove:I},R),{},{"data-volume-control":!0,children:Te("div",{className:P,children:[Te("div",{className:"VolumeControl_module_volumeBarFill__05432d27",style:{height:`${_}%`}}),Te("div",{className:"VolumeControl_module_sliderHandle__05432d27",style:{bottom:`${_}%`}})]})}))})]}))},U_=({withButtons:e,withMenus:t,menuProps:n})=>{const i=(()=>{const e=gp(e=>e.captions.textTracks),t=gp(e=>e.playback.supportsTextTracks),n=gp(e=>e.appearance.isDisplayContextBackbone),i=gp(e=>e.displayList.ad),o=gp(e=>e.embed.speedChangeEnabled),r=gp(e=>e.playback.qualities),a=gp(e=>e.embed.quality),s=gp(e=>e.playback.isChromecastConnected),l=gp(e=>e.chapters.chapters),c=gp(e=>e.embed.transcript),d=gp(e=>e.embed.cc),u=gp(e=>e.embed.chapters),p=gp(e=>e.playback.isSegmentedPlaybackEnabled),_=!!(a&&(null==r?void 0:r.length)),v=t&&!!e.length&&n&&!i&&d,m=n&&!(!o&&!_)&&!s&&!i,f=!!(null==l?void 0:l.length)&&u&&!i&&!p,h=t&&!!e.length&&n&&!i&&c;return{[jd.CC]:v,[jd.PREFS]:m,[jd.CHAPTERS]:f,[jd.TRANSCRIPT]:h}})(),r=gp(e=>e.playback.pictureInPictureEnabled),a=gp(e=>e.embed.fullscreen),s=gp(e=>e.embed.showVimeoLogo),l=gp(e=>e.embed.volume),c=gp(e=>e.appearance.fullscreen),d=gp(e=>e.embed.airplay),u=gp(e=>e.playback.supportsAirPlay),p=gp(e=>e.embed.chromecast),_=gp(e=>e.playback.supportsChromecast),v=gp(e=>e.playback.isChromecastSetupWithAvailableDevices),m=gp(e=>e.appearance.stereoscopicEnabled),f=gp(e=>e.playback.supportsStereoscopic),g=gp(e=>e.displayList.ad),b=gp(e=>e.playback.loadedMetadata),E=gp(e=>e.playback.loadedData),y=gp(e=>{var t;return null==(t=e.interactive.hotspots)?void 0:t.length}),C=gp(e=>e.interactive.enabled),T=gp(e=>e.interactive.ready),L=gp(e=>e.liveEvent.isLiveEvent),w=gp(e=>e.liveEvent.isArchived),A=!!C&&(!T||y),S=u&&b&&!g&&!A&&d,I=p&&_&&v&&!g&&!A&&(!L||w),k=m&&f&&!g,P=r&&!g,O=(a||c)&&!(o.iOS&&y)&&!(o.iOS>=17&&!E),R=s&&!g;return Te(Pe,{children:[e&&l&&Te(V_,{}),e&&i[jd.CC]&&Te(s_,h(h({},n[jd.CC]),{},{ref:n[jd.CC].buttonRef})),t&&i[jd.CC]&&Te(B_,h({},n[jd.CC])),e&&i[jd.TRANSCRIPT]&&Te(d_,{}),e&&i[jd.PREFS]&&Te(t_,h(h({},n[jd.PREFS]),{},{ref:n[jd.PREFS].buttonRef})),t&&i[jd.PREFS]&&Te(S_,h({},n[jd.PREFS])),e&&i[jd.CHAPTERS]&&Te(a_,h(h({},n[jd.CHAPTERS]),{},{ref:n[jd.CHAPTERS].buttonRef})),t&&i[jd.CHAPTERS]&&Te(R_,h({},n[jd.CHAPTERS])),e&&I&&Te(c_,{}),e&&S&&Te(r_,{}),e&&k&&Te(l_,{}),e&&P&&Te(n_,{}),e&&O&&Te(e_,{}),e&&R&&Te(o_,{})]})},F_=()=>{const e=Ie(null),t=gp(e=>e.displayList.controlBar),n=gp(e=>e.displayList.progressBar),i=gp(e=>e.displayList.outro),o=gp(e=>e.playback.playInitiated),r=gp(e=>e.embed.isTrailer),a=gp(e=>e.appearance.isMenuBlockingUI),s=(()=>{const e=gp(e=>e.setAppearance),[t,n]=Se(!1);return{onMouseEnter:()=>{t||e("mousedOverControlBar",!0),n(!1)},onMouseLeave:()=>{t||e("mousedOverControlBar",!1),n(!1)},onTouchStart:()=>{e("mousedOverControlBar",!0),n(!0)},onTouchEnd:()=>{e("mousedOverControlBar",!1),n(!0)}}})(),l=Bu()===xu.CENTER,c=r&&!o,[d,u]=Se(null),p=(({setHoveredChapterId:e,progressBarAndButtonsRef:t})=>{const n=gp(e=>e.displayList.menu),i=gp(e=>e.setDisplayList),o=Ie(null),r=Ie(null),a=Ie(null),{sendBPClosedCaptionsClickEvent:s,updateCCMetricsPayload:l,resetCCMetricsPayload:c}=(()=>{const e=gp(e=>e.captions.language),t=gp(e=>e.captions.fontSize),n=gp(e=>e.captions.fontOpacity),i=gp(e=>e.captions.fontFamily),o=gp(e=>e.captions.color),r=gp(e=>e.captions.edgeStyle),a=gp(e=>e.captions.bgColor),s=gp(e=>e.captions.bgOpacity),l=gp(e=>e.captions.windowColor),c=gp(e=>e.captions.windowOpacity),d=Ie({fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:l,windowOpacity:c}),u=Ie({language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1}),p=je(e=>{u.current=h(h({},u.current),e)},[]),_=Mu();return ke((function(){p({language_selected:e||"off"})}),[e,p]),ke((function(){const e=t!==d.current.fontSize||o!==d.current.fontColor||i!==d.current.fontFamily||n!==d.current.fontOpacity||r!==d.current.edgeStyle||a!==d.current.bgColor||s!==d.current.bgOpacity||l!==d.current.windowColor||c!==d.current.windowOpacity;p({has_customized:e})}),[t,n,o,i,r,a,s,l,c,p]),{sendBPClosedCaptionsClickEvent:()=>_(Yo.CLOSED_CAPTIONS_CLICK,u.current),updateCCMetricsPayload:p,resetCCMetricsPayload:()=>{u.current={language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1},d.current={fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:l,windowOpacity:c}}}})(),[d,u]=Se(!1),[p,_]=Se(!1),[v,m]=Se(!1),f=e=>t=>{e===_&&p&&!t&&(s(),c()),e(t),i("menu",t),e!==u&&u(!1),e!==_&&_(!1),e!==m&&m(!1)};n||(u(!1),_(!1),m(!1));const g=f(u),b=f(m),E=f(_);return{[jd.CC]:{isMenuDisplayed:p,setMenuDisplayed:E,buttonRef:a,progressBarAndButtonsRef:t,updateMetricsPayload:l},[jd.PREFS]:{isMenuDisplayed:d,setMenuDisplayed:g,buttonRef:o,progressBarAndButtonsRef:t},[jd.CHAPTERS]:{isMenuDisplayed:v,setMenuDisplayed:b,buttonRef:r,progressBarAndButtonsRef:t,onMenuOptionMouseEnter:t=>{var n,i;return e(parseInt(null==t||null==(n=t.currentTarget)||null==(i=n.dataset)?void 0:i.id,10))},onMenuOptionMouseLeave:()=>e(null)}}})({setHoveredChapterId:u,progressBarAndButtonsRef:e}),_=bn("ControlBar_module_controlBarWrapper__30b7f265",l&&"ControlBar_module_centerPlayButton__30b7f265"),v=bn(Nn.VP_CONTROLS,"ControlBar_module_controls__30b7f265",c&&"ControlBar_module_trailer__30b7f265",!n&&"ControlBar_module_noProgressBar__30b7f265"),m=bn("ControlBar_module_progressBarAndButtons__30b7f265",!n&&"ControlBar_module_noProgressBar__30b7f265");return Te(qd,{children:[Te("div",{className:_,children:[Te(Zp,{controlBarVisibilityHandlers:s}),Te(td,{visible:t,children:Te("div",h(h({className:v},s),{},{"data-control-bar":!0,children:!i&&!c&&Te("div",{className:m,ref:e,children:[n&&Te(T_,{hoveredChapterId:d}),Te(U_,{withButtons:!0,menuProps:p,withMenus:!a})]})}))}),Te(u_,{})]}),Te(U_,{menuProps:p,withMenus:a,withButtons:!1})]})};const H_=()=>{const e=gp(e=>e.displayList.notification);return Te("div",{className:`Notification_module_root__8c1db022 ${e?"Notification_module_active__8c1db022":""}`})};let q_;!function(e){e.Backward="backward",e.Forward="forward"}(q_||(q_={}));const G_=()=>{const e=gp(e=>e.displayList.nudgeNotification),t=gp(e=>e.nudge.direction),n=gp(e=>e.nudge.time);return Te(td,{visible:e,children:Te("div",{"aria-hidden":"true",className:`NudgeNotification_module_nudge__d98d80a9 ${t===q_.Backward&&"NudgeNotification_module_nudgeBackward__d98d80a9"}`,children:Te("div",{className:"NudgeNotification_module_nudgeInfo__d98d80a9",children:[Te("div",{className:"NudgeNotification_module_nudgeIcon__d98d80a9",children:Te(Ds,{name:Rs.FAST_FORWARD})}),Te("div",{className:"NudgeNotification_module_nudgeTime__d98d80a9",children:n?n+" seconds":""})]})})})};let W_;const Y_=()=>{const e=Ie(bp().getState().playback.currentFragment),t=Ie(bp().getState().playback.currentTime),n=Ie(bp().getState().playback.liveEdgeTime),i=Ie(bp().getState().playback.liveTailTime);bp().subscribe(t=>e.current=t.playback.currentFragment),bp().subscribe(e=>t.current=e.playback.currentTime),bp().subscribe(e=>n.current=e.playback.liveEdgeTime),bp().subscribe(e=>i.current=e.playback.liveTailTime);const r=gp(e=>e.displayList.fullPlayerElement),a=gp(e=>e.displayList.ad),s=gp(e=>e.liveEvent.isLiveEvent),l=gp(e=>e.liveEvent.dvrEnabled),c=gp(e=>e.liveEvent.isArchived),d=s&&!c&&!l,u=gp(e=>e.embed.background),p=gp(e=>e.embed.controls),_=gp(e=>e.displayList.outro),v=gp(e=>e.config.video.spatial),m=!(!o.spatialPlayback||!v),f=o.touch&&!r&&!a&&!d&&!u&&p&&!_&&!m,h=gp(e=>e.setPlayback),g=gp(e=>e.setNudgeProperties),[b,E]=Se({left:0,right:0}),y=o=>r=>{let a;r.preventDefault(),o===q_.Forward?(a=b.left+1,E({left:a,right:0})):(a=b.right+1,E({left:0,right:a})),clearTimeout(W_),W_=setTimeout(C,250),a>=2&&function(o,r){let a,l;s?(a=i.current,l=n.current):({startTime:a,endTime:l}=e.current);let c=0;c=o===q_.Forward?t.current+10:t.current-10,c<a?c=a:c>=l?c=l-.001:g({direction:o,time:10+10*(r-2)}),h("currentTime",c,{seekType:"nudge"})}(o,a)};function C(){E({left:0,right:0})}return f&&Te(Pe,{children:[Te("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeBackwardArea__1e671f9b",onTouchEnd:y(q_.Backward)}),Te("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeForwardArea__1e671f9b",onTouchEnd:y(q_.Forward)})]})},$_=({player:e,children:t})=>(et(e=>{}),Te(Ep,{player:e,children:[Te(av,{}),t]})),K_=({element:e,children:t})=>tt(Te(Pe,{children:t}),e);const j_=()=>{const e=gp(e=>e.embed.like),t=gp(e=>e.embed.watchLater),n=gp(e=>e.embed.share),i=gp(e=>e.embed.transcript),o=gp(e=>e.embed.onsite),r=[{key:"↑",text:"Volume up",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"↓",text:"Volume down",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"→",text:"Scrub forward",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"←",text:"Scrub backwards",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"X",text:"Like",ignore:!e},{key:"S",text:"Share",ignore:!n},{key:"W",text:"Watch Later",ignore:!t},{key:"C",text:"Toggle Captions"},{key:"H",text:"Toggle Preferences Menu"},{key:"F",text:"Toggle fullscreen"},{key:"⇧T",text:"Toggle Transcript",ignore:!i},{key:"⇧A",text:"Toggle Vimeo AI",ignore:!gp(e=>e.embed.aiWidget)},{key:"V",text:"View on Vimeo",ignore:o},{key:"J",text:"Scrub backwards"},{key:"K",text:"Play/Pause"},{key:"L",text:"Scrub forward"},{key:"M",text:"Toggle Mute"}];return Te(Pe,{children:[Te("h1",{id:Nn.VP_OVERLAY_LABELLEDBY,children:"Keyboard Shortcuts"}),Te("div",{className:"HelpOverlay_module_keysWrapper__584c584b","data-help-keys":!0,children:r.map(e=>!e.ignore&&Te("div",{className:`HelpOverlay_module_keyWrapper__584c584b ${e.className||""}`,children:[Te("div",{className:"HelpOverlay_module_keySymbol__584c584b",children:e.key}),Te("div",{className:"HelpOverlay_module_keyText__584c584b",children:e.text})]}))})]})};const z_=Oe((e,t)=>{const n=gp(e=>e.setOverlay),i=pn(()=>n("purpose",Fn.EMPTY));return Te("button",h(h({ref:t,className:`CloseOverlayButton_module_closeOverlayButton__64883c67 ${js.focusableButton}`},i),{},{children:Te(Ds,{name:Rs.CLOSE})}))});const X_=({children:e,visible:t,style:n})=>{const i=gp(e=>e.element),o=Ie(null),r=Ie(null);return ke((function(){t&&r.current&&i.contains(document.activeElement)?(o.current=document.activeElement,_t(r.current)):!t&&o.current&&(_t(o.current),o.current=null)}),[t,r,i]),Te("div",{className:`OverlayBase_module_overlayWrapper__226bd2d4 ${t?"":"OverlayBase_module_hidden__226bd2d4"}`,role:"dialog","aria-modal":"true","aria-labelledby":Nn.VP_OVERLAY_LABELLEDBY,"data-content-area-sibling-eligible":!0,style:n,"data-overlay":!0,children:[Te("div",{className:"OverlayBase_module_overlayCell__226bd2d4",children:Te("div",{className:`OverlayBase_module_overlay__226bd2d4 ${t?"OverlayBase_module_visible__226bd2d4":""}`,children:e})}),Te("nav",{className:"OverlayBase_module_overlayNav__226bd2d4",children:Te(z_,{ref:r})})]})},Z_=()=>{const e=gp(e=>e.overlay.purpose),t=gp(e=>e.displayList.overlay),[n,i]=Se(e),o=t&&$n(e);return o&&i(e),Te(td,{visible:o,duration:o?200:105,styleOverrides:{exitDone:{display:"block",visibility:"hidden"}},onFaded:()=>{i(e)},children:Te(X_,{visible:o,children:n===Fn.HELP&&Te(j_,{})})})};const J_=()=>{const{pipOverlay:e}=gp(e=>e.displayList);return Te(td,{visible:e,children:Te("div",{className:`${Nn.VP_PIP_OVERLAY} PipOverlay_module_overlay__4ebce77e`,"aria-hidden":"true",children:[Te(Ds,{name:Rs.PIP}),Te("div",{className:"PipOverlay_module_title__4ebce77e",children:"Playing in picture-in-picture"})]})})};let Q_;!function(e){e.PLAYER_UI="player_ui",e.TITLE="title"}(Q_||(Q_={}));const ev=()=>{const e=gp(e=>e.liveEvent.isLiveEvent),t=gp(e=>e.liveEvent.isPlayable),n=gp(e=>e.playback.paused),i=gp(e=>e.liveEvent.isEnded),o=e&&!i,r=gp(e=>e.webinar.webinarRegistrantBlocked),a=o&&!r,s=gp(e=>e.displayList.controlBar),l=gp(e=>e.displayList.topCenterActionItem),c=gp(e=>e.displayList.title),d=gp(e=>e.displayList.toast),u=gp(e=>e.playback.atLiveEdge);return a&&Te(td,{visible:(s||l)&&!(c||d)&&t&&!n&&u,children:Te("div",{className:"LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__df50a84b","aria-hidden":"true",children:[Te(nv,{context:Q_.PLAYER_UI}),Te(ov,{context:Q_.PLAYER_UI})]})})};const tv={[Q_.PLAYER_UI]:"LiveStatusLabel_module_playerUI__80b34526",[Q_.TITLE]:"LiveStatusLabel_module_title__80b34526"},nv=({className:e,context:t})=>{const n=gp(e=>e.embed.hideLiveLabel),i=gp(e=>e.webinar.webinarRegistrantBlocked),o=gp(e=>e.liveEvent.isLiveEvent),r=gp(e=>e.liveEvent.isPlayable),a=gp(e=>e.liveEvent.isArchived),s=tv[t],l=bn(Nn.VP_LIVE_STATUS,"LiveStatusLabel_module_liveStatusLabel__80b34526",s,e),c=bn(Nn.VP_LIVE_STATUS_CIRCLE,"LiveStatusLabel_module_liveStatusCircle__80b34526",r?"LiveStatusLabel_module_live__80b34526":"LiveStatusLabel_module_offline__80b34526"),d=bn("LiveStatusLabel_module_liveStatusText__80b34526",r?"LiveStatusLabel_module_live__80b34526":"LiveStatusLabel_module_offline__80b34526");return o&&!a&&!n&&!i&&Te("div",{className:l,"data-live-status-label":!0,children:[Te("div",{className:c}),Te("span",{className:d,children:"LIVE"})]})};const iv={[Q_.PLAYER_UI]:"LiveViewerCounter_module_playerUI__49e5fa3a",[Q_.TITLE]:"LiveViewerCounter_module_title__49e5fa3a"},ov=({className:e="",context:t})=>{const n=gp(e=>e.liveEvent.isPlayable),i=gp(e=>e.embed.showViewerCount),o=gp(e=>e.liveEvent.viewerCount),r=gp(e=>e.webinar.webinarRegistrantBlocked),a=gp(e=>e.liveEvent.liveStatsRequestSucceeded),s=iv[t],l=bn(Nn.VP_LIVE_VIEWER_COUNT,"LiveViewerCounter_module_liveViewerCounter__49e5fa3a",s,e);return n&&i&&!r&&a&&Te("div",{className:l,"data-live-viewer-counter":!0,children:[Te(Ds,{className:"LiveViewerCounter_module_liveViewerCounterIcon__49e5fa3a",name:Rs.PERSON_FILLED}),Te("span",{className:"LiveViewerCounter_module_liveViewerCountValue__49e5fa3a",children:o})]})},rv={[oi.LIGHT]:ii.EIGHTY,[oi.DARK]:ii.TWENTY},av=()=>{const e=gp(e=>e.uuid),t=gp(e=>e.embed.transparent),n=gp(e=>e.appearance.fullscreen),i=gp(e=>e.appearance.colorOne),o=gp(e=>e.appearance.colorTwo),r=gp(e=>e.appearance.colorThree),a=gp(e=>e.appearance.colorFour),s=[[ni.ONE,ai(i,ii.ONE_HUNDRED)],[ni.TWO,ai(o,ii.ONE_HUNDRED)],[ni.THREE,ai(r,ii.ONE_HUNDRED)],[ni.FOUR,ai(a,ii.ONE_HUNDRED,!1,!0)],[ni.ONE_MONOCHROME,ai(i,ii.ONE_HUNDRED,!0)],[ni.TWO_MONOCHROME,ai(o,ii.ONE_HUNDRED,!0)],[ni.ONE_OPACITY_NINETY,ai(i,ii.NINETY,!1,!0)],[ni.THREE_OPACITY_TWENTY,ai(r,ii.TWENTY)],[ni.ONE_MONOCHROME_OPACITY_TWENTY,ai(i,ii.TWENTY,!0)],[ni.TWO_MONOCHROME_OPACITY_TWENTY,ai(o,ii.TWENTY,!0)],[ni.ONE_MONOCHROME_OPACITY_SIXTY,ai(i,ii.SIXTY,!0)],[ni.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY,ai(i,rv,!0)],[ni.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY,ai(o,rv,!0)]];let l,c;return n?(l="#000 !important",c="transparent !important"):t?(l="transparent !important",c="transparent !important"):(l=`var(${ni.FOUR})`,c=`var(${ni.FOUR})`),Te("style",{type:"text/css","data-player-colors":e,children:[`.player-${e} {\n                ${si(s)}\n            }`,`.player-${e} {\n                background-color: ${l};\n            }`,`.player-${e} .${Nn.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]})};const sv=()=>{const e=gp(e=>e.embed.rightContentAreaEnabled),t=gp(e=>e.displayList.rightContentArea),n=gp(e=>e.appearance.rightContentAreaAnimating);let i=gp(e=>e.element);const r=["RightContentArea_module_rightContentArea__fb2bf72f"],a={transcript:{component:hv,displayed:gp(e=>e.displayList.transcript)},aiWidget:{component:Ov,displayed:gp(e=>e.displayList.aiWidget)}};var s;t&&r.push("RightContentArea_module_visible__fb2bf72f"),o.isGoogleBot&&a.transcript.displayed&&(i=null==(s=i)?void 0:s.parentElement,r.push("RightContentArea_module_googleBot__fb2bf72f"));const l=Object.keys(a).some(e=>{var t;return null==(t=a[e])?void 0:t.displayed}),c=!t&&n,d=c?400:void 0,u=c||l&&t&&!n?void 0:0,p={exitDone:{visibility:"hidden",display:"block"}};return e&&tt(Te("div",{id:Mn.RIGHT_CONTENT_AREA,className:bn.apply(void 0,r),"aria-hidden":!t,children:Object.keys(a).map((function(e){var t,n;const i=null==(t=a[e])?void 0:t.component,o=null==(n=a[e])?void 0:n.displayed;return i?Te(td,{duration:u,visible:o,delay:d,styleOverrides:p,children:Te(i,{})},e):null}))}),i)};const lv=()=>{const[e,t]=Se(!1),n=gp(e=>e.appearance.placeholderThumbnail),i=gp(e=>e.appearance.appSizeMode),r=gp(e=>e.appearance.appBreakpoint),a=gp(e=>e.embed.rightContentAreaEnabled),s=gp(e=>e.displayList.rightContentArea),l=gp(e=>e.appearance.rightContentAreaAnimating),c=gp(e=>e.element),d=a&&(s||l),u=r===Ms.XS||r===Ms.XXS||i===Li.MINI||i===Li.TINY,p=bn("ContentAreaBackground_module_img__90d1a7f8",e&&"ContentAreaBackground_module_loaded__90d1a7f8"),_=u?{visible:s,duration:400}:{visible:d,duration:0};return o.isGoogleBot?null:tt(Te(td,h(h({},_),{},{children:Te("div",{className:"ContentAreaBackground_module_imgContainer__90d1a7f8",children:Te("img",{onLoad:()=>t(!0),alt:"video thumbnail",className:p,src:n})})})),null==c?void 0:c.querySelector(`.${Dn.CONTENT_AREA_BACKGROUND_CONTAINER}`))};nt(".TranscriptError_lazy_module_refresh__5b067110{border:none;padding:4px 12px;gap:4px;height:32px;background:hsla(0,0%,100%,.1);border-radius:4px}.TranscriptError_lazy_module_icon__5b067110{width:40px;height:40px}",{});const{Provider:cv,useStore:dv}=Le(),uv={timecodeDisplayed:!0,selectedSettingsMenu:md.MAIN,settingsDisplayed:!1,currentSearchResultIndex:0,searchTerms:{terms:"",timestamp:null},searchResults:[],transcriptDisabled:!1,autofollowEnabled:!0},pv=({children:e})=>{const t=gp(e=>e.subscribe),n=gp(e=>e.captions.textTrackEls),i=gp(e=>e.captions.rtlTracks),o=gp(e=>e.config),r=gp(e=>e.events),a=gp(e=>e.displayList.transcript),s=gp(e=>e.displayList.fullPlayerElement),l=gp(e=>e.appearance.appBreakpoint),c=gp(e=>e.appearance.appSizeMode),d=Mu(),u=((e,t)=>e.map(e=>{const n=e.id.replace(Un.TEXT_TRACK_ID_PREFIX,""),i=t.includes(n);return{id:e.id,label:e.label,language:e.srclang,rtl:i}}))(n,i),p=yd(o,u),_=Ie(null==p?void 0:p.language);return Te(cv,{createStore:()=>we((e,n)=>{const i=(t,n)=>e(e=>h(h({},e),{},{[t]:n})),o=uv.selectedSettingsMenu,v=e=>i("selectedSettingsMenu",e),m=uv.settingsDisplayed,f=t=>{var i,o;const a={};if(t!==(null==(i=n())?void 0:i.settingsDisplayed)){var s,l;a.settingsDisplayed=t;const e=null==(s=n())||null==(l=s.selectedTrack)?void 0:l.language;t?d(Yo.EMBEDDED_TRANSCRIPT_CLICK,{name:"open_embed_transcript_setting",copy:"settings",location:"player_embedded_transcript",element:"embedded_transcript_settings_menu",current_transcript_language:e}):t||e===_.current||(d(Yo.EMBEDDED_TRANSCRIPT_CLICK,{name:"change_language_settings",copy:e,location:"player_embedded_transcript_settings",element:"language_select_panel",current_transcript_language:e}),_.current=e)}(null==(o=n())?void 0:o.settingsDisplayed)&&!t&&(a.selectedSettingsMenu=uv.selectedSettingsMenu),Object.keys(a).length&&e(e=>h(h({},e),a));const c=t?"preact-menu":"";r.fire(Wt._menuVisibilityChanged,c)},g=uv.timecodeDisplayed,b=uv.currentSearchResultIndex,E=e=>i("currentSearchResultIndex",e),y=uv.searchResults,C=e=>{0===e.length&&i("currentSearchResultIndex",0),i("searchResults",e)},T=uv.searchTerms,L=e=>i("searchTerms",e),w=!a||s,A=_v(l,c),S=uv.autofollowEnabled;function I(){L(uv.searchTerms),C(uv.searchResults),E(uv.currentSearchResultIndex)}return t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{e||(f(uv.settingsDisplayed),v(uv.selectedSettingsMenu))}),t(e=>{var t,n;return{transcriptVisible:null==e||null==(t=e.displayList)?void 0:t.transcript,overlayVisible:null==e||null==(n=e.displayList)?void 0:n.fullPlayerElement}},({transcriptVisible:e,fullPlayerElement:t})=>{i("transcriptDisabled",!(e&&!t))}),t(e=>{var t,n;return{breakpoint:null==e||null==(t=e.appearance)?void 0:t.appBreakpoint,sizeMode:null==e||null==(n=e.appearance)?void 0:n.appSizeMode}},({breakpoint:t,sizeMode:i})=>{const o=_v(t,i);o!==n().transcriptSizeMode&&e(e=>h(h({},e),{},{transcriptSizeMode:o}))}),t(e=>{var t,n;return{outroDisplayed:null==e||null==(t=e.displayList)?void 0:t.outro,animationActive:null==e||null==(n=e.appearance)?void 0:n.rightContentAreaAnimating}},({outroDisplayed:e,animationActive:t})=>{e&&!t&&I()}),{timecodeDisplayed:g,searchTerms:T,setSearchTerms:L,resetSearchTerms:()=>L(uv.searchTerms),currentSearchResultIndex:b,setCurrentSearchResultIndex:E,settingsDisplayed:m,setSettingsDisplayed:f,selectedTrack:p,availableTracks:u,setSelectedTrack:e=>{const t=u.find(t=>t.id===e);i("selectedTrack",t),I(),r.fire(Wt._transcriptChanged,t)},selectedSettingsMenu:o,setSelectedSettingsMenu:v,searchResults:y,setSearchResults:C,toggleTimecodeDisplayed:()=>{var e;return i("timecodeDisplayed",!(null==(e=n())?void 0:e.timecodeDisplayed))},toggleSettingsDisplayed:()=>{var e;return f(!(null==(e=n())?void 0:e.settingsDisplayed))},transcriptDisabled:w,transcriptSizeMode:A,autoFollowEnabled:S,setAutoFollowEnabled:e=>i("autoFollowEnabled",e)}}),children:e})};function _v(e,t){const n=e===Ms.XS||e===Ms.XXS,i=t===Li.MINI||t===Li.TINY;return n||i?fd.SMALL:e===Ms.XL||e===Ms.XXL?fd.LARGE:fd.MEDIUM}const vv=({onClose:e})=>{const t=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"ContentAreaCloseButton_module_closeContentAreaButton__3a37ef65",js.focusableButton);let n=xs.MD;const i=gp(e=>e.appearance.appBreakpoint),r=gp(e=>e.displayList.rightContentArea);i!==Ms.XL&&i!==Ms.XXL||(n=xs.CUSTOM);const{onClick:a,onKeyDown:s}=pn(e),l=Te(Js,{onClick:a,onKeyDown:s,size:n,icon:Te(Ds,{name:Rs.CLOSE,focusable:"false"}),"aria-label":"Close",disabled:!r,color:Bs.CUSTOM,className:t});return o.touch?l:Te(su,{tooltipContent:"Close",className:"ContentAreaCloseButton_module_tooltip__3a37ef65",children:l})};const mv=({message:e,icon:t,componentType:n,children:i,onClose:o})=>Te("div",{className:"ContentAreaMessage_module_container__1e72004a","data-component-type":n,children:[Te(vv,{onClose:o}),t||Te(Ds,{name:Rs.INFO_CIRCLE,className:"ContentAreaMessage_module_icon__1e72004a"}),Te(il,{size:Fs.LG,weight:Hs.BOLD,className:"ContentAreaMessage_module_messageText__1e72004a",children:e}),i]}),fv=({onRetry:e})=>{const t=Mu(),n=dv(e=>e.selectedTrack),i=gp(e=>e.setDisplayList),o=Te(Ds,{name:Rs.WARN_CIRCLE,className:"TranscriptError_lazy_module_icon__5b067110"}),r=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"TranscriptError_lazy_module_refresh__5b067110");return Te(mv,{message:"There was a problem loading the transcript.",onClose:()=>i("transcript",!1),componentType:"transcript-error",icon:o,children:Te(Js,{className:r,size:xs.CUSTOM,onClick:()=>{e(),t(Yo.EMBEDDED_TRANSCRIPT_CLICK,{name:"click_refresh_error",copy:"Refresh",location:"player_embedded_transcript_error",element:"refresh_transcript_button",current_transcript_language:null==n?void 0:n.language})},"data-component-type":"retry-request",children:Te(il,{size:Fs.MD,weight:Hs.BOLD,children:"Refresh"})})})};const hv=({style:e={}})=>{const t=Ie(!0),n=gp(e=>e.displayList.transcript),{module:i,load:o,readyState:r}=Ru(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){return import("./Transcript.lazy.module.js")}))),a=null==i?void 0:i.Transcript,s=gp(e=>e.embed.transcript);if(n&&t.current&&(o(),t.current=!1),!s||r!==Pu.LOADED&&!n)return null;const l=bn(!n&&"TranscriptLoader_module_hidden__67242adb");return(Te("div",{style:e,className:l,children:[r===Pu.LOADING&&Te(Ws,{}),r===Pu.ERROR&&Te(fv,{onRetry:o}),r===Pu.LOADED&&Te(a,{})]}))};let gv;const bv=()=>{const e=gp(e=>e.playback.buffering),t=gp(e=>e.playback.isChromecastBuffering),n=gp(e=>e.playback.isChromecastConnected),i=gp(e=>e.displayList.progressBar),o=gp(e=>e.appearance.isStartTimeThumbLoading),[r,a]=Se(o);return e||t||o?gv=setTimeout(()=>{a(!0)},600):(clearTimeout(gv),a(!1)),i&&Te(Pe,{children:[Te(td,{visible:n||r,styleOverrides:{enterActive:{opacity:.4},exit:{opacity:.4},exitDone:{display:"none"}},children:Te("div",{className:"BufferHandler_module_shade__cb05e8a3","data-shade":!0})}),Te(td,{visible:r,styleOverrides:{exitDone:{display:"none"}},children:Te(Ws,{size:Gs.LG})})]})};const Ev=()=>{const e=gp(e=>e.captions.activeCues),t=gp(e=>e.captions.language),n=gp(e=>e.captions.direction),i=gp(e=>e.displayList.captions),o=gp(e=>e.displayList.controlBar),r=gp(e=>e.displayList.progressBar),a=gp(e=>e.appearance.fullscreen),s=gp(e=>e.embed.rightContentAreaEnabled),l=gp(e=>e.captions.fontSize),c=gp(e=>e.captions.fontFamily),d=gp(e=>e.captions.fontOpacity),u=gp(e=>e.captions.color),p=gp(e=>e.captions.bgColor),_=gp(e=>e.captions.bgOpacity),v=gp(e=>e.captions.windowOpacity),m=gp(e=>e.captions.windowColor),f=gp(e=>e.captions.edgeStyle),h=gp(e=>e.appearance.videoHeight),g=gp(e=>e.appearance.containerHeight),b=gp(e=>e.embed.transparent);let E=null,y={};!a&&b||h<g-58&&(E=`translateY(-${(g-h)/2}px)`,y.transform=E);const C=bn("Captions_module_captions__5a5f9181",!i&&"Captions_module_hide__5a5f9181",o&&!E&&"Captions_module_withControls__5a5f9181",!r&&"Captions_module_noPlaybar__5a5f9181",a&&"Captions_module_fullscreen__5a5f9181",s&&"Captions_module_contentAreaSibling__5a5f9181");return Te(mu,{cues:e,language:t,direction:n,className:C,fontSize:l,fontFamily:c,fontOpacity:d,color:u,bgColor:p,bgOpacity:_,windowOpacity:v,windowColor:m,edgeStyle:f,height:h,style:y})};let yv;const Cv=({containerRef:e})=>{const t=gp(e=>e.closeToast),[n,i]=Se(!1),[o,r]=Se(!1),[a,s]=Se(!1),l=Mu();ke(()=>{l(Yo.VIEW_PLAYER_CSAT_V1),yv=setTimeout(t,1e4)},[l,t]);return Te(Pe,{children:[Te(yu,{transitionTime:1e4,ariaLabelledby:Vn.QOE_SURVEY_TEXT}),Te(Cu,{id:Vn.QOE_SURVEY_TEXT,children:"How's the viewing experience?"}),Te(gu,{className:`QoESurvey_module_thumbsUp__1993fb34 ${n?"QoESurvey_module_selected__1993fb34":""}`,tooltipLabel:"Good","aria-label":"Good","aria-describedby":Vn.QOE_SURVEY_TEXT,icon:Te(Ds,{name:n?Rs.THUMBS_UP_FILLED:Rs.THUMBS_UP}),onClick:()=>{n||o||a||(l(Yo.SELECT_THUMBS_UP_PLAYER_CSAT_V1),i(!0),clearTimeout(yv),setTimeout(t,200))},containerRef:e}),Te(gu,{className:`QoESurvey_module_thumbsDown__1993fb34 ${o?"QoESurvey_module_selected__1993fb34":""}`,tooltipLabel:"Poor","aria-label":"Poor","aria-describedby":Vn.QOE_SURVEY_TEXT,icon:Te(Ds,{name:o?Rs.THUMBS_DOWN_FILLED:Rs.THUMBS_DOWN}),onClick:()=>{n||o||a||(l(Yo.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1),r(!0),clearTimeout(yv),setTimeout(t,200))},containerRef:e}),Te(hu,{}),Te(Tu,{onClick:()=>{n||o||a||(l(Yo.DISMISS_PLAYER_CSAT_V1),s(!0),clearTimeout(yv),t())},describedBy:Vn.QOE_SURVEY_TEXT,selected:a})]})},Tv=()=>{const e=gp(e=>e.playback.liveEdgeTime),t=gp(e=>e.setPlayback),n=Mu();return Te(Eu,{onClick:()=>{t("atLiveEdge",!0),t("currentTime",e),n(Yo.SKIP_TO_LIVE_CLICK)},label:"Skip to live"})},Lv=()=>{const e=gp(e=>e.closeToast);return Te(Pe,{children:[Te(Cu,{id:Vn.BROADCAST_OVER,children:"The live broadcast is over"}),Te(hu,{}),Te(Tu,{onClick:e,describedBy:Vn.BROADCAST_OVER})]})};const wv={[mp.QOE_SURVEY]:Vn.QOE_SURVEY_TEXT,[mp.BROADCAST_OVER]:Vn.BROADCAST_OVER},Av=()=>{const e=Ie(null),t=gp(e=>e.toast.purpose),n=gp(e=>e.appearance.fullscreen),i=gp(e=>e.setDisplayList),r=wv[t],a="translateY("+(n&&o.iPadOS?"calc(36px + 16px)":"0")+")",s={enter:{transform:"translateY(calc(-100% - 16px))",opacity:1},enterActive:{transition:"transform 400 ease-in-out",transform:a},enterDone:{transform:a},exit:{transform:a},exitActive:{transition:"transform 400 ease-in-out",transform:"translateY(calc(-100% - 16px))",opacity:1}};return Te(Lu,{targetContent:t!==mp.EMPTY?t:null,onContentChange:e=>{i("toast",!!e)},delay:400,styleOverrides:s,children:t=>Te(fu,{className:"Toasts_module_toasts__100db7ca",ref:e,ariaLabelledby:r,children:[t===mp.QOE_SURVEY&&Te(Cv,{containerRef:e}),t===mp.SKIP_TO_LIVE&&Te(Tv,{}),t===mp.BROADCAST_OVER&&Te(Lv,{})]})})},Sv=()=>{const e=gp(e=>e.liveEvent.isLiveEvent)?"Unmute broadcast":"Unmute",{unmute:t}=Vu();return Te(Eu,{onClick:t,label:e})},Iv=()=>{const e=gp(e=>e.setAppearance),t=gp(e=>e.clearSegment),n=gp(e=>e.playback.startTime),i=gp(e=>e.playback.endTime),o=Mu();return Te(Eu,{onMouseEnter:()=>e("mousedOverControlBar",!0),onMouseLeave:()=>e("mousedOverControlBar",!1),onClick:()=>{o(Yo.WATCH_FULL_VIDEO,{start_time:n,end_time:i}),t()},label:"Watch full video"})};const kv=()=>{const e=gp(e=>e.topCenterActionItem.purpose),t=gp(e=>e.setDisplayList);return Te(Lu,{targetContent:e!==id.EMPTY?e:null,onContentChange:e=>{t("topCenterActionItem",!!e)},children:e=>Te(fu,{className:"TopCenterActionItems_module_topCenterActionItems__cde6f652",children:[e===id.UNMUTE&&Te(Sv,{}),e===id.WATCH_FULL_VIDEO&&Te(Iv,{})]})})};const Pv=({onReload:e})=>{const t=gp(e=>e.setDisplayList),n=bn(Dn.EXCLUDE_GLOBAL_BUTTON_STYLES,"AIWidgetError_module_reload__36594e38");return Te(mv,{message:"Unable to load Vimeo AI",componentType:"ai-error",onClose:()=>t("aiWidget",!1),children:Te(Js,{className:n,size:xs.CUSTOM,onClick:e,"data-component-type":"reload-ai",children:Te(il,{size:Fs.MD,weight:Hs.BOLD,children:"Try again"})})})};const Ov=({style:e={}})=>{const t=gp(e=>e.displayList.aiWidget),n=gp(e=>e.embed.vimeoUrl),i=gp(e=>e.embed.videoId),o=gp(e=>e.embed.videoUnlistedHash),r=gp(e=>e.setDisplayList),a=gp(e=>e.appearance.rightContentAreaAnimating),s=Mu(),[l,c]=Se(!1),d=bn("AIWidget_module_aiWidget__d1e4045c",!t&&"AIWidget_module_hidden__d1e4045c"),u=`https://${n}/ai-player/${i}${o?`/${o}`:""}`,{componentVersion:p,hasError:_,componentTimeout:v,onError:m,onReload:f}=rl(),h=je(()=>{const e={[$o.WEB]:{page_name:"player"},[$o.PRODUCT_ANALYTICS]:{copy:"Vimeo AI",feature:"ai",product:"ai",element:"icon"}};s(Yo.OPEN_AI_OPTIONS,{},e)},[s]);return ke(()=>{t&&(h(),l||c(!0))},[t]),Te("div",{className:d,style:e,children:[_&&Te(Pv,{onReload:f}),!_&&l&&Te(Su,{id:Bn.AI_WIDGET_ID,url:u,title:"Vimeo AI",onError:m,timeout:v,visible:t,onClose:()=>{r("aiWidget",!1)},isAnimating:a},p)]})},Rv=()=>{const e=Ie(!0),{module:t,load:n,readyState:i}=Ru(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Te){return Promise.reject(Te)}}}((function(){return import("./Compass.lazy.module.js")}))),o=null==t?void 0:t.Compass,r=gp(e=>e.playback.playInitiated),a=gp(e=>e.embed.compass);return a&&r&&e.current&&(n(),e.current=!1),!a||i!==Pu.LOADED&&!r?null:Te(o,{})};function Nv(e,t){const n=t.querySelector(`.${Nn.VP_PLAYER_UI_CONTAINER}`),i=t.querySelector(`.${Nn.VP_PLAYER_UI_OVERLAYS}`);De(Te($_,{player:e,children:[Te(G_,{}),Te(J_,{}),Te(K_,{element:i,children:[Te(kv,{}),Te(Av,{}),Te(ev,{}),Te(Kp,{}),Te(Pp,{}),Te(Gp,{}),Te(zp,{}),Te(H_,{}),Te(Z_,{}),Te(F_,{}),Te(Y_,{}),Te(bv,{}),Te(Ev,{}),Te(Rv,{})]}),Te(lv,{}),Te(sv,{})]}),n)}function Dv(e,t,n,i){Xa.helpers=Pc;const r=function(e){if(!0===e)return Promise.resolve(null);let t=!1;return new Promise((n,i)=>{e.link.addEventListener("load",()=>{if(!t){t=!0;const i=(new Date).getTime()-e.startTime;setTimeout(()=>n(i),100)}},!1)})}(n),a=new cl({element:e,delegate:i,cssLoadedPromise:r}),s=a.store;e.classList.add("js-player-fullscreen");let l=a.expose,c=null,d=null,u=null,p=null,_=null,v=null,m=null,f=null,h=null,b=null,E=null;const y=e.querySelector(".vp-controls"),C={tiny:Wt._enteredTinyMode,mini:Wt._enteredMiniMode,normal:Wt._enteredNormalMode,none:Wt._enteredNormalMode};function T(t){t&&void 0!==C[t]&&(a.events.fire(C[t]),e.classList.toggle("player-normal","normal"===t),e.classList.toggle("player-mini","mini"===t),e.classList.toggle("player-tiny","tiny"===t))}function L(t){t&&void 0!==C[t]&&(e.classList.toggle("app-normal","normal"===t),e.classList.toggle("app-mini","mini"===t),e.classList.toggle("app-tiny","tiny"===t))}function w(t){Object.keys(Ma).forEach(n=>e.classList.toggle(`player-${n}`,t===n))}function A(t){Object.keys(Ma).forEach(n=>e.classList.toggle(`app-${n}`,t===n))}function S(){const t=a.config.embed.settings;e.classList.toggle("with-fullscreen",!!t.fullscreen);const n=t.custom_logo;e.classList.toggle("with-custom-logo",!!n),e.classList.toggle("with-sticky-custom-logo",n&&n.sticky),e.classList.toggle("hide-controls-mode",!!t.background||0===t.controls),e.classList.toggle("touch-support",o.touch),e.classList.toggle("is-google-bot",o.isGoogleBot)}function k(e,t=a.config.video.url){if(!(!t||e&&e.metaKey)){if(-1===t.indexOf("#")&&a.backbone.currentTime>0&&a.backbone.currentTime<a.config.video.duration-30&&!a.backbone.paused&&(t+=`#at=${Math.floor(a.backbone.currentTime)}`),!a.config.embed.on_site)return window.open(t),function(e){if(e&&e.detail>0)try{document.activeElement.blur()}catch(Te){}}(e),a.events.fire(Wt._pauseButtonPressed),!1;window.location=t}}function P(){m||(T(s.get("ui.player.mode")),m=s.watch("ui.player.mode",T)),f||(T(s.get("ui.app.mode")),f=s.watch("ui.app.mode",L))}function O(){_||(w(s.get("ui.player.breakpoint")),_=s.watch("ui.player.breakpoint",w)),v||(A(s.get("ui.app.breakpoint")),v=s.watch("ui.app.breakpoint",A))}function R(){a.config.video.live_event?s.get(Rr)||s.get(Dr)?b&&(b.disable(),b=null):(b=new pl(e,a,s),new Vc(a,s)):b&&(b.disable(),b=null)}function N(){S(),h=new Promise((e,t)=>{let n=null;const i=()=>{clearTimeout(n),window.innerWidth>0&&window.innerHeight>0?e():n=setTimeout(i,250)};a.events.once(Wt._ready,i),a.events.once(Wt._error,i)}),function(){const e=(e,t)=>a.updatePhpTokens().then(()=>{const n="following"===e?a.config.video.owner.id:a.config.video.id,i=a.config.user.vimeo_api_interaction_tokens;let o="";if(i)switch(o="?auth=",e){case"likes":o+=i.likes;break;case"watchlater":o+=i.watch_later;break;case"following":o+=i.following}const r=a.config.video.unlisted_hash&&"following"!==e?`:${a.config.video.unlisted_hash}`:"",s=`https://${a.config.vimeo_api_url}/users/${a.config.user.id}/${e}/${n}${r}${o}`;return g(s,{method:t,jwt:a.config.user.vimeo_api_client_token}).catch(n=>{lr.captureException(n,{extra:{action:e,method:t}})})}).catch(e=>{lr.captureException(e)});a.events.on(Wt._vodButtonPressed,e=>{if(a.config.user.purchased)return!a.config.video.vod.is_feature&&a.config.video.vod.feature_id?void a.loadVideo(a.config.video.vod.feature_id).then(()=>(a.events.fire(Wt._playButtonPressed),a.config.video.vod.feature_id)).catch(e=>{lr.captureException(e),a.events.fire(Nt._showOverlay,"error",{title:"Sorry",message:"There was a problem. Please try again."})}):void a.events.fire(Wt._playButtonPressed);a.config.video.vod&&a.config.video.vod.is_coming_soon?k(null,a.config.video.vod.url):a.performDelegateAction(Vt,()=>{a.events.fire(Nt._openPopup,"purchase",{productId:e})},[e])}),a.events.on(Wt._likeButtonPressed,()=>{a.config.user.logged_in?a.config.user.id!==a.config.video.owner.id&&(a.config.user.liked?a.performDelegateAction(Mt,(function(){e("likes","DELETE"),a.config.user.liked=!1,a.events.fire(Wt._unliked)})):a.performDelegateAction(Dt,(function(){e("likes","PUT"),a.config.user.liked=!0,a.events.fire(Wt._liked)}))):a.performDelegateAction(Ft,()=>{a.events.fire(Nt._openPopup,"login-like")})}),a.events.on(Wt._watchLaterButtonPressed,()=>{(a.config.video.url||"unlisted"===a.config.video.privacy)&&(a.config.user.logged_in?a.config.user.watch_later?a.performDelegateAction(Bt,()=>{e("watchlater","DELETE"),a.config.user.watch_later=!1,a.events.fire(Wt._removedFromWatchLater)}):a.performDelegateAction(xt,()=>{e("watchlater","PUT"),a.config.user.watch_later=!0,a.events.fire(Wt._addedToWatchLater)}):a.performDelegateAction(Ft,()=>{a.events.fire(Nt._openPopup,"login-watch-later")}))}),a.events.on(Wt._collectionsButtonPressed,()=>{a.performDelegateAction(Ht,()=>{a.config.video.vod&&a.config.video.vod.url?k(null,`${a.config.video.vod.url}#collections`):a.config.video.url&&k(null,`${a.config.video.url}#collections`)})}),a.events.on(Wt._shareButtonPressed,()=>{const e=a.config.embed.settings.share&&a.config.embed.settings.share.embed_only,t=()=>{a.events.fire(Nt._showOverlay,"share",e)};se.element?t():a.performDelegateAction(Ut,t)}),a.events.on(Wt._embedButtonPressed,()=>{a.config.embed.settings.share.embed_only&&a.performDelegateAction(Ut,()=>{a.events.fire(Nt._showOverlay,"share",!0)})}),a.events.on(Wt._followButtonPressed,()=>{if(a.config.user.logged_in&&a.config.user.id!==a.config.video.owner.id){if(a.config.user.following)return e("following","DELETE"),a.config.user.following=!1,void a.events.fire(Wt._unfollowed);e("following","PUT"),a.config.user.following=!0,a.events.fire(Wt._followed)}})}(),a.events.on(Wt._pausedForAd,()=>{e.classList.add("player-ad")}),a.events.on([Wt._resumedAfterAd,Nt._reset],()=>{e.classList.remove("player-ad")}),function(){const t=function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(h,(function(){const t=function(){const{width:t,height:n}=vt(e);return ao?n<=200?"10px":t<450?"12px":t<=1024?"11px":"10px":"10px"}();y&&(y.style.fontSize=t);const n=e.querySelector(".vp-sidedock");n&&(n.style.fontSize=t)}))};a.events.on(Wt._didEnterFullscreen,t),a.events.on(Wt._didExitFullscreen,t),window.addEventListener("orientationchange",t),ao&&(e.classList.add("mobile"),t())}(),P(),O(),function(){function t(){let t=e;if(i&&i.getFullscreenElement&&"function"==typeof i.getFullscreenElement){const n=i.getFullscreenElement();n&&n instanceof HTMLElement&&n.contains(e)&&n.classList.contains("js-player-fullscreen")&&(t=n)}return t}a.config.embed.fullscreen=!0,o.iPad&&e.classList.add("no-fullscreen-api-support");const n=a.config.embed.playsinline&&(o.iOS>=10||Xt),r=o.iPad||n;se.enabled||r||(e.classList.add("no-fullscreen-support"),o.iOS||(a.config.embed.fullscreen=!1));let s=!1,l=!1;a.events.on(Nt._forceFullscreen,(function(){se.enabled||se.videoEnabled(e)?(a.events.fire(Wt._willEnterFullscreen),l=!1,se.request(t())):a.events.fire(Nt._toggleNativeControls,!0)})),a.events.on(Wt._fullscreenButtonPressed,(function(){a.backbone.pictureInPictureActive&&a.backbone.exitPictureInPicture(),se.element?(a.events.fire(Wt._willExitFullscreen),se.exit()):(a.events.fire(Wt._willEnterFullscreen),l=!0,se.request(t()))}));var c=se.onenter,d=se.onexit;if(se.onenter=function(e){null!==document.webkitFullScreenElement&&(s||(t().contains(e)?function(e,n){s||(s=!0,a.events.fire(Wt._didEnterFullscreen,t()===e,l))}(e):"function"==typeof c&&c(e)))},se.onexit=function(){document.webkitFullScreenElement||(s?s&&(s=!1,a.events.fire(Wt._didExitFullscreen,l),l||a.events.fire(Nt._toggleNativeControls,!1),l=!1):"function"==typeof d&&d())},I(e).on("click","a",(function(e){se.element===t()&&se.exit()})),I(e).on("gestureend",(function(e){e.scale>1&&a.events.fire(Wt._fullscreenButtonPressed)})),"undefined"!=typeof MSGesture){var u=1,p=new MSGesture;p.target=e,I(e).on("pointerdown",(function(e){p.addPointer(e.pointerId)})).on(["MSGestureChange"],(function(e){u*=e.scale})).on(["MSGestureEnd"],(function(){(!s&&u>=2||s&&u<1)&&a.events.fire(Wt._fullscreenButtonPressed),u=1}))}}(),function(){const t=zi("vimeo-logo",a.config);vl(e,"a[data-clip-link]",e=>k(e,t)),a.events.on(Nt._openVimeo,k)}(),R(),a.config.video.webinar?E=new Rc(a,s):E&&(E.disable(),E=null),a.events.on(Wt._configChanged,()=>{S(),R()}),a.events.on(Nt._destroy,()=>{var e,t;null==(e=b)||e.disable(),null==(t=p)||t.destroyVimeoInteractive(),p=null})}function D(){c||(c=new ec(a,s,e.querySelector(".vp-overlay-wrapper")))}function M(){d||(d=new gc(a,{uuid:a.uuid,id:e.id,isMobileDevice:!1}))}function x(){u||(u=new bc(a))}let B;function V(e=400){var t,n;B&&clearTimeout(B),null==(t=a.element)||null==(n=t.classList)||n.add("animating"),B=setTimeout(()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("animating")},e)}function U(e){const{embed:t}=e;return!ot(t.interactive)}const F={initializationHandler:()=>(function(){D(),M(),x(),function(){if(o.browser.ie)return;U(a.config)&&(p=new Hc(a));const e=()=>{p&&(p.destroyVimeoInteractive(),p=null),U(a.config)&&(p=new Hc(a))};a.events.on(Wt._createInteractiveChanged,e),a.events.on(Wt._configChanged,t=>{t&&e()})}(),a.events.on(Wt._rightContentAreaVisibilityChange,e=>{e&&!a.element.classList.contains("right-content-area-open")?(V(),a.element.classList.add("right-content-area-open")):!e&&a.element.classList.contains("right-content-area-open")&&(V(),a.element.classList.remove("right-content-area-open"))}),a.events.on(Wt._rightContentAreaEnabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.add("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.add("content-area-sibling-enabled")})}),a.events.on(Wt._rightContentAreaDisabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.remove("content-area-sibling-enabled")})}),new dl(a,s,e);const t=new Sc(a,s,e);new _l(a,e.querySelector(".vp-notification-wrapper")),new El(a,s,e.querySelector(".vp-outro-wrapper")),new Nv(a,e),Object.defineProperties(l,{pauseKeyboard:{enumerable:!0,value:t.pause},unpauseKeyboard:{enumerable:!0,value:t.unpause}})}(),N(),Promise.resolve()),postInitializationHandler:()=>(a.backbone&&new Dc(a,a.backbone,e),Promise.resolve()),authorizationHandler(e){var t,n;O(),P(),e(),D(),M();let i="Error",o="Unhandled video privacy";switch(a.config.view){case Kt.privatePassword:return new Promise((e,t)=>{a.events.fire(Nt._showOverlay,"password"),a.events.once(Wt._passwordUnlocked,t=>{e(t)})});case Kt.privateLocked:x();const e={loggedIn:{name:"error",data:{title:"Private Video",message:"Sorry, you don’t have permission to watch.",modal:!0,logo:!!a.config.embed.settings.logo,icon:"lock"}},notLoggedIn:{name:"private-locked",data:null}};let r,s;return a.config.user.logged_in?(r=e.loggedIn,s=Promise.reject()):(r=e.notLoggedIn,s=new Promise((t,n)=>{a.events.once(Wt._privateUnlocked,i=>{if(i.view===Kt.privateLocked)return r=e.loggedIn,a.events.fire(Nt._showOverlay,r.name,r.data),void n();t(i)})})),a.events.fire(Nt._showOverlay,r.name,r.data),s;case Kt.error:i=a.config.title,o=a.config.message;break;case Kt.webinarBlocked:return x(),a.events.fire(Nt._showOverlay,"webinar-confirmation"),Promise.reject();case Kt.webinarLocked:if(null==(t=a.config.video.webinar)?void 0:t.registration_form)return new Promise((e,t)=>{a.events.fire(Nt._showOverlay,"email-capture"),a.events.once(Wt._webinarFormSuccess,t=>{e(t)})});break;case Kt.webinarFull:if(null==(n=a.config.video.webinar)?void 0:n.registration_form)return new Promise((e,t)=>{a.events.fire(Nt._showOverlay,"email-capture",{registration_full:!0}),a.events.once(Wt._webinarFormSuccess,t=>{e(t)})})}return a.events.fire(Nt._showOverlay,"error",{title:i,message:o,modal:!0}),Promise.reject()}};return a.init(t,F).catch(t=>{lr.captureException(t),D(),M(),e.classList.remove("loading"),a.events.fire(Wt._error,dn.id,dn)}),l}window.requestModule=window.requestModule||it,window.BigScreen=window.BigScreen||se;export{Ws as $,fd as A,Js as B,Dn as C,gd as D,Fs as E,td as F,Zd as G,il as H,Ds as I,Hs as J,tu as K,Nn as L,Xd as M,$d as N,zd as O,Wd as P,Id as Q,pu as R,md as S,su as T,mv as U,wo as V,Dv as VimeoPlayer,es as W,Iu as X,pv as Y,fv as Z,qd as _,bn as a,go as a0,bo as a1,ho as a2,au as b,pn as c,Rs as d,vd as e,wi as f,Xi as g,Nt as h,Sd as i,Ad as j,dv as k,xn as l,js as m,li as n,hd as o,wd as p,Nu as q,xs as r,Bs as s,at as t,gp as u,Mu as v,Cd as w,Ld as x,Td as y,Yo as z};