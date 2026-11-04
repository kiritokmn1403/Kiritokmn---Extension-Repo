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
var e_1, _a;
var R0 = Object.create;
var Ou = Object.defineProperty, M0 = Object.defineProperties, P0 = Object.getOwnPropertyDescriptor, B0 = Object.getOwnPropertyDescriptors, F0 = Object.getOwnPropertyNames, vt = Object.getOwnPropertySymbols, H0 = Object.getPrototypeOf, kt = Object.prototype.hasOwnProperty, G0 = Object.prototype.propertyIsEnumerable;
var Nt = function (u, e, t) { return e in u ? Ou(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, uu = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        kt.call(e, t) && Nt(u, t, e[t]);
    if (vt)
        try {
            for (var _b = __values(vt(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                G0.call(e, t) && Nt(u, t, e[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return u;
}, bu = function (u, e) { return M0(u, B0(e)); };
var V0 = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, Ne = function (u, e) { for (var t in e)
    Ou(u, t, { get: e[t], enumerable: !0 }); }, Ct = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (a) {
            !kt.call(u, a) && a !== t && Ou(u, a, { get: function () { return e[a]; }, enumerable: !(r = P0(e, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(F0(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                _loop_1(a);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return u;
};
var pu = function (u, e, t) { return (t = u != null ? R0(H0(u)) : {}, Ct(e || !u || !u.__esModule ? Ou(t, "default", { value: u, enumerable: !0 }) : t, u)); }, j0 = function (u) { return Ct(Ou({}, "__esModule", { value: !0 }), u); };
var hu = V0(function (zn, r0) { r0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var ba = {};
Ne(ba, { default: function () { return ha; } });
module.exports = j0(ba);
var Qu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var Xu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var ke, z0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Su = (ke = String.fromCodePoint) !== null && ke !== void 0 ? ke : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function Ce(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = z0.get(u)) !== null && e !== void 0 ? e : u; }
var F;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(F || (F = {}));
var W0 = 32, ou;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(ou || (ou = {}));
function qe(u) { return u >= F.ZERO && u <= F.NINE; }
function K0(u) { return u >= F.UPPER_A && u <= F.UPPER_F || u >= F.LOWER_A && u <= F.LOWER_F; }
function $0(u) { return u >= F.UPPER_A && u <= F.UPPER_Z || u >= F.LOWER_A && u <= F.LOWER_Z || qe(u); }
function _0(u) { return u === F.EQUALS || $0(u); }
var B;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(B || (B = {}));
var Q;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })(Q || (Q = {}));
var Au = (function () {
    function Au(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = B.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Q.Strict;
    }
    Au.prototype.startEntity = function (e) { this.decodeMode = e, this.state = B.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Au.prototype.write = function (e, t) { switch (this.state) {
        case B.EntityStart: return e.charCodeAt(t) === F.NUM ? (this.state = B.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = B.NamedEntity, this.stateNamedEntity(e, t));
        case B.NumericStart: return this.stateNumericStart(e, t);
        case B.NumericDecimal: return this.stateNumericDecimal(e, t);
        case B.NumericHex: return this.stateNumericHex(e, t);
        case B.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    Au.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | W0) === F.LOWER_X ? (this.state = B.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = B.NumericDecimal, this.stateNumericDecimal(e, t)); };
    Au.prototype.addToNumericResult = function (e, t, r, a) { if (t !== r) {
        var n = r - t;
        this.result = this.result * Math.pow(a, n) + parseInt(e.substr(t, n), a), this.consumed += n;
    } };
    Au.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (qe(a) || K0(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    Au.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (qe(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    Au.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === F.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === Q.Strict)
        return 0; return this.emitCodePoint(Ce(this.result), this.consumed), this.errors && (e !== F.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Au.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & ou.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var i = e.charCodeAt(t);
        if (this.treeIndex = Q0(r, a, this.treeIndex + Math.max(1, n), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === Q.Attribute && (n === 0 || _0(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & ou.VALUE_LENGTH) >> 14, n !== 0) {
            if (i === F.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== Q.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Au.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, a = (r[t] & ou.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, a, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Au.prototype.emitNamedEntityData = function (e, t, r) { var a = this.decodeTree; return this.emitCodePoint(t === 1 ? a[e] & ~ou.VALUE_LENGTH : a[e + 1], r), t === 3 && this.emitCodePoint(a[e + 2], r), r; };
    Au.prototype.end = function () { var e; switch (this.state) {
        case B.NamedEntity: return this.result !== 0 && (this.decodeMode !== Q.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case B.NumericDecimal: return this.emitNumericEntity(0, 2);
        case B.NumericHex: return this.emitNumericEntity(0, 3);
        case B.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case B.EntityStart: return 0;
    } };
    return Au;
}());
function qt(u) { var e = "", t = new Au(u, function (r) { return e += Su(r); }); return function (a, n) { var i = 0, s = 0; for (; (s = a.indexOf("&", s)) >= 0;) {
    e += a.slice(i, s), t.startEntity(n);
    var o = t.write(a, s + 1);
    if (o < 0) {
        i = s + t.end();
        break;
    }
    i = s + o, s = o === 0 ? i + 1 : i;
} var c = e + a.slice(i); return e = "", c; }; }
function Q0(u, e, t, r) { var a = (e & ou.BRANCH_LENGTH) >> 7, n = e & ou.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? t : -1; if (n) {
    var c = r - n;
    return c < 0 || c >= a ? -1 : u[t + c] - 1;
} var i = t, s = i + a - 1; for (; i <= s;) {
    var c = i + s >>> 1, o = u[c];
    if (o < r)
        i = c + 1;
    else if (o > r)
        s = c - 1;
    else
        return u[c + a];
} return -1; }
var Ea = qt(Qu), Ta = qt(Xu);
var w;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(w || (w = {}));
var l;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(l || (l = {}));
function nu(u) { return u === w.Space || u === w.NewLine || u === w.Tab || u === w.FormFeed || u === w.CarriageReturn; }
function Zu(u) { return u === w.Slash || u === w.Gt || nu(u); }
function X0(u) { return u >= w.LowerA && u <= w.LowerZ || u >= w.UpperA && u <= w.UpperZ; }
var Z;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(Z || (Z = {}));
var z = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Eu = (function () {
    function Eu(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = l.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = l.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new Au(e ? Xu : Qu, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    Eu.prototype.reset = function () { this.state = l.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = l.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Eu.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Eu.prototype.end = function () { this.running && this.finish(); };
    Eu.prototype.pause = function () { this.running = !1; };
    Eu.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Eu.prototype.stateText = function (e) { e === w.Lt || !this.decodeEntities && this.fastForwardTo(w.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = l.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Eu.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? Zu(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = l.InTagName, this.stateInTagName(e); };
    Eu.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === w.Gt || nu(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === z.TitleEnd ? this.decodeEntities && e === w.Amp && this.startEntity() : this.fastForwardTo(w.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === w.Lt); };
    Eu.prototype.stateCDATASequence = function (e) { e === z.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === z.Cdata.length && (this.state = l.InCommentLike, this.currentSequence = z.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = l.InDeclaration, this.stateInDeclaration(e)); };
    Eu.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Eu.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === z.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = l.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Eu.prototype.isTagStartChar = function (e) { return this.xmlMode ? !Zu(e) : X0(e); };
    Eu.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = l.SpecialStartSequence; };
    Eu.prototype.stateBeforeTagName = function (e) { if (e === w.ExclamationMark)
        this.state = l.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === w.Questionmark)
        this.state = l.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = l.InTagName : t === z.ScriptEnd[2] ? this.state = l.BeforeSpecialS : t === z.TitleEnd[2] ? this.state = l.BeforeSpecialT : this.state = l.InTagName;
    }
    else
        e === w.Slash ? this.state = l.BeforeClosingTagName : (this.state = l.Text, this.stateText(e)); };
    Eu.prototype.stateInTagName = function (e) { Zu(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Eu.prototype.stateBeforeClosingTagName = function (e) { nu(e) || (e === w.Gt ? this.state = l.Text : (this.state = this.isTagStartChar(e) ? l.InClosingTagName : l.InSpecialComment, this.sectionStart = this.index)); };
    Eu.prototype.stateInClosingTagName = function (e) { (e === w.Gt || nu(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = l.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Eu.prototype.stateAfterClosingTagName = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.state = l.Text, this.sectionStart = this.index + 1); };
    Eu.prototype.stateBeforeAttributeName = function (e) { e === w.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = l.InSpecialTag, this.sequenceIndex = 0) : this.state = l.Text, this.sectionStart = this.index + 1) : e === w.Slash ? this.state = l.InSelfClosingTag : nu(e) || (this.state = l.InAttributeName, this.sectionStart = this.index); };
    Eu.prototype.stateInSelfClosingTag = function (e) { e === w.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = l.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : nu(e) || (this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Eu.prototype.stateInAttributeName = function (e) { (e === w.Eq || Zu(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = l.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Eu.prototype.stateAfterAttributeName = function (e) { e === w.Eq ? this.state = l.BeforeAttributeValue : e === w.Slash || e === w.Gt ? (this.cbs.onattribend(Z.NoValue, this.sectionStart), this.sectionStart = -1, this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(e)) : nu(e) || (this.cbs.onattribend(Z.NoValue, this.sectionStart), this.state = l.InAttributeName, this.sectionStart = this.index); };
    Eu.prototype.stateBeforeAttributeValue = function (e) { e === w.DoubleQuote ? (this.state = l.InAttributeValueDq, this.sectionStart = this.index + 1) : e === w.SingleQuote ? (this.state = l.InAttributeValueSq, this.sectionStart = this.index + 1) : nu(e) || (this.sectionStart = this.index, this.state = l.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Eu.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === w.DoubleQuote ? Z.Double : Z.Single, this.index + 1), this.state = l.BeforeAttributeName) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Eu.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, w.DoubleQuote); };
    Eu.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, w.SingleQuote); };
    Eu.prototype.stateInAttributeValueNoQuotes = function (e) { nu(e) || e === w.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Z.Unquoted, this.index), this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Eu.prototype.stateBeforeDeclaration = function (e) { e === w.OpeningSquareBracket ? (this.state = l.CDATASequence, this.sequenceIndex = 0) : this.state = e === w.Dash ? l.BeforeComment : l.InDeclaration; };
    Eu.prototype.stateInDeclaration = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = l.Text, this.sectionStart = this.index + 1); };
    Eu.prototype.stateInProcessingInstruction = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = l.Text, this.sectionStart = this.index + 1); };
    Eu.prototype.stateBeforeComment = function (e) { e === w.Dash ? (this.state = l.InCommentLike, this.currentSequence = z.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = l.InDeclaration; };
    Eu.prototype.stateInSpecialComment = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = l.Text, this.sectionStart = this.index + 1); };
    Eu.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === z.ScriptEnd[3] ? this.startSpecial(z.ScriptEnd, 4) : t === z.StyleEnd[3] ? this.startSpecial(z.StyleEnd, 4) : (this.state = l.InTagName, this.stateInTagName(e)); };
    Eu.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === z.TitleEnd[3] ? this.startSpecial(z.TitleEnd, 4) : t === z.TextareaEnd[3] ? this.startSpecial(z.TextareaEnd, 4) : (this.state = l.InTagName, this.stateInTagName(e)); };
    Eu.prototype.startEntity = function () { this.baseState = this.state, this.state = l.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Q.Strict : this.baseState === l.Text || this.baseState === l.InSpecialTag ? Q.Legacy : Q.Attribute); };
    Eu.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Eu.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === l.Text || this.state === l.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === l.InAttributeValueDq || this.state === l.InAttributeValueSq || this.state === l.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Eu.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Eu.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case l.Text: {
                this.stateText(e);
                break;
            }
            case l.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case l.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case l.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case l.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case l.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case l.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case l.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case l.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case l.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case l.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case l.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case l.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case l.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case l.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case l.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case l.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case l.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case l.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case l.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case l.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case l.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case l.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case l.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case l.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case l.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Eu.prototype.finish = function () { this.state === l.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Eu.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === l.InCommentLike ? this.currentSequence === z.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === l.InTagName || this.state === l.BeforeAttributeName || this.state === l.BeforeAttributeValue || this.state === l.AfterAttributeName || this.state === l.InAttributeName || this.state === l.InAttributeValueSq || this.state === l.InAttributeValueDq || this.state === l.InAttributeValueNq || this.state === l.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Eu.prototype.emitCodePoint = function (e, t) { this.baseState !== l.Text && this.baseState !== l.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Eu;
}());
var Tu = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), D = new Set(["p"]), Lt = new Set(["thead", "tbody"]), Dt = new Set(["dd", "dt"]), It = new Set(["rt", "rp"]), Z0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", D], ["h1", D], ["h2", D], ["h3", D], ["h4", D], ["h5", D], ["h6", D], ["select", Tu], ["input", Tu], ["output", Tu], ["button", Tu], ["datalist", Tu], ["textarea", Tu], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Dt], ["dt", Dt], ["address", D], ["article", D], ["aside", D], ["blockquote", D], ["details", D], ["div", D], ["dl", D], ["fieldset", D], ["figcaption", D], ["figure", D], ["footer", D], ["form", D], ["header", D], ["hr", D], ["main", D], ["nav", D], ["ol", D], ["pre", D], ["section", D], ["table", D], ["ul", D], ["rt", It], ["rp", It], ["tbody", Lt], ["tfoot", Lt]]), J0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Ut = new Set(["math", "svg"]), Ot = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Y0 = /\s|\//, Ru = (function () {
    function Ru(e, t) {
        if (t === void 0) { t = {}; }
        var r, a, n, i, s, c;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = t.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((i = t.Tokenizer) !== null && i !== void 0 ? i : Eu)(this.options, this), this.foreignContext = [!this.htmlMode], (c = (s = this.cbs).onparserinit) === null || c === void 0 || c.call(s, this);
    }
    Ru.prototype.ontext = function (e, t) { var r, a; var n = this.getSlice(e, t); this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = t; };
    Ru.prototype.ontextentity = function (e, t) { var r, a; this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, Su(e)), this.startIndex = t; };
    Ru.prototype.isVoidElement = function (e) { return this.htmlMode && J0.has(e); };
    Ru.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Ru.prototype.emitOpenTag = function (e) { var t, r, a, n; this.openTagStart = this.startIndex, this.tagname = e; var i = this.htmlMode && Z0.get(e); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Ut.has(e) ? this.foreignContext.unshift(!0) : Ot.has(e) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, e), this.cbs.onopentag && (this.attribs = {}); };
    Ru.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ru.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Ru.prototype.onclosetag = function (e, t) { var r, a, n, i, s, c, o, f; this.endIndex = t; var S = this.getSlice(e, t); if (this.lowerCaseTagNames && (S = S.toLowerCase()), this.htmlMode && (Ut.has(S) || Ot.has(S)) && this.foreignContext.shift(), this.isVoidElement(S))
        this.htmlMode && S === "br" && ((i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, "br"), (c = (s = this.cbs).onopentag) === null || c === void 0 || c.call(s, "br", {}, !0), (f = (o = this.cbs).onclosetag) === null || f === void 0 || f.call(o, "br", !1));
    else {
        var p = this.stack.indexOf(S);
        if (p !== -1)
            for (var g = 0; g <= p; g++) {
                var A = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, A, g !== p);
            }
        else
            this.htmlMode && S === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Ru.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Ru.prototype.closeCurrentTag = function (e) { var t, r; var a = this.tagname; this.endOpenTag(e), this.stack[0] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !e), this.stack.shift()); };
    Ru.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Ru.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    Ru.prototype.onattribentity = function (e) { this.attribvalue += Su(e); };
    Ru.prototype.onattribend = function (e, t) { var r, a; this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, e === Z.Double ? '"' : e === Z.Single ? "'" : e === Z.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ru.prototype.getInstructionName = function (e) { var t = e.search(Y0), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Ru.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = t + 1; };
    Ru.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = t + 1; };
    Ru.prototype.oncomment = function (e, t, r) { var a, n, i, s; this.endIndex = t, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(e, t - r)), (s = (i = this.cbs).oncommentend) === null || s === void 0 || s.call(i), this.startIndex = t + 1; };
    Ru.prototype.oncdata = function (e, t, r) { var a, n, i, s, c, o, f, S, p, g; this.endIndex = t; var A = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, A), (o = (c = this.cbs).oncdataend) === null || o === void 0 || o.call(c)) : ((S = (f = this.cbs).oncomment) === null || S === void 0 || S.call(f, "[CDATA[".concat(A, "]]")), (g = (p = this.cbs).oncommentend) === null || g === void 0 || g.call(p)), this.startIndex = t + 1; };
    Ru.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    Ru.prototype.reset = function () { var e, t, r, a; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ru.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Ru.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Ru.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ru.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Ru.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Ru.prototype.pause = function () { this.tokenizer.pause(); };
    Ru.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ru.prototype.parseChunk = function (e) { this.write(e); };
    Ru.prototype.done = function (e) { this.end(e); };
    return Ru;
}());
var Ju = {};
Ne(Ju, { CDATA: function () { return Be; }, Comment: function () { return Oe; }, Directive: function () { return Ue; }, Doctype: function () { return Fe; }, ElementType: function () { return v; }, Root: function () { return De; }, Script: function () { return Re; }, Style: function () { return Me; }, Tag: function () { return Pe; }, Text: function () { return Ie; }, isTag: function () { return Le; } });
var v;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(v || (v = {}));
function Le(u) { return u.type === v.Tag || u.type === v.Script || u.type === v.Style; }
var De = v.Root, Ie = v.Text, Ue = v.Directive, Oe = v.Comment, Re = v.Script, Me = v.Style, Pe = v.Tag, Be = v.CDATA, Fe = v.Doctype;
var Yu = (function () {
    function Yu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(Yu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    Yu.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Rt(this, e);
    };
    return Yu;
}()), Mu = (function (_super) {
    __extends(Mu, _super);
    function Mu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Mu.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Mu;
}(Yu)), vu = (function (_super) {
    __extends(vu, _super);
    function vu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Text;
        return _this;
    }
    Object.defineProperty(vu.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return vu;
}(Mu)), Pu = (function (_super) {
    __extends(Pu, _super);
    function Pu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Comment;
        return _this;
    }
    Object.defineProperty(Pu.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Pu;
}(Mu)), Bu = (function (_super) {
    __extends(Bu, _super);
    function Bu(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = v.Directive;
        return _this;
    }
    Object.defineProperty(Bu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Bu;
}(Mu)), Fu = (function (_super) {
    __extends(Fu, _super);
    function Fu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Fu.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Fu;
}(Yu)), Hu = (function (_super) {
    __extends(Hu, _super);
    function Hu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.CDATA;
        return _this;
    }
    Object.defineProperty(Hu.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Hu;
}(Fu)), Nu = (function (_super) {
    __extends(Nu, _super);
    function Nu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = v.Root;
        return _this;
    }
    Object.defineProperty(Nu.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Nu;
}(Fu)), Gu = (function (_super) {
    __extends(Gu, _super);
    function Gu(e, t, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = e === "script" ? v.Script : e === "style" ? v.Style : v.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = a;
        return _this;
    }
    Object.defineProperty(Gu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Gu;
}(Fu));
function q(u) { return Le(u); }
function ku(u) { return u.type === v.CDATA; }
function tu(u) { return u.type === v.Text; }
function Vu(u) { return u.type === v.Comment; }
function ur(u) { return u.type === v.Directive; }
function Ge(u) { return u.type === v.Root; }
function K(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function Rt(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (tu(u))
        t = new vu(u.data);
    else if (Vu(u))
        t = new Pu(u.data);
    else if (q(u)) {
        var r = e ? He(u.children) : [], a_1 = new Gu(u.name, uu({}, u.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), u.namespace != null && (a_1.namespace = u.namespace), u["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = uu({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = uu({}, u["x-attribsPrefix"])), t = a_1;
    }
    else if (ku(u)) {
        var r = e ? He(u.children) : [], a_2 = new Hu(r);
        r.forEach(function (n) { return n.parent = a_2; }), t = a_2;
    }
    else if (Ge(u)) {
        var r = e ? He(u.children) : [], a_3 = new Nu(r);
        r.forEach(function (n) { return n.parent = a_3; }), u["x-mode"] && (a_3["x-mode"] = u["x-mode"]), t = a_3;
    }
    else if (ur(u)) {
        var r = new Bu(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function He(u) { var e = u.map(function (t) { return Rt(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var Mt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Cu = (function () {
    function Cu(e, t, r) {
        this.dom = [], this.root = new Nu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Mt), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : Mt, this.elementCB = r != null ? r : null;
    }
    Cu.prototype.onparserinit = function (e) { this.parser = e; };
    Cu.prototype.onreset = function () { this.dom = [], this.root = new Nu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Cu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Cu.prototype.onerror = function (e) { this.handleCallback(e); };
    Cu.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Cu.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? v.Tag : void 0, a = new Gu(e, t, void 0, r); this.addNode(a), this.tagStack.push(a); };
    Cu.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === v.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new vu(e);
        this.addNode(r), this.lastNode = r;
    } };
    Cu.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === v.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new Pu(e); this.addNode(t), this.lastNode = t; };
    Cu.prototype.oncommentend = function () { this.lastNode = null; };
    Cu.prototype.oncdatastart = function () { var e = new vu(""), t = new Hu([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    Cu.prototype.oncdataend = function () { this.lastNode = null; };
    Cu.prototype.onprocessinginstruction = function (e, t) { var r = new Bu(e, t); this.addNode(r); };
    Cu.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Cu.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return Cu;
}());
var ru = {};
Ne(ru, { DocumentPosition: function () { return J; }, append: function () { return wr; }, appendChild: function () { return yr; }, compareDocumentPosition: function () { return Zt; }, existsOne: function () { return Qt; }, filter: function () { return Lu; }, find: function () { return ie; }, findAll: function () { return Er; }, findOne: function () { return se; }, findOneChild: function () { return Ar; }, getAttributeValue: function () { return pr; }, getChildren: function () { return ae; }, getElementById: function () { return kr; }, getElements: function () { return Nr; }, getElementsByClassName: function () { return Cr; }, getElementsByTagName: function () { return gu; }, getElementsByTagType: function () { return qr; }, getFeed: function () { return Ye; }, getInnerHTML: function () { return br; }, getName: function () { return mr; }, getOuterHTML: function () { return $t; }, getParent: function () { return _t; }, getSiblings: function () { return ne; }, getText: function () { return re; }, hasAttrib: function () { return gr; }, hasChildren: function () { return K; }, innerText: function () { return $e; }, isCDATA: function () { return ku; }, isComment: function () { return Vu; }, isDocument: function () { return Ge; }, isTag: function () { return q; }, isText: function () { return tu; }, nextElementSibling: function () { return _e; }, prepend: function () { return Xe; }, prependChild: function () { return Sr; }, prevElementSibling: function () { return Qe; }, removeElement: function () { return iu; }, removeSubsets: function () { return Lr; }, replaceElement: function () { return xr; }, testElement: function () { return vr; }, textContent: function () { return lu; }, uniqueSort: function () { return Je; } });
function ue(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var er = new Map(ue([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(ue([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(ue([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(ue([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Ve = /["&'<>$\x80-\uFFFF]/g, Pt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Bt = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function ju(u) { var e = "", t = 0, r; for (; (r = Ve.exec(u)) !== null;) {
    var a = r.index, n = u.charCodeAt(a), i = Pt.get(n);
    i !== void 0 ? (e += u.substring(t, a) + i, t = a + 1) : (e += "".concat(u.substring(t, a), "&#x").concat(Bt(u, a).toString(16), ";"), t = Ve.lastIndex += +((n & 64512) === 55296));
} return e + u.substr(t); }
function je(u, e) { return function (r) { var a, n = 0, i = ""; for (; a = u.exec(r);)
    n !== a.index && (i += r.substring(n, a.index)), i += e.get(a[0].charCodeAt(0)), n = a.index + 1; return i + r.substring(n); }; }
var Ft = je(/[&<>'"]/g, Pt), ee = je(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), te = je(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Ht;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(Ht || (Ht = {}));
var Gt;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(Gt || (Gt = {}));
var zt = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), Wt = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var rr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function ar(u) { return u.replace(/"/g, "&quot;"); }
function nr(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? ar : e.xmlMode || e.encodeEntities !== "utf8" ? ju : ee; return Object.keys(u).map(function (a) { var n, i; var s = (n = u[a]) !== null && n !== void 0 ? n : ""; return e.xmlMode === "foreign" && (a = (i = Wt.get(a)) !== null && i !== void 0 ? i : a), !e.emptyAttrs && !e.xmlMode && s === "" ? a : "".concat(a, "=\"").concat(r(s), "\""); }).join(" "); }
var Kt = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Ke(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var a = 0; a < t.length; a++)
        r += ir(t[a], e);
    return r;
}
var qu = Ke;
function ir(u, e) { switch (u.type) {
    case De: return Ke(u.children, e);
    case Fe:
    case Ue: return lr(u);
    case Oe: return hr(u);
    case Be: return dr(u);
    case Re:
    case Me:
    case Pe: return or(u, e);
    case Ie: return fr(u, e);
} }
var sr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), cr = new Set(["svg", "math"]);
function or(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = zt.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && sr.has(u.parent.name) && (e = bu(uu({}, e), { xmlMode: !1 }))), !e.xmlMode && cr.has(u.name) && (e = bu(uu({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), a = nr(u.attribs, e); return a && (r += " ".concat(a)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Kt.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += Ke(u.children, e)), (e.xmlMode || !Kt.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function lr(u) { return "<".concat(u.data, ">"); }
function fr(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && rr.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? ju(r) : te(r)), r; }
function dr(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function hr(u) { return "<!--".concat(u.data, "-->"); }
function $t(u, e) { return qu(u, e); }
function br(u, e) { return K(u) ? u.children.map(function (t) { return $t(t, e); }).join("") : ""; }
function re(u) {
    return Array.isArray(u) ? u.map(re).join("") : q(u) ? u.name === "br" ? "\n" : re(u.children) : ku(u) ? re(u.children) : tu(u) ? u.data : "";
}
function lu(u) { return Array.isArray(u) ? u.map(lu).join("") : K(u) && !Vu(u) ? lu(u.children) : tu(u) ? u.data : ""; }
function $e(u) { return Array.isArray(u) ? u.map($e).join("") : K(u) && (u.type === v.Tag || ku(u)) ? $e(u.children) : tu(u) ? u.data : ""; }
function ae(u) { return K(u) ? u.children : []; }
function _t(u) { return u.parent || null; }
function ne(u) {
    var _a, _b;
    var e = _t(u);
    if (e != null)
        return ae(e);
    var t = [u], r = u.prev, a = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        t.push(a), _b = a, a = _b.next;
    return t;
}
function pr(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function gr(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function mr(u) { return u.name; }
function _e(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !q(e);)
        (_a = e, e = _a.next);
    return e;
}
function Qe(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !q(e);)
        (_a = e, e = _a.prev);
    return e;
}
function iu(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function xr(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var a = e.parent = u.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(u)] = e, u.parent = null;
} }
function yr(u, e) { if (iu(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function wr(u, e) { iu(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var a = t.children;
        a.splice(a.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function Sr(u, e) { if (iu(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function Xe(u, e) { iu(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function Lu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ie(u, Array.isArray(e) ? e : [e], t, r);
}
function ie(u, e, t, r) { var a = [], n = [Array.isArray(e) ? e : [e]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (i.length === 1)
            return a;
        n.shift(), i.shift();
        continue;
    }
    var s = n[0][i[0]++];
    if (u(s) && (a.push(s), --r <= 0))
        return a;
    t && K(s) && s.children.length > 0 && (i.unshift(0), n.unshift(s.children));
} }
function Ar(u, e) { return e.find(u); }
function se(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (q(n) && u(n))
            return n;
        if (t && K(n) && n.children.length > 0) {
            var i = se(u, n.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function Qt(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return q(t) && u(t) || K(t) && Qt(u, t.children); }); }
function Er(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    q(n) && u(n) && t.push(n), K(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var ce = { tag_name: function (u) { return typeof u == "function" ? function (e) { return q(e) && u(e.name); } : u === "*" ? q : function (e) { return q(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return tu(e) && u(e.data); } : function (e) { return tu(e) && e.data === u; }; } };
function Ze(u, e) { return typeof e == "function" ? function (t) { return q(t) && e(t.attribs[u]); } : function (t) { return q(t) && t.attribs[u] === e; }; }
function Tr(u, e) { return function (t) { return u(t) || e(t); }; }
function Xt(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(ce, t) ? ce[t](r) : Ze(t, r); }); return e.length === 0 ? null : e.reduce(Tr); }
function vr(u, e) { var t = Xt(u); return t ? t(e) : !0; }
function Nr(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = Xt(u);
    return a ? Lu(a, e, t, r) : [];
}
function kr(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), se(Ze("id", u), e, t);
}
function gu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Lu(ce.tag_name(u), e, t, r);
}
function Cr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Lu(Ze("class", u), e, t, r);
}
function qr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Lu(ce.tag_type(u), e, t, r);
}
function Lr(u) { var e = u.length; for (; --e >= 0;) {
    var t = u[e];
    if (e > 0 && u.lastIndexOf(t, e - 1) >= 0) {
        u.splice(e, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (u.includes(r)) {
            u.splice(e, 1);
            break;
        }
} return u; }
var J;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(J || (J = {}));
function Zt(u, e) { var t = [], r = []; if (u === e)
    return 0; var a = K(u) ? u : u.parent; for (; a;)
    t.unshift(a), a = a.parent; for (a = K(e) ? e : e.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(t.length, r.length), i = 0; for (; i < n && t[i] === r[i];)
    i++; if (i === 0)
    return J.DISCONNECTED; var s = t[i - 1], c = s.children, o = t[i], f = r[i]; return c.indexOf(o) > c.indexOf(f) ? s === e ? J.FOLLOWING | J.CONTAINED_BY : J.FOLLOWING : s === u ? J.PRECEDING | J.CONTAINS : J.PRECEDING; }
function Je(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = Zt(e, t); return r & J.PRECEDING ? -1 : r & J.FOLLOWING ? 1 : 0; }), u; }
function Ye(u) { var e = oe(Rr, u); return e ? e.name === "feed" ? Dr(e) : Ir(e) : null; }
function Dr(u) { var e; var t = u.children, r = { type: "atom", items: gu("entry", t).map(function (i) { var s; var c = i.children, o = { media: Jt(c) }; $(o, "id", "id", c), $(o, "title", "title", c); var f = (s = oe("link", c)) === null || s === void 0 ? void 0 : s.attribs.href; f && (o.link = f); var S = fu("summary", c) || fu("content", c); S && (o.description = S); var p = fu("updated", c); return p && (o.pubDate = new Date(p)), o; }) }; $(r, "id", "id", t), $(r, "title", "title", t); var a = (e = oe("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; a && (r.link = a), $(r, "description", "subtitle", t); var n = fu("updated", t); return n && (r.updated = new Date(n)), $(r, "author", "email", t, !0), r; }
function Ir(u) { var e, t; var r = (t = (e = oe("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], a = { type: u.name.substr(0, 3), id: "", items: gu("item", u.children).map(function (i) { var s = i.children, c = { media: Jt(s) }; $(c, "id", "guid", s), $(c, "title", "title", s), $(c, "link", "link", s), $(c, "description", "description", s); var o = fu("pubDate", s) || fu("dc:date", s); return o && (c.pubDate = new Date(o)), c; }) }; $(a, "title", "title", r), $(a, "link", "link", r), $(a, "description", "description", r); var n = fu("lastBuildDate", r); return n && (a.updated = new Date(n)), $(a, "author", "managingEditor", r, !0), a; }
var Ur = ["url", "type", "lang"], Or = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Jt(u) { return gu("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Ur_1 = __values(Ur), Ur_1_1 = Ur_1.next(); !Ur_1_1.done; Ur_1_1 = Ur_1.next()) {
            var a = Ur_1_1.value;
            t[a] && (r[a] = t[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Ur_1_1 && !Ur_1_1.done && (_a = Ur_1.return)) _a.call(Ur_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Or_1 = __values(Or), Or_1_1 = Or_1.next(); !Or_1_1.done; Or_1_1 = Or_1.next()) {
            var a = Or_1_1.value;
            t[a] && (r[a] = parseInt(t[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Or_1_1 && !Or_1_1.done && (_b = Or_1.return)) _b.call(Or_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function oe(u, e) { return gu(u, e, !0, 1)[0]; }
function fu(u, e, t) {
    if (t === void 0) { t = !1; }
    return lu(gu(u, e, t, 1)).trim();
}
function $(u, e, t, r, a) {
    if (a === void 0) { a = !1; }
    var n = fu(t, r, a);
    n && (u[e] = n);
}
function Rr(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function Yt(u, e) { var t = new Cu(void 0, e); return new Ru(t, e).end(u), t.root; }
var x;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(x || (x = {}));
var M;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(M || (M = {}));
var u0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Mr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Pr = new Map([[126, M.Element], [94, M.Start], [36, M.End], [42, M.Any], [33, M.Not], [124, M.Hyphen]]), Br = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function mu(u) { switch (u.type) {
    case x.Adjacent:
    case x.Child:
    case x.Descendant:
    case x.Parent:
    case x.Sibling:
    case x.ColumnCombinator: return !0;
    default: return !1;
} }
var Fr = new Set(["contains", "icontains"]);
function Hr(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function zu(u) { return u.replace(Mr, Hr); }
function ut(u) { return u === 39 || u === 34; }
function e0(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function du(u) { var e = [], t = t0(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function t0(u, e, t) { var r = []; function a(p) { var g = e.slice(t + p).match(u0); if (!g)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(g, 1), A = _a[0]; return t += p + A.length, zu(A); } function n(p) { for (t += p; t < e.length && e0(e.charCodeAt(t));)
    t++; } function i() { t += 1; var p = t, g = 1; for (; g > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !s(t) ? g++ : e.charCodeAt(t) === 41 && !s(t) && g--; if (g)
    throw new Error("Parenthesis not matched"); return zu(e.slice(p, t - 1)); } function s(p) { var g = 0; for (; e.charCodeAt(--p) === 92;)
    g++; return (g & 1) === 1; } function c() { if (r.length > 0 && mu(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function o(p) { if (r.length > 0 && r[r.length - 1].type === x.Descendant) {
    r[r.length - 1].type = p;
    return;
} c(), r.push({ type: p }); } function f(p, g) { r.push({ type: x.Attribute, name: p, action: g, value: a(1), namespace: null, ignoreCase: "quirks" }); } function S() { if (r.length && r[r.length - 1].type === x.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (n(0), e.length === t)
    return t; u: for (; t < e.length;) {
    var p = e.charCodeAt(t);
    switch (p) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== x.Descendant) && (c(), r.push({ type: x.Descendant })), n(1);
            break;
        }
        case 62: {
            o(x.Child), n(1);
            break;
        }
        case 60: {
            o(x.Parent), n(1);
            break;
        }
        case 126: {
            o(x.Sibling), n(1);
            break;
        }
        case 43: {
            o(x.Adjacent), n(1);
            break;
        }
        case 46: {
            f("class", M.Element);
            break;
        }
        case 35: {
            f("id", M.Equals);
            break;
        }
        case 91: {
            n(1);
            var g = void 0, A = null;
            e.charCodeAt(t) === 124 ? g = a(1) : e.startsWith("*|", t) ? (A = "*", g = a(2)) : (g = a(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (A = g, g = a(1))), n(0);
            var T = M.Exists, H = Pr.get(e.charCodeAt(t));
            if (H) {
                if (T = H, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                e.charCodeAt(t) === 61 && (T = M.Equals, n(1));
            var W = "", X = null;
            if (T !== "exists") {
                if (ut(e.charCodeAt(t))) {
                    var P = e.charCodeAt(t), L = t + 1;
                    for (; L < e.length && (e.charCodeAt(L) !== P || s(L));)
                        L += 1;
                    if (e.charCodeAt(L) !== P)
                        throw new Error("Attribute value didn't end");
                    W = zu(e.slice(t + 1, L)), t = L + 1;
                }
                else {
                    var P = t;
                    for (; t < e.length && (!e0(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    W = zu(e.slice(P, t));
                }
                n(0);
                var I = e.charCodeAt(t) | 32;
                I === 115 ? (X = !1, n(1)) : I === 105 && (X = !0, n(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var N = { type: x.Attribute, name: g, action: T, value: W, namespace: A, ignoreCase: X };
            r.push(N);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: x.PseudoElement, name: a(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? i() : null });
                continue;
            }
            var g = a(1).toLowerCase(), A = null;
            if (e.charCodeAt(t) === 40)
                if (Br.has(g)) {
                    if (ut(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(g, " cannot be quoted"));
                    if (A = [], t = t0(A, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(g, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (A = i(), Fr.has(g)) {
                        var T = A.charCodeAt(0);
                        T === A.charCodeAt(A.length - 1) && ut(T) && (A = A.slice(1, -1));
                    }
                    A = zu(A);
                }
            r.push({ type: x.Pseudo, name: g, data: A });
            break;
        }
        case 44: {
            S(), r = [], n(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var T = e.indexOf("*/", t + 2);
                if (T < 0)
                    throw new Error("Comment was not terminated");
                t = T + 2, r.length === 0 && n(0);
                break;
            }
            var g = null, A = void 0;
            if (p === 42)
                t += 1, A = "*";
            else if (p === 124) {
                if (A = "", e.charCodeAt(t + 1) === 124) {
                    o(x.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (u0.test(e.slice(t)))
                A = a(0);
            else
                break u;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (g = A, e.charCodeAt(t + 1) === 42 ? (A = "*", t += 2) : A = a(1)), r.push(A === "*" ? { type: x.Universal, namespace: g } : { type: x.Tag, name: A, namespace: g });
        }
    }
} return S(), t; }
var ft = pu(hu(), 1);
var su = pu(hu(), 1);
var a0 = new Map([[x.Universal, 50], [x.Tag, 30], [x.Attribute, 1], [x.Pseudo, 0]]);
function Wu(u) { return !a0.has(u.type); }
var Gr = new Map([[M.Exists, 10], [M.Equals, 8], [M.Not, 7], [M.Start, 6], [M.End, 6], [M.Any, 5]]);
function et(u) { var e = u.map(n0); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var a = t - 1; a >= 0 && r < e[a]; a--) {
            var n = u[a + 1];
            u[a + 1] = u[a], u[a] = n, e[a + 1] = e[a], e[a] = r;
        }
} }
function n0(u) { var e, t; var r = (e = a0.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === x.Attribute ? (r = (t = Gr.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === M.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === x.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(n0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var Ku = pu(hu(), 1), Vr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function i0(u) { return u.replace(Vr, "\\$&"); }
var jr = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function xu(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && jr.has(u.name); }
var s0 = { equals: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; return xu(e, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return s != null && s.length === n.length && s.toLowerCase() === n && u(i); }) : function (i) { return r.getAttributeValue(i, a) === n && u(i); }; }, hyphen: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = n.length; return xu(e, t) ? (n = n.toLowerCase(), function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === i || o.charAt(i) === "-") && o.substr(0, i).toLowerCase() === n && u(c); }) : function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === i || o.charAt(i) === "-") && o.substr(0, i) === n && u(c); }; }, element: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; if (/\s/.test(n))
        return Ku.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(i0(n), "(?:$|\\s)"), xu(e, t) ? "i" : ""); return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= n.length && i.test(o) && u(c); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = n.length; return i === 0 ? Ku.default.falseFunc : xu(e, t) ? (n = n.toLowerCase(), function (s) { var c = r.getAttributeValue(s, a); return c != null && c.length >= i && c.substr(0, i).toLowerCase() === n && u(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.startsWith(n)) && u(s); }; }, end: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = -n.length; return i === 0 ? Ku.default.falseFunc : xu(e, t) ? (n = n.toLowerCase(), function (s) { var c; return ((c = r.getAttributeValue(s, a)) === null || c === void 0 ? void 0 : c.substr(i).toLowerCase()) === n && u(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.endsWith(n)) && u(s); }; }, any: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; if (n === "")
        return Ku.default.falseFunc; if (xu(e, t)) {
        var i_1 = new RegExp(i0(n), "i");
        return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= n.length && i_1.test(o) && u(c); };
    } return function (i) { var s; return !!(!((s = r.getAttributeValue(i, a)) === null || s === void 0) && s.includes(n)) && u(i); }; }, not: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; return n === "" ? function (i) { return !!r.getAttributeValue(i, a) && u(i); } : xu(e, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return (s == null || s.length !== n.length || s.toLowerCase() !== n) && u(i); }) : function (i) { return r.getAttributeValue(i, a) !== n && u(i); }; } };
var zr = new Set([9, 10, 12, 13, 32]), c0 = 48, Wr = 57;
function o0(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = n(), a = i(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (a != null ? a : 1), s(), e < u.length ? (r = n(), s(), a = i()) : r = a = 0), a === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * a]; function n() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function i() { var c = e, o = 0; for (; e < u.length && u.charCodeAt(e) >= c0 && u.charCodeAt(e) <= Wr;)
    o = o * 10 + (u.charCodeAt(e) - c0), e++; return e === c ? null : o; } function s() { for (; e < u.length && zr.has(u.charCodeAt(e));)
    e++; } }
var tt = pu(hu(), 1);
function l0(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return tt.default.falseFunc; if (e === -1)
    return function (n) { return n <= t; }; if (e === 0)
    return function (n) { return n === t; }; if (e === 1)
    return t < 0 ? tt.default.trueFunc : function (n) { return n >= t; }; var r = Math.abs(e), a = (t % r + r) % r; return e > 1 ? function (n) { return n >= t && n % r === a; } : function (n) { return n <= t && n % r === a; }; }
function Du(u) { return l0(o0(u)); }
var _ = pu(hu(), 1);
function le(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var Iu = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (a) { return u(a) && t.getText(a).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (n) { return u(n) && t.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Du(e);
        return a === _.default.falseFunc ? _.default.falseFunc : a === _.default.trueFunc ? le(u, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = 0; o < s.length && !r(i, s[o]); o++)
            t.isTag(s[o]) && c++; return a(c) && u(i); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Du(e);
        return a === _.default.falseFunc ? _.default.falseFunc : a === _.default.trueFunc ? le(u, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = s.length - 1; o >= 0 && !r(i, s[o]); o--)
            t.isTag(s[o]) && c++; return a(c) && u(i); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Du(e);
        return a === _.default.falseFunc ? _.default.falseFunc : a === _.default.trueFunc ? le(u, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = 0; o < s.length; o++) {
            var f = s[o];
            if (r(i, f))
                break;
            t.isTag(f) && t.getName(f) === t.getName(i) && c++;
        } return a(c) && u(i); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Du(e);
        return a === _.default.falseFunc ? _.default.falseFunc : a === _.default.trueFunc ? le(u, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = s.length - 1; o >= 0; o--) {
            var f = s[o];
            if (r(i, f))
                break;
            t.isTag(f) && t.getName(f) === t.getName(i) && c++;
        } return a(c) && u(i); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var a = t.getParent(r); return (a == null || !t.isTag(a)) && u(r); };
    }, scope: function (u, e, t, r) { var a = t.equals; return !r || r.length === 0 ? Iu.root(u, e, t) : r.length === 1 ? function (n) { return a(r[0], n) && u(n); } : function (n) { return r.includes(n) && u(n); }; }, hover: rt("isHovered"), visited: rt("isVisited"), active: rt("isActive") };
function rt(u) { return function (t, r, _a) {
    var a = _a.adapter;
    var n = a[u];
    return typeof n != "function" ? _.default.falseFunc : function (s) { return n(s) && t(s); };
}; }
var $u = { empty: function (u, _a) {
        var e = _a.adapter;
        return !e.getChildren(u).some(function (t) { return e.isTag(t) || e.getText(t) !== ""; });
    }, "first-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(u) == null;
        var r = e.getSiblings(u).find(function (a) { return e.isTag(a); });
        return r != null && t(u, r);
    }, "last-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u);
        for (var a = r.length - 1; a >= 0; a--) {
            if (t(u, r[a]))
                return !0;
            if (e.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), a = e.getName(u);
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            if (t(u, i))
                return !0;
            if (e.isTag(i) && e.getName(i) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), a = e.getName(u);
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n];
            if (t(u, i))
                return !0;
            if (e.isTag(i) && e.getName(i) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getName(u);
        return e.getSiblings(u).every(function (a) { return t(u, a) || !e.isTag(a) || e.getName(a) !== r; });
    }, "only-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        return e.getSiblings(u).every(function (r) { return t(u, r) || !e.isTag(r); });
    } };
function at(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var fe = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var Y = pu(hu(), 1);
var st = {};
function ct(u, e) { return u === Y.default.falseFunc ? Y.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function ot(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function it(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var nt = function (u, e, t, r, a) { var n = a(e, it(t), r); return n === Y.default.trueFunc ? u : n === Y.default.falseFunc ? Y.default.falseFunc : function (i) { return n(i) && u(i); }; }, de = { is: nt, matches: nt, where: nt, not: function (u, e, t, r, a) { var n = a(e, it(t), r); return n === Y.default.falseFunc ? u : n === Y.default.trueFunc ? Y.default.falseFunc : function (i) { return !n(i) && u(i); }; }, has: function (u, e, t, r, a) { var n = t.adapter, i = it(t); i.relativeSelector = !0; var s = e.some(function (f) { return f.some(Wu); }) ? [st] : void 0, c = a(e, i, s); if (c === Y.default.falseFunc)
        return Y.default.falseFunc; var o = ct(c, n); if (s && c !== Y.default.trueFunc) {
        var _a = c.shouldTestNextSiblings, f_1 = _a === void 0 ? !1 : _a;
        return function (S) { if (!u(S))
            return !1; s[0] = S; var p = n.getChildren(S), g = f_1 ? __spreadArray(__spreadArray([], __read(p), false), __read(ot(S, n)), false) : p; return n.existsOne(o, g); };
    } return function (f) { return u(f) && n.existsOne(o, n.getChildren(f)); }; } };
function f0(u, e, t, r, a) { var n; var i = e.name, s = e.data; if (Array.isArray(s)) {
    if (!(i in de))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(s, ")"));
    return de[i](u, s, t, r, a);
} var c = (n = t.pseudos) === null || n === void 0 ? void 0 : n[i], o = typeof c == "string" ? c : fe[i]; if (typeof o == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var f = du(o);
    return de.is(u, f, t, r, a);
} if (typeof c == "function")
    return at(c, i, s, 1), function (f) { return c(f, s) && u(f); }; if (i in Iu)
    return Iu[i](u, s, t, r); if (i in $u) {
    var f_2 = $u[i];
    return at(f_2, i, s, 2), function (S) { return f_2(S, t, s) && u(S); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function lt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function d0(u, e, t, r, a) { var n = t.adapter, i = t.equals; switch (e.type) {
    case x.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case x.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case x.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), s0[e.action](u, e, t);
    }
    case x.Pseudo: return f0(u, e, t, r, a);
    case x.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (o) { return n.getName(o) === s_1 && u(o); };
    }
    case x.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (o) { var f = o; for (; f = lt(f, n);)
                if (u(f))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (o) { var f = o; for (; f = lt(f, n);)
            if (!s_2.has(f)) {
                if (n.isTag(f) && u(f))
                    return !0;
                s_2.add(f);
            } return !1; };
    }
    case "_flexibleDescendant": return function (c) { var o = c; do
        if (u(o))
            return !0;
    while (o = lt(o, n)); return !1; };
    case x.Parent: return function (c) { return n.getChildren(c).some(function (o) { return n.isTag(o) && u(o); }); };
    case x.Child: return function (c) { var o = n.getParent(c); return o != null && n.isTag(o) && u(o); };
    case x.Sibling: return function (c) { var o = n.getSiblings(c); for (var f = 0; f < o.length; f++) {
        var S = o[f];
        if (i(c, S))
            break;
        if (n.isTag(S) && u(S))
            return !0;
    } return !1; };
    case x.Adjacent: return n.prevElementSibling ? function (c) { var o = n.prevElementSibling(c); return o != null && u(o); } : function (c) { var o = n.getSiblings(c), f; for (var S = 0; S < o.length; S++) {
        var p = o[S];
        if (i(c, p))
            break;
        n.isTag(p) && (f = p);
    } return !!f && u(f); };
    case x.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function h0(u, e, t) { var r = he(u, e, t); return ct(r, e.adapter); }
function he(u, e, t) { var r = typeof u == "string" ? du(u) : u; return be(r, e, t); }
function b0(u) { return u.type === x.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(b0); })); }
var Kr = { type: x.Descendant }, $r = { type: "_flexibleDescendant" }, _r = { type: x.Pseudo, name: "scope", data: null };
function Qr(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (a) { var n = e.isTag(a) && e.getParent(a); return a === st || n && e.isTag(n); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var a = u_1_1.value;
            if (!(a.length > 0 && Wu(a[0]) && a[0].type !== x.Descendant))
                if (r && !a.some(b0))
                    a.unshift(Kr);
                else
                    continue;
            a.unshift(_r);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (u_1_1 && !u_1_1.done && (_b = u_1.return)) _b.call(u_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function be(u, e, t) { var r; u.forEach(et), t = (r = e.context) !== null && r !== void 0 ? r : t; var a = Array.isArray(t), n = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    Qr(u, e, n);
else if (u.some(function (c) { return c.length > 0 && Wu(c[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, s = u.map(function (c) { if (c.length >= 2) {
    var _a = __read(c, 2), o = _a[0], f = _a[1];
    o.type !== x.Pseudo || o.name !== "scope" || (a && f.type === x.Descendant ? c[1] = $r : (f.type === x.Adjacent || f.type === x.Sibling) && (i = !0));
} return Xr(c, e, n); }).reduce(Zr, su.default.falseFunc); return s.shouldTestNextSiblings = i, s; }
function Xr(u, e, t) { var r; return u.reduce(function (a, n) { return a === su.default.falseFunc ? su.default.falseFunc : d0(a, n, e, t, be); }, (r = e.rootFunc) !== null && r !== void 0 ? r : su.default.trueFunc); }
function Zr(u, e) { return e === su.default.falseFunc || u === su.default.trueFunc ? u : u === su.default.falseFunc || e === su.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var p0 = function (u, e) { return u === e; }, Jr = { adapter: ru, equals: p0 };
function g0(u) { var e, t, r, a; var n = u != null ? u : Jr; return (e = n.adapter) !== null && e !== void 0 || (n.adapter = ru), (t = n.equals) !== null && t !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : p0), n; }
function dt(u) { return function (t, r, a) { var n = g0(r); return u(t, n, a); }; }
var Ei = dt(h0), Ti = dt(he), pe = dt(be);
function m0(u) { return function (t, r, a) { var n = g0(a); typeof t != "function" && (t = he(t, n, r)); var i = ge(r, n.adapter, t.shouldTestNextSiblings); return u(t, i, n); }; }
function ge(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = Yr(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function Yr(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var a = 0; a < r; a++) {
    var n = ot(t[a], e);
    t.push.apply(t, __spreadArray([], __read(n), false));
} return t; }
var vi = m0(function (u, e, t) { return u === ft.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), Ni = m0(function (u, e, t) { return u === ft.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var xe = pu(hu(), 1);
var ua = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Uu(u) { return u.type !== "pseudo" ? !1 : ua.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(Uu); }) : !1; }
function x0(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
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
function y0(u) { for (; u.parent;)
    u = u.parent; return u; }
function me(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(Uu) ? e.push(r) : t.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (u_2_1 && !u_2_1.done && (_a = u_2.return)) _a.call(u_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [t, e];
}
var ea = { type: x.Universal, namespace: null }, ta = { type: x.Pseudo, name: "scope", data: null };
function pt(u, e, t) {
    if (t === void 0) { t = {}; }
    return ra([u], e, t);
}
function ra(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(me(du(e)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && u.some(pe(r, t)) || a.some(function (n) { return w0(n, u, t).length > 0; });
}
function aa(u, e, t, r) { var a = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < e.length ? [a < 0 ? e[e.length + a] : e[a]] : [];
    case "gt": return isFinite(a) ? e.slice(a + 1) : [];
    case "even": return e.filter(function (n, i) { return i % 2 === 0; });
    case "odd": return e.filter(function (n, i) { return i % 2 === 1; });
    case "not": {
        var n_1 = new Set(na(t, e, r));
        return e.filter(function (i) { return !n_1.has(i); });
    }
} }
function na(u, e, t) { if (e.length === 0)
    return []; var _a = __read(me(u), 2), r = _a[0], a = _a[1], n; if (r.length) {
    var i = bt(e, r, t);
    if (a.length === 0)
        return i;
    i.length && (n = new Set(i));
} for (var i = 0; i < a.length && (n == null ? void 0 : n.size) !== e.length; i++) {
    var s = a[i];
    if ((n ? e.filter(function (f) { return q(f) && !n.has(f); }) : e).length === 0)
        break;
    var o = w0(s, e, t);
    if (o.length)
        if (n)
            o.forEach(function (f) { return n.add(f); });
        else {
            if (i === a.length - 1)
                return o;
            n = new Set(o);
        }
} return typeof n != "undefined" ? n.size === e.length ? e : e.filter(function (i) { return n.has(i); }) : []; }
function w0(u, e, t) { var r; if (u.some(mu)) {
    var a = (r = t.root) !== null && r !== void 0 ? r : y0(e[0]), n = bu(uu({}, t), { context: e, relativeSelector: !1 });
    return u.push(ta), ye(a, u, n, !0, e.length);
} return ye(e, u, t, !1, e.length); }
function gt(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return S0(e, u);
    var _a = __read(me(du(u)), 2), a = _a[0], n = _a[1], i = n.map(function (s) { return ye(e, s, t, !0, r); });
    return a.length && i.push(ht(e, a, t, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : Je(i.reduce(function (s, c) { return __spreadArray(__spreadArray([], __read(s), false), __read(c), false); }));
}
function ye(u, e, t, r, a) { var n = e.findIndex(Uu), i = e.slice(0, n), s = e[n], c = e.length - 1 === n ? a : 1 / 0, o = x0(s.name, s.data, c); if (o === 0)
    return []; var S = (i.length === 0 && !Array.isArray(u) ? ae(u).filter(q) : i.length === 0 ? (Array.isArray(u) ? u : [u]).filter(q) : r || i.some(mu) ? ht(u, [i], t, o) : bt(u, [i], t)).slice(0, o), p = aa(s.name, S, s.data, t); if (p.length === 0 || e.length === n + 1)
    return p; var g = e.slice(n + 1), A = g.some(mu); if (A) {
    if (mu(g[0])) {
        var T = g[0].type;
        (T === x.Sibling || T === x.Adjacent) && (p = ge(p, ru, !0)), g.unshift(ea);
    }
    t = bu(uu({}, t), { relativeSelector: !1, rootFunc: function (T) { return p.includes(T); } });
}
else
    t.rootFunc && t.rootFunc !== xe.trueFunc && (t = bu(uu({}, t), { rootFunc: xe.trueFunc })); return g.some(Uu) ? ye(p, g, t, !1, a) : A ? ht(p, [g], t, a) : bt(p, [g], t); }
function ht(u, e, t, r) { var a = pe(e, t, u); return S0(u, a, r); }
function S0(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = ge(u, ru, e.shouldTestNextSiblings);
    return ie(function (a) { return q(a) && e(a); }, r, !0, t);
}
function bt(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(q); if (r.length === 0)
    return r; var a = pe(e, t); return a === xe.trueFunc ? r : r.filter(a); }
var ia = function (u, e, t) { return gt(u, e, t); }, v0 = function (u, e, t) { return gt(u, e, t, 1)[0] || null; }, N0 = /[\s ]+/g, A0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), sa = { containsOwn: function (u, e) { return xt(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return E0(e).test(mt(u)); }, matchesOwn: function (u, e) { return E0(e).test(xt(u)); }, containsData: function (u, e) { return lu(u).includes(e); }, "contains-ci": function (u, e) { return mt(u).toLowerCase().includes(String(e).toLowerCase()); } };
function E0(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var we = { pseudos: sa, xmlMode: !1, lowerCaseTags: !0 };
function Se(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function mt(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? e += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? e += " " : a.type === "tag" && (A0.has(a.name) && (e += " "), t(a), A0.has(a.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(N0, " ").trim(); }
function xt(u) {
    var e_9, _a;
    var e = "";
    try {
        for (var _b = __values(u.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (e += t.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(N0, " ").trim();
}
function k0(u, e) { if (!e)
    return ""; try {
    return new URL(e, u || void 0).href;
}
catch (t) {
    return u ? "" : e;
} }
var yu = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return au.of(ia(Se(e), this.node, we), this.doc); };
    u.prototype.selectFirst = function (e) { var t = v0(Se(e), this.node, we); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return pt(this.node, Se(e), we); };
    u.prototype.text = function () { return mt(this.node); };
    u.prototype.ownText = function () { return xt(this.node); };
    u.prototype.wholeText = function () { return lu(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return qu(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return qu(this.node, { decodeEntities: !1 }); };
    u.prototype.toString = function () { return this.outerHtml(); };
    u.prototype.tagName = function () { return this.node.name || ""; };
    u.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    u.prototype.id = function () { return this.attr("id"); };
    u.prototype.className = function () { return this.attr("class"); };
    u.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    u.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    u.prototype.attr = function (e, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(t)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return k0(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    u.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    u.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    u.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    u.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    u.prototype.dataset = function () {
        var e_10, _a;
        var e = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (e[t.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    u.prototype.val = function () { return this.attr("value"); };
    u.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new u(e, this.doc) : null; };
    u.prototype.parents = function () { var e = [], t = this.node.parent; for (; t && t.type !== "root";)
        e.push(t), t = t.parent; return au.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && pt(t, Se(e), we))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return au.of((this.node.children || []).filter(q), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(q)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(q).length; };
    u.prototype.nextElementSibling = function () { var e = _e(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = Qe(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return au.of(ne(this.node).filter(function (e) { return e !== _this.node && q(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return ne(this.node).filter(q).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return iu(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), wt = Object.create(Array.prototype), au = { of: yt, prototype: wt };
function yt(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof yu ? r : new yu(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, wt), t;
}
var T0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return au.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (u) { return u.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (u) { return u.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (u, e) {
        var e_12, _a;
        if (e !== void 0)
            return this.forEach(function (t) { return t.attr(u, e); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(u))
                    return t.attr(u);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (u) { return this.filter(function (e) { return e.hasAttr(u); }).map(function (e) { return e.attr(u); }); }, hasAttr: function (u) { return this.some(function (e) { return e.hasAttr(u); }); }, hasClass: function (u) { return this.some(function (e) { return e.hasClass(u); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (u) {
        var e_13, _a, e_14, _b;
        var e = yt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(u))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var a = _g.value;
                        t.has(a.node) || (t.add(a.node), e.push(a));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (u) {
        var e_15, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var t = e.selectFirst(u);
                if (t)
                    return t;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return au.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = yt([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                u.push.apply(u, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return u;
    }, next: function () { return au.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return au.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(T0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(wt, u, { value: T0[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ae(u, e) { var t = Yt(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new yu(t, null); r.doc = r, r.__base = e || ""; var a = v0("base[href]", t); return a && a.attribs.href && (r.__base = k0(r.__base, a.attribs.href)), r; }
function C0(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Ae(u), a = function (n) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((n.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                iu(i);
                continue;
            }
            if (i.type === "tag" && (a(i), !t.has(i.name))) {
                var s = (i.children || []).slice();
                try {
                    for (var s_3 = (e_18 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var c = s_3_1.value;
                        Xe(i, c);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                iu(i);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return a(r.node), qu(r.node.children, { decodeEntities: !1 }); }
var Ee = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function ca(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return btoa(e); }
function q0(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
function oa(u) { var e = ""; for (var t = 0; t < u.length; t++) {
    var r = u.charCodeAt(t);
    if (r < 128) {
        e += u[t];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var a = u.charCodeAt(t + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], t++) : e += "�";
} return e; }
var St = (function () {
    function St(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    St.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    St.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? oa(t) : t; };
    St.prototype.string = function (e) { return this.text(e); };
    St.prototype.html = function (e) { return Ae(this.text(e), this.url); };
    St.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    St.prototype.base64 = function () { return ca(this._raw.bytes || q0(this.text())); };
    St.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || q0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return St;
}());
function la(u) {
    var e_19, _a;
    var e = {};
    if (!u)
        return e;
    if (typeof u.forEach == "function" && !Array.isArray(u) && typeof u.entries == "function")
        return u.forEach(function (t, r) { e[r] = t; }), e;
    try {
        for (var _b = __values(Object.keys(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            e[t] = String(u[t]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function D0(u, e) { var t = function (i) { return ({ getItem: function (s) { var c = u.storageGet(i + s); return c == null ? null : c; }, setItem: function (s, c) { return u.storageSet(i + s, c == null ? null : String(c)); }, removeItem: function (s) { return u.storageSet(i + s, null); }, clear: function () { return u.storageClear && u.storageClear(i); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (i, s) { return ({ code: 0, data: i === void 0 ? null : i, data2: s === void 0 ? null : s }); }, error: function (i) { return ({ code: 1, data: i == null ? "" : String(i) }); } }, a.fetch = function (s, c) {
    return __awaiter(this, void 0, void 0, function () { var o, T, f, S, p, T, g, A, T_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c = c || {};
                o = String(s);
                if (c.queries) {
                    T = Object.entries(c.queries).map(function (_a) {
                        var _b = __read(_a, 2), H = _b[0], W = _b[1];
                        return encodeURIComponent(H) + "=" + encodeURIComponent(W);
                    }).join("&");
                    T && (o += (o.includes("?") ? "&" : "?") + T);
                }
                f = Object.assign({ "User-Agent": Ee }, la(c.headers)), S = u.storageGet(r);
                S && !Object.keys(f).some(function (T) { return T.toLowerCase() === "cookie"; }) && (f.Cookie = S);
                p = c.body;
                if (p != null && typeof p == "object") {
                    T = Object.keys(f).find(function (H) { return H.toLowerCase() === "content-type"; });
                    T && /json/i.test(f[T]) ? p = JSON.stringify(p) : (p = Object.entries(p).map(function (_a) {
                        var _b = __read(_a, 2), H = _b[0], W = _b[1];
                        return encodeURIComponent(H) + "=" + encodeURIComponent(W);
                    }).join("&"), T || (f["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                g = { url: o, method: (c.method || (p != null ? "POST" : "GET")).toUpperCase(), headers: f, body: p, timeout: c.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, u.request(g)];
            case 2:
                A = _a.sent();
                return [3, 4];
            case 3:
                T_1 = _a.sent();
                A = { status: 0, url: o, headers: {}, text: "", error: String(T_1 && T_1.message || T_1) };
                return [3, 4];
            case 4: return [2, new St(A, g)];
        }
    }); });
}, a.Http = { get: function (i) { return L0(a, "GET", i); }, post: function (i) { return L0(a, "POST", i); } }, a.Html = { parse: function (i, s) { return Ae(i, s || ""); }, clean: function (i, s) { return C0(i, s); } }, a.localStorage = t("ls:"), a.cacheStorage = t("cs:"), a.localConfig = { getItem: function (i) { return u.config(i); } }, a.localCookie = { setCookie: function (i) { u.storageSet(r, String(i).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, a.sleep = function (i) { return new Promise(function (s) { return setTimeout(s, Math.min(Number(i) || 0, 1e4)); }); }; var n = function () {
    var i = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        i[_i] = arguments[_i];
    }
    try {
        u.log && u.log(i.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.Console = a.console, a.log = n, a.UserAgent = { system: function () { return Ee; }, chrome: function () { return Ee; }, android: function () { return Ee; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = au, a.Element = yu, a.__meta = e, a; }
function L0(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, i) { return r.headers[n] = i, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return a; }
function wu(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof URL == "undefined")
    return __abs(u, e); try {
    return new URL(e, u).href;
}
catch (t) {
    return e;
} }
var R = function (u) { return u == null ? "" : String(u); }, fa = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, Te = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, a = e.host;
        this.meta = t, this.host = a, this.env = e.env || D0(a, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return R(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, n, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        a = function (s) { var c = _this.host.config(s); return c == null ? (_this.meta.configDefaults || {})[s] : c; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _a.sent();
                        if (typeof n != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(t.map(R)), false))];
                    case 2:
                        i = _a.sent();
                        if (!i)
                            throw new Error(e + ": empty result");
                        if (i.code !== 0)
                            throw new Error(e + ": " + R(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return R(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (e = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, i, s, c;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = e + "|" + t;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, t, n)];
                    case 1:
                        i = _a.sent(), s = R(i.data2);
                        s && (this.tokens[a + "|" + (r + 1)] = s);
                        c = (i.data || []).filter(Boolean).map(function (o) { return ({ name: R(o.name).trim(), link: wu(o.host || _this.base + "/", o.link), cover: wu(o.host || _this.base + "/", o.cover), description: R(o.description), tag: R(o.tag) }); }).filter(function (o) { return o.name && o.link; });
                        return [2, { items: c, hasNext: !!s && c.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), R(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), R(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", e, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: R(t.name).trim(), cover: wu(t.host || this.base + "/", t.cover), author: R(t.author).trim(), description: I0(R(t.description)), detail: I0(R(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: fa(r.map(function (a) { return String(a).trim(); })), url: e, format: R(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, a, _a, _b, e_20_1, _c;
            var e_20, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_f.sent()).data || [e];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", R(a))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _f.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: R(r.name).trim() || "#" + (a + 1), url: wu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [e];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6: return [2, (_a, typeof t == "string" && (t = t.split(/[\n,]+/)), (t || []).map(function (r) { return wu(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    t = _a.sent();
                    return [2, { html: R(t.data), title: R(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, a, r, t_3, t_3_1, a, n, i, i_2, i_2_1, s, n_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        a = (_c.sent()).data;
                        Array.isArray(a) && a.length && (t = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: R(n.title || n.name || "Server"), data: R(n.data || n.url || n.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        a = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", a.data)];
                    case 6:
                        n = (_c.sent()).data || {}, i = Array.isArray(n) ? n : [n];
                        try {
                            for (i_2 = (e_22 = void 0, __values(i)), i_2_1 = i_2.next(); !i_2_1.done; i_2_1 = i_2.next()) {
                                s = i_2_1.value;
                                !s || !s.data || s.type !== "webview" && r.push({ url: wu(s.host || this.base + "/", s.data), quality: a.title + (s.quality ? " " + s.quality : ""), headers: s.headers || { Referer: this.base + "/" }, subtitles: (s.subtitles || (s.subtitle ? [{ data: s.subtitle, label: "Sub" }] : [])).map(function (c) { return ({ file: wu(_this.base + "/", c.data || c.file), label: R(c.label || c.language || "Sub") }); }), mimeType: R(s.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (i_2_1 && !i_2_1.done && (_b = i_2.return)) _b.call(i_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _c.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + n_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function I0(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var cu = { id: "alicesw", name: "AliceSW", source: "https://www.alicesw.com/", type: "novel", locale: "zh_CN", nsfw: !0, version: 6, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.alicesw", lnIcon: "", lnVersion: "1.0.6" }, U0 = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function N() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, n.success([{ title: "最新小说", input: "/all/order/update_time+desc.html", script: "source.js" }, { title: "原创专区", input: "/original.html", script: "source.js" }, { title: "本日排行", input: "/other/rank_hits/order/hits_day.html", script: "source.js" }, { title: "本周排行", input: "/other/rank_hits/order/hits_week.html", script: "source.js" }, { title: "本月排行", input: "/other/rank_hits/order/hits_month.html", script: "source.js" }, { title: "总排行", input: "/other/rank_hits/order/hits.html", script: "source.js" }])];
                                        }); });
                                    } return __generator(this, function (_a) {
                                        return [2, typeof N == "function" ? N : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(h, b) {
                                        return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    b = b || {};
                                                    m = b.headers || {};
                                                    m["User-Agent"] = I, b.headers = m;
                                                    return [4, t(h, b)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(h) { return h ? h.indexOf("http") === 0 ? h : h.indexOf("//") === 0 ? "https:" + h : N + (h.charAt(0) === "/" ? "" : "/") + h : ""; } function E(h, b, m, k) { m = (m || "").trim(), k = (k || "").trim(), !(!m || !k || b[k]) && (b[k] = !0, h.push({ title: m, input: L(k), script: "gen.js" })); } function d() {
                                        return __awaiter(this, void 0, void 0, function () { var h, b, m, k; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, P(N)];
                                                case 1:
                                                    h = _a.sent();
                                                    if (!h || !h.ok)
                                                        return [2, null];
                                                    b = h.html(), m = [], k = {};
                                                    return [2, (b.select(".nav-fenlei .fenlei-item a[href*='/lists/']").forEach(function (y) { E(m, k, y.text(), y.attr("href")); }), n.success(m))];
                                            }
                                        }); });
                                    } var N, I, h_1, b; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (h) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                h_1 = t, b = function (m, k) { k = k || {}; var y = k.headers || {}; return y["User-Agent"] = I, k.headers = y, h_1(m, k); };
                                                b.__uaPatched = !0, t = b;
                                            }
                                        }
                                        catch (h) { }
                                        return [2, typeof d == "function" ? d : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(d, h) {
                                        return __awaiter(this, void 0, void 0, function () { var b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h = h || {};
                                                    b = h.headers || {};
                                                    b["User-Agent"] = I, h.headers = b;
                                                    return [4, t(d, h)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(d) { return d ? d.indexOf("http") === 0 ? d : d.indexOf("//") === 0 ? "https:" + d : N + (d.charAt(0) === "/" ? "" : "/") + d : ""; } function E(d) {
                                        return __awaiter(this, void 0, void 0, function () { var h, m, b, k, y, C, O, U, G, j, V_1; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, P(d)];
                                                case 1:
                                                    h = _a.sent();
                                                    if (h.ok) {
                                                        m = h.html();
                                                        b = [];
                                                        k = m.select(".box_info .novel_info p");
                                                        k.size() > 1 && k.get(1).select("a").forEach(function (j) { var eu = j.text().trim(), Tt = j.attr("href"); !eu || !Tt || b.push({ title: eu, input: L(Tt), script: "gen.js" }); });
                                                        y = m.select(".box_info .novel_title").text().trim();
                                                        y || (y = m.select(".box_info h1").text().trim()), y || (y = m.select(".box_intro .pic img").attr("alt").trim());
                                                        C = "", O = "";
                                                        k.size() > 0 && (O = k.get(0).select("a").text().trim()), O || (O = m.select(".box_info p:nth-child(2) > a:nth-child(1)").text().trim());
                                                        U = "", G = m.select(".jianjie p").first();
                                                        if (G && (G.select("img").remove(), U = G.html().trim()), !U) {
                                                            j = m.select(".intro").first();
                                                            j && (j.select("img").remove(), U = j.html().trim());
                                                        }
                                                        V_1 = [];
                                                        return [2, (k.forEach(function (j) { var eu = j.text().trim(); eu && (eu.indexOf("状态") !== -1 && (eu = "状态: 连载中"), V_1.push(eu)); }), V_1.some(function (j) { return String(j || "").indexOf("状态") !== -1; }) || V_1.push("状态: 连载中"), n.success({ name: y, cover: C, author: O, description: U, detail: V_1.join("<br>"), genres: b, ongoing: !0, suggests: [{ title: "Đề cử", input: m.select(".ui-ranking ul").html(), script: "suggest.js" }], host: N }))];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var N, I, d_1, h; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (d) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                d_1 = t, h = function (b, m) { m = m || {}; var k = m.headers || {}; return k["User-Agent"] = I, m.headers = k, d_1(b, m); };
                                                h.__uaPatched = !0, t = h;
                                            }
                                        }
                                        catch (d) { }
                                        return [2, typeof E == "function" ? E : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(E, d) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    d = d || {};
                                                    h = d.headers || {};
                                                    h["User-Agent"] = I, d.headers = h;
                                                    return [4, t(E, d)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(E) {
                                        return __awaiter(this, void 0, void 0, function () { var d, m, k, y, h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    E = E.replace("/novel/", "/other/chapters/id/");
                                                    return [4, P(E)];
                                                case 1:
                                                    d = _a.sent();
                                                    if (d.ok) {
                                                        m = d.html().select(".mulu_list li"), k = [];
                                                        for (y = 0; y < m.size(); y++) {
                                                            h = m.get(y);
                                                            k.push({ name: h.select("a").text(), url: N + h.select("a").attr("href"), host: N });
                                                        }
                                                        return [2, n.success(k)];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var N, I, E_1, d; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (E) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                E_1 = t, d = function (h, b) { b = b || {}; var m = b.headers || {}; return m["User-Agent"] = I, b.headers = m, E_1(h, b); };
                                                d.__uaPatched = !0, t = d;
                                            }
                                        }
                                        catch (E) { }
                                        return [2, typeof L == "function" ? L : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(E, d) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    d = d || {};
                                                    h = d.headers || {};
                                                    h["User-Agent"] = I, d.headers = h;
                                                    return [4, t(E, d)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(E) {
                                        return __awaiter(this, void 0, void 0, function () { var d, h, b, m; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, P(E)];
                                                case 1:
                                                    d = _a.sent();
                                                    if (d && d.ok) {
                                                        h = d.html();
                                                        if (h) {
                                                            b = h.select("div.read-content");
                                                            if (b && b.html()) {
                                                                b.select("#user_ad").remove(), b.select(".user_img_ad").remove(), b.select(".user_text_ad").remove();
                                                                m = b.html();
                                                                return [2, (m = m.replace(/\&nbsp;/g, ""), n.success(m))];
                                                            }
                                                        }
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var N, I, E_2, d; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (E) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                E_2 = t, d = function (h, b) { b = b || {}; var m = b.headers || {}; return m["User-Agent"] = I, b.headers = m, E_2(h, b); };
                                                d.__uaPatched = !0, t = d;
                                            }
                                        }
                                        catch (E) { }
                                        return [2, typeof L == "function" ? L : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(E, d) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    d = d || {};
                                                    h = d.headers || {};
                                                    h["User-Agent"] = I, d.headers = h;
                                                    return [4, t(E, d)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(h, d) {
                                        return __awaiter(this, void 0, void 0, function () { var b, m, k_1, y, C; var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h = encodeURIComponent(h);
                                                    d || (d = 1);
                                                    return [4, P(N + "/search.html?q=" + h + "&p=" + d)];
                                                case 1:
                                                    b = _a.sent();
                                                    if (b) {
                                                        m = b.html(), k_1 = [], y = m.select(".list-group .list-group-item");
                                                        if (!y.length)
                                                            return [2, n.error(h)];
                                                        y.forEach(function (O) { var U = O.select("h5 a").first().attr("href"), G = O.select("h5 small.text-muted").first(), V = ""; if (G) {
                                                            var j = G.text().trim();
                                                            j.indexOf("已完结") !== -1 || j.indexOf("完本") !== -1 ? V = "Completed" : j.indexOf("连载") !== -1 && (V = "Ongoing");
                                                        } k_1.push({ name: O.select("h5 a").text(), link: U, cover: "https://i.postimg.cc/T2WtdmBM/5BdXa90.webp", description: O.select(".text-muted").text(), tag: V, host: N }); });
                                                        C = parseInt(d) + 1;
                                                        return [2, n.success(k_1, C)];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var N, I, E_3, d; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (E) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                E_3 = t, d = function (h, b) { b = b || {}; var m = b.headers || {}; return m["User-Agent"] = I, b.headers = m, E_3(h, b); };
                                                d.__uaPatched = !0, t = d;
                                            }
                                        }
                                        catch (E) { }
                                        return [2, typeof L == "function" ? L : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, gen: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(y, C) {
                                        return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    C = C || {};
                                                    O = C.headers || {};
                                                    O["User-Agent"] = I, C.headers = O;
                                                    return [4, t(y, C)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(y) { return y ? y.indexOf("http") === 0 ? y : y.indexOf("//") === 0 ? "https:" + y : N + (y.charAt(0) === "/" ? "" : "/") + y : ""; } function E(y, C) { return /([?&])page=\d+/i.test(y) ? y.replace(/([?&])page=\d+/i, "$1page=" + C) : y + (y.indexOf("?") !== -1 ? "&" : "?") + "page=" + C; } function d(y, C) { return y = (y || "").trim(), y ? (y.indexOf("http") !== 0 && (y = L(y)), E(y, C)) : ""; } function h(y) { var C = (y || "").match(/[?&]page=(\d+)/i); return C ? parseInt(C[1]) : 0; } function b(y, C) { var O = parseInt(C || 1), U = 0; return y.select(".pagination a").forEach(function (G) { var V = h(G.attr("href")); !V || V <= O || (!U || V < U) && (U = V); }), U ? String(U) : ""; } function m(y) { var C = [], O = y.select(".four").text().trim(), U = y.select(".five").text().trim(), G = y.select(".six").text().trim(); return O && C.push(O), U && C.push(U), G && C.push(G), C.join(" | "); } function k(y, C) {
                                        return __awaiter(this, void 0, void 0, function () { var O, U, G; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    C || (C = 1);
                                                    return [4, P(d(y, C))];
                                                case 1:
                                                    O = _a.sent();
                                                    if (!O || !O.ok)
                                                        return [2, null];
                                                    U = O.html(), G = [];
                                                    return [2, (U.select(".clearfix.rec_rullist > ul, .clearfix.rec_rboxone > div ul").forEach(function (V) { var j = V.select(".two a").attr("href"), eu = V.select(".two").first().text().trim(); !eu || !j || G.push({ name: eu, cover: "", link: L(j), description: m(V), host: N }); }), n.success(G, b(U, C)))];
                                            }
                                        }); });
                                    } var N, I, y_1, C; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (y) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                y_1 = t, C = function (O, U) { U = U || {}; var G = U.headers || {}; return G["User-Agent"] = I, U.headers = G, y_1(O, U); };
                                                C.__uaPatched = !0, t = C;
                                            }
                                        }
                                        catch (y) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, source: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(E, d) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    d = d || {};
                                                    h = d.headers || {};
                                                    h["User-Agent"] = I, d.headers = h;
                                                    return [4, t(E, d)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(E) {
                                        return __awaiter(this, void 0, void 0, function () { var d, h, b_1; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, P(N + E)];
                                                case 1:
                                                    d = _a.sent();
                                                    if (d.ok) {
                                                        h = d.html(), b_1 = [];
                                                        return [2, (h.select(".clearfix.rec_rboxone > div ul").forEach(function (m) { b_1.push({ name: m.select(".two").first().text(), cover: "", link: m.select(".two a").attr("href"), description: m.select(".sev").first().text() + " " + m.select(".five").first().text(), host: N }); }), n.success(b_1))];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var N, I, E_4, d; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (E) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                E_4 = t, d = function (h, b) { b = b || {}; var m = b.headers || {}; return m["User-Agent"] = I, b.headers = m, E_4(h, b); };
                                                d.__uaPatched = !0, t = d;
                                            }
                                        }
                                        catch (E) { }
                                        return [2, typeof L == "function" ? L : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, suggest: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, S, p, g, A, T, H, W, X) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function P(E, d) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    d = d || {};
                                                    h = d.headers || {};
                                                    h["User-Agent"] = I, d.headers = h;
                                                    return [4, t(E, d)];
                                                case 1: return [2, _a.sent()];
                                            }
                                        }); });
                                    } function L(E) {
                                        return __awaiter(this, void 0, void 0, function () { var d, h; return __generator(this, function (_a) {
                                            d = a.parse(E), h = [];
                                            return [2, (d.select(".itemr").forEach(function (b) { h.push({ name: b.select(".hottitle").text(), link: b.select("a.hottitle").attr("href"), cover: "", description: b.select(".multi-line").text(), host: N }); }), n.success(h))];
                                        }); });
                                    } var N, I, E_5, d; return __generator(this, function (_a) {
                                        N = "https://www.alicesw.com";
                                        try {
                                            CONFIG_URL && (N = CONFIG_URL);
                                        }
                                        catch (E) { }
                                        I = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
                                        try {
                                            if (typeof t == "function" && typeof t.__uaPatched == "undefined") {
                                                E_5 = t, d = function (h, b) { b = b || {}; var m = b.headers || {}; return m["User-Agent"] = I, b.headers = m, E_5(h, b); };
                                                d.__uaPatched = !0, t = d;
                                            }
                                        }
                                        catch (E) { }
                                        return [2, typeof L == "function" ? L : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function O0(u) { return new Te({ meta: cu, scripts: U0, host: u }); }
var da = require("@libs/fetch").fetchApi, _u = null;
try {
    _u = require("@libs/storage");
}
catch (u) {
    _u = null;
}
var At = {}, ve = _u && _u.storage ? _u.storage : { get: function (u) { return At[u]; }, set: function (u, e) { At[u] = e; }, delete: function (u) { delete At[u]; } }, Et = (function () {
    function class_2() {
        var _this = this;
        this.id = cu.lnId, this.name = cu.name, this.icon = cu.lnIcon, this.site = cu.source, this.version = cu.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = O0({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, da(e.url, t)];
                        case 1:
                            r = _b.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, i) { a[i] = n; });
                            }
                            catch (n) { }
                            _a = { status: r.status, url: r.url || e.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (e) { var t = ve.get("vb_" + e); return t == null ? null : String(t); }, storageSet: function (e, t) { t == null ? ve.delete && ve.delete("vb_" + e) : ve.set("vb_" + e, String(t)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, t)];
                case 1: return [2, (_a.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _a.sent();
                    return [2, { path: e, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : cu.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), ha = new Et;
