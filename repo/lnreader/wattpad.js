var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _b;
var tr = Object.create;
var _e = Object.defineProperty, rr = Object.defineProperties, nr = Object.getOwnPropertyDescriptor, ir = Object.getOwnPropertyDescriptors, ar = Object.getOwnPropertyNames, zt = Object.getOwnPropertySymbols, sr = Object.getPrototypeOf, Wt = Object.prototype.hasOwnProperty, cr = Object.prototype.propertyIsEnumerable;
var _t = function (e, u, t) { return u in e ? _e(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, se = function (e, u) {
    var e_2, _b;
    for (var t in u || (u = {}))
        Wt.call(u, t) && _t(e, t, u[t]);
    if (zt)
        try {
            for (var _c = __values(zt(u)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                cr.call(u, t) && _t(e, t, u[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, Ae = function (e, u) { return rr(e, ir(u)); };
var or = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, zu = function (e, u) { for (var t in u)
    _e(e, t, { get: u[t], enumerable: !0 }); }, Kt = function (e, u, t, r) {
    var e_3, _b;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (n) {
            !Wt.call(e, n) && n !== t && _e(e, n, { get: function () { return u[n]; }, enumerable: !(r = nr(u, n)) || r.enumerable });
        };
        try {
            for (var _c = __values(ar(u)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var n = _d.value;
                _loop_1(n);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return e;
};
var Ee = function (e, u, t) { return (t = e != null ? tr(sr(e)) : {}, Kt(u || !e || !e.__esModule ? _e(t, "default", { value: e, enumerable: !0 }) : t, e)); }, lr = function (e) { return Kt(_e({}, "__esModule", { value: !0 }), e); };
var Se = or(function (fa, S0) { S0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Hn = {};
zu(Hn, { default: function () { return On; } });
module.exports = lr(Hn);
var ou = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var lu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var _u, fr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Le = (_u = String.fromCodePoint) !== null && _u !== void 0 ? _u : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function Wu(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = fr.get(e)) !== null && u !== void 0 ? u : e; }
var V;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(V || (V = {}));
var dr = 32, xe;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(xe || (xe = {}));
function Ku(e) { return e >= V.ZERO && e <= V.NINE; }
function hr(e) { return e >= V.UPPER_A && e <= V.UPPER_F || e >= V.LOWER_A && e <= V.LOWER_F; }
function br(e) { return e >= V.UPPER_A && e <= V.UPPER_Z || e >= V.LOWER_A && e <= V.LOWER_Z || Ku(e); }
function pr(e) { return e === V.EQUALS || br(e); }
var F;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(F || (F = {}));
var re;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(re || (re = {}));
var De = (function () {
    function De(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = F.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = re.Strict;
    }
    De.prototype.startEntity = function (u) { this.decodeMode = u, this.state = F.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    De.prototype.write = function (u, t) { switch (this.state) {
        case F.EntityStart: return u.charCodeAt(t) === V.NUM ? (this.state = F.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = F.NamedEntity, this.stateNamedEntity(u, t));
        case F.NumericStart: return this.stateNumericStart(u, t);
        case F.NumericDecimal: return this.stateNumericDecimal(u, t);
        case F.NumericHex: return this.stateNumericHex(u, t);
        case F.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    De.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | dr) === V.LOWER_X ? (this.state = F.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = F.NumericDecimal, this.stateNumericDecimal(u, t)); };
    De.prototype.addToNumericResult = function (u, t, r, n) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(n, i) + parseInt(u.substr(t, i), n), this.consumed += i;
    } };
    De.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ku(n) || hr(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    De.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ku(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    De.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === V.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === re.Strict)
        return 0; return this.emitCodePoint(Wu(this.result), this.consumed), this.errors && (u !== V.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    De.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & xe.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var a = u.charCodeAt(t);
        if (this.treeIndex = gr(r, n, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === re.Attribute && (i === 0 || pr(a)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & xe.VALUE_LENGTH) >> 14, i !== 0) {
            if (a === V.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== re.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    De.prototype.emitNotTerminatedNamedEntity = function () { var u; var _b = this, t = _b.result, r = _b.decodeTree, n = (r[t] & xe.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    De.prototype.emitNamedEntityData = function (u, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[u] & ~xe.VALUE_LENGTH : n[u + 1], r), t === 3 && this.emitCodePoint(n[u + 2], r), r; };
    De.prototype.end = function () { var u; switch (this.state) {
        case F.NamedEntity: return this.result !== 0 && (this.decodeMode !== re.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case F.NumericDecimal: return this.emitNumericEntity(0, 2);
        case F.NumericHex: return this.emitNumericEntity(0, 3);
        case F.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case F.EntityStart: return 0;
    } };
    return De;
}());
function $t(e) { var u = "", t = new De(e, function (r) { return u += Le(r); }); return function (n, i) { var a = 0, c = 0; for (; (c = n.indexOf("&", c)) >= 0;) {
    u += n.slice(a, c), t.startEntity(i);
    var d = t.write(n, c + 1);
    if (d < 0) {
        a = c + t.end();
        break;
    }
    a = c + d, c = d === 0 ? a + 1 : a;
} var o = u + n.slice(a); return u = "", o; }; }
function gr(e, u, t, r) { var n = (u & xe.BRANCH_LENGTH) >> 7, i = u & xe.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var o = r - i;
    return o < 0 || o >= n ? -1 : e[t + o] - 1;
} var a = t, c = a + n - 1; for (; a <= c;) {
    var o = a + c >>> 1, d = e[o];
    if (d < r)
        a = o + 1;
    else if (d > r)
        c = o - 1;
    else
        return e[o + n];
} return -1; }
var _n = $t(ou), Wn = $t(lu);
var E;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(E || (E = {}));
var b;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(b || (b = {}));
function be(e) { return e === E.Space || e === E.NewLine || e === E.Tab || e === E.FormFeed || e === E.CarriageReturn; }
function fu(e) { return e === E.Slash || e === E.Gt || be(e); }
function mr(e) { return e >= E.LowerA && e <= E.LowerZ || e >= E.UpperA && e <= E.UpperZ; }
var ne;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(ne || (ne = {}));
var Y = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Ue = (function () {
    function Ue(_b, r) {
        var _c = _b.xmlMode, u = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, t = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = r, this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = b.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new De(u ? lu : ou, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    Ue.prototype.reset = function () { this.state = b.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = b.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Ue.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    Ue.prototype.end = function () { this.running && this.finish(); };
    Ue.prototype.pause = function () { this.running = !1; };
    Ue.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Ue.prototype.stateText = function (u) { u === E.Lt || !this.decodeEntities && this.fastForwardTo(E.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = b.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === E.Amp && this.startEntity(); };
    Ue.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? fu(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = b.InTagName, this.stateInTagName(u); };
    Ue.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === E.Gt || be(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Y.TitleEnd ? this.decodeEntities && u === E.Amp && this.startEntity() : this.fastForwardTo(E.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === E.Lt); };
    Ue.prototype.stateCDATASequence = function (u) { u === Y.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Y.Cdata.length && (this.state = b.InCommentLike, this.currentSequence = Y.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = b.InDeclaration, this.stateInDeclaration(u)); };
    Ue.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Ue.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Y.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = b.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Ue.prototype.isTagStartChar = function (u) { return this.xmlMode ? !fu(u) : mr(u); };
    Ue.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = b.SpecialStartSequence; };
    Ue.prototype.stateBeforeTagName = function (u) { if (u === E.ExclamationMark)
        this.state = b.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === E.Questionmark)
        this.state = b.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = b.InTagName : t === Y.ScriptEnd[2] ? this.state = b.BeforeSpecialS : t === Y.TitleEnd[2] ? this.state = b.BeforeSpecialT : this.state = b.InTagName;
    }
    else
        u === E.Slash ? this.state = b.BeforeClosingTagName : (this.state = b.Text, this.stateText(u)); };
    Ue.prototype.stateInTagName = function (u) { fu(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Ue.prototype.stateBeforeClosingTagName = function (u) { be(u) || (u === E.Gt ? this.state = b.Text : (this.state = this.isTagStartChar(u) ? b.InClosingTagName : b.InSpecialComment, this.sectionStart = this.index)); };
    Ue.prototype.stateInClosingTagName = function (u) { (u === E.Gt || be(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = b.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    Ue.prototype.stateAfterClosingTagName = function (u) { (u === E.Gt || this.fastForwardTo(E.Gt)) && (this.state = b.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeAttributeName = function (u) { u === E.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = b.InSpecialTag, this.sequenceIndex = 0) : this.state = b.Text, this.sectionStart = this.index + 1) : u === E.Slash ? this.state = b.InSelfClosingTag : be(u) || (this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ue.prototype.stateInSelfClosingTag = function (u) { u === E.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = b.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : be(u) || (this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Ue.prototype.stateInAttributeName = function (u) { (u === E.Eq || fu(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = b.AfterAttributeName, this.stateAfterAttributeName(u)); };
    Ue.prototype.stateAfterAttributeName = function (u) { u === E.Eq ? this.state = b.BeforeAttributeValue : u === E.Slash || u === E.Gt ? (this.cbs.onattribend(ne.NoValue, this.sectionStart), this.sectionStart = -1, this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)) : be(u) || (this.cbs.onattribend(ne.NoValue, this.sectionStart), this.state = b.InAttributeName, this.sectionStart = this.index); };
    Ue.prototype.stateBeforeAttributeValue = function (u) { u === E.DoubleQuote ? (this.state = b.InAttributeValueDq, this.sectionStart = this.index + 1) : u === E.SingleQuote ? (this.state = b.InAttributeValueSq, this.sectionStart = this.index + 1) : be(u) || (this.sectionStart = this.index, this.state = b.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    Ue.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === E.DoubleQuote ? ne.Double : ne.Single, this.index + 1), this.state = b.BeforeAttributeName) : this.decodeEntities && u === E.Amp && this.startEntity(); };
    Ue.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, E.DoubleQuote); };
    Ue.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, E.SingleQuote); };
    Ue.prototype.stateInAttributeValueNoQuotes = function (u) { be(u) || u === E.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ne.Unquoted, this.index), this.state = b.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === E.Amp && this.startEntity(); };
    Ue.prototype.stateBeforeDeclaration = function (u) { u === E.OpeningSquareBracket ? (this.state = b.CDATASequence, this.sequenceIndex = 0) : this.state = u === E.Dash ? b.BeforeComment : b.InDeclaration; };
    Ue.prototype.stateInDeclaration = function (u) { (u === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateInProcessingInstruction = function (u) { (u === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeComment = function (u) { u === E.Dash ? (this.state = b.InCommentLike, this.currentSequence = Y.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = b.InDeclaration; };
    Ue.prototype.stateInSpecialComment = function (u) { (u === E.Gt || this.fastForwardTo(E.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = b.Text, this.sectionStart = this.index + 1); };
    Ue.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === Y.ScriptEnd[3] ? this.startSpecial(Y.ScriptEnd, 4) : t === Y.StyleEnd[3] ? this.startSpecial(Y.StyleEnd, 4) : (this.state = b.InTagName, this.stateInTagName(u)); };
    Ue.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === Y.TitleEnd[3] ? this.startSpecial(Y.TitleEnd, 4) : t === Y.TextareaEnd[3] ? this.startSpecial(Y.TextareaEnd, 4) : (this.state = b.InTagName, this.stateInTagName(u)); };
    Ue.prototype.startEntity = function () { this.baseState = this.state, this.state = b.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? re.Strict : this.baseState === b.Text || this.baseState === b.InSpecialTag ? re.Legacy : re.Attribute); };
    Ue.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Ue.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === b.Text || this.state === b.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === b.InAttributeValueDq || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Ue.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Ue.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case b.Text: {
                this.stateText(u);
                break;
            }
            case b.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case b.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case b.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case b.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case b.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case b.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case b.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case b.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case b.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case b.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case b.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case b.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case b.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case b.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case b.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case b.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case b.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case b.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case b.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case b.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case b.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case b.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case b.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case b.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case b.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Ue.prototype.finish = function () { this.state === b.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Ue.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === b.InCommentLike ? this.currentSequence === Y.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === b.InTagName || this.state === b.BeforeAttributeName || this.state === b.BeforeAttributeValue || this.state === b.AfterAttributeName || this.state === b.InAttributeName || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueDq || this.state === b.InAttributeValueNq || this.state === b.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    Ue.prototype.emitCodePoint = function (u, t) { this.baseState !== b.Text && this.baseState !== b.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return Ue;
}());
var Re = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), L = new Set(["p"]), Yt = new Set(["thead", "tbody"]), Jt = new Set(["dd", "dt"]), Qt = new Set(["rt", "rp"]), xr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", L], ["h1", L], ["h2", L], ["h3", L], ["h4", L], ["h5", L], ["h6", L], ["select", Re], ["input", Re], ["output", Re], ["button", Re], ["datalist", Re], ["textarea", Re], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Jt], ["dt", Jt], ["address", L], ["article", L], ["aside", L], ["blockquote", L], ["details", L], ["div", L], ["dl", L], ["fieldset", L], ["figcaption", L], ["figure", L], ["footer", L], ["form", L], ["header", L], ["hr", L], ["main", L], ["nav", L], ["ol", L], ["pre", L], ["section", L], ["table", L], ["ul", L], ["rt", Qt], ["rp", Qt], ["tbody", Yt], ["tfoot", Yt]]), yr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Xt = new Set(["math", "svg"]), Zt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), vr = /\s|\//, We = (function () {
    function We(u, t) {
        if (t === void 0) { t = {}; }
        var r, n, i, a, c, o;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((a = t.Tokenizer) !== null && a !== void 0 ? a : Ue)(this.options, this), this.foreignContext = [!this.htmlMode], (o = (c = this.cbs).onparserinit) === null || o === void 0 || o.call(c, this);
    }
    We.prototype.ontext = function (u, t) { var r, n; var i = this.getSlice(u, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = t; };
    We.prototype.ontextentity = function (u, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Le(u)), this.startIndex = t; };
    We.prototype.isVoidElement = function (u) { return this.htmlMode && yr.has(u); };
    We.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    We.prototype.emitOpenTag = function (u) { var t, r, n, i; this.openTagStart = this.startIndex, this.tagname = u; var a = this.htmlMode && xr.get(u); if (a)
        for (; this.stack.length > 0 && a.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, c, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && (Xt.has(u) ? this.foreignContext.unshift(!0) : Zt.has(u) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, u), this.cbs.onopentag && (this.attribs = {}); };
    We.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    We.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    We.prototype.onclosetag = function (u, t) { var r, n, i, a, c, o, d, m; this.endIndex = t; var A = this.getSlice(u, t); if (this.lowerCaseTagNames && (A = A.toLowerCase()), this.htmlMode && (Xt.has(A) || Zt.has(A)) && this.foreignContext.shift(), this.isVoidElement(A))
        this.htmlMode && A === "br" && ((a = (i = this.cbs).onopentagname) === null || a === void 0 || a.call(i, "br"), (o = (c = this.cbs).onopentag) === null || o === void 0 || o.call(c, "br", {}, !0), (m = (d = this.cbs).onclosetag) === null || m === void 0 || m.call(d, "br", !1));
    else {
        var S = this.stack.indexOf(A);
        if (S !== -1)
            for (var x = 0; x <= S; x++) {
                var T = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, T, x !== S);
            }
        else
            this.htmlMode && A === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    We.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    We.prototype.closeCurrentTag = function (u) { var t, r; var n = this.tagname; this.endOpenTag(u), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !u), this.stack.shift()); };
    We.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    We.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    We.prototype.onattribentity = function (u) { this.attribvalue += Le(u); };
    We.prototype.onattribend = function (u, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, u === ne.Double ? '"' : u === ne.Single ? "'" : u === ne.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    We.prototype.getInstructionName = function (u) { var t = u.search(vr), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    We.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    We.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    We.prototype.oncomment = function (u, t, r) { var n, i, a, c; this.endIndex = t, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(u, t - r)), (c = (a = this.cbs).oncommentend) === null || c === void 0 || c.call(a), this.startIndex = t + 1; };
    We.prototype.oncdata = function (u, t, r) { var n, i, a, c, o, d, m, A, S, x; this.endIndex = t; var T = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (c = (a = this.cbs).ontext) === null || c === void 0 || c.call(a, T), (d = (o = this.cbs).oncdataend) === null || d === void 0 || d.call(o)) : ((A = (m = this.cbs).oncomment) === null || A === void 0 || A.call(m, "[CDATA[".concat(T, "]]")), (x = (S = this.cbs).oncommentend) === null || x === void 0 || x.call(S)), this.startIndex = t + 1; };
    We.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    We.prototype.reset = function () { var u, t, r, n; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    We.prototype.parseComplete = function (u) { this.reset(), this.end(u); };
    We.prototype.getSlice = function (u, t) { for (; u - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    We.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    We.prototype.write = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++); };
    We.prototype.end = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } u && this.write(u), this.ended = !0, this.tokenizer.end(); };
    We.prototype.pause = function () { this.tokenizer.pause(); };
    We.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    We.prototype.parseChunk = function (u) { this.write(u); };
    We.prototype.done = function (u) { this.end(u); };
    return We;
}());
var du = {};
zu(du, { CDATA: function () { return tt; }, Comment: function () { return Xu; }, Directive: function () { return Qu; }, Doctype: function () { return rt; }, ElementType: function () { return N; }, Root: function () { return Yu; }, Script: function () { return Zu; }, Style: function () { return et; }, Tag: function () { return ut; }, Text: function () { return Ju; }, isTag: function () { return $u; } });
var N;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(N || (N = {}));
function $u(e) { return e.type === N.Tag || e.type === N.Script || e.type === N.Style; }
var Yu = N.Root, Ju = N.Text, Qu = N.Directive, Xu = N.Comment, Zu = N.Script, et = N.Style, ut = N.Tag, tt = N.CDATA, rt = N.Doctype;
var hu = (function () {
    function hu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(hu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    hu.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return e0(this, u);
    };
    return hu;
}()), Ke = (function (_super) {
    __extends(Ke, _super);
    function Ke(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = u;
        return _this;
    }
    Object.defineProperty(Ke.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (u) { this.data = u; },
        enumerable: false,
        configurable: true
    });
    return Ke;
}(hu)), Oe = (function (_super) {
    __extends(Oe, _super);
    function Oe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Text;
        return _this;
    }
    Object.defineProperty(Oe.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Oe;
}(Ke)), $e = (function (_super) {
    __extends($e, _super);
    function $e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Comment;
        return _this;
    }
    Object.defineProperty($e.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return $e;
}(Ke)), Ye = (function (_super) {
    __extends(Ye, _super);
    function Ye(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = N.Directive;
        return _this;
    }
    Object.defineProperty(Ye.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ye;
}(Ke)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(Je.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return Je;
}(hu)), Qe = (function (_super) {
    __extends(Qe, _super);
    function Qe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.CDATA;
        return _this;
    }
    Object.defineProperty(Qe.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Qe;
}(Je)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Root;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return He;
}(Je)), Xe = (function (_super) {
    __extends(Xe, _super);
    function Xe(u, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = u === "script" ? N.Script : u === "style" ? N.Style : N.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(Xe.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Xe;
}(Je));
function I(e) { return $u(e); }
function Me(e) { return e.type === N.CDATA; }
function oe(e) { return e.type === N.Text; }
function Ze(e) { return e.type === N.Comment; }
function wr(e) { return e.type === N.Directive; }
function it(e) { return e.type === N.Root; }
function J(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function e0(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (oe(e))
        t = new Oe(e.data);
    else if (Ze(e))
        t = new $e(e.data);
    else if (I(e)) {
        var r = u ? nt(e.children) : [], n_1 = new Xe(e.name, se({}, e.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = se({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = se({}, e["x-attribsPrefix"])), t = n_1;
    }
    else if (Me(e)) {
        var r = u ? nt(e.children) : [], n_2 = new Qe(r);
        r.forEach(function (i) { return i.parent = n_2; }), t = n_2;
    }
    else if (it(e)) {
        var r = u ? nt(e.children) : [], n_3 = new He(r);
        r.forEach(function (i) { return i.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), t = n_3;
    }
    else if (wr(e)) {
        var r = new Ye(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function nt(e) { var u = e.map(function (t) { return e0(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var u0 = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Be = (function () {
    function Be(u, t, r) {
        this.dom = [], this.root = new He(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = u0), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : u0, this.elementCB = r != null ? r : null;
    }
    Be.prototype.onparserinit = function (u) { this.parser = u; };
    Be.prototype.onreset = function () { this.dom = [], this.root = new He(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Be.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Be.prototype.onerror = function (u) { this.handleCallback(u); };
    Be.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    Be.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? N.Tag : void 0, n = new Xe(u, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    Be.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === N.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Oe(u);
        this.addNode(r), this.lastNode = r;
    } };
    Be.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === N.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new $e(u); this.addNode(t), this.lastNode = t; };
    Be.prototype.oncommentend = function () { this.lastNode = null; };
    Be.prototype.oncdatastart = function () { var u = new Oe(""), t = new Qe([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    Be.prototype.oncdataend = function () { this.lastNode = null; };
    Be.prototype.onprocessinginstruction = function (u, t) { var r = new Ye(u, t); this.addNode(r); };
    Be.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    Be.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return Be;
}());
var le = {};
zu(le, { DocumentPosition: function () { return ie; }, append: function () { return Pr; }, appendChild: function () { return Vr; }, compareDocumentPosition: function () { return g0; }, existsOne: function () { return b0; }, filter: function () { return Ve; }, find: function () { return vu; }, findAll: function () { return zr; }, findOne: function () { return wu; }, findOneChild: function () { return Gr; }, getAttributeValue: function () { return Hr; }, getChildren: function () { return xu; }, getElementById: function () { return $r; }, getElements: function () { return Kr; }, getElementsByClassName: function () { return Yr; }, getElementsByTagName: function () { return Te; }, getElementsByTagType: function () { return Jr; }, getFeed: function () { return mt; }, getInnerHTML: function () { return Or; }, getName: function () { return Br; }, getOuterHTML: function () { return d0; }, getParent: function () { return h0; }, getSiblings: function () { return yu; }, getText: function () { return mu; }, hasAttrib: function () { return Mr; }, hasChildren: function () { return J; }, innerText: function () { return ft; }, isCDATA: function () { return Me; }, isComment: function () { return Ze; }, isDocument: function () { return it; }, isTag: function () { return I; }, isText: function () { return oe; }, nextElementSibling: function () { return dt; }, prepend: function () { return bt; }, prependChild: function () { return jr; }, prevElementSibling: function () { return ht; }, removeElement: function () { return pe; }, removeSubsets: function () { return Qr; }, replaceElement: function () { return Fr; }, testElement: function () { return Wr; }, textContent: function () { return ye; }, uniqueSort: function () { return gt; } });
function bu(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var Sr = new Map(bu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(bu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(bu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(bu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var at = /["&'<>$\x80-\uFFFF]/g, t0 = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), r0 = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function eu(e) { var u = "", t = 0, r; for (; (r = at.exec(e)) !== null;) {
    var n = r.index, i = e.charCodeAt(n), a = t0.get(i);
    a !== void 0 ? (u += e.substring(t, n) + a, t = n + 1) : (u += "".concat(e.substring(t, n), "&#x").concat(r0(e, n).toString(16), ";"), t = at.lastIndex += +((i & 64512) === 55296));
} return u + e.substr(t); }
function st(e, u) { return function (r) { var n, i = 0, a = ""; for (; n = e.exec(r);)
    i !== n.index && (a += r.substring(i, n.index)), a += u.get(n[0].charCodeAt(0)), i = n.index + 1; return a + r.substring(i); }; }
var n0 = st(/[&<>'"]/g, t0), pu = st(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), gu = st(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var i0;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(i0 || (i0 = {}));
var a0;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(a0 || (a0 = {}));
var o0 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), l0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var Er = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Tr(e) { return e.replace(/"/g, "&quot;"); }
function Cr(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? Tr : u.xmlMode || u.encodeEntities !== "utf8" ? eu : pu; return Object.keys(e).map(function (n) { var i, a; var c = (i = e[n]) !== null && i !== void 0 ? i : ""; return u.xmlMode === "foreign" && (n = (a = l0.get(n)) !== null && a !== void 0 ? a : n), !u.emptyAttrs && !u.xmlMode && c === "" ? n : "".concat(n, "=\"").concat(r(c), "\""); }).join(" "); }
var f0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function lt(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var n = 0; n < t.length; n++)
        r += Nr(t[n], u);
    return r;
}
var Fe = lt;
function Nr(e, u) { switch (e.type) {
    case Yu: return lt(e.children, u);
    case rt:
    case Qu: return Lr(e);
    case Xu: return Rr(e);
    case tt: return Ur(e);
    case Zu:
    case et:
    case ut: return qr(e, u);
    case Ju: return Dr(e, u);
} }
var Ir = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), kr = new Set(["svg", "math"]);
function qr(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = o0.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && Ir.has(e.parent.name) && (u = Ae(se({}, u), { xmlMode: !1 }))), !u.xmlMode && kr.has(e.name) && (u = Ae(se({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), n = Cr(e.attribs, u); return n && (r += " ".concat(n)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && f0.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += lt(e.children, u)), (u.xmlMode || !f0.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function Lr(e) { return "<".concat(e.data, ">"); }
function Dr(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && Er.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? eu(r) : gu(r)), r; }
function Ur(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Rr(e) { return "<!--".concat(e.data, "-->"); }
function d0(e, u) { return Fe(e, u); }
function Or(e, u) { return J(e) ? e.children.map(function (t) { return d0(t, u); }).join("") : ""; }
function mu(e) {
    return Array.isArray(e) ? e.map(mu).join("") : I(e) ? e.name === "br" ? "\n" : mu(e.children) : Me(e) ? mu(e.children) : oe(e) ? e.data : "";
}
function ye(e) { return Array.isArray(e) ? e.map(ye).join("") : J(e) && !Ze(e) ? ye(e.children) : oe(e) ? e.data : ""; }
function ft(e) { return Array.isArray(e) ? e.map(ft).join("") : J(e) && (e.type === N.Tag || Me(e)) ? ft(e.children) : oe(e) ? e.data : ""; }
function xu(e) { return J(e) ? e.children : []; }
function h0(e) { return e.parent || null; }
function yu(e) {
    var _b, _c;
    var u = h0(e);
    if (u != null)
        return xu(u);
    var t = [e], r = e.prev, n = e.next;
    for (; r != null;)
        t.unshift(r), _b = r, r = _b.prev;
    for (; n != null;)
        t.push(n), _c = n, n = _c.next;
    return t;
}
function Hr(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function Mr(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function Br(e) { return e.name; }
function dt(e) {
    var _b;
    var u = e.next;
    for (; u !== null && !I(u);)
        (_b = u, u = _b.next);
    return u;
}
function ht(e) {
    var _b;
    var u = e.prev;
    for (; u !== null && !I(u);)
        (_b = u, u = _b.prev);
    return u;
}
function pe(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function Fr(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var n = u.parent = e.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(e)] = u, e.parent = null;
} }
function Vr(e, u) { if (pe(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function Pr(e, u) { pe(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function jr(e, u) { if (pe(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function bt(e, u) { pe(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function Ve(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return vu(e, Array.isArray(u) ? u : [u], t, r);
}
function vu(e, u, t, r) { var n = [], i = [Array.isArray(u) ? u : [u]], a = [0]; for (;;) {
    if (a[0] >= i[0].length) {
        if (a.length === 1)
            return n;
        i.shift(), a.shift();
        continue;
    }
    var c = i[0][a[0]++];
    if (e(c) && (n.push(c), --r <= 0))
        return n;
    t && J(c) && c.children.length > 0 && (a.unshift(0), i.unshift(c.children));
} }
function Gr(e, u) { return u.find(e); }
function wu(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (I(i) && e(i))
            return i;
        if (t && J(i) && i.children.length > 0) {
            var a = wu(e, i.children, !0);
            if (a)
                return a;
        }
    }
    return null;
}
function b0(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return I(t) && e(t) || J(t) && b0(e, t.children); }); }
function zr(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    I(i) && e(i) && t.push(i), J(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var Su = { tag_name: function (e) { return typeof e == "function" ? function (u) { return I(u) && e(u.name); } : e === "*" ? I : function (u) { return I(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return oe(u) && e(u.data); } : function (u) { return oe(u) && u.data === e; }; } };
function pt(e, u) { return typeof u == "function" ? function (t) { return I(t) && u(t.attribs[e]); } : function (t) { return I(t) && t.attribs[e] === u; }; }
function _r(e, u) { return function (t) { return e(t) || u(t); }; }
function p0(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(Su, t) ? Su[t](r) : pt(t, r); }); return u.length === 0 ? null : u.reduce(_r); }
function Wr(e, u) { var t = p0(e); return t ? t(u) : !0; }
function Kr(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = p0(e);
    return n ? Ve(n, u, t, r) : [];
}
function $r(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), wu(pt("id", e), u, t);
}
function Te(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ve(Su.tag_name(e), u, t, r);
}
function Yr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ve(pt("class", e), u, t, r);
}
function Jr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Ve(Su.tag_type(e), u, t, r);
}
function Qr(e) { var u = e.length; for (; --u >= 0;) {
    var t = e[u];
    if (u > 0 && e.lastIndexOf(t, u - 1) >= 0) {
        e.splice(u, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (e.includes(r)) {
            e.splice(u, 1);
            break;
        }
} return e; }
var ie;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ie || (ie = {}));
function g0(e, u) { var t = [], r = []; if (e === u)
    return 0; var n = J(e) ? e : e.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = J(u) ? u : u.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(t.length, r.length), a = 0; for (; a < i && t[a] === r[a];)
    a++; if (a === 0)
    return ie.DISCONNECTED; var c = t[a - 1], o = c.children, d = t[a], m = r[a]; return o.indexOf(d) > o.indexOf(m) ? c === u ? ie.FOLLOWING | ie.CONTAINED_BY : ie.FOLLOWING : c === e ? ie.PRECEDING | ie.CONTAINS : ie.PRECEDING; }
function gt(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = g0(u, t); return r & ie.PRECEDING ? -1 : r & ie.FOLLOWING ? 1 : 0; }), e; }
function mt(e) { var u = Au(tn, e); return u ? u.name === "feed" ? Xr(u) : Zr(u) : null; }
function Xr(e) { var u; var t = e.children, r = { type: "atom", items: Te("entry", t).map(function (a) { var c; var o = a.children, d = { media: m0(o) }; Z(d, "id", "id", o), Z(d, "title", "title", o); var m = (c = Au("link", o)) === null || c === void 0 ? void 0 : c.attribs.href; m && (d.link = m); var A = ve("summary", o) || ve("content", o); A && (d.description = A); var S = ve("updated", o); return S && (d.pubDate = new Date(S)), d; }) }; Z(r, "id", "id", t), Z(r, "title", "title", t); var n = (u = Au("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; n && (r.link = n), Z(r, "description", "subtitle", t); var i = ve("updated", t); return i && (r.updated = new Date(i)), Z(r, "author", "email", t, !0), r; }
function Zr(e) { var u, t; var r = (t = (u = Au("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], n = { type: e.name.substr(0, 3), id: "", items: Te("item", e.children).map(function (a) { var c = a.children, o = { media: m0(c) }; Z(o, "id", "guid", c), Z(o, "title", "title", c), Z(o, "link", "link", c), Z(o, "description", "description", c); var d = ve("pubDate", c) || ve("dc:date", c); return d && (o.pubDate = new Date(d)), o; }) }; Z(n, "title", "title", r), Z(n, "link", "link", r), Z(n, "description", "description", r); var i = ve("lastBuildDate", r); return i && (n.updated = new Date(i)), Z(n, "author", "managingEditor", r, !0), n; }
var en = ["url", "type", "lang"], un = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function m0(e) { return Te("media:content", e).map(function (u) {
    var e_4, _b, e_5, _c;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var en_1 = __values(en), en_1_1 = en_1.next(); !en_1_1.done; en_1_1 = en_1.next()) {
            var n = en_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (en_1_1 && !en_1_1.done && (_b = en_1.return)) _b.call(en_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var un_1 = __values(un), un_1_1 = un_1.next(); !un_1_1.done; un_1_1 = un_1.next()) {
            var n = un_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (un_1_1 && !un_1_1.done && (_c = un_1.return)) _c.call(un_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function Au(e, u) { return Te(e, u, !0, 1)[0]; }
function ve(e, u, t) {
    if (t === void 0) { t = !1; }
    return ye(Te(e, u, t, 1)).trim();
}
function Z(e, u, t, r, n) {
    if (n === void 0) { n = !1; }
    var i = ve(t, r, n);
    i && (e[u] = i);
}
function tn(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function x0(e, u) { var t = new Be(void 0, u); return new We(t, u).end(e), t.root; }
var w;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(w || (w = {}));
var M;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(M || (M = {}));
var y0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, rn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, nn = new Map([[126, M.Element], [94, M.Start], [36, M.End], [42, M.Any], [33, M.Not], [124, M.Hyphen]]), an = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ce(e) { switch (e.type) {
    case w.Adjacent:
    case w.Child:
    case w.Descendant:
    case w.Parent:
    case w.Sibling:
    case w.ColumnCombinator: return !0;
    default: return !1;
} }
var sn = new Set(["contains", "icontains"]);
function cn(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function uu(e) { return e.replace(rn, cn); }
function xt(e) { return e === 39 || e === 34; }
function v0(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function we(e) { var u = [], t = w0(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function w0(e, u, t) { var r = []; function n(S) { var x = u.slice(t + S).match(y0); if (!x)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _b = __read(x, 1), T = _b[0]; return t += S + T.length, uu(T); } function i(S) { for (t += S; t < u.length && v0(u.charCodeAt(t));)
    t++; } function a() { t += 1; var S = t, x = 1; for (; x > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !c(t) ? x++ : u.charCodeAt(t) === 41 && !c(t) && x--; if (x)
    throw new Error("Parenthesis not matched"); return uu(u.slice(S, t - 1)); } function c(S) { var x = 0; for (; u.charCodeAt(--S) === 92;)
    x++; return (x & 1) === 1; } function o() { if (r.length > 0 && Ce(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function d(S) { if (r.length > 0 && r[r.length - 1].type === w.Descendant) {
    r[r.length - 1].type = S;
    return;
} o(), r.push({ type: S }); } function m(S, x) { r.push({ type: w.Attribute, name: S, action: x, value: n(1), namespace: null, ignoreCase: "quirks" }); } function A() { if (r.length && r[r.length - 1].type === w.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (i(0), u.length === t)
    return t; e: for (; t < u.length;) {
    var S = u.charCodeAt(t);
    switch (S) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== w.Descendant) && (o(), r.push({ type: w.Descendant })), i(1);
            break;
        }
        case 62: {
            d(w.Child), i(1);
            break;
        }
        case 60: {
            d(w.Parent), i(1);
            break;
        }
        case 126: {
            d(w.Sibling), i(1);
            break;
        }
        case 43: {
            d(w.Adjacent), i(1);
            break;
        }
        case 46: {
            m("class", M.Element);
            break;
        }
        case 35: {
            m("id", M.Equals);
            break;
        }
        case 91: {
            i(1);
            var x = void 0, T = null;
            u.charCodeAt(t) === 124 ? x = n(1) : u.startsWith("*|", t) ? (T = "*", x = n(2)) : (x = n(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (T = x, x = n(1))), i(0);
            var k = M.Exists, B = nn.get(u.charCodeAt(t));
            if (B) {
                if (k = B, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                u.charCodeAt(t) === 61 && (k = M.Equals, i(1));
            var D = "", H = null;
            if (k !== "exists") {
                if (xt(u.charCodeAt(t))) {
                    var O = u.charCodeAt(t), P = t + 1;
                    for (; P < u.length && (u.charCodeAt(P) !== O || c(P));)
                        P += 1;
                    if (u.charCodeAt(P) !== O)
                        throw new Error("Attribute value didn't end");
                    D = uu(u.slice(t + 1, P)), t = P + 1;
                }
                else {
                    var O = t;
                    for (; t < u.length && (!v0(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || c(t));)
                        t += 1;
                    D = uu(u.slice(O, t));
                }
                i(0);
                var ue = u.charCodeAt(t) | 32;
                ue === 115 ? (H = !1, i(1)) : ue === 105 && (H = !0, i(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var v = { type: w.Attribute, name: x, action: k, value: D, namespace: T, ignoreCase: H };
            r.push(v);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: w.PseudoElement, name: n(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? a() : null });
                continue;
            }
            var x = n(1).toLowerCase(), T = null;
            if (u.charCodeAt(t) === 40)
                if (an.has(x)) {
                    if (xt(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(x, " cannot be quoted"));
                    if (T = [], t = w0(T, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(x, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (T = a(), sn.has(x)) {
                        var k = T.charCodeAt(0);
                        k === T.charCodeAt(T.length - 1) && xt(k) && (T = T.slice(1, -1));
                    }
                    T = uu(T);
                }
            r.push({ type: w.Pseudo, name: x, data: T });
            break;
        }
        case 44: {
            A(), r = [], i(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var k = u.indexOf("*/", t + 2);
                if (k < 0)
                    throw new Error("Comment was not terminated");
                t = k + 2, r.length === 0 && i(0);
                break;
            }
            var x = null, T = void 0;
            if (S === 42)
                t += 1, T = "*";
            else if (S === 124) {
                if (T = "", u.charCodeAt(t + 1) === 124) {
                    d(w.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (y0.test(u.slice(t)))
                T = n(0);
            else
                break e;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (x = T, u.charCodeAt(t + 1) === 42 ? (T = "*", t += 2) : T = n(1)), r.push(T === "*" ? { type: w.Universal, namespace: x } : { type: w.Tag, name: T, namespace: x });
        }
    }
} return A(), t; }
var kt = Ee(Se(), 1);
var ge = Ee(Se(), 1);
var A0 = new Map([[w.Universal, 50], [w.Tag, 30], [w.Attribute, 1], [w.Pseudo, 0]]);
function tu(e) { return !A0.has(e.type); }
var on = new Map([[M.Exists, 10], [M.Equals, 8], [M.Not, 7], [M.Start, 6], [M.End, 6], [M.Any, 5]]);
function yt(e) { var u = e.map(E0); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < u[n]; n--) {
            var i = e[n + 1];
            e[n + 1] = e[n], e[n] = i, u[n + 1] = u[n], u[n] = r;
        }
} }
function E0(e) { var u, t; var r = (u = A0.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === w.Attribute ? (r = (t = on.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === M.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === w.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(E0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ru = Ee(Se(), 1), ln = /[-[\]{}()*+?.,\\^$|#\s]/g;
function T0(e) { return e.replace(ln, "\\$&"); }
var fn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Ne(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && fn.has(e.name); }
var C0 = { equals: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return Ne(u, t) ? (i = i.toLowerCase(), function (a) { var c = r.getAttributeValue(a, n); return c != null && c.length === i.length && c.toLowerCase() === i && e(a); }) : function (a) { return r.getAttributeValue(a, n) === i && e(a); }; }, hyphen: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = i.length; return Ne(u, t) ? (i = i.toLowerCase(), function (o) { var d = r.getAttributeValue(o, n); return d != null && (d.length === a || d.charAt(a) === "-") && d.substr(0, a).toLowerCase() === i && e(o); }) : function (o) { var d = r.getAttributeValue(o, n); return d != null && (d.length === a || d.charAt(a) === "-") && d.substr(0, a) === i && e(o); }; }, element: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (/\s/.test(i))
        return ru.default.falseFunc; var a = new RegExp("(?:^|\\s)".concat(T0(i), "(?:$|\\s)"), Ne(u, t) ? "i" : ""); return function (o) { var d = r.getAttributeValue(o, n); return d != null && d.length >= i.length && a.test(d) && e(o); }; }, exists: function (e, _b, _c) {
        var u = _b.name;
        var t = _c.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = i.length; return a === 0 ? ru.default.falseFunc : Ne(u, t) ? (i = i.toLowerCase(), function (c) { var o = r.getAttributeValue(c, n); return o != null && o.length >= a && o.substr(0, a).toLowerCase() === i && e(c); }) : function (c) { var o; return !!(!((o = r.getAttributeValue(c, n)) === null || o === void 0) && o.startsWith(i)) && e(c); }; }, end: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = -i.length; return a === 0 ? ru.default.falseFunc : Ne(u, t) ? (i = i.toLowerCase(), function (c) { var o; return ((o = r.getAttributeValue(c, n)) === null || o === void 0 ? void 0 : o.substr(a).toLowerCase()) === i && e(c); }) : function (c) { var o; return !!(!((o = r.getAttributeValue(c, n)) === null || o === void 0) && o.endsWith(i)) && e(c); }; }, any: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (i === "")
        return ru.default.falseFunc; if (Ne(u, t)) {
        var a_1 = new RegExp(T0(i), "i");
        return function (o) { var d = r.getAttributeValue(o, n); return d != null && d.length >= i.length && a_1.test(d) && e(o); };
    } return function (a) { var c; return !!(!((c = r.getAttributeValue(a, n)) === null || c === void 0) && c.includes(i)) && e(a); }; }, not: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return i === "" ? function (a) { return !!r.getAttributeValue(a, n) && e(a); } : Ne(u, t) ? (i = i.toLowerCase(), function (a) { var c = r.getAttributeValue(a, n); return (c == null || c.length !== i.length || c.toLowerCase() !== i) && e(a); }) : function (a) { return r.getAttributeValue(a, n) !== i && e(a); }; } };
var dn = new Set([9, 10, 12, 13, 32]), N0 = 48, hn = 57;
function I0(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = i(), n = a(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (n != null ? n : 1), c(), u < e.length ? (r = i(), c(), n = a()) : r = n = 0), n === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * n]; function i() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function a() { var o = u, d = 0; for (; u < e.length && e.charCodeAt(u) >= N0 && e.charCodeAt(u) <= hn;)
    d = d * 10 + (e.charCodeAt(u) - N0), u++; return u === o ? null : d; } function c() { for (; u < e.length && dn.has(e.charCodeAt(u));)
    u++; } }
var vt = Ee(Se(), 1);
function k0(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return vt.default.falseFunc; if (u === -1)
    return function (i) { return i <= t; }; if (u === 0)
    return function (i) { return i === t; }; if (u === 1)
    return t < 0 ? vt.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(u), n = (t % r + r) % r; return u > 1 ? function (i) { return i >= t && i % r === n; } : function (i) { return i <= t && i % r === n; }; }
function Pe(e) { return k0(I0(e)); }
var ee = Ee(Se(), 1);
function Eu(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var je = { contains: function (e, u, _b) {
        var t = _b.adapter;
        return function (n) { return e(n) && t.getText(n).includes(u); };
    }, icontains: function (e, u, _b) {
        var t = _b.adapter;
        var r = u.toLowerCase();
        return function (i) { return e(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = Pe(u);
        return n === ee.default.falseFunc ? ee.default.falseFunc : n === ee.default.trueFunc ? Eu(e, t) : function (a) { var c = t.getSiblings(a), o = 0; for (var d = 0; d < c.length && !r(a, c[d]); d++)
            t.isTag(c[d]) && o++; return n(o) && e(a); };
    }, "nth-last-child": function (e, u, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = Pe(u);
        return n === ee.default.falseFunc ? ee.default.falseFunc : n === ee.default.trueFunc ? Eu(e, t) : function (a) { var c = t.getSiblings(a), o = 0; for (var d = c.length - 1; d >= 0 && !r(a, c[d]); d--)
            t.isTag(c[d]) && o++; return n(o) && e(a); };
    }, "nth-of-type": function (e, u, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = Pe(u);
        return n === ee.default.falseFunc ? ee.default.falseFunc : n === ee.default.trueFunc ? Eu(e, t) : function (a) { var c = t.getSiblings(a), o = 0; for (var d = 0; d < c.length; d++) {
            var m = c[d];
            if (r(a, m))
                break;
            t.isTag(m) && t.getName(m) === t.getName(a) && o++;
        } return n(o) && e(a); };
    }, "nth-last-of-type": function (e, u, _b) {
        var t = _b.adapter, r = _b.equals;
        var n = Pe(u);
        return n === ee.default.falseFunc ? ee.default.falseFunc : n === ee.default.trueFunc ? Eu(e, t) : function (a) { var c = t.getSiblings(a), o = 0; for (var d = c.length - 1; d >= 0; d--) {
            var m = c[d];
            if (r(a, m))
                break;
            t.isTag(m) && t.getName(m) === t.getName(a) && o++;
        } return n(o) && e(a); };
    }, root: function (e, u, _b) {
        var t = _b.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && e(r); };
    }, scope: function (e, u, t, r) { var n = t.equals; return !r || r.length === 0 ? je.root(e, u, t) : r.length === 1 ? function (i) { return n(r[0], i) && e(i); } : function (i) { return r.includes(i) && e(i); }; }, hover: wt("isHovered"), visited: wt("isVisited"), active: wt("isActive") };
function wt(e) { return function (t, r, _b) {
    var n = _b.adapter;
    var i = n[e];
    return typeof i != "function" ? ee.default.falseFunc : function (c) { return i(c) && t(c); };
}; }
var nu = { empty: function (e, _b) {
        var u = _b.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (n) { return u.isTag(n); });
        return r != null && t(e, r);
    }, "last-child": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        var r = u.getSiblings(e);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(e, r[n]))
                return !0;
            if (u.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (t(e, a))
                return !0;
            if (u.isTag(a) && u.getName(a) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = r.length - 1; i >= 0; i--) {
            var a = r[i];
            if (t(e, a))
                return !0;
            if (u.isTag(a) && u.getName(a) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (n) { return t(e, n) || !u.isTag(n) || u.getName(n) !== r; });
    }, "only-child": function (e, _b) {
        var u = _b.adapter, t = _b.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function St(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var Tu = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var ae = Ee(Se(), 1);
var Tt = {};
function Ct(e, u) { return e === ae.default.falseFunc ? ae.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function Nt(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function Et(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var At = function (e, u, t, r, n) { var i = n(u, Et(t), r); return i === ae.default.trueFunc ? e : i === ae.default.falseFunc ? ae.default.falseFunc : function (a) { return i(a) && e(a); }; }, Cu = { is: At, matches: At, where: At, not: function (e, u, t, r, n) { var i = n(u, Et(t), r); return i === ae.default.falseFunc ? e : i === ae.default.trueFunc ? ae.default.falseFunc : function (a) { return !i(a) && e(a); }; }, has: function (e, u, t, r, n) { var i = t.adapter, a = Et(t); a.relativeSelector = !0; var c = u.some(function (m) { return m.some(tu); }) ? [Tt] : void 0, o = n(u, a, c); if (o === ae.default.falseFunc)
        return ae.default.falseFunc; var d = Ct(o, i); if (c && o !== ae.default.trueFunc) {
        var _b = o.shouldTestNextSiblings, m_1 = _b === void 0 ? !1 : _b;
        return function (A) { if (!e(A))
            return !1; c[0] = A; var S = i.getChildren(A), x = m_1 ? __spreadArray(__spreadArray([], __read(S), false), __read(Nt(A, i)), false) : S; return i.existsOne(d, x); };
    } return function (m) { return e(m) && i.existsOne(d, i.getChildren(m)); }; } };
function q0(e, u, t, r, n) { var i; var a = u.name, c = u.data; if (Array.isArray(c)) {
    if (!(a in Cu))
        throw new Error("Unknown pseudo-class :".concat(a, "(").concat(c, ")"));
    return Cu[a](e, c, t, r, n);
} var o = (i = t.pseudos) === null || i === void 0 ? void 0 : i[a], d = typeof o == "string" ? o : Tu[a]; if (typeof d == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(a, " doesn't have any arguments"));
    var m = we(d);
    return Cu.is(e, m, t, r, n);
} if (typeof o == "function")
    return St(o, a, c, 1), function (m) { return o(m, c) && e(m); }; if (a in je)
    return je[a](e, c, t, r); if (a in nu) {
    var m_2 = nu[a];
    return St(m_2, a, c, 2), function (A) { return m_2(A, t, c) && e(A); };
} throw new Error("Unknown pseudo-class :".concat(a)); }
function It(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function L0(e, u, t, r, n) { var i = t.adapter, a = t.equals; switch (u.type) {
    case w.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case w.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case w.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), C0[u.action](e, u, t);
    }
    case w.Pseudo: return q0(e, u, t, r, n);
    case w.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (d) { return i.getName(d) === c_1 && e(d); };
    }
    case w.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (d) { var m = d; for (; m = It(m, i);)
                if (e(m))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (d) { var m = d; for (; m = It(m, i);)
            if (!c_2.has(m)) {
                if (i.isTag(m) && e(m))
                    return !0;
                c_2.add(m);
            } return !1; };
    }
    case "_flexibleDescendant": return function (o) { var d = o; do
        if (e(d))
            return !0;
    while (d = It(d, i)); return !1; };
    case w.Parent: return function (o) { return i.getChildren(o).some(function (d) { return i.isTag(d) && e(d); }); };
    case w.Child: return function (o) { var d = i.getParent(o); return d != null && i.isTag(d) && e(d); };
    case w.Sibling: return function (o) { var d = i.getSiblings(o); for (var m = 0; m < d.length; m++) {
        var A = d[m];
        if (a(o, A))
            break;
        if (i.isTag(A) && e(A))
            return !0;
    } return !1; };
    case w.Adjacent: return i.prevElementSibling ? function (o) { var d = i.prevElementSibling(o); return d != null && e(d); } : function (o) { var d = i.getSiblings(o), m; for (var A = 0; A < d.length; A++) {
        var S = d[A];
        if (a(o, S))
            break;
        i.isTag(S) && (m = S);
    } return !!m && e(m); };
    case w.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function D0(e, u, t) { var r = Nu(e, u, t); return Ct(r, u.adapter); }
function Nu(e, u, t) { var r = typeof e == "string" ? we(e) : e; return Iu(r, u, t); }
function U0(e) { return e.type === w.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(U0); })); }
var bn = { type: w.Descendant }, pn = { type: "_flexibleDescendant" }, gn = { type: w.Pseudo, name: "scope", data: null };
function mn(e, _b, t) {
    var e_6, _c;
    var u = _b.adapter;
    var r = !!(t != null && t.every(function (n) { var i = u.isTag(n) && u.getParent(n); return n === Tt || i && u.isTag(i); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && tu(n[0]) && n[0].type !== w.Descendant))
                if (r && !n.some(U0))
                    n.unshift(bn);
                else
                    continue;
            n.unshift(gn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_c = e_7.return)) _c.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Iu(e, u, t) { var r; e.forEach(yt), t = (r = u.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    mn(e, u, i);
else if (e.some(function (o) { return o.length > 0 && tu(o[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var a = !1, c = e.map(function (o) { if (o.length >= 2) {
    var _b = __read(o, 2), d = _b[0], m = _b[1];
    d.type !== w.Pseudo || d.name !== "scope" || (n && m.type === w.Descendant ? o[1] = pn : (m.type === w.Adjacent || m.type === w.Sibling) && (a = !0));
} return xn(o, u, i); }).reduce(yn, ge.default.falseFunc); return c.shouldTestNextSiblings = a, c; }
function xn(e, u, t) { var r; return e.reduce(function (n, i) { return n === ge.default.falseFunc ? ge.default.falseFunc : L0(n, i, u, t, Iu); }, (r = u.rootFunc) !== null && r !== void 0 ? r : ge.default.trueFunc); }
function yn(e, u) { return u === ge.default.falseFunc || e === ge.default.trueFunc ? e : e === ge.default.falseFunc || u === ge.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var R0 = function (e, u) { return e === u; }, vn = { adapter: le, equals: R0 };
function O0(e) { var u, t, r, n; var i = e != null ? e : vn; return (u = i.adapter) !== null && u !== void 0 || (i.adapter = le), (t = i.equals) !== null && t !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : R0), i; }
function qt(e) { return function (t, r, n) { var i = O0(r); return e(t, i, n); }; }
var za = qt(D0), _a = qt(Nu), ku = qt(Iu);
function H0(e) { return function (t, r, n) { var i = O0(n); typeof t != "function" && (t = Nu(t, i, r)); var a = qu(r, i.adapter, t.shouldTestNextSiblings); return e(t, a, i); }; }
function qu(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = wn(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function wn(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var n = 0; n < r; n++) {
    var i = Nt(t[n], u);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var Wa = H0(function (e, u, t) { return e === kt.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), Ka = H0(function (e, u, t) { return e === kt.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var Du = Ee(Se(), 1);
var Sn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ge(e) { return e.type !== "pseudo" ? !1 : Sn.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(Ge); }) : !1; }
function M0(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, t) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * t;
    case "even": return 2 * t - 1;
    case "last":
    case "not": return 1 / 0;
} }
function B0(e) { for (; e.parent;)
    e = e.parent; return e; }
function Lu(e) {
    var e_8, _b;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(Ge) ? u.push(r) : t.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [t, u];
}
var An = { type: w.Universal, namespace: null }, En = { type: w.Pseudo, name: "scope", data: null };
function Ut(e, u, t) {
    if (t === void 0) { t = {}; }
    return Tn([e], u, t);
}
function Tn(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _b = __read(Lu(we(u)), 2), r = _b[0], n = _b[1];
    return r.length > 0 && e.some(ku(r, t)) || n.some(function (i) { return F0(i, e, t).length > 0; });
}
function Cn(e, u, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < u.length ? [n < 0 ? u[u.length + n] : u[n]] : [];
    case "gt": return isFinite(n) ? u.slice(n + 1) : [];
    case "even": return u.filter(function (i, a) { return a % 2 === 0; });
    case "odd": return u.filter(function (i, a) { return a % 2 === 1; });
    case "not": {
        var i_1 = new Set(Nn(t, u, r));
        return u.filter(function (a) { return !i_1.has(a); });
    }
} }
function Nn(e, u, t) { if (u.length === 0)
    return []; var _b = __read(Lu(e), 2), r = _b[0], n = _b[1], i; if (r.length) {
    var a = Dt(u, r, t);
    if (n.length === 0)
        return a;
    a.length && (i = new Set(a));
} for (var a = 0; a < n.length && (i == null ? void 0 : i.size) !== u.length; a++) {
    var c = n[a];
    if ((i ? u.filter(function (m) { return I(m) && !i.has(m); }) : u).length === 0)
        break;
    var d = F0(c, u, t);
    if (d.length)
        if (i)
            d.forEach(function (m) { return i.add(m); });
        else {
            if (a === n.length - 1)
                return d;
            i = new Set(d);
        }
} return typeof i != "undefined" ? i.size === u.length ? u : u.filter(function (a) { return i.has(a); }) : []; }
function F0(e, u, t) { var r; if (e.some(Ce)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : B0(u[0]), i = Ae(se({}, t), { context: u, relativeSelector: !1 });
    return e.push(En), Uu(n, e, i, !0, u.length);
} return Uu(u, e, t, !1, u.length); }
function Rt(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return V0(u, e);
    var _b = __read(Lu(we(e)), 2), n = _b[0], i = _b[1], a = i.map(function (c) { return Uu(u, c, t, !0, r); });
    return n.length && a.push(Lt(u, n, t, r)), a.length === 0 ? [] : a.length === 1 ? a[0] : gt(a.reduce(function (c, o) { return __spreadArray(__spreadArray([], __read(c), false), __read(o), false); }));
}
function Uu(e, u, t, r, n) { var i = u.findIndex(Ge), a = u.slice(0, i), c = u[i], o = u.length - 1 === i ? n : 1 / 0, d = M0(c.name, c.data, o); if (d === 0)
    return []; var A = (a.length === 0 && !Array.isArray(e) ? xu(e).filter(I) : a.length === 0 ? (Array.isArray(e) ? e : [e]).filter(I) : r || a.some(Ce) ? Lt(e, [a], t, d) : Dt(e, [a], t)).slice(0, d), S = Cn(c.name, A, c.data, t); if (S.length === 0 || u.length === i + 1)
    return S; var x = u.slice(i + 1), T = x.some(Ce); if (T) {
    if (Ce(x[0])) {
        var k = x[0].type;
        (k === w.Sibling || k === w.Adjacent) && (S = qu(S, le, !0)), x.unshift(An);
    }
    t = Ae(se({}, t), { relativeSelector: !1, rootFunc: function (k) { return S.includes(k); } });
}
else
    t.rootFunc && t.rootFunc !== Du.trueFunc && (t = Ae(se({}, t), { rootFunc: Du.trueFunc })); return x.some(Ge) ? Uu(S, x, t, !1, n) : T ? Lt(S, [x], t, n) : Dt(S, [x], t); }
function Lt(e, u, t, r) { var n = ku(u, t, e); return V0(e, n, r); }
function V0(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = qu(e, le, u.shouldTestNextSiblings);
    return vu(function (n) { return I(n) && u(n); }, r, !0, t);
}
function Dt(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(I); if (r.length === 0)
    return r; var n = ku(u, t); return n === Du.trueFunc ? r : r.filter(n); }
function P0(e) { var u = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: u[1], auth: u[2], path: u[3] || "", query: u[4], frag: u[5] }; }
function Ot(e) { var u = [], t = e.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (u.length > 1 && u.pop(), r === t.length - 1 && u.push("")) : n === "." ? r === t.length - 1 && u.push("") : u.push(n);
} return u.join("/"); }
function Ou(e, u) { u = u == null ? "" : String(u).trim(); var t = P0(u); if (t.scheme || !e)
    return u; var r = P0(String(e)); if (!r.scheme)
    return u; var n = r.auth, i, a; if (t.auth !== void 0)
    n = t.auth, i = Ot(t.path), a = t.query;
else if (!t.path)
    i = r.path, a = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = Ot(t.path);
    else {
        var c = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = Ot(c + t.path);
    }
    a = t.query;
} return n !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + i + (a !== void 0 ? "?" + a : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Ru = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function j0(e) { if (typeof btoa == "function")
    return btoa(e); var u = ""; for (var t = 0; t < e.length; t += 3) {
    var r = e.charCodeAt(t), n = e.charCodeAt(t + 1), i = e.charCodeAt(t + 2), a = r << 16 | (n || 0) << 8 | (i || 0);
    u += Ru[a >> 18 & 63] + Ru[a >> 12 & 63] + (t + 1 < e.length ? Ru[a >> 6 & 63] : "=") + (t + 2 < e.length ? Ru[a & 63] : "=");
} return u; }
var In = function (e, u, t) { return Rt(e, u, t); }, W0 = function (e, u, t) { return Rt(e, u, t, 1)[0] || null; }, K0 = /[\s ]+/g, G0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), kn = { containsOwn: function (e, u) { return Mt(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return z0(u).test(Ht(e)); }, matchesOwn: function (e, u) { return z0(u).test(Mt(e)); }, containsData: function (e, u) { return ye(e).includes(u); }, "contains-ci": function (e, u) { return Ht(e).toLowerCase().includes(String(u).toLowerCase()); } };
function z0(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var Hu = { pseudos: kn, xmlMode: !1, lowerCaseTags: !0 };
function Mu(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Ht(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _b;
    try {
        for (var _c = __values(r.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? u += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? u += " " : n.type === "tag" && (G0.has(n.name) && (u += " "), t(n), G0.has(n.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(K0, " ").trim(); }
function Mt(e) {
    var e_11, _b;
    var u = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var t = _d.value;
            t.type === "text" && (u += t.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return u.replace(K0, " ").trim();
}
function $0(e, u) { if (!u)
    return ""; try {
    return Ou(e, u);
}
catch (t) {
    return e ? "" : u;
} }
var Ie = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return fe.of(In(Mu(u), this.node, Hu), this.doc); };
    e.prototype.selectFirst = function (u) { var t = W0(Mu(u), this.node, Hu); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return Ut(this.node, Mu(u), Hu); };
    e.prototype.text = function () { return Ht(this.node); };
    e.prototype.ownText = function () { return Mt(this.node); };
    e.prototype.wholeText = function () { return ye(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return u.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (u) { return Fe(u, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return Fe(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (u) { return this.classNames().includes(u); };
    e.prototype.attr = function (u, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[u] = String(t)), this; if (!this.node.attribs)
        return ""; if (u.startsWith("abs:"))
        return $0(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
    e.prototype.absUrl = function (u) { return this.attr("abs:" + u); };
    e.prototype.hasAttr = function (u) { return !!(this.node.attribs && (u.startsWith("abs:") ? u.slice(4) : u) in this.node.attribs); };
    e.prototype.removeAttr = function (u) { return this.node.attribs && delete this.node.attribs[u], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var u = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), t = _f[0], r = _f[1];
                t.startsWith("data-") && (u[t.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return u;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var u = this.node.parent; return u && u.type !== "root" ? new e(u, this.doc) : null; };
    e.prototype.parents = function () { var u = [], t = this.node.parent; for (; t && t.type !== "root";)
        u.push(t), t = t.parent; return fe.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Ut(t, Mu(u), Hu))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return fe.of((this.node.children || []).filter(I), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(I)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(I).length; };
    e.prototype.nextElementSibling = function () { var u = dt(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = ht(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return fe.of(yu(this.node).filter(function (u) { return u !== _this.node && I(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return yu(this.node).filter(I).indexOf(this.node); };
    e.prototype.getElementsByTag = function (u) { return this.select(u); };
    e.prototype.getElementsByClass = function (u) { return this.select("." + u); };
    e.prototype.getElementById = function (u) { return this.selectFirst("#" + u); };
    e.prototype.remove = function () { return pe(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return ({ text: function () { return u.data; }, toString: function () { return u.data; } }); }); };
    e.prototype.title = function () { var u = this.selectFirst("title"); return u ? u.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Ft = Object.create(Array.prototype), fe = { of: Bt, prototype: Ft };
function Bt(e, u) {
    var e_13, _b;
    var t = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            t.push(r instanceof Ie ? r : new Ie(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, Ft), t;
}
var _0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return fe.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, u) {
        var e_14, _b;
        if (u !== void 0)
            return this.forEach(function (t) { return t.attr(e, u); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                if (t.hasAttr(e))
                    return t.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (u) { return u.hasAttr(e); }).map(function (u) { return u.attr(e); }); }, hasAttr: function (e) { return this.some(function (u) { return u.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (u) { return u.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _b, e_16, _c;
        var u = Bt([]), t = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var r = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(r.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var n = _h.value;
                        t.has(n.node) || (t.add(n.node), u.push(n));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return u;
    }, selectFirst: function (e) {
        var e_17, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                var t = u.selectFirst(e);
                if (t)
                    return t;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return fe.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = Bt([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                e.push.apply(e, __spreadArray([], __read(u.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return fe.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return fe.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(_0)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(Ft, e, { value: _0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Bu(e, u) { var t = x0(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Ie(t, null); r.doc = r, r.__base = u || ""; var n = W0("base[href]", t); return n && n.attribs.href && (r.__base = $0(r.__base, n.attribs.href)), r; }
function Y0(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Bu(e), n = function (i) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((i.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var a = _f.value;
            if (a.type === "script" || a.type === "style" || a.type === "comment") {
                pe(a);
                continue;
            }
            if (a.type === "tag" && (n(a), !t.has(a.name))) {
                var c = (a.children || []).slice();
                try {
                    for (var c_3 = (e_20 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var o = c_3_1.value;
                        bt(a, o);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_c = c_3.return)) _c.call(c_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                pe(a);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return n(r.node), Fe(r.node.children, { decodeEntities: !1 }); }
var iu = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function qn(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return j0(u); }
function J0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
function Ln(e) { var u = ""; for (var t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r < 128) {
        u += e[t];
        continue;
    }
    if (r === 128) {
        u += "€";
        continue;
    }
    var n = e.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (u += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : u += "�";
} return u; }
var Fu = (function () {
    function Fu(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    Fu.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Fu.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return u || (u = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), u && /^(gbk|gb2312|gb18030)$/i.test(String(u)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Ln(t) : t; };
    Fu.prototype.string = function (u) { return this.text(u); };
    Fu.prototype.html = function (u) { return Bu(this.text(u), this.url); };
    Fu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    Fu.prototype.base64 = function () { return qn(this._raw.bytes || J0(this.text())); };
    Fu.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || J0(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return Fu;
}());
function Dn(e) {
    var e_21, _b;
    var u = {};
    if (!e)
        return u;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (t, r) { u[r] = t; }), u;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var t = _d.value;
            u[t] = String(e[t]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return u;
}
function X0(e, u) {
    var t = function (c) { return ({ getItem: function (o) { var d = e.storageGet(c + o); return d == null ? null : d; }, setItem: function (o, d) { return e.storageSet(c + o, d == null ? null : String(d)); }, removeItem: function (o) { return e.storageSet(c + o, null); }, clear: function () { return e.storageClear && e.storageClear(c); } }); }, r = "__cookie__", n = [], i = {};
    i.Response = { success: function (c, o) { return ({ code: 0, data: c === void 0 ? null : c, data2: o === void 0 ? null : o }); }, error: function (c) { return ({ code: 1, data: c == null ? "" : String(c) }); } }, i.fetch = function (o, d) {
        return __awaiter(this, void 0, void 0, function () {
            var m, D, A, S, x, D, T, k, D_2, H, B, D_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        d = d || {};
                        m = String(o);
                        if (d.queries) {
                            D = Object.entries(d.queries).map(function (_b) {
                                var _c = __read(_b, 2), H = _c[0], v = _c[1];
                                return encodeURIComponent(H) + "=" + encodeURIComponent(v);
                            }).join("&");
                            D && (m += (m.includes("?") ? "&" : "?") + D);
                        }
                        A = Object.assign({ "User-Agent": iu }, Dn(d.headers)), S = e.storageGet(r);
                        S && !Object.keys(A).some(function (D) { return D.toLowerCase() === "cookie"; }) && (A.Cookie = S);
                        x = d.body;
                        if (x != null && typeof x == "object") {
                            D = Object.keys(A).find(function (H) { return H.toLowerCase() === "content-type"; });
                            D && /json/i.test(A[D]) ? x = JSON.stringify(x) : (x = Object.entries(x).map(function (_b) {
                                var _c = __read(_b, 2), H = _c[0], v = _c[1];
                                return encodeURIComponent(H) + "=" + encodeURIComponent(v);
                            }).join("&"), D || (A["Content-Type"] = "application/x-www-form-urlencoded"));
                        }
                        T = { url: m, method: (d.method || (x != null ? "POST" : "GET")).toUpperCase(), headers: A, body: x, timeout: d.timeout }, k = T.method === "GET" && x == null ? m + "\n" + JSON.stringify(A) : null;
                        if (k) {
                            D_2 = Date.now(), H = n.find(function (v) { return v.k === k && D_2 - v.t < 6e4; });
                            if (H)
                                return [2, new Fu(H.raw, T)];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, e.request(T)];
                    case 2:
                        B = _b.sent();
                        return [3, 4];
                    case 3:
                        D_1 = _b.sent();
                        B = { status: 0, url: m, headers: {}, text: "", error: String(D_1 && D_1.message || D_1) };
                        return [3, 4];
                    case 4: return [2, (k && B && B.status === 200 && String(B.text == null ? "" : B.text).length < 3e6 && (n.push({ k: k, t: Date.now(), raw: B }), n.length > 6 && n.shift()), new Fu(B, T))];
                }
            });
        });
    }, i.Http = { get: function (c) { return Q0(i, "GET", c); }, post: function (c) { return Q0(i, "POST", c); } }, i.Html = { parse: function (c, o) { return Bu(c, o || ""); }, clean: function (c, o) { return Y0(c, o); } }, i.localStorage = t("ls:"), i.cacheStorage = t("cs:"), i.localConfig = { getItem: function (c) { return e.config(c); } }, i.localCookie = { setCookie: function (c) { e.storageSet(r, String(c).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, i.sleep = function (c) { return new Promise(function (o) { return typeof setTimeout == "function" ? setTimeout(o, Math.min(Number(c) || 0, 1e4)) : o(); }); };
    var a = function () {
        var c = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            c[_i] = arguments[_i];
        }
        try {
            e.log && e.log(c.map(function (o) { return typeof o == "string" ? o : JSON.stringify(o); }).join(" "));
        }
        catch (o) { }
    };
    return i.Log = { log: a }, i.console = { log: a, error: a, warn: a, info: a }, i.Console = i.console, i.log = a, i.UserAgent = { system: function () { return iu; }, chrome: function () { return iu; }, android: function () { return iu; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = fe, i.Element = Ie, i.__meta = u, i;
}
function Q0(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, a) { return r.headers[i] = a, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return n; }
function ke(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof __abs == "function")
    return __abs(e, u); try {
    return Ou(e, u);
}
catch (t) {
    return u;
} }
var U = function (e) { return e == null ? "" : String(e); }, Un = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, Vu = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, n = u.host;
        this.meta = t, this.host = n, this.env = u.env || X0(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return U(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "origins", {
        get: function () { if (this._orig)
            return this._orig; var u = (this.meta.config || {}).DOMAIN || {}, t = function (i) { var a = /^https?:\/\/(?:www\.|m\.)?([^/?#:]+)/i.exec(U(i).trim()); return a ? a[1].toLowerCase() : ""; }, r = {}; [this.meta.source, u.default].concat(u.values || []).map(t).filter(Boolean).forEach(function (i) { r[i] = 1; }); var n = /^https?:\/\/[^/?#]+/i.exec(U(this.meta.source)); return this._orig = { key: t, hosts: r, def: n ? n[0] : "" }, this._orig; },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.canon = function (u) { u = U(u); var t = this.origins; if (!t.def)
        return u; var r = /^https?:\/\/[^/?#]+/i.exec(u); if (!r)
        return u; var n = t.key(r[0]); return t.hosts[n] === 1 || n === t.key(this.base) ? t.def + u.slice(r[0].length) : u; };
    class_1.prototype.decanon = function (u) { u = U(u); var t = this.origins; if (!t.def)
        return u; var r = (/^https?:\/\/[^/?#]+/i.exec(this.base) || [])[0]; return !r || r === t.def ? u : u.slice(0, t.def.length) === t.def ? r + u.slice(t.def.length) : u; };
    class_1.prototype.has = function (u) { return !!this.scripts[u]; };
    class_1.prototype.run = function (u) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, n, i, a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        n = function (c) { var o = _this.host.config(c); return o == null ? (_this.meta.configDefaults || {})[c] : o; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _b.sent();
                        if (typeof i != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(U)), false))];
                    case 2:
                        a = _b.sent();
                        if (!a)
                            throw new Error(u + ": empty result");
                        if (a.code !== 0)
                            throw new Error(u + ": " + U(a.data || "error"));
                        return [2, a];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return U(u).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var u, _b, t_1, t_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    u = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (u = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    t_1 = _c.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!u.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    u = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = u.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (u, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, a, c, o;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = u + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, i)];
                    case 1:
                        a = _b.sent(), c = U(a.data2);
                        c && (this.tokens[n + "|" + (r + 1)] = c);
                        o = (a.data || []).filter(Boolean).map(function (d) { return ({ name: U(d.name).trim(), link: _this.canon(ke(d.host || _this.base + "/", d.link)), cover: ke(d.host || _this.base + "/", d.cover), description: U(d.description), tag: U(d.tag) }); }).filter(function (d) { return d.name && d.link; });
                        return [2, { items: o, hasNext: !!c && o.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _b.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), U(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _b.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), U(r.input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.search = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", u, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    u = this.decanon(u);
                    return [4, this.run("detail", u)];
                case 1:
                    t = (_b.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: U(t.name).trim(), cover: ke(t.host || this.base + "/", t.cover), author: U(t.author).trim(), description: Z0(U(t.description)), detail: Z0(U(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Un(r.map(function (n) { return String(n).trim(); })), url: this.canon(u), format: U(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = this.decanon(u);
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", u)];
                    case 1:
                        r = (_g.sent()).data || [u];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        n = r_1_1.value;
                        _c = (_b = t).concat;
                        return [4, this.run("toc", U(n))];
                    case 4:
                        t = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_f = r_1.return)) _f.call(r_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", u)];
                    case 11:
                        _d = (t = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: U(r.name).trim() || "#" + (n + 1), url: _this.canon(ke(r.host || _this.base + "/", r.url)), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _b, _c, r, n;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = this.decanon(u);
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        _b = t = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", u)];
                    case 3:
                        _c = t = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = t = [u];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (i) { return !i || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(i)); }, n = function (i) { if (typeof i == "string")
                            return i; if (!i)
                            return ""; var a = i.link || i.url || i.data, c = Array.isArray(i.fallback) ? i.fallback.filter(Boolean) : []; return r(a) && c.length ? c[0] : a; };
                        return [2, (t || []).map(function (i) { return ke(_this.base + "/", n(i)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    u = this.decanon(u);
                    return [4, this.run("chap", u)];
                case 1:
                    t = _b.sent();
                    return [2, { html: U(t.data), title: U(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, i, a, a_2, a_2_1, c, o, i_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = this.decanon(u);
                        t = [{ title: "Default", data: u }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        n = (_d.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: U(i.title || i.name || "Server"), data: U(i.data || i.url || i.link) }; }));
                        _d.label = 2;
                    case 2:
                        r = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        n = t_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        i = (_d.sent()).data || {}, a = Array.isArray(i) ? i : [i];
                        try {
                            for (a_2 = (e_24 = void 0, __values(a)), a_2_1 = a_2.next(); !a_2_1.done; a_2_1 = a_2.next()) {
                                c = a_2_1.value;
                                if (!c || !c.data || c.type === "webview")
                                    continue;
                                o = ke(c.host || this.base + "/", c.data);
                                r.push({ url: o, quality: n.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (d) { return ({ file: ke(_this.base + "/", d.data || d.file), label: U(d.label || d.language || "Sub") }); }), mimeType: U(c.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (a_2_1 && !a_2_1.done && (_c = a_2.return)) _c.call(a_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        i_2 = _d.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + i_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_b = t_3.return)) _b.call(t_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function Z0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var me = { id: "wattpad", name: "Wattpad - Tiếng Việt", source: "https://www.wattpad.com", type: "novel", locale: "vi", nsfw: !1, version: 21, config: {}, configDefaults: {}, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.wattpad", lnIcon: "", lnVersion: "1.4.21" }, er = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2, i.success([{ title: "Nổi bật", script: "homecontent.js", input: O + "/stories?filter=hot&language=" + Q }, { title: "Mới cập nhật", script: "homecontent.js", input: O + "/stories?filter=new&language=" + Q }, { title: "Mới nhất", script: "homecontent.js", input: O + "/stories?filter=fresh&language=" + Q }, { title: "Hoàn thành", script: "homecontent.js", input: O + "/stories?filter=hot&completed=1&language=" + Q }])];
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, homecontent: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    s || (s = "0");
                                                    return [4, $(h, { fields: "stories(id,title,url,cover,user(name)),nextUrl", offset: s, limit: "30" })];
                                                case 1:
                                                    l = _b.sent();
                                                    return [2, l ? te(l) : i.error("Không thể tải dữ liệu")];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2, i.success([{ title: "Lãng mạn", input: "lãng-mạn", script: "genrecontent.js" }, { title: "Đam mỹ / BL", input: "đam-mỹ", script: "genrecontent.js" }, { title: "Bách hợp / GL", input: "bách-hợp", script: "genrecontent.js" }, { title: "Ngôn tình", input: "ngôn-tình", script: "genrecontent.js" }, { title: "Học đường", input: "học-đường", script: "genrecontent.js" }, { title: "Hành động", input: "hành-động", script: "genrecontent.js" }, { title: "Hài hước", input: "hài-hước", script: "genrecontent.js" }, { title: "Kinh dị", input: "kinh-dị", script: "genrecontent.js" }, { title: "Bí ẩn / Trinh thám", input: "trinh-thám", script: "genrecontent.js" }, { title: "Phiêu lưu", input: "phiêu-lưu", script: "genrecontent.js" }, { title: "Tiểu thuyết", input: "tiểu-thuyết", script: "genrecontent.js" }, { title: "Fanfiction", input: "fanfic", script: "genrecontent.js" }, { title: "Hiện đại", input: "hiện-đại", script: "genrecontent.js" }, { title: "Cổ đại", input: "cổ-đại", script: "genrecontent.js" }, { title: "Cung đình", input: "cung-đình", script: "genrecontent.js" }, { title: "Lịch sử", input: "lịch-sử", script: "genrecontent.js" }, { title: "Hào môn", input: "hào-môn", script: "genrecontent.js" }, { title: "Giới giải trí", input: "giới-giải-trí", script: "genrecontent.js" }, { title: "Vườn trường", input: "vườn-trường", script: "genrecontent.js" }, { title: "Tu tiên / Tu chân", input: "tu-chân", script: "genrecontent.js" }, { title: "Xuyên không", input: "xuyên-không", script: "genrecontent.js" }, { title: "Xuyên nhanh", input: "xuyên-nhanh", script: "genrecontent.js" }, { title: "Xuyên sách", input: "xuyên-sách", script: "genrecontent.js" }, { title: "Trọng sinh", input: "trọng-sinh", script: "genrecontent.js" }, { title: "Hệ thống", input: "hệ-thống", script: "genrecontent.js" }, { title: "Võng du", input: "võng-du", script: "genrecontent.js" }, { title: "Huyền ảo", input: "huyền-ảo", script: "genrecontent.js" }, { title: "Dị năng", input: "dị-năng", script: "genrecontent.js" }, { title: "Linh dị / Ma", input: "linh-dị", script: "genrecontent.js" }, { title: "Siêu nhiên", input: "siêu-nhiên", script: "genrecontent.js" }, { title: "Võ hiệp", input: "võ-hiệp", script: "genrecontent.js" }, { title: "Khoa học viễn tưởng", input: "khoa-học-viễn-tưởng", script: "genrecontent.js" }, { title: "Ngọt sủng / HE", input: "ngọt-sủng", script: "genrecontent.js" }, { title: "Sảng văn", input: "sảng-văn", script: "genrecontent.js" }, { title: "Ngọt văn", input: "ngọt-văn", script: "genrecontent.js" }, { title: "Ngược", input: "ngược", script: "genrecontent.js" }, { title: "Tâm lý", input: "tâm-lý", script: "genrecontent.js" }, { title: "Tình cảm", input: "tình-cảm", script: "genrecontent.js" }, { title: "Gia đình", input: "gia-đình", script: "genrecontent.js" }, { title: "Chữa lành", input: "chữa-lành", script: "genrecontent.js" }, { title: "Mạo hiểm", input: "mạo-hiểm", script: "genrecontent.js" }, { title: "Oneshot / Truyện ngắn", input: "oneshot", script: "genrecontent.js" }, { title: "Tản văn", input: "tản-văn", script: "genrecontent.js" }, { title: "Thơ", input: "thơ", script: "genrecontent.js" }, { title: "Chuyển ver", input: "chuyển-ver", script: "genrecontent.js" }])];
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genrecontent: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    s || (s = "0");
                                                    return [4, $(O + "/search/stories", { query: h, language: Q, fields: "stories(id,title,url,cover,user(name)),nextUrl", offset: s, limit: "30" })];
                                                case 1:
                                                    l = _b.sent();
                                                    return [2, l ? te(l) : i.error("Không thể tải dữ liệu")];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    s || (s = "0");
                                                    return [4, $(O + "/search/stories", { query: h, language: Q, fields: "stories(id,title,url,cover,user(name)),nextUrl", offset: s, limit: "30" })];
                                                case 1:
                                                    l = _b.sent();
                                                    return [2, l ? te(l) : i.error("Không thể tìm kiếm")];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(s) { var l = G.exec(s) || z.exec(s); return l ? l[1] : null; } function de(s) { var l = _.exec(s) || W.exec(s); return l ? l[1] : null; } function K(s, l) { if (!l)
                                        return s; var f = []; for (var p in l)
                                        f.push(encodeURIComponent(p) + "=" + encodeURIComponent(l[p])); return f.length > 0 ? s + "?" + f.join("&") : s; } function $(s, l) {
                                        return __awaiter(this, void 0, void 0, function () { var f, p, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    f = K(s, l);
                                                    return [4, t(f, C)];
                                                case 1:
                                                    p = _c.sent();
                                                    _b = p && !p.ok && !(p.status >= 400 && p.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(f, C)];
                                                case 2:
                                                    _b = (p = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !p || !p.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, p.json()];
                                                    }
                                                    catch (g) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(s, C)];
                                                case 1:
                                                    l = _c.sent();
                                                    _b = l && !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(s, C)];
                                                case 2:
                                                    _b = (l = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !l || !l.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, l.text()];
                                                    }
                                                    catch (f) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(s) { if (!s || !s.stories || !s.stories.length)
                                        return i.success([], null); var l = s.nextUrl ? j.exec(s.nextUrl) : null; l = l ? l[1] : null; for (var f = [], p = s.stories, g = 0; g < p.length; g++) {
                                        var y = p[g];
                                        if (y.url) {
                                            var q = y.url;
                                            q.indexOf("http") === 0 && (q = q.replace(v, "")), f.push({ name: y.title || "(Không có tên)", link: q, host: v, cover: y.cover || "", description: y.user ? y.user.name : "" });
                                        }
                                    } return i.success(f, l); } function h(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, p, _b, g, y, q, X, qe, su, ju, ze, jt, Gu, Gt, cu; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = ce(s);
                                                    if (!l)
                                                        return [2, i.error("URL không hợp lệ")];
                                                    f = l;
                                                    return [4, $(O + "/stories/" + f, R)];
                                                case 1:
                                                    p = _c.sent();
                                                    _b = (!p || !p.title);
                                                    if (!_b) return [3, 3];
                                                    return [4, $(ue + "/stories/" + f, R)];
                                                case 2:
                                                    _b = (p = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !p || !p.title)
                                                        return [2, i.error("Không thể tải thông tin truyện")];
                                                    g = "", y = null, q = null, X = [];
                                                    if (p.categories)
                                                        for (qe = p.categories, su = 0; su < qe.length; su++) {
                                                            ju = qe[su], ze = ju.viName || ju.name || ju.enName;
                                                            ze && (q || (q = ze), g && (g += ", "), g += ze, X.push({ title: ze, input: ze, script: "genrecontent.js" }));
                                                        }
                                                    if (p.tags)
                                                        for (jt = p.tags, Gu = 0; Gu < jt.length; Gu++) {
                                                            Gt = jt[Gu];
                                                            y || (y = Gt), g && (g += ", "), g += Gt;
                                                        }
                                                    cu = [];
                                                    return [2, (y ? cu.push({ title: "Truyện cùng thể loại", input: y, script: "suggest.js" }) : q && cu.push({ title: "Truyện cùng thể loại", input: q, script: "suggest.js" }), p.user && p.user.name && cu.push({ title: "Truyện cùng tác giả", input: "author:" + p.user.name, script: "suggest.js" }), i.success({ name: p.title, cover: p.cover || "", host: v, author: p.user ? p.user.name : "", description: p.description || "", detail: g, ongoing: !p.completed, genres: X, suggests: cu }))];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C, R; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        R = { fields: "id,title,cover,url,description,user(name),completed,categories,tags" };
                                        return [2, typeof h == "function" ? h : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, suggest: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(h) { var s = G.exec(h) || z.exec(h); return s ? s[1] : null; } function de(h) { var s = _.exec(h) || W.exec(h); return s ? s[1] : null; } function K(h, s) { if (!s)
                                        return h; var l = []; for (var f in s)
                                        l.push(encodeURIComponent(f) + "=" + encodeURIComponent(s[f])); return l.length > 0 ? h + "?" + l.join("&") : h; } function $(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = K(h, s);
                                                    return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.json()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(h) {
                                        return __awaiter(this, void 0, void 0, function () { var s, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(h, C)];
                                                case 1:
                                                    s = _c.sent();
                                                    _b = s && !s.ok && !(s.status >= 400 && s.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(h, C)];
                                                case 2:
                                                    _b = (s = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !s || !s.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, s.text()];
                                                    }
                                                    catch (l) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(h) { if (!h || !h.stories || !h.stories.length)
                                        return i.success([], null); var s = h.nextUrl ? j.exec(h.nextUrl) : null; s = s ? s[1] : null; for (var l = [], f = h.stories, p = 0; p < f.length; p++) {
                                        var g = f[p];
                                        if (g.url) {
                                            var y = g.url;
                                            y.indexOf("http") === 0 && (y = y.replace(v, "")), l.push({ name: g.title || "(Không có tên)", link: y, host: v, cover: g.cover || "", description: g.user ? g.user.name : "" });
                                        }
                                    } return i.success(l, s); } function R(h, s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, f; return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!(s || (s = "0"), h.indexOf("author:") === 0)) return [3, 2];
                                                    l = h.substring(7);
                                                    return [4, $(O + "/users/" + l + "/stories", { fields: "stories(id,title,url,cover,user(name)),nextUrl", offset: s, limit: "30" })];
                                                case 1:
                                                    f = _b.sent();
                                                    return [2, f ? te(f) : i.success([])];
                                                case 2: return [4, $(O + "/search/stories", { query: h, language: Q, fields: "stories(id,title,url,cover,user(name)),nextUrl", offset: s, limit: "30" })];
                                                case 3:
                                                    f = _b.sent();
                                                    return [2, f ? te(f) : i.success([])];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        return [2, typeof R == "function" ? R : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(s) { var l = G.exec(s) || z.exec(s); return l ? l[1] : null; } function de(s) { var l = _.exec(s) || W.exec(s); return l ? l[1] : null; } function K(s, l) { if (!l)
                                        return s; var f = []; for (var p in l)
                                        f.push(encodeURIComponent(p) + "=" + encodeURIComponent(l[p])); return f.length > 0 ? s + "?" + f.join("&") : s; } function $(s, l) {
                                        return __awaiter(this, void 0, void 0, function () { var f, p, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    f = K(s, l);
                                                    return [4, t(f, C)];
                                                case 1:
                                                    p = _c.sent();
                                                    _b = p && !p.ok && !(p.status >= 400 && p.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(f, C)];
                                                case 2:
                                                    _b = (p = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !p || !p.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, p.json()];
                                                    }
                                                    catch (g) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(s, C)];
                                                case 1:
                                                    l = _c.sent();
                                                    _b = l && !l.ok && !(l.status >= 400 && l.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(s, C)];
                                                case 2:
                                                    _b = (l = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !l || !l.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, l.text()];
                                                    }
                                                    catch (f) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(s) { if (!s || !s.stories || !s.stories.length)
                                        return i.success([], null); var l = s.nextUrl ? j.exec(s.nextUrl) : null; l = l ? l[1] : null; for (var f = [], p = s.stories, g = 0; g < p.length; g++) {
                                        var y = p[g];
                                        if (y.url) {
                                            var q = y.url;
                                            q.indexOf("http") === 0 && (q = q.replace(v, "")), f.push({ name: y.title || "(Không có tên)", link: q, host: v, cover: y.cover || "", description: y.user ? y.user.name : "" });
                                        }
                                    } return i.success(f, l); } function h(s) {
                                        return __awaiter(this, void 0, void 0, function () { var l, f, _b, p, g, y, q; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    l = ce(s);
                                                    if (!l)
                                                        return [2, i.error("URL không hợp lệ")];
                                                    return [4, $(O + "/stories/" + l, R)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = (!f || !f.parts);
                                                    if (!_b) return [3, 3];
                                                    return [4, $(ue + "/stories/" + l, R)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.parts || !f.parts.length)
                                                        return [2, i.success([])];
                                                    for (p = [], g = f.parts, y = 0; y < g.length; y++) {
                                                        q = g[y];
                                                        q.url && p.push({ name: q.title || "Chương " + (y + 1), url: q.url });
                                                    }
                                                    return [2, i.success(p)];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C, R; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        R = { fields: "id,parts(id,title,url)" };
                                        return [2, typeof h == "function" ? h : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (t, r, n, i, a, c, o, d, m, A, S, x, T, k, B, D, H) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function ce(l) { var f = G.exec(l) || z.exec(l); return f ? f[1] : null; } function de(l) { var f = _.exec(l) || W.exec(l); return f ? f[1] : null; } function K(l, f) { if (!f)
                                        return l; var p = []; for (var g in f)
                                        p.push(encodeURIComponent(g) + "=" + encodeURIComponent(f[g])); return p.length > 0 ? l + "?" + p.join("&") : l; } function $(l, f) {
                                        return __awaiter(this, void 0, void 0, function () { var p, g, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    p = K(l, f);
                                                    return [4, t(p, C)];
                                                case 1:
                                                    g = _c.sent();
                                                    _b = g && !g.ok && !(g.status >= 400 && g.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(p, C)];
                                                case 2:
                                                    _b = (g = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !g || !g.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, g.json()];
                                                    }
                                                    catch (y) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function he(l) {
                                        return __awaiter(this, void 0, void 0, function () { var f, _b; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4, t(l, C)];
                                                case 1:
                                                    f = _c.sent();
                                                    _b = f && !f.ok && !(f.status >= 400 && f.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(l, C)];
                                                case 2:
                                                    _b = (f = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !f || !f.ok)
                                                        return [2, null];
                                                    try {
                                                        return [2, f.text()];
                                                    }
                                                    catch (p) {
                                                        return [2, null];
                                                    }
                                                    return [2];
                                            }
                                        }); });
                                    } function te(l) { if (!l || !l.stories || !l.stories.length)
                                        return i.success([], null); var f = l.nextUrl ? j.exec(l.nextUrl) : null; f = f ? f[1] : null; for (var p = [], g = l.stories, y = 0; y < g.length; y++) {
                                        var q = g[y];
                                        if (q.url) {
                                            var X = q.url;
                                            X.indexOf("http") === 0 && (X = X.replace(v, "")), p.push({ name: q.title || "(Không có tên)", link: X, host: v, cover: q.cover || "", description: q.user ? q.user.name : "" });
                                        }
                                    } return i.success(p, f); } function s(l) {
                                        return __awaiter(this, void 0, void 0, function () { var f, p, g, _b, y, q, X, qe; return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    f = de(l);
                                                    if (!f)
                                                        return [2, i.error("URL chương không hợp lệ")];
                                                    p = P + "/storytext?id=" + f;
                                                    return [4, t(p, C)];
                                                case 1:
                                                    g = _c.sent();
                                                    _b = g && !g.ok && !(g.status >= 400 && g.status < 500);
                                                    if (!_b) return [3, 3];
                                                    return [4, t(p, C)];
                                                case 2:
                                                    _b = (g = _c.sent());
                                                    _c.label = 3;
                                                case 3:
                                                    if (_b, !g || !g.ok)
                                                        return [2, i.error("Không thể tải nội dung chương")];
                                                    y = null;
                                                    try {
                                                        y = g.html();
                                                    }
                                                    catch (su) { }
                                                    if (y) {
                                                        y.select("script, style, ins, iframe, noscript, .ad, .ads, .advertisement, [class*=advert], .author-note-label, .note-label, .paid-content").remove();
                                                        q = y.select("body"), X = q.size() > 0 ? q.get(0).html() : y.html();
                                                        if (X = X.replace(R, ""), X = X.replace(h, "<br><br>"), X && X.length > 20)
                                                            return [2, i.success(X)];
                                                    }
                                                    return [4, he(p)];
                                                case 4:
                                                    qe = _c.sent();
                                                    return [2, qe && qe.length > 20 ? i.success(qe) : i.error("Không thể tải nội dung chương")];
                                            }
                                        }); });
                                    } var v, ue, O, P, Q, j, G, z, _, W, C, R, h; return __generator(this, function (_b) {
                                        v = "https://www.wattpad.com", ue = v + "/api/v3", O = v + "/v4", P = v + "/apiv2", Q = "19", j = /offset=(\d+)/, G = /\/(\d+)-/, z = /\/(\d+)(?:[?#]|$)/, _ = /wattpad\.com\/(\d+)-/, W = /wattpad\.com\/(\d+)(?:[?#]|$)/;
                                        C = { headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "*/*" } };
                                        R = /<p[^>]*>\s*(<br\s*\/?>)?\s*<\/p>/gi, h = /(<br\s*\/?>\s*){3,}/gi;
                                        return [2, typeof s == "function" ? s : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function ur(e) { return new Vu({ meta: me, scripts: er, host: e }); }
var Rn = require("@libs/fetch").fetchApi, au = null;
try {
    au = require("@libs/storage");
}
catch (e) {
    au = null;
}
var Vt = {}, Pu = au && au.storage ? au.storage : { get: function (e) { return Vt[e]; }, set: function (e, u) { Vt[e] = u; }, delete: function (e) { delete Vt[e]; } }, Pt = (function () {
    function class_2() {
        var _this = this;
        this.id = me.lnId, this.name = me.name, this.icon = me.lnIcon, this.site = me.source, this.version = me.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = ur({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, Rn(u.url, t)];
                        case 1:
                            r = _c.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, a) { n[a] = i; });
                            }
                            catch (i) { }
                            _b = { status: r.status, url: r.url || u.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (u) { var t = Pu.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? Pu.delete && Pu.delete("vb_" + u) : Pu.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
    }
    class_2.prototype.popularNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(u)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(u)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_b.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(u)];
                case 1:
                    t = _b.sent();
                    return [4, this.engine.chapters(u)];
                case 2:
                    r = _b.sent();
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(u)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : me.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), On = new Pt;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
