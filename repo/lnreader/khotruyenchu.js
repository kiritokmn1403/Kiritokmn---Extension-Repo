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
var z0 = Object.create;
var ju = Object.defineProperty, $0 = Object.defineProperties, W0 = Object.getOwnPropertyDescriptor, Q0 = Object.getOwnPropertyDescriptors, X0 = Object.getOwnPropertyNames, Ot = Object.getOwnPropertySymbols, Z0 = Object.getPrototypeOf, Mt = Object.prototype.hasOwnProperty, _0 = Object.prototype.propertyIsEnumerable;
var Rt = function (u, e, t) { return e in u ? ju(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, nu = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        Mt.call(e, t) && Rt(u, t, e[t]);
    if (Ot)
        try {
            for (var _b = __values(Ot(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                _0.call(e, t) && Rt(u, t, e[t]);
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
}, Su = function (u, e) { return $0(u, Q0(e)); };
var K0 = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, Re = function (u, e) { for (var t in e)
    ju(u, t, { get: e[t], enumerable: !0 }); }, Bt = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (a) {
            !Mt.call(u, a) && a !== t && ju(u, a, { get: function () { return e[a]; }, enumerable: !(r = W0(e, a)) || r.enumerable });
        };
        try {
            for (var _b = __values(X0(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
var vu = function (u, e, t) { return (t = u != null ? z0(Z0(u)) : {}, Bt(e || !u || !u.__esModule ? ju(t, "default", { value: u, enumerable: !0 }) : t, u)); }, Y0 = function (u) { return Bt(ju({}, "__esModule", { value: !0 }), u); };
var wu = K0(function (Yn, d0) { d0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var va = {};
Re(va, { default: function () { return Sa; } });
module.exports = Y0(va);
var ae = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var ne = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var Me, J0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), qu = (Me = String.fromCodePoint) !== null && Me !== void 0 ? Me : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function Be(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = J0.get(u)) !== null && e !== void 0 ? e : u; }
var H;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(H || (H = {}));
var ur = 32, gu;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(gu || (gu = {}));
function Pe(u) { return u >= H.ZERO && u <= H.NINE; }
function er(u) { return u >= H.UPPER_A && u <= H.UPPER_F || u >= H.LOWER_A && u <= H.LOWER_F; }
function tr(u) { return u >= H.UPPER_A && u <= H.UPPER_Z || u >= H.LOWER_A && u <= H.LOWER_Z || Pe(u); }
function rr(u) { return u === H.EQUALS || tr(u); }
var F;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(F || (F = {}));
var Y;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })(Y || (Y = {}));
var Iu = (function () {
    function Iu(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = F.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Y.Strict;
    }
    Iu.prototype.startEntity = function (e) { this.decodeMode = e, this.state = F.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Iu.prototype.write = function (e, t) { switch (this.state) {
        case F.EntityStart: return e.charCodeAt(t) === H.NUM ? (this.state = F.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = F.NamedEntity, this.stateNamedEntity(e, t));
        case F.NumericStart: return this.stateNumericStart(e, t);
        case F.NumericDecimal: return this.stateNumericDecimal(e, t);
        case F.NumericHex: return this.stateNumericHex(e, t);
        case F.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    Iu.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | ur) === H.LOWER_X ? (this.state = F.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = F.NumericDecimal, this.stateNumericDecimal(e, t)); };
    Iu.prototype.addToNumericResult = function (e, t, r, a) { if (t !== r) {
        var n = r - t;
        this.result = this.result * Math.pow(a, n) + parseInt(e.substr(t, n), a), this.consumed += n;
    } };
    Iu.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (Pe(a) || er(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    Iu.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var a = e.charCodeAt(t);
        if (Pe(a))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    Iu.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === H.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === Y.Strict)
        return 0; return this.emitCodePoint(Be(this.result), this.consumed), this.errors && (e !== H.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Iu.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & gu.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var i = e.charCodeAt(t);
        if (this.treeIndex = ar(r, a, this.treeIndex + Math.max(1, n), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === Y.Attribute && (n === 0 || rr(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & gu.VALUE_LENGTH) >> 14, n !== 0) {
            if (i === H.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== Y.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Iu.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, a = (r[t] & gu.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, a, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Iu.prototype.emitNamedEntityData = function (e, t, r) { var a = this.decodeTree; return this.emitCodePoint(t === 1 ? a[e] & ~gu.VALUE_LENGTH : a[e + 1], r), t === 3 && this.emitCodePoint(a[e + 2], r), r; };
    Iu.prototype.end = function () { var e; switch (this.state) {
        case F.NamedEntity: return this.result !== 0 && (this.decodeMode !== Y.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case F.NumericDecimal: return this.emitNumericEntity(0, 2);
        case F.NumericHex: return this.emitNumericEntity(0, 3);
        case F.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case F.EntityStart: return 0;
    } };
    return Iu;
}());
function Pt(u) { var e = "", t = new Iu(u, function (r) { return e += qu(r); }); return function (a, n) { var i = 0, s = 0; for (; (s = a.indexOf("&", s)) >= 0;) {
    e += a.slice(i, s), t.startEntity(n);
    var l = t.write(a, s + 1);
    if (l < 0) {
        i = s + t.end();
        break;
    }
    i = s + l, s = l === 0 ? i + 1 : i;
} var o = e + a.slice(i); return e = "", o; }; }
function ar(u, e, t, r) { var a = (e & gu.BRANCH_LENGTH) >> 7, n = e & gu.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? t : -1; if (n) {
    var o = r - n;
    return o < 0 || o >= a ? -1 : u[t + o] - 1;
} var i = t, s = i + a - 1; for (; i <= s;) {
    var o = i + s >>> 1, l = u[o];
    if (l < r)
        i = o + 1;
    else if (l > r)
        s = o - 1;
    else
        return u[o + a];
} return -1; }
var La = Pt(ae), Da = Pt(ne);
var w;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(w || (w = {}));
var d;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(d || (d = {}));
function ou(u) { return u === w.Space || u === w.NewLine || u === w.Tab || u === w.FormFeed || u === w.CarriageReturn; }
function ie(u) { return u === w.Slash || u === w.Gt || ou(u); }
function nr(u) { return u >= w.LowerA && u <= w.LowerZ || u >= w.UpperA && u <= w.UpperZ; }
var uu;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(uu || (uu = {}));
var j = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Lu = (function () {
    function Lu(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = d.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = d.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new Iu(e ? ne : ae, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    Lu.prototype.reset = function () { this.state = d.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = d.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Lu.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Lu.prototype.end = function () { this.running && this.finish(); };
    Lu.prototype.pause = function () { this.running = !1; };
    Lu.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Lu.prototype.stateText = function (e) { e === w.Lt || !this.decodeEntities && this.fastForwardTo(w.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = d.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Lu.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? ie(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = d.InTagName, this.stateInTagName(e); };
    Lu.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === w.Gt || ou(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === j.TitleEnd ? this.decodeEntities && e === w.Amp && this.startEntity() : this.fastForwardTo(w.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === w.Lt); };
    Lu.prototype.stateCDATASequence = function (e) { e === j.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === j.Cdata.length && (this.state = d.InCommentLike, this.currentSequence = j.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = d.InDeclaration, this.stateInDeclaration(e)); };
    Lu.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Lu.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === j.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = d.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Lu.prototype.isTagStartChar = function (e) { return this.xmlMode ? !ie(e) : nr(e); };
    Lu.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = d.SpecialStartSequence; };
    Lu.prototype.stateBeforeTagName = function (e) { if (e === w.ExclamationMark)
        this.state = d.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === w.Questionmark)
        this.state = d.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = d.InTagName : t === j.ScriptEnd[2] ? this.state = d.BeforeSpecialS : t === j.TitleEnd[2] ? this.state = d.BeforeSpecialT : this.state = d.InTagName;
    }
    else
        e === w.Slash ? this.state = d.BeforeClosingTagName : (this.state = d.Text, this.stateText(e)); };
    Lu.prototype.stateInTagName = function (e) { ie(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Lu.prototype.stateBeforeClosingTagName = function (e) { ou(e) || (e === w.Gt ? this.state = d.Text : (this.state = this.isTagStartChar(e) ? d.InClosingTagName : d.InSpecialComment, this.sectionStart = this.index)); };
    Lu.prototype.stateInClosingTagName = function (e) { (e === w.Gt || ou(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = d.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Lu.prototype.stateAfterClosingTagName = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.state = d.Text, this.sectionStart = this.index + 1); };
    Lu.prototype.stateBeforeAttributeName = function (e) { e === w.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = d.InSpecialTag, this.sequenceIndex = 0) : this.state = d.Text, this.sectionStart = this.index + 1) : e === w.Slash ? this.state = d.InSelfClosingTag : ou(e) || (this.state = d.InAttributeName, this.sectionStart = this.index); };
    Lu.prototype.stateInSelfClosingTag = function (e) { e === w.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = d.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ou(e) || (this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Lu.prototype.stateInAttributeName = function (e) { (e === w.Eq || ie(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = d.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Lu.prototype.stateAfterAttributeName = function (e) { e === w.Eq ? this.state = d.BeforeAttributeValue : e === w.Slash || e === w.Gt ? (this.cbs.onattribend(uu.NoValue, this.sectionStart), this.sectionStart = -1, this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(e)) : ou(e) || (this.cbs.onattribend(uu.NoValue, this.sectionStart), this.state = d.InAttributeName, this.sectionStart = this.index); };
    Lu.prototype.stateBeforeAttributeValue = function (e) { e === w.DoubleQuote ? (this.state = d.InAttributeValueDq, this.sectionStart = this.index + 1) : e === w.SingleQuote ? (this.state = d.InAttributeValueSq, this.sectionStart = this.index + 1) : ou(e) || (this.sectionStart = this.index, this.state = d.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Lu.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === w.DoubleQuote ? uu.Double : uu.Single, this.index + 1), this.state = d.BeforeAttributeName) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Lu.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, w.DoubleQuote); };
    Lu.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, w.SingleQuote); };
    Lu.prototype.stateInAttributeValueNoQuotes = function (e) { ou(e) || e === w.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(uu.Unquoted, this.index), this.state = d.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === w.Amp && this.startEntity(); };
    Lu.prototype.stateBeforeDeclaration = function (e) { e === w.OpeningSquareBracket ? (this.state = d.CDATASequence, this.sequenceIndex = 0) : this.state = e === w.Dash ? d.BeforeComment : d.InDeclaration; };
    Lu.prototype.stateInDeclaration = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = d.Text, this.sectionStart = this.index + 1); };
    Lu.prototype.stateInProcessingInstruction = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = d.Text, this.sectionStart = this.index + 1); };
    Lu.prototype.stateBeforeComment = function (e) { e === w.Dash ? (this.state = d.InCommentLike, this.currentSequence = j.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = d.InDeclaration; };
    Lu.prototype.stateInSpecialComment = function (e) { (e === w.Gt || this.fastForwardTo(w.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = d.Text, this.sectionStart = this.index + 1); };
    Lu.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === j.ScriptEnd[3] ? this.startSpecial(j.ScriptEnd, 4) : t === j.StyleEnd[3] ? this.startSpecial(j.StyleEnd, 4) : (this.state = d.InTagName, this.stateInTagName(e)); };
    Lu.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === j.TitleEnd[3] ? this.startSpecial(j.TitleEnd, 4) : t === j.TextareaEnd[3] ? this.startSpecial(j.TextareaEnd, 4) : (this.state = d.InTagName, this.stateInTagName(e)); };
    Lu.prototype.startEntity = function () { this.baseState = this.state, this.state = d.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Y.Strict : this.baseState === d.Text || this.baseState === d.InSpecialTag ? Y.Legacy : Y.Attribute); };
    Lu.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Lu.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === d.Text || this.state === d.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === d.InAttributeValueDq || this.state === d.InAttributeValueSq || this.state === d.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Lu.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Lu.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case d.Text: {
                this.stateText(e);
                break;
            }
            case d.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case d.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case d.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case d.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case d.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case d.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case d.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case d.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case d.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case d.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case d.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case d.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case d.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case d.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case d.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case d.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case d.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case d.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case d.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case d.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case d.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case d.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case d.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case d.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case d.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Lu.prototype.finish = function () { this.state === d.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Lu.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === d.InCommentLike ? this.currentSequence === j.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === d.InTagName || this.state === d.BeforeAttributeName || this.state === d.BeforeAttributeValue || this.state === d.AfterAttributeName || this.state === d.InAttributeName || this.state === d.InAttributeValueSq || this.state === d.InAttributeValueDq || this.state === d.InAttributeValueNq || this.state === d.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Lu.prototype.emitCodePoint = function (e, t) { this.baseState !== d.Text && this.baseState !== d.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Lu;
}());
var Du = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), I = new Set(["p"]), Ft = new Set(["thead", "tbody"]), Ht = new Set(["dd", "dt"]), Vt = new Set(["rt", "rp"]), ir = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", I], ["h1", I], ["h2", I], ["h3", I], ["h4", I], ["h5", I], ["h6", I], ["select", Du], ["input", Du], ["output", Du], ["button", Du], ["datalist", Du], ["textarea", Du], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Ht], ["dt", Ht], ["address", I], ["article", I], ["aside", I], ["blockquote", I], ["details", I], ["div", I], ["dl", I], ["fieldset", I], ["figcaption", I], ["figure", I], ["footer", I], ["form", I], ["header", I], ["hr", I], ["main", I], ["nav", I], ["ol", I], ["pre", I], ["section", I], ["table", I], ["ul", I], ["rt", Vt], ["rp", Vt], ["tbody", Ft], ["tfoot", Ft]]), sr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Gt = new Set(["math", "svg"]), jt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), cr = /\s|\//, zu = (function () {
    function zu(e, t) {
        if (t === void 0) { t = {}; }
        var r, a, n, i, s, o;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = t.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((i = t.Tokenizer) !== null && i !== void 0 ? i : Lu)(this.options, this), this.foreignContext = [!this.htmlMode], (o = (s = this.cbs).onparserinit) === null || o === void 0 || o.call(s, this);
    }
    zu.prototype.ontext = function (e, t) { var r, a; var n = this.getSlice(e, t); this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = t; };
    zu.prototype.ontextentity = function (e, t) { var r, a; this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, qu(e)), this.startIndex = t; };
    zu.prototype.isVoidElement = function (e) { return this.htmlMode && sr.has(e); };
    zu.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    zu.prototype.emitOpenTag = function (e) { var t, r, a, n; this.openTagStart = this.startIndex, this.tagname = e; var i = this.htmlMode && ir.get(e); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Gt.has(e) ? this.foreignContext.unshift(!0) : jt.has(e) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, e), this.cbs.onopentag && (this.attribs = {}); };
    zu.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    zu.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    zu.prototype.onclosetag = function (e, t) { var r, a, n, i, s, o, l, h; this.endIndex = t; var v = this.getSlice(e, t); if (this.lowerCaseTagNames && (v = v.toLowerCase()), this.htmlMode && (Gt.has(v) || jt.has(v)) && this.foreignContext.shift(), this.isVoidElement(v))
        this.htmlMode && v === "br" && ((i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, "br"), (o = (s = this.cbs).onopentag) === null || o === void 0 || o.call(s, "br", {}, !0), (h = (l = this.cbs).onclosetag) === null || h === void 0 || h.call(l, "br", !1));
    else {
        var p = this.stack.indexOf(v);
        if (p !== -1)
            for (var g = 0; g <= p; g++) {
                var A = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, A, g !== p);
            }
        else
            this.htmlMode && v === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    zu.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    zu.prototype.closeCurrentTag = function (e) { var t, r; var a = this.tagname; this.endOpenTag(e), this.stack[0] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !e), this.stack.shift()); };
    zu.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    zu.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    zu.prototype.onattribentity = function (e) { this.attribvalue += qu(e); };
    zu.prototype.onattribend = function (e, t) { var r, a; this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, e === uu.Double ? '"' : e === uu.Single ? "'" : e === uu.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    zu.prototype.getInstructionName = function (e) { var t = e.search(cr), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    zu.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = t + 1; };
    zu.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = t + 1; };
    zu.prototype.oncomment = function (e, t, r) { var a, n, i, s; this.endIndex = t, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(e, t - r)), (s = (i = this.cbs).oncommentend) === null || s === void 0 || s.call(i), this.startIndex = t + 1; };
    zu.prototype.oncdata = function (e, t, r) { var a, n, i, s, o, l, h, v, p, g; this.endIndex = t; var A = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, A), (l = (o = this.cbs).oncdataend) === null || l === void 0 || l.call(o)) : ((v = (h = this.cbs).oncomment) === null || v === void 0 || v.call(h, "[CDATA[".concat(A, "]]")), (g = (p = this.cbs).oncommentend) === null || g === void 0 || g.call(p)), this.startIndex = t + 1; };
    zu.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    zu.prototype.reset = function () { var e, t, r, a; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    zu.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    zu.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    zu.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    zu.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    zu.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    zu.prototype.pause = function () { this.tokenizer.pause(); };
    zu.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    zu.prototype.parseChunk = function (e) { this.write(e); };
    zu.prototype.done = function (e) { this.end(e); };
    return zu;
}());
var se = {};
Re(se, { CDATA: function () { return Qe; }, Comment: function () { return je; }, Directive: function () { return Ge; }, Doctype: function () { return Xe; }, ElementType: function () { return N; }, Root: function () { return He; }, Script: function () { return ze; }, Style: function () { return $e; }, Tag: function () { return We; }, Text: function () { return Ve; }, isTag: function () { return Fe; } });
var N;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(N || (N = {}));
function Fe(u) { return u.type === N.Tag || u.type === N.Script || u.type === N.Style; }
var He = N.Root, Ve = N.Text, Ge = N.Directive, je = N.Comment, ze = N.Script, $e = N.Style, We = N.Tag, Qe = N.CDATA, Xe = N.Doctype;
var ce = (function () {
    function ce() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ce.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ce.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ce.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    ce.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return zt(this, e);
    };
    return ce;
}()), $u = (function (_super) {
    __extends($u, _super);
    function $u(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty($u.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return $u;
}(ce)), Uu = (function (_super) {
    __extends(Uu, _super);
    function Uu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Text;
        return _this;
    }
    Object.defineProperty(Uu.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Uu;
}($u)), Wu = (function (_super) {
    __extends(Wu, _super);
    function Wu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Comment;
        return _this;
    }
    Object.defineProperty(Wu.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Wu;
}($u)), Qu = (function (_super) {
    __extends(Qu, _super);
    function Qu(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = N.Directive;
        return _this;
    }
    Object.defineProperty(Qu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Qu;
}($u)), Xu = (function (_super) {
    __extends(Xu, _super);
    function Xu(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Xu.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Xu;
}(ce)), Zu = (function (_super) {
    __extends(Zu, _super);
    function Zu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.CDATA;
        return _this;
    }
    Object.defineProperty(Zu.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Zu;
}(Xu)), Ou = (function (_super) {
    __extends(Ou, _super);
    function Ou() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = N.Root;
        return _this;
    }
    Object.defineProperty(Ou.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ou;
}(Xu)), _u = (function (_super) {
    __extends(_u, _super);
    function _u(e, t, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = e === "script" ? N.Script : e === "style" ? N.Style : N.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = a;
        return _this;
    }
    Object.defineProperty(_u.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_u.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_u.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return _u;
}(Xu));
function C(u) { return Fe(u); }
function Ru(u) { return u.type === N.CDATA; }
function iu(u) { return u.type === N.Text; }
function Ku(u) { return u.type === N.Comment; }
function or(u) { return u.type === N.Directive; }
function _e(u) { return u.type === N.Root; }
function $(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function zt(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (iu(u))
        t = new Uu(u.data);
    else if (Ku(u))
        t = new Wu(u.data);
    else if (C(u)) {
        var r = e ? Ze(u.children) : [], a_1 = new _u(u.name, nu({}, u.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), u.namespace != null && (a_1.namespace = u.namespace), u["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = nu({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = nu({}, u["x-attribsPrefix"])), t = a_1;
    }
    else if (Ru(u)) {
        var r = e ? Ze(u.children) : [], a_2 = new Zu(r);
        r.forEach(function (n) { return n.parent = a_2; }), t = a_2;
    }
    else if (_e(u)) {
        var r = e ? Ze(u.children) : [], a_3 = new Ou(r);
        r.forEach(function (n) { return n.parent = a_3; }), u["x-mode"] && (a_3["x-mode"] = u["x-mode"]), t = a_3;
    }
    else if (or(u)) {
        var r = new Qu(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function Ze(u) { var e = u.map(function (t) { return zt(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var $t = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Mu = (function () {
    function Mu(e, t, r) {
        this.dom = [], this.root = new Ou(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = $t), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : $t, this.elementCB = r != null ? r : null;
    }
    Mu.prototype.onparserinit = function (e) { this.parser = e; };
    Mu.prototype.onreset = function () { this.dom = [], this.root = new Ou(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Mu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Mu.prototype.onerror = function (e) { this.handleCallback(e); };
    Mu.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Mu.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? N.Tag : void 0, a = new _u(e, t, void 0, r); this.addNode(a), this.tagStack.push(a); };
    Mu.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === N.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Uu(e);
        this.addNode(r), this.lastNode = r;
    } };
    Mu.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === N.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new Wu(e); this.addNode(t), this.lastNode = t; };
    Mu.prototype.oncommentend = function () { this.lastNode = null; };
    Mu.prototype.oncdatastart = function () { var e = new Uu(""), t = new Zu([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    Mu.prototype.oncdataend = function () { this.lastNode = null; };
    Mu.prototype.onprocessinginstruction = function (e, t) { var r = new Qu(e, t); this.addNode(r); };
    Mu.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Mu.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return Mu;
}());
var su = {};
Re(su, { DocumentPosition: function () { return eu; }, append: function () { return qr; }, appendChild: function () { return Cr; }, compareDocumentPosition: function () { return i0; }, existsOne: function () { return a0; }, filter: function () { return Pu; }, find: function () { return pe; }, findAll: function () { return Dr; }, findOne: function () { return ge; }, findOneChild: function () { return Lr; }, getAttributeValue: function () { return Er; }, getChildren: function () { return he; }, getElementById: function () { return Mr; }, getElements: function () { return Rr; }, getElementsByClassName: function () { return Br; }, getElementsByTagName: function () { return Au; }, getElementsByTagType: function () { return Pr; }, getFeed: function () { return ct; }, getInnerHTML: function () { return Ar; }, getName: function () { return kr; }, getOuterHTML: function () { return t0; }, getParent: function () { return r0; }, getSiblings: function () { return be; }, getText: function () { return de; }, hasAttrib: function () { return Tr; }, hasChildren: function () { return $; }, innerText: function () { return tt; }, isCDATA: function () { return Ru; }, isComment: function () { return Ku; }, isDocument: function () { return _e; }, isTag: function () { return C; }, isText: function () { return iu; }, nextElementSibling: function () { return rt; }, prepend: function () { return nt; }, prependChild: function () { return Ir; }, prevElementSibling: function () { return at; }, removeElement: function () { return lu; }, removeSubsets: function () { return Fr; }, replaceElement: function () { return Nr; }, testElement: function () { return Or; }, textContent: function () { return mu; }, uniqueSort: function () { return st; } });
function oe(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var lr = new Map(oe([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(oe([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(oe([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(oe([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Ke = /["&'<>$\x80-\uFFFF]/g, Wt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Qt = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function Yu(u) { var e = "", t = 0, r; for (; (r = Ke.exec(u)) !== null;) {
    var a = r.index, n = u.charCodeAt(a), i = Wt.get(n);
    i !== void 0 ? (e += u.substring(t, a) + i, t = a + 1) : (e += "".concat(u.substring(t, a), "&#x").concat(Qt(u, a).toString(16), ";"), t = Ke.lastIndex += +((n & 64512) === 55296));
} return e + u.substr(t); }
function Ye(u, e) { return function (r) { var a, n = 0, i = ""; for (; a = u.exec(r);)
    n !== a.index && (i += r.substring(n, a.index)), i += e.get(a[0].charCodeAt(0)), n = a.index + 1; return i + r.substring(n); }; }
var Xt = Ye(/[&<>'"]/g, Wt), le = Ye(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), fe = Ye(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Zt;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(Zt || (Zt = {}));
var _t;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(_t || (_t = {}));
var Jt = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), u0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var dr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function hr(u) { return u.replace(/"/g, "&quot;"); }
function br(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? hr : e.xmlMode || e.encodeEntities !== "utf8" ? Yu : le; return Object.keys(u).map(function (a) { var n, i; var s = (n = u[a]) !== null && n !== void 0 ? n : ""; return e.xmlMode === "foreign" && (a = (i = u0.get(a)) !== null && i !== void 0 ? i : a), !e.emptyAttrs && !e.xmlMode && s === "" ? a : "".concat(a, "=\"").concat(r(s), "\""); }).join(" "); }
var e0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function et(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var a = 0; a < t.length; a++)
        r += pr(t[a], e);
    return r;
}
var Bu = et;
function pr(u, e) { switch (u.type) {
    case He: return et(u.children, e);
    case Xe:
    case Ge: return yr(u);
    case je: return vr(u);
    case Qe: return Sr(u);
    case ze:
    case $e:
    case We: return xr(u, e);
    case Ve: return wr(u, e);
} }
var gr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), mr = new Set(["svg", "math"]);
function xr(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = Jt.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && gr.has(u.parent.name) && (e = Su(nu({}, e), { xmlMode: !1 }))), !e.xmlMode && mr.has(u.name) && (e = Su(nu({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), a = br(u.attribs, e); return a && (r += " ".concat(a)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && e0.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += et(u.children, e)), (e.xmlMode || !e0.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function yr(u) { return "<".concat(u.data, ">"); }
function wr(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && dr.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? Yu(r) : fe(r)), r; }
function Sr(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function vr(u) { return "<!--".concat(u.data, "-->"); }
function t0(u, e) { return Bu(u, e); }
function Ar(u, e) { return $(u) ? u.children.map(function (t) { return t0(t, e); }).join("") : ""; }
function de(u) {
    return Array.isArray(u) ? u.map(de).join("") : C(u) ? u.name === "br" ? "\n" : de(u.children) : Ru(u) ? de(u.children) : iu(u) ? u.data : "";
}
function mu(u) { return Array.isArray(u) ? u.map(mu).join("") : $(u) && !Ku(u) ? mu(u.children) : iu(u) ? u.data : ""; }
function tt(u) { return Array.isArray(u) ? u.map(tt).join("") : $(u) && (u.type === N.Tag || Ru(u)) ? tt(u.children) : iu(u) ? u.data : ""; }
function he(u) { return $(u) ? u.children : []; }
function r0(u) { return u.parent || null; }
function be(u) {
    var _a, _b;
    var e = r0(u);
    if (e != null)
        return he(e);
    var t = [u], r = u.prev, a = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; a != null;)
        t.push(a), _b = a, a = _b.next;
    return t;
}
function Er(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function Tr(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function kr(u) { return u.name; }
function rt(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !C(e);)
        (_a = e, e = _a.next);
    return e;
}
function at(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !C(e);)
        (_a = e, e = _a.prev);
    return e;
}
function lu(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function Nr(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var a = e.parent = u.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(u)] = e, u.parent = null;
} }
function Cr(u, e) { if (lu(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function qr(u, e) { lu(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var a = t.children;
        a.splice(a.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function Ir(u, e) { if (lu(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function nt(u, e) { lu(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function Pu(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return pe(u, Array.isArray(e) ? e : [e], t, r);
}
function pe(u, e, t, r) { var a = [], n = [Array.isArray(e) ? e : [e]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (i.length === 1)
            return a;
        n.shift(), i.shift();
        continue;
    }
    var s = n[0][i[0]++];
    if (u(s) && (a.push(s), --r <= 0))
        return a;
    t && $(s) && s.children.length > 0 && (i.unshift(0), n.unshift(s.children));
} }
function Lr(u, e) { return e.find(u); }
function ge(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (C(n) && u(n))
            return n;
        if (t && $(n) && n.children.length > 0) {
            var i = ge(u, n.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function a0(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return C(t) && u(t) || $(t) && a0(u, t.children); }); }
function Dr(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    C(n) && u(n) && t.push(n), $(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var me = { tag_name: function (u) { return typeof u == "function" ? function (e) { return C(e) && u(e.name); } : u === "*" ? C : function (e) { return C(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return iu(e) && u(e.data); } : function (e) { return iu(e) && e.data === u; }; } };
function it(u, e) { return typeof e == "function" ? function (t) { return C(t) && e(t.attribs[u]); } : function (t) { return C(t) && t.attribs[u] === e; }; }
function Ur(u, e) { return function (t) { return u(t) || e(t); }; }
function n0(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(me, t) ? me[t](r) : it(t, r); }); return e.length === 0 ? null : e.reduce(Ur); }
function Or(u, e) { var t = n0(u); return t ? t(e) : !0; }
function Rr(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = n0(u);
    return a ? Pu(a, e, t, r) : [];
}
function Mr(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), ge(it("id", u), e, t);
}
function Au(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pu(me.tag_name(u), e, t, r);
}
function Br(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pu(it("class", u), e, t, r);
}
function Pr(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pu(me.tag_type(u), e, t, r);
}
function Fr(u) { var e = u.length; for (; --e >= 0;) {
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
var eu;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(eu || (eu = {}));
function i0(u, e) { var t = [], r = []; if (u === e)
    return 0; var a = $(u) ? u : u.parent; for (; a;)
    t.unshift(a), a = a.parent; for (a = $(e) ? e : e.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(t.length, r.length), i = 0; for (; i < n && t[i] === r[i];)
    i++; if (i === 0)
    return eu.DISCONNECTED; var s = t[i - 1], o = s.children, l = t[i], h = r[i]; return o.indexOf(l) > o.indexOf(h) ? s === e ? eu.FOLLOWING | eu.CONTAINED_BY : eu.FOLLOWING : s === u ? eu.PRECEDING | eu.CONTAINS : eu.PRECEDING; }
function st(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = i0(e, t); return r & eu.PRECEDING ? -1 : r & eu.FOLLOWING ? 1 : 0; }), u; }
function ct(u) { var e = xe(zr, u); return e ? e.name === "feed" ? Hr(e) : Vr(e) : null; }
function Hr(u) { var e; var t = u.children, r = { type: "atom", items: Au("entry", t).map(function (i) { var s; var o = i.children, l = { media: s0(o) }; _(l, "id", "id", o), _(l, "title", "title", o); var h = (s = xe("link", o)) === null || s === void 0 ? void 0 : s.attribs.href; h && (l.link = h); var v = xu("summary", o) || xu("content", o); v && (l.description = v); var p = xu("updated", o); return p && (l.pubDate = new Date(p)), l; }) }; _(r, "id", "id", t), _(r, "title", "title", t); var a = (e = xe("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; a && (r.link = a), _(r, "description", "subtitle", t); var n = xu("updated", t); return n && (r.updated = new Date(n)), _(r, "author", "email", t, !0), r; }
function Vr(u) { var e, t; var r = (t = (e = xe("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], a = { type: u.name.substr(0, 3), id: "", items: Au("item", u.children).map(function (i) { var s = i.children, o = { media: s0(s) }; _(o, "id", "guid", s), _(o, "title", "title", s), _(o, "link", "link", s), _(o, "description", "description", s); var l = xu("pubDate", s) || xu("dc:date", s); return l && (o.pubDate = new Date(l)), o; }) }; _(a, "title", "title", r), _(a, "link", "link", r), _(a, "description", "description", r); var n = xu("lastBuildDate", r); return n && (a.updated = new Date(n)), _(a, "author", "managingEditor", r, !0), a; }
var Gr = ["url", "type", "lang"], jr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function s0(u) { return Au("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Gr_1 = __values(Gr), Gr_1_1 = Gr_1.next(); !Gr_1_1.done; Gr_1_1 = Gr_1.next()) {
            var a = Gr_1_1.value;
            t[a] && (r[a] = t[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Gr_1_1 && !Gr_1_1.done && (_a = Gr_1.return)) _a.call(Gr_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var jr_1 = __values(jr), jr_1_1 = jr_1.next(); !jr_1_1.done; jr_1_1 = jr_1.next()) {
            var a = jr_1_1.value;
            t[a] && (r[a] = parseInt(t[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (jr_1_1 && !jr_1_1.done && (_b = jr_1.return)) _b.call(jr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function xe(u, e) { return Au(u, e, !0, 1)[0]; }
function xu(u, e, t) {
    if (t === void 0) { t = !1; }
    return mu(Au(u, e, t, 1)).trim();
}
function _(u, e, t, r, a) {
    if (a === void 0) { a = !1; }
    var n = xu(t, r, a);
    n && (u[e] = n);
}
function zr(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function c0(u, e) { var t = new Mu(void 0, e); return new zu(t, e).end(u), t.root; }
var x;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(x || (x = {}));
var R;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(R || (R = {}));
var o0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, $r = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Wr = new Map([[126, R.Element], [94, R.Start], [36, R.End], [42, R.Any], [33, R.Not], [124, R.Hyphen]]), Qr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Eu(u) { switch (u.type) {
    case x.Adjacent:
    case x.Child:
    case x.Descendant:
    case x.Parent:
    case x.Sibling:
    case x.ColumnCombinator: return !0;
    default: return !1;
} }
var Xr = new Set(["contains", "icontains"]);
function Zr(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Ju(u) { return u.replace($r, Zr); }
function ot(u) { return u === 39 || u === 34; }
function l0(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function yu(u) { var e = [], t = f0(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function f0(u, e, t) { var r = []; function a(p) { var g = e.slice(t + p).match(o0); if (!g)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(g, 1), A = _a[0]; return t += p + A.length, Ju(A); } function n(p) { for (t += p; t < e.length && l0(e.charCodeAt(t));)
    t++; } function i() { t += 1; var p = t, g = 1; for (; g > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !s(t) ? g++ : e.charCodeAt(t) === 41 && !s(t) && g--; if (g)
    throw new Error("Parenthesis not matched"); return Ju(e.slice(p, t - 1)); } function s(p) { var g = 0; for (; e.charCodeAt(--p) === 92;)
    g++; return (g & 1) === 1; } function o() { if (r.length > 0 && Eu(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function l(p) { if (r.length > 0 && r[r.length - 1].type === x.Descendant) {
    r[r.length - 1].type = p;
    return;
} o(), r.push({ type: p }); } function h(p, g) { r.push({ type: x.Attribute, name: p, action: g, value: a(1), namespace: null, ignoreCase: "quirks" }); } function v() { if (r.length && r[r.length - 1].type === x.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (n(0), e.length === t)
    return t; u: for (; t < e.length;) {
    var p = e.charCodeAt(t);
    switch (p) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== x.Descendant) && (o(), r.push({ type: x.Descendant })), n(1);
            break;
        }
        case 62: {
            l(x.Child), n(1);
            break;
        }
        case 60: {
            l(x.Parent), n(1);
            break;
        }
        case 126: {
            l(x.Sibling), n(1);
            break;
        }
        case 43: {
            l(x.Adjacent), n(1);
            break;
        }
        case 46: {
            h("class", R.Element);
            break;
        }
        case 35: {
            h("id", R.Equals);
            break;
        }
        case 91: {
            n(1);
            var g = void 0, A = null;
            e.charCodeAt(t) === 124 ? g = a(1) : e.startsWith("*|", t) ? (A = "*", g = a(2)) : (g = a(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (A = g, g = a(1))), n(0);
            var k = R.Exists, W = Wr.get(e.charCodeAt(t));
            if (W) {
                if (k = W, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                e.charCodeAt(t) === 61 && (k = R.Equals, n(1));
            var Q = "", T = null;
            if (k !== "exists") {
                if (ot(e.charCodeAt(t))) {
                    var S = e.charCodeAt(t), L = t + 1;
                    for (; L < e.length && (e.charCodeAt(L) !== S || s(L));)
                        L += 1;
                    if (e.charCodeAt(L) !== S)
                        throw new Error("Attribute value didn't end");
                    Q = Ju(e.slice(t + 1, L)), t = L + 1;
                }
                else {
                    var S = t;
                    for (; t < e.length && (!l0(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    Q = Ju(e.slice(S, t));
                }
                n(0);
                var X = e.charCodeAt(t) | 32;
                X === 115 ? (T = !1, n(1)) : X === 105 && (T = !0, n(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var V = { type: x.Attribute, name: g, action: k, value: Q, namespace: A, ignoreCase: T };
            r.push(V);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: x.PseudoElement, name: a(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? i() : null });
                continue;
            }
            var g = a(1).toLowerCase(), A = null;
            if (e.charCodeAt(t) === 40)
                if (Qr.has(g)) {
                    if (ot(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(g, " cannot be quoted"));
                    if (A = [], t = f0(A, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(g, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (A = i(), Xr.has(g)) {
                        var k = A.charCodeAt(0);
                        k === A.charCodeAt(A.length - 1) && ot(k) && (A = A.slice(1, -1));
                    }
                    A = Ju(A);
                }
            r.push({ type: x.Pseudo, name: g, data: A });
            break;
        }
        case 44: {
            v(), r = [], n(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var k = e.indexOf("*/", t + 2);
                if (k < 0)
                    throw new Error("Comment was not terminated");
                t = k + 2, r.length === 0 && n(0);
                break;
            }
            var g = null, A = void 0;
            if (p === 42)
                t += 1, A = "*";
            else if (p === 124) {
                if (A = "", e.charCodeAt(t + 1) === 124) {
                    l(x.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (o0.test(e.slice(t)))
                A = a(0);
            else
                break u;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (g = A, e.charCodeAt(t + 1) === 42 ? (A = "*", t += 2) : A = a(1)), r.push(A === "*" ? { type: x.Universal, namespace: g } : { type: x.Tag, name: A, namespace: g });
        }
    }
} return v(), t; }
var wt = vu(wu(), 1);
var fu = vu(wu(), 1);
var h0 = new Map([[x.Universal, 50], [x.Tag, 30], [x.Attribute, 1], [x.Pseudo, 0]]);
function ue(u) { return !h0.has(u.type); }
var _r = new Map([[R.Exists, 10], [R.Equals, 8], [R.Not, 7], [R.Start, 6], [R.End, 6], [R.Any, 5]]);
function lt(u) { var e = u.map(b0); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var a = t - 1; a >= 0 && r < e[a]; a--) {
            var n = u[a + 1];
            u[a + 1] = u[a], u[a] = n, e[a + 1] = e[a], e[a] = r;
        }
} }
function b0(u) { var e, t; var r = (e = h0.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === x.Attribute ? (r = (t = _r.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === R.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === x.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(b0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var ee = vu(wu(), 1), Kr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function p0(u) { return u.replace(Kr, "\\$&"); }
var Yr = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Tu(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Yr.has(u.name); }
var g0 = { equals: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; return Tu(e, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return s != null && s.length === n.length && s.toLowerCase() === n && u(i); }) : function (i) { return r.getAttributeValue(i, a) === n && u(i); }; }, hyphen: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = n.length; return Tu(e, t) ? (n = n.toLowerCase(), function (o) { var l = r.getAttributeValue(o, a); return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i).toLowerCase() === n && u(o); }) : function (o) { var l = r.getAttributeValue(o, a); return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i) === n && u(o); }; }, element: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; if (/\s/.test(n))
        return ee.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(p0(n), "(?:$|\\s)"), Tu(e, t) ? "i" : ""); return function (o) { var l = r.getAttributeValue(o, a); return l != null && l.length >= n.length && i.test(l) && u(o); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = n.length; return i === 0 ? ee.default.falseFunc : Tu(e, t) ? (n = n.toLowerCase(), function (s) { var o = r.getAttributeValue(s, a); return o != null && o.length >= i && o.substr(0, i).toLowerCase() === n && u(s); }) : function (s) { var o; return !!(!((o = r.getAttributeValue(s, a)) === null || o === void 0) && o.startsWith(n)) && u(s); }; }, end: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value, i = -n.length; return i === 0 ? ee.default.falseFunc : Tu(e, t) ? (n = n.toLowerCase(), function (s) { var o; return ((o = r.getAttributeValue(s, a)) === null || o === void 0 ? void 0 : o.substr(i).toLowerCase()) === n && u(s); }) : function (s) { var o; return !!(!((o = r.getAttributeValue(s, a)) === null || o === void 0) && o.endsWith(n)) && u(s); }; }, any: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; if (n === "")
        return ee.default.falseFunc; if (Tu(e, t)) {
        var i_1 = new RegExp(p0(n), "i");
        return function (o) { var l = r.getAttributeValue(o, a); return l != null && l.length >= n.length && i_1.test(l) && u(o); };
    } return function (i) { var s; return !!(!((s = r.getAttributeValue(i, a)) === null || s === void 0) && s.includes(n)) && u(i); }; }, not: function (u, e, t) { var r = t.adapter, a = e.name, n = e.value; return n === "" ? function (i) { return !!r.getAttributeValue(i, a) && u(i); } : Tu(e, t) ? (n = n.toLowerCase(), function (i) { var s = r.getAttributeValue(i, a); return (s == null || s.length !== n.length || s.toLowerCase() !== n) && u(i); }) : function (i) { return r.getAttributeValue(i, a) !== n && u(i); }; } };
var Jr = new Set([9, 10, 12, 13, 32]), m0 = 48, ua = 57;
function x0(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = n(), a = i(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (a != null ? a : 1), s(), e < u.length ? (r = n(), s(), a = i()) : r = a = 0), a === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * a]; function n() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function i() { var o = e, l = 0; for (; e < u.length && u.charCodeAt(e) >= m0 && u.charCodeAt(e) <= ua;)
    l = l * 10 + (u.charCodeAt(e) - m0), e++; return e === o ? null : l; } function s() { for (; e < u.length && Jr.has(u.charCodeAt(e));)
    e++; } }
var ft = vu(wu(), 1);
function y0(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return ft.default.falseFunc; if (e === -1)
    return function (n) { return n <= t; }; if (e === 0)
    return function (n) { return n === t; }; if (e === 1)
    return t < 0 ? ft.default.trueFunc : function (n) { return n >= t; }; var r = Math.abs(e), a = (t % r + r) % r; return e > 1 ? function (n) { return n >= t && n % r === a; } : function (n) { return n <= t && n % r === a; }; }
function Fu(u) { return y0(x0(u)); }
var K = vu(wu(), 1);
function ye(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var Hu = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (a) { return u(a) && t.getText(a).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (n) { return u(n) && t.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Fu(e);
        return a === K.default.falseFunc ? K.default.falseFunc : a === K.default.trueFunc ? ye(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = 0; l < s.length && !r(i, s[l]); l++)
            t.isTag(s[l]) && o++; return a(o) && u(i); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Fu(e);
        return a === K.default.falseFunc ? K.default.falseFunc : a === K.default.trueFunc ? ye(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = s.length - 1; l >= 0 && !r(i, s[l]); l--)
            t.isTag(s[l]) && o++; return a(o) && u(i); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Fu(e);
        return a === K.default.falseFunc ? K.default.falseFunc : a === K.default.trueFunc ? ye(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = 0; l < s.length; l++) {
            var h = s[l];
            if (r(i, h))
                break;
            t.isTag(h) && t.getName(h) === t.getName(i) && o++;
        } return a(o) && u(i); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var a = Fu(e);
        return a === K.default.falseFunc ? K.default.falseFunc : a === K.default.trueFunc ? ye(u, t) : function (i) { var s = t.getSiblings(i), o = 0; for (var l = s.length - 1; l >= 0; l--) {
            var h = s[l];
            if (r(i, h))
                break;
            t.isTag(h) && t.getName(h) === t.getName(i) && o++;
        } return a(o) && u(i); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var a = t.getParent(r); return (a == null || !t.isTag(a)) && u(r); };
    }, scope: function (u, e, t, r) { var a = t.equals; return !r || r.length === 0 ? Hu.root(u, e, t) : r.length === 1 ? function (n) { return a(r[0], n) && u(n); } : function (n) { return r.includes(n) && u(n); }; }, hover: dt("isHovered"), visited: dt("isVisited"), active: dt("isActive") };
function dt(u) { return function (t, r, _a) {
    var a = _a.adapter;
    var n = a[u];
    return typeof n != "function" ? K.default.falseFunc : function (s) { return n(s) && t(s); };
}; }
var te = { empty: function (u, _a) {
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
function ht(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var we = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var tu = vu(wu(), 1);
var gt = {};
function mt(u, e) { return u === tu.default.falseFunc ? tu.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function xt(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function pt(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var bt = function (u, e, t, r, a) { var n = a(e, pt(t), r); return n === tu.default.trueFunc ? u : n === tu.default.falseFunc ? tu.default.falseFunc : function (i) { return n(i) && u(i); }; }, Se = { is: bt, matches: bt, where: bt, not: function (u, e, t, r, a) { var n = a(e, pt(t), r); return n === tu.default.falseFunc ? u : n === tu.default.trueFunc ? tu.default.falseFunc : function (i) { return !n(i) && u(i); }; }, has: function (u, e, t, r, a) { var n = t.adapter, i = pt(t); i.relativeSelector = !0; var s = e.some(function (h) { return h.some(ue); }) ? [gt] : void 0, o = a(e, i, s); if (o === tu.default.falseFunc)
        return tu.default.falseFunc; var l = mt(o, n); if (s && o !== tu.default.trueFunc) {
        var _a = o.shouldTestNextSiblings, h_1 = _a === void 0 ? !1 : _a;
        return function (v) { if (!u(v))
            return !1; s[0] = v; var p = n.getChildren(v), g = h_1 ? __spreadArray(__spreadArray([], __read(p), false), __read(xt(v, n)), false) : p; return n.existsOne(l, g); };
    } return function (h) { return u(h) && n.existsOne(l, n.getChildren(h)); }; } };
function w0(u, e, t, r, a) { var n; var i = e.name, s = e.data; if (Array.isArray(s)) {
    if (!(i in Se))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(s, ")"));
    return Se[i](u, s, t, r, a);
} var o = (n = t.pseudos) === null || n === void 0 ? void 0 : n[i], l = typeof o == "string" ? o : we[i]; if (typeof l == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var h = yu(l);
    return Se.is(u, h, t, r, a);
} if (typeof o == "function")
    return ht(o, i, s, 1), function (h) { return o(h, s) && u(h); }; if (i in Hu)
    return Hu[i](u, s, t, r); if (i in te) {
    var h_2 = te[i];
    return ht(h_2, i, s, 2), function (v) { return h_2(v, t, s) && u(v); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function yt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function S0(u, e, t, r, a) { var n = t.adapter, i = t.equals; switch (e.type) {
    case x.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case x.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case x.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), g0[e.action](u, e, t);
    }
    case x.Pseudo: return w0(u, e, t, r, a);
    case x.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (l) { return n.getName(l) === s_1 && u(l); };
    }
    case x.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (l) { var h = l; for (; h = yt(h, n);)
                if (u(h))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (l) { var h = l; for (; h = yt(h, n);)
            if (!s_2.has(h)) {
                if (n.isTag(h) && u(h))
                    return !0;
                s_2.add(h);
            } return !1; };
    }
    case "_flexibleDescendant": return function (o) { var l = o; do
        if (u(l))
            return !0;
    while (l = yt(l, n)); return !1; };
    case x.Parent: return function (o) { return n.getChildren(o).some(function (l) { return n.isTag(l) && u(l); }); };
    case x.Child: return function (o) { var l = n.getParent(o); return l != null && n.isTag(l) && u(l); };
    case x.Sibling: return function (o) { var l = n.getSiblings(o); for (var h = 0; h < l.length; h++) {
        var v = l[h];
        if (i(o, v))
            break;
        if (n.isTag(v) && u(v))
            return !0;
    } return !1; };
    case x.Adjacent: return n.prevElementSibling ? function (o) { var l = n.prevElementSibling(o); return l != null && u(l); } : function (o) { var l = n.getSiblings(o), h; for (var v = 0; v < l.length; v++) {
        var p = l[v];
        if (i(o, p))
            break;
        n.isTag(p) && (h = p);
    } return !!h && u(h); };
    case x.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function v0(u, e, t) { var r = ve(u, e, t); return mt(r, e.adapter); }
function ve(u, e, t) { var r = typeof u == "string" ? yu(u) : u; return Ae(r, e, t); }
function A0(u) { return u.type === x.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(A0); })); }
var ea = { type: x.Descendant }, ta = { type: "_flexibleDescendant" }, ra = { type: x.Pseudo, name: "scope", data: null };
function aa(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (a) { var n = e.isTag(a) && e.getParent(a); return a === gt || n && e.isTag(n); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var a = u_1_1.value;
            if (!(a.length > 0 && ue(a[0]) && a[0].type !== x.Descendant))
                if (r && !a.some(A0))
                    a.unshift(ea);
                else
                    continue;
            a.unshift(ra);
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
function Ae(u, e, t) { var r; u.forEach(lt), t = (r = e.context) !== null && r !== void 0 ? r : t; var a = Array.isArray(t), n = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    aa(u, e, n);
else if (u.some(function (o) { return o.length > 0 && ue(o[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, s = u.map(function (o) { if (o.length >= 2) {
    var _a = __read(o, 2), l = _a[0], h = _a[1];
    l.type !== x.Pseudo || l.name !== "scope" || (a && h.type === x.Descendant ? o[1] = ta : (h.type === x.Adjacent || h.type === x.Sibling) && (i = !0));
} return na(o, e, n); }).reduce(ia, fu.default.falseFunc); return s.shouldTestNextSiblings = i, s; }
function na(u, e, t) { var r; return u.reduce(function (a, n) { return a === fu.default.falseFunc ? fu.default.falseFunc : S0(a, n, e, t, Ae); }, (r = e.rootFunc) !== null && r !== void 0 ? r : fu.default.trueFunc); }
function ia(u, e) { return e === fu.default.falseFunc || u === fu.default.trueFunc ? u : u === fu.default.falseFunc || e === fu.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var E0 = function (u, e) { return u === e; }, sa = { adapter: su, equals: E0 };
function T0(u) { var e, t, r, a; var n = u != null ? u : sa; return (e = n.adapter) !== null && e !== void 0 || (n.adapter = su), (t = n.equals) !== null && t !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : E0), n; }
function St(u) { return function (t, r, a) { var n = T0(r); return u(t, n, a); }; }
var Li = St(v0), Di = St(ve), Ee = St(Ae);
function k0(u) { return function (t, r, a) { var n = T0(a); typeof t != "function" && (t = ve(t, n, r)); var i = Te(r, n.adapter, t.shouldTestNextSiblings); return u(t, i, n); }; }
function Te(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = ca(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function ca(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var a = 0; a < r; a++) {
    var n = xt(t[a], e);
    t.push.apply(t, __spreadArray([], __read(n), false));
} return t; }
var Ui = k0(function (u, e, t) { return u === wt.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), Oi = k0(function (u, e, t) { return u === wt.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var Ne = vu(wu(), 1);
var oa = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Vu(u) { return u.type !== "pseudo" ? !1 : oa.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(Vu); }) : !1; }
function N0(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
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
function C0(u) { for (; u.parent;)
    u = u.parent; return u; }
function ke(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(Vu) ? e.push(r) : t.push(r);
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
var la = { type: x.Universal, namespace: null }, fa = { type: x.Pseudo, name: "scope", data: null };
function Et(u, e, t) {
    if (t === void 0) { t = {}; }
    return da([u], e, t);
}
function da(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(ke(yu(e)), 2), r = _a[0], a = _a[1];
    return r.length > 0 && u.some(Ee(r, t)) || a.some(function (n) { return q0(n, u, t).length > 0; });
}
function ha(u, e, t, r) { var a = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < e.length ? [a < 0 ? e[e.length + a] : e[a]] : [];
    case "gt": return isFinite(a) ? e.slice(a + 1) : [];
    case "even": return e.filter(function (n, i) { return i % 2 === 0; });
    case "odd": return e.filter(function (n, i) { return i % 2 === 1; });
    case "not": {
        var n_1 = new Set(ba(t, e, r));
        return e.filter(function (i) { return !n_1.has(i); });
    }
} }
function ba(u, e, t) { if (e.length === 0)
    return []; var _a = __read(ke(u), 2), r = _a[0], a = _a[1], n; if (r.length) {
    var i = At(e, r, t);
    if (a.length === 0)
        return i;
    i.length && (n = new Set(i));
} for (var i = 0; i < a.length && (n == null ? void 0 : n.size) !== e.length; i++) {
    var s = a[i];
    if ((n ? e.filter(function (h) { return C(h) && !n.has(h); }) : e).length === 0)
        break;
    var l = q0(s, e, t);
    if (l.length)
        if (n)
            l.forEach(function (h) { return n.add(h); });
        else {
            if (i === a.length - 1)
                return l;
            n = new Set(l);
        }
} return typeof n != "undefined" ? n.size === e.length ? e : e.filter(function (i) { return n.has(i); }) : []; }
function q0(u, e, t) { var r; if (u.some(Eu)) {
    var a = (r = t.root) !== null && r !== void 0 ? r : C0(e[0]), n = Su(nu({}, t), { context: e, relativeSelector: !1 });
    return u.push(fa), Ce(a, u, n, !0, e.length);
} return Ce(e, u, t, !1, e.length); }
function Tt(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return I0(e, u);
    var _a = __read(ke(yu(u)), 2), a = _a[0], n = _a[1], i = n.map(function (s) { return Ce(e, s, t, !0, r); });
    return a.length && i.push(vt(e, a, t, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : st(i.reduce(function (s, o) { return __spreadArray(__spreadArray([], __read(s), false), __read(o), false); }));
}
function Ce(u, e, t, r, a) { var n = e.findIndex(Vu), i = e.slice(0, n), s = e[n], o = e.length - 1 === n ? a : 1 / 0, l = N0(s.name, s.data, o); if (l === 0)
    return []; var v = (i.length === 0 && !Array.isArray(u) ? he(u).filter(C) : i.length === 0 ? (Array.isArray(u) ? u : [u]).filter(C) : r || i.some(Eu) ? vt(u, [i], t, l) : At(u, [i], t)).slice(0, l), p = ha(s.name, v, s.data, t); if (p.length === 0 || e.length === n + 1)
    return p; var g = e.slice(n + 1), A = g.some(Eu); if (A) {
    if (Eu(g[0])) {
        var k = g[0].type;
        (k === x.Sibling || k === x.Adjacent) && (p = Te(p, su, !0)), g.unshift(la);
    }
    t = Su(nu({}, t), { relativeSelector: !1, rootFunc: function (k) { return p.includes(k); } });
}
else
    t.rootFunc && t.rootFunc !== Ne.trueFunc && (t = Su(nu({}, t), { rootFunc: Ne.trueFunc })); return g.some(Vu) ? Ce(p, g, t, !1, a) : A ? vt(p, [g], t, a) : At(p, [g], t); }
function vt(u, e, t, r) { var a = Ee(e, t, u); return I0(u, a, r); }
function I0(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = Te(u, su, e.shouldTestNextSiblings);
    return pe(function (a) { return C(a) && e(a); }, r, !0, t);
}
function At(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(C); if (r.length === 0)
    return r; var a = Ee(e, t); return a === Ne.trueFunc ? r : r.filter(a); }
var pa = function (u, e, t) { return Tt(u, e, t); }, O0 = function (u, e, t) { return Tt(u, e, t, 1)[0] || null; }, R0 = /[\s ]+/g, L0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), ga = { containsOwn: function (u, e) { return Nt(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return D0(e).test(kt(u)); }, matchesOwn: function (u, e) { return D0(e).test(Nt(u)); }, containsData: function (u, e) { return mu(u).includes(e); }, "contains-ci": function (u, e) { return kt(u).toLowerCase().includes(String(e).toLowerCase()); } };
function D0(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var qe = { pseudos: ga, xmlMode: !1, lowerCaseTags: !0 };
function Ie(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function kt(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.type === "text" ? e += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? e += " " : a.type === "tag" && (L0.has(a.name) && (e += " "), t(a), L0.has(a.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(R0, " ").trim(); }
function Nt(u) {
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
    return e.replace(R0, " ").trim();
}
function M0(u, e) { if (!e)
    return ""; try {
    return new URL(e, u || void 0).href;
}
catch (t) {
    return u ? "" : e;
} }
var ku = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return cu.of(pa(Ie(e), this.node, qe), this.doc); };
    u.prototype.selectFirst = function (e) { var t = O0(Ie(e), this.node, qe); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return Et(this.node, Ie(e), qe); };
    u.prototype.text = function () { return kt(this.node); };
    u.prototype.ownText = function () { return Nt(this.node); };
    u.prototype.wholeText = function () { return mu(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return Bu(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return Bu(this.node, { decodeEntities: !1 }); };
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
        return M0(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
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
        e.push(t), t = t.parent; return cu.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Et(t, Ie(e), qe))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return cu.of((this.node.children || []).filter(C), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(C)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(C).length; };
    u.prototype.nextElementSibling = function () { var e = rt(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = at(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return cu.of(be(this.node).filter(function (e) { return e !== _this.node && C(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return be(this.node).filter(C).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return lu(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), qt = Object.create(Array.prototype), cu = { of: Ct, prototype: qt };
function Ct(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof ku ? r : new ku(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, qt), t;
}
var U0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return cu.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
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
        var e = Ct([]), t = new Set;
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
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return cu.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = Ct([]);
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
    }, next: function () { return cu.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return cu.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(U0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(qt, u, { value: U0[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Le(u, e) { var t = c0(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new ku(t, null); r.doc = r, r.__base = e || ""; var a = O0("base[href]", t); return a && a.attribs.href && (r.__base = M0(r.__base, a.attribs.href)), r; }
function B0(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Le(u), a = function (n) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((n.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                lu(i);
                continue;
            }
            if (i.type === "tag" && (a(i), !t.has(i.name))) {
                var s = (i.children || []).slice();
                try {
                    for (var s_3 = (e_18 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var o = s_3_1.value;
                        nt(i, o);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                lu(i);
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
}; return a(r.node), Bu(r.node.children, { decodeEntities: !1 }); }
var De = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function ma(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return btoa(e); }
function P0(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
var It = (function () {
    function It(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    It.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    It.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (t) { } return this._raw.text == null ? "" : String(this._raw.text); };
    It.prototype.string = function (e) { return this.text(e); };
    It.prototype.html = function (e) { return Le(this.text(e), this.url); };
    It.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    It.prototype.base64 = function () { return ma(this._raw.bytes || P0(this.text())); };
    It.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || P0(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return It;
}());
function xa(u) {
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
function H0(u, e) { var t = function (i) { return ({ getItem: function (s) { var o = u.storageGet(i + s); return o == null ? null : o; }, setItem: function (s, o) { return u.storageSet(i + s, o == null ? null : String(o)); }, removeItem: function (s) { return u.storageSet(i + s, null); }, clear: function () { return u.storageClear && u.storageClear(i); } }); }, r = "__cookie__", a = {}; a.Response = { success: function (i, s) { return ({ code: 0, data: i === void 0 ? null : i, data2: s === void 0 ? null : s }); }, error: function (i) { return ({ code: 1, data: i == null ? "" : String(i) }); } }, a.fetch = function (s, o) {
    return __awaiter(this, void 0, void 0, function () { var l, k, h, v, p, k, g, A, k_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                o = o || {};
                l = String(s);
                if (o.queries) {
                    k = Object.entries(o.queries).map(function (_a) {
                        var _b = __read(_a, 2), W = _b[0], Q = _b[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Q);
                    }).join("&");
                    k && (l += (l.includes("?") ? "&" : "?") + k);
                }
                h = Object.assign({ "User-Agent": De }, xa(o.headers)), v = u.storageGet(r);
                v && !Object.keys(h).some(function (k) { return k.toLowerCase() === "cookie"; }) && (h.Cookie = v);
                p = o.body;
                if (p != null && typeof p == "object") {
                    k = Object.keys(h).find(function (W) { return W.toLowerCase() === "content-type"; });
                    k && /json/i.test(h[k]) ? p = JSON.stringify(p) : (p = Object.entries(p).map(function (_a) {
                        var _b = __read(_a, 2), W = _b[0], Q = _b[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Q);
                    }).join("&"), k || (h["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                g = { url: l, method: (o.method || (p != null ? "POST" : "GET")).toUpperCase(), headers: h, body: p, timeout: o.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, u.request(g)];
            case 2:
                A = _a.sent();
                return [3, 4];
            case 3:
                k_1 = _a.sent();
                A = { status: 0, url: l, headers: {}, text: "", error: String(k_1 && k_1.message || k_1) };
                return [3, 4];
            case 4: return [2, new It(A, g)];
        }
    }); });
}, a.Http = { get: function (i) { return F0(a, "GET", i); }, post: function (i) { return F0(a, "POST", i); } }, a.Html = { parse: function (i, s) { return Le(i, s || ""); }, clean: function (i, s) { return B0(i, s); } }, a.localStorage = t("ls:"), a.cacheStorage = t("cs:"), a.localConfig = { getItem: function (i) { return u.config(i); } }, a.localCookie = { setCookie: function (i) { u.storageSet(r, String(i).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, a.sleep = function (i) { return new Promise(function (s) { return setTimeout(s, Math.min(Number(i) || 0, 1e4)); }); }; var n = function () {
    var i = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        i[_i] = arguments[_i];
    }
    try {
        u.log && u.log(i.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return a.Log = { log: n }, a.console = { log: n, error: n, warn: n, info: n }, a.log = n, a.UserAgent = { system: function () { return De; }, chrome: function () { return De; }, android: function () { return De; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, a.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, a.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, a.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, a.Elements = cu, a.Element = ku, a.__meta = e, a; }
function F0(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, i) { return r.headers[n] = i, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
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
function Nu(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof URL == "undefined")
    return __abs(u, e); try {
    return new URL(e, u).href;
}
catch (t) {
    return e;
} }
var D = function (u) { return u == null ? "" : String(u); }, ya = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, Ue = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, a = e.host;
        this.meta = t, this.host = a, this.env = e.env || H0(a, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return D(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
                        a = function (s) { var o = _this.host.config(s); return o == null ? (_this.meta.configDefaults || {})[s] : o; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _a.sent();
                        if (typeof n != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(t.map(D)), false))];
                    case 2:
                        i = _a.sent();
                        if (!i)
                            throw new Error(e + ": empty result");
                        if (i.code !== 0)
                            throw new Error(e + ": " + D(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return D(e).replace(/\.js$/, ""); };
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
            var a, n, i, s, o;
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
                        i = _a.sent(), s = D(i.data2);
                        s && (this.tokens[a + "|" + (r + 1)] = s);
                        o = (i.data || []).filter(Boolean).map(function (l) { return ({ name: D(l.name).trim(), link: Nu(l.host || _this.base + "/", l.link), cover: Nu(l.host || _this.base + "/", l.cover), description: D(l.description), tag: D(l.tag) }); }).filter(function (l) { return l.name && l.link; });
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
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), D(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), D(r.input), e) : this.search("", e)];
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
                    return [2, { name: D(t.name).trim(), cover: Nu(t.host || this.base + "/", t.cover), author: D(t.author).trim(), description: V0(D(t.description)), detail: V0(D(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: ya(r.map(function (a) { return String(a).trim(); })), url: e, format: D(t.format) }];
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
                        return [4, this.run("toc", D(a))];
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
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: D(r.name).trim() || "#" + (a + 1), url: Nu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
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
                    case 6: return [2, (_a, typeof t == "string" && (t = t.split(/[\n,]+/)), (t || []).map(function (r) { return Nu(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
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
                    return [2, { html: D(t.data), title: D(t.data2) }];
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
                        Array.isArray(a) && a.length && (t = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: D(n.title || n.name || "Server"), data: D(n.data || n.url || n.link) }; }));
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
                                !s || !s.data || s.type !== "webview" && r.push({ url: Nu(s.host || this.base + "/", s.data), quality: a.title + (s.quality ? " " + s.quality : ""), headers: s.headers || { Referer: this.base + "/" }, subtitles: (s.subtitles || (s.subtitle ? [{ data: s.subtitle, label: "Sub" }] : [])).map(function (o) { return ({ file: Nu(_this.base + "/", o.data || o.file), label: D(o.label || o.language || "Sub") }); }), mimeType: D(s.mimeType) });
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
function V0(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var du = { id: "khotruyenchu", name: "Kho Truyện Chữ", source: "https://khotruyenchu.me/", type: "novel", locale: "vi_VN", nsfw: !1, version: 1, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.khotruyenchu", lnIcon: "", lnVersion: "1.0.1" }, G0 = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function T() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, n.success([{ title: "Truyện Hot", input: "/stories/hot?page=1&limit=24", script: "gen.js" }, { title: "Mới cập nhật", input: "/stories/latest?page=1&limit=24", script: "gen.js" }])];
                                        }); });
                                    } return __generator(this, function (_a) {
                                        return [2, typeof T == "function" ? T : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(f) { return f === null || typeof f == "undefined" ? "" : ("" + f).replace(/^\s+|\s+$/g, ""); } function L(f) { var c = S(f); return c ? c.indexOf("http://") === 0 || c.indexOf("https://") === 0 ? c : c.indexOf("//") === 0 ? "https:" + c : T + (c.charAt(0) === "/" ? "" : "/") + c : ""; } function G(f) { var c = S(f); return c ? L(c) : T; } function ru(f) { var c = S(f); if (!c)
                                        return ""; try {
                                        return S(a.parse("<div>" + c + "</div>").text());
                                    }
                                    catch (b) { } return c.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(f) { return S(ru(f).replace(/\s+/g, " ")); } function Gu(f, c) { var b = au(f), y = parseInt(c || "220", 10); if (!b || !y || b.length <= y)
                                        return b; var E = b.substring(0, y), m = E.lastIndexOf(" "); return m > 60 && (E = E.substring(0, m)), S(E) + "..."; } function hu(f) { return f ? L(f) : X; } function bu(f) { var c = G(f).match(/\/truyen\/([^\/?#]+)/i); return c && c[1] ? c[1] : ""; } function Cu(f) { var c = G(f).match(/\/chuong-(\d+)/i); return c && c[1] ? c[1] : ""; } function z() {
                                        return __awaiter(this, void 0, void 0, function () { var f, c, b; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(V + "/categories")];
                                                case 1:
                                                    f = _a.sent();
                                                    if (!f.ok)
                                                        return [2, n.success([])];
                                                    c = f.json();
                                                    if (!c || !c.data || !Array.isArray(c.data))
                                                        return [2, n.success([])];
                                                    b = [];
                                                    return [2, (c.data.forEach(function (y) { !y.slug || !y.name || b.push({ title: y.name, input: "/stories?category=" + encodeURIComponent(y.slug) + "&page=1&limit=24", script: "gen.js" }); }), n.success(b))];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof z == "function" ? z : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(f) { return f === null || typeof f == "undefined" ? "" : ("" + f).replace(/^\s+|\s+$/g, ""); } function L(f) { var c = S(f); return c ? c.indexOf("http://") === 0 || c.indexOf("https://") === 0 ? c : c.indexOf("//") === 0 ? "https:" + c : T + (c.charAt(0) === "/" ? "" : "/") + c : ""; } function G(f) { var c = S(f); return c ? L(c) : T; } function ru(f) { var c = S(f); if (!c)
                                        return ""; try {
                                        return S(a.parse("<div>" + c + "</div>").text());
                                    }
                                    catch (b) { } return c.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(f) { return S(ru(f).replace(/\s+/g, " ")); } function Gu(f, c) { var b = au(f), y = parseInt(c || "220", 10); if (!b || !y || b.length <= y)
                                        return b; var E = b.substring(0, y), m = E.lastIndexOf(" "); return m > 60 && (E = E.substring(0, m)), S(E) + "..."; } function hu(f) { return f ? L(f) : X; } function bu(f) { var c = G(f).match(/\/truyen\/([^\/?#]+)/i); return c && c[1] ? c[1] : ""; } function Cu(f) { var c = G(f).match(/\/chuong-(\d+)/i); return c && c[1] ? c[1] : ""; } function z(f) {
                                        return __awaiter(this, void 0, void 0, function () { var c, b, y, E, m, Z, M, q, O, B, P, U, J; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c = bu(f);
                                                    if (!c)
                                                        return [2, n.error("Không lấy được slug truyện.")];
                                                    b = V + "/stories/" + encodeURIComponent(c);
                                                    return [4, t(b)];
                                                case 1:
                                                    y = _a.sent();
                                                    if (!y.ok)
                                                        return [2, n.error("Không tải được thông tin truyện.")];
                                                    E = y.json();
                                                    if (!E || !E.data)
                                                        return [2, n.error("Dữ liệu không hợp lệ.")];
                                                    m = E.data, Z = m.title || m.story || "", M = hu(m.cover || m.coverUrl), q = m.author || "", O = [];
                                                    if (q && O.push("Tác giả: " + q), m.categories && Array.isArray(m.categories)) {
                                                        B = m.categories.map(function (pu) { return pu.name; });
                                                        B.length > 0 && O.push("Thể loại: " + B.join(", "));
                                                    }
                                                    P = "", U = !0;
                                                    m.status === "completed" || m.status === "hoan-thanh" ? (P = "Hoàn thành", U = !1) : (m.status === "ongoing" || m.status === "dang-tien-hanh") && (P = "Đang tiến hành", U = !0), P && O.push("Tình trạng: " + P), m.chapterCount && O.push("Số chương: " + m.chapterCount), m.views && O.push("Lượt xem: " + m.views);
                                                    J = m.description || "";
                                                    return [2, (m.updatedAt && (J && (J += "<br><br>"), J += "<b>Cập nhật:</b> " + m.updatedAt), n.success({ name: Z, cover: M, author: q, description: J, detail: O.join("<br>"), host: T, genres: [], ongoing: U }))];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof z == "function" ? z : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(f) { return f === null || typeof f == "undefined" ? "" : ("" + f).replace(/^\s+|\s+$/g, ""); } function L(f) { var c = S(f); return c ? c.indexOf("http://") === 0 || c.indexOf("https://") === 0 ? c : c.indexOf("//") === 0 ? "https:" + c : T + (c.charAt(0) === "/" ? "" : "/") + c : ""; } function G(f) { var c = S(f); return c ? L(c) : T; } function ru(f) { var c = S(f); if (!c)
                                        return ""; try {
                                        return S(a.parse("<div>" + c + "</div>").text());
                                    }
                                    catch (b) { } return c.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(f) { return S(ru(f).replace(/\s+/g, " ")); } function Gu(f, c) { var b = au(f), y = parseInt(c || "220", 10); if (!b || !y || b.length <= y)
                                        return b; var E = b.substring(0, y), m = E.lastIndexOf(" "); return m > 60 && (E = E.substring(0, m)), S(E) + "..."; } function hu(f) { return f ? L(f) : X; } function bu(f) { var c = G(f).match(/\/truyen\/([^\/?#]+)/i); return c && c[1] ? c[1] : ""; } function Cu(f) { var c = G(f).match(/\/chuong-(\d+)/i); return c && c[1] ? c[1] : ""; } function z(f, c) {
                                        return __awaiter(this, void 0, void 0, function () { var b, y, E, m, Z; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    b = S(f);
                                                    if (!b)
                                                        return [2, n.success([])];
                                                    y = V + "/stories/search?q=" + encodeURIComponent(b);
                                                    return [4, t(y)];
                                                case 1:
                                                    E = _a.sent();
                                                    if (!E.ok)
                                                        return [2, n.success([])];
                                                    m = E.json();
                                                    if (!m || !m.data || !Array.isArray(m.data))
                                                        return [2, n.success([])];
                                                    Z = [];
                                                    return [2, (m.data.forEach(function (M) { var q = M.title || M.story || "", O = M.slug || ""; if (!(!q || !O)) {
                                                            var B = "";
                                                            M.author && (B += "Tac giả: " + M.author), M.chapter && (B += (B ? " | " : "") + "Chương: " + M.chapter), Z.push({ name: q, link: T + "/truyen/" + O, cover: hu(M.cover || M.coverUrl), description: B, host: T });
                                                        } }), n.success(Z))];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof z == "function" ? z : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(f) { return f === null || typeof f == "undefined" ? "" : ("" + f).replace(/^\s+|\s+$/g, ""); } function L(f) { var c = S(f); return c ? c.indexOf("http://") === 0 || c.indexOf("https://") === 0 ? c : c.indexOf("//") === 0 ? "https:" + c : T + (c.charAt(0) === "/" ? "" : "/") + c : ""; } function G(f) { var c = S(f); return c ? L(c) : T; } function ru(f) { var c = S(f); if (!c)
                                        return ""; try {
                                        return S(a.parse("<div>" + c + "</div>").text());
                                    }
                                    catch (b) { } return c.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(f) { return S(ru(f).replace(/\s+/g, " ")); } function Gu(f, c) { var b = au(f), y = parseInt(c || "220", 10); if (!b || !y || b.length <= y)
                                        return b; var E = b.substring(0, y), m = E.lastIndexOf(" "); return m > 60 && (E = E.substring(0, m)), S(E) + "..."; } function hu(f) { return f ? L(f) : X; } function bu(f) { var c = G(f).match(/\/truyen\/([^\/?#]+)/i); return c && c[1] ? c[1] : ""; } function Cu(f) { var c = G(f).match(/\/chuong-(\d+)/i); return c && c[1] ? c[1] : ""; } function z(f) {
                                        return __awaiter(this, void 0, void 0, function () { var c, b, y, E, m, Z, M, q, O, B, P; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c = bu(f);
                                                    if (!c)
                                                        return [2, n.success([])];
                                                    return [4, t(V + "/stories/" + encodeURIComponent(c))];
                                                case 1:
                                                    b = _a.sent();
                                                    if (!b.ok)
                                                        return [2, n.success([])];
                                                    y = b.json();
                                                    if (!y || !y.data || !y.data.id)
                                                        return [2, n.success([])];
                                                    E = y.data.id, m = parseInt(y.data.chapterCount, 10) || 0, Z = [], M = 1, q = m > 0 ? Math.ceil(m / 50) : 1;
                                                    q < 1 && (q = 1);
                                                    _a.label = 2;
                                                case 2:
                                                    if (!(M <= q && M <= 100)) return [3, 5];
                                                    return [4, t(V + "/stories/" + E + "/chapters?page=" + M)];
                                                case 3:
                                                    O = _a.sent();
                                                    if (!O.ok)
                                                        return [3, 5];
                                                    B = O.json();
                                                    if (!B || !B.data || !Array.isArray(B.data))
                                                        return [3, 5];
                                                    P = B.data;
                                                    if (P.length === 0 || (P.forEach(function (U) { var J = U.title || "Chương " + U.chapterNumber, pu = T + "/truyen/" + c + "/chuong-" + U.chapterNumber; Z.push({ name: J, url: pu, host: T }); }), P.length < 50))
                                                        return [3, 5];
                                                    M += 1;
                                                    _a.label = 4;
                                                case 4: return [3, 2];
                                                case 5: return [2, n.success(Z)];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof z == "function" ? z : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(c) { return c === null || typeof c == "undefined" ? "" : ("" + c).replace(/^\s+|\s+$/g, ""); } function L(c) { var b = S(c); return b ? b.indexOf("http://") === 0 || b.indexOf("https://") === 0 ? b : b.indexOf("//") === 0 ? "https:" + b : T + (b.charAt(0) === "/" ? "" : "/") + b : ""; } function G(c) { var b = S(c); return b ? L(b) : T; } function ru(c) { var b = S(c); if (!b)
                                        return ""; try {
                                        return S(a.parse("<div>" + b + "</div>").text());
                                    }
                                    catch (y) { } return b.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(c) { return S(ru(c).replace(/\s+/g, " ")); } function Gu(c, b) { var y = au(c), E = parseInt(b || "220", 10); if (!y || !E || y.length <= E)
                                        return y; var m = y.substring(0, E), Z = m.lastIndexOf(" "); return Z > 60 && (m = m.substring(0, Z)), S(m) + "..."; } function hu(c) { return c ? L(c) : X; } function bu(c) { var b = G(c).match(/\/truyen\/([^\/?#]+)/i); return b && b[1] ? b[1] : ""; } function Cu(c) { var b = G(c).match(/\/chuong-(\d+)/i); return b && b[1] ? b[1] : ""; } function z(c) { return c ? (c = c.replace(/<script[\s\S]*?<\/script>/gi, ""), c = c.replace(/<style[\s\S]*?<\/style>/gi, ""), c = c.replace(/<noscript[\s\S]*?<\/noscript>/gi, ""), c = c.replace(/<iframe[\s\S]*?<\/iframe>/gi, ""), c = c.replace(/<p>\s*<\/p>/gi, ""), S(c)) : ""; } function f(c) {
                                        return __awaiter(this, void 0, void 0, function () { var b, y, E, m, Z, M, q, O, B, P, U, J, pu, Ut; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    b = bu(c), y = Cu(c);
                                                    if (!b || !y)
                                                        return [2, n.error("URL không hợp lệ.")];
                                                    return [4, t(V + "/stories/" + encodeURIComponent(b))];
                                                case 1:
                                                    E = _a.sent();
                                                    if (!E.ok)
                                                        return [2, n.error("Không tìm thấy truyện.")];
                                                    m = E.json();
                                                    if (!m || !m.data || !m.data.id)
                                                        return [2, n.error("Không tìm thấy truyện.")];
                                                    Z = m.data.id, M = parseInt(m.data.chapterCount, 10) || 0, q = Math.ceil(parseInt(y, 10) / 50), O = null;
                                                    return [4, t(V + "/stories/" + Z + "/chapters?page=" + q)];
                                                case 2:
                                                    B = _a.sent();
                                                    if (B.ok) {
                                                        P = B.json();
                                                        if (P && P.data && Array.isArray(P.data)) {
                                                            for (U = 0; U < P.data.length; U++)
                                                                if (String(P.data[U].chapterNumber) === String(y)) {
                                                                    O = P.data[U].id;
                                                                    break;
                                                                }
                                                        }
                                                    }
                                                    if (!O)
                                                        return [2, n.error("Không tìm thấy chương " + y + ".")];
                                                    return [4, t(V + "/chapters/" + O)];
                                                case 3:
                                                    J = _a.sent();
                                                    if (!J.ok)
                                                        return [2, n.error("Không tải được nội dung.")];
                                                    pu = J.json();
                                                    if (!pu || !pu.data || !pu.data.content)
                                                        return [2, n.error("Nội dung chương trống.")];
                                                    Ut = z(pu.data.content);
                                                    return [2, Ut ? n.success(Ut) : n.error("Nội dung chương trống.")];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof f == "function" ? f : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, gen: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, a, n, i, s, o, l, h, v, p, g, A, k, W, Q) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function S(f) { return f === null || typeof f == "undefined" ? "" : ("" + f).replace(/^\s+|\s+$/g, ""); } function L(f) { var c = S(f); return c ? c.indexOf("http://") === 0 || c.indexOf("https://") === 0 ? c : c.indexOf("//") === 0 ? "https:" + c : T + (c.charAt(0) === "/" ? "" : "/") + c : ""; } function G(f) { var c = S(f); return c ? L(c) : T; } function ru(f) { var c = S(f); if (!c)
                                        return ""; try {
                                        return S(a.parse("<div>" + c + "</div>").text());
                                    }
                                    catch (b) { } return c.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); } function au(f) { return S(ru(f).replace(/\s+/g, " ")); } function Gu(f, c) { var b = au(f), y = parseInt(c || "220", 10); if (!b || !y || b.length <= y)
                                        return b; var E = b.substring(0, y), m = E.lastIndexOf(" "); return m > 60 && (E = E.substring(0, m)), S(E) + "..."; } function hu(f) { return f ? L(f) : X; } function bu(f) { var c = G(f).match(/\/truyen\/([^\/?#]+)/i); return c && c[1] ? c[1] : ""; } function Cu(f) { var c = G(f).match(/\/chuong-(\d+)/i); return c && c[1] ? c[1] : ""; } function z(f, c) {
                                        return __awaiter(this, void 0, void 0, function () { var b, y, E, m, Z, M; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    c || (c = "1");
                                                    b = S(f), y = "";
                                                    b.indexOf("/stories/") === 0 ? y = V + b : b.indexOf("http") === 0 ? y = b : y = V + "/" + b.replace(/^\/+/, "");
                                                    return [4, t(y)];
                                                case 1:
                                                    E = _a.sent();
                                                    if (!E.ok)
                                                        return [2, n.success([])];
                                                    m = E.json();
                                                    if (!m || !m.data || !Array.isArray(m.data))
                                                        return [2, n.success([])];
                                                    Z = y.indexOf("/latest") > -1, M = [];
                                                    return [2, (m.data.forEach(function (q) { var O, B, P, U, J; Z ? (O = q.story || q.title || "", B = q.slug || "") : (O = q.title || q.story || "", B = q.slug || ""), !(!O || !B) && (P = T + "/truyen/" + B, J = hu(q.cover || q.coverUrl), U = "", q.author && (U += "Tac gi?: " + q.author), q.chapter && (U += (U ? " | " : "") + "Chuong: " + q.chapter), q.views && (U += (U ? " | " : "") + "Lu?t xem: " + q.views), q.time && (U += (U ? " | " : "") + q.time), M.push({ name: O, link: P, cover: J, description: U, host: T })); }), n.success(M))];
                                            }
                                        }); });
                                    } var T, V, X; return __generator(this, function (_a) {
                                        T = "https://khotruyenchu.me", V = "https://api.khotruyenchu.me/api/v1", X = T + "/khotruyenchu_logo.png";
                                        return [2, typeof z == "function" ? z : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function j0(u) { return new Ue({ meta: du, scripts: G0, host: u }); }
var wa = require("@libs/fetch").fetchApi, re = null;
try {
    re = require("@libs/storage");
}
catch (u) {
    re = null;
}
var Lt = {}, Oe = re && re.storage ? re.storage : { get: function (u) { return Lt[u]; }, set: function (u, e) { Lt[u] = e; }, delete: function (u) { delete Lt[u]; } }, Dt = (function () {
    function class_2() {
        var _this = this;
        this.id = du.lnId, this.name = du.name, this.icon = du.lnIcon, this.site = du.source, this.version = du.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = j0({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, a;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, wa(e.url, t)];
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
            }); }, storageGet: function (e) { var t = Oe.get("vb_" + e); return t == null ? null : String(t); }, storageSet: function (e, t) { t == null ? Oe.delete && Oe.delete("vb_" + e) : Oe.set("vb_" + e, String(t)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
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
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : du.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), Sa = new Dt;
