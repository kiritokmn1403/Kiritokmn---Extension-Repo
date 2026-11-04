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
var ze = Object.defineProperty, W0 = Object.defineProperties, K0 = Object.getOwnPropertyDescriptor, $0 = Object.getOwnPropertyDescriptors, Q0 = Object.getOwnPropertyNames, Ut = Object.getOwnPropertySymbols, X0 = Object.getPrototypeOf, Rt = Object.prototype.hasOwnProperty, Z0 = Object.prototype.propertyIsEnumerable;
var Mt = function (e, u, t) { return u in e ? ze(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, le = function (e, u) {
    var e_2, _a;
    for (var t in u || (u = {}))
        Rt.call(u, t) && Mt(e, t, u[t]);
    if (Ut)
        try {
            for (var _b = __values(Ut(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                Z0.call(u, t) && Mt(e, t, u[t]);
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
}, ve = function (e, u) { return W0(e, $0(u)); };
var J0 = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, Ru = function (e, u) { for (var t in u)
    ze(e, t, { get: u[t], enumerable: !0 }); }, Ht = function (e, u, t, r) {
    var e_3, _a;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (i) {
            !Rt.call(e, i) && i !== t && ze(e, i, { get: function () { return u[i]; }, enumerable: !(r = K0(u, i)) || r.enumerable });
        };
        try {
            for (var _b = __values(Q0(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                _loop_1(i);
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
var Te = function (e, u, t) { return (t = e != null ? z0(X0(e)) : {}, Ht(u || !e || !e.__esModule ? ze(t, "default", { value: e, enumerable: !0 }) : t, e)); }, _0 = function (e) { return Ht(ze({}, "__esModule", { value: !0 }), e); };
var Ae = J0(function (Ja, d0) { d0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Ai = {};
Ru(Ai, { default: function () { return Si; } });
module.exports = _0(Ai);
var au = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var nu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Hu, Y0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Le = (Hu = String.fromCodePoint) !== null && Hu !== void 0 ? Hu : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function Bu(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = Y0.get(e)) !== null && u !== void 0 ? u : e; }
var z;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(z || (z = {}));
var er = 32, xe;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(xe || (xe = {}));
function Fu(e) { return e >= z.ZERO && e <= z.NINE; }
function ur(e) { return e >= z.UPPER_A && e <= z.UPPER_F || e >= z.LOWER_A && e <= z.LOWER_F; }
function tr(e) { return e >= z.UPPER_A && e <= z.UPPER_Z || e >= z.LOWER_A && e <= z.LOWER_Z || Fu(e); }
function rr(e) { return e === z.EQUALS || tr(e); }
var j;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(j || (j = {}));
var re;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(re || (re = {}));
var De = (function () {
    function De(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = j.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = re.Strict;
    }
    De.prototype.startEntity = function (u) { this.decodeMode = u, this.state = j.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    De.prototype.write = function (u, t) { switch (this.state) {
        case j.EntityStart: return u.charCodeAt(t) === z.NUM ? (this.state = j.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = j.NamedEntity, this.stateNamedEntity(u, t));
        case j.NumericStart: return this.stateNumericStart(u, t);
        case j.NumericDecimal: return this.stateNumericDecimal(u, t);
        case j.NumericHex: return this.stateNumericHex(u, t);
        case j.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    De.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | er) === z.LOWER_X ? (this.state = j.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = j.NumericDecimal, this.stateNumericDecimal(u, t)); };
    De.prototype.addToNumericResult = function (u, t, r, i) { if (t !== r) {
        var a = r - t;
        this.result = this.result * Math.pow(i, a) + parseInt(u.substr(t, a), i), this.consumed += a;
    } };
    De.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var i = u.charCodeAt(t);
        if (Fu(i) || ur(i))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(i, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    De.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var i = u.charCodeAt(t);
        if (Fu(i))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(i, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    De.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === z.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === re.Strict)
        return 0; return this.emitCodePoint(Bu(this.result), this.consumed), this.errors && (u !== z.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    De.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, i = r[this.treeIndex], a = (i & xe.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var n = u.charCodeAt(t);
        if (this.treeIndex = ir(r, i, this.treeIndex + Math.max(1, a), n), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === re.Attribute && (a === 0 || rr(n)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (i = r[this.treeIndex], a = (i & xe.VALUE_LENGTH) >> 14, a !== 0) {
            if (n === z.SEMI)
                return this.emitNamedEntityData(this.treeIndex, a, this.consumed + this.excess);
            this.decodeMode !== re.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    De.prototype.emitNotTerminatedNamedEntity = function () { var u; var _a = this, t = _a.result, r = _a.decodeTree, i = (r[t] & xe.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, i, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    De.prototype.emitNamedEntityData = function (u, t, r) { var i = this.decodeTree; return this.emitCodePoint(t === 1 ? i[u] & ~xe.VALUE_LENGTH : i[u + 1], r), t === 3 && this.emitCodePoint(i[u + 2], r), r; };
    De.prototype.end = function () { var u; switch (this.state) {
        case j.NamedEntity: return this.result !== 0 && (this.decodeMode !== re.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case j.NumericDecimal: return this.emitNumericEntity(0, 2);
        case j.NumericHex: return this.emitNumericEntity(0, 3);
        case j.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case j.EntityStart: return 0;
    } };
    return De;
}());
function Bt(e) { var u = "", t = new De(e, function (r) { return u += Le(r); }); return function (i, a) { var n = 0, s = 0; for (; (s = i.indexOf("&", s)) >= 0;) {
    u += i.slice(n, s), t.startEntity(a);
    var o = t.write(i, s + 1);
    if (o < 0) {
        n = s + t.end();
        break;
    }
    n = s + o, s = o === 0 ? n + 1 : n;
} var c = u + i.slice(n); return u = "", c; }; }
function ir(e, u, t, r) { var i = (u & xe.BRANCH_LENGTH) >> 7, a = u & xe.JUMP_TABLE; if (i === 0)
    return a !== 0 && r === a ? t : -1; if (a) {
    var c = r - a;
    return c < 0 || c >= i ? -1 : e[t + c] - 1;
} var n = t, s = n + i - 1; for (; n <= s;) {
    var c = n + s >>> 1, o = e[c];
    if (o < r)
        n = c + 1;
    else if (o > r)
        s = c - 1;
    else
        return e[c + i];
} return -1; }
var Li = Bt(au), Di = Bt(nu);
var m;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(m || (m = {}));
var f;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(f || (f = {}));
function be(e) { return e === m.Space || e === m.NewLine || e === m.Tab || e === m.FormFeed || e === m.CarriageReturn; }
function su(e) { return e === m.Slash || e === m.Gt || be(e); }
function ar(e) { return e >= m.LowerA && e <= m.LowerZ || e >= m.UpperA && e <= m.UpperZ; }
var ne;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(ne || (ne = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Oe = (function () {
    function Oe(_a, r) {
        var _b = _a.xmlMode, u = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = f.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new De(u ? nu : au, function (i, a) { return _this.emitCodePoint(i, a); });
    }
    Oe.prototype.reset = function () { this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = f.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Oe.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    Oe.prototype.end = function () { this.running && this.finish(); };
    Oe.prototype.pause = function () { this.running = !1; };
    Oe.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Oe.prototype.stateText = function (u) { u === m.Lt || !this.decodeEntities && this.fastForwardTo(m.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = f.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === m.Amp && this.startEntity(); };
    Oe.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? su(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = f.InTagName, this.stateInTagName(u); };
    Oe.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === m.Gt || be(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && u === m.Amp && this.startEntity() : this.fastForwardTo(m.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === m.Lt); };
    Oe.prototype.stateCDATASequence = function (u) { u === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = f.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = f.InDeclaration, this.stateInDeclaration(u)); };
    Oe.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Oe.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = f.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Oe.prototype.isTagStartChar = function (u) { return this.xmlMode ? !su(u) : ar(u); };
    Oe.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = f.SpecialStartSequence; };
    Oe.prototype.stateBeforeTagName = function (u) { if (u === m.ExclamationMark)
        this.state = f.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === m.Questionmark)
        this.state = f.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = f.InTagName : t === $.ScriptEnd[2] ? this.state = f.BeforeSpecialS : t === $.TitleEnd[2] ? this.state = f.BeforeSpecialT : this.state = f.InTagName;
    }
    else
        u === m.Slash ? this.state = f.BeforeClosingTagName : (this.state = f.Text, this.stateText(u)); };
    Oe.prototype.stateInTagName = function (u) { su(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Oe.prototype.stateBeforeClosingTagName = function (u) { be(u) || (u === m.Gt ? this.state = f.Text : (this.state = this.isTagStartChar(u) ? f.InClosingTagName : f.InSpecialComment, this.sectionStart = this.index)); };
    Oe.prototype.stateInClosingTagName = function (u) { (u === m.Gt || be(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    Oe.prototype.stateAfterClosingTagName = function (u) { (u === m.Gt || this.fastForwardTo(m.Gt)) && (this.state = f.Text, this.sectionStart = this.index + 1); };
    Oe.prototype.stateBeforeAttributeName = function (u) { u === m.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = f.InSpecialTag, this.sequenceIndex = 0) : this.state = f.Text, this.sectionStart = this.index + 1) : u === m.Slash ? this.state = f.InSelfClosingTag : be(u) || (this.state = f.InAttributeName, this.sectionStart = this.index); };
    Oe.prototype.stateInSelfClosingTag = function (u) { u === m.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = f.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : be(u) || (this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Oe.prototype.stateInAttributeName = function (u) { (u === m.Eq || su(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = f.AfterAttributeName, this.stateAfterAttributeName(u)); };
    Oe.prototype.stateAfterAttributeName = function (u) { u === m.Eq ? this.state = f.BeforeAttributeValue : u === m.Slash || u === m.Gt ? (this.cbs.onattribend(ne.NoValue, this.sectionStart), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(u)) : be(u) || (this.cbs.onattribend(ne.NoValue, this.sectionStart), this.state = f.InAttributeName, this.sectionStart = this.index); };
    Oe.prototype.stateBeforeAttributeValue = function (u) { u === m.DoubleQuote ? (this.state = f.InAttributeValueDq, this.sectionStart = this.index + 1) : u === m.SingleQuote ? (this.state = f.InAttributeValueSq, this.sectionStart = this.index + 1) : be(u) || (this.sectionStart = this.index, this.state = f.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    Oe.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === m.DoubleQuote ? ne.Double : ne.Single, this.index + 1), this.state = f.BeforeAttributeName) : this.decodeEntities && u === m.Amp && this.startEntity(); };
    Oe.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, m.DoubleQuote); };
    Oe.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, m.SingleQuote); };
    Oe.prototype.stateInAttributeValueNoQuotes = function (u) { be(u) || u === m.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ne.Unquoted, this.index), this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === m.Amp && this.startEntity(); };
    Oe.prototype.stateBeforeDeclaration = function (u) { u === m.OpeningSquareBracket ? (this.state = f.CDATASequence, this.sequenceIndex = 0) : this.state = u === m.Dash ? f.BeforeComment : f.InDeclaration; };
    Oe.prototype.stateInDeclaration = function (u) { (u === m.Gt || this.fastForwardTo(m.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Oe.prototype.stateInProcessingInstruction = function (u) { (u === m.Gt || this.fastForwardTo(m.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1); };
    Oe.prototype.stateBeforeComment = function (u) { u === m.Dash ? (this.state = f.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = f.InDeclaration; };
    Oe.prototype.stateInSpecialComment = function (u) { (u === m.Gt || this.fastForwardTo(m.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = f.Text, this.sectionStart = this.index + 1); };
    Oe.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : t === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = f.InTagName, this.stateInTagName(u)); };
    Oe.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : t === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = f.InTagName, this.stateInTagName(u)); };
    Oe.prototype.startEntity = function () { this.baseState = this.state, this.state = f.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? re.Strict : this.baseState === f.Text || this.baseState === f.InSpecialTag ? re.Legacy : re.Attribute); };
    Oe.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Oe.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === f.Text || this.state === f.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === f.InAttributeValueDq || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Oe.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Oe.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case f.Text: {
                this.stateText(u);
                break;
            }
            case f.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case f.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case f.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case f.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case f.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case f.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case f.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case f.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case f.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case f.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case f.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case f.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case f.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case f.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case f.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case f.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case f.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case f.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case f.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case f.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case f.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case f.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case f.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case f.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case f.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Oe.prototype.finish = function () { this.state === f.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Oe.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === f.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === f.InTagName || this.state === f.BeforeAttributeName || this.state === f.BeforeAttributeValue || this.state === f.AfterAttributeName || this.state === f.InAttributeName || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueDq || this.state === f.InAttributeValueNq || this.state === f.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    Oe.prototype.emitCodePoint = function (u, t) { this.baseState !== f.Text && this.baseState !== f.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return Oe;
}());
var Ue = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), q = new Set(["p"]), Ft = new Set(["thead", "tbody"]), Pt = new Set(["dd", "dt"]), Vt = new Set(["rt", "rp"]), nr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", q], ["h1", q], ["h2", q], ["h3", q], ["h4", q], ["h5", q], ["h6", q], ["select", Ue], ["input", Ue], ["output", Ue], ["button", Ue], ["datalist", Ue], ["textarea", Ue], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Pt], ["dt", Pt], ["address", q], ["article", q], ["aside", q], ["blockquote", q], ["details", q], ["div", q], ["dl", q], ["fieldset", q], ["figcaption", q], ["figure", q], ["footer", q], ["form", q], ["header", q], ["hr", q], ["main", q], ["nav", q], ["ol", q], ["pre", q], ["section", q], ["table", q], ["ul", q], ["rt", Vt], ["rp", Vt], ["tbody", Ft], ["tfoot", Ft]]), sr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Gt = new Set(["math", "svg"]), jt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), cr = /\s|\//, We = (function () {
    function We(u, t) {
        if (t === void 0) { t = {}; }
        var r, i, a, n, s, c;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (i = t.lowerCaseAttributeNames) !== null && i !== void 0 ? i : this.htmlMode, this.recognizeSelfClosing = (a = t.recognizeSelfClosing) !== null && a !== void 0 ? a : !this.htmlMode, this.tokenizer = new ((n = t.Tokenizer) !== null && n !== void 0 ? n : Oe)(this.options, this), this.foreignContext = [!this.htmlMode], (c = (s = this.cbs).onparserinit) === null || c === void 0 || c.call(s, this);
    }
    We.prototype.ontext = function (u, t) { var r, i; var a = this.getSlice(u, t); this.endIndex = t - 1, (i = (r = this.cbs).ontext) === null || i === void 0 || i.call(r, a), this.startIndex = t; };
    We.prototype.ontextentity = function (u, t) { var r, i; this.endIndex = t - 1, (i = (r = this.cbs).ontext) === null || i === void 0 || i.call(r, Le(u)), this.startIndex = t; };
    We.prototype.isVoidElement = function (u) { return this.htmlMode && sr.has(u); };
    We.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    We.prototype.emitOpenTag = function (u) { var t, r, i, a; this.openTagStart = this.startIndex, this.tagname = u; var n = this.htmlMode && nr.get(u); if (n)
        for (; this.stack.length > 0 && n.has(this.stack[0]);) {
            var s = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, s, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && (Gt.has(u) ? this.foreignContext.unshift(!0) : jt.has(u) && this.foreignContext.unshift(!1))), (a = (i = this.cbs).onopentagname) === null || a === void 0 || a.call(i, u), this.cbs.onopentag && (this.attribs = {}); };
    We.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    We.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    We.prototype.onclosetag = function (u, t) { var r, i, a, n, s, c, o, d; this.endIndex = t; var x = this.getSlice(u, t); if (this.lowerCaseTagNames && (x = x.toLowerCase()), this.htmlMode && (Gt.has(x) || jt.has(x)) && this.foreignContext.shift(), this.isVoidElement(x))
        this.htmlMode && x === "br" && ((n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, "br"), (c = (s = this.cbs).onopentag) === null || c === void 0 || c.call(s, "br", {}, !0), (d = (o = this.cbs).onclosetag) === null || d === void 0 || d.call(o, "br", !1));
    else {
        var b = this.stack.indexOf(x);
        if (b !== -1)
            for (var p = 0; p <= b; p++) {
                var y = this.stack.shift();
                (i = (r = this.cbs).onclosetag) === null || i === void 0 || i.call(r, y, p !== b);
            }
        else
            this.htmlMode && x === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    We.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    We.prototype.closeCurrentTag = function (u) { var t, r; var i = this.tagname; this.endOpenTag(u), this.stack[0] === i && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, i, !u), this.stack.shift()); };
    We.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    We.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    We.prototype.onattribentity = function (u) { this.attribvalue += Le(u); };
    We.prototype.onattribend = function (u, t) { var r, i; this.endIndex = t, (i = (r = this.cbs).onattribute) === null || i === void 0 || i.call(r, this.attribname, this.attribvalue, u === ne.Double ? '"' : u === ne.Single ? "'" : u === ne.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    We.prototype.getInstructionName = function (u) { var t = u.search(cr), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    We.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(i), "!".concat(r));
    } this.startIndex = t + 1; };
    We.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(i), "?".concat(r));
    } this.startIndex = t + 1; };
    We.prototype.oncomment = function (u, t, r) { var i, a, n, s; this.endIndex = t, (a = (i = this.cbs).oncomment) === null || a === void 0 || a.call(i, this.getSlice(u, t - r)), (s = (n = this.cbs).oncommentend) === null || s === void 0 || s.call(n), this.startIndex = t + 1; };
    We.prototype.oncdata = function (u, t, r) { var i, a, n, s, c, o, d, x, b, p; this.endIndex = t; var y = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((a = (i = this.cbs).oncdatastart) === null || a === void 0 || a.call(i), (s = (n = this.cbs).ontext) === null || s === void 0 || s.call(n, y), (o = (c = this.cbs).oncdataend) === null || o === void 0 || o.call(c)) : ((x = (d = this.cbs).oncomment) === null || x === void 0 || x.call(d, "[CDATA[".concat(y, "]]")), (p = (b = this.cbs).oncommentend) === null || p === void 0 || p.call(b)), this.startIndex = t + 1; };
    We.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    We.prototype.reset = function () { var u, t, r, i; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (r = this.cbs).onparserinit) === null || i === void 0 || i.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
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
var cu = {};
Ru(cu, { CDATA: function () { return Qu; }, Comment: function () { return zu; }, Directive: function () { return ju; }, Doctype: function () { return Xu; }, ElementType: function () { return A; }, Root: function () { return Vu; }, Script: function () { return Wu; }, Style: function () { return Ku; }, Tag: function () { return $u; }, Text: function () { return Gu; }, isTag: function () { return Pu; } });
var A;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(A || (A = {}));
function Pu(e) { return e.type === A.Tag || e.type === A.Script || e.type === A.Style; }
var Vu = A.Root, Gu = A.Text, ju = A.Directive, zu = A.Comment, Wu = A.Script, Ku = A.Style, $u = A.Tag, Qu = A.CDATA, Xu = A.Doctype;
var ou = (function () {
    function ou() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ou.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ou.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ou.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    ou.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return zt(this, u);
    };
    return ou;
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
}(ou)), Me = (function (_super) {
    __extends(Me, _super);
    function Me() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = A.Text;
        return _this;
    }
    Object.defineProperty(Me.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Me;
}(Ke)), $e = (function (_super) {
    __extends($e, _super);
    function $e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = A.Comment;
        return _this;
    }
    Object.defineProperty($e.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return $e;
}(Ke)), Qe = (function (_super) {
    __extends(Qe, _super);
    function Qe(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = A.Directive;
        return _this;
    }
    Object.defineProperty(Qe.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Qe;
}(Ke)), Xe = (function (_super) {
    __extends(Xe, _super);
    function Xe(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(Xe.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xe.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return Xe;
}(ou)), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = A.CDATA;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(Xe)), Re = (function (_super) {
    __extends(Re, _super);
    function Re() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = A.Root;
        return _this;
    }
    Object.defineProperty(Re.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(Xe)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(u, t, r, i) {
        if (r === void 0) { r = []; }
        if (i === void 0) { i = u === "script" ? A.Script : u === "style" ? A.Style : A.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = i;
        return _this;
    }
    Object.defineProperty(Je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Je;
}(Xe));
function N(e) { return Pu(e); }
function He(e) { return e.type === A.CDATA; }
function fe(e) { return e.type === A.Text; }
function _e(e) { return e.type === A.Comment; }
function or(e) { return e.type === A.Directive; }
function Ju(e) { return e.type === A.Root; }
function Z(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function zt(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (fe(e))
        t = new Me(e.data);
    else if (_e(e))
        t = new $e(e.data);
    else if (N(e)) {
        var r = u ? Zu(e.children) : [], i_1 = new Je(e.name, le({}, e.attribs), r);
        r.forEach(function (a) { return a.parent = i_1; }), e.namespace != null && (i_1.namespace = e.namespace), e["x-attribsNamespace"] && (i_1["x-attribsNamespace"] = le({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i_1["x-attribsPrefix"] = le({}, e["x-attribsPrefix"])), t = i_1;
    }
    else if (He(e)) {
        var r = u ? Zu(e.children) : [], i_2 = new Ze(r);
        r.forEach(function (a) { return a.parent = i_2; }), t = i_2;
    }
    else if (Ju(e)) {
        var r = u ? Zu(e.children) : [], i_3 = new Re(r);
        r.forEach(function (a) { return a.parent = i_3; }), e["x-mode"] && (i_3["x-mode"] = e["x-mode"]), t = i_3;
    }
    else if (or(e)) {
        var r = new Qe(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function Zu(e) { var u = e.map(function (t) { return zt(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var Wt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Be = (function () {
    function Be(u, t, r) {
        this.dom = [], this.root = new Re(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Wt), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : Wt, this.elementCB = r != null ? r : null;
    }
    Be.prototype.onparserinit = function (u) { this.parser = u; };
    Be.prototype.onreset = function () { this.dom = [], this.root = new Re(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Be.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Be.prototype.onerror = function (u) { this.handleCallback(u); };
    Be.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    Be.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? A.Tag : void 0, i = new Je(u, t, void 0, r); this.addNode(i), this.tagStack.push(i); };
    Be.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === A.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Me(u);
        this.addNode(r), this.lastNode = r;
    } };
    Be.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === A.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new $e(u); this.addNode(t), this.lastNode = t; };
    Be.prototype.oncommentend = function () { this.lastNode = null; };
    Be.prototype.oncdatastart = function () { var u = new Me(""), t = new Ze([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    Be.prototype.oncdataend = function () { this.lastNode = null; };
    Be.prototype.onprocessinginstruction = function (u, t) { var r = new Qe(u, t); this.addNode(r); };
    Be.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    Be.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return Be;
}());
var de = {};
Ru(de, { DocumentPosition: function () { return se; }, append: function () { return qr; }, appendChild: function () { return Cr; }, compareDocumentPosition: function () { return n0; }, existsOne: function () { return i0; }, filter: function () { return Pe; }, find: function () { return gu; }, findAll: function () { return Dr; }, findOne: function () { return mu; }, findOneChild: function () { return Lr; }, getAttributeValue: function () { return vr; }, getChildren: function () { return bu; }, getElementById: function () { return Rr; }, getElements: function () { return Mr; }, getElementsByClassName: function () { return Hr; }, getElementsByTagName: function () { return Ne; }, getElementsByTagType: function () { return Br; }, getFeed: function () { return ot; }, getInnerHTML: function () { return Er; }, getName: function () { return Nr; }, getOuterHTML: function () { return t0; }, getParent: function () { return r0; }, getSiblings: function () { return pu; }, getText: function () { return hu; }, hasAttrib: function () { return Tr; }, hasChildren: function () { return Z; }, innerText: function () { return rt; }, isCDATA: function () { return He; }, isComment: function () { return _e; }, isDocument: function () { return Ju; }, isTag: function () { return N; }, isText: function () { return fe; }, nextElementSibling: function () { return it; }, prepend: function () { return nt; }, prependChild: function () { return Ir; }, prevElementSibling: function () { return at; }, removeElement: function () { return pe; }, removeSubsets: function () { return Fr; }, replaceElement: function () { return kr; }, testElement: function () { return Ur; }, textContent: function () { return ye; }, uniqueSort: function () { return ct; } });
function lu(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var lr = new Map(lu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(lu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(lu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(lu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var _u = /["&'<>$\x80-\uFFFF]/g, Kt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), $t = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function Ye(e) { var u = "", t = 0, r; for (; (r = _u.exec(e)) !== null;) {
    var i = r.index, a = e.charCodeAt(i), n = Kt.get(a);
    n !== void 0 ? (u += e.substring(t, i) + n, t = i + 1) : (u += "".concat(e.substring(t, i), "&#x").concat($t(e, i).toString(16), ";"), t = _u.lastIndex += +((a & 64512) === 55296));
} return u + e.substr(t); }
function Yu(e, u) { return function (r) { var i, a = 0, n = ""; for (; i = e.exec(r);)
    a !== i.index && (n += r.substring(a, i.index)), n += u.get(i[0].charCodeAt(0)), a = i.index + 1; return n + r.substring(a); }; }
var Qt = Yu(/[&<>'"]/g, Kt), fu = Yu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), du = Yu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Xt;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Xt || (Xt = {}));
var Zt;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Zt || (Zt = {}));
var Yt = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), e0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var dr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function hr(e) { return e.replace(/"/g, "&quot;"); }
function br(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? hr : u.xmlMode || u.encodeEntities !== "utf8" ? Ye : fu; return Object.keys(e).map(function (i) { var a, n; var s = (a = e[i]) !== null && a !== void 0 ? a : ""; return u.xmlMode === "foreign" && (i = (n = e0.get(i)) !== null && n !== void 0 ? n : i), !u.emptyAttrs && !u.xmlMode && s === "" ? i : "".concat(i, "=\"").concat(r(s), "\""); }).join(" "); }
var u0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function tt(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var i = 0; i < t.length; i++)
        r += pr(t[i], u);
    return r;
}
var Fe = tt;
function pr(e, u) { switch (e.type) {
    case Vu: return tt(e.children, u);
    case Xu:
    case ju: return yr(e);
    case zu: return Ar(e);
    case Qu: return Sr(e);
    case Wu:
    case Ku:
    case $u: return xr(e, u);
    case Gu: return wr(e, u);
} }
var gr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), mr = new Set(["svg", "math"]);
function xr(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = Yt.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && gr.has(e.parent.name) && (u = ve(le({}, u), { xmlMode: !1 }))), !u.xmlMode && mr.has(e.name) && (u = ve(le({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), i = br(e.attribs, u); return i && (r += " ".concat(i)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && u0.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += tt(e.children, u)), (u.xmlMode || !u0.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function yr(e) { return "<".concat(e.data, ">"); }
function wr(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && dr.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? Ye(r) : du(r)), r; }
function Sr(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Ar(e) { return "<!--".concat(e.data, "-->"); }
function t0(e, u) { return Fe(e, u); }
function Er(e, u) { return Z(e) ? e.children.map(function (t) { return t0(t, u); }).join("") : ""; }
function hu(e) {
    return Array.isArray(e) ? e.map(hu).join("") : N(e) ? e.name === "br" ? "\n" : hu(e.children) : He(e) ? hu(e.children) : fe(e) ? e.data : "";
}
function ye(e) { return Array.isArray(e) ? e.map(ye).join("") : Z(e) && !_e(e) ? ye(e.children) : fe(e) ? e.data : ""; }
function rt(e) { return Array.isArray(e) ? e.map(rt).join("") : Z(e) && (e.type === A.Tag || He(e)) ? rt(e.children) : fe(e) ? e.data : ""; }
function bu(e) { return Z(e) ? e.children : []; }
function r0(e) { return e.parent || null; }
function pu(e) {
    var _a, _b;
    var u = r0(e);
    if (u != null)
        return bu(u);
    var t = [e], r = e.prev, i = e.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; i != null;)
        t.push(i), _b = i, i = _b.next;
    return t;
}
function vr(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function Tr(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function Nr(e) { return e.name; }
function it(e) {
    var _a;
    var u = e.next;
    for (; u !== null && !N(u);)
        (_a = u, u = _a.next);
    return u;
}
function at(e) {
    var _a;
    var u = e.prev;
    for (; u !== null && !N(u);)
        (_a = u, u = _a.prev);
    return u;
}
function pe(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function kr(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var i = u.parent = e.parent; if (i) {
    var a = i.children;
    a[a.lastIndexOf(e)] = u, e.parent = null;
} }
function Cr(e, u) { if (pe(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function qr(e, u) { pe(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var i = t.children;
        i.splice(i.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function Ir(e, u) { if (pe(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function nt(e, u) { pe(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function Pe(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return gu(e, Array.isArray(u) ? u : [u], t, r);
}
function gu(e, u, t, r) { var i = [], a = [Array.isArray(u) ? u : [u]], n = [0]; for (;;) {
    if (n[0] >= a[0].length) {
        if (n.length === 1)
            return i;
        a.shift(), n.shift();
        continue;
    }
    var s = a[0][n[0]++];
    if (e(s) && (i.push(s), --r <= 0))
        return i;
    t && Z(s) && s.children.length > 0 && (n.unshift(0), a.unshift(s.children));
} }
function Lr(e, u) { return u.find(e); }
function mu(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var i = 0; i < r.length; i++) {
        var a = r[i];
        if (N(a) && e(a))
            return a;
        if (t && Z(a) && a.children.length > 0) {
            var n = mu(e, a.children, !0);
            if (n)
                return n;
        }
    }
    return null;
}
function i0(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return N(t) && e(t) || Z(t) && i0(e, t.children); }); }
function Dr(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], i = [0]; for (;;) {
    if (i[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), i.shift();
        continue;
    }
    var a = r[0][i[0]++];
    N(a) && e(a) && t.push(a), Z(a) && a.children.length > 0 && (i.unshift(0), r.unshift(a.children));
} }
var xu = { tag_name: function (e) { return typeof e == "function" ? function (u) { return N(u) && e(u.name); } : e === "*" ? N : function (u) { return N(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return fe(u) && e(u.data); } : function (u) { return fe(u) && u.data === e; }; } };
function st(e, u) { return typeof u == "function" ? function (t) { return N(t) && u(t.attribs[e]); } : function (t) { return N(t) && t.attribs[e] === u; }; }
function Or(e, u) { return function (t) { return e(t) || u(t); }; }
function a0(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(xu, t) ? xu[t](r) : st(t, r); }); return u.length === 0 ? null : u.reduce(Or); }
function Ur(e, u) { var t = a0(e); return t ? t(u) : !0; }
function Mr(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var i = a0(e);
    return i ? Pe(i, u, t, r) : [];
}
function Rr(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), mu(st("id", e), u, t);
}
function Ne(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pe(xu.tag_name(e), u, t, r);
}
function Hr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pe(st("class", e), u, t, r);
}
function Br(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Pe(xu.tag_type(e), u, t, r);
}
function Fr(e) { var u = e.length; for (; --u >= 0;) {
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
var se;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(se || (se = {}));
function n0(e, u) { var t = [], r = []; if (e === u)
    return 0; var i = Z(e) ? e : e.parent; for (; i;)
    t.unshift(i), i = i.parent; for (i = Z(u) ? u : u.parent; i;)
    r.unshift(i), i = i.parent; var a = Math.min(t.length, r.length), n = 0; for (; n < a && t[n] === r[n];)
    n++; if (n === 0)
    return se.DISCONNECTED; var s = t[n - 1], c = s.children, o = t[n], d = r[n]; return c.indexOf(o) > c.indexOf(d) ? s === u ? se.FOLLOWING | se.CONTAINED_BY : se.FOLLOWING : s === e ? se.PRECEDING | se.CONTAINS : se.PRECEDING; }
function ct(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = n0(u, t); return r & se.PRECEDING ? -1 : r & se.FOLLOWING ? 1 : 0; }), e; }
function ot(e) { var u = yu(zr, e); return u ? u.name === "feed" ? Pr(u) : Vr(u) : null; }
function Pr(e) { var u; var t = e.children, r = { type: "atom", items: Ne("entry", t).map(function (n) { var s; var c = n.children, o = { media: s0(c) }; ee(o, "id", "id", c), ee(o, "title", "title", c); var d = (s = yu("link", c)) === null || s === void 0 ? void 0 : s.attribs.href; d && (o.link = d); var x = we("summary", c) || we("content", c); x && (o.description = x); var b = we("updated", c); return b && (o.pubDate = new Date(b)), o; }) }; ee(r, "id", "id", t), ee(r, "title", "title", t); var i = (u = yu("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; i && (r.link = i), ee(r, "description", "subtitle", t); var a = we("updated", t); return a && (r.updated = new Date(a)), ee(r, "author", "email", t, !0), r; }
function Vr(e) { var u, t; var r = (t = (u = yu("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], i = { type: e.name.substr(0, 3), id: "", items: Ne("item", e.children).map(function (n) { var s = n.children, c = { media: s0(s) }; ee(c, "id", "guid", s), ee(c, "title", "title", s), ee(c, "link", "link", s), ee(c, "description", "description", s); var o = we("pubDate", s) || we("dc:date", s); return o && (c.pubDate = new Date(o)), c; }) }; ee(i, "title", "title", r), ee(i, "link", "link", r), ee(i, "description", "description", r); var a = we("lastBuildDate", r); return a && (i.updated = new Date(a)), ee(i, "author", "managingEditor", r, !0), i; }
var Gr = ["url", "type", "lang"], jr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function s0(e) { return Ne("media:content", e).map(function (u) {
    var e_4, _a, e_5, _b;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Gr_1 = __values(Gr), Gr_1_1 = Gr_1.next(); !Gr_1_1.done; Gr_1_1 = Gr_1.next()) {
            var i = Gr_1_1.value;
            t[i] && (r[i] = t[i]);
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
            var i = jr_1_1.value;
            t[i] && (r[i] = parseInt(t[i], 10));
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
function yu(e, u) { return Ne(e, u, !0, 1)[0]; }
function we(e, u, t) {
    if (t === void 0) { t = !1; }
    return ye(Ne(e, u, t, 1)).trim();
}
function ee(e, u, t, r, i) {
    if (i === void 0) { i = !1; }
    var a = we(t, r, i);
    a && (e[u] = a);
}
function zr(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function c0(e, u) { var t = new Be(void 0, u); return new We(t, u).end(e), t.root; }
var g;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(g || (g = {}));
var V;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(V || (V = {}));
var o0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Wr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Kr = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), $r = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function ke(e) { switch (e.type) {
    case g.Adjacent:
    case g.Child:
    case g.Descendant:
    case g.Parent:
    case g.Sibling:
    case g.ColumnCombinator: return !0;
    default: return !1;
} }
var Qr = new Set(["contains", "icontains"]);
function Xr(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function eu(e) { return e.replace(Wr, Xr); }
function lt(e) { return e === 39 || e === 34; }
function l0(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function Se(e) { var u = [], t = f0(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function f0(e, u, t) { var r = []; function i(b) { var p = u.slice(t + b).match(o0); if (!p)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _a = __read(p, 1), y = _a[0]; return t += b + y.length, eu(y); } function a(b) { for (t += b; t < u.length && l0(u.charCodeAt(t));)
    t++; } function n() { t += 1; var b = t, p = 1; for (; p > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !s(t) ? p++ : u.charCodeAt(t) === 41 && !s(t) && p--; if (p)
    throw new Error("Parenthesis not matched"); return eu(u.slice(b, t - 1)); } function s(b) { var p = 0; for (; u.charCodeAt(--b) === 92;)
    p++; return (p & 1) === 1; } function c() { if (r.length > 0 && ke(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function o(b) { if (r.length > 0 && r[r.length - 1].type === g.Descendant) {
    r[r.length - 1].type = b;
    return;
} c(), r.push({ type: b }); } function d(b, p) { r.push({ type: g.Attribute, name: b, action: p, value: i(1), namespace: null, ignoreCase: "quirks" }); } function x() { if (r.length && r[r.length - 1].type === g.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (a(0), u.length === t)
    return t; e: for (; t < u.length;) {
    var b = u.charCodeAt(t);
    switch (b) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== g.Descendant) && (c(), r.push({ type: g.Descendant })), a(1);
            break;
        }
        case 62: {
            o(g.Child), a(1);
            break;
        }
        case 60: {
            o(g.Parent), a(1);
            break;
        }
        case 126: {
            o(g.Sibling), a(1);
            break;
        }
        case 43: {
            o(g.Adjacent), a(1);
            break;
        }
        case 46: {
            d("class", V.Element);
            break;
        }
        case 35: {
            d("id", V.Equals);
            break;
        }
        case 91: {
            a(1);
            var p = void 0, y = null;
            u.charCodeAt(t) === 124 ? p = i(1) : u.startsWith("*|", t) ? (y = "*", p = i(2)) : (p = i(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (y = p, p = i(1))), a(0);
            var w = V.Exists, Q = Kr.get(u.charCodeAt(t));
            if (Q) {
                if (w = Q, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                a(2);
            }
            else
                u.charCodeAt(t) === 61 && (w = V.Equals, a(1));
            var J = "", E = null;
            if (w !== "exists") {
                if (lt(u.charCodeAt(t))) {
                    var W = u.charCodeAt(t), k = t + 1;
                    for (; k < u.length && (u.charCodeAt(k) !== W || s(k));)
                        k += 1;
                    if (u.charCodeAt(k) !== W)
                        throw new Error("Attribute value didn't end");
                    J = eu(u.slice(t + 1, k)), t = k + 1;
                }
                else {
                    var W = t;
                    for (; t < u.length && (!l0(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || s(t));)
                        t += 1;
                    J = eu(u.slice(W, t));
                }
                a(0);
                var I = u.charCodeAt(t) | 32;
                I === 115 ? (E = !1, a(1)) : I === 105 && (E = !0, a(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var v = { type: g.Attribute, name: p, action: w, value: J, namespace: y, ignoreCase: E };
            r.push(v);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: g.PseudoElement, name: i(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? n() : null });
                continue;
            }
            var p = i(1).toLowerCase(), y = null;
            if (u.charCodeAt(t) === 40)
                if ($r.has(p)) {
                    if (lt(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(p, " cannot be quoted"));
                    if (y = [], t = f0(y, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(p, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (y = n(), Qr.has(p)) {
                        var w = y.charCodeAt(0);
                        w === y.charCodeAt(y.length - 1) && lt(w) && (y = y.slice(1, -1));
                    }
                    y = eu(y);
                }
            r.push({ type: g.Pseudo, name: p, data: y });
            break;
        }
        case 44: {
            x(), r = [], a(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var w = u.indexOf("*/", t + 2);
                if (w < 0)
                    throw new Error("Comment was not terminated");
                t = w + 2, r.length === 0 && a(0);
                break;
            }
            var p = null, y = void 0;
            if (b === 42)
                t += 1, y = "*";
            else if (b === 124) {
                if (y = "", u.charCodeAt(t + 1) === 124) {
                    o(g.ColumnCombinator), a(2);
                    break;
                }
            }
            else if (o0.test(u.slice(t)))
                y = i(0);
            else
                break e;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (p = y, u.charCodeAt(t + 1) === 42 ? (y = "*", t += 2) : y = i(1)), r.push(y === "*" ? { type: g.Universal, namespace: p } : { type: g.Tag, name: y, namespace: p });
        }
    }
} return x(), t; }
var St = Te(Ae(), 1);
var ge = Te(Ae(), 1);
var h0 = new Map([[g.Universal, 50], [g.Tag, 30], [g.Attribute, 1], [g.Pseudo, 0]]);
function uu(e) { return !h0.has(e.type); }
var Zr = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function ft(e) { var u = e.map(b0); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var i = t - 1; i >= 0 && r < u[i]; i--) {
            var a = e[i + 1];
            e[i + 1] = e[i], e[i] = a, u[i + 1] = u[i], u[i] = r;
        }
} }
function b0(e) { var u, t; var r = (u = h0.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === g.Attribute ? (r = (t = Zr.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === V.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === g.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (i) { return Math.min.apply(Math, __spreadArray([], __read(i.map(b0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var tu = Te(Ae(), 1), Jr = /[-[\]{}()*+?.,\\^$|#\s]/g;
function p0(e) { return e.replace(Jr, "\\$&"); }
var _r = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Ce(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && _r.has(e.name); }
var g0 = { equals: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value; return Ce(u, t) ? (a = a.toLowerCase(), function (n) { var s = r.getAttributeValue(n, i); return s != null && s.length === a.length && s.toLowerCase() === a && e(n); }) : function (n) { return r.getAttributeValue(n, i) === a && e(n); }; }, hyphen: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value, n = a.length; return Ce(u, t) ? (a = a.toLowerCase(), function (c) { var o = r.getAttributeValue(c, i); return o != null && (o.length === n || o.charAt(n) === "-") && o.substr(0, n).toLowerCase() === a && e(c); }) : function (c) { var o = r.getAttributeValue(c, i); return o != null && (o.length === n || o.charAt(n) === "-") && o.substr(0, n) === a && e(c); }; }, element: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value; if (/\s/.test(a))
        return tu.default.falseFunc; var n = new RegExp("(?:^|\\s)".concat(p0(a), "(?:$|\\s)"), Ce(u, t) ? "i" : ""); return function (c) { var o = r.getAttributeValue(c, i); return o != null && o.length >= a.length && n.test(o) && e(c); }; }, exists: function (e, _a, _b) {
        var u = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value, n = a.length; return n === 0 ? tu.default.falseFunc : Ce(u, t) ? (a = a.toLowerCase(), function (s) { var c = r.getAttributeValue(s, i); return c != null && c.length >= n && c.substr(0, n).toLowerCase() === a && e(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, i)) === null || c === void 0) && c.startsWith(a)) && e(s); }; }, end: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value, n = -a.length; return n === 0 ? tu.default.falseFunc : Ce(u, t) ? (a = a.toLowerCase(), function (s) { var c; return ((c = r.getAttributeValue(s, i)) === null || c === void 0 ? void 0 : c.substr(n).toLowerCase()) === a && e(s); }) : function (s) { var c; return !!(!((c = r.getAttributeValue(s, i)) === null || c === void 0) && c.endsWith(a)) && e(s); }; }, any: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value; if (a === "")
        return tu.default.falseFunc; if (Ce(u, t)) {
        var n_1 = new RegExp(p0(a), "i");
        return function (c) { var o = r.getAttributeValue(c, i); return o != null && o.length >= a.length && n_1.test(o) && e(c); };
    } return function (n) { var s; return !!(!((s = r.getAttributeValue(n, i)) === null || s === void 0) && s.includes(a)) && e(n); }; }, not: function (e, u, t) { var r = t.adapter, i = u.name, a = u.value; return a === "" ? function (n) { return !!r.getAttributeValue(n, i) && e(n); } : Ce(u, t) ? (a = a.toLowerCase(), function (n) { var s = r.getAttributeValue(n, i); return (s == null || s.length !== a.length || s.toLowerCase() !== a) && e(n); }) : function (n) { return r.getAttributeValue(n, i) !== a && e(n); }; } };
var Yr = new Set([9, 10, 12, 13, 32]), m0 = 48, ei = 57;
function x0(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = a(), i = n(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (i != null ? i : 1), s(), u < e.length ? (r = a(), s(), i = n()) : r = i = 0), i === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * i]; function a() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function n() { var c = u, o = 0; for (; u < e.length && e.charCodeAt(u) >= m0 && e.charCodeAt(u) <= ei;)
    o = o * 10 + (e.charCodeAt(u) - m0), u++; return u === c ? null : o; } function s() { for (; u < e.length && Yr.has(e.charCodeAt(u));)
    u++; } }
var dt = Te(Ae(), 1);
function y0(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return dt.default.falseFunc; if (u === -1)
    return function (a) { return a <= t; }; if (u === 0)
    return function (a) { return a === t; }; if (u === 1)
    return t < 0 ? dt.default.trueFunc : function (a) { return a >= t; }; var r = Math.abs(u), i = (t % r + r) % r; return u > 1 ? function (a) { return a >= t && a % r === i; } : function (a) { return a <= t && a % r === i; }; }
function Ve(e) { return y0(x0(e)); }
var ue = Te(Ae(), 1);
function wu(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var Ge = { contains: function (e, u, _a) {
        var t = _a.adapter;
        return function (i) { return e(i) && t.getText(i).includes(u); };
    }, icontains: function (e, u, _a) {
        var t = _a.adapter;
        var r = u.toLowerCase();
        return function (a) { return e(a) && t.getText(a).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var i = Ve(u);
        return i === ue.default.falseFunc ? ue.default.falseFunc : i === ue.default.trueFunc ? wu(e, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = 0; o < s.length && !r(n, s[o]); o++)
            t.isTag(s[o]) && c++; return i(c) && e(n); };
    }, "nth-last-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var i = Ve(u);
        return i === ue.default.falseFunc ? ue.default.falseFunc : i === ue.default.trueFunc ? wu(e, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = s.length - 1; o >= 0 && !r(n, s[o]); o--)
            t.isTag(s[o]) && c++; return i(c) && e(n); };
    }, "nth-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var i = Ve(u);
        return i === ue.default.falseFunc ? ue.default.falseFunc : i === ue.default.trueFunc ? wu(e, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = 0; o < s.length; o++) {
            var d = s[o];
            if (r(n, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(n) && c++;
        } return i(c) && e(n); };
    }, "nth-last-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var i = Ve(u);
        return i === ue.default.falseFunc ? ue.default.falseFunc : i === ue.default.trueFunc ? wu(e, t) : function (n) { var s = t.getSiblings(n), c = 0; for (var o = s.length - 1; o >= 0; o--) {
            var d = s[o];
            if (r(n, d))
                break;
            t.isTag(d) && t.getName(d) === t.getName(n) && c++;
        } return i(c) && e(n); };
    }, root: function (e, u, _a) {
        var t = _a.adapter;
        return function (r) { var i = t.getParent(r); return (i == null || !t.isTag(i)) && e(r); };
    }, scope: function (e, u, t, r) { var i = t.equals; return !r || r.length === 0 ? Ge.root(e, u, t) : r.length === 1 ? function (a) { return i(r[0], a) && e(a); } : function (a) { return r.includes(a) && e(a); }; }, hover: ht("isHovered"), visited: ht("isVisited"), active: ht("isActive") };
function ht(e) { return function (t, r, _a) {
    var i = _a.adapter;
    var a = i[e];
    return typeof a != "function" ? ue.default.falseFunc : function (s) { return a(s) && t(s); };
}; }
var ru = { empty: function (e, _a) {
        var u = _a.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (i) { return u.isTag(i); });
        return r != null && t(e, r);
    }, "last-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e);
        for (var i = r.length - 1; i >= 0; i--) {
            if (t(e, r[i]))
                return !0;
            if (u.isTag(r[i]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), i = u.getName(e);
        for (var a = 0; a < r.length; a++) {
            var n = r[a];
            if (t(e, n))
                return !0;
            if (u.isTag(n) && u.getName(n) === i)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), i = u.getName(e);
        for (var a = r.length - 1; a >= 0; a--) {
            var n = r[a];
            if (t(e, n))
                return !0;
            if (u.isTag(n) && u.getName(n) === i)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (i) { return t(e, i) || !u.isTag(i) || u.getName(i) !== r; });
    }, "only-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function bt(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var Su = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var ce = Te(Ae(), 1);
var mt = {};
function xt(e, u) { return e === ce.default.falseFunc ? ce.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function yt(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function gt(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var pt = function (e, u, t, r, i) { var a = i(u, gt(t), r); return a === ce.default.trueFunc ? e : a === ce.default.falseFunc ? ce.default.falseFunc : function (n) { return a(n) && e(n); }; }, Au = { is: pt, matches: pt, where: pt, not: function (e, u, t, r, i) { var a = i(u, gt(t), r); return a === ce.default.falseFunc ? e : a === ce.default.trueFunc ? ce.default.falseFunc : function (n) { return !a(n) && e(n); }; }, has: function (e, u, t, r, i) { var a = t.adapter, n = gt(t); n.relativeSelector = !0; var s = u.some(function (d) { return d.some(uu); }) ? [mt] : void 0, c = i(u, n, s); if (c === ce.default.falseFunc)
        return ce.default.falseFunc; var o = xt(c, a); if (s && c !== ce.default.trueFunc) {
        var _a = c.shouldTestNextSiblings, d_1 = _a === void 0 ? !1 : _a;
        return function (x) { if (!e(x))
            return !1; s[0] = x; var b = a.getChildren(x), p = d_1 ? __spreadArray(__spreadArray([], __read(b), false), __read(yt(x, a)), false) : b; return a.existsOne(o, p); };
    } return function (d) { return e(d) && a.existsOne(o, a.getChildren(d)); }; } };
function w0(e, u, t, r, i) { var a; var n = u.name, s = u.data; if (Array.isArray(s)) {
    if (!(n in Au))
        throw new Error("Unknown pseudo-class :".concat(n, "(").concat(s, ")"));
    return Au[n](e, s, t, r, i);
} var c = (a = t.pseudos) === null || a === void 0 ? void 0 : a[n], o = typeof c == "string" ? c : Su[n]; if (typeof o == "string") {
    if (s != null)
        throw new Error("Pseudo ".concat(n, " doesn't have any arguments"));
    var d = Se(o);
    return Au.is(e, d, t, r, i);
} if (typeof c == "function")
    return bt(c, n, s, 1), function (d) { return c(d, s) && e(d); }; if (n in Ge)
    return Ge[n](e, s, t, r); if (n in ru) {
    var d_2 = ru[n];
    return bt(d_2, n, s, 2), function (x) { return d_2(x, t, s) && e(x); };
} throw new Error("Unknown pseudo-class :".concat(n)); }
function wt(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function S0(e, u, t, r, i) { var a = t.adapter, n = t.equals; switch (u.type) {
    case g.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case g.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case g.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), g0[u.action](e, u, t);
    }
    case g.Pseudo: return w0(e, u, t, r, i);
    case g.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var s_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (s_1 = s_1.toLowerCase()), function (o) { return a.getName(o) === s_1 && e(o); };
    }
    case g.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (o) { var d = o; for (; d = wt(d, a);)
                if (e(d))
                    return !0; return !1; };
        var s_2 = new WeakSet;
        return function (o) { var d = o; for (; d = wt(d, a);)
            if (!s_2.has(d)) {
                if (a.isTag(d) && e(d))
                    return !0;
                s_2.add(d);
            } return !1; };
    }
    case "_flexibleDescendant": return function (c) { var o = c; do
        if (e(o))
            return !0;
    while (o = wt(o, a)); return !1; };
    case g.Parent: return function (c) { return a.getChildren(c).some(function (o) { return a.isTag(o) && e(o); }); };
    case g.Child: return function (c) { var o = a.getParent(c); return o != null && a.isTag(o) && e(o); };
    case g.Sibling: return function (c) { var o = a.getSiblings(c); for (var d = 0; d < o.length; d++) {
        var x = o[d];
        if (n(c, x))
            break;
        if (a.isTag(x) && e(x))
            return !0;
    } return !1; };
    case g.Adjacent: return a.prevElementSibling ? function (c) { var o = a.prevElementSibling(c); return o != null && e(o); } : function (c) { var o = a.getSiblings(c), d; for (var x = 0; x < o.length; x++) {
        var b = o[x];
        if (n(c, b))
            break;
        a.isTag(b) && (d = b);
    } return !!d && e(d); };
    case g.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function A0(e, u, t) { var r = Eu(e, u, t); return xt(r, u.adapter); }
function Eu(e, u, t) { var r = typeof e == "string" ? Se(e) : e; return vu(r, u, t); }
function E0(e) { return e.type === g.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(E0); })); }
var ui = { type: g.Descendant }, ti = { type: "_flexibleDescendant" }, ri = { type: g.Pseudo, name: "scope", data: null };
function ii(e, _a, t) {
    var e_6, _b;
    var u = _a.adapter;
    var r = !!(t != null && t.every(function (i) { var a = u.isTag(i) && u.getParent(i); return i === mt || a && u.isTag(a); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var i = e_7_1.value;
            if (!(i.length > 0 && uu(i[0]) && i[0].type !== g.Descendant))
                if (r && !i.some(E0))
                    i.unshift(ui);
                else
                    continue;
            i.unshift(ri);
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
function vu(e, u, t) { var r; e.forEach(ft), t = (r = u.context) !== null && r !== void 0 ? r : t; var i = Array.isArray(t), a = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    ii(e, u, a);
else if (e.some(function (c) { return c.length > 0 && uu(c[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var n = !1, s = e.map(function (c) { if (c.length >= 2) {
    var _a = __read(c, 2), o = _a[0], d = _a[1];
    o.type !== g.Pseudo || o.name !== "scope" || (i && d.type === g.Descendant ? c[1] = ti : (d.type === g.Adjacent || d.type === g.Sibling) && (n = !0));
} return ai(c, u, a); }).reduce(ni, ge.default.falseFunc); return s.shouldTestNextSiblings = n, s; }
function ai(e, u, t) { var r; return e.reduce(function (i, a) { return i === ge.default.falseFunc ? ge.default.falseFunc : S0(i, a, u, t, vu); }, (r = u.rootFunc) !== null && r !== void 0 ? r : ge.default.trueFunc); }
function ni(e, u) { return u === ge.default.falseFunc || e === ge.default.trueFunc ? e : e === ge.default.falseFunc || u === ge.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var v0 = function (e, u) { return e === u; }, si = { adapter: de, equals: v0 };
function T0(e) { var u, t, r, i; var a = e != null ? e : si; return (u = a.adapter) !== null && u !== void 0 || (a.adapter = de), (t = a.equals) !== null && t !== void 0 || (a.equals = (i = (r = a.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && i !== void 0 ? i : v0), a; }
function At(e) { return function (t, r, i) { var a = T0(r); return e(t, a, i); }; }
var Ln = At(A0), Dn = At(Eu), Tu = At(vu);
function N0(e) { return function (t, r, i) { var a = T0(i); typeof t != "function" && (t = Eu(t, a, r)); var n = Nu(r, a.adapter, t.shouldTestNextSiblings); return e(t, n, a); }; }
function Nu(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = ci(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function ci(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var i = 0; i < r; i++) {
    var a = yt(t[i], u);
    t.push.apply(t, __spreadArray([], __read(a), false));
} return t; }
var On = N0(function (e, u, t) { return e === St.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), Un = N0(function (e, u, t) { return e === St.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var Cu = Te(Ae(), 1);
var oi = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function je(e) { return e.type !== "pseudo" ? !1 : oi.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(je); }) : !1; }
function k0(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
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
function C0(e) { for (; e.parent;)
    e = e.parent; return e; }
function ku(e) {
    var e_8, _a;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(je) ? u.push(r) : t.push(r);
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
var li = { type: g.Universal, namespace: null }, fi = { type: g.Pseudo, name: "scope", data: null };
function Tt(e, u, t) {
    if (t === void 0) { t = {}; }
    return di([e], u, t);
}
function di(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _a = __read(ku(Se(u)), 2), r = _a[0], i = _a[1];
    return r.length > 0 && e.some(Tu(r, t)) || i.some(function (a) { return q0(a, e, t).length > 0; });
}
function hi(e, u, t, r) { var i = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(i) && Math.abs(i) < u.length ? [i < 0 ? u[u.length + i] : u[i]] : [];
    case "gt": return isFinite(i) ? u.slice(i + 1) : [];
    case "even": return u.filter(function (a, n) { return n % 2 === 0; });
    case "odd": return u.filter(function (a, n) { return n % 2 === 1; });
    case "not": {
        var a_1 = new Set(bi(t, u, r));
        return u.filter(function (n) { return !a_1.has(n); });
    }
} }
function bi(e, u, t) { if (u.length === 0)
    return []; var _a = __read(ku(e), 2), r = _a[0], i = _a[1], a; if (r.length) {
    var n = vt(u, r, t);
    if (i.length === 0)
        return n;
    n.length && (a = new Set(n));
} for (var n = 0; n < i.length && (a == null ? void 0 : a.size) !== u.length; n++) {
    var s = i[n];
    if ((a ? u.filter(function (d) { return N(d) && !a.has(d); }) : u).length === 0)
        break;
    var o = q0(s, u, t);
    if (o.length)
        if (a)
            o.forEach(function (d) { return a.add(d); });
        else {
            if (n === i.length - 1)
                return o;
            a = new Set(o);
        }
} return typeof a != "undefined" ? a.size === u.length ? u : u.filter(function (n) { return a.has(n); }) : []; }
function q0(e, u, t) { var r; if (e.some(ke)) {
    var i = (r = t.root) !== null && r !== void 0 ? r : C0(u[0]), a = ve(le({}, t), { context: u, relativeSelector: !1 });
    return e.push(fi), qu(i, e, a, !0, u.length);
} return qu(u, e, t, !1, u.length); }
function Nt(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return I0(u, e);
    var _a = __read(ku(Se(e)), 2), i = _a[0], a = _a[1], n = a.map(function (s) { return qu(u, s, t, !0, r); });
    return i.length && n.push(Et(u, i, t, r)), n.length === 0 ? [] : n.length === 1 ? n[0] : ct(n.reduce(function (s, c) { return __spreadArray(__spreadArray([], __read(s), false), __read(c), false); }));
}
function qu(e, u, t, r, i) { var a = u.findIndex(je), n = u.slice(0, a), s = u[a], c = u.length - 1 === a ? i : 1 / 0, o = k0(s.name, s.data, c); if (o === 0)
    return []; var x = (n.length === 0 && !Array.isArray(e) ? bu(e).filter(N) : n.length === 0 ? (Array.isArray(e) ? e : [e]).filter(N) : r || n.some(ke) ? Et(e, [n], t, o) : vt(e, [n], t)).slice(0, o), b = hi(s.name, x, s.data, t); if (b.length === 0 || u.length === a + 1)
    return b; var p = u.slice(a + 1), y = p.some(ke); if (y) {
    if (ke(p[0])) {
        var w = p[0].type;
        (w === g.Sibling || w === g.Adjacent) && (b = Nu(b, de, !0)), p.unshift(li);
    }
    t = ve(le({}, t), { relativeSelector: !1, rootFunc: function (w) { return b.includes(w); } });
}
else
    t.rootFunc && t.rootFunc !== Cu.trueFunc && (t = ve(le({}, t), { rootFunc: Cu.trueFunc })); return p.some(je) ? qu(b, p, t, !1, i) : y ? Et(b, [p], t, i) : vt(b, [p], t); }
function Et(e, u, t, r) { var i = Tu(u, t, e); return I0(e, i, r); }
function I0(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = Nu(e, de, u.shouldTestNextSiblings);
    return gu(function (i) { return N(i) && u(i); }, r, !0, t);
}
function vt(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(N); if (r.length === 0)
    return r; var i = Tu(u, t); return i === Cu.trueFunc ? r : r.filter(i); }
var pi = function (e, u, t) { return Nt(e, u, t); }, U0 = function (e, u, t) { return Nt(e, u, t, 1)[0] || null; }, M0 = /[\s ]+/g, L0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), gi = { containsOwn: function (e, u) { return Ct(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return D0(u).test(kt(e)); }, matchesOwn: function (e, u) { return D0(u).test(Ct(e)); }, containsData: function (e, u) { return ye(e).includes(u); }, "contains-ci": function (e, u) { return kt(e).toLowerCase().includes(String(u).toLowerCase()); } };
function D0(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var Iu = { pseudos: gi, xmlMode: !1, lowerCaseTags: !0 };
function Lu(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function kt(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var i = _c.value;
            i.type === "text" ? u += i.data : (i.type === "tag" || i.type === "script" || i.type === "style") && (i.name === "br" ? u += " " : i.type === "tag" && (L0.has(i.name) && (u += " "), t(i), L0.has(i.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(M0, " ").trim(); }
function Ct(e) {
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
    return u.replace(M0, " ").trim();
}
function R0(e, u) { if (!u)
    return ""; try {
    return new URL(u, e || void 0).href;
}
catch (t) {
    return e ? "" : u;
} }
var qe = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return he.of(pi(Lu(u), this.node, Iu), this.doc); };
    e.prototype.selectFirst = function (u) { var t = U0(Lu(u), this.node, Iu); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return Tt(this.node, Lu(u), Iu); };
    e.prototype.text = function () { return kt(this.node); };
    e.prototype.ownText = function () { return Ct(this.node); };
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
        return R0(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
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
        u.push(t), t = t.parent; return he.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Tt(t, Lu(u), Iu))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return he.of((this.node.children || []).filter(N), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(N)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(N).length; };
    e.prototype.nextElementSibling = function () { var u = it(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = at(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return he.of(pu(this.node).filter(function (u) { return u !== _this.node && N(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return pu(this.node).filter(N).indexOf(this.node); };
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
}()), It = Object.create(Array.prototype), he = { of: qt, prototype: It };
function qt(e, u) {
    var e_13, _a;
    var t = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof qe ? r : new qe(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, It), t;
}
var O0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return he.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
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
        var u = qt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var i = _g.value;
                        t.has(i.node) || (t.add(i.node), u.push(i));
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
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return he.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = qt([]);
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
    }, next: function () { return he.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return he.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(O0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(It, e, { value: O0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Du(e, u) { var t = c0(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new qe(t, null); r.doc = r, r.__base = u || ""; var i = U0("base[href]", t); return i && i.attribs.href && (r.__base = R0(r.__base, i.attribs.href)), r; }
function H0(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Du(e), i = function (a) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((a.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            if (n.type === "script" || n.type === "style" || n.type === "comment") {
                pe(n);
                continue;
            }
            if (n.type === "tag" && (i(n), !t.has(n.name))) {
                var s = (n.children || []).slice();
                try {
                    for (var s_3 = (e_20 = void 0, __values(s)), s_3_1 = s_3.next(); !s_3_1.done; s_3_1 = s_3.next()) {
                        var c = s_3_1.value;
                        nt(n, c);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (s_3_1 && !s_3_1.done && (_b = s_3.return)) _b.call(s_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                pe(n);
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
}; return i(r.node), Fe(r.node.children, { decodeEntities: !1 }); }
var Ou = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function mi(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return btoa(u); }
function B0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
var Lt = (function () {
    function Lt(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    Lt.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Lt.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (t) { } return this._raw.text == null ? "" : String(this._raw.text); };
    Lt.prototype.string = function (u) { return this.text(u); };
    Lt.prototype.html = function (u) { return Du(this.text(u), this.url); };
    Lt.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    Lt.prototype.base64 = function () { return mi(this._raw.bytes || B0(this.text())); };
    Lt.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || B0(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return Lt;
}());
function xi(e) {
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
function P0(e, u) { var t = function (n) { return ({ getItem: function (s) { var c = e.storageGet(n + s); return c == null ? null : c; }, setItem: function (s, c) { return e.storageSet(n + s, c == null ? null : String(c)); }, removeItem: function (s) { return e.storageSet(n + s, null); }, clear: function () { return e.storageClear && e.storageClear(n); } }); }, r = "__cookie__", i = {}; i.Response = { success: function (n, s) { return ({ code: 0, data: n === void 0 ? null : n, data2: s === void 0 ? null : s }); }, error: function (n) { return ({ code: 1, data: n == null ? "" : String(n) }); } }, i.fetch = function (s, c) {
    return __awaiter(this, void 0, void 0, function () { var o, w, d, x, b, w, p, y, w_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c = c || {};
                o = String(s);
                if (c.queries) {
                    w = Object.entries(c.queries).map(function (_a) {
                        var _b = __read(_a, 2), Q = _b[0], J = _b[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(J);
                    }).join("&");
                    w && (o += (o.includes("?") ? "&" : "?") + w);
                }
                d = Object.assign({ "User-Agent": Ou }, xi(c.headers)), x = e.storageGet(r);
                x && !Object.keys(d).some(function (w) { return w.toLowerCase() === "cookie"; }) && (d.Cookie = x);
                b = c.body;
                if (b != null && typeof b == "object") {
                    w = Object.keys(d).find(function (Q) { return Q.toLowerCase() === "content-type"; });
                    w && /json/i.test(d[w]) ? b = JSON.stringify(b) : (b = Object.entries(b).map(function (_a) {
                        var _b = __read(_a, 2), Q = _b[0], J = _b[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(J);
                    }).join("&"), w || (d["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                p = { url: o, method: (c.method || (b != null ? "POST" : "GET")).toUpperCase(), headers: d, body: b, timeout: c.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(p)];
            case 2:
                y = _a.sent();
                return [3, 4];
            case 3:
                w_1 = _a.sent();
                y = { status: 0, url: o, headers: {}, text: "", error: String(w_1 && w_1.message || w_1) };
                return [3, 4];
            case 4: return [2, new Lt(y, p)];
        }
    }); });
}, i.Http = { get: function (n) { return F0(i, "GET", n); }, post: function (n) { return F0(i, "POST", n); } }, i.Html = { parse: function (n, s) { return Du(n, s || ""); }, clean: function (n, s) { return H0(n, s); } }, i.localStorage = t("ls:"), i.cacheStorage = t("cs:"), i.localConfig = { getItem: function (n) { return e.config(n); } }, i.localCookie = { setCookie: function (n) { e.storageSet(r, String(n).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, i.sleep = function (n) { return new Promise(function (s) { return setTimeout(s, Math.min(Number(n) || 0, 1e4)); }); }; var a = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    try {
        e.log && e.log(n.map(function (s) { return typeof s == "string" ? s : JSON.stringify(s); }).join(" "));
    }
    catch (s) { }
}; return i.Log = { log: a }, i.console = { log: a, error: a, warn: a, info: a }, i.log = a, i.UserAgent = { system: function () { return Ou; }, chrome: function () { return Ou; }, android: function () { return Ou; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = he, i.Element = qe, i.__meta = u, i; }
function F0(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, i = { headers: function (a) { return Object.assign(r.headers, a || {}), i; }, header: function (a, n) { return r.headers[a] = n, i; }, params: function (a) { return r.queries = a, i; }, queries: function (a) { return r.queries = a, i; }, body: function (a) { return r.body = a, i; }, html: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(a)];
            }
        }); });
    }, string: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(a)];
            }
        }); });
    }, text: function (a) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(a)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return i; }
function Ie(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof URL == "undefined")
    return __abs(e, u); try {
    return new URL(u, e).href;
}
catch (t) {
    return u;
} }
var M = function (e) { return e == null ? "" : String(e); }, yi = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, Uu = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, i = u.host;
        this.meta = t, this.host = i, this.env = u.env || P0(i, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return M(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var r, i, a, n;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        i = function (s) { var c = _this.host.config(s); return c == null ? (_this.meta.configDefaults || {})[s] : c; };
                        return [4, r(this.env, i)];
                    case 1:
                        a = _a.sent();
                        if (typeof a != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, a.apply(void 0, __spreadArray([], __read(t.map(M)), false))];
                    case 2:
                        n = _a.sent();
                        if (!n)
                            throw new Error(u + ": empty result");
                        if (n.code !== 0)
                            throw new Error(u + ": " + M(n.data || "error"));
                        return [2, n];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return M(u).replace(/\.js$/, ""); };
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
            var i, a, n, s, c;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = u + "|" + t;
                        r = Math.max(1, r | 0);
                        a = r === 1 ? "" : this.tokens[i + "|" + r];
                        if (r > 1 && a == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, a)];
                    case 1:
                        n = _a.sent(), s = M(n.data2);
                        s && (this.tokens[i + "|" + (r + 1)] = s);
                        c = (n.data || []).filter(Boolean).map(function (o) { return ({ name: M(o.name).trim(), link: Ie(o.host || _this.base + "/", o.link), cover: Ie(o.host || _this.base + "/", o.cover), description: M(o.description), tag: M(o.tag) }); }).filter(function (o) { return o.name && o.link; });
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
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), M(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), M(r.input), u) : this.search("", u)];
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
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (i) { return typeof i == "string" ? i : i && i.title; }).filter(Boolean);
                    return [2, { name: M(t.name).trim(), cover: Ie(t.host || this.base + "/", t.cover), author: M(t.author).trim(), description: V0(M(t.description)), detail: V0(M(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: yi(r.map(function (i) { return String(i).trim(); })), url: u, format: M(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, i, _a, _b, e_22_1, _c;
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
                        i = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", M(i))];
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
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, i) { return ({ name: M(r.name).trim() || "#" + (i + 1), url: Ie(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
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
                    case 6: return [2, (_a, typeof t == "string" && (t = t.split(/[\n,]+/)), (t || []).map(function (r) { return Ie(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
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
                    return [2, { html: M(t.data), title: M(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, i, r, t_3, t_3_1, i, a, n, n_2, n_2_1, s, a_2, e_23_1;
            var e_23, _a, e_24, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: u }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        i = (_c.sent()).data;
                        Array.isArray(i) && i.length && (t = i.map(function (a) { return typeof a == "string" ? { title: "Server", data: a } : { title: M(a.title || a.name || "Server"), data: M(a.data || a.url || a.link) }; }));
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
                        i = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", i.data)];
                    case 6:
                        a = (_c.sent()).data || {}, n = Array.isArray(a) ? a : [a];
                        try {
                            for (n_2 = (e_24 = void 0, __values(n)), n_2_1 = n_2.next(); !n_2_1.done; n_2_1 = n_2.next()) {
                                s = n_2_1.value;
                                !s || !s.data || s.type !== "webview" && r.push({ url: Ie(s.host || this.base + "/", s.data), quality: i.title + (s.quality ? " " + s.quality : ""), headers: s.headers || { Referer: this.base + "/" }, subtitles: (s.subtitles || (s.subtitle ? [{ data: s.subtitle, label: "Sub" }] : [])).map(function (c) { return ({ file: Ie(_this.base + "/", c.data || c.file), label: M(c.label || c.language || "Sub") }); }), mimeType: M(s.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (n_2_1 && !n_2_1.done && (_b = n_2.return)) _b.call(n_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        a_2 = _c.sent();
                        this.host.log && this.host.log("track " + i.title + ": " + a_2.message);
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
function V0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var me = { id: "69shurepoduongden", name: "69shuba", source: "https://www.69shuba.com", type: "novel", locale: "zh_CN", nsfw: !1, version: 2, config: {}, configDefaults: {}, itemType: 2, lnId: "kiritokmn.69shurepoduongden", lnIcon: "", lnVersion: "1.0.2" }, G0 = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, a.success([{ title: "人气", input: "/novels/hot", script: "gen2.js" }, { title: "人气连载", input: "/novels/monthvisit_0_0_1.htm", script: "gen.js" }, { title: "人气全本", input: "/novels/monthvisit_0_1_1.htm", script: "gen.js" }, { title: "推荐", input: "/novels/allvote_0_0_1.htm", script: "gen.js" }])];
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U() {
                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2, a.success([{ title: "玄幻魔法", input: "/novels/class/1.htm", script: "gen.js" }, { title: "修真武侠", input: "/novels/class/2.htm", script: "gen.js" }, { title: "言情小说", input: "/novels/class/3.htm", script: "gen.js" }, { title: "历史军事", input: "/novels/class/4.htm", script: "gen.js" }, { title: "游戏竞技", input: "/novels/class/5.htm", script: "gen.js" }, { title: "科幻空间", input: "/novels/class/6.htm", script: "gen.js" }, { title: "悬疑惊悚", input: "/novels/class/7.htm", script: "gen.js" }, { title: "同人小说", input: "/novels/class/8.htm", script: "gen.js" }, { title: "都市小说", input: "/novels/class/9.htm", script: "gen.js" }, { title: "官场职场", input: "/novels/class/10.htm", script: "gen.js" }, { title: "穿越时空", input: "/novels/class/11.htm", script: "gen.js" }, { title: "青春校园", input: "/novels/class/12.htm", script: "gen.js" }])];
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h, T, S, O, O, L, Y, O, H, B, D, O, C, F, O, ie, _, X, K, P, te, ae; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    l = l.replace(/\/$/, "");
                                                    return [4, W(l)];
                                                case 1:
                                                    h = _a.sent();
                                                    if (!h)
                                                        return [2, a.error("Không tải được trang.")];
                                                    T = "", S = h.select("h1").first();
                                                    if (S && (T = G(S.text())), !T) {
                                                        O = h.select(".book-title, .bookname, .btitle").first();
                                                        O && (T = G(O.text()));
                                                    }
                                                    if (!T) {
                                                        O = h.select('meta[property="og:title"]').attr("content");
                                                        O && (T = G(O.replace(/\s*[-–|]\s*69书吧.*$/, "")));
                                                    }
                                                    L = "", Y = h.select('.book-img img, .pic img, img[src*="/article/"]').first();
                                                    if (Y && (L = Y.attr("data-src") || Y.attr("src") || ""), !L || L.indexOf("nocover") !== -1 || L.indexOf("/images/user") !== -1) {
                                                        O = h.select('meta[property="og:image"]').attr("content");
                                                        O && (L = O);
                                                    }
                                                    H = "", B = h.select('a[href*="/author.php"], a[href*="author="], span.author a').first();
                                                    if (B && (H = G(B.text())), !H) {
                                                        D = h.select(".book-info, .detail-info, .info").text().match(/作者[：:]\s*(.+)/);
                                                        D && (H = D[1].trim());
                                                    }
                                                    if (!H) {
                                                        O = h.select('meta[name="author"]').attr("content");
                                                        O && (H = G(O));
                                                    }
                                                    C = "", F = h.select(".intro, .book-intro, .desc, .description, .book_desc, #bookIntro").first();
                                                    if (F && (F.select("script, style, ins, iframe").remove(), C = F.html().trim()), !C) {
                                                        O = h.select('meta[name="description"]').attr("content");
                                                        O && (C = G(O));
                                                    }
                                                    ie = !0, _ = h.select(".book-info, .detail-info, .info, .state").text();
                                                    (_.indexOf("全本") !== -1 || _.indexOf("完本") !== -1 || _.indexOf("完结") !== -1) && (ie = !1);
                                                    X = [];
                                                    h.select('.bread a, .location a, .tag a, a[href*="/class/"], a[href*="/tag/"]').forEach(function (O) { var D = G(O.text()); D && D.length < 10 && X.indexOf(D) === -1 && X.push({ title: D, input: oe(O.attr("href")), script: "gen.js" }); });
                                                    K = [];
                                                    H && K.push("作者: " + H);
                                                    P = h.select(".book-info, .detail-info").text(), te = P.match(/([\d.]+)\s*万?字/);
                                                    te && K.push("字数: " + te[0]);
                                                    ae = P.match(/(\d+)\s*章/);
                                                    return [2, (ae && K.push("章节: " + ae[0]), K.push("状态: " + (ie ? "连载" : "全本")), L && (L = oe(L)), a.success({ name: T, cover: L, author: H, description: C, detail: K.join("<br>"), ongoing: ie, genres: X.length > 0 ? X : void 0, host: E }))];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l, h) {
                                        return __awaiter(this, void 0, void 0, function () { var T, S, B_1, L, Y, H, B_2, C_1; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (h || (h = "1"), l = (l || "").trim(), !l)
                                                        return [2, a.success([], "")];
                                                    T = w.newBrowser(), S = null;
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    T.launch(E, 8e3), T.callJs("var form=document.querySelector(\"form[action*='search']\");if(!form){form=document.forms[0];}var input=form.querySelector(\"input[name='searchkey']\");if(!input){input=form.querySelector(\"input[type='text']\");}if(!input){input=document.querySelector(\"input[name='searchkey'],input[name='s'],input[name='q'],input[name='keyword']\");}if(input){input.value=" + JSON.stringify(l) + ";}if(form){form.submit();}", 500), T.waitUrl(".*?(search|searchkey).*", 12e3);
                                                    return [4, d(500)];
                                                case 2:
                                                    _a.sent(), S = T.html();
                                                    return [3, 4];
                                                case 3:
                                                    B_1 = _a.sent();
                                                    try {
                                                        T.close();
                                                    }
                                                    catch (C) { }
                                                    return [2, a.success([], "")];
                                                case 4:
                                                    if (!S) {
                                                        try {
                                                            T.close();
                                                        }
                                                        catch (B) { }
                                                        return [2, a.success([], "")];
                                                    }
                                                    L = [];
                                                    S.select(".librarylist li, .novelslist li, .novelslist2 li, ul.list li, .booklist li").forEach(function (B) { var C = B.select('h3 a, h2 a, a[href*="/book/"]').first(); if (!C)
                                                        return; var F = G(C.text()), ie = oe(C.attr("href")); if (!F || !ie)
                                                        return; var _ = "", X = B.select("img").first(); if (X) {
                                                        var ae = X.attr("data-src") || X.attr("src") || "";
                                                        ae.indexOf("nocover") === -1 && ae.indexOf("/images/user") === -1 && (_ = ae);
                                                    } var K = [], P = B.select(".author, em, cite").first(); P && K.push(G(P.text())); var te = B.select(".state").first(); te && K.push(G(te.text())), L.push({ name: F, link: ie, cover: oe(_), description: K.join(" | "), host: E }); });
                                                    Y = "";
                                                    L.length >= 10 && (Y = String(parseInt(h) + 1));
                                                    H = S.select(".page a, .pagelist a, .pagination a");
                                                    if (H.size() > 0) {
                                                        B_2 = parseInt(h), C_1 = !1;
                                                        H.forEach(function (F) { var ie = G(F.text()), _ = parseInt(ie); !C_1 && _ > B_2 && (Y = String(_), C_1 = !0); });
                                                    }
                                                    try {
                                                        T.close();
                                                    }
                                                    catch (B) { }
                                                    return [2, a.success(L, Y)];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h, T, S, L; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h = l.match(/\/book\/(\d+)/);
                                                    if (!h)
                                                        return [2, a.success([])];
                                                    h = h[1];
                                                    T = E + "/book/" + h + "/";
                                                    return [4, d(3e3)];
                                                case 1:
                                                    _a.sent();
                                                    return [4, W(T)];
                                                case 2:
                                                    S = _a.sent();
                                                    if (!S)
                                                        return [2, a.success([])];
                                                    L = [];
                                                    return [2, (S.select("#catalog ul li a").forEach(function (H) { var B = H.attr("href"); if (!B || B === "#")
                                                            return; var C = k(H.text()); if (!C || C.length < 2)
                                                            return; var F = R(B); L.push({ name: C, url: F, host: E }); }), L.reverse(), a.success(L))];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h, T, S; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, W(l)];
                                                case 1:
                                                    h = _a.sent();
                                                    if (!h)
                                                        return [2, a.error("Không tải được.")];
                                                    T = h.select(".txtnav").first() || h.select("#chaptercontent").first() || h.select("#BookText").first() || h.select(".content").first() || h.select("#content").first() || h.select(".showtxt").first() || h.select("#htmlContent").first();
                                                    if (!T)
                                                        return [2, a.error("Không thấy nội dung.")];
                                                    T.select("script, style, ins, iframe, .adsbygoogle, .contentadv, .bottom-ad, .txtinfo, #txtright, h1").remove();
                                                    S = T.html();
                                                    return [2, ((!S || S.trim().length < 10) && (S = T.text()), !S || S.trim().length < 10 ? a.error("Trống.") : (S = S.replace(/&emsp;/g, ""), S = S.replace(/&nbsp;/g, " "), S = S.replace(/(<br\s*\/?>\s*){2,}/gi, "<br>"), S = S.replace(/^第\d+章.*?<br>/i, ""), S = S.replace("(本章完)", ""), a.success(S)))];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, gen: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l, h) {
                                        return __awaiter(this, void 0, void 0, function () { var T, S, L, Y, H, B; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h || (h = "1");
                                                    T = R(l);
                                                    h !== "1" && (/_\d+\.htm$/.test(T) ? T = T.replace(/_\d+\.htm$/, "_" + h + ".htm") : T = T.replace(/\.htm$/, "/" + h + ".htm"));
                                                    return [4, W(T)];
                                                case 1:
                                                    S = _a.sent();
                                                    if (!S)
                                                        return [2, a.success([])];
                                                    L = [], Y = {}, H = S.select("#article_list_content li");
                                                    H.size() === 0 && (H = S.select(".librarylist li, .novelslist li, .novelslist2 li")), H.forEach(function (C) { var F = C.select("h3 a, h2 a").first(); if (F || (F = C.select('a[href*="/book/"]').first()), !F)
                                                        return; var ie = F.attr("href"), _ = R(ie), X = _.match(/\/book\/(\d+)/); if (!X || Y[X[1]])
                                                        return; Y[X[1]] = !0; var K = k(F.text()); if (!K || K.length < 2)
                                                        return; var P = "", te = C.select(".imgbox img").first(); if (te && (P = te.attr("data-src") || te.attr("src") || ""), !P || P.indexOf("nocover") !== -1) {
                                                        var D = C.select("img").first();
                                                        D && (P = D.attr("data-src") || D.attr("src") || "");
                                                    } P.indexOf("nocover") !== -1 && (P = ""); var ae = [], O = C.select(".newnav label, label"); for (var D = 0; D < O.size() && D < 3; D++) {
                                                        var Ee = k(O.get(D).text());
                                                        Ee && Ee.length < 20 && ae.push(Ee);
                                                    } L.push({ name: K, link: _, cover: R(P), description: ae.join(" | "), host: E }); });
                                                    B = "";
                                                    return [2, (L.length >= 10 && (B = String(parseInt(h) + 1)), a.success(L, B))];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, gen2: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, i, a, n, s, c, o, d, x, b, p, y, w, Q, J) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, (function () {
                                    return __awaiter(this, void 0, void 0, function () { function W(l) {
                                        return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, t(l, { headers: I })];
                                                case 1:
                                                    h = _a.sent();
                                                    return [2, h && h.ok ? h.html("gbk") : null];
                                            }
                                        }); });
                                    } function k(l) { return (l || "").replace(/\s+/g, " ").trim(); } function R(l) { return l ? l.indexOf("http") === 0 ? l : l.indexOf("//") === 0 ? "https:" + l : E + (l.charAt(0) === "/" ? "" : "/") + l : ""; } function U(l, h) {
                                        return __awaiter(this, void 0, void 0, function () { var T, S, L, Y, H, B; return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    h || (h = "1");
                                                    T = R(l);
                                                    h !== "1" && (T = T.replace(/\/$/, "") + "/" + h + ".htm");
                                                    return [4, W(T)];
                                                case 1:
                                                    S = _a.sent();
                                                    if (!S)
                                                        return [2, a.success([])];
                                                    L = [], Y = {}, H = S.select("#article_list_content li");
                                                    H.size() === 0 && (H = S.select(".librarylist li, .novelslist li, .novelslist2 li")), H.forEach(function (C) { var F = C.select("h3 a, h2 a").first(); if (F || (F = C.select('a[href*="/book/"]').first()), !F)
                                                        return; var ie = F.attr("href"), _ = R(ie), X = _.match(/\/book\/(\d+)/); if (!X || Y[X[1]])
                                                        return; Y[X[1]] = !0; var K = k(F.text()); if (!K || K.length < 2)
                                                        return; var P = "", te = C.select(".imgbox img").first(); if (te && (P = te.attr("data-src") || te.attr("src") || ""), !P || P.indexOf("nocover") !== -1) {
                                                        var D = C.select("img").first();
                                                        D && (P = D.attr("data-src") || D.attr("src") || "");
                                                    } P.indexOf("nocover") !== -1 && (P = ""); var ae = [], O = C.select(".newnav label, label"); for (var D = 0; D < O.size() && D < 3; D++) {
                                                        var Ee = k(O.get(D).text());
                                                        Ee && Ee.length < 20 && ae.push(Ee);
                                                    } L.push({ name: K, link: _, cover: R(P), description: ae.join(" | "), host: E }); });
                                                    B = "";
                                                    return [2, (L.length >= 10 && (B = String(parseInt(h) + 1)), a.success(L, B))];
                                            }
                                        }); });
                                    } var E, v, I, G, oe; return __generator(this, function (_a) {
                                        E = "https://www.69shuba.com", v = "";
                                        try {
                                            CONFIG_COOKIE && (v = CONFIG_COOKIE);
                                        }
                                        catch (l) { }
                                        I = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", Referer: E + "/", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
                                        v && (I.Cookie = v);
                                        G = k, oe = R;
                                        return [2, typeof U == "function" ? U : void 0];
                                    }); });
                                })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function j0(e) { return new Uu({ meta: me, scripts: G0, host: e }); }
var wi = require("@libs/fetch").fetchApi, iu = null;
try {
    iu = require("@libs/storage");
}
catch (e) {
    iu = null;
}
var Dt = {}, Mu = iu && iu.storage ? iu.storage : { get: function (e) { return Dt[e]; }, set: function (e, u) { Dt[e] = u; }, delete: function (e) { delete Dt[e]; } }, Ot = (function () {
    function class_2() {
        var _this = this;
        this.id = me.lnId, this.name = me.name, this.icon = me.lnIcon, this.site = me.source, this.version = me.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = j0({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, i;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, wi(u.url, t)];
                        case 1:
                            r = _b.sent(), i = {};
                            try {
                                r.headers.forEach(function (a, n) { i[n] = a; });
                            }
                            catch (a) { }
                            _a = { status: r.status, url: r.url || u.url, headers: i };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (u) { var t = Mu.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? Mu.delete && Mu.delete("vb_" + u) : Mu.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
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
                case 4: return [2, (_a).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_a.sent()).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
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
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (i, a) { return ({ name: i.name, path: i.url, chapterNumber: a + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : me.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), Si = new Ot;
