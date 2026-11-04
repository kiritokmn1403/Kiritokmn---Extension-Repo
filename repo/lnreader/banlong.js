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
var H0 = Object.create;
var Iu = Object.defineProperty, F0 = Object.defineProperties, V0 = Object.getOwnPropertyDescriptor, G0 = Object.getOwnPropertyDescriptors, j0 = Object.getOwnPropertyNames, kt = Object.getOwnPropertySymbols, z0 = Object.getPrototypeOf, qt = Object.prototype.hasOwnProperty, $0 = Object.prototype.propertyIsEnumerable;
var Ct = function (u, e, t) { return e in u ? Iu(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, Y = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        qt.call(e, t) && Ct(u, t, e[t]);
    if (kt)
        try {
            for (var _b = __values(kt(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                $0.call(e, t) && Ct(u, t, e[t]);
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
}, du = function (u, e) { return F0(u, G0(e)); };
var W0 = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, Ne = function (u, e) { for (var t in e)
    Iu(u, t, { get: e[t], enumerable: !0 }); }, Lt = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (n) {
            !qt.call(u, n) && n !== t && Iu(u, n, { get: function () { return e[n]; }, enumerable: !(r = V0(e, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(j0(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var n = _c.value;
                _loop_1(n);
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
var hu = function (u, e, t) { return (t = u != null ? H0(z0(u)) : {}, Lt(e || !u || !u.__esModule ? Iu(t, "default", { value: u, enumerable: !0 }) : t, u)); }, Q0 = function (u) { return Lt(Iu({}, "__esModule", { value: !0 }), u); };
var fu = W0(function (Za, a0) { a0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var yn = {};
Ne(yn, { default: function () { return xn; } });
module.exports = Q0(yn);
var Qu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var Zu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var ke, Z0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), yu = (ke = String.fromCodePoint) !== null && ke !== void 0 ? ke : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function Ce(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = Z0.get(u)) !== null && e !== void 0 ? e : u; }
var B;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(B || (B = {}));
var X0 = 32, su;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(su || (su = {}));
function qe(u) { return u >= B.ZERO && u <= B.NINE; }
function K0(u) { return u >= B.UPPER_A && u <= B.UPPER_F || u >= B.LOWER_A && u <= B.LOWER_F; }
function J0(u) { return u >= B.UPPER_A && u <= B.UPPER_Z || u >= B.LOWER_A && u <= B.LOWER_Z || qe(u); }
function Y0(u) { return u === B.EQUALS || J0(u); }
var R;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(R || (R = {}));
var W;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })(W || (W = {}));
var wu = (function () {
    function wu(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = R.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = W.Strict;
    }
    wu.prototype.startEntity = function (e) { this.decodeMode = e, this.state = R.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    wu.prototype.write = function (e, t) { switch (this.state) {
        case R.EntityStart: return e.charCodeAt(t) === B.NUM ? (this.state = R.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = R.NamedEntity, this.stateNamedEntity(e, t));
        case R.NumericStart: return this.stateNumericStart(e, t);
        case R.NumericDecimal: return this.stateNumericDecimal(e, t);
        case R.NumericHex: return this.stateNumericHex(e, t);
        case R.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    wu.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | X0) === B.LOWER_X ? (this.state = R.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = R.NumericDecimal, this.stateNumericDecimal(e, t)); };
    wu.prototype.addToNumericResult = function (e, t, r, n) { if (t !== r) {
        var a = r - t;
        this.result = this.result * Math.pow(n, a) + parseInt(e.substr(t, a), n), this.consumed += a;
    } };
    wu.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if (qe(n) || K0(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    wu.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if (qe(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    wu.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === B.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === W.Strict)
        return 0; return this.emitCodePoint(Ce(this.result), this.consumed), this.errors && (e !== B.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    wu.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, n = r[this.treeIndex], a = (n & su.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var i = e.charCodeAt(t);
        if (this.treeIndex = _0(r, n, this.treeIndex + Math.max(1, a), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === W.Attribute && (a === 0 || Y0(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], a = (n & su.VALUE_LENGTH) >> 14, a !== 0) {
            if (i === B.SEMI)
                return this.emitNamedEntityData(this.treeIndex, a, this.consumed + this.excess);
            this.decodeMode !== W.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    wu.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & su.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    wu.prototype.emitNamedEntityData = function (e, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[e] & ~su.VALUE_LENGTH : n[e + 1], r), t === 3 && this.emitCodePoint(n[e + 2], r), r; };
    wu.prototype.end = function () { var e; switch (this.state) {
        case R.NamedEntity: return this.result !== 0 && (this.decodeMode !== W.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case R.NumericDecimal: return this.emitNumericEntity(0, 2);
        case R.NumericHex: return this.emitNumericEntity(0, 3);
        case R.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case R.EntityStart: return 0;
    } };
    return wu;
}());
function Dt(u) { var e = "", t = new wu(u, function (r) { return e += yu(r); }); return function (n, a) { var i = 0, s = 0; for (; (s = n.indexOf("&", s)) >= 0;) {
    e += n.slice(i, s), t.startEntity(a);
    var l = t.write(n, s + 1);
    if (l < 0) {
        i = s + t.end();
        break;
    }
    i = s + l, s = l === 0 ? i + 1 : i;
} var o = e + n.slice(i); return e = "", o; }; }
function _0(u, e, t, r) { var n = (e & su.BRANCH_LENGTH) >> 7, a = e & su.JUMP_TABLE; if (n === 0)
    return a !== 0 && r === a ? t : -1; if (a) {
    var o = r - a;
    return o < 0 || o >= n ? -1 : u[t + o] - 1;
} var i = t, s = i + n - 1; for (; i <= s;) {
    var o = i + s >>> 1, l = u[o];
    if (l < r)
        i = o + 1;
    else if (l > r)
        s = o - 1;
    else
        return u[o + n];
} return -1; }
var Cn = Dt(Qu), qn = Dt(Zu);
var x;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(x || (x = {}));
var f;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(f || (f = {}));
function ru(u) { return u === x.Space || u === x.NewLine || u === x.Tab || u === x.FormFeed || u === x.CarriageReturn; }
function Xu(u) { return u === x.Slash || u === x.Gt || ru(u); }
function ur(u) { return u >= x.LowerA && u <= x.LowerZ || u >= x.UpperA && u <= x.UpperZ; }
var Z;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(Z || (Z = {}));
var F = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Su = (function () {
    function Su(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = f.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new wu(e ? Zu : Qu, function (n, a) { return _this.emitCodePoint(n, a); });
    }
    Su.prototype.reset = function () { this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = f.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Su.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Su.prototype.end = function () { this.running && this.finish(); };
    Su.prototype.pause = function () { this.running = !1; };
    Su.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Su.prototype.stateText = function (e) { e === x.Lt || !this.decodeEntities && this.fastForwardTo(x.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = f.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Su.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? Xu(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = f.InTagName, this.stateInTagName(e); };
    Su.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === x.Gt || ru(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === F.TitleEnd ? this.decodeEntities && e === x.Amp && this.startEntity() : this.fastForwardTo(x.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === x.Lt); };
    Su.prototype.stateCDATASequence = function (e) { e === F.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === F.Cdata.length && (this.state = f.InCommentLike, this.currentSequence = F.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = f.InDeclaration, this.stateInDeclaration(e)); };
    Su.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Su.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === F.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = f.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Su.prototype.isTagStartChar = function (e) { return this.xmlMode ? !Xu(e) : ur(e); };
    Su.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = f.SpecialStartSequence; };
    Su.prototype.stateBeforeTagName = function (e) { if (e === x.ExclamationMark)
        this.state = f.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === x.Questionmark)
        this.state = f.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = f.InTagName : t === F.ScriptEnd[2] ? this.state = f.BeforeSpecialS : t === F.TitleEnd[2] ? this.state = f.BeforeSpecialT : this.state = f.InTagName;
    }
    else
        e === x.Slash ? this.state = f.BeforeClosingTagName : (this.state = f.Text, this.stateText(e)); };
    Su.prototype.stateInTagName = function (e) { Xu(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Su.prototype.stateBeforeClosingTagName = function (e) { ru(e) || (e === x.Gt ? this.state = f.Text : (this.state = this.isTagStartChar(e) ? f.InClosingTagName : f.InSpecialComment, this.sectionStart = this.index)); };
    Su.prototype.stateInClosingTagName = function (e) { (e === x.Gt || ru(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Su.prototype.stateAfterClosingTagName = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.state = f.Text, this.sectionStart = this.index + 1); };
    Su.prototype.stateBeforeAttributeName = function (e) { e === x.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = f.InSpecialTag, this.sequenceIndex = 0) : this.state = f.Text, this.sectionStart = this.index + 1) : e === x.Slash ? this.state = f.InSelfClosingTag : ru(e) || (this.state = f.InAttributeName, this.sectionStart = this.index); };
    Su.prototype.stateInSelfClosingTag = function (e) { e === x.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = f.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ru(e) || (this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Su.prototype.stateInAttributeName = function (e) { (e === x.Eq || Xu(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = f.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Su.prototype.stateAfterAttributeName = function (e) { e === x.Eq ? this.state = f.BeforeAttributeValue : e === x.Slash || e === x.Gt ? (this.cbs.onattribend(Z.NoValue, this.sectionStart), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : ru(e) || (this.cbs.onattribend(Z.NoValue, this.sectionStart), this.state = f.InAttributeName, this.sectionStart = this.index); };
    Su.prototype.stateBeforeAttributeValue = function (e) { e === x.DoubleQuote ? (this.state = f.InAttributeValueDq, this.sectionStart = this.index + 1) : e === x.SingleQuote ? (this.state = f.InAttributeValueSq, this.sectionStart = this.index + 1) : ru(e) || (this.sectionStart = this.index, this.state = f.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Su.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === x.DoubleQuote ? Z.Double : Z.Single, this.index + 1), this.state = f.BeforeAttributeName) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Su.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, x.DoubleQuote); };
    Su.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, x.SingleQuote); };
    Su.prototype.stateInAttributeValueNoQuotes = function (e) { ru(e) || e === x.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Z.Unquoted, this.index), this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === x.Amp && this.startEntity(); };
    Su.prototype.stateBeforeDeclaration = function (e) { e === x.OpeningSquareBracket ? (this.state = f.CDATASequence, this.sequenceIndex = 0) : this.state = e === x.Dash ? f.BeforeComment : f.InDeclaration; };
    Su.prototype.stateInDeclaration = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Su.prototype.stateInProcessingInstruction = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Su.prototype.stateBeforeComment = function (e) { e === x.Dash ? (this.state = f.InCommentLike, this.currentSequence = F.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = f.InDeclaration; };
    Su.prototype.stateInSpecialComment = function (e) { (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = f.Text, this.sectionStart = this.index + 1); };
    Su.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === F.ScriptEnd[3] ? this.startSpecial(F.ScriptEnd, 4) : t === F.StyleEnd[3] ? this.startSpecial(F.StyleEnd, 4) : (this.state = f.InTagName, this.stateInTagName(e)); };
    Su.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === F.TitleEnd[3] ? this.startSpecial(F.TitleEnd, 4) : t === F.TextareaEnd[3] ? this.startSpecial(F.TextareaEnd, 4) : (this.state = f.InTagName, this.stateInTagName(e)); };
    Su.prototype.startEntity = function () { this.baseState = this.state, this.state = f.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? W.Strict : this.baseState === f.Text || this.baseState === f.InSpecialTag ? W.Legacy : W.Attribute); };
    Su.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Su.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === f.Text || this.state === f.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === f.InAttributeValueDq || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Su.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Su.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case f.Text: {
                this.stateText(e);
                break;
            }
            case f.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case f.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case f.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case f.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case f.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case f.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case f.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case f.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case f.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case f.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case f.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case f.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case f.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case f.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case f.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case f.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case f.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case f.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case f.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case f.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case f.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case f.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case f.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case f.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case f.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Su.prototype.finish = function () { this.state === f.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Su.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === f.InCommentLike ? this.currentSequence === F.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === f.InTagName || this.state === f.BeforeAttributeName || this.state === f.BeforeAttributeValue || this.state === f.AfterAttributeName || this.state === f.InAttributeName || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueDq || this.state === f.InAttributeValueNq || this.state === f.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Su.prototype.emitCodePoint = function (e, t) { this.baseState !== f.Text && this.baseState !== f.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Su;
}());
var Au = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), N = new Set(["p"]), It = new Set(["thead", "tbody"]), Ut = new Set(["dd", "dt"]), Mt = new Set(["rt", "rp"]), er = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", N], ["h1", N], ["h2", N], ["h3", N], ["h4", N], ["h5", N], ["h6", N], ["select", Au], ["input", Au], ["output", Au], ["button", Au], ["datalist", Au], ["textarea", Au], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Ut], ["dt", Ut], ["address", N], ["article", N], ["aside", N], ["blockquote", N], ["details", N], ["div", N], ["dl", N], ["fieldset", N], ["figcaption", N], ["figure", N], ["footer", N], ["form", N], ["header", N], ["hr", N], ["main", N], ["nav", N], ["ol", N], ["pre", N], ["section", N], ["table", N], ["ul", N], ["rt", Mt], ["rp", Mt], ["tbody", It], ["tfoot", It]]), tr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Ot = new Set(["math", "svg"]), Rt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), rr = /\s|\//, Uu = (function () {
    function Uu(e, t) {
        if (t === void 0) { t = {}; }
        var r, n, a, i, s, o;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (a = t.recognizeSelfClosing) !== null && a !== void 0 ? a : !this.htmlMode, this.tokenizer = new ((i = t.Tokenizer) !== null && i !== void 0 ? i : Su)(this.options, this), this.foreignContext = [!this.htmlMode], (o = (s = this.cbs).onparserinit) === null || o === void 0 || o.call(s, this);
    }
    Uu.prototype.ontext = function (e, t) { var r, n; var a = this.getSlice(e, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, a), this.startIndex = t; };
    Uu.prototype.ontextentity = function (e, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, yu(e)), this.startIndex = t; };
    Uu.prototype.isVoidElement = function (e) { return this.htmlMode && tr.has(e); };
    Uu.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Uu.prototype.emitOpenTag = function (e) { var t, r, n, a; this.openTagStart = this.startIndex, this.tagname = e; var i = this.htmlMode && er.get(e); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Ot.has(e) ? this.foreignContext.unshift(!0) : Rt.has(e) && this.foreignContext.unshift(!1))), (a = (n = this.cbs).onopentagname) === null || a === void 0 || a.call(n, e), this.cbs.onopentag && (this.attribs = {}); };
    Uu.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Uu.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Uu.prototype.onclosetag = function (e, t) { var r, n, a, i, s, o, l, d; this.endIndex = t; var y = this.getSlice(e, t); if (this.lowerCaseTagNames && (y = y.toLowerCase()), this.htmlMode && (Ot.has(y) || Rt.has(y)) && this.foreignContext.shift(), this.isVoidElement(y))
        this.htmlMode && y === "br" && ((i = (a = this.cbs).onopentagname) === null || i === void 0 || i.call(a, "br"), (o = (s = this.cbs).onopentag) === null || o === void 0 || o.call(s, "br", {}, !0), (d = (l = this.cbs).onclosetag) === null || d === void 0 || d.call(l, "br", !1));
    else {
        var b = this.stack.indexOf(y);
        if (b !== -1)
            for (var p = 0; p <= b; p++) {
                var w = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, w, p !== b);
            }
        else
            this.htmlMode && y === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Uu.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Uu.prototype.closeCurrentTag = function (e) { var t, r; var n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !e), this.stack.shift()); };
    Uu.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Uu.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    Uu.prototype.onattribentity = function (e) { this.attribvalue += yu(e); };
    Uu.prototype.onattribend = function (e, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, e === Z.Double ? '"' : e === Z.Single ? "'" : e === Z.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Uu.prototype.getInstructionName = function (e) { var t = e.search(rr), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Uu.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    Uu.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    Uu.prototype.oncomment = function (e, t, r) { var n, a, i, s; this.endIndex = t, (a = (n = this.cbs).oncomment) === null || a === void 0 || a.call(n, this.getSlice(e, t - r)), (s = (i = this.cbs).oncommentend) === null || s === void 0 || s.call(i), this.startIndex = t + 1; };
    Uu.prototype.oncdata = function (e, t, r) { var n, a, i, s, o, l, d, y, b, p; this.endIndex = t; var w = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((a = (n = this.cbs).oncdatastart) === null || a === void 0 || a.call(n), (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, w), (l = (o = this.cbs).oncdataend) === null || l === void 0 || l.call(o)) : ((y = (d = this.cbs).oncomment) === null || y === void 0 || y.call(d, "[CDATA[".concat(w, "]]")), (p = (b = this.cbs).oncommentend) === null || p === void 0 || p.call(b)), this.startIndex = t + 1; };
    Uu.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    Uu.prototype.reset = function () { var e, t, r, n; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Uu.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Uu.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Uu.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Uu.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Uu.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Uu.prototype.pause = function () { this.tokenizer.pause(); };
    Uu.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Uu.prototype.parseChunk = function (e) { this.write(e); };
    Uu.prototype.done = function (e) { this.end(e); };
    return Uu;
}());
var Ku = {};
Ne(Ku, { CDATA: function () { return Pe; }, Comment: function () { return Me; }, Directive: function () { return Ue; }, Doctype: function () { return He; }, ElementType: function () { return E; }, Root: function () { return De; }, Script: function () { return Oe; }, Style: function () { return Re; }, Tag: function () { return Be; }, Text: function () { return Ie; }, isTag: function () { return Le; } });
var E;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(E || (E = {}));
function Le(u) { return u.type === E.Tag || u.type === E.Script || u.type === E.Style; }
var De = E.Root, Ie = E.Text, Ue = E.Directive, Me = E.Comment, Oe = E.Script, Re = E.Style, Be = E.Tag, Pe = E.CDATA, He = E.Doctype;
var Ju = (function () {
    function Ju() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(Ju.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ju.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ju.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    Ju.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Bt(this, e);
    };
    return Ju;
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
}(Ju)), Eu = (function (_super) {
    __extends(Eu, _super);
    function Eu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = E.Text;
        return _this;
    }
    Object.defineProperty(Eu.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Eu;
}(Mu)), Ou = (function (_super) {
    __extends(Ou, _super);
    function Ou() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = E.Comment;
        return _this;
    }
    Object.defineProperty(Ou.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Ou;
}(Mu)), Ru = (function (_super) {
    __extends(Ru, _super);
    function Ru(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = E.Directive;
        return _this;
    }
    Object.defineProperty(Ru.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ru;
}(Mu)), Bu = (function (_super) {
    __extends(Bu, _super);
    function Bu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Bu.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Bu;
}(Ju)), Pu = (function (_super) {
    __extends(Pu, _super);
    function Pu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = E.CDATA;
        return _this;
    }
    Object.defineProperty(Pu.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Pu;
}(Bu)), Tu = (function (_super) {
    __extends(Tu, _super);
    function Tu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = E.Root;
        return _this;
    }
    Object.defineProperty(Tu.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Tu;
}(Bu)), Hu = (function (_super) {
    __extends(Hu, _super);
    function Hu(e, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = e === "script" ? E.Script : e === "style" ? E.Style : E.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(Hu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Hu;
}(Bu));
function T(u) { return Le(u); }
function vu(u) { return u.type === E.CDATA; }
function uu(u) { return u.type === E.Text; }
function Fu(u) { return u.type === E.Comment; }
function nr(u) { return u.type === E.Directive; }
function Ve(u) { return u.type === E.Root; }
function G(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function Bt(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (uu(u))
        t = new Eu(u.data);
    else if (Fu(u))
        t = new Ou(u.data);
    else if (T(u)) {
        var r = e ? Fe(u.children) : [], n_1 = new Hu(u.name, Y({}, u.attribs), r);
        r.forEach(function (a) { return a.parent = n_1; }), u.namespace != null && (n_1.namespace = u.namespace), u["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = Y({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = Y({}, u["x-attribsPrefix"])), t = n_1;
    }
    else if (vu(u)) {
        var r = e ? Fe(u.children) : [], n_2 = new Pu(r);
        r.forEach(function (a) { return a.parent = n_2; }), t = n_2;
    }
    else if (Ve(u)) {
        var r = e ? Fe(u.children) : [], n_3 = new Tu(r);
        r.forEach(function (a) { return a.parent = n_3; }), u["x-mode"] && (n_3["x-mode"] = u["x-mode"]), t = n_3;
    }
    else if (nr(u)) {
        var r = new Ru(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function Fe(u) { var e = u.map(function (t) { return Bt(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var Pt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Nu = (function () {
    function Nu(e, t, r) {
        this.dom = [], this.root = new Tu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Pt), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : Pt, this.elementCB = r != null ? r : null;
    }
    Nu.prototype.onparserinit = function (e) { this.parser = e; };
    Nu.prototype.onreset = function () { this.dom = [], this.root = new Tu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Nu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Nu.prototype.onerror = function (e) { this.handleCallback(e); };
    Nu.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Nu.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? E.Tag : void 0, n = new Hu(e, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    Nu.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === E.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Eu(e);
        this.addNode(r), this.lastNode = r;
    } };
    Nu.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === E.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new Ou(e); this.addNode(t), this.lastNode = t; };
    Nu.prototype.oncommentend = function () { this.lastNode = null; };
    Nu.prototype.oncdatastart = function () { var e = new Eu(""), t = new Pu([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    Nu.prototype.oncdataend = function () { this.lastNode = null; };
    Nu.prototype.onprocessinginstruction = function (e, t) { var r = new Ru(e, t); this.addNode(r); };
    Nu.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Nu.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return Nu;
}());
var eu = {};
Ne(eu, { DocumentPosition: function () { return X; }, append: function () { return Tr; }, appendChild: function () { return Er; }, compareDocumentPosition: function () { return _t; }, existsOne: function () { return Jt; }, filter: function () { return Cu; }, find: function () { return ne; }, findAll: function () { return kr; }, findOne: function () { return ae; }, findOneChild: function () { return Nr; }, getAttributeValue: function () { return yr; }, getChildren: function () { return te; }, getElementById: function () { return Dr; }, getElements: function () { return Lr; }, getElementsByClassName: function () { return Ir; }, getElementsByTagName: function () { return bu; }, getElementsByTagType: function () { return Ur; }, getFeed: function () { return _e; }, getInnerHTML: function () { return xr; }, getName: function () { return Sr; }, getOuterHTML: function () { return Xt; }, getParent: function () { return Kt; }, getSiblings: function () { return re; }, getText: function () { return ee; }, hasAttrib: function () { return wr; }, hasChildren: function () { return G; }, innerText: function () { return Qe; }, isCDATA: function () { return vu; }, isComment: function () { return Fu; }, isDocument: function () { return Ve; }, isTag: function () { return T; }, isText: function () { return uu; }, nextElementSibling: function () { return Ze; }, prepend: function () { return Ke; }, prependChild: function () { return vr; }, prevElementSibling: function () { return Xe; }, removeElement: function () { return nu; }, removeSubsets: function () { return Mr; }, replaceElement: function () { return Ar; }, testElement: function () { return qr; }, textContent: function () { return cu; }, uniqueSort: function () { return Ye; } });
function Yu(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var ar = new Map(Yu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Yu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Yu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Yu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Ge = /["&'<>$\x80-\uFFFF]/g, Ht = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Ft = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function Vu(u) { var e = "", t = 0, r; for (; (r = Ge.exec(u)) !== null;) {
    var n = r.index, a = u.charCodeAt(n), i = Ht.get(a);
    i !== void 0 ? (e += u.substring(t, n) + i, t = n + 1) : (e += "".concat(u.substring(t, n), "&#x").concat(Ft(u, n).toString(16), ";"), t = Ge.lastIndex += +((a & 64512) === 55296));
} return e + u.substr(t); }
function je(u, e) { return function (r) { var n, a = 0, i = ""; for (; n = u.exec(r);)
    a !== n.index && (i += r.substring(a, n.index)), i += e.get(n[0].charCodeAt(0)), a = n.index + 1; return i + r.substring(a); }; }
var Vt = je(/[&<>'"]/g, Ht), _u = je(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), ue = je(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Gt;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(Gt || (Gt = {}));
var jt;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(jt || (jt = {}));
var Wt = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), Qt = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var sr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function cr(u) { return u.replace(/"/g, "&quot;"); }
function or(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? cr : e.xmlMode || e.encodeEntities !== "utf8" ? Vu : _u; return Object.keys(u).map(function (n) { var a, i; var s = (a = u[n]) !== null && a !== void 0 ? a : ""; return e.xmlMode === "foreign" && (n = (i = Qt.get(n)) !== null && i !== void 0 ? i : n), !e.emptyAttrs && !e.xmlMode && s === "" ? n : "".concat(n, "=\"").concat(r(s), "\""); }).join(" "); }
var Zt = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function We(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var n = 0; n < t.length; n++)
        r += lr(t[n], e);
    return r;
}
var ku = We;
function lr(u, e) { switch (u.type) {
    case De: return We(u.children, e);
    case He:
    case Ue: return br(u);
    case Me: return mr(u);
    case Pe: return gr(u);
    case Oe:
    case Re:
    case Be: return hr(u, e);
    case Ie: return pr(u, e);
} }
var fr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), dr = new Set(["svg", "math"]);
function hr(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = Wt.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && fr.has(u.parent.name) && (e = du(Y({}, e), { xmlMode: !1 }))), !e.xmlMode && dr.has(u.name) && (e = du(Y({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), n = or(u.attribs, e); return n && (r += " ".concat(n)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Zt.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += We(u.children, e)), (e.xmlMode || !Zt.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function br(u) { return "<".concat(u.data, ">"); }
function pr(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && sr.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? Vu(r) : ue(r)), r; }
function gr(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function mr(u) { return "<!--".concat(u.data, "-->"); }
function Xt(u, e) { return ku(u, e); }
function xr(u, e) { return G(u) ? u.children.map(function (t) { return Xt(t, e); }).join("") : ""; }
function ee(u) {
    return Array.isArray(u) ? u.map(ee).join("") : T(u) ? u.name === "br" ? "\n" : ee(u.children) : vu(u) ? ee(u.children) : uu(u) ? u.data : "";
}
function cu(u) { return Array.isArray(u) ? u.map(cu).join("") : G(u) && !Fu(u) ? cu(u.children) : uu(u) ? u.data : ""; }
function Qe(u) { return Array.isArray(u) ? u.map(Qe).join("") : G(u) && (u.type === E.Tag || vu(u)) ? Qe(u.children) : uu(u) ? u.data : ""; }
function te(u) { return G(u) ? u.children : []; }
function Kt(u) { return u.parent || null; }
function re(u) {
    var _a, _b;
    var e = Kt(u);
    if (e != null)
        return te(e);
    var t = [u], r = u.prev, n = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function yr(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function wr(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function Sr(u) { return u.name; }
function Ze(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !T(e);)
        (_a = e, e = _a.next);
    return e;
}
function Xe(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !T(e);)
        (_a = e, e = _a.prev);
    return e;
}
function nu(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function Ar(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var n = e.parent = u.parent; if (n) {
    var a = n.children;
    a[a.lastIndexOf(u)] = e, u.parent = null;
} }
function Er(u, e) { if (nu(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function Tr(u, e) { nu(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function vr(u, e) { if (nu(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function Ke(u, e) { nu(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function Cu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return ne(u, Array.isArray(e) ? e : [e], t, r);
}
function ne(u, e, t, r) { var n = [], a = [Array.isArray(e) ? e : [e]], i = [0]; for (;;) {
    if (i[0] >= a[0].length) {
        if (i.length === 1)
            return n;
        a.shift(), i.shift();
        continue;
    }
    var s = a[0][i[0]++];
    if (u(s) && (n.push(s), --r <= 0))
        return n;
    t && G(s) && s.children.length > 0 && (i.unshift(0), a.unshift(s.children));
} }
function Nr(u, e) { return e.find(u); }
function ae(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var n = 0; n < r.length; n++) {
        var a = r[n];
        if (T(a) && u(a))
            return a;
        if (t && G(a) && a.children.length > 0) {
            var i = ae(u, a.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function Jt(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return T(t) && u(t) || G(t) && Jt(u, t.children); }); }
function kr(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var a = r[0][n[0]++];
    T(a) && u(a) && t.push(a), G(a) && a.children.length > 0 && (n.unshift(0), r.unshift(a.children));
} }
var ie = { tag_name: function (u) { return typeof u == "function" ? function (e) { return T(e) && u(e.name); } : u === "*" ? T : function (e) { return T(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return uu(e) && u(e.data); } : function (e) { return uu(e) && e.data === u; }; } };
function Je(u, e) { return typeof e == "function" ? function (t) { return T(t) && e(t.attribs[u]); } : function (t) { return T(t) && t.attribs[u] === e; }; }
function Cr(u, e) { return function (t) { return u(t) || e(t); }; }
function Yt(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(ie, t) ? ie[t](r) : Je(t, r); }); return e.length === 0 ? null : e.reduce(Cr); }
function qr(u, e) { var t = Yt(u); return t ? t(e) : !0; }
function Lr(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = Yt(u);
    return n ? Cu(n, e, t, r) : [];
}
function Dr(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), ae(Je("id", u), e, t);
}
function bu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Cu(ie.tag_name(u), e, t, r);
}
function Ir(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Cu(Je("class", u), e, t, r);
}
function Ur(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Cu(ie.tag_type(u), e, t, r);
}
function Mr(u) { var e = u.length; for (; --e >= 0;) {
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
var X;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(X || (X = {}));
function _t(u, e) { var t = [], r = []; if (u === e)
    return 0; var n = G(u) ? u : u.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = G(e) ? e : e.parent; n;)
    r.unshift(n), n = n.parent; var a = Math.min(t.length, r.length), i = 0; for (; i < a && t[i] === r[i];)
    i++; if (i === 0)
    return X.DISCONNECTED; var s = t[i - 1], o = s.children, l = t[i], d = r[i]; return o.indexOf(l) > o.indexOf(d) ? s === e ? X.FOLLOWING | X.CONTAINED_BY : X.FOLLOWING : s === u ? X.PRECEDING | X.CONTAINS : X.PRECEDING; }
function Ye(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = _t(e, t); return r & X.PRECEDING ? -1 : r & X.FOLLOWING ? 1 : 0; }), u; }
function _e(u) { var e = se(Hr, u); return e ? e.name === "feed" ? Or(e) : Rr(e) : null; }
function Or(u) { var e; var t = u.children, r = { type: "atom", items: bu("entry", t).map(function (i) { var s; var o = i.children, l = { media: u0(o) }; z(l, "id", "id", o), z(l, "title", "title", o); var d = (s = se("link", o)) === null || s === void 0 ? void 0 : s.attribs.href; d && (l.link = d); var y = ou("summary", o) || ou("content", o); y && (l.description = y); var b = ou("updated", o); return b && (l.pubDate = new Date(b)), l; }) }; z(r, "id", "id", t), z(r, "title", "title", t); var n = (e = se("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; n && (r.link = n), z(r, "description", "subtitle", t); var a = ou("updated", t); return a && (r.updated = new Date(a)), z(r, "author", "email", t, !0), r; }
function Rr(u) { var e, t; var r = (t = (e = se("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], n = { type: u.name.substr(0, 3), id: "", items: bu("item", u.children).map(function (i) { var s = i.children, o = { media: u0(s) }; z(o, "id", "guid", s), z(o, "title", "title", s), z(o, "link", "link", s), z(o, "description", "description", s); var l = ou("pubDate", s) || ou("dc:date", s); return l && (o.pubDate = new Date(l)), o; }) }; z(n, "title", "title", r), z(n, "link", "link", r), z(n, "description", "description", r); var a = ou("lastBuildDate", r); return a && (n.updated = new Date(a)), z(n, "author", "managingEditor", r, !0), n; }
var Br = ["url", "type", "lang"], Pr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function u0(u) { return bu("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Br_1 = __values(Br), Br_1_1 = Br_1.next(); !Br_1_1.done; Br_1_1 = Br_1.next()) {
            var n = Br_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Br_1_1 && !Br_1_1.done && (_a = Br_1.return)) _a.call(Br_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Pr_1 = __values(Pr), Pr_1_1 = Pr_1.next(); !Pr_1_1.done; Pr_1_1 = Pr_1.next()) {
            var n = Pr_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Pr_1_1 && !Pr_1_1.done && (_b = Pr_1.return)) _b.call(Pr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function se(u, e) { return bu(u, e, !0, 1)[0]; }
function ou(u, e, t) {
    if (t === void 0) { t = !1; }
    return cu(bu(u, e, t, 1)).trim();
}
function z(u, e, t, r, n) {
    if (n === void 0) { n = !1; }
    var a = ou(t, r, n);
    a && (u[e] = a);
}
function Hr(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function e0(u, e) { var t = new Nu(void 0, e); return new Uu(t, e).end(u), t.root; }
var m;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(m || (m = {}));
var I;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(I || (I = {}));
var t0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Fr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Vr = new Map([[126, I.Element], [94, I.Start], [36, I.End], [42, I.Any], [33, I.Not], [124, I.Hyphen]]), Gr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function pu(u) { switch (u.type) {
    case m.Adjacent:
    case m.Child:
    case m.Descendant:
    case m.Parent:
    case m.Sibling:
    case m.ColumnCombinator: return !0;
    default: return !1;
} }
var jr = new Set(["contains", "icontains"]);
function zr(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Gu(u) { return u.replace(Fr, zr); }
function ut(u) { return u === 39 || u === 34; }
function r0(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function lu(u) { var e = [], t = n0(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function n0(u, e, t) { var r = []; function n(b) { var p = e.slice(t + b).match(t0); if (!p)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(p, 1), w = _a[0]; return t += b + w.length, Gu(w); } function a(b) { for (t += b; t < e.length && r0(e.charCodeAt(t));)
    t++; } function i() { t += 1; var b = t, p = 1; for (; p > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !s(t) ? p++ : e.charCodeAt(t) === 41 && !s(t) && p--; if (p)
    throw new Error("Parenthesis not matched"); return Gu(e.slice(b, t - 1)); } function s(b) { var p = 0; for (; e.charCodeAt(--b) === 92;)
    p++; return (p & 1) === 1; } function o() { if (r.length > 0 && pu(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function l(b) { if (r.length > 0 && r[r.length - 1].type === m.Descendant) {
    r[r.length - 1].type = b;
    return;
} o(), r.push({ type: b }); } function d(b, p) { r.push({ type: m.Attribute, name: b, action: p, value: n(1), namespace: null, ignoreCase: "quirks" }); } function y() { if (r.length && r[r.length - 1].type === m.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (a(0), e.length === t)
    return t; u: for (; t < e.length;) {
    var b = e.charCodeAt(t);
    switch (b) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== m.Descendant) && (o(), r.push({ type: m.Descendant })), a(1);
            break;
        }
        case 62: {
            l(m.Child), a(1);
            break;
        }
        case 60: {
            l(m.Parent), a(1);
            break;
        }
        case 126: {
            l(m.Sibling), a(1);
            break;
        }
        case 43: {
            l(m.Adjacent), a(1);
            break;
        }
        case 46: {
            d("class", I.Element);
            break;
        }
        case 35: {
            d("id", I.Equals);
            break;
        }
        case 91: {
            a(1);
            var p = void 0, w = null;
            e.charCodeAt(t) === 124 ? p = n(1) : e.startsWith("*|", t) ? (w = "*", p = n(2)) : (p = n(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (w = p, p = n(1))), a(0);
            var S = I.Exists, P = Vr.get(e.charCodeAt(t));
            if (P) {
                if (S = P, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                a(2);
            }
            else
                e.charCodeAt(t) === 61 && (S = I.Equals, a(1));
            var V = "", Q = null;
            if (S !== "exists") {
                if (ut(e.charCodeAt(t))) {
                    var H = e.charCodeAt(t), U = t + 1;
                    for (; U < e.length && (e.charCodeAt(U) !== H || s(U));)
                        U += 1;
                    if (e.charCodeAt(U) !== H)
                        throw new Error("Attribute value didn't end");
                    V = Gu(e.slice(t + 1, U)), t = U + 1;
                }
                else {
                    var H = t;
                    for (; t < e.length && (!r0(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    V = Gu(e.slice(H, t));
                }
                a(0);
                var g = e.charCodeAt(t) | 32;
                g === 115 ? (Q = !1, a(1)) : g === 105 && (Q = !0, a(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var v = { type: m.Attribute, name: p, action: S, value: V, namespace: w, ignoreCase: Q };
            r.push(v);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: m.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? i() : null });
                continue;
            }
            var p = n(1).toLowerCase(), w = null;
            if (e.charCodeAt(t) === 40)
                if (Gr.has(p)) {
                    if (ut(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(p, " cannot be quoted"));
                    if (w = [], t = n0(w, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(p, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (w = i(), jr.has(p)) {
                        var S = w.charCodeAt(0);
                        S === w.charCodeAt(w.length - 1) && ut(S) && (w = w.slice(1, -1));
                    }
                    w = Gu(w);
                }
            r.push({ type: m.Pseudo, name: p, data: w });
            break;
        }
        case 44: {
            y(), r = [], a(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var S = e.indexOf("*/", t + 2);
                if (S < 0)
                    throw new Error("Comment was not terminated");
                t = S + 2, r.length === 0 && a(0);
                break;
            }
            var p = null, w = void 0;
            if (b === 42)
                t += 1, w = "*";
            else if (b === 124) {
                if (w = "", e.charCodeAt(t + 1) === 124) {
                    l(m.ColumnCombinator), a(2);
                    break;
                }
            }
            else if (t0.test(e.slice(t)))
                w = n(0);
            else
                break u;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (p = w, e.charCodeAt(t + 1) === 42 ? (w = "*", t += 2) : w = n(1)), r.push(w === "*" ? { type: m.Universal, namespace: p } : { type: m.Tag, name: w, namespace: p });
        }
    }
} return y(), t; }
var ft = hu(fu(), 1);
var au = hu(fu(), 1);
var i0 = new Map([[m.Universal, 50], [m.Tag, 30], [m.Attribute, 1], [m.Pseudo, 0]]);
function ju(u) { return !i0.has(u.type); }
var $r = new Map([[I.Exists, 10], [I.Equals, 8], [I.Not, 7], [I.Start, 6], [I.End, 6], [I.Any, 5]]);
function et(u) { var e = u.map(s0); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < e[n]; n--) {
            var a = u[n + 1];
            u[n + 1] = u[n], u[n] = a, e[n + 1] = e[n], e[n] = r;
        }
} }
function s0(u) { var e, t; var r = (e = i0.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === m.Attribute ? (r = (t = $r.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === I.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === m.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(s0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var zu = hu(fu(), 1), Wr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function c0(u) { return u.replace(Wr, "\\$&"); }
var Qr = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function gu(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Qr.has(u.name); }
var o0 = { equals: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value; return gu(e, t) ? (a = a.toLowerCase(), function (i) { var s = r.getAttributeValue(i, n); return s != null && s.length === a.length && s.toLowerCase() === a && u(i); }) : function (i) { return r.getAttributeValue(i, n) === a && u(i); }; }, hyphen: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value, i = a.length; return gu(e, t) ? (a = a.toLowerCase(), function (o) { var l = r.getAttributeValue(o, n); return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i).toLowerCase() === a && u(o); }) : function (o) { var l = r.getAttributeValue(o, n); return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i) === a && u(o); }; }, element: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value; if (/\s/.test(a))
        return zu.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(c0(a), "(?:$|\\s)"), gu(e, t) ? "i" : ""); return function (o) { var l = r.getAttributeValue(o, n); return l != null && l.length >= a.length && i.test(l) && u(o); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value, i = a.length; return i === 0 ? zu.default.falseFunc : gu(e, t) ? (a = a.toLowerCase(), function (s) { var o = r.getAttributeValue(s, n); return o != null && o.length >= i && o.substr(0, i).toLowerCase() === a && u(s); }) : function (s) { var o; return !!(!((o = r.getAttributeValue(s, n)) === null || o === void 0) && o.startsWith(a)) && u(s); }; }, end: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value, i = -a.length; return i === 0 ? zu.default.falseFunc : gu(e, t) ? (a = a.toLowerCase(), function (s) { var o; return ((o = r.getAttributeValue(s, n)) === null || o === void 0 ? void 0 : o.substr(i).toLowerCase()) === a && u(s); }) : function (s) { var o; return !!(!((o = r.getAttributeValue(s, n)) === null || o === void 0) && o.endsWith(a)) && u(s); }; }, any: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value; if (a === "")
        return zu.default.falseFunc; if (gu(e, t)) {
        var i_1 = new RegExp(c0(a), "i");
        return function (o) { var l = r.getAttributeValue(o, n); return l != null && l.length >= a.length && i_1.test(l) && u(o); };
    } return function (i) { var s; return !!(!((s = r.getAttributeValue(i, n)) === null || s === void 0) && s.includes(a)) && u(i); }; }, not: function (u, e, t) { var r = t.adapter, n = e.name, a = e.value; return a === "" ? function (i) { return !!r.getAttributeValue(i, n) && u(i); } : gu(e, t) ? (a = a.toLowerCase(), function (i) { var s = r.getAttributeValue(i, n); return (s == null || s.length !== a.length || s.toLowerCase() !== a) && u(i); }) : function (i) { return r.getAttributeValue(i, n) !== a && u(i); }; } };
var Zr = new Set([9, 10, 12, 13, 32]), l0 = 48, Xr = 57;
function f0(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = a(), n = i(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (n != null ? n : 1), s(), e < u.length ? (r = a(), s(), n = i()) : r = n = 0), n === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * n]; function a() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function i() { var o = e, l = 0; for (; e < u.length && u.charCodeAt(e) >= l0 && u.charCodeAt(e) <= Xr;)
    l = l * 10 + (u.charCodeAt(e) - l0), e++; return e === o ? null : l; } function s() { for (; e < u.length && Zr.has(u.charCodeAt(e));)
    e++; } }
var tt = hu(fu(), 1);
function d0(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return tt.default.falseFunc; if (e === -1)
    return function (a) { return a <= t; }; if (e === 0)
    return function (a) { return a === t; }; if (e === 1)
    return t < 0 ? tt.default.trueFunc : function (a) { return a >= t; }; var r = Math.abs(e), n = (t % r + r) % r; return e > 1 ? function (a) { return a >= t && a % r === n; } : function (a) { return a <= t && a % r === n; }; }
function qu(u) { return d0(f0(u)); }
var $ = hu(fu(), 1);
function ce(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var Lu = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (n) { return u(n) && t.getText(n).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (a) { return u(a) && t.getText(a).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = qu(e);
        return n === $.default.falseFunc ? $.default.falseFunc : n === $.default.trueFunc ? ce(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = 0; l < s.length && !r(i, s[l]); l++)
            t.isTag(s[l]) && o++; return n(o) && u(i); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = qu(e);
        return n === $.default.falseFunc ? $.default.falseFunc : n === $.default.trueFunc ? ce(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = s.length - 1; l >= 0 && !r(i, s[l]); l--)
            t.isTag(s[l]) && o++; return n(o) && u(i); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = qu(e);
        return n === $.default.falseFunc ? $.default.falseFunc : n === $.default.trueFunc ? ce(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = 0; l < s.length; l++) {
            var d = s[l];
            if (r(i, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(i) && o++;
        } return n(o) && u(i); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = qu(e);
        return n === $.default.falseFunc ? $.default.falseFunc : n === $.default.trueFunc ? ce(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = s.length - 1; l >= 0; l--) {
            var d = s[l];
            if (r(i, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(i) && o++;
        } return n(o) && u(i); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && u(r); };
    }, scope: function (u, e, t, r) { var n = t.equals; return !r || r.length === 0 ? Lu.root(u, e, t) : r.length === 1 ? function (a) { return n(r[0], a) && u(a); } : function (a) { return r.includes(a) && u(a); }; }, hover: rt("isHovered"), visited: rt("isVisited"), active: rt("isActive") };
function rt(u) { return function (t, r, _a) {
    var n = _a.adapter;
    var a = n[u];
    return typeof a != "function" ? $.default.falseFunc : function (s) { return a(s) && t(s); };
}; }
var $u = { empty: function (u, _a) {
        var e = _a.adapter;
        return !e.getChildren(u).some(function (t) { return e.isTag(t) || e.getText(t) !== ""; });
    }, "first-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(u) == null;
        var r = e.getSiblings(u).find(function (n) { return e.isTag(n); });
        return r != null && t(u, r);
    }, "last-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(u, r[n]))
                return !0;
            if (e.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var a = 0; a < r.length; a++) {
            var i = r[a];
            if (t(u, i))
                return !0;
            if (e.isTag(i) && e.getName(i) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var a = r.length - 1; a >= 0; a--) {
            var i = r[a];
            if (t(u, i))
                return !0;
            if (e.isTag(i) && e.getName(i) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getName(u);
        return e.getSiblings(u).every(function (n) { return t(u, n) || !e.isTag(n) || e.getName(n) !== r; });
    }, "only-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        return e.getSiblings(u).every(function (r) { return t(u, r) || !e.isTag(r); });
    } };
function nt(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var oe = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var K = hu(fu(), 1);
var st = {};
function ct(u, e) { return u === K.default.falseFunc ? K.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function ot(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function it(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var at = function (u, e, t, r, n) { var a = n(e, it(t), r); return a === K.default.trueFunc ? u : a === K.default.falseFunc ? K.default.falseFunc : function (i) { return a(i) && u(i); }; }, le = { is: at, matches: at, where: at, not: function (u, e, t, r, n) { var a = n(e, it(t), r); return a === K.default.falseFunc ? u : a === K.default.trueFunc ? K.default.falseFunc : function (i) { return !a(i) && u(i); }; }, has: function (u, e, t, r, n) { var a = t.adapter, i = it(t); i.relativeSelector = !0; var s = e.some(function (d) { return d.some(ju); }) ? [st] : void 0, o = n(e, i, s); if (o === K.default.falseFunc)
        return K.default.falseFunc; var l = ct(o, a); if (s && o !== K.default.trueFunc) {
        var _a = o.shouldTestNextSiblings, d_1 = _a === void 0 ? !1 : _a;
        return function (y) { if (!u(y))
            return !1; s[0] = y; var b = a.getChildren(y), p = d_1 ? __spreadArray(__spreadArray([], __read(b), false), __read(ot(y, a)), false) : b; return a.existsOne(l, p); };
    } return function (d) { return u(d) && a.existsOne(l, a.getChildren(d)); }; } };
function h0(u, e, t, r, n) { var a; var i = e.name, s = e.data; if (Array.isArray(s)) {
    if (!(i in le))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(s, ")"));
    return le[i](u, s, t, r, n);
} var o = (a = t.pseudos) === null || a === void 0 ? void 0 : a[i], l = typeof o == "string" ? o : oe[i]; if (typeof l == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var d = lu(l);
    return le.is(u, d, t, r, n);
} if (typeof o == "function")
    return nt(o, i, s, 1), function (d) { return o(d, s) && u(d); }; if (i in Lu)
    return Lu[i](u, s, t, r); if (i in $u) {
    var d_2 = $u[i];
    return nt(d_2, i, s, 2), function (y) { return d_2(y, t, s) && u(y); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function lt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function b0(u, e, t, r, n) { var a = t.adapter, i = t.equals; switch (e.type) {
    case m.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case m.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case m.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), o0[e.action](u, e, t);
    }
    case m.Pseudo: return h0(u, e, t, r, n);
    case m.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (l) { return a.getName(l) === s_1 && u(l); };
    }
    case m.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (l) { var d = l; for (; d = lt(d, a);)
                if (u(d))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (l) { var d = l; for (; d = lt(d, a);)
            if (!s_2.has(d)) {
                if (a.isTag(d) && u(d))
                    return !0;
                s_2.add(d);
            } return !1; };
    }
    case "_flexibleDescendant": return function (o) { var l = o; do
        if (u(l))
            return !0;
    while (l = lt(l, a)); return !1; };
    case m.Parent: return function (o) { return a.getChildren(o).some(function (l) { return a.isTag(l) && u(l); }); };
    case m.Child: return function (o) { var l = a.getParent(o); return l != null && a.isTag(l) && u(l); };
    case m.Sibling: return function (o) { var l = a.getSiblings(o); for (var d = 0; d < l.length; d++) {
        var y = l[d];
        if (i(o, y))
            break;
        if (a.isTag(y) && u(y))
            return !0;
    } return !1; };
    case m.Adjacent: return a.prevElementSibling ? function (o) { var l = a.prevElementSibling(o); return l != null && u(l); } : function (o) { var l = a.getSiblings(o), d; for (var y = 0; y < l.length; y++) {
        var b = l[y];
        if (i(o, b))
            break;
        a.isTag(b) && (d = b);
    } return !!d && u(d); };
    case m.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function p0(u, e, t) { var r = fe(u, e, t); return ct(r, e.adapter); }
function fe(u, e, t) { var r = typeof u == "string" ? lu(u) : u; return de(r, e, t); }
function g0(u) { return u.type === m.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(g0); })); }
var Kr = { type: m.Descendant }, Jr = { type: "_flexibleDescendant" }, Yr = { type: m.Pseudo, name: "scope", data: null };
function _r(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var a = e.isTag(n) && e.getParent(n); return n === st || a && e.isTag(a); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var n = u_1_1.value;
            if (!(n.length > 0 && ju(n[0]) && n[0].type !== m.Descendant))
                if (r && !n.some(g0))
                    n.unshift(Kr);
                else
                    continue;
            n.unshift(Yr);
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
function de(u, e, t) { var r; u.forEach(et), t = (r = e.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), a = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    _r(u, e, a);
else if (u.some(function (o) { return o.length > 0 && ju(o[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, s = u.map(function (o) { if (o.length >= 2) {
    var _a = __read(o, 2), l = _a[0], d = _a[1];
    l.type !== m.Pseudo || l.name !== "scope" || (n && d.type === m.Descendant ? o[1] = Jr : (d.type === m.Adjacent || d.type === m.Sibling) && (i = !0));
} return un(o, e, a); }).reduce(en, au.default.falseFunc); return s.shouldTestNextSiblings = i, s; }
function un(u, e, t) { var r; return u.reduce(function (n, a) { return n === au.default.falseFunc ? au.default.falseFunc : b0(n, a, e, t, de); }, (r = e.rootFunc) !== null && r !== void 0 ? r : au.default.trueFunc); }
function en(u, e) { return e === au.default.falseFunc || u === au.default.trueFunc ? u : u === au.default.falseFunc || e === au.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var m0 = function (u, e) { return u === e; }, tn = { adapter: eu, equals: m0 };
function x0(u) { var e, t, r, n; var a = u != null ? u : tn; return (e = a.adapter) !== null && e !== void 0 || (a.adapter = eu), (t = a.equals) !== null && t !== void 0 || (a.equals = (n = (r = a.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : m0), a; }
function dt(u) { return function (t, r, n) { var a = x0(r); return u(t, a, n); }; }
var ki = dt(p0), Ci = dt(fe), he = dt(de);
function y0(u) { return function (t, r, n) { var a = x0(n); typeof t != "function" && (t = fe(t, a, r)); var i = be(r, a.adapter, t.shouldTestNextSiblings); return u(t, i, a); }; }
function be(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = rn(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function rn(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var n = 0; n < r; n++) {
    var a = ot(t[n], e);
    t.push.apply(t, __spreadArray([], __read(a), false));
} return t; }
var qi = y0(function (u, e, t) { return u === ft.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), Li = y0(function (u, e, t) { return u === ft.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var ge = hu(fu(), 1);
var nn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Du(u) { return u.type !== "pseudo" ? !1 : nn.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(Du); }) : !1; }
function w0(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
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
function S0(u) { for (; u.parent;)
    u = u.parent; return u; }
function pe(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(Du) ? e.push(r) : t.push(r);
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
var an = { type: m.Universal, namespace: null }, sn = { type: m.Pseudo, name: "scope", data: null };
function pt(u, e, t) {
    if (t === void 0) { t = {}; }
    return cn([u], e, t);
}
function cn(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(pe(lu(e)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && u.some(he(r, t)) || n.some(function (a) { return A0(a, u, t).length > 0; });
}
function on(u, e, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < e.length ? [n < 0 ? e[e.length + n] : e[n]] : [];
    case "gt": return isFinite(n) ? e.slice(n + 1) : [];
    case "even": return e.filter(function (a, i) { return i % 2 === 0; });
    case "odd": return e.filter(function (a, i) { return i % 2 === 1; });
    case "not": {
        var a_1 = new Set(ln(t, e, r));
        return e.filter(function (i) { return !a_1.has(i); });
    }
} }
function ln(u, e, t) { if (e.length === 0)
    return []; var _a = __read(pe(u), 2), r = _a[0], n = _a[1], a; if (r.length) {
    var i = bt(e, r, t);
    if (n.length === 0)
        return i;
    i.length && (a = new Set(i));
} for (var i = 0; i < n.length && (a == null ? void 0 : a.size) !== e.length; i++) {
    var s = n[i];
    if ((a ? e.filter(function (d) { return T(d) && !a.has(d); }) : e).length === 0)
        break;
    var l = A0(s, e, t);
    if (l.length)
        if (a)
            l.forEach(function (d) { return a.add(d); });
        else {
            if (i === n.length - 1)
                return l;
            a = new Set(l);
        }
} return typeof a != "undefined" ? a.size === e.length ? e : e.filter(function (i) { return a.has(i); }) : []; }
function A0(u, e, t) { var r; if (u.some(pu)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : S0(e[0]), a = du(Y({}, t), { context: e, relativeSelector: !1 });
    return u.push(sn), me(n, u, a, !0, e.length);
} return me(e, u, t, !1, e.length); }
function gt(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return E0(e, u);
    var _a = __read(pe(lu(u)), 2), n = _a[0], a = _a[1], i = a.map(function (s) { return me(e, s, t, !0, r); });
    return n.length && i.push(ht(e, n, t, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : Ye(i.reduce(function (s, o) { return __spreadArray(__spreadArray([], __read(s), false), __read(o), false); }));
}
function me(u, e, t, r, n) { var a = e.findIndex(Du), i = e.slice(0, a), s = e[a], o = e.length - 1 === a ? n : 1 / 0, l = w0(s.name, s.data, o); if (l === 0)
    return []; var y = (i.length === 0 && !Array.isArray(u) ? te(u).filter(T) : i.length === 0 ? (Array.isArray(u) ? u : [u]).filter(T) : r || i.some(pu) ? ht(u, [i], t, l) : bt(u, [i], t)).slice(0, l), b = on(s.name, y, s.data, t); if (b.length === 0 || e.length === a + 1)
    return b; var p = e.slice(a + 1), w = p.some(pu); if (w) {
    if (pu(p[0])) {
        var S = p[0].type;
        (S === m.Sibling || S === m.Adjacent) && (b = be(b, eu, !0)), p.unshift(an);
    }
    t = du(Y({}, t), { relativeSelector: !1, rootFunc: function (S) { return b.includes(S); } });
}
else
    t.rootFunc && t.rootFunc !== ge.trueFunc && (t = du(Y({}, t), { rootFunc: ge.trueFunc })); return p.some(Du) ? me(b, p, t, !1, n) : w ? ht(b, [p], t, n) : bt(b, [p], t); }
function ht(u, e, t, r) { var n = he(e, t, u); return E0(u, n, r); }
function E0(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = be(u, eu, e.shouldTestNextSiblings);
    return ne(function (n) { return T(n) && e(n); }, r, !0, t);
}
function bt(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(T); if (r.length === 0)
    return r; var n = he(e, t); return n === ge.trueFunc ? r : r.filter(n); }
function T0(u) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(u) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function mt(u) { var e = [], t = u.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (e.length > 1 && e.pop(), r === t.length - 1 && e.push("")) : n === "." ? r === t.length - 1 && e.push("") : e.push(n);
} return e.join("/"); }
function ye(u, e) { e = e == null ? "" : String(e).trim(); var t = T0(e); if (t.scheme || !u)
    return e; var r = T0(String(u)); if (!r.scheme)
    return e; var n = r.auth, a, i; if (t.auth !== void 0)
    n = t.auth, a = mt(t.path), i = t.query;
else if (!t.path)
    a = r.path, i = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        a = mt(t.path);
    else {
        var s = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        a = mt(s + t.path);
    }
    i = t.query;
} return n !== void 0 && a.charAt(0) !== "/" && (a = "/" + a), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + a + (i !== void 0 ? "?" + i : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function v0(u) { if (typeof btoa == "function")
    return btoa(u); var e = ""; for (var t = 0; t < u.length; t += 3) {
    var r = u.charCodeAt(t), n = u.charCodeAt(t + 1), a = u.charCodeAt(t + 2), i = r << 16 | (n || 0) << 8 | (a || 0);
    e += xe[i >> 18 & 63] + xe[i >> 12 & 63] + (t + 1 < u.length ? xe[i >> 6 & 63] : "=") + (t + 2 < u.length ? xe[i & 63] : "=");
} return e; }
var fn = function (u, e, t) { return gt(u, e, t); }, q0 = function (u, e, t) { return gt(u, e, t, 1)[0] || null; }, L0 = /[\s ]+/g, N0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), dn = { containsOwn: function (u, e) { return yt(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return k0(e).test(xt(u)); }, matchesOwn: function (u, e) { return k0(e).test(yt(u)); }, containsData: function (u, e) { return cu(u).includes(e); }, "contains-ci": function (u, e) { return xt(u).toLowerCase().includes(String(e).toLowerCase()); } };
function k0(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var we = { pseudos: dn, xmlMode: !1, lowerCaseTags: !0 };
function Se(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function xt(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? e += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? e += " " : n.type === "tag" && (N0.has(n.name) && (e += " "), t(n), N0.has(n.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(L0, " ").trim(); }
function yt(u) {
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
    return e.replace(L0, " ").trim();
}
function D0(u, e) { if (!e)
    return ""; try {
    return ye(u, e);
}
catch (t) {
    return u ? "" : e;
} }
var mu = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return tu.of(fn(Se(e), this.node, we), this.doc); };
    u.prototype.selectFirst = function (e) { var t = q0(Se(e), this.node, we); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return pt(this.node, Se(e), we); };
    u.prototype.text = function () { return xt(this.node); };
    u.prototype.ownText = function () { return yt(this.node); };
    u.prototype.wholeText = function () { return cu(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return ku(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return ku(this.node, { decodeEntities: !1 }); };
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
        return D0(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
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
        e.push(t), t = t.parent; return tu.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && pt(t, Se(e), we))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return tu.of((this.node.children || []).filter(T), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(T)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(T).length; };
    u.prototype.nextElementSibling = function () { var e = Ze(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = Xe(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return tu.of(re(this.node).filter(function (e) { return e !== _this.node && T(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return re(this.node).filter(T).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return nu(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), St = Object.create(Array.prototype), tu = { of: wt, prototype: St };
function wt(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof mu ? r : new mu(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, St), t;
}
var C0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return tu.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
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
        var e = wt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(u))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), e.push(n));
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
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return tu.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = wt([]);
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
    }, next: function () { return tu.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return tu.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(C0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(St, u, { value: C0[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ae(u, e) { var t = e0(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new mu(t, null); r.doc = r, r.__base = e || ""; var n = q0("base[href]", t); return n && n.attribs.href && (r.__base = D0(r.__base, n.attribs.href)), r; }
function I0(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Ae(u), n = function (a) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((a.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                nu(i);
                continue;
            }
            if (i.type === "tag" && (n(i), !t.has(i.name))) {
                var s = (i.children || []).slice();
                try {
                    for (var s_3 = (e_18 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var o = s_3_1.value;
                        Ke(i, o);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                nu(i);
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
}; return n(r.node), ku(r.node.children, { decodeEntities: !1 }); }
var Ee = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function hn(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return v0(e); }
function U0(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
function bn(u) { var e = ""; for (var t = 0; t < u.length; t++) {
    var r = u.charCodeAt(t);
    if (r < 128) {
        e += u[t];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var n = u.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : e += "�";
} return e; }
var At = (function () {
    function At(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    At.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    At.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? bn(t) : t; };
    At.prototype.string = function (e) { return this.text(e); };
    At.prototype.html = function (e) { return Ae(this.text(e), this.url); };
    At.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    At.prototype.base64 = function () { return hn(this._raw.bytes || U0(this.text())); };
    At.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || U0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return At;
}());
function pn(u) {
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
function O0(u, e) { var t = function (i) { return ({ getItem: function (s) { var o = u.storageGet(i + s); return o == null ? null : o; }, setItem: function (s, o) { return u.storageSet(i + s, o == null ? null : String(o)); }, removeItem: function (s) { return u.storageSet(i + s, null); }, clear: function () { return u.storageClear && u.storageClear(i); } }); }, r = "__cookie__", n = {}; n.Response = { success: function (i, s) { return ({ code: 0, data: i === void 0 ? null : i, data2: s === void 0 ? null : s }); }, error: function (i) { return ({ code: 1, data: i == null ? "" : String(i) }); } }, n.fetch = function (s, o) {
    return __awaiter(this, void 0, void 0, function () { var l, S, d, y, b, S, p, w, S_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                o = o || {};
                l = String(s);
                if (o.queries) {
                    S = Object.entries(o.queries).map(function (_a) {
                        var _b = __read(_a, 2), P = _b[0], V = _b[1];
                        return encodeURIComponent(P) + "=" + encodeURIComponent(V);
                    }).join("&");
                    S && (l += (l.includes("?") ? "&" : "?") + S);
                }
                d = Object.assign({ "User-Agent": Ee }, pn(o.headers)), y = u.storageGet(r);
                y && !Object.keys(d).some(function (S) { return S.toLowerCase() === "cookie"; }) && (d.Cookie = y);
                b = o.body;
                if (b != null && typeof b == "object") {
                    S = Object.keys(d).find(function (P) { return P.toLowerCase() === "content-type"; });
                    S && /json/i.test(d[S]) ? b = JSON.stringify(b) : (b = Object.entries(b).map(function (_a) {
                        var _b = __read(_a, 2), P = _b[0], V = _b[1];
                        return encodeURIComponent(P) + "=" + encodeURIComponent(V);
                    }).join("&"), S || (d["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                p = { url: l, method: (o.method || (b != null ? "POST" : "GET")).toUpperCase(), headers: d, body: b, timeout: o.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, u.request(p)];
            case 2:
                w = _a.sent();
                return [3, 4];
            case 3:
                S_1 = _a.sent();
                w = { status: 0, url: l, headers: {}, text: "", error: String(S_1 && S_1.message || S_1) };
                return [3, 4];
            case 4: return [2, new At(w, p)];
        }
    }); });
}, n.Http = { get: function (i) { return M0(n, "GET", i); }, post: function (i) { return M0(n, "POST", i); } }, n.Html = { parse: function (i, s) { return Ae(i, s || ""); }, clean: function (i, s) { return I0(i, s); } }, n.localStorage = t("ls:"), n.cacheStorage = t("cs:"), n.localConfig = { getItem: function (i) { return u.config(i); } }, n.localCookie = { setCookie: function (i) { u.storageSet(r, String(i).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, n.sleep = function (i) { return new Promise(function (s) { return typeof setTimeout == "function" ? setTimeout(s, Math.min(Number(i) || 0, 1e4)) : s(); }); }; var a = function () {
    var i = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        i[_i] = arguments[_i];
    }
    try {
        u.log && u.log(i.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return n.Log = { log: a }, n.console = { log: a, error: a, warn: a, info: a }, n.Console = n.console, n.log = a, n.UserAgent = { system: function () { return Ee; }, chrome: function () { return Ee; }, android: function () { return Ee; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = tu, n.Element = mu, n.__meta = e, n; }
function M0(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (a) { return Object.assign(r.headers, a || {}), n; }, header: function (a, i) { return r.headers[a] = i, n; }, params: function (a) { return r.queries = a, n; }, queries: function (a) { return r.queries = a, n; }, body: function (a) { return r.body = a, n; }, html: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(a)];
            }
        }); });
    }, string: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(a)];
            }
        }); });
    }, text: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(a)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return n; }
function xu(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(u, e); try {
    return ye(u, e);
}
catch (t) {
    return e;
} }
var L = function (u) { return u == null ? "" : String(u); }, gn = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, Te = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, n = e.host;
        this.meta = t, this.host = n, this.env = e.env || O0(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return L(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var r, n, a, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        n = function (s) { var o = _this.host.config(s); return o == null ? (_this.meta.configDefaults || {})[s] : o; };
                        return [4, r(this.env, n)];
                    case 1:
                        a = _a.sent();
                        if (typeof a != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, a.apply(void 0, __spreadArray([], __read(t.map(L)), false))];
                    case 2:
                        i = _a.sent();
                        if (!i)
                            throw new Error(e + ": empty result");
                        if (i.code !== 0)
                            throw new Error(e + ": " + L(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return L(e).replace(/\.js$/, ""); };
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
            var n, a, i, s, o;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = e + "|" + t;
                        r = Math.max(1, r | 0);
                        a = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && a == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, t, a)];
                    case 1:
                        i = _a.sent(), s = L(i.data2);
                        s && (this.tokens[n + "|" + (r + 1)] = s);
                        o = (i.data || []).filter(Boolean).map(function (l) { return ({ name: L(l.name).trim(), link: xu(l.host || _this.base + "/", l.link), cover: xu(l.host || _this.base + "/", l.cover), description: L(l.description), tag: L(l.tag) }); }).filter(function (l) { return l.name && l.link; });
                        return [2, { items: o, hasNext: !!s && o.length > 0 }];
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
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), L(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), L(r.input), e) : this.search("", e)];
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
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: L(t.name).trim(), cover: xu(t.host || this.base + "/", t.cover), author: L(t.author).trim(), description: R0(L(t.description)), detail: R0(L(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: gn(r.map(function (n) { return String(n).trim(); })), url: e, format: L(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_20_1, _c;
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
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", L(n))];
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
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: L(r.name).trim() || "#" + (n + 1), url: xu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
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
                    case 6: return [2, (_a, typeof t == "string" && (t = t.split(/[\n,]+/)), (t || []).map(function (r) { return xu(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
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
                    return [2, { html: L(t.data), title: L(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, a, i, i_2, i_2_1, s, a_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        n = (_c.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (a) { return typeof a == "string" ? { title: "Server", data: a } : { title: L(a.title || a.name || "Server"), data: L(a.data || a.url || a.link) }; }));
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
                        n = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        a = (_c.sent()).data || {}, i = Array.isArray(a) ? a : [a];
                        try {
                            for (i_2 = (e_22 = void 0, __values(i)), i_2_1 = i_2.next(); !i_2_1.done; i_2_1 = i_2.next()) {
                                s = i_2_1.value;
                                !s || !s.data || s.type !== "webview" && r.push({ url: xu(s.host || this.base + "/", s.data), quality: n.title + (s.quality ? " " + s.quality : ""), headers: s.headers || { Referer: this.base + "/" }, subtitles: (s.subtitles || (s.subtitle ? [{ data: s.subtitle, label: "Sub" }] : [])).map(function (o) { return ({ file: xu(_this.base + "/", o.data || o.file), label: L(o.label || o.language || "Sub") }); }), mimeType: L(s.mimeType) });
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
                        a_2 = _c.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + a_2.message);
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
function R0(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var iu = { id: "banlong", name: "Bàn Long", source: "https://blhvip.vn", type: "novel", locale: "vi", nsfw: !1, version: 8, config: { DOMAIN: { title: "Domain", default: "https://blhvip.vn", mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://blhvip.vn" }, itemType: 2, lnId: "kiritokmn.banlong", lnIcon: "", lnVersion: "1.1.8" }, B0 = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2, a.success([{ title: "Mới cập nhật", input: g + "/chuong-moi-cap-nhat", script: "newchap.js" }, { title: "Top linh phiếu", input: g + "/top-linh-phieu-tuan", script: "source.js" }, { title: "Mới nhất", input: g + "/truyen-moi-nhat", script: "source.js" }, { title: "Thịnh hành tuần", input: g + "/truyen-thinh-hanh-trong-tuan", script: "source.js" }, { title: "Top yêu thích", input: g + "/truyen-yeu-thich", script: "source.js" }, { title: "Truyện hot", input: g + "/truyen-hot", script: "source.js" }, { title: "Hoàn thành", input: g + "/truyen-hoan-thanh", script: "source.js" }])];
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k() {
                                            return __awaiter(this, void 0, void 0, function () { var c, q; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(g)];
                                                    case 1:
                                                        c = _a.sent();
                                                        if (!c.ok)
                                                            return [2, a.error("HTTP " + c.status)];
                                                        q = c.html().select(".modal-story-genre li a").map(function (A) { return { title: A.text(), input: j(A.attr("href")), script: "source.js" }; });
                                                        return [2, a.success(q)];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c, h) {
                                            return __awaiter(this, void 0, void 0, function () { var q, A, C, D, M; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c = c || "", h = h || "1";
                                                        return [4, t(H + "/v1/search", { queries: { q: c, page: h } })];
                                                    case 1:
                                                        q = _a.sent();
                                                        if (!q.ok)
                                                            return [2, a.error("HTTP " + q.status)];
                                                        A = q.json();
                                                        if (!A || !A.success)
                                                            return [2, a.error(A && A.error_message ? A.error_message : "Không tìm được truyện")];
                                                        C = [];
                                                        (A.data || []).forEach(function (O) { C.push({ name: O.name, link: g + "/truyen/" + O.slug, cover: O.img_url, description: O.author_name + " - " + O.chapter_count + " chương", tag: O.is_full ? "Full" : O.category_name }); });
                                                        D = parseInt(h) || 1, M = parseInt(A.total_page) || 0;
                                                        return [2, a.success(C, D < M ? String(D + 1) : "")];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, q, A, C, D, M; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c = U(c);
                                                        return [4, t(c)];
                                                    case 1:
                                                        h = _a.sent();
                                                        if (!h.ok)
                                                            return [2, a.error("HTTP " + h.status)];
                                                        q = h.html(), A = q.select(".info-story"), C = A.select("h1").first();
                                                        if (!C)
                                                            return [2, a.error("Không tìm thấy truyện")];
                                                        C.select(".prefix").remove();
                                                        D = [];
                                                        A.select("p.text-info").forEach(function (O) { D.push(O.text()); }), D.push(A.select(".story-info").text());
                                                        M = A.select("a[href^=the-loai]").map(function (O) { return { title: O.text(), input: j(O.attr("href")), script: "source.js" }; });
                                                        return [2, a.success({ name: C.text(), author: A.select("a[href^=tac-gia]").text(), cover: q.select(".image-story img").attr("src"), description: q.select("#tab-info-1 .s-content").html(), detail: D.join("<br>"), url: c, type: "novel", format: "novel", ongoing: A.text().indexOf("Đã hoàn thành") === -1, tags: M })];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, page: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, q, A, C, D, M, O; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c = U(c);
                                                        h = J(c);
                                                        if (!h)
                                                            return [2, a.error("URL truyện không hợp lệ")];
                                                        q = H + "/v1/story/" + h + "/chapter_list?new=0&page=";
                                                        return [4, t(q + "1")];
                                                    case 1:
                                                        A = _a.sent();
                                                        if (!A.ok)
                                                            return [2, a.error("HTTP " + A.status)];
                                                        C = A.json();
                                                        if (!C || !C.success)
                                                            return [2, a.error("Không tải được danh sách chương")];
                                                        D = parseInt(C.total_page) || 1, M = [];
                                                        for (O = 1; O <= D; O++)
                                                            M.push(q + O);
                                                        return [2, a.success(M)];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, q, A, C, D; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        h = /\/v1\/story\/.+$/.exec(c), q = h ? H + h[0] : H + "/v1/story/" + J(c) + "/chapter_list?new=0&page=1";
                                                        return [4, t(q)];
                                                    case 1:
                                                        A = _a.sent();
                                                        if (!A.ok)
                                                            return [2, a.error("HTTP " + A.status)];
                                                        C = A.json();
                                                        if (!C || !C.success)
                                                            return [2, a.error("Không tải được danh sách chương")];
                                                        D = [];
                                                        return [2, ((C.data || []).forEach(function (M) { D.push({ name: M.name, url: j(M.url), lock: !1, pay: !!M.is_vip }); }), a.success(D))];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c) {
                                            return __awaiter(this, void 0, void 0, function () { var h, A, C; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c = U(c);
                                                        return [4, t(c)];
                                                    case 1:
                                                        h = _a.sent();
                                                        if (!h.ok)
                                                            return [2, a.error("HTTP " + h.status)];
                                                        A = h.html().select("#chapter-content");
                                                        if (!A.select(".content-lock").isEmpty())
                                                            return [2, a.error("Bạn cần mua chương VIP này trên blhvip.vn để đọc.")];
                                                        C = A.select(".published-content").first();
                                                        return [2, C ? (C.select("script, style, iframe, ins").remove(), a.success(C.html(), A.select("h1.chapter-title").text())) : a.error("Không tìm thấy nội dung chương")];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, newchap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c, h) {
                                            return __awaiter(this, void 0, void 0, function () { var q, A, C; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        h = h || "1";
                                                        return [4, t(j(c), { queries: { page: h } })];
                                                    case 1:
                                                        q = _a.sent();
                                                        if (!q.ok)
                                                            return [2, a.error("HTTP " + q.status)];
                                                        A = q.html(), C = [];
                                                        return [2, (A.select(".list-story__item li").forEach(function (D) { var M = D.select("p.line-clamp-1").first(); if (!M)
                                                                return; var O = M.select(".prefix").text().replace(/[\[\]]/g, ""); M.select(".prefix").remove(); var vt = D.select("a[href*=/chuong-]"), Nt = J("/" + vt.attr("href")); Nt && C.push({ name: M.text(), link: g + "/truyen/" + Nt, description: vt.text(), tag: O }); }), a.success(C, _(A)))];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
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
            return [2, (function (t, r, n, a, i, s, o, l, d, y, b, p, w, S, P, V, Q) {
                    return __awaiter(this, void 0, void 0, function () { var v; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                v = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U(c) { return c.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, g); } function j(c) { return c = String(c || "").trim(), c ? c.indexOf("//") === 0 ? "https:" + c : /^https?:\/\//i.test(c) ? c : (c.charAt(0) !== "/" && (c = "/" + c), g + c) : ""; } function J(c) { var h = /\/truyen\/([^\/?#]+)/.exec(c); return h ? h[1] : ""; } function _(c) { var h = /[?&]page=(\d+)/.exec(c.select("a.next-page").attr("href")); return h ? h[1] : ""; } function k(c, h) {
                                            return __awaiter(this, void 0, void 0, function () { var q, A, C; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        h = h || "1";
                                                        return [4, t(j(c), { queries: { page: h } })];
                                                    case 1:
                                                        q = _a.sent();
                                                        if (!q.ok)
                                                            return [2, a.error("HTTP " + q.status)];
                                                        A = q.html(), C = [];
                                                        return [2, (A.select(".basis-full").first().select(".novel-item").forEach(function (D) { var M = D.select("h3 a"); C.push({ name: M.text(), link: j(M.attr("href")), cover: D.select("img").attr("src"), description: D.select("a.author").text() + " - " + D.select(".story-info").text(), tag: D.select(".story-status").text() || D.select("a[href^=danh-muc]").text() }); }), a.success(C, _(A)))];
                                                }
                                            }); });
                                        } var g, H; return __generator(this, function (_a) {
                                            g = "https://blhvip.vn";
                                            try {
                                                v && (g = String(v).replace(/\/+$/, ""));
                                            }
                                            catch (c) { }
                                            H = g.replace(/^(https?:\/\/)(?:www\.)?/, "$1api.");
                                            return [2, typeof k == "function" ? k : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function P0(u) { return new Te({ meta: iu, scripts: B0, host: u }); }
var mn = require("@libs/fetch").fetchApi, Wu = null;
try {
    Wu = require("@libs/storage");
}
catch (u) {
    Wu = null;
}
var Et = {}, ve = Wu && Wu.storage ? Wu.storage : { get: function (u) { return Et[u]; }, set: function (u, e) { Et[u] = e; }, delete: function (u) { delete Et[u]; } }, Tt = (function () {
    function class_2() {
        var _this = this;
        this.id = iu.lnId, this.name = iu.name, this.icon = iu.lnIcon, this.site = iu.source, this.version = iu.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = P0({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, mn(e.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (a, i) { n[i] = a; });
                            }
                            catch (a) { }
                            _a = { status: r.status, url: r.url || e.url, headers: n };
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
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
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
                    return [2, { path: e, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, a) { return ({ name: n.name, path: n.url, chapterNumber: a + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : iu.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), xn = new Tt;
