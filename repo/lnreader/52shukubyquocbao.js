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
var k0 = Object.create;
var Tu = Object.defineProperty, C0 = Object.defineProperties, q0 = Object.getOwnPropertyDescriptor, L0 = Object.getOwnPropertyDescriptors, D0 = Object.getOwnPropertyNames, mt = Object.getOwnPropertySymbols, I0 = Object.getPrototypeOf, yt = Object.prototype.hasOwnProperty, U0 = Object.prototype.propertyIsEnumerable;
var xt = function (e, u, t) { return u in e ? Tu(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, z = function (e, u) {
    var e_2, _a;
    for (var t in u || (u = {}))
        yt.call(u, t) && xt(e, t, u[t]);
    if (mt)
        try {
            for (var _b = __values(mt(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                U0.call(u, t) && xt(e, t, u[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, nu = function (e, u) { return C0(e, L0(u)); };
var R0 = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, xe = function (e, u) { for (var t in u)
    Tu(e, t, { get: u[t], enumerable: !0 }); }, wt = function (e, u, t, r) {
    var e_3, _a;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (a) {
            !yt.call(e, a) && a !== t && Tu(e, a, { get: function () { return u[a]; }, enumerable: !(r = q0(u, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(D0(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return e;
};
var iu = function (e, u, t) { return (t = e != null ? k0(I0(e)) : {}, wt(u || !e || !e.__esModule ? Tu(t, "default", { value: e, enumerable: !0 }) : t, e)); }, O0 = function (e) { return wt(Tu({}, "__esModule", { value: !0 }), e); };
var au = R0(function (Mn, Xt) { Xt.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var ia = {};
xe(ia, { default: function () { return na; } });
module.exports = O0(ia);
var Vu = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var Gu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var ye, M0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), du = (ye = String.fromCodePoint) !== null && ye !== void 0 ? ye : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function we(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = M0.get(e)) !== null && u !== void 0 ? u : e; }
var L;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(L || (L = {}));
var B0 = 32, uu;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(uu || (uu = {}));
function Se(e) { return e >= L.ZERO && e <= L.NINE; }
function F0(e) { return e >= L.UPPER_A && e <= L.UPPER_F || e >= L.LOWER_A && e <= L.LOWER_F; }
function H0(e) { return e >= L.UPPER_A && e <= L.UPPER_Z || e >= L.LOWER_A && e <= L.LOWER_Z || Se(e); }
function P0(e) { return e === L.EQUALS || H0(e); }
var q;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(q || (q = {}));
var H;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(H || (H = {}));
var hu = (function () {
    function hu(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = q.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = H.Strict;
    }
    hu.prototype.startEntity = function (u) { this.decodeMode = u, this.state = q.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    hu.prototype.write = function (u, t) { switch (this.state) {
        case q.EntityStart: return u.charCodeAt(t) === L.NUM ? (this.state = q.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = q.NamedEntity, this.stateNamedEntity(u, t));
        case q.NumericStart: return this.stateNumericStart(u, t);
        case q.NumericDecimal: return this.stateNumericDecimal(u, t);
        case q.NumericHex: return this.stateNumericHex(u, t);
        case q.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    hu.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | B0) === L.LOWER_X ? (this.state = q.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = q.NumericDecimal, this.stateNumericDecimal(u, t)); };
    hu.prototype.addToNumericResult = function (u, t, r, a) { if (t !== r) {
        var n = r - t;
        this.result = this.result * Math.pow(a, n) + parseInt(u.substr(t, n), a), this.consumed += n;
    } };
    hu.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var a = u.charCodeAt(t);
        if (Se(a) || F0(a))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    hu.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var a = u.charCodeAt(t);
        if (Se(a))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    hu.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === L.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === H.Strict)
        return 0; return this.emitCodePoint(we(this.result), this.consumed), this.errors && (u !== L.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    hu.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & uu.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var i = u.charCodeAt(t);
        if (this.treeIndex = V0(r, a, this.treeIndex + Math.max(1, n), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === H.Attribute && (n === 0 || P0(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & uu.VALUE_LENGTH) >> 14, n !== 0) {
            if (i === L.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== H.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    hu.prototype.emitNotTerminatedNamedEntity = function () { var u; var _a = this, t = _a.result, r = _a.decodeTree, a = (r[t] & uu.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, a, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    hu.prototype.emitNamedEntityData = function (u, t, r) { var a = this.decodeTree; return this.emitCodePoint(t === 1 ? a[u] & ~uu.VALUE_LENGTH : a[u + 1], r), t === 3 && this.emitCodePoint(a[u + 2], r), r; };
    hu.prototype.end = function () { var u; switch (this.state) {
        case q.NamedEntity: return this.result !== 0 && (this.decodeMode !== H.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case q.NumericDecimal: return this.emitNumericEntity(0, 2);
        case q.NumericHex: return this.emitNumericEntity(0, 3);
        case q.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case q.EntityStart: return 0;
    } };
    return hu;
}());
function St(e) { var u = "", t = new hu(e, function (r) { return u += du(r); }); return function (a, n) { var i = 0, s = 0; for (; (s = a.indexOf("&", s)) >= 0;) {
    u += a.slice(i, s), t.startEntity(n);
    var o = t.write(a, s + 1);
    if (o < 0) {
        i = s + t.end();
        break;
    }
    i = s + o, s = o === 0 ? i + 1 : i;
} var c = u + a.slice(i); return u = "", c; }; }
function V0(e, u, t, r) { var a = (u & uu.BRANCH_LENGTH) >> 7, n = u & uu.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? t : -1; if (n) {
    var c = r - n;
    return c < 0 || c >= a ? -1 : e[t + c] - 1;
} var i = t, s = i + a - 1; for (; i <= s;) {
    var c = i + s >>> 1, o = e[c];
    if (o < r)
        i = c + 1;
    else if (o > r)
        s = c - 1;
    else
        return e[c + a];
} return -1; }
var pa = St(Vu), ga = St(Gu);
var p;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(p || (p = {}));
var l;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(l || (l = {}));
function Z(e) { return e === p.Space || e === p.NewLine || e === p.Tab || e === p.FormFeed || e === p.CarriageReturn; }
function ju(e) { return e === p.Slash || e === p.Gt || Z(e); }
function G0(e) { return e >= p.LowerA && e <= p.LowerZ || e >= p.UpperA && e <= p.UpperZ; }
var V;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(V || (V = {}));
var D = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, bu = (function () {
    function bu(_a, r) {
        var _b = _a.xmlMode, u = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = l.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = l.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new hu(u ? Gu : Vu, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    bu.prototype.reset = function () { this.state = l.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = l.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    bu.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    bu.prototype.end = function () { this.running && this.finish(); };
    bu.prototype.pause = function () { this.running = !1; };
    bu.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    bu.prototype.stateText = function (u) { u === p.Lt || !this.decodeEntities && this.fastForwardTo(p.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = l.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === p.Amp && this.startEntity(); };
    bu.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? ju(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = l.InTagName, this.stateInTagName(u); };
    bu.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === p.Gt || Z(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === D.TitleEnd ? this.decodeEntities && u === p.Amp && this.startEntity() : this.fastForwardTo(p.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === p.Lt); };
    bu.prototype.stateCDATASequence = function (u) { u === D.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === D.Cdata.length && (this.state = l.InCommentLike, this.currentSequence = D.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = l.InDeclaration, this.stateInDeclaration(u)); };
    bu.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    bu.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === D.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = l.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    bu.prototype.isTagStartChar = function (u) { return this.xmlMode ? !ju(u) : G0(u); };
    bu.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = l.SpecialStartSequence; };
    bu.prototype.stateBeforeTagName = function (u) { if (u === p.ExclamationMark)
        this.state = l.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === p.Questionmark)
        this.state = l.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = l.InTagName : t === D.ScriptEnd[2] ? this.state = l.BeforeSpecialS : t === D.TitleEnd[2] ? this.state = l.BeforeSpecialT : this.state = l.InTagName;
    }
    else
        u === p.Slash ? this.state = l.BeforeClosingTagName : (this.state = l.Text, this.stateText(u)); };
    bu.prototype.stateInTagName = function (u) { ju(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    bu.prototype.stateBeforeClosingTagName = function (u) { Z(u) || (u === p.Gt ? this.state = l.Text : (this.state = this.isTagStartChar(u) ? l.InClosingTagName : l.InSpecialComment, this.sectionStart = this.index)); };
    bu.prototype.stateInClosingTagName = function (u) { (u === p.Gt || Z(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = l.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    bu.prototype.stateAfterClosingTagName = function (u) { (u === p.Gt || this.fastForwardTo(p.Gt)) && (this.state = l.Text, this.sectionStart = this.index + 1); };
    bu.prototype.stateBeforeAttributeName = function (u) { u === p.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = l.InSpecialTag, this.sequenceIndex = 0) : this.state = l.Text, this.sectionStart = this.index + 1) : u === p.Slash ? this.state = l.InSelfClosingTag : Z(u) || (this.state = l.InAttributeName, this.sectionStart = this.index); };
    bu.prototype.stateInSelfClosingTag = function (u) { u === p.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = l.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Z(u) || (this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    bu.prototype.stateInAttributeName = function (u) { (u === p.Eq || ju(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = l.AfterAttributeName, this.stateAfterAttributeName(u)); };
    bu.prototype.stateAfterAttributeName = function (u) { u === p.Eq ? this.state = l.BeforeAttributeValue : u === p.Slash || u === p.Gt ? (this.cbs.onattribend(V.NoValue, this.sectionStart), this.sectionStart = -1, this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(u)) : Z(u) || (this.cbs.onattribend(V.NoValue, this.sectionStart), this.state = l.InAttributeName, this.sectionStart = this.index); };
    bu.prototype.stateBeforeAttributeValue = function (u) { u === p.DoubleQuote ? (this.state = l.InAttributeValueDq, this.sectionStart = this.index + 1) : u === p.SingleQuote ? (this.state = l.InAttributeValueSq, this.sectionStart = this.index + 1) : Z(u) || (this.sectionStart = this.index, this.state = l.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    bu.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === p.DoubleQuote ? V.Double : V.Single, this.index + 1), this.state = l.BeforeAttributeName) : this.decodeEntities && u === p.Amp && this.startEntity(); };
    bu.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, p.DoubleQuote); };
    bu.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, p.SingleQuote); };
    bu.prototype.stateInAttributeValueNoQuotes = function (u) { Z(u) || u === p.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(V.Unquoted, this.index), this.state = l.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === p.Amp && this.startEntity(); };
    bu.prototype.stateBeforeDeclaration = function (u) { u === p.OpeningSquareBracket ? (this.state = l.CDATASequence, this.sequenceIndex = 0) : this.state = u === p.Dash ? l.BeforeComment : l.InDeclaration; };
    bu.prototype.stateInDeclaration = function (u) { (u === p.Gt || this.fastForwardTo(p.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = l.Text, this.sectionStart = this.index + 1); };
    bu.prototype.stateInProcessingInstruction = function (u) { (u === p.Gt || this.fastForwardTo(p.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = l.Text, this.sectionStart = this.index + 1); };
    bu.prototype.stateBeforeComment = function (u) { u === p.Dash ? (this.state = l.InCommentLike, this.currentSequence = D.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = l.InDeclaration; };
    bu.prototype.stateInSpecialComment = function (u) { (u === p.Gt || this.fastForwardTo(p.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = l.Text, this.sectionStart = this.index + 1); };
    bu.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === D.ScriptEnd[3] ? this.startSpecial(D.ScriptEnd, 4) : t === D.StyleEnd[3] ? this.startSpecial(D.StyleEnd, 4) : (this.state = l.InTagName, this.stateInTagName(u)); };
    bu.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === D.TitleEnd[3] ? this.startSpecial(D.TitleEnd, 4) : t === D.TextareaEnd[3] ? this.startSpecial(D.TextareaEnd, 4) : (this.state = l.InTagName, this.stateInTagName(u)); };
    bu.prototype.startEntity = function () { this.baseState = this.state, this.state = l.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? H.Strict : this.baseState === l.Text || this.baseState === l.InSpecialTag ? H.Legacy : H.Attribute); };
    bu.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    bu.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === l.Text || this.state === l.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === l.InAttributeValueDq || this.state === l.InAttributeValueSq || this.state === l.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    bu.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    bu.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case l.Text: {
                this.stateText(u);
                break;
            }
            case l.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case l.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case l.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case l.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case l.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case l.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case l.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case l.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case l.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case l.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case l.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case l.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case l.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case l.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case l.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case l.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case l.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case l.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case l.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case l.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case l.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case l.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case l.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case l.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case l.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    bu.prototype.finish = function () { this.state === l.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    bu.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === l.InCommentLike ? this.currentSequence === D.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === l.InTagName || this.state === l.BeforeAttributeName || this.state === l.BeforeAttributeValue || this.state === l.AfterAttributeName || this.state === l.InAttributeName || this.state === l.InAttributeValueSq || this.state === l.InAttributeValueDq || this.state === l.InAttributeValueNq || this.state === l.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    bu.prototype.emitCodePoint = function (u, t) { this.baseState !== l.Text && this.baseState !== l.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return bu;
}());
var pu = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), E = new Set(["p"]), At = new Set(["thead", "tbody"]), Et = new Set(["dd", "dt"]), vt = new Set(["rt", "rp"]), j0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", E], ["h1", E], ["h2", E], ["h3", E], ["h4", E], ["h5", E], ["h6", E], ["select", pu], ["input", pu], ["output", pu], ["button", pu], ["datalist", pu], ["textarea", pu], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Et], ["dt", Et], ["address", E], ["article", E], ["aside", E], ["blockquote", E], ["details", E], ["div", E], ["dl", E], ["fieldset", E], ["figcaption", E], ["figure", E], ["footer", E], ["form", E], ["header", E], ["hr", E], ["main", E], ["nav", E], ["ol", E], ["pre", E], ["section", E], ["table", E], ["ul", E], ["rt", vt], ["rp", vt], ["tbody", At], ["tfoot", At]]), z0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Tt = new Set(["math", "svg"]), Nt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), _0 = /\s|\//, Nu = (function () {
    function Nu(u, t) {
        if (t === void 0) { t = {}; }
        var r, a, n, i, s, c;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = t.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((i = t.Tokenizer) !== null && i !== void 0 ? i : bu)(this.options, this), this.foreignContext = [!this.htmlMode], (c = (s = this.cbs).onparserinit) === null || c === void 0 || c.call(s, this);
    }
    Nu.prototype.ontext = function (u, t) { var r, a; var n = this.getSlice(u, t); this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = t; };
    Nu.prototype.ontextentity = function (u, t) { var r, a; this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, du(u)), this.startIndex = t; };
    Nu.prototype.isVoidElement = function (u) { return this.htmlMode && z0.has(u); };
    Nu.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Nu.prototype.emitOpenTag = function (u) { var t, r, a, n; this.openTagStart = this.startIndex, this.tagname = u; var i = this.htmlMode && j0.get(u); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && (Tt.has(u) ? this.foreignContext.unshift(!0) : Nt.has(u) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, u), this.cbs.onopentag && (this.attribs = {}); };
    Nu.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Nu.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    Nu.prototype.onclosetag = function (u, t) { var r, a, n, i, s, c, o, f; this.endIndex = t; var g = this.getSlice(u, t); if (this.lowerCaseTagNames && (g = g.toLowerCase()), this.htmlMode && (Tt.has(g) || Nt.has(g)) && this.foreignContext.shift(), this.isVoidElement(g))
        this.htmlMode && g === "br" && ((i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, "br"), (c = (s = this.cbs).onopentag) === null || c === void 0 || c.call(s, "br", {}, !0), (f = (o = this.cbs).onclosetag) === null || f === void 0 || f.call(o, "br", !1));
    else {
        var d = this.stack.indexOf(g);
        if (d !== -1)
            for (var h = 0; h <= d; h++) {
                var m = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, m, h !== d);
            }
        else
            this.htmlMode && g === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Nu.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    Nu.prototype.closeCurrentTag = function (u) { var t, r; var a = this.tagname; this.endOpenTag(u), this.stack[0] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !u), this.stack.shift()); };
    Nu.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Nu.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    Nu.prototype.onattribentity = function (u) { this.attribvalue += du(u); };
    Nu.prototype.onattribend = function (u, t) { var r, a; this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, u === V.Double ? '"' : u === V.Single ? "'" : u === V.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Nu.prototype.getInstructionName = function (u) { var t = u.search(_0), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Nu.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = t + 1; };
    Nu.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = t + 1; };
    Nu.prototype.oncomment = function (u, t, r) { var a, n, i, s; this.endIndex = t, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(u, t - r)), (s = (i = this.cbs).oncommentend) === null || s === void 0 || s.call(i), this.startIndex = t + 1; };
    Nu.prototype.oncdata = function (u, t, r) { var a, n, i, s, c, o, f, g, d, h; this.endIndex = t; var m = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, m), (o = (c = this.cbs).oncdataend) === null || o === void 0 || o.call(c)) : ((g = (f = this.cbs).oncomment) === null || g === void 0 || g.call(f, "[CDATA[".concat(m, "]]")), (h = (d = this.cbs).oncommentend) === null || h === void 0 || h.call(d)), this.startIndex = t + 1; };
    Nu.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    Nu.prototype.reset = function () { var u, t, r, a; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Nu.prototype.parseComplete = function (u) { this.reset(), this.end(u); };
    Nu.prototype.getSlice = function (u, t) { for (; u - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Nu.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Nu.prototype.write = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++); };
    Nu.prototype.end = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } u && this.write(u), this.ended = !0, this.tokenizer.end(); };
    Nu.prototype.pause = function () { this.tokenizer.pause(); };
    Nu.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Nu.prototype.parseChunk = function (u) { this.write(u); };
    Nu.prototype.done = function (u) { this.end(u); };
    return Nu;
}());
var zu = {};
xe(zu, { CDATA: function () { return Le; }, Comment: function () { return Ne; }, Directive: function () { return Te; }, Doctype: function () { return De; }, ElementType: function () { return y; }, Root: function () { return Ee; }, Script: function () { return ke; }, Style: function () { return Ce; }, Tag: function () { return qe; }, Text: function () { return ve; }, isTag: function () { return Ae; } });
var y;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(y || (y = {}));
function Ae(e) { return e.type === y.Tag || e.type === y.Script || e.type === y.Style; }
var Ee = y.Root, ve = y.Text, Te = y.Directive, Ne = y.Comment, ke = y.Script, Ce = y.Style, qe = y.Tag, Le = y.CDATA, De = y.Doctype;
var _u = (function () {
    function _u() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(_u.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_u.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_u.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    _u.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return kt(this, u);
    };
    return _u;
}()), ku = (function (_super) {
    __extends(ku, _super);
    function ku(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = u;
        return _this;
    }
    Object.defineProperty(ku.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (u) { this.data = u; },
        enumerable: false,
        configurable: true
    });
    return ku;
}(_u)), gu = (function (_super) {
    __extends(gu, _super);
    function gu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = y.Text;
        return _this;
    }
    Object.defineProperty(gu.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return gu;
}(ku)), Cu = (function (_super) {
    __extends(Cu, _super);
    function Cu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = y.Comment;
        return _this;
    }
    Object.defineProperty(Cu.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Cu;
}(ku)), qu = (function (_super) {
    __extends(qu, _super);
    function qu(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = y.Directive;
        return _this;
    }
    Object.defineProperty(qu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return qu;
}(ku)), Lu = (function (_super) {
    __extends(Lu, _super);
    function Lu(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(Lu.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return Lu;
}(_u)), Du = (function (_super) {
    __extends(Du, _super);
    function Du() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = y.CDATA;
        return _this;
    }
    Object.defineProperty(Du.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Du;
}(Lu)), mu = (function (_super) {
    __extends(mu, _super);
    function mu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = y.Root;
        return _this;
    }
    Object.defineProperty(mu.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return mu;
}(Lu)), Iu = (function (_super) {
    __extends(Iu, _super);
    function Iu(u, t, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = u === "script" ? y.Script : u === "style" ? y.Style : y.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = a;
        return _this;
    }
    Object.defineProperty(Iu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Iu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Iu;
}(Lu));
function A(e) { return Ae(e); }
function xu(e) { return e.type === y.CDATA; }
function _(e) { return e.type === y.Text; }
function Uu(e) { return e.type === y.Comment; }
function W0(e) { return e.type === y.Directive; }
function Ue(e) { return e.type === y.Root; }
function I(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function kt(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (_(e))
        t = new gu(e.data);
    else if (Uu(e))
        t = new Cu(e.data);
    else if (A(e)) {
        var r = u ? Ie(e.children) : [], a_1 = new Iu(e.name, z({}, e.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), e.namespace != null && (a_1.namespace = e.namespace), e["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = z({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = z({}, e["x-attribsPrefix"])), t = a_1;
    }
    else if (xu(e)) {
        var r = u ? Ie(e.children) : [], a_2 = new Du(r);
        r.forEach(function (n) { return n.parent = a_2; }), t = a_2;
    }
    else if (Ue(e)) {
        var r = u ? Ie(e.children) : [], a_3 = new mu(r);
        r.forEach(function (n) { return n.parent = a_3; }), e["x-mode"] && (a_3["x-mode"] = e["x-mode"]), t = a_3;
    }
    else if (W0(e)) {
        var r = new qu(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function Ie(e) { var u = e.map(function (t) { return kt(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var Ct = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, yu = (function () {
    function yu(u, t, r) {
        this.dom = [], this.root = new mu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Ct), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : Ct, this.elementCB = r != null ? r : null;
    }
    yu.prototype.onparserinit = function (u) { this.parser = u; };
    yu.prototype.onreset = function () { this.dom = [], this.root = new mu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    yu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    yu.prototype.onerror = function (u) { this.handleCallback(u); };
    yu.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    yu.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? y.Tag : void 0, a = new Iu(u, t, void 0, r); this.addNode(a), this.tagStack.push(a); };
    yu.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === y.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new gu(u);
        this.addNode(r), this.lastNode = r;
    } };
    yu.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === y.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new Cu(u); this.addNode(t), this.lastNode = t; };
    yu.prototype.oncommentend = function () { this.lastNode = null; };
    yu.prototype.oncdatastart = function () { var u = new gu(""), t = new Du([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    yu.prototype.oncdataend = function () { this.lastNode = null; };
    yu.prototype.onprocessinginstruction = function (u, t) { var r = new qu(u, t); this.addNode(r); };
    yu.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    yu.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return yu;
}());
var W = {};
xe(W, { DocumentPosition: function () { return G; }, append: function () { return dr; }, appendChild: function () { return fr; }, compareDocumentPosition: function () { return jt; }, existsOne: function () { return Vt; }, filter: function () { return Su; }, find: function () { return Yu; }, findAll: function () { return pr; }, findOne: function () { return Ku; }, findOneChild: function () { return br; }, getAttributeValue: function () { return sr; }, getChildren: function () { return Zu; }, getElementById: function () { return yr; }, getElements: function () { return xr; }, getElementsByClassName: function () { return wr; }, getElementsByTagName: function () { return su; }, getElementsByTagType: function () { return Sr; }, getFeed: function () { return _e; }, getInnerHTML: function () { return ir; }, getName: function () { return or; }, getOuterHTML: function () { return Ht; }, getParent: function () { return Pt; }, getSiblings: function () { return Ju; }, getText: function () { return Xu; }, hasAttrib: function () { return cr; }, hasChildren: function () { return I; }, innerText: function () { return He; }, isCDATA: function () { return xu; }, isComment: function () { return Uu; }, isDocument: function () { return Ue; }, isTag: function () { return A; }, isText: function () { return _; }, nextElementSibling: function () { return Pe; }, prepend: function () { return Ge; }, prependChild: function () { return hr; }, prevElementSibling: function () { return Ve; }, removeElement: function () { return J; }, removeSubsets: function () { return Ar; }, replaceElement: function () { return lr; }, testElement: function () { return mr; }, textContent: function () { return eu; }, uniqueSort: function () { return ze; } });
function Wu(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var $0 = new Map(Wu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Wu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Wu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Wu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Re = /["&'<>$\x80-\uFFFF]/g, qt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Lt = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function Ru(e) { var u = "", t = 0, r; for (; (r = Re.exec(e)) !== null;) {
    var a = r.index, n = e.charCodeAt(a), i = qt.get(n);
    i !== void 0 ? (u += e.substring(t, a) + i, t = a + 1) : (u += "".concat(e.substring(t, a), "&#x").concat(Lt(e, a).toString(16), ";"), t = Re.lastIndex += +((n & 64512) === 55296));
} return u + e.substr(t); }
function Oe(e, u) { return function (r) { var a, n = 0, i = ""; for (; a = e.exec(r);)
    n !== a.index && (i += r.substring(n, a.index)), i += u.get(a[0].charCodeAt(0)), n = a.index + 1; return i + r.substring(n); }; }
var Dt = Oe(/[&<>'"]/g, qt), $u = Oe(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Qu = Oe(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var It;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(It || (It = {}));
var Ut;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Ut || (Ut = {}));
var Mt = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Bt = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var X0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function Z0(e) { return e.replace(/"/g, "&quot;"); }
function J0(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? Z0 : u.xmlMode || u.encodeEntities !== "utf8" ? Ru : $u; return Object.keys(e).map(function (a) { var n, i; var s = (n = e[a]) !== null && n !== void 0 ? n : ""; return u.xmlMode === "foreign" && (a = (i = Bt.get(a)) !== null && i !== void 0 ? i : a), !u.emptyAttrs && !u.xmlMode && s === "" ? a : "".concat(a, "=\"").concat(r(s), "\""); }).join(" "); }
var Ft = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Fe(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var a = 0; a < t.length; a++)
        r += Y0(t[a], u);
    return r;
}
var wu = Fe;
function Y0(e, u) { switch (e.type) {
    case Ee: return Fe(e.children, u);
    case De:
    case Te: return tr(e);
    case Ne: return nr(e);
    case Le: return ar(e);
    case ke:
    case Ce:
    case qe: return er(e, u);
    case ve: return rr(e, u);
} }
var K0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), ur = new Set(["svg", "math"]);
function er(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = Mt.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && K0.has(e.parent.name) && (u = nu(z({}, u), { xmlMode: !1 }))), !u.xmlMode && ur.has(e.name) && (u = nu(z({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), a = J0(e.attribs, u); return a && (r += " ".concat(a)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && Ft.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Fe(e.children, u)), (u.xmlMode || !Ft.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function tr(e) { return "<".concat(e.data, ">"); }
function rr(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && X0.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? Ru(r) : Qu(r)), r; }
function ar(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function nr(e) { return "<!--".concat(e.data, "-->"); }
function Ht(e, u) { return wu(e, u); }
function ir(e, u) { return I(e) ? e.children.map(function (t) { return Ht(t, u); }).join("") : ""; }
function Xu(e) {
    return Array.isArray(e) ? e.map(Xu).join("") : A(e) ? e.name === "br" ? "\n" : Xu(e.children) : xu(e) ? Xu(e.children) : _(e) ? e.data : "";
}
function eu(e) { return Array.isArray(e) ? e.map(eu).join("") : I(e) && !Uu(e) ? eu(e.children) : _(e) ? e.data : ""; }
function He(e) { return Array.isArray(e) ? e.map(He).join("") : I(e) && (e.type === y.Tag || xu(e)) ? He(e.children) : _(e) ? e.data : ""; }
function Zu(e) { return I(e) ? e.children : []; }
function Pt(e) { return e.parent || null; }
function Ju(e) {
    var _a, _b;
    var u = Pt(e);
    if (u != null)
        return Zu(u);
    var t = [e], r = e.prev, a = e.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        t.push(a), _b = a, a = _b.next;
    return t;
}
function sr(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function cr(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function or(e) { return e.name; }
function Pe(e) {
    var _a;
    var u = e.next;
    for (; u !== null && !A(u);)
        (_a = u, u = _a.next);
    return u;
}
function Ve(e) {
    var _a;
    var u = e.prev;
    for (; u !== null && !A(u);)
        (_a = u, u = _a.prev);
    return u;
}
function J(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function lr(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var a = u.parent = e.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = u, e.parent = null;
} }
function fr(e, u) { if (J(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function dr(e, u) { J(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var a = t.children;
        a.splice(a.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function hr(e, u) { if (J(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function Ge(e, u) { J(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function Su(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Yu(e, Array.isArray(u) ? u : [u], t, r);
}
function Yu(e, u, t, r) { var a = [], n = [Array.isArray(u) ? u : [u]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (i.length === 1)
            return a;
        n.shift(), i.shift();
        continue;
    }
    var s = n[0][i[0]++];
    if (e(s) && (a.push(s), --r <= 0))
        return a;
    t && I(s) && s.children.length > 0 && (i.unshift(0), n.unshift(s.children));
} }
function br(e, u) { return u.find(e); }
function Ku(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (A(n) && e(n))
            return n;
        if (t && I(n) && n.children.length > 0) {
            var i = Ku(e, n.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function Vt(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return A(t) && e(t) || I(t) && Vt(e, t.children); }); }
function pr(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    A(n) && e(n) && t.push(n), I(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var ue = { tag_name: function (e) { return typeof e == "function" ? function (u) { return A(u) && e(u.name); } : e === "*" ? A : function (u) { return A(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return _(u) && e(u.data); } : function (u) { return _(u) && u.data === e; }; } };
function je(e, u) { return typeof u == "function" ? function (t) { return A(t) && u(t.attribs[e]); } : function (t) { return A(t) && t.attribs[e] === u; }; }
function gr(e, u) { return function (t) { return e(t) || u(t); }; }
function Gt(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(ue, t) ? ue[t](r) : je(t, r); }); return u.length === 0 ? null : u.reduce(gr); }
function mr(e, u) { var t = Gt(e); return t ? t(u) : !0; }
function xr(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = Gt(e);
    return a ? Su(a, u, t, r) : [];
}
function yr(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), Ku(je("id", e), u, t);
}
function su(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Su(ue.tag_name(e), u, t, r);
}
function wr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Su(je("class", e), u, t, r);
}
function Sr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Su(ue.tag_type(e), u, t, r);
}
function Ar(e) { var u = e.length; for (; --u >= 0;) {
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
var G;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(G || (G = {}));
function jt(e, u) { var t = [], r = []; if (e === u)
    return 0; var a = I(e) ? e : e.parent; for (; a;)
    t.unshift(a), a = a.parent; for (a = I(u) ? u : u.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(t.length, r.length), i = 0; for (; i < n && t[i] === r[i];)
    i++; if (i === 0)
    return G.DISCONNECTED; var s = t[i - 1], c = s.children, o = t[i], f = r[i]; return c.indexOf(o) > c.indexOf(f) ? s === u ? G.FOLLOWING | G.CONTAINED_BY : G.FOLLOWING : s === e ? G.PRECEDING | G.CONTAINS : G.PRECEDING; }
function ze(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = jt(u, t); return r & G.PRECEDING ? -1 : r & G.FOLLOWING ? 1 : 0; }), e; }
function _e(e) { var u = ee(kr, e); return u ? u.name === "feed" ? Er(u) : vr(u) : null; }
function Er(e) { var u; var t = e.children, r = { type: "atom", items: su("entry", t).map(function (i) { var s; var c = i.children, o = { media: zt(c) }; M(o, "id", "id", c), M(o, "title", "title", c); var f = (s = ee("link", c)) === null || s === void 0 ? void 0 : s.attribs.href; f && (o.link = f); var g = tu("summary", c) || tu("content", c); g && (o.description = g); var d = tu("updated", c); return d && (o.pubDate = new Date(d)), o; }) }; M(r, "id", "id", t), M(r, "title", "title", t); var a = (u = ee("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; a && (r.link = a), M(r, "description", "subtitle", t); var n = tu("updated", t); return n && (r.updated = new Date(n)), M(r, "author", "email", t, !0), r; }
function vr(e) { var u, t; var r = (t = (u = ee("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], a = { type: e.name.substr(0, 3), id: "", items: su("item", e.children).map(function (i) { var s = i.children, c = { media: zt(s) }; M(c, "id", "guid", s), M(c, "title", "title", s), M(c, "link", "link", s), M(c, "description", "description", s); var o = tu("pubDate", s) || tu("dc:date", s); return o && (c.pubDate = new Date(o)), c; }) }; M(a, "title", "title", r), M(a, "link", "link", r), M(a, "description", "description", r); var n = tu("lastBuildDate", r); return n && (a.updated = new Date(n)), M(a, "author", "managingEditor", r, !0), a; }
var Tr = ["url", "type", "lang"], Nr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function zt(e) { return su("media:content", e).map(function (u) {
    var e_4, _a, e_5, _b;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Tr_1 = __values(Tr), Tr_1_1 = Tr_1.next(); !Tr_1_1.done; Tr_1_1 = Tr_1.next()) {
            var a = Tr_1_1.value;
            t[a] && (r[a] = t[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Tr_1_1 && !Tr_1_1.done && (_a = Tr_1.return)) _a.call(Tr_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Nr_1 = __values(Nr), Nr_1_1 = Nr_1.next(); !Nr_1_1.done; Nr_1_1 = Nr_1.next()) {
            var a = Nr_1_1.value;
            t[a] && (r[a] = parseInt(t[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Nr_1_1 && !Nr_1_1.done && (_b = Nr_1.return)) _b.call(Nr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function ee(e, u) { return su(e, u, !0, 1)[0]; }
function tu(e, u, t) {
    if (t === void 0) { t = !1; }
    return eu(su(e, u, t, 1)).trim();
}
function M(e, u, t, r, a) {
    if (a === void 0) { a = !1; }
    var n = tu(t, r, a);
    n && (e[u] = n);
}
function kr(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function _t(e, u) { var t = new yu(void 0, u); return new Nu(t, u).end(e), t.root; }
var b;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(b || (b = {}));
var N;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(N || (N = {}));
var Wt = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Cr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, qr = new Map([[126, N.Element], [94, N.Start], [36, N.End], [42, N.Any], [33, N.Not], [124, N.Hyphen]]), Lr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function cu(e) { switch (e.type) {
    case b.Adjacent:
    case b.Child:
    case b.Descendant:
    case b.Parent:
    case b.Sibling:
    case b.ColumnCombinator: return !0;
    default: return !1;
} }
var Dr = new Set(["contains", "icontains"]);
function Ir(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Ou(e) { return e.replace(Cr, Ir); }
function We(e) { return e === 39 || e === 34; }
function $t(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function ru(e) { var u = [], t = Qt(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function Qt(e, u, t) { var r = []; function a(d) { var h = u.slice(t + d).match(Wt); if (!h)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _a = __read(h, 1), m = _a[0]; return t += d + m.length, Ou(m); } function n(d) { for (t += d; t < u.length && $t(u.charCodeAt(t));)
    t++; } function i() { t += 1; var d = t, h = 1; for (; h > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !s(t) ? h++ : u.charCodeAt(t) === 41 && !s(t) && h--; if (h)
    throw new Error("Parenthesis not matched"); return Ou(u.slice(d, t - 1)); } function s(d) { var h = 0; for (; u.charCodeAt(--d) === 92;)
    h++; return (h & 1) === 1; } function c() { if (r.length > 0 && cu(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function o(d) { if (r.length > 0 && r[r.length - 1].type === b.Descendant) {
    r[r.length - 1].type = d;
    return;
} c(), r.push({ type: d }); } function f(d, h) { r.push({ type: b.Attribute, name: d, action: h, value: a(1), namespace: null, ignoreCase: "quirks" }); } function g() { if (r.length && r[r.length - 1].type === b.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (n(0), u.length === t)
    return t; u: for (; t < u.length;) {
    var d = u.charCodeAt(t);
    switch (d) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== b.Descendant) && (c(), r.push({ type: b.Descendant })), n(1);
            break;
        }
        case 62: {
            o(b.Child), n(1);
            break;
        }
        case 60: {
            o(b.Parent), n(1);
            break;
        }
        case 126: {
            o(b.Sibling), n(1);
            break;
        }
        case 43: {
            o(b.Adjacent), n(1);
            break;
        }
        case 46: {
            f("class", N.Element);
            break;
        }
        case 35: {
            f("id", N.Equals);
            break;
        }
        case 91: {
            n(1);
            var h = void 0, m = null;
            u.charCodeAt(t) === 124 ? h = a(1) : u.startsWith("*|", t) ? (m = "*", h = a(2)) : (h = a(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (m = h, h = a(1))), n(0);
            var w = N.Exists, R = qr.get(u.charCodeAt(t));
            if (R) {
                if (w = R, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                u.charCodeAt(t) === 61 && (w = N.Equals, n(1));
            var F = "", Q = null;
            if (w !== "exists") {
                if (We(u.charCodeAt(t))) {
                    var v = u.charCodeAt(t), x = t + 1;
                    for (; x < u.length && (u.charCodeAt(x) !== v || s(x));)
                        x += 1;
                    if (u.charCodeAt(x) !== v)
                        throw new Error("Attribute value didn't end");
                    F = Ou(u.slice(t + 1, x)), t = x + 1;
                }
                else {
                    var v = t;
                    for (; t < u.length && (!$t(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    F = Ou(u.slice(v, t));
                }
                n(0);
                var k = u.charCodeAt(t) | 32;
                k === 115 ? (Q = !1, n(1)) : k === 105 && (Q = !0, n(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var S = { type: b.Attribute, name: h, action: w, value: F, namespace: m, ignoreCase: Q };
            r.push(S);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: b.PseudoElement, name: a(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? i() : null });
                continue;
            }
            var h = a(1).toLowerCase(), m = null;
            if (u.charCodeAt(t) === 40)
                if (Lr.has(h)) {
                    if (We(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(h, " cannot be quoted"));
                    if (m = [], t = Qt(m, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(h, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (m = i(), Dr.has(h)) {
                        var w = m.charCodeAt(0);
                        w === m.charCodeAt(m.length - 1) && We(w) && (m = m.slice(1, -1));
                    }
                    m = Ou(m);
                }
            r.push({ type: b.Pseudo, name: h, data: m });
            break;
        }
        case 44: {
            g(), r = [], n(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var w = u.indexOf("*/", t + 2);
                if (w < 0)
                    throw new Error("Comment was not terminated");
                t = w + 2, r.length === 0 && n(0);
                break;
            }
            var h = null, m = void 0;
            if (d === 42)
                t += 1, m = "*";
            else if (d === 124) {
                if (m = "", u.charCodeAt(t + 1) === 124) {
                    o(b.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (Wt.test(u.slice(t)))
                m = a(0);
            else
                break u;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (h = m, u.charCodeAt(t + 1) === 42 ? (m = "*", t += 2) : m = a(1)), r.push(m === "*" ? { type: b.Universal, namespace: h } : { type: b.Tag, name: m, namespace: h });
        }
    }
} return g(), t; }
var rt = iu(au(), 1);
var Y = iu(au(), 1);
var Zt = new Map([[b.Universal, 50], [b.Tag, 30], [b.Attribute, 1], [b.Pseudo, 0]]);
function Mu(e) { return !Zt.has(e.type); }
var Ur = new Map([[N.Exists, 10], [N.Equals, 8], [N.Not, 7], [N.Start, 6], [N.End, 6], [N.Any, 5]]);
function $e(e) { var u = e.map(Jt); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var a = t - 1; a >= 0 && r < u[a]; a--) {
            var n = e[a + 1];
            e[a + 1] = e[a], e[a] = n, u[a + 1] = u[a], u[a] = r;
        }
} }
function Jt(e) { var u, t; var r = (u = Zt.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === b.Attribute ? (r = (t = Ur.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === N.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === b.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(Jt)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var Bu = iu(au(), 1), Rr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Yt(e) { return e.replace(Rr, "\\$&"); }
var Or = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function ou(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && Or.has(e.name); }
var Kt = { equals: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value; return ou(u, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return s != null && s.length === n.length && s.toLowerCase() === n && e(i); }) : function (i) { return r.getAttributeValue(i, a) === n && e(i); }; }, hyphen: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value, i = n.length; return ou(u, t) ? (n = n.toLowerCase(), function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === i || o.charAt(i) === "-") && o.substr(0, i).toLowerCase() === n && e(c); }) : function (c) { var o = r.getAttributeValue(c, a); return o != null && (o.length === i || o.charAt(i) === "-") && o.substr(0, i) === n && e(c); }; }, element: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value; if (/\s/.test(n))
        return Bu.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(Yt(n), "(?:$|\\s)"), ou(u, t) ? "i" : ""); return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= n.length && i.test(o) && e(c); }; }, exists: function (e, _a, _b) {
        var u = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value, i = n.length; return i === 0 ? Bu.default.falseFunc : ou(u, t) ? (n = n.toLowerCase(), function (s) { var c = r.getAttributeValue(s, a); return c != null && c.length >= i && c.substr(0, i).toLowerCase() === n && e(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.startsWith(n)) && e(s); }; }, end: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value, i = -n.length; return i === 0 ? Bu.default.falseFunc : ou(u, t) ? (n = n.toLowerCase(), function (s) { var c; return ((c = r.getAttributeValue(s, a)) === null || c === void 0 ? void 0 : c.substr(i).toLowerCase()) === n && e(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, a)) === null || c === void 0) && c.endsWith(n)) && e(s); }; }, any: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value; if (n === "")
        return Bu.default.falseFunc; if (ou(u, t)) {
        var i_1 = new RegExp(Yt(n), "i");
        return function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= n.length && i_1.test(o) && e(c); };
    } return function (i) { var s; return !!(!((s = r.getAttributeValue(i, a)) === null || s === void 0) && s.includes(n)) && e(i); }; }, not: function (e, u, t) { var r = t.adapter, a = u.name, n = u.value; return n === "" ? function (i) { return !!r.getAttributeValue(i, a) && e(i); } : ou(u, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return (s == null || s.length !== n.length || s.toLowerCase() !== n) && e(i); }) : function (i) { return r.getAttributeValue(i, a) !== n && e(i); }; } };
var Mr = new Set([9, 10, 12, 13, 32]), u0 = 48, Br = 57;
function e0(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = n(), a = i(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (a != null ? a : 1), s(), u < e.length ? (r = n(), s(), a = i()) : r = a = 0), a === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * a]; function n() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function i() { var c = u, o = 0; for (; u < e.length && e.charCodeAt(u) >= u0 && e.charCodeAt(u) <= Br;)
    o = o * 10 + (e.charCodeAt(u) - u0), u++; return u === c ? null : o; } function s() { for (; u < e.length && Mr.has(e.charCodeAt(u));)
    u++; } }
var Qe = iu(au(), 1);
function t0(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return Qe.default.falseFunc; if (u === -1)
    return function (n) { return n <= t; }; if (u === 0)
    return function (n) { return n === t; }; if (u === 1)
    return t < 0 ? Qe.default.trueFunc : function (n) { return n >= t; }; var r = Math.abs(u), a = (t % r + r) % r; return u > 1 ? function (n) { return n >= t && n % r === a; } : function (n) { return n <= t && n % r === a; }; }
function Au(e) { return t0(e0(e)); }
var B = iu(au(), 1);
function te(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var Eu = { contains: function (e, u, _a) {
        var t = _a.adapter;
        return function (a) { return e(a) && t.getText(a).includes(u); };
    }, icontains: function (e, u, _a) {
        var t = _a.adapter;
        var r = u.toLowerCase();
        return function (n) { return e(n) && t.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Au(u);
        return a === B.default.falseFunc ? B.default.falseFunc : a === B.default.trueFunc ? te(e, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = 0; o < s.length && !r(i, s[o]); o++)
            t.isTag(s[o]) && c++; return a(c) && e(i); };
    }, "nth-last-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Au(u);
        return a === B.default.falseFunc ? B.default.falseFunc : a === B.default.trueFunc ? te(e, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = s.length - 1; o >= 0 && !r(i, s[o]); o--)
            t.isTag(s[o]) && c++; return a(c) && e(i); };
    }, "nth-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Au(u);
        return a === B.default.falseFunc ? B.default.falseFunc : a === B.default.trueFunc ? te(e, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = 0; o < s.length; o++) {
            var f = s[o];
            if (r(i, f))
                break;
            t.isTag(f) && t.getName(f) === t.getName(i) && c++;
        } return a(c) && e(i); };
    }, "nth-last-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Au(u);
        return a === B.default.falseFunc ? B.default.falseFunc : a === B.default.trueFunc ? te(e, t) : function (i) { var s = t.getSiblings(i), c = 0; for (var o = s.length - 1; o >= 0; o--) {
            var f = s[o];
            if (r(i, f))
                break;
            t.isTag(f) && t.getName(f) === t.getName(i) && c++;
        } return a(c) && e(i); };
    }, root: function (e, u, _a) {
        var t = _a.adapter;
        return function (r) { var a = t.getParent(r); return (a == null || !t.isTag(a)) && e(r); };
    }, scope: function (e, u, t, r) { var a = t.equals; return !r || r.length === 0 ? Eu.root(e, u, t) : r.length === 1 ? function (n) { return a(r[0], n) && e(n); } : function (n) { return r.includes(n) && e(n); }; }, hover: Xe("isHovered"), visited: Xe("isVisited"), active: Xe("isActive") };
function Xe(e) { return function (t, r, _a) {
    var a = _a.adapter;
    var n = a[e];
    return typeof n != "function" ? B.default.falseFunc : function (s) { return n(s) && t(s); };
}; }
var Fu = { empty: function (e, _a) {
        var u = _a.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (a) { return u.isTag(a); });
        return r != null && t(e, r);
    }, "last-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e);
        for (var a = r.length - 1; a >= 0; a--) {
            if (t(e, r[a]))
                return !0;
            if (u.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), a = u.getName(e);
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            if (t(e, i))
                return !0;
            if (u.isTag(i) && u.getName(i) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), a = u.getName(e);
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n];
            if (t(e, i))
                return !0;
            if (u.isTag(i) && u.getName(i) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (a) { return t(e, a) || !u.isTag(a) || u.getName(a) !== r; });
    }, "only-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function Ze(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var re = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var j = iu(au(), 1);
var Ke = {};
function ut(e, u) { return e === j.default.falseFunc ? j.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function et(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function Ye(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var Je = function (e, u, t, r, a) { var n = a(u, Ye(t), r); return n === j.default.trueFunc ? e : n === j.default.falseFunc ? j.default.falseFunc : function (i) { return n(i) && e(i); }; }, ae = { is: Je, matches: Je, where: Je, not: function (e, u, t, r, a) { var n = a(u, Ye(t), r); return n === j.default.falseFunc ? e : n === j.default.trueFunc ? j.default.falseFunc : function (i) { return !n(i) && e(i); }; }, has: function (e, u, t, r, a) { var n = t.adapter, i = Ye(t); i.relativeSelector = !0; var s = u.some(function (f) { return f.some(Mu); }) ? [Ke] : void 0, c = a(u, i, s); if (c === j.default.falseFunc)
        return j.default.falseFunc; var o = ut(c, n); if (s && c !== j.default.trueFunc) {
        var _a = c.shouldTestNextSiblings, f_1 = _a === void 0 ? !1 : _a;
        return function (g) { if (!e(g))
            return !1; s[0] = g; var d = n.getChildren(g), h = f_1 ? __spreadArray(__spreadArray([], __read(d), false), __read(et(g, n)), false) : d; return n.existsOne(o, h); };
    } return function (f) { return e(f) && n.existsOne(o, n.getChildren(f)); }; } };
function r0(e, u, t, r, a) { var n; var i = u.name, s = u.data; if (Array.isArray(s)) {
    if (!(i in ae))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(s, ")"));
    return ae[i](e, s, t, r, a);
} var c = (n = t.pseudos) === null || n === void 0 ? void 0 : n[i], o = typeof c == "string" ? c : re[i]; if (typeof o == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var f = ru(o);
    return ae.is(e, f, t, r, a);
} if (typeof c == "function")
    return Ze(c, i, s, 1), function (f) { return c(f, s) && e(f); }; if (i in Eu)
    return Eu[i](e, s, t, r); if (i in Fu) {
    var f_2 = Fu[i];
    return Ze(f_2, i, s, 2), function (g) { return f_2(g, t, s) && e(g); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function tt(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function a0(e, u, t, r, a) { var n = t.adapter, i = t.equals; switch (u.type) {
    case b.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case b.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case b.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), Kt[u.action](e, u, t);
    }
    case b.Pseudo: return r0(e, u, t, r, a);
    case b.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (o) { return n.getName(o) === s_1 && e(o); };
    }
    case b.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (o) { var f = o; for (; f = tt(f, n);)
                if (e(f))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (o) { var f = o; for (; f = tt(f, n);)
            if (!s_2.has(f)) {
                if (n.isTag(f) && e(f))
                    return !0;
                s_2.add(f);
            } return !1; };
    }
    case "_flexibleDescendant": return function (c) { var o = c; do
        if (e(o))
            return !0;
    while (o = tt(o, n)); return !1; };
    case b.Parent: return function (c) { return n.getChildren(c).some(function (o) { return n.isTag(o) && e(o); }); };
    case b.Child: return function (c) { var o = n.getParent(c); return o != null && n.isTag(o) && e(o); };
    case b.Sibling: return function (c) { var o = n.getSiblings(c); for (var f = 0; f < o.length; f++) {
        var g = o[f];
        if (i(c, g))
            break;
        if (n.isTag(g) && e(g))
            return !0;
    } return !1; };
    case b.Adjacent: return n.prevElementSibling ? function (c) { var o = n.prevElementSibling(c); return o != null && e(o); } : function (c) { var o = n.getSiblings(c), f; for (var g = 0; g < o.length; g++) {
        var d = o[g];
        if (i(c, d))
            break;
        n.isTag(d) && (f = d);
    } return !!f && e(f); };
    case b.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function n0(e, u, t) { var r = ne(e, u, t); return ut(r, u.adapter); }
function ne(e, u, t) { var r = typeof e == "string" ? ru(e) : e; return ie(r, u, t); }
function i0(e) { return e.type === b.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(i0); })); }
var Fr = { type: b.Descendant }, Hr = { type: "_flexibleDescendant" }, Pr = { type: b.Pseudo, name: "scope", data: null };
function Vr(e, _a, t) {
    var e_6, _b;
    var u = _a.adapter;
    var r = !!(t != null && t.every(function (a) { var n = u.isTag(a) && u.getParent(a); return a === Ke || n && u.isTag(n); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var a = e_7_1.value;
            if (!(a.length > 0 && Mu(a[0]) && a[0].type !== b.Descendant))
                if (r && !a.some(i0))
                    a.unshift(Fr);
                else
                    continue;
            a.unshift(Pr);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_b = e_7.return)) _b.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function ie(e, u, t) { var r; e.forEach($e), t = (r = u.context) !== null && r !== void 0 ? r : t; var a = Array.isArray(t), n = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    Vr(e, u, n);
else if (e.some(function (c) { return c.length > 0 && Mu(c[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, s = e.map(function (c) { if (c.length >= 2) {
    var _a = __read(c, 2), o = _a[0], f = _a[1];
    o.type !== b.Pseudo || o.name !== "scope" || (a && f.type === b.Descendant ? c[1] = Hr : (f.type === b.Adjacent || f.type === b.Sibling) && (i = !0));
} return Gr(c, u, n); }).reduce(jr, Y.default.falseFunc); return s.shouldTestNextSiblings = i, s; }
function Gr(e, u, t) { var r; return e.reduce(function (a, n) { return a === Y.default.falseFunc ? Y.default.falseFunc : a0(a, n, u, t, ie); }, (r = u.rootFunc) !== null && r !== void 0 ? r : Y.default.trueFunc); }
function jr(e, u) { return u === Y.default.falseFunc || e === Y.default.trueFunc ? e : e === Y.default.falseFunc || u === Y.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var s0 = function (e, u) { return e === u; }, zr = { adapter: W, equals: s0 };
function c0(e) { var u, t, r, a; var n = e != null ? e : zr; return (u = n.adapter) !== null && u !== void 0 || (n.adapter = W), (t = n.equals) !== null && t !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : s0), n; }
function at(e) { return function (t, r, a) { var n = c0(r); return e(t, n, a); }; }
var pi = at(n0), gi = at(ne), se = at(ie);
function o0(e) { return function (t, r, a) { var n = c0(a); typeof t != "function" && (t = ne(t, n, r)); var i = ce(r, n.adapter, t.shouldTestNextSiblings); return e(t, i, n); }; }
function ce(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = _r(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function _r(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var a = 0; a < r; a++) {
    var n = et(t[a], u);
    t.push.apply(t, __spreadArray([], __read(n), false));
} return t; }
var mi = o0(function (e, u, t) { return e === rt.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), xi = o0(function (e, u, t) { return e === rt.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var le = iu(au(), 1);
var Wr = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function vu(e) { return e.type !== "pseudo" ? !1 : Wr.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(vu); }) : !1; }
function l0(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
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
function f0(e) { for (; e.parent;)
    e = e.parent; return e; }
function oe(e) {
    var e_8, _a;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(vu) ? u.push(r) : t.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_a = e_9.return)) _a.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [t, u];
}
var $r = { type: b.Universal, namespace: null }, Qr = { type: b.Pseudo, name: "scope", data: null };
function st(e, u, t) {
    if (t === void 0) { t = {}; }
    return Xr([e], u, t);
}
function Xr(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _a = __read(oe(ru(u)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && e.some(se(r, t)) || a.some(function (n) { return d0(n, e, t).length > 0; });
}
function Zr(e, u, t, r) { var a = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < u.length ? [a < 0 ? u[u.length + a] : u[a]] : [];
    case "gt": return isFinite(a) ? u.slice(a + 1) : [];
    case "even": return u.filter(function (n, i) { return i % 2 === 0; });
    case "odd": return u.filter(function (n, i) { return i % 2 === 1; });
    case "not": {
        var n_1 = new Set(Jr(t, u, r));
        return u.filter(function (i) { return !n_1.has(i); });
    }
} }
function Jr(e, u, t) { if (u.length === 0)
    return []; var _a = __read(oe(e), 2), r = _a[0], a = _a[1], n; if (r.length) {
    var i = it(u, r, t);
    if (a.length === 0)
        return i;
    i.length && (n = new Set(i));
} for (var i = 0; i < a.length && (n == null ? void 0 : n.size) !== u.length; i++) {
    var s = a[i];
    if ((n ? u.filter(function (f) { return A(f) && !n.has(f); }) : u).length === 0)
        break;
    var o = d0(s, u, t);
    if (o.length)
        if (n)
            o.forEach(function (f) { return n.add(f); });
        else {
            if (i === a.length - 1)
                return o;
            n = new Set(o);
        }
} return typeof n != "undefined" ? n.size === u.length ? u : u.filter(function (i) { return n.has(i); }) : []; }
function d0(e, u, t) { var r; if (e.some(cu)) {
    var a = (r = t.root) !== null && r !== void 0 ? r : f0(u[0]), n = nu(z({}, t), { context: u, relativeSelector: !1 });
    return e.push(Qr), fe(a, e, n, !0, u.length);
} return fe(u, e, t, !1, u.length); }
function ct(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return h0(u, e);
    var _a = __read(oe(ru(e)), 2), a = _a[0], n = _a[1], i = n.map(function (s) { return fe(u, s, t, !0, r); });
    return a.length && i.push(nt(u, a, t, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : ze(i.reduce(function (s, c) { return __spreadArray(__spreadArray([], __read(s), false), __read(c), false); }));
}
function fe(e, u, t, r, a) { var n = u.findIndex(vu), i = u.slice(0, n), s = u[n], c = u.length - 1 === n ? a : 1 / 0, o = l0(s.name, s.data, c); if (o === 0)
    return []; var g = (i.length === 0 && !Array.isArray(e) ? Zu(e).filter(A) : i.length === 0 ? (Array.isArray(e) ? e : [e]).filter(A) : r || i.some(cu) ? nt(e, [i], t, o) : it(e, [i], t)).slice(0, o), d = Zr(s.name, g, s.data, t); if (d.length === 0 || u.length === n + 1)
    return d; var h = u.slice(n + 1), m = h.some(cu); if (m) {
    if (cu(h[0])) {
        var w = h[0].type;
        (w === b.Sibling || w === b.Adjacent) && (d = ce(d, W, !0)), h.unshift($r);
    }
    t = nu(z({}, t), { relativeSelector: !1, rootFunc: function (w) { return d.includes(w); } });
}
else
    t.rootFunc && t.rootFunc !== le.trueFunc && (t = nu(z({}, t), { rootFunc: le.trueFunc })); return h.some(vu) ? fe(d, h, t, !1, a) : m ? nt(d, [h], t, a) : it(d, [h], t); }
function nt(e, u, t, r) { var a = se(u, t, e); return h0(e, a, r); }
function h0(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = ce(e, W, u.shouldTestNextSiblings);
    return Yu(function (a) { return A(a) && u(a); }, r, !0, t);
}
function it(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(A); if (r.length === 0)
    return r; var a = se(u, t); return a === le.trueFunc ? r : r.filter(a); }
var Yr = function (e, u, t) { return ct(e, u, t); }, m0 = function (e, u, t) { return ct(e, u, t, 1)[0] || null; }, x0 = /[\s ]+/g, b0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Kr = { containsOwn: function (e, u) { return lt(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return p0(u).test(ot(e)); }, matchesOwn: function (e, u) { return p0(u).test(lt(e)); }, containsData: function (e, u) { return eu(e).includes(u); }, "contains-ci": function (e, u) { return ot(e).toLowerCase().includes(String(u).toLowerCase()); } };
function p0(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var de = { pseudos: Kr, xmlMode: !1, lowerCaseTags: !0 };
function he(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function ot(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? u += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? u += " " : a.type === "tag" && (b0.has(a.name) && (u += " "), t(a), b0.has(a.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(x0, " ").trim(); }
function lt(e) {
    var e_11, _a;
    var u = "";
    try {
        for (var _b = __values(e.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (u += t.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return u.replace(x0, " ").trim();
}
function y0(e, u) { if (!u)
    return ""; try {
    return new URL(u, e || void 0).href;
}
catch (t) {
    return e ? "" : u;
} }
var lu = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return $.of(Yr(he(u), this.node, de), this.doc); };
    e.prototype.selectFirst = function (u) { var t = m0(he(u), this.node, de); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return st(this.node, he(u), de); };
    e.prototype.text = function () { return ot(this.node); };
    e.prototype.ownText = function () { return lt(this.node); };
    e.prototype.wholeText = function () { return eu(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return u.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (u) { return wu(u, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return wu(this.node, { decodeEntities: !1 }); };
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
        return y0(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
    e.prototype.absUrl = function (u) { return this.attr("abs:" + u); };
    e.prototype.hasAttr = function (u) { return !!(this.node.attribs && (u.startsWith("abs:") ? u.slice(4) : u) in this.node.attribs); };
    e.prototype.removeAttr = function (u) { return this.node.attribs && delete this.node.attribs[u], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _a;
        var u = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (u[t.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return u;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var u = this.node.parent; return u && u.type !== "root" ? new e(u, this.doc) : null; };
    e.prototype.parents = function () { var u = [], t = this.node.parent; for (; t && t.type !== "root";)
        u.push(t), t = t.parent; return $.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && st(t, he(u), de))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return $.of((this.node.children || []).filter(A), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(A)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(A).length; };
    e.prototype.nextElementSibling = function () { var u = Pe(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = Ve(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return $.of(Ju(this.node).filter(function (u) { return u !== _this.node && A(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return Ju(this.node).filter(A).indexOf(this.node); };
    e.prototype.getElementsByTag = function (u) { return this.select(u); };
    e.prototype.getElementsByClass = function (u) { return this.select("." + u); };
    e.prototype.getElementById = function (u) { return this.selectFirst("#" + u); };
    e.prototype.remove = function () { return J(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return ({ text: function () { return u.data; }, toString: function () { return u.data; } }); }); };
    e.prototype.title = function () { var u = this.selectFirst("title"); return u ? u.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), dt = Object.create(Array.prototype), $ = { of: ft, prototype: dt };
function ft(e, u) {
    var e_13, _a;
    var t = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof lu ? r : new lu(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, dt), t;
}
var g0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return $.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, u) {
        var e_14, _a;
        if (u !== void 0)
            return this.forEach(function (t) { return t.attr(e, u); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(e))
                    return t.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (u) { return u.hasAttr(e); }).map(function (u) { return u.attr(e); }); }, hasAttr: function (e) { return this.some(function (u) { return u.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (u) { return u.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _a, e_16, _b;
        var u = ft([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var a = _g.value;
                        t.has(a.node) || (t.add(a.node), u.push(a));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return u;
    }, selectFirst: function (e) {
        var e_17, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                var t = u.selectFirst(e);
                if (t)
                    return t;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return $.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = ft([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                e.push.apply(e, __spreadArray([], __read(u.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return $.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return $.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(g0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(dt, e, { value: g0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function be(e, u) { var t = _t(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new lu(t, null); r.doc = r, r.__base = u || ""; var a = m0("base[href]", t); return a && a.attribs.href && (r.__base = y0(r.__base, a.attribs.href)), r; }
function w0(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = be(e), a = function (n) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((n.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                J(i);
                continue;
            }
            if (i.type === "tag" && (a(i), !t.has(i.name))) {
                var s = (i.children || []).slice();
                try {
                    for (var s_3 = (e_20 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var c = s_3_1.value;
                        Ge(i, c);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                J(i);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return a(r.node), wu(r.node.children, { decodeEntities: !1 }); }
var pe = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function ua(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return btoa(u); }
function S0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
function ea(e) { var u = ""; for (var t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r < 128) {
        u += e[t];
        continue;
    }
    if (r === 128) {
        u += "€";
        continue;
    }
    var a = e.charCodeAt(t + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (u += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], t++) : u += "�";
} return u; }
var ht = (function () {
    function ht(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    ht.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    ht.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return u || (u = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), u && /^(gbk|gb2312|gb18030)$/i.test(String(u)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? ea(t) : t; };
    ht.prototype.string = function (u) { return this.text(u); };
    ht.prototype.html = function (u) { return be(this.text(u), this.url); };
    ht.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    ht.prototype.base64 = function () { return ua(this._raw.bytes || S0(this.text())); };
    ht.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || S0(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return ht;
}());
function ta(e) {
    var e_21, _a;
    var u = {};
    if (!e)
        return u;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (t, r) { u[r] = t; }), u;
    try {
        for (var _b = __values(Object.keys(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            u[t] = String(e[t]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return u;
}
function E0(e, u) { var t = function (i) { return ({ getItem: function (s) { var c = e.storageGet(i + s); return c == null ? null : c; }, setItem: function (s, c) { return e.storageSet(i + s, c == null ? null : String(c)); }, removeItem: function (s) { return e.storageSet(i + s, null); }, clear: function () { return e.storageClear && e.storageClear(i); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (i, s) { return ({ code: 0, data: i === void 0 ? null : i, data2: s === void 0 ? null : s }); }, error: function (i) { return ({ code: 1, data: i == null ? "" : String(i) }); } }, a.fetch = function (s, c) {
    return __awaiter(this, void 0, void 0, function () { var o, w, f, g, d, w, h, m, w_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c = c || {};
                o = String(s);
                if (c.queries) {
                    w = Object.entries(c.queries).map(function (_a) {
                        var _b = __read(_a, 2), R = _b[0], F = _b[1];
                        return encodeURIComponent(R) + "=" + encodeURIComponent(F);
                    }).join("&");
                    w && (o += (o.includes("?") ? "&" : "?") + w);
                }
                f = Object.assign({ "User-Agent": pe }, ta(c.headers)), g = e.storageGet(r);
                g && !Object.keys(f).some(function (w) { return w.toLowerCase() === "cookie"; }) && (f.Cookie = g);
                d = c.body;
                if (d != null && typeof d == "object") {
                    w = Object.keys(f).find(function (R) { return R.toLowerCase() === "content-type"; });
                    w && /json/i.test(f[w]) ? d = JSON.stringify(d) : (d = Object.entries(d).map(function (_a) {
                        var _b = __read(_a, 2), R = _b[0], F = _b[1];
                        return encodeURIComponent(R) + "=" + encodeURIComponent(F);
                    }).join("&"), w || (f["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                h = { url: o, method: (c.method || (d != null ? "POST" : "GET")).toUpperCase(), headers: f, body: d, timeout: c.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(h)];
            case 2:
                m = _a.sent();
                return [3, 4];
            case 3:
                w_1 = _a.sent();
                m = { status: 0, url: o, headers: {}, text: "", error: String(w_1 && w_1.message || w_1) };
                return [3, 4];
            case 4: return [2, new ht(m, h)];
        }
    }); });
}, a.Http = { get: function (i) { return A0(a, "GET", i); }, post: function (i) { return A0(a, "POST", i); } }, a.Html = { parse: function (i, s) { return be(i, s || ""); }, clean: function (i, s) { return w0(i, s); } }, a.localStorage = t("ls:"), a.cacheStorage = t("cs:"), a.localConfig = { getItem: function (i) { return e.config(i); } }, a.localCookie = { setCookie: function (i) { e.storageSet(r, String(i).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, a.sleep = function (i) { return new Promise(function (s) { return setTimeout(s, Math.min(Number(i) || 0, 1e4)); }); }; var n = function () {
    var i = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        i[_i] = arguments[_i];
    }
    try {
        e.log && e.log(i.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.Console = a.console, a.log = n, a.UserAgent = { system: function () { return pe; }, chrome: function () { return pe; }, android: function () { return pe; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = $, a.Element = lu, a.__meta = u, a; }
function A0(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, i) { return r.headers[n] = i, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return a; }
function fu(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof URL == "undefined")
    return __abs(e, u); try {
    return new URL(u, e).href;
}
catch (t) {
    return u;
} }
var T = function (e) { return e == null ? "" : String(e); }, ra = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, ge = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, a = u.host;
        this.meta = t, this.host = a, this.env = u.env || E0(a, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return T(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (u) { return !!this.scripts[u]; };
    class_1.prototype.run = function (u) {
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
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        a = function (s) { var c = _this.host.config(s); return c == null ? (_this.meta.configDefaults || {})[s] : c; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _a.sent();
                        if (typeof n != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(t.map(T)), false))];
                    case 2:
                        i = _a.sent();
                        if (!i)
                            throw new Error(u + ": empty result");
                        if (i.code !== 0)
                            throw new Error(u + ": " + T(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return T(u).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var u, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    u = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (u = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!u.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    u = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = u.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (u, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, i, s, c;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = u + "|" + t;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, n)];
                    case 1:
                        i = _a.sent(), s = T(i.data2);
                        s && (this.tokens[a + "|" + (r + 1)] = s);
                        c = (i.data || []).filter(Boolean).map(function (o) { return ({ name: T(o.name).trim(), link: fu(o.host || _this.base + "/", o.link), cover: fu(o.host || _this.base + "/", o.cover), description: T(o.description), tag: T(o.tag) }); }).filter(function (o) { return o.name && o.link; });
                        return [2, { items: c, hasNext: !!s && c.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), T(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), T(r.input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.search = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", u, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", u)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: T(t.name).trim(), cover: fu(t.host || this.base + "/", t.cover), author: T(t.author).trim(), description: v0(T(t.description)), detail: v0(T(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: ra(r.map(function (a) { return String(a).trim(); })), url: u, format: T(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, a, _a, _b, e_22_1, _c;
            var e_22, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", u)];
                    case 1:
                        r = (_f.sent()).data || [u];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", T(a))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _f.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", u)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: T(r.name).trim() || "#" + (a + 1), url: fu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", u)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [u];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6: return [2, (_a, typeof t == "string" && (t = t.split(/[\n,]+/)), (t || []).map(function (r) { return fu(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
                }
            });
        });
    };
    class_1.prototype.content = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", u)];
                case 1:
                    t = _a.sent();
                    return [2, { html: T(t.data), title: T(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, a, r, t_3, t_3_1, a, n, i, i_2, i_2_1, s, n_2, e_23_1;
            var e_23, _a, e_24, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: u }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        a = (_c.sent()).data;
                        Array.isArray(a) && a.length && (t = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: T(n.title || n.name || "Server"), data: T(n.data || n.url || n.link) }; }));
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
                            for (i_2 = (e_24 = void 0, __values(i)), i_2_1 = i_2.next(); !i_2_1.done; i_2_1 = i_2.next()) {
                                s = i_2_1.value;
                                !s || !s.data || s.type !== "webview" && r.push({ url: fu(s.host || this.base + "/", s.data), quality: a.title + (s.quality ? " " + s.quality : ""), headers: s.headers || { Referer: this.base + "/" }, subtitles: (s.subtitles || (s.subtitle ? [{ data: s.subtitle, label: "Sub" }] : [])).map(function (c) { return ({ file: fu(_this.base + "/", c.data || c.file), label: T(c.label || c.language || "Sub") }); }), mimeType: T(s.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (i_2_1 && !i_2_1.done && (_b = i_2.return)) _b.call(i_2);
                            }
                            finally { if (e_24) throw e_24.error; }
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
                        e_23_1 = _c.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
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
function v0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var K = { id: "52shukubyquocbao", name: "52shuku", source: "https://www.52shuku.net", type: "novel", locale: "zh_CN", nsfw: !1, version: 12, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.52shukubyquocbao", lnIcon: "", lnVersion: "1.0.12" }, T0 = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, n.success([{ title: "言情小说", input: S + "/yanqing/", script: "gen.js" }])];
                                        }); });
                                    } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (v) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k(v) {
                                        return __awaiter(this, void 0, void 0, function () { var x, P, U, O, C; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    v = v.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, S);
                                                    return [4, t(v)];
                                                case 1:
                                                    x = _a.sent();
                                                    if (x.ok) {
                                                        P = x.html(), U = P.select("h1.article-title").text().trim(), O = "";
                                                        U.includes("_") && (O = U.split(/[_ ]+/).pop(), U = U.replace("_" + O, ""), O.includes("【") && (O = O.split("【")[0]));
                                                        C = P.select("article.article-content p").get(1);
                                                        return [2, (C.html().includes("　　") && (C = C.html().replace(/　　/g, "<br>")), n.success({ name: U, author: O, description: C, detail: "作者： " + O + "<br>" + P.select(".meta time.muted").text(), host: S }))];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (v) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, n.success([{ title: "综漫同人", input: S + "/bl/", script: "gen.js" }, { title: "GL百合", input: S + "/gl/", script: "gen.js" }, { title: "古架耽美", input: S + "/jiakong/", script: "gen.js" }, { title: "穿越耽美", input: S + "/chongsheng/", script: "gen.js" }, { title: "现代耽美", input: S + "/xiandaidushi/", script: "gen.js" }, { title: "现代都市_男频", input: S + "/xiandai/", script: "gen.js" }, { title: "武侠玄幻_男频", input: S + "/wuxia/", script: "gen.js" }, { title: "穿越重生_男频", input: S + "/chuanyue/", script: "gen.js" }, { title: "架空历史_男频", input: S + "/jiakonglishi/", script: "gen.js" }, { title: "网游竞技_男频", input: S + "/wangyou/", script: "gen.js" }, { title: "悬疑推理小说", input: S + "/tuili/", script: "gen.js" }, { title: "恐怖灵异小说", input: S + "/kongbulingyi/", script: "gen.js" }, { title: "文学著作", input: S + "/wenxue/", script: "gen.js" }])];
                                        }); });
                                    } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (v) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k(v) {
                                        return __awaiter(this, void 0, void 0, function () { var x, U, O, C, P; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(v)];
                                                case 1:
                                                    x = _a.sent();
                                                    if (x.ok) {
                                                        U = x.html().select(".article-content ul.list.clearfix li.mulu a"), O = [];
                                                        for (C = 0; C < U.size(); C++) {
                                                            P = U.get(C);
                                                            O.push({ name: P.select("a").text(), url: P.attr("href"), host: S });
                                                        }
                                                        return [2, n.success(O)];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (v) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k(x) {
                                        return __awaiter(this, void 0, void 0, function () { var P, X, U, O, C_1; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    x = x.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, S);
                                                    return [4, t(x)];
                                                case 1:
                                                    P = _a.sent();
                                                    if (P.ok) {
                                                        X = P.html();
                                                        X.select("#lineCorrect").remove(), X.select("span").remove();
                                                        U = X.select(".article-content p").last();
                                                        U && /如果觉得52书库不错/.test(U.text()) && U.remove();
                                                        O = X.select(".article-content p"), C_1 = "";
                                                        return [2, (O.forEach(function (Pu) { C_1 = C_1 + Pu.text() + "<br>"; }), C_1 = C_1.replace("Tips：如果觉得52书库不错，记得收藏网址 www.52shuku.vip 或推荐给朋友哦~拜托啦", ""), n.success(C_1))];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } function v(x) { return x = x.replace(/<\/?p>/g, ""), x = x.replace(/<a[^>]*>([^<]+)<\/a>/g, ""), x = x.replace(/\n/g, "<br>"), x = x.replace(/(<br>\s*){2,}/gm, "<br>"), x = x.replace(/<!--[^>]*-->/gm, ""), x = x.replace(/&(nbsp|amp|quot|lt|gt);/g, ""), x = x.replace(/(^(\s*<br>\s*)+|(<br>\s*)+$)/gm, ""), x.trim(); } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (x) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, gen: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, c, o, f, g, d, h, m, w, R, F, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function k(v, x) {
                                        return __awaiter(this, void 0, void 0, function () { var P, X, U_1, O; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    v.slice(-1) === "/" && (v = v.slice(0, -1)), x || (x = "1"), x !== "1" && (v = v + "/index_" + x + ".html"), d.log(v);
                                                    return [4, t(v)];
                                                case 1:
                                                    P = _a.sent();
                                                    if (P.ok) {
                                                        X = P.html(), U_1 = [], O = X.select("a:contains(下一页)").first().attr("href").replace(".html", "").split("index_")[1];
                                                        return [2, (X.select(".content-wrap article.excerpt").forEach(function (C) { var Pu = C.select("a").first().attr("href"), gt = C.select(".auth-span").first().text(); Pu.includes(".html") && gt && U_1.push({ name: C.select("a").first().text(), link: Pu, description: gt, host: S }); }), n.success(U_1, O))];
                                                    }
                                                    return [2, null];
                                            }
                                        }); });
                                    } var S; return __generator(this, function (_a) {
                                        S = "https://www.52shuku.net";
                                        try {
                                            CONFIG_URL && (S = CONFIG_URL);
                                        }
                                        catch (v) { }
                                        return [2, typeof k == "function" ? k : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function N0(e) { return new ge({ meta: K, scripts: T0, host: e }); }
var aa = require("@libs/fetch").fetchApi, Hu = null;
try {
    Hu = require("@libs/storage");
}
catch (e) {
    Hu = null;
}
var bt = {}, me = Hu && Hu.storage ? Hu.storage : { get: function (e) { return bt[e]; }, set: function (e, u) { bt[e] = u; }, delete: function (e) { delete bt[e]; } }, pt = (function () {
    function class_2() {
        var _this = this;
        this.id = K.lnId, this.name = K.name, this.icon = K.lnIcon, this.site = K.source, this.version = K.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = N0({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, aa(u.url, t)];
                        case 1:
                            r = _b.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, i) { a[i] = n; });
                            }
                            catch (n) { }
                            _a = { status: r.status, url: r.url || u.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (u) { var t = me.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? me.delete && me.delete("vb_" + u) : me.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
    }
    class_2.prototype.popularNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(u)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(u)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_a.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(u)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(u)];
                case 2:
                    r = _a.sent();
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(u)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : K.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), na = new pt;
