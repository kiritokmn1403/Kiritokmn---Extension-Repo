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
var N0 = Object.create;
var bt = Object.defineProperty, k0 = Object.defineProperties, C0 = Object.getOwnPropertyDescriptor, q0 = Object.getOwnPropertyDescriptors, L0 = Object.getOwnPropertyNames, dr = Object.getOwnPropertySymbols, D0 = Object.getPrototypeOf, pr = Object.prototype.hasOwnProperty, I0 = Object.prototype.propertyIsEnumerable;
var hr = function (e, t, u) { return t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u; }, Ne = function (e, t) {
    var e_2, _b;
    for (var u in t || (t = {}))
        pr.call(t, u) && hr(e, u, t[u]);
    if (dr)
        try {
            for (var _c = __values(dr(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                I0.call(t, u) && hr(e, u, t[u]);
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
}, We = function (e, t) { return k0(e, q0(t)); };
var R0 = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, fu = function (e, t) { for (var u in t)
    bt(e, u, { get: t[u], enumerable: !0 }); }, br = function (e, t, u, r) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (a) {
            !pr.call(e, a) && a !== u && bt(e, a, { get: function () { return t[a]; }, enumerable: !(r = C0(t, a)) || r.enumerable });
        };
        try {
            for (var _c = __values(L0(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var a = _d.value;
                _loop_1(a);
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
var $e = function (e, t, u) { return (u = e != null ? N0(D0(e)) : {}, br(t || !e || !e.__esModule ? bt(u, "default", { value: e, enumerable: !0 }) : u, e)); }, U0 = function (e) { return br(bt({}, "__esModule", { value: !0 }), e); };
var Ke = R0(function (Oi, jr) { jr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var nn = {};
fu(nn, { default: function () { return an; } });
module.exports = U0(nn);
var Dt = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var It = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var du, O0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), tt = (du = String.fromCodePoint) !== null && du !== void 0 ? du : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function hu(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = O0.get(e)) !== null && t !== void 0 ? t : e; }
var fe;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(fe || (fe = {}));
var H0 = 32, Ve;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(Ve || (Ve = {}));
function pu(e) { return e >= fe.ZERO && e <= fe.NINE; }
function P0(e) { return e >= fe.UPPER_A && e <= fe.UPPER_F || e >= fe.LOWER_A && e <= fe.LOWER_F; }
function M0(e) { return e >= fe.UPPER_A && e <= fe.UPPER_Z || e >= fe.LOWER_A && e <= fe.LOWER_Z || pu(e); }
function F0(e) { return e === fe.EQUALS || M0(e); }
var le;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(le || (le = {}));
var ve;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(ve || (ve = {}));
var ut = (function () {
    function ut(t, u, r) {
        this.decodeTree = t, this.emitCodePoint = u, this.errors = r, this.state = le.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ve.Strict;
    }
    ut.prototype.startEntity = function (t) { this.decodeMode = t, this.state = le.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    ut.prototype.write = function (t, u) { switch (this.state) {
        case le.EntityStart: return t.charCodeAt(u) === fe.NUM ? (this.state = le.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = le.NamedEntity, this.stateNamedEntity(t, u));
        case le.NumericStart: return this.stateNumericStart(t, u);
        case le.NumericDecimal: return this.stateNumericDecimal(t, u);
        case le.NumericHex: return this.stateNumericHex(t, u);
        case le.NamedEntity: return this.stateNamedEntity(t, u);
    } };
    ut.prototype.stateNumericStart = function (t, u) { return u >= t.length ? -1 : (t.charCodeAt(u) | H0) === fe.LOWER_X ? (this.state = le.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = le.NumericDecimal, this.stateNumericDecimal(t, u)); };
    ut.prototype.addToNumericResult = function (t, u, r, a) { if (u !== r) {
        var n = r - u;
        this.result = this.result * Math.pow(a, n) + parseInt(t.substr(u, n), a), this.consumed += n;
    } };
    ut.prototype.stateNumericHex = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (pu(a) || P0(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 16), this.emitNumericEntity(a, 3);
    } return this.addToNumericResult(t, r, u, 16), -1; };
    ut.prototype.stateNumericDecimal = function (t, u) { var r = u; for (; u < t.length;) {
        var a = t.charCodeAt(u);
        if (pu(a))
            u += 1;
        else
            return this.addToNumericResult(t, r, u, 10), this.emitNumericEntity(a, 2);
    } return this.addToNumericResult(t, r, u, 10), -1; };
    ut.prototype.emitNumericEntity = function (t, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === fe.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ve.Strict)
        return 0; return this.emitCodePoint(hu(this.result), this.consumed), this.errors && (t !== fe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    ut.prototype.stateNamedEntity = function (t, u) { var r = this.decodeTree, a = r[this.treeIndex], n = (a & Ve.VALUE_LENGTH) >> 14; for (; u < t.length; u++, this.excess++) {
        var i = t.charCodeAt(u);
        if (this.treeIndex = B0(r, a, this.treeIndex + Math.max(1, n), i), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ve.Attribute && (n === 0 || F0(i)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (a = r[this.treeIndex], n = (a & Ve.VALUE_LENGTH) >> 14, n !== 0) {
            if (i === fe.SEMI)
                return this.emitNamedEntityData(this.treeIndex, n, this.consumed + this.excess);
            this.decodeMode !== ve.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    ut.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, u = _b.result, r = _b.decodeTree, a = (r[u] & Ve.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, a, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    ut.prototype.emitNamedEntityData = function (t, u, r) { var a = this.decodeTree; return this.emitCodePoint(u === 1 ? a[t] & ~Ve.VALUE_LENGTH : a[t + 1], r), u === 3 && this.emitCodePoint(a[t + 2], r), r; };
    ut.prototype.end = function () { var t; switch (this.state) {
        case le.NamedEntity: return this.result !== 0 && (this.decodeMode !== ve.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case le.NumericDecimal: return this.emitNumericEntity(0, 2);
        case le.NumericHex: return this.emitNumericEntity(0, 3);
        case le.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case le.EntityStart: return 0;
    } };
    return ut;
}());
function gr(e) { var t = "", u = new ut(e, function (r) { return t += tt(r); }); return function (a, n) { var i = 0, c = 0; for (; (c = a.indexOf("&", c)) >= 0;) {
    t += a.slice(i, c), u.startEntity(n);
    var f = u.write(a, c + 1);
    if (f < 0) {
        i = c + u.end();
        break;
    }
    i = c + f, c = f === 0 ? i + 1 : i;
} var o = t + a.slice(i); return t = "", o; }; }
function B0(e, t, u, r) { var a = (t & Ve.BRANCH_LENGTH) >> 7, n = t & Ve.JUMP_TABLE; if (a === 0)
    return n !== 0 && r === n ? u : -1; if (n) {
    var o = r - n;
    return o < 0 || o >= a ? -1 : e[u + o] - 1;
} var i = u, c = i + a - 1; for (; i <= c;) {
    var o = i + c >>> 1, f = e[o];
    if (f < r)
        i = o + 1;
    else if (f > r)
        c = o - 1;
    else
        return e[o + a];
} return -1; }
var bn = gr(Dt), gn = gr(It);
var O;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(O || (O = {}));
var x;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(x || (x = {}));
function Pe(e) { return e === O.Space || e === O.NewLine || e === O.Tab || e === O.FormFeed || e === O.CarriageReturn; }
function Rt(e) { return e === O.Slash || e === O.Gt || Pe(e); }
function G0(e) { return e >= O.LowerA && e <= O.LowerZ || e >= O.UpperA && e <= O.UpperZ; }
var Ee;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(Ee || (Ee = {}));
var be = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, rt = (function () {
    function rt(_b, r) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = r, this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = x.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = u, this.entityDecoder = new ut(t ? It : Dt, function (a, n) { return _this.emitCodePoint(a, n); });
    }
    rt.prototype.reset = function () { this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = x.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    rt.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    rt.prototype.end = function () { this.running && this.finish(); };
    rt.prototype.pause = function () { this.running = !1; };
    rt.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    rt.prototype.stateText = function (t) { t === O.Lt || !this.decodeEntities && this.fastForwardTo(O.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = x.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === O.Amp && this.startEntity(); };
    rt.prototype.stateSpecialStartSequence = function (t) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? Rt(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = x.InTagName, this.stateInTagName(t); };
    rt.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === O.Gt || Pe(t)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === be.TitleEnd ? this.decodeEntities && t === O.Amp && this.startEntity() : this.fastForwardTo(O.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === O.Lt); };
    rt.prototype.stateCDATASequence = function (t) { t === be.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === be.Cdata.length && (this.state = x.InCommentLike, this.currentSequence = be.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = x.InDeclaration, this.stateInDeclaration(t)); };
    rt.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    rt.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === be.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = x.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    rt.prototype.isTagStartChar = function (t) { return this.xmlMode ? !Rt(t) : G0(t); };
    rt.prototype.startSpecial = function (t, u) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = u, this.state = x.SpecialStartSequence; };
    rt.prototype.stateBeforeTagName = function (t) { if (t === O.ExclamationMark)
        this.state = x.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === O.Questionmark)
        this.state = x.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var u = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = x.InTagName : u === be.ScriptEnd[2] ? this.state = x.BeforeSpecialS : u === be.TitleEnd[2] ? this.state = x.BeforeSpecialT : this.state = x.InTagName;
    }
    else
        t === O.Slash ? this.state = x.BeforeClosingTagName : (this.state = x.Text, this.stateText(t)); };
    rt.prototype.stateInTagName = function (t) { Rt(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    rt.prototype.stateBeforeClosingTagName = function (t) { Pe(t) || (t === O.Gt ? this.state = x.Text : (this.state = this.isTagStartChar(t) ? x.InClosingTagName : x.InSpecialComment, this.sectionStart = this.index)); };
    rt.prototype.stateInClosingTagName = function (t) { (t === O.Gt || Pe(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    rt.prototype.stateAfterClosingTagName = function (t) { (t === O.Gt || this.fastForwardTo(O.Gt)) && (this.state = x.Text, this.sectionStart = this.index + 1); };
    rt.prototype.stateBeforeAttributeName = function (t) { t === O.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = x.InSpecialTag, this.sequenceIndex = 0) : this.state = x.Text, this.sectionStart = this.index + 1) : t === O.Slash ? this.state = x.InSelfClosingTag : Pe(t) || (this.state = x.InAttributeName, this.sectionStart = this.index); };
    rt.prototype.stateInSelfClosingTag = function (t) { t === O.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = x.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Pe(t) || (this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    rt.prototype.stateInAttributeName = function (t) { (t === O.Eq || Rt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = x.AfterAttributeName, this.stateAfterAttributeName(t)); };
    rt.prototype.stateAfterAttributeName = function (t) { t === O.Eq ? this.state = x.BeforeAttributeValue : t === O.Slash || t === O.Gt ? (this.cbs.onattribend(Ee.NoValue, this.sectionStart), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)) : Pe(t) || (this.cbs.onattribend(Ee.NoValue, this.sectionStart), this.state = x.InAttributeName, this.sectionStart = this.index); };
    rt.prototype.stateBeforeAttributeValue = function (t) { t === O.DoubleQuote ? (this.state = x.InAttributeValueDq, this.sectionStart = this.index + 1) : t === O.SingleQuote ? (this.state = x.InAttributeValueSq, this.sectionStart = this.index + 1) : Pe(t) || (this.sectionStart = this.index, this.state = x.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    rt.prototype.handleInAttributeValue = function (t, u) { t === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === O.DoubleQuote ? Ee.Double : Ee.Single, this.index + 1), this.state = x.BeforeAttributeName) : this.decodeEntities && t === O.Amp && this.startEntity(); };
    rt.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, O.DoubleQuote); };
    rt.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, O.SingleQuote); };
    rt.prototype.stateInAttributeValueNoQuotes = function (t) { Pe(t) || t === O.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Ee.Unquoted, this.index), this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === O.Amp && this.startEntity(); };
    rt.prototype.stateBeforeDeclaration = function (t) { t === O.OpeningSquareBracket ? (this.state = x.CDATASequence, this.sequenceIndex = 0) : this.state = t === O.Dash ? x.BeforeComment : x.InDeclaration; };
    rt.prototype.stateInDeclaration = function (t) { (t === O.Gt || this.fastForwardTo(O.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    rt.prototype.stateInProcessingInstruction = function (t) { (t === O.Gt || this.fastForwardTo(O.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    rt.prototype.stateBeforeComment = function (t) { t === O.Dash ? (this.state = x.InCommentLike, this.currentSequence = be.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = x.InDeclaration; };
    rt.prototype.stateInSpecialComment = function (t) { (t === O.Gt || this.fastForwardTo(O.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = x.Text, this.sectionStart = this.index + 1); };
    rt.prototype.stateBeforeSpecialS = function (t) { var u = t | 32; u === be.ScriptEnd[3] ? this.startSpecial(be.ScriptEnd, 4) : u === be.StyleEnd[3] ? this.startSpecial(be.StyleEnd, 4) : (this.state = x.InTagName, this.stateInTagName(t)); };
    rt.prototype.stateBeforeSpecialT = function (t) { var u = t | 32; u === be.TitleEnd[3] ? this.startSpecial(be.TitleEnd, 4) : u === be.TextareaEnd[3] ? this.startSpecial(be.TextareaEnd, 4) : (this.state = x.InTagName, this.stateInTagName(t)); };
    rt.prototype.startEntity = function () { this.baseState = this.state, this.state = x.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ve.Strict : this.baseState === x.Text || this.baseState === x.InSpecialTag ? ve.Legacy : ve.Attribute); };
    rt.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    rt.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === x.Text || this.state === x.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === x.InAttributeValueDq || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    rt.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    rt.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case x.Text: {
                this.stateText(t);
                break;
            }
            case x.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case x.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case x.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case x.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case x.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case x.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case x.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case x.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case x.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case x.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case x.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case x.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case x.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case x.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case x.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case x.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case x.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case x.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case x.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case x.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case x.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case x.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case x.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case x.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case x.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    rt.prototype.finish = function () { this.state === x.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    rt.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === x.InCommentLike ? this.currentSequence === be.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === x.InTagName || this.state === x.BeforeAttributeName || this.state === x.BeforeAttributeValue || this.state === x.AfterAttributeName || this.state === x.InAttributeName || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueDq || this.state === x.InAttributeValueNq || this.state === x.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    rt.prototype.emitCodePoint = function (t, u) { this.baseState !== x.Text && this.baseState !== x.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return rt;
}());
var at = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), ee = new Set(["p"]), mr = new Set(["thead", "tbody"]), xr = new Set(["dd", "dt"]), vr = new Set(["rt", "rp"]), V0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", ee], ["h1", ee], ["h2", ee], ["h3", ee], ["h4", ee], ["h5", ee], ["h6", ee], ["select", at], ["input", at], ["output", at], ["button", at], ["datalist", at], ["textarea", at], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", xr], ["dt", xr], ["address", ee], ["article", ee], ["aside", ee], ["blockquote", ee], ["details", ee], ["div", ee], ["dl", ee], ["fieldset", ee], ["figcaption", ee], ["figure", ee], ["footer", ee], ["form", ee], ["header", ee], ["hr", ee], ["main", ee], ["nav", ee], ["ol", ee], ["pre", ee], ["section", ee], ["table", ee], ["ul", ee], ["rt", vr], ["rp", vr], ["tbody", mr], ["tfoot", mr]]), z0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), yr = new Set(["math", "svg"]), Sr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), j0 = /\s|\//, gt = (function () {
    function gt(t, u) {
        if (u === void 0) { u = {}; }
        var r, a, n, i, c, o;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (a = u.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (n = u.recognizeSelfClosing) !== null && n !== void 0 ? n : !this.htmlMode, this.tokenizer = new ((i = u.Tokenizer) !== null && i !== void 0 ? i : rt)(this.options, this), this.foreignContext = [!this.htmlMode], (o = (c = this.cbs).onparserinit) === null || o === void 0 || o.call(c, this);
    }
    gt.prototype.ontext = function (t, u) { var r, a; var n = this.getSlice(t, u); this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = u; };
    gt.prototype.ontextentity = function (t, u) { var r, a; this.endIndex = u - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, tt(t)), this.startIndex = u; };
    gt.prototype.isVoidElement = function (t) { return this.htmlMode && z0.has(t); };
    gt.prototype.onopentagname = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    gt.prototype.emitOpenTag = function (t) { var u, r, a, n; this.openTagStart = this.startIndex, this.tagname = t; var i = this.htmlMode && V0.get(t); if (i)
        for (; this.stack.length > 0 && i.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, c, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (yr.has(t) ? this.foreignContext.unshift(!0) : Sr.has(t) && this.foreignContext.unshift(!1))), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, t), this.cbs.onopentag && (this.attribs = {}); };
    gt.prototype.endOpenTag = function (t) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    gt.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    gt.prototype.onclosetag = function (t, u) { var r, a, n, i, c, o, f, E; this.endIndex = u; var U = this.getSlice(t, u); if (this.lowerCaseTagNames && (U = U.toLowerCase()), this.htmlMode && (yr.has(U) || Sr.has(U)) && this.foreignContext.shift(), this.isVoidElement(U))
        this.htmlMode && U === "br" && ((i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, "br"), (o = (c = this.cbs).onopentag) === null || o === void 0 || o.call(c, "br", {}, !0), (E = (f = this.cbs).onclosetag) === null || E === void 0 || E.call(f, "br", !1));
    else {
        var R = this.stack.indexOf(U);
        if (R !== -1)
            for (var N = 0; N <= R; N++) {
                var P = this.stack.shift();
                (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, P, N !== R);
            }
        else
            this.htmlMode && U === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    gt.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    gt.prototype.closeCurrentTag = function (t) { var u, r; var a = this.tagname; this.endOpenTag(t), this.stack[0] === a && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, a, !t), this.stack.shift()); };
    gt.prototype.onattribname = function (t, u) { this.startIndex = t; var r = this.getSlice(t, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    gt.prototype.onattribdata = function (t, u) { this.attribvalue += this.getSlice(t, u); };
    gt.prototype.onattribentity = function (t) { this.attribvalue += tt(t); };
    gt.prototype.onattribend = function (t, u) { var r, a; this.endIndex = u, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, t === Ee.Double ? '"' : t === Ee.Single ? "'" : t === Ee.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    gt.prototype.getInstructionName = function (t) { var u = t.search(j0), r = u < 0 ? t : t.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    gt.prototype.ondeclaration = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
    } this.startIndex = u + 1; };
    gt.prototype.onprocessinginstruction = function (t, u) { this.endIndex = u; var r = this.getSlice(t, u); if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
    } this.startIndex = u + 1; };
    gt.prototype.oncomment = function (t, u, r) { var a, n, i, c; this.endIndex = u, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(t, u - r)), (c = (i = this.cbs).oncommentend) === null || c === void 0 || c.call(i), this.startIndex = u + 1; };
    gt.prototype.oncdata = function (t, u, r) { var a, n, i, c, o, f, E, U, R, N; this.endIndex = u; var P = this.getSlice(t, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (c = (i = this.cbs).ontext) === null || c === void 0 || c.call(i, P), (f = (o = this.cbs).oncdataend) === null || f === void 0 || f.call(o)) : ((U = (E = this.cbs).oncomment) === null || U === void 0 || U.call(E, "[CDATA[".concat(P, "]]")), (N = (R = this.cbs).oncommentend) === null || N === void 0 || N.call(R)), this.startIndex = u + 1; };
    gt.prototype.onend = function () { var t, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (t = this.cbs).onend) === null || u === void 0 || u.call(t); };
    gt.prototype.reset = function () { var t, u, r, a; (u = (t = this.cbs).onreset) === null || u === void 0 || u.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    gt.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    gt.prototype.getSlice = function (t, u) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(t - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    gt.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    gt.prototype.write = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    gt.prototype.end = function (t) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    gt.prototype.pause = function () { this.tokenizer.pause(); };
    gt.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    gt.prototype.parseChunk = function (t) { this.write(t); };
    gt.prototype.done = function (t) { this.end(t); };
    return gt;
}());
var Ut = {};
fu(Ut, { CDATA: function () { return Eu; }, Comment: function () { return vu; }, Directive: function () { return xu; }, Doctype: function () { return wu; }, ElementType: function () { return $; }, Root: function () { return gu; }, Script: function () { return yu; }, Style: function () { return Su; }, Tag: function () { return Au; }, Text: function () { return mu; }, isTag: function () { return bu; } });
var $;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })($ || ($ = {}));
function bu(e) { return e.type === $.Tag || e.type === $.Script || e.type === $.Style; }
var gu = $.Root, mu = $.Text, xu = $.Directive, vu = $.Comment, yu = $.Script, Su = $.Style, Au = $.Tag, Eu = $.CDATA, wu = $.Doctype;
var Ot = (function () {
    function Ot() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(Ot.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ot.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ot.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    Ot.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return Ar(this, t);
    };
    return Ot;
}()), mt = (function (_super) {
    __extends(mt, _super);
    function mt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(mt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return mt;
}(Ot)), nt = (function (_super) {
    __extends(nt, _super);
    function nt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = $.Text;
        return _this;
    }
    Object.defineProperty(nt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return nt;
}(mt)), xt = (function (_super) {
    __extends(xt, _super);
    function xt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = $.Comment;
        return _this;
    }
    Object.defineProperty(xt.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return xt;
}(mt)), vt = (function (_super) {
    __extends(vt, _super);
    function vt(t, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = t, _this.type = $.Directive;
        return _this;
    }
    Object.defineProperty(vt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return vt;
}(mt)), yt = (function (_super) {
    __extends(yt, _super);
    function yt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(yt.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(yt.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return yt;
}(Ot)), St = (function (_super) {
    __extends(St, _super);
    function St() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = $.CDATA;
        return _this;
    }
    Object.defineProperty(St.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return St;
}(yt)), it = (function (_super) {
    __extends(it, _super);
    function it() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = $.Root;
        return _this;
    }
    Object.defineProperty(it.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return it;
}(yt)), At = (function (_super) {
    __extends(At, _super);
    function At(t, u, r, a) {
        if (r === void 0) { r = []; }
        if (a === void 0) { a = t === "script" ? $.Script : t === "style" ? $.Style : $.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.attribs = u, _this.type = a;
        return _this;
    }
    Object.defineProperty(At.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(At.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(At.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var u, r; return { name: t, value: _this.attribs[t], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[t], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return At;
}(yt));
function Z(e) { return bu(e); }
function st(e) { return e.type === $.CDATA; }
function Ce(e) { return e.type === $.Text; }
function Et(e) { return e.type === $.Comment; }
function _0(e) { return e.type === $.Directive; }
function Nu(e) { return e.type === $.Root; }
function ge(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Ar(e, t) {
    if (t === void 0) { t = !1; }
    var u;
    if (Ce(e))
        u = new nt(e.data);
    else if (Et(e))
        u = new xt(e.data);
    else if (Z(e)) {
        var r = t ? Tu(e.children) : [], a_1 = new At(e.name, Ne({}, e.attribs), r);
        r.forEach(function (n) { return n.parent = a_1; }), e.namespace != null && (a_1.namespace = e.namespace), e["x-attribsNamespace"] && (a_1["x-attribsNamespace"] = Ne({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a_1["x-attribsPrefix"] = Ne({}, e["x-attribsPrefix"])), u = a_1;
    }
    else if (st(e)) {
        var r = t ? Tu(e.children) : [], a_2 = new St(r);
        r.forEach(function (n) { return n.parent = a_2; }), u = a_2;
    }
    else if (Nu(e)) {
        var r = t ? Tu(e.children) : [], a_3 = new it(r);
        r.forEach(function (n) { return n.parent = a_3; }), e["x-mode"] && (a_3["x-mode"] = e["x-mode"]), u = a_3;
    }
    else if (_0(e)) {
        var r = new vt(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
function Tu(e) { var t = e.map(function (u) { return Ar(u, !0); }); for (var u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u]; return t; }
var Er = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, ct = (function () {
    function ct(t, u, r) {
        this.dom = [], this.root = new it(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = Er), typeof t == "object" && (u = t, t = void 0), this.callback = t != null ? t : null, this.options = u != null ? u : Er, this.elementCB = r != null ? r : null;
    }
    ct.prototype.onparserinit = function (t) { this.parser = t; };
    ct.prototype.onreset = function () { this.dom = [], this.root = new it(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    ct.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    ct.prototype.onerror = function (t) { this.handleCallback(t); };
    ct.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    ct.prototype.onopentag = function (t, u) { var r = this.options.xmlMode ? $.Tag : void 0, a = new At(t, u, void 0, r); this.addNode(a), this.tagStack.push(a); };
    ct.prototype.ontext = function (t) { var u = this.lastNode; if (u && u.type === $.Text)
        u.data += t, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new nt(t);
        this.addNode(r), this.lastNode = r;
    } };
    ct.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === $.Comment) {
        this.lastNode.data += t;
        return;
    } var u = new xt(t); this.addNode(u), this.lastNode = u; };
    ct.prototype.oncommentend = function () { this.lastNode = null; };
    ct.prototype.oncdatastart = function () { var t = new nt(""), u = new St([t]); this.addNode(u), t.parent = u, this.lastNode = t; };
    ct.prototype.oncdataend = function () { this.lastNode = null; };
    ct.prototype.onprocessinginstruction = function (t, u) { var r = new vt(t, u); this.addNode(r); };
    ct.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    ct.prototype.addNode = function (t) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), u.children.push(t), r && (t.prev = r, r.next = t), t.parent = u, this.lastNode = null; };
    return ct;
}());
var qe = {};
fu(qe, { DocumentPosition: function () { return we; }, append: function () { return fa; }, appendChild: function () { return la; }, compareDocumentPosition: function () { return Mr; }, existsOne: function () { return Hr; }, filter: function () { return lt; }, find: function () { return Vt; }, findAll: function () { return pa; }, findOne: function () { return zt; }, findOneChild: function () { return ha; }, getAttributeValue: function () { return ia; }, getChildren: function () { return Bt; }, getElementById: function () { return xa; }, getElements: function () { return ma; }, getElementsByClassName: function () { return va; }, getElementsByTagName: function () { return Xe; }, getElementsByTagType: function () { return ya; }, getFeed: function () { return Mu; }, getInnerHTML: function () { return na; }, getName: function () { return ca; }, getOuterHTML: function () { return Ur; }, getParent: function () { return Or; }, getSiblings: function () { return Gt; }, getText: function () { return Ft; }, hasAttrib: function () { return sa; }, hasChildren: function () { return ge; }, innerText: function () { return Iu; }, isCDATA: function () { return st; }, isComment: function () { return Et; }, isDocument: function () { return Nu; }, isTag: function () { return Z; }, isText: function () { return Ce; }, nextElementSibling: function () { return Ru; }, prepend: function () { return Ou; }, prependChild: function () { return da; }, prevElementSibling: function () { return Uu; }, removeElement: function () { return Me; }, removeSubsets: function () { return Sa; }, replaceElement: function () { return oa; }, testElement: function () { return ga; }, textContent: function () { return ze; }, uniqueSort: function () { return Pu; } });
function Ht(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var K0 = new Map(Ht([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(Ht([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(Ht([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(Ht([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ku = /["&'<>$\x80-\uFFFF]/g, wr = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Tr = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function wt(e) { var t = "", u = 0, r; for (; (r = ku.exec(e)) !== null;) {
    var a = r.index, n = e.charCodeAt(a), i = wr.get(n);
    i !== void 0 ? (t += e.substring(u, a) + i, u = a + 1) : (t += "".concat(e.substring(u, a), "&#x").concat(Tr(e, a).toString(16), ";"), u = ku.lastIndex += +((n & 64512) === 55296));
} return t + e.substr(u); }
function Cu(e, t) { return function (r) { var a, n = 0, i = ""; for (; a = e.exec(r);)
    n !== a.index && (i += r.substring(n, a.index)), i += t.get(a[0].charCodeAt(0)), n = a.index + 1; return i + r.substring(n); }; }
var Nr = Cu(/[&<>'"]/g, wr), Pt = Cu(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Mt = Cu(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var kr;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(kr || (kr = {}));
var Cr;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Cr || (Cr = {}));
var Dr = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Ir = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var $0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function X0(e) { return e.replace(/"/g, "&quot;"); }
function Q0(e, t) { var u; if (!e)
    return; var r = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? X0 : t.xmlMode || t.encodeEntities !== "utf8" ? wt : Pt; return Object.keys(e).map(function (a) { var n, i; var c = (n = e[a]) !== null && n !== void 0 ? n : ""; return t.xmlMode === "foreign" && (a = (i = Ir.get(a)) !== null && i !== void 0 ? i : a), !t.emptyAttrs && !t.xmlMode && c === "" ? a : "".concat(a, "=\"").concat(r(c), "\""); }).join(" "); }
var Rr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Du(e, t) {
    if (t === void 0) { t = {}; }
    var u = "length" in e ? e : [e], r = "";
    for (var a = 0; a < u.length; a++)
        r += Y0(u[a], t);
    return r;
}
var ot = Du;
function Y0(e, t) { switch (e.type) {
    case gu: return Du(e.children, t);
    case wu:
    case xu: return ta(e);
    case vu: return aa(e);
    case Eu: return ra(e);
    case yu:
    case Su:
    case Au: return ea(e, t);
    case mu: return ua(e, t);
} }
var Z0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), J0 = new Set(["svg", "math"]);
function ea(e, t) { var u; t.xmlMode === "foreign" && (e.name = (u = Dr.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && Z0.has(e.parent.name) && (t = We(Ne({}, t), { xmlMode: !1 }))), !t.xmlMode && J0.has(e.name) && (t = We(Ne({}, t), { xmlMode: "foreign" })); var r = "<".concat(e.name), a = Q0(e.attribs, t); return a && (r += " ".concat(a)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Rr.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Du(e.children, t)), (t.xmlMode || !Rr.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function ta(e) { return "<".concat(e.data, ">"); }
function ua(e, t) { var u; var r = e.data || ""; return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && $0.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? wt(r) : Mt(r)), r; }
function ra(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function aa(e) { return "<!--".concat(e.data, "-->"); }
function Ur(e, t) { return ot(e, t); }
function na(e, t) { return ge(e) ? e.children.map(function (u) { return Ur(u, t); }).join("") : ""; }
function Ft(e) {
    return Array.isArray(e) ? e.map(Ft).join("") : Z(e) ? e.name === "br" ? "\n" : Ft(e.children) : st(e) ? Ft(e.children) : Ce(e) ? e.data : "";
}
function ze(e) { return Array.isArray(e) ? e.map(ze).join("") : ge(e) && !Et(e) ? ze(e.children) : Ce(e) ? e.data : ""; }
function Iu(e) { return Array.isArray(e) ? e.map(Iu).join("") : ge(e) && (e.type === $.Tag || st(e)) ? Iu(e.children) : Ce(e) ? e.data : ""; }
function Bt(e) { return ge(e) ? e.children : []; }
function Or(e) { return e.parent || null; }
function Gt(e) {
    var _b, _c;
    var t = Or(e);
    if (t != null)
        return Bt(t);
    var u = [e], r = e.prev, a = e.next;
    for (; r != null;)
        u.unshift(r), _b = r, r = _b.prev;
    for (; a != null;)
        u.push(a), _c = a, a = _c.next;
    return u;
}
function ia(e, t) { var u; return (u = e.attribs) === null || u === void 0 ? void 0 : u[t]; }
function sa(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function ca(e) { return e.name; }
function Ru(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !Z(t);)
        (_b = t, t = _b.next);
    return t;
}
function Uu(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !Z(t);)
        (_b = t, t = _b.prev);
    return t;
}
function Me(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
} e.next = null, e.prev = null, e.parent = null; }
function oa(e, t) { var u = t.prev = e.prev; u && (u.next = t); var r = t.next = e.next; r && (r.prev = t); var a = t.parent = e.parent; if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = t, e.parent = null;
} }
function la(e, t) { if (Me(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
}
else
    t.prev = null; }
function fa(e, t) { Me(t); var u = e.parent, r = e.next; if (t.next = r, t.prev = e, e.next = t, t.parent = u, r) {
    if (r.prev = t, u) {
        var a = u.children;
        a.splice(a.lastIndexOf(r), 0, t);
    }
}
else
    u && u.children.push(t); }
function da(e, t) { if (Me(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
}
else
    t.next = null; }
function Ou(e, t) { Me(t); var u = e.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t; }
function lt(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Vt(e, Array.isArray(t) ? t : [t], u, r);
}
function Vt(e, t, u, r) { var a = [], n = [Array.isArray(t) ? t : [t]], i = [0]; for (;;) {
    if (i[0] >= n[0].length) {
        if (i.length === 1)
            return a;
        n.shift(), i.shift();
        continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
        return a;
    u && ge(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
} }
function ha(e, t) { return t.find(e); }
function zt(e, t, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(t) ? t : [t];
    for (var a = 0; a < r.length; a++) {
        var n = r[a];
        if (Z(n) && e(n))
            return n;
        if (u && ge(n) && n.children.length > 0) {
            var i = zt(e, n.children, !0);
            if (i)
                return i;
        }
    }
    return null;
}
function Hr(e, t) { return (Array.isArray(t) ? t : [t]).some(function (u) { return Z(u) && e(u) || ge(u) && Hr(e, u.children); }); }
function pa(e, t) { var u = [], r = [Array.isArray(t) ? t : [t]], a = [0]; for (;;) {
    if (a[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), a.shift();
        continue;
    }
    var n = r[0][a[0]++];
    Z(n) && e(n) && u.push(n), ge(n) && n.children.length > 0 && (a.unshift(0), r.unshift(n.children));
} }
var jt = { tag_name: function (e) { return typeof e == "function" ? function (t) { return Z(t) && e(t.name); } : e === "*" ? Z : function (t) { return Z(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return Ce(t) && e(t.data); } : function (t) { return Ce(t) && t.data === e; }; } };
function Hu(e, t) { return typeof t == "function" ? function (u) { return Z(u) && t(u.attribs[e]); } : function (u) { return Z(u) && u.attribs[e] === t; }; }
function ba(e, t) { return function (u) { return e(u) || t(u); }; }
function Pr(e) { var t = Object.keys(e).map(function (u) { var r = e[u]; return Object.prototype.hasOwnProperty.call(jt, u) ? jt[u](r) : Hu(u, r); }); return t.length === 0 ? null : t.reduce(ba); }
function ga(e, t) { var u = Pr(e); return u ? u(t) : !0; }
function ma(e, t, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var a = Pr(e);
    return a ? lt(a, t, u, r) : [];
}
function xa(e, t, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(t) || (t = [t]), zt(Hu("id", e), t, u);
}
function Xe(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return lt(jt.tag_name(e), t, u, r);
}
function va(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return lt(Hu("class", e), t, u, r);
}
function ya(e, t, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return lt(jt.tag_type(e), t, u, r);
}
function Sa(e) { var t = e.length; for (; --t >= 0;) {
    var u = e[t];
    if (t > 0 && e.lastIndexOf(u, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var r = u.parent; r; r = r.parent)
        if (e.includes(r)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var we;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(we || (we = {}));
function Mr(e, t) { var u = [], r = []; if (e === t)
    return 0; var a = ge(e) ? e : e.parent; for (; a;)
    u.unshift(a), a = a.parent; for (a = ge(t) ? t : t.parent; a;)
    r.unshift(a), a = a.parent; var n = Math.min(u.length, r.length), i = 0; for (; i < n && u[i] === r[i];)
    i++; if (i === 0)
    return we.DISCONNECTED; var c = u[i - 1], o = c.children, f = u[i], E = r[i]; return o.indexOf(f) > o.indexOf(E) ? c === t ? we.FOLLOWING | we.CONTAINED_BY : we.FOLLOWING : c === e ? we.PRECEDING | we.CONTAINS : we.PRECEDING; }
function Pu(e) { return e = e.filter(function (t, u, r) { return !r.includes(t, u + 1); }), e.sort(function (t, u) { var r = Mr(t, u); return r & we.PRECEDING ? -1 : r & we.FOLLOWING ? 1 : 0; }), e; }
function Mu(e) { var t = _t(Na, e); return t ? t.name === "feed" ? Aa(t) : Ea(t) : null; }
function Aa(e) { var t; var u = e.children, r = { type: "atom", items: Xe("entry", u).map(function (i) { var c; var o = i.children, f = { media: Fr(o) }; me(f, "id", "id", o), me(f, "title", "title", o); var E = (c = _t("link", o)) === null || c === void 0 ? void 0 : c.attribs.href; E && (f.link = E); var U = je("summary", o) || je("content", o); U && (f.description = U); var R = je("updated", o); return R && (f.pubDate = new Date(R)), f; }) }; me(r, "id", "id", u), me(r, "title", "title", u); var a = (t = _t("link", u)) === null || t === void 0 ? void 0 : t.attribs.href; a && (r.link = a), me(r, "description", "subtitle", u); var n = je("updated", u); return n && (r.updated = new Date(n)), me(r, "author", "email", u, !0), r; }
function Ea(e) { var t, u; var r = (u = (t = _t("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], a = { type: e.name.substr(0, 3), id: "", items: Xe("item", e.children).map(function (i) { var c = i.children, o = { media: Fr(c) }; me(o, "id", "guid", c), me(o, "title", "title", c), me(o, "link", "link", c), me(o, "description", "description", c); var f = je("pubDate", c) || je("dc:date", c); return f && (o.pubDate = new Date(f)), o; }) }; me(a, "title", "title", r), me(a, "link", "link", r), me(a, "description", "description", r); var n = je("lastBuildDate", r); return n && (a.updated = new Date(n)), me(a, "author", "managingEditor", r, !0), a; }
var wa = ["url", "type", "lang"], Ta = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Fr(e) { return Xe("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var u = t.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var wa_1 = __values(wa), wa_1_1 = wa_1.next(); !wa_1_1.done; wa_1_1 = wa_1.next()) {
            var a = wa_1_1.value;
            u[a] && (r[a] = u[a]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (wa_1_1 && !wa_1_1.done && (_b = wa_1.return)) _b.call(wa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Ta_1 = __values(Ta), Ta_1_1 = Ta_1.next(); !Ta_1_1.done; Ta_1_1 = Ta_1.next()) {
            var a = Ta_1_1.value;
            u[a] && (r[a] = parseInt(u[a], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ta_1_1 && !Ta_1_1.done && (_c = Ta_1.return)) _c.call(Ta_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function _t(e, t) { return Xe(e, t, !0, 1)[0]; }
function je(e, t, u) {
    if (u === void 0) { u = !1; }
    return ze(Xe(e, t, u, 1)).trim();
}
function me(e, t, u, r, a) {
    if (a === void 0) { a = !1; }
    var n = je(u, r, a);
    n && (e[t] = n);
}
function Na(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function Br(e, t) { var u = new ct(void 0, t); return new gt(u, t).end(e), u.root; }
var L;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(L || (L = {}));
var se;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(se || (se = {}));
var Gr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, ka = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ca = new Map([[126, se.Element], [94, se.Start], [36, se.End], [42, se.Any], [33, se.Not], [124, se.Hyphen]]), qa = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Qe(e) { switch (e.type) {
    case L.Adjacent:
    case L.Child:
    case L.Descendant:
    case L.Parent:
    case L.Sibling:
    case L.ColumnCombinator: return !0;
    default: return !1;
} }
var La = new Set(["contains", "icontains"]);
function Da(e, t, u) { var r = parseInt(t, 16) - 65536; return r !== r || u ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Tt(e) { return e.replace(ka, Da); }
function Fu(e) { return e === 39 || e === 34; }
function Vr(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function _e(e) { var t = [], u = zr(t, "".concat(e), 0); if (u < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(u))); return t; }
function zr(e, t, u) { var r = []; function a(R) { var N = t.slice(u + R).match(Gr); if (!N)
    throw new Error("Expected name, found ".concat(t.slice(u))); var _b = __read(N, 1), P = _b[0]; return u += R + P.length, Tt(P); } function n(R) { for (u += R; u < t.length && Vr(t.charCodeAt(u));)
    u++; } function i() { u += 1; var R = u, N = 1; for (; N > 0 && u < t.length; u++)
    t.charCodeAt(u) === 40 && !c(u) ? N++ : t.charCodeAt(u) === 41 && !c(u) && N--; if (N)
    throw new Error("Parenthesis not matched"); return Tt(t.slice(R, u - 1)); } function c(R) { var N = 0; for (; t.charCodeAt(--R) === 92;)
    N++; return (N & 1) === 1; } function o() { if (r.length > 0 && Qe(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function f(R) { if (r.length > 0 && r[r.length - 1].type === L.Descendant) {
    r[r.length - 1].type = R;
    return;
} o(), r.push({ type: R }); } function E(R, N) { r.push({ type: L.Attribute, name: R, action: N, value: a(1), namespace: null, ignoreCase: "quirks" }); } function U() { if (r.length && r[r.length - 1].type === L.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (n(0), t.length === u)
    return u; e: for (; u < t.length;) {
    var R = t.charCodeAt(u);
    switch (R) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== L.Descendant) && (o(), r.push({ type: L.Descendant })), n(1);
            break;
        }
        case 62: {
            f(L.Child), n(1);
            break;
        }
        case 60: {
            f(L.Parent), n(1);
            break;
        }
        case 126: {
            f(L.Sibling), n(1);
            break;
        }
        case 43: {
            f(L.Adjacent), n(1);
            break;
        }
        case 46: {
            E("class", se.Element);
            break;
        }
        case 35: {
            E("id", se.Equals);
            break;
        }
        case 91: {
            n(1);
            var N = void 0, P = null;
            t.charCodeAt(u) === 124 ? N = a(1) : t.startsWith("*|", u) ? (P = "*", N = a(2)) : (N = a(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (P = N, N = a(1))), n(0);
            var J = se.Exists, ce = Ca.get(t.charCodeAt(u));
            if (ce) {
                if (J = ce, t.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                n(2);
            }
            else
                t.charCodeAt(u) === 61 && (J = se.Equals, n(1));
            var te = "", ie = null;
            if (J !== "exists") {
                if (Fu(t.charCodeAt(u))) {
                    var ne = t.charCodeAt(u), Q = u + 1;
                    for (; Q < t.length && (t.charCodeAt(Q) !== ne || c(Q));)
                        Q += 1;
                    if (t.charCodeAt(Q) !== ne)
                        throw new Error("Attribute value didn't end");
                    te = Tt(t.slice(u + 1, Q)), u = Q + 1;
                }
                else {
                    var ne = u;
                    for (; u < t.length && (!Vr(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || c(u));)
                        u += 1;
                    te = Tt(t.slice(ne, u));
                }
                n(0);
                var X = t.charCodeAt(u) | 32;
                X === 115 ? (ie = !1, n(1)) : X === 105 && (ie = !0, n(1));
            }
            if (t.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var m = { type: L.Attribute, name: N, action: J, value: te, namespace: P, ignoreCase: ie };
            r.push(m);
            break;
        }
        case 58: {
            if (t.charCodeAt(u + 1) === 58) {
                r.push({ type: L.PseudoElement, name: a(2).toLowerCase(), data: t.charCodeAt(u) === 40 ? i() : null });
                continue;
            }
            var N = a(1).toLowerCase(), P = null;
            if (t.charCodeAt(u) === 40)
                if (qa.has(N)) {
                    if (Fu(t.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (P = [], u = zr(P, t, u + 1), t.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(t, ")"));
                    u += 1;
                }
                else {
                    if (P = i(), La.has(N)) {
                        var J = P.charCodeAt(0);
                        J === P.charCodeAt(P.length - 1) && Fu(J) && (P = P.slice(1, -1));
                    }
                    P = Tt(P);
                }
            r.push({ type: L.Pseudo, name: N, data: P });
            break;
        }
        case 44: {
            U(), r = [], n(1);
            break;
        }
        default: {
            if (t.startsWith("/*", u)) {
                var J = t.indexOf("*/", u + 2);
                if (J < 0)
                    throw new Error("Comment was not terminated");
                u = J + 2, r.length === 0 && n(0);
                break;
            }
            var N = null, P = void 0;
            if (R === 42)
                u += 1, P = "*";
            else if (R === 124) {
                if (P = "", t.charCodeAt(u + 1) === 124) {
                    f(L.ColumnCombinator), n(2);
                    break;
                }
            }
            else if (Gr.test(t.slice(u)))
                P = a(0);
            else
                break e;
            t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (N = P, t.charCodeAt(u + 1) === 42 ? (P = "*", u += 2) : P = a(1)), r.push(P === "*" ? { type: L.Universal, namespace: N } : { type: L.Tag, name: P, namespace: N });
        }
    }
} return U(), u; }
var Qu = $e(Ke(), 1);
var Fe = $e(Ke(), 1);
var _r = new Map([[L.Universal, 50], [L.Tag, 30], [L.Attribute, 1], [L.Pseudo, 0]]);
function Nt(e) { return !_r.has(e.type); }
var Ia = new Map([[se.Exists, 10], [se.Equals, 8], [se.Not, 7], [se.Start, 6], [se.End, 6], [se.Any, 5]]);
function Bu(e) { var t = e.map(Kr); for (var u = 1; u < e.length; u++) {
    var r = t[u];
    if (!(r < 0))
        for (var a = u - 1; a >= 0 && r < t[a]; a--) {
            var n = e[a + 1];
            e[a + 1] = e[a], e[a] = n, t[a + 1] = t[a], t[a] = r;
        }
} }
function Kr(e) { var t, u; var r = (t = _r.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === L.Attribute ? (r = (u = Ia.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === se.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === L.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (a) { return Math.min.apply(Math, __spreadArray([], __read(a.map(Kr)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var kt = $e(Ke(), 1), Ra = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Wr(e) { return e.replace(Ra, "\\$&"); }
var Ua = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Ye(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Ua.has(e.name); }
var $r = { equals: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return Ye(t, u) ? (n = n.toLowerCase(), function (i) { var c = r.getAttributeValue(i, a); return c != null && c.length === n.length && c.toLowerCase() === n && e(i); }) : function (i) { return r.getAttributeValue(i, a) === n && e(i); }; }, hyphen: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = n.length; return Ye(t, u) ? (n = n.toLowerCase(), function (o) { var f = r.getAttributeValue(o, a); return f != null && (f.length === i || f.charAt(i) === "-") && f.substr(0, i).toLowerCase() === n && e(o); }) : function (o) { var f = r.getAttributeValue(o, a); return f != null && (f.length === i || f.charAt(i) === "-") && f.substr(0, i) === n && e(o); }; }, element: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (/\s/.test(n))
        return kt.default.falseFunc; var i = new RegExp("(?:^|\\s)".concat(Wr(n), "(?:$|\\s)"), Ye(t, u) ? "i" : ""); return function (o) { var f = r.getAttributeValue(o, a); return f != null && f.length >= n.length && i.test(f) && e(o); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var u = _c.adapter;
        return function (r) { return u.hasAttrib(r, t) && e(r); };
    }, start: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = n.length; return i === 0 ? kt.default.falseFunc : Ye(t, u) ? (n = n.toLowerCase(), function (c) { var o = r.getAttributeValue(c, a); return o != null && o.length >= i && o.substr(0, i).toLowerCase() === n && e(c); }) : function (c) { var o; return !!(!((o = r.getAttributeValue(c, a)) === null || o === void 0) && o.startsWith(n)) && e(c); }; }, end: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value, i = -n.length; return i === 0 ? kt.default.falseFunc : Ye(t, u) ? (n = n.toLowerCase(), function (c) { var o; return ((o = r.getAttributeValue(c, a)) === null || o === void 0 ? void 0 : o.substr(i).toLowerCase()) === n && e(c); }) : function (c) { var o; return !!(!((o = r.getAttributeValue(c, a)) === null || o === void 0) && o.endsWith(n)) && e(c); }; }, any: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; if (n === "")
        return kt.default.falseFunc; if (Ye(t, u)) {
        var i_1 = new RegExp(Wr(n), "i");
        return function (o) { var f = r.getAttributeValue(o, a); return f != null && f.length >= n.length && i_1.test(f) && e(o); };
    } return function (i) { var c; return !!(!((c = r.getAttributeValue(i, a)) === null || c === void 0) && c.includes(n)) && e(i); }; }, not: function (e, t, u) { var r = u.adapter, a = t.name, n = t.value; return n === "" ? function (i) { return !!r.getAttributeValue(i, a) && e(i); } : Ye(t, u) ? (n = n.toLowerCase(), function (i) { var c = r.getAttributeValue(i, a); return (c == null || c.length !== n.length || c.toLowerCase() !== n) && e(i); }) : function (i) { return r.getAttributeValue(i, a) !== n && e(i); }; } };
var Oa = new Set([9, 10, 12, 13, 32]), Xr = 48, Ha = 57;
function Qr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, u = 0, r = n(), a = i(); if (t < e.length && e.charAt(t) === "n" && (t++, u = r * (a != null ? a : 1), c(), t < e.length ? (r = n(), c(), a = i()) : r = a = 0), a === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [u, r * a]; function n() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function i() { var o = t, f = 0; for (; t < e.length && e.charCodeAt(t) >= Xr && e.charCodeAt(t) <= Ha;)
    f = f * 10 + (e.charCodeAt(t) - Xr), t++; return t === o ? null : f; } function c() { for (; t < e.length && Oa.has(e.charCodeAt(t));)
    t++; } }
var Gu = $e(Ke(), 1);
function Yr(e) { var t = e[0], u = e[1] - 1; if (u < 0 && t <= 0)
    return Gu.default.falseFunc; if (t === -1)
    return function (n) { return n <= u; }; if (t === 0)
    return function (n) { return n === u; }; if (t === 1)
    return u < 0 ? Gu.default.trueFunc : function (n) { return n >= u; }; var r = Math.abs(t), a = (u % r + r) % r; return t > 1 ? function (n) { return n >= u && n % r === a; } : function (n) { return n <= u && n % r === a; }; }
function ft(e) { return Yr(Qr(e)); }
var xe = $e(Ke(), 1);
function Kt(e, t) { return function (u) { var r = t.getParent(u); return r != null && t.isTag(r) && e(u); }; }
var dt = { contains: function (e, t, _b) {
        var u = _b.adapter;
        return function (a) { return e(a) && u.getText(a).includes(t); };
    }, icontains: function (e, t, _b) {
        var u = _b.adapter;
        var r = t.toLowerCase();
        return function (n) { return e(n) && u.getText(n).toLowerCase().includes(r); };
    }, "nth-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = ft(t);
        return a === xe.default.falseFunc ? xe.default.falseFunc : a === xe.default.trueFunc ? Kt(e, u) : function (i) { var c = u.getSiblings(i), o = 0; for (var f = 0; f < c.length && !r(i, c[f]); f++)
            u.isTag(c[f]) && o++; return a(o) && e(i); };
    }, "nth-last-child": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = ft(t);
        return a === xe.default.falseFunc ? xe.default.falseFunc : a === xe.default.trueFunc ? Kt(e, u) : function (i) { var c = u.getSiblings(i), o = 0; for (var f = c.length - 1; f >= 0 && !r(i, c[f]); f--)
            u.isTag(c[f]) && o++; return a(o) && e(i); };
    }, "nth-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = ft(t);
        return a === xe.default.falseFunc ? xe.default.falseFunc : a === xe.default.trueFunc ? Kt(e, u) : function (i) { var c = u.getSiblings(i), o = 0; for (var f = 0; f < c.length; f++) {
            var E = c[f];
            if (r(i, E))
                break;
            u.isTag(E) && u.getName(E) === u.getName(i) && o++;
        } return a(o) && e(i); };
    }, "nth-last-of-type": function (e, t, _b) {
        var u = _b.adapter, r = _b.equals;
        var a = ft(t);
        return a === xe.default.falseFunc ? xe.default.falseFunc : a === xe.default.trueFunc ? Kt(e, u) : function (i) { var c = u.getSiblings(i), o = 0; for (var f = c.length - 1; f >= 0; f--) {
            var E = c[f];
            if (r(i, E))
                break;
            u.isTag(E) && u.getName(E) === u.getName(i) && o++;
        } return a(o) && e(i); };
    }, root: function (e, t, _b) {
        var u = _b.adapter;
        return function (r) { var a = u.getParent(r); return (a == null || !u.isTag(a)) && e(r); };
    }, scope: function (e, t, u, r) { var a = u.equals; return !r || r.length === 0 ? dt.root(e, t, u) : r.length === 1 ? function (n) { return a(r[0], n) && e(n); } : function (n) { return r.includes(n) && e(n); }; }, hover: Vu("isHovered"), visited: Vu("isVisited"), active: Vu("isActive") };
function Vu(e) { return function (u, r, _b) {
    var a = _b.adapter;
    var n = a[e];
    return typeof n != "function" ? xe.default.falseFunc : function (c) { return n(c) && u(c); };
}; }
var Ct = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (u) { return t.isTag(u) || t.getText(u) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var r = t.getSiblings(e).find(function (a) { return t.isTag(a); });
        return r != null && u(e, r);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e);
        for (var a = r.length - 1; a >= 0; a--) {
            if (u(e, r[a]))
                return !0;
            if (t.isTag(r[a]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = 0; n < r.length; n++) {
            var i = r[n];
            if (u(e, i))
                return !0;
            if (t.isTag(i) && t.getName(i) === a)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getSiblings(e), a = t.getName(e);
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n];
            if (u(e, i))
                return !0;
            if (t.isTag(i) && t.getName(i) === a)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        var r = t.getName(e);
        return t.getSiblings(e).every(function (a) { return u(e, a) || !t.isTag(a) || t.getName(a) !== r; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, u = _b.equals;
        return t.getSiblings(e).every(function (r) { return u(e, r) || !t.isTag(r); });
    } };
function zu(e, t, u, r) { if (u === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var Wt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var Te = $e(Ke(), 1);
var Ku = {};
function Wu(e, t) { return e === Te.default.falseFunc ? Te.default.falseFunc : function (u) { return t.isTag(u) && e(u); }; }
function $u(e, t) { var u = t.getSiblings(e); if (u.length <= 1)
    return []; var r = u.indexOf(e); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(t.isTag); }
function _u(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var ju = function (e, t, u, r, a) { var n = a(t, _u(u), r); return n === Te.default.trueFunc ? e : n === Te.default.falseFunc ? Te.default.falseFunc : function (i) { return n(i) && e(i); }; }, $t = { is: ju, matches: ju, where: ju, not: function (e, t, u, r, a) { var n = a(t, _u(u), r); return n === Te.default.falseFunc ? e : n === Te.default.trueFunc ? Te.default.falseFunc : function (i) { return !n(i) && e(i); }; }, has: function (e, t, u, r, a) { var n = u.adapter, i = _u(u); i.relativeSelector = !0; var c = t.some(function (E) { return E.some(Nt); }) ? [Ku] : void 0, o = a(t, i, c); if (o === Te.default.falseFunc)
        return Te.default.falseFunc; var f = Wu(o, n); if (c && o !== Te.default.trueFunc) {
        var _b = o.shouldTestNextSiblings, E_1 = _b === void 0 ? !1 : _b;
        return function (U) { if (!e(U))
            return !1; c[0] = U; var R = n.getChildren(U), N = E_1 ? __spreadArray(__spreadArray([], __read(R), false), __read($u(U, n)), false) : R; return n.existsOne(f, N); };
    } return function (E) { return e(E) && n.existsOne(f, n.getChildren(E)); }; } };
function Zr(e, t, u, r, a) { var n; var i = t.name, c = t.data; if (Array.isArray(c)) {
    if (!(i in $t))
        throw new Error("Unknown pseudo-class :".concat(i, "(").concat(c, ")"));
    return $t[i](e, c, u, r, a);
} var o = (n = u.pseudos) === null || n === void 0 ? void 0 : n[i], f = typeof o == "string" ? o : Wt[i]; if (typeof f == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(i, " doesn't have any arguments"));
    var E = _e(f);
    return $t.is(e, E, u, r, a);
} if (typeof o == "function")
    return zu(o, i, c, 1), function (E) { return o(E, c) && e(E); }; if (i in dt)
    return dt[i](e, c, u, r); if (i in Ct) {
    var E_2 = Ct[i];
    return zu(E_2, i, c, 2), function (U) { return E_2(U, u, c) && e(U); };
} throw new Error("Unknown pseudo-class :".concat(i)); }
function Xu(e, t) { var u = t.getParent(e); return u && t.isTag(u) ? u : null; }
function Jr(e, t, u, r, a) { var n = u.adapter, i = u.equals; switch (t.type) {
    case L.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case L.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case L.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), $r[t.action](e, t, u);
    }
    case L.Pseudo: return Zr(e, t, u, r, a);
    case L.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = t.name;
        return (!u.xmlMode || u.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (f) { return n.getName(f) === c_1 && e(f); };
    }
    case L.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (f) { var E = f; for (; E = Xu(E, n);)
                if (e(E))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (f) { var E = f; for (; E = Xu(E, n);)
            if (!c_2.has(E)) {
                if (n.isTag(E) && e(E))
                    return !0;
                c_2.add(E);
            } return !1; };
    }
    case "_flexibleDescendant": return function (o) { var f = o; do
        if (e(f))
            return !0;
    while (f = Xu(f, n)); return !1; };
    case L.Parent: return function (o) { return n.getChildren(o).some(function (f) { return n.isTag(f) && e(f); }); };
    case L.Child: return function (o) { var f = n.getParent(o); return f != null && n.isTag(f) && e(f); };
    case L.Sibling: return function (o) { var f = n.getSiblings(o); for (var E = 0; E < f.length; E++) {
        var U = f[E];
        if (i(o, U))
            break;
        if (n.isTag(U) && e(U))
            return !0;
    } return !1; };
    case L.Adjacent: return n.prevElementSibling ? function (o) { var f = n.prevElementSibling(o); return f != null && e(f); } : function (o) { var f = n.getSiblings(o), E; for (var U = 0; U < f.length; U++) {
        var R = f[U];
        if (i(o, R))
            break;
        n.isTag(R) && (E = R);
    } return !!E && e(E); };
    case L.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function e0(e, t, u) { var r = Xt(e, t, u); return Wu(r, t.adapter); }
function Xt(e, t, u) { var r = typeof e == "string" ? _e(e) : e; return Qt(r, t, u); }
function t0(e) { return e.type === L.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(t0); })); }
var Pa = { type: L.Descendant }, Ma = { type: "_flexibleDescendant" }, Fa = { type: L.Pseudo, name: "scope", data: null };
function Ba(e, _b, u) {
    var e_6, _c;
    var t = _b.adapter;
    var r = !!(u != null && u.every(function (a) { var n = t.isTag(a) && t.getParent(a); return a === Ku || n && t.isTag(n); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var a = e_7_1.value;
            if (!(a.length > 0 && Nt(a[0]) && a[0].type !== L.Descendant))
                if (r && !a.some(t0))
                    a.unshift(Pa);
                else
                    continue;
            a.unshift(Fa);
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
function Qt(e, t, u) { var r; e.forEach(Bu), u = (r = t.context) !== null && r !== void 0 ? r : u; var a = Array.isArray(u), n = u && (Array.isArray(u) ? u : [u]); if (t.relativeSelector !== !1)
    Ba(e, t, n);
else if (e.some(function (o) { return o.length > 0 && Nt(o[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var i = !1, c = e.map(function (o) { if (o.length >= 2) {
    var _b = __read(o, 2), f = _b[0], E = _b[1];
    f.type !== L.Pseudo || f.name !== "scope" || (a && E.type === L.Descendant ? o[1] = Ma : (E.type === L.Adjacent || E.type === L.Sibling) && (i = !0));
} return Ga(o, t, n); }).reduce(Va, Fe.default.falseFunc); return c.shouldTestNextSiblings = i, c; }
function Ga(e, t, u) { var r; return e.reduce(function (a, n) { return a === Fe.default.falseFunc ? Fe.default.falseFunc : Jr(a, n, t, u, Qt); }, (r = t.rootFunc) !== null && r !== void 0 ? r : Fe.default.trueFunc); }
function Va(e, t) { return t === Fe.default.falseFunc || e === Fe.default.trueFunc ? e : e === Fe.default.falseFunc || t === Fe.default.trueFunc ? t : function (r) { return e(r) || t(r); }; }
var u0 = function (e, t) { return e === t; }, za = { adapter: qe, equals: u0 };
function r0(e) { var t, u, r, a; var n = e != null ? e : za; return (t = n.adapter) !== null && t !== void 0 || (n.adapter = qe), (u = n.equals) !== null && u !== void 0 || (n.equals = (a = (r = n.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && a !== void 0 ? a : u0), n; }
function Yu(e) { return function (u, r, a) { var n = r0(r); return e(u, n, a); }; }
var ps = Yu(e0), bs = Yu(Xt), Yt = Yu(Qt);
function a0(e) { return function (u, r, a) { var n = r0(a); typeof u != "function" && (u = Xt(u, n, r)); var i = Zt(r, n.adapter, u.shouldTestNextSiblings); return e(u, i, n); }; }
function Zt(e, t, u) {
    if (u === void 0) { u = !1; }
    return u && (e = ja(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function ja(e, t) { var u = Array.isArray(e) ? e.slice(0) : [e], r = u.length; for (var a = 0; a < r; a++) {
    var n = $u(u[a], t);
    u.push.apply(u, __spreadArray([], __read(n), false));
} return u; }
var gs = a0(function (e, t, u) { return e === Qu.default.falseFunc || !t || t.length === 0 ? [] : u.adapter.findAll(e, t); }), ms = a0(function (e, t, u) { return e === Qu.default.falseFunc || !t || t.length === 0 ? null : u.adapter.findOne(e, t); });
var eu = $e(Ke(), 1);
var _a = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function ht(e) { return e.type !== "pseudo" ? !1 : _a.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(ht); }) : !1; }
function n0(e, t, u) { var r = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, u) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function i0(e) { for (; e.parent;)
    e = e.parent; return e; }
function Jt(e) {
    var e_8, _b;
    var t = [], u = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(ht) ? t.push(r) : u.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [u, t];
}
var Ka = { type: L.Universal, namespace: null }, Wa = { type: L.Pseudo, name: "scope", data: null };
function er(e, t, u) {
    if (u === void 0) { u = {}; }
    return $a([e], t, u);
}
function $a(e, t, u) {
    if (u === void 0) { u = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(Jt(_e(t)), 2), r = _b[0], a = _b[1];
    return r.length > 0 && e.some(Yt(r, u)) || a.some(function (n) { return s0(n, e, u).length > 0; });
}
function Xa(e, t, u, r) { var a = typeof u == "string" ? parseInt(u, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(a) && Math.abs(a) < t.length ? [a < 0 ? t[t.length + a] : t[a]] : [];
    case "gt": return isFinite(a) ? t.slice(a + 1) : [];
    case "even": return t.filter(function (n, i) { return i % 2 === 0; });
    case "odd": return t.filter(function (n, i) { return i % 2 === 1; });
    case "not": {
        var n_1 = new Set(Qa(u, t, r));
        return t.filter(function (i) { return !n_1.has(i); });
    }
} }
function Qa(e, t, u) { if (t.length === 0)
    return []; var _b = __read(Jt(e), 2), r = _b[0], a = _b[1], n; if (r.length) {
    var i = Ju(t, r, u);
    if (a.length === 0)
        return i;
    i.length && (n = new Set(i));
} for (var i = 0; i < a.length && (n == null ? void 0 : n.size) !== t.length; i++) {
    var c = a[i];
    if ((n ? t.filter(function (E) { return Z(E) && !n.has(E); }) : t).length === 0)
        break;
    var f = s0(c, t, u);
    if (f.length)
        if (n)
            f.forEach(function (E) { return n.add(E); });
        else {
            if (i === a.length - 1)
                return f;
            n = new Set(f);
        }
} return typeof n != "undefined" ? n.size === t.length ? t : t.filter(function (i) { return n.has(i); }) : []; }
function s0(e, t, u) { var r; if (e.some(Qe)) {
    var a = (r = u.root) !== null && r !== void 0 ? r : i0(t[0]), n = We(Ne({}, u), { context: t, relativeSelector: !1 });
    return e.push(Wa), tu(a, e, n, !0, t.length);
} return tu(t, e, u, !1, t.length); }
function tr(e, t, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return c0(t, e);
    var _b = __read(Jt(_e(e)), 2), a = _b[0], n = _b[1], i = n.map(function (c) { return tu(t, c, u, !0, r); });
    return a.length && i.push(Zu(t, a, u, r)), i.length === 0 ? [] : i.length === 1 ? i[0] : Pu(i.reduce(function (c, o) { return __spreadArray(__spreadArray([], __read(c), false), __read(o), false); }));
}
function tu(e, t, u, r, a) { var n = t.findIndex(ht), i = t.slice(0, n), c = t[n], o = t.length - 1 === n ? a : 1 / 0, f = n0(c.name, c.data, o); if (f === 0)
    return []; var U = (i.length === 0 && !Array.isArray(e) ? Bt(e).filter(Z) : i.length === 0 ? (Array.isArray(e) ? e : [e]).filter(Z) : r || i.some(Qe) ? Zu(e, [i], u, f) : Ju(e, [i], u)).slice(0, f), R = Xa(c.name, U, c.data, u); if (R.length === 0 || t.length === n + 1)
    return R; var N = t.slice(n + 1), P = N.some(Qe); if (P) {
    if (Qe(N[0])) {
        var J = N[0].type;
        (J === L.Sibling || J === L.Adjacent) && (R = Zt(R, qe, !0)), N.unshift(Ka);
    }
    u = We(Ne({}, u), { relativeSelector: !1, rootFunc: function (J) { return R.includes(J); } });
}
else
    u.rootFunc && u.rootFunc !== eu.trueFunc && (u = We(Ne({}, u), { rootFunc: eu.trueFunc })); return N.some(ht) ? tu(R, N, u, !1, a) : P ? Zu(R, [N], u, a) : Ju(R, [N], u); }
function Zu(e, t, u, r) { var a = Yt(t, u, e); return c0(e, a, r); }
function c0(e, t, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = Zt(e, qe, t.shouldTestNextSiblings);
    return Vt(function (a) { return Z(a) && t(a); }, r, !0, u);
}
function Ju(e, t, u) { var r = (Array.isArray(e) ? e : [e]).filter(Z); if (r.length === 0)
    return r; var a = Yt(t, u); return a === eu.trueFunc ? r : r.filter(a); }
function o0(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function ur(e) { var t = [], u = e.split("/"); for (var r = 0; r < u.length; r++) {
    var a = u[r];
    a === ".." ? (t.length > 1 && t.pop(), r === u.length - 1 && t.push("")) : a === "." ? r === u.length - 1 && t.push("") : t.push(a);
} return t.join("/"); }
function ru(e, t) { t = t == null ? "" : String(t).trim(); var u = o0(t); if (u.scheme || !e)
    return t; var r = o0(String(e)); if (!r.scheme)
    return t; var a = r.auth, n, i; if (u.auth !== void 0)
    a = u.auth, n = ur(u.path), i = u.query;
else if (!u.path)
    n = r.path, i = u.query !== void 0 ? u.query : r.query;
else {
    if (u.path.charAt(0) === "/")
        n = ur(u.path);
    else {
        var c = a !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        n = ur(c + u.path);
    }
    i = u.query;
} return a !== void 0 && n.charAt(0) !== "/" && (n = "/" + n), r.scheme + ":" + (a !== void 0 ? "//" + a : "") + n + (i !== void 0 ? "?" + i : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var uu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function l0(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var u = 0; u < e.length; u += 3) {
    var r = e.charCodeAt(u), a = e.charCodeAt(u + 1), n = e.charCodeAt(u + 2), i = r << 16 | (a || 0) << 8 | (n || 0);
    t += uu[i >> 18 & 63] + uu[i >> 12 & 63] + (u + 1 < e.length ? uu[i >> 6 & 63] : "=") + (u + 2 < e.length ? uu[i & 63] : "=");
} return t; }
var Ya = function (e, t, u) { return tr(e, t, u); }, p0 = function (e, t, u) { return tr(e, t, u, 1)[0] || null; }, b0 = /[\s ]+/g, f0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Za = { containsOwn: function (e, t) { return ar(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return d0(t).test(rr(e)); }, matchesOwn: function (e, t) { return d0(t).test(ar(e)); }, containsData: function (e, t) { return ze(e).includes(t); }, "contains-ci": function (e, t) { return rr(e).toLowerCase().includes(String(t).toLowerCase()); } };
function d0(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var au = { pseudos: Za, xmlMode: !1, lowerCaseTags: !0 };
function nu(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function rr(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", u = function (r) {
    var e_10, _b;
    try {
        for (var _c = __values(r.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            a.type === "text" ? t += a.data : (a.type === "tag" || a.type === "script" || a.type === "style") && (a.name === "br" ? t += " " : a.type === "tag" && (f0.has(a.name) && (t += " "), u(a), f0.has(a.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return u(e), t.replace(b0, " ").trim(); }
function ar(e) {
    var e_11, _b;
    var t = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (t += u.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(b0, " ").trim();
}
function g0(e, t) { if (!t)
    return ""; try {
    return ru(e, t);
}
catch (u) {
    return e ? "" : t;
} }
var Ze = (function () {
    function e(t, u) {
        this.node = t, this.doc = u;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return Le.of(Ya(nu(t), this.node, au), this.doc); };
    e.prototype.selectFirst = function (t) { var u = p0(nu(t), this.node, au); return u ? new e(u, this.doc) : null; };
    e.prototype.is = function (t) { return er(this.node, nu(t), au); };
    e.prototype.text = function () { return rr(this.node); };
    e.prototype.ownText = function () { return ar(this.node); };
    e.prototype.wholeText = function () { return ze(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return ot(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return ot(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (t) { return this.classNames().includes(t); };
    e.prototype.attr = function (t, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[t] = String(u)), this; if (!this.node.attribs)
        return ""; if (t.startsWith("abs:"))
        return g0(this.baseUri, this.node.attribs[t.slice(4)] || ""); var r = this.node.attribs[t]; return r == null ? "" : r; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], r = _f[1];
                u.startsWith("data-") && (t[u.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return t;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var t = this.node.parent; return t && t.type !== "root" ? new e(t, this.doc) : null; };
    e.prototype.parents = function () { var t = [], u = this.node.parent; for (; u && u.type !== "root";)
        t.push(u), u = u.parent; return Le.of(t, this.doc); };
    e.prototype.closest = function (t) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && er(u, nu(t), au))
            return new e(u, this.doc);
        u = u.parent;
    } return null; };
    e.prototype.children = function () { return Le.of((this.node.children || []).filter(Z), this.doc); };
    e.prototype.child = function (t) { var u = (this.node.children || []).filter(Z)[t]; return u ? new e(u, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(Z).length; };
    e.prototype.nextElementSibling = function () { var t = Ru(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = Uu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return Le.of(Gt(this.node).filter(function (t) { return t !== _this.node && Z(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return Gt(this.node).filter(Z).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return Me(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), ir = Object.create(Array.prototype), Le = { of: nr, prototype: ir };
function nr(e, t) {
    var e_13, _b;
    var u = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            u.push(r instanceof Ze ? r : new Ze(r, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(u, ir), u;
}
var h0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return Le.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _b;
        if (t !== void 0)
            return this.forEach(function (u) { return u.attr(e, t); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(e))
                    return u.attr(e);
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
    }, eachAttr: function (e) { return this.filter(function (t) { return t.hasAttr(e); }).map(function (t) { return t.attr(e); }); }, hasAttr: function (e) { return this.some(function (t) { return t.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (t) { return t.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _b, e_16, _c;
        var t = nr([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var r = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(r.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var a = _h.value;
                        u.has(a.node) || (u.add(a.node), t.push(a));
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
        return t;
    }, selectFirst: function (e) {
        var e_17, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                var u = t.selectFirst(e);
                if (u)
                    return u;
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
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return Le.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = nr([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                e.push.apply(e, __spreadArray([], __read(t.parents()), false));
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
    }, next: function () { return Le.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return Le.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(h0)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(ir, e, { value: h0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function iu(e, t) { var u = Br(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Ze(u, null); r.doc = r, r.__base = t || ""; var a = p0("base[href]", u); return a && a.attribs.href && (r.__base = g0(r.__base, a.attribs.href)), r; }
function m0(e, t) { var u = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = iu(e), a = function (n) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((n.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var i = _f.value;
            if (i.type === "script" || i.type === "style" || i.type === "comment") {
                Me(i);
                continue;
            }
            if (i.type === "tag" && (a(i), !u.has(i.name))) {
                var c = (i.children || []).slice();
                try {
                    for (var c_3 = (e_20 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var o = c_3_1.value;
                        Ou(i, o);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_c = c_3.return)) _c.call(c_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                Me(i);
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
}; return a(r.node), ot(r.node.children, { decodeEntities: !1 }); }
var qt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function Ja(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var u = 0; u < e.length; u++)
    t += String.fromCharCode(e[u]); return l0(t); }
function x0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function en(e) { var t = ""; for (var u = 0; u < e.length; u++) {
    var r = e.charCodeAt(u);
    if (r < 128) {
        t += e[u];
        continue;
    }
    if (r === 128) {
        t += "€";
        continue;
    }
    var a = e.charCodeAt(u + 1);
    r >= 129 && r <= 254 && a >= 64 && a <= 254 && a !== 127 ? (t += __GBK_TABLE[(r - 129) * 190 + (a - 64) - (a > 127 ? 1 : 0)], u++) : t += "�";
} return t; }
var su = (function () {
    function su(t, u) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || u.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: u.url, headers: u.headers || {} };
    }
    su.prototype.header = function (t) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(t).toLowerCase(); }); return u ? this.headers[u] : ""; };
    su.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var u = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? en(u) : u; };
    su.prototype.string = function (t) { return this.text(t); };
    su.prototype.html = function (t) { return iu(this.text(t), this.url); };
    su.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    su.prototype.base64 = function () { return Ja(this._raw.bytes || x0(this.text())); };
    su.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || x0(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return su;
}());
function tn(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (u, r) { t[r] = u; }), t;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            t[u] = String(e[u]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return t;
}
function y0(e, t) {
    var u = function (c) { return ({ getItem: function (o) { var f = e.storageGet(c + o); return f == null ? null : f; }, setItem: function (o, f) { return e.storageSet(c + o, f == null ? null : String(f)); }, removeItem: function (o) { return e.storageSet(c + o, null); }, clear: function () { return e.storageClear && e.storageClear(c); } }); }, r = "__cookie__", a = [], n = {};
    n.Response = { success: function (c, o) { return ({ code: 0, data: c === void 0 ? null : c, data2: o === void 0 ? null : o }); }, error: function (c) { return ({ code: 1, data: c == null ? "" : String(c) }); } }, n.fetch = function (o, f) {
        return __awaiter(this, void 0, void 0, function () {
            var E, te, U, R, N, te, P, J, te_2, ie, ce, te_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        f = f || {};
                        E = String(o);
                        if (f.queries) {
                            te = Object.entries(f.queries).map(function (_b) {
                                var _c = __read(_b, 2), ie = _c[0], m = _c[1];
                                return encodeURIComponent(ie) + "=" + encodeURIComponent(m);
                            }).join("&");
                            te && (E += (E.includes("?") ? "&" : "?") + te);
                        }
                        U = Object.assign({ "User-Agent": qt }, tn(f.headers)), R = e.storageGet(r);
                        R && !Object.keys(U).some(function (te) { return te.toLowerCase() === "cookie"; }) && (U.Cookie = R);
                        N = f.body;
                        if (N != null && typeof N == "object") {
                            te = Object.keys(U).find(function (ie) { return ie.toLowerCase() === "content-type"; });
                            te && /json/i.test(U[te]) ? N = JSON.stringify(N) : (N = Object.entries(N).map(function (_b) {
                                var _c = __read(_b, 2), ie = _c[0], m = _c[1];
                                return encodeURIComponent(ie) + "=" + encodeURIComponent(m);
                            }).join("&"), te || (U["Content-Type"] = "application/x-www-form-urlencoded"));
                        }
                        P = { url: E, method: (f.method || (N != null ? "POST" : "GET")).toUpperCase(), headers: U, body: N, timeout: f.timeout }, J = P.method === "GET" && N == null ? E + "\n" + JSON.stringify(U) : null;
                        if (J) {
                            te_2 = Date.now(), ie = a.find(function (m) { return m.k === J && te_2 - m.t < 6e4; });
                            if (ie)
                                return [2, new su(ie.raw, P)];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, e.request(P)];
                    case 2:
                        ce = _b.sent();
                        return [3, 4];
                    case 3:
                        te_1 = _b.sent();
                        ce = { status: 0, url: E, headers: {}, text: "", error: String(te_1 && te_1.message || te_1) };
                        return [3, 4];
                    case 4: return [2, (J && ce && ce.status === 200 && String(ce.text == null ? "" : ce.text).length < 3e6 && (a.push({ k: J, t: Date.now(), raw: ce }), a.length > 6 && a.shift()), new su(ce, P))];
                }
            });
        });
    }, n.Http = { get: function (c) { return v0(n, "GET", c); }, post: function (c) { return v0(n, "POST", c); } }, n.Html = { parse: function (c, o) { return iu(c, o || ""); }, clean: function (c, o) { return m0(c, o); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.localConfig = { getItem: function (c) { return e.config(c); } }, n.localCookie = { setCookie: function (c) { e.storageSet(r, String(c).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, n.sleep = function (c) { return new Promise(function (o) { return typeof setTimeout == "function" ? setTimeout(o, Math.min(Number(c) || 0, 1e4)) : o(); }); };
    var i = function () {
        var c = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            c[_i] = arguments[_i];
        }
        try {
            e.log && e.log(c.map(function (o) { return typeof o == "string" ? o : JSON.stringify(o); }).join(" "));
        }
        catch (o) { }
    };
    return n.Log = { log: i }, n.console = { log: i, error: i, warn: i, info: i }, n.Console = n.console, n.log = i, n.UserAgent = { system: function () { return qt; }, chrome: function () { return qt; }, android: function () { return qt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = Le, n.Element = Ze, n.__meta = t, n;
}
function v0(e, t, u) { var r = { method: t, url: u, headers: {}, body: void 0, queries: void 0 }, a = { headers: function (n) { return Object.assign(r.headers, n || {}), a; }, header: function (n, i) { return r.headers[n] = i, a; }, params: function (n) { return r.queries = n, a; }, queries: function (n) { return r.queries = n, a; }, body: function (n) { return r.body = n, a; }, html: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).html(n)];
            }
        }); });
    }, string: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(n)];
            }
        }); });
    }, text: function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(n)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return a; }
function Je(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return ru(e, t);
}
catch (u) {
    return t;
} }
var re = function (e) { return e == null ? "" : String(e); }, un = function (e) { return e.filter(function (t, u) { return t && e.indexOf(t) === u; }); }, cu = (function () {
    function class_1(t) {
        var u = t.meta, r = t.scripts, a = t.host;
        this.meta = u, this.host = a, this.env = t.env || y0(a, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return re(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "origins", {
        get: function () { if (this._orig)
            return this._orig; var t = (this.meta.config || {}).DOMAIN || {}, u = function (n) { var i = /^https?:\/\/(?:www\.|m\.)?([^/?#:]+)/i.exec(re(n).trim()); return i ? i[1].toLowerCase() : ""; }, r = {}; [this.meta.source, t.default].concat(t.values || []).map(u).filter(Boolean).forEach(function (n) { r[n] = 1; }); var a = /^https?:\/\/[^/?#]+/i.exec(re(this.meta.source)); return this._orig = { key: u, hosts: r, def: a ? a[0] : "" }, this._orig; },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.canon = function (t) { t = re(t); var u = this.origins; if (!u.def)
        return t; var r = /^https?:\/\/[^/?#]+/i.exec(t); if (!r)
        return t; var a = u.key(r[0]); return u.hosts[a] === 1 || a === u.key(this.base) ? u.def + t.slice(r[0].length) : t; };
    class_1.prototype.decanon = function (t) { t = re(t); var u = this.origins; if (!u.def)
        return t; var r = (/^https?:\/\/[^/?#]+/i.exec(this.base) || [])[0]; return !r || r === u.def ? t : t.slice(0, u.def.length) === u.def ? r + t.slice(u.def.length) : t; };
    class_1.prototype.has = function (t) { return !!this.scripts[t]; };
    class_1.prototype.run = function (t) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, n, i;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        r = this.scripts[t];
                        if (!r)
                            throw new Error("script " + t + " missing");
                        a = function (c) { var o = _this.host.config(c); return o == null ? (_this.meta.configDefaults || {})[c] : o; };
                        return [4, r(this.env, a)];
                    case 1:
                        n = _b.sent();
                        if (typeof n != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, n.apply(void 0, __spreadArray([], __read(u.map(re)), false))];
                    case 2:
                        i = _b.sent();
                        if (!i)
                            throw new Error(t + ": empty result");
                        if (i.code !== 0)
                            throw new Error(t + ": " + re(i.data || "error"));
                        return [2, i];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return re(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _b, u_1, u_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    t = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (t = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!t.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    t = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, u, r) {
        return __awaiter(this, void 0, void 0, function () {
            var a, n, i, c, o;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = t + "|" + u;
                        r = Math.max(1, r | 0);
                        n = r === 1 ? "" : this.tokens[a + "|" + r];
                        if (r > 1 && n == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, u, n)];
                    case 1:
                        i = _b.sent(), c = re(i.data2);
                        c && (this.tokens[a + "|" + (r + 1)] = c);
                        o = (i.data || []).filter(Boolean).map(function (f) { return ({ name: re(f.name).trim(), link: _this.canon(Je(f.host || _this.base + "/", f.link)), cover: Je(f.host || _this.base + "/", f.cover), description: re(f.description), tag: re(f.tag) }); }).filter(function (f) { return f.name && f.link; });
                        return [2, { items: o, hasNext: !!c && o.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), re(u[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), re(r.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    t = this.decanon(t);
                    return [4, this.run("detail", t)];
                case 1:
                    u = (_b.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (a) { return typeof a == "string" ? a : a && a.title; }).filter(Boolean);
                    return [2, { name: re(u.name).trim(), cover: Je(u.host || this.base + "/", u.cover), author: re(u.author).trim(), description: S0(re(u.description)), detail: S0(re(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: un(r.map(function (a) { return String(a).trim(); })), url: this.canon(t), format: re(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, a, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        t = this.decanon(t);
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        r = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        a = r_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", re(a))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
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
                        return [4, this.run("toc", t)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, a) { return ({ name: re(r.name).trim() || "#" + (a + 1), url: _this.canon(Je(r.host || _this.base + "/", r.url)), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c, r, a;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        t = this.decanon(t);
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [t];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof u == "string" && (u = u.split(/[\n,]+/));
                        r = function (n) { return !n || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(n)); }, a = function (n) { if (typeof n == "string")
                            return n; if (!n)
                            return ""; var i = n.link || n.url || n.data, c = Array.isArray(n.fallback) ? n.fallback.filter(Boolean) : []; return r(i) && c.length ? c[0] : i; };
                        return [2, (u || []).map(function (n) { return Je(_this.base + "/", a(n)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    t = this.decanon(t);
                    return [4, this.run("chap", t)];
                case 1:
                    u = _b.sent();
                    return [2, { html: re(u.data), title: re(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, r, u_3, u_3_1, a, n, i, i_2, i_2_1, c, o, n_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        t = this.decanon(t);
                        u = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        a = (_d.sent()).data;
                        Array.isArray(a) && a.length && (u = a.map(function (n) { return typeof n == "string" ? { title: "Server", data: n } : { title: re(n.title || n.name || "Server"), data: re(n.data || n.url || n.link) }; }));
                        _d.label = 2;
                    case 2:
                        r = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        a = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", a.data)];
                    case 6:
                        n = (_d.sent()).data || {}, i = Array.isArray(n) ? n : [n];
                        try {
                            for (i_2 = (e_24 = void 0, __values(i)), i_2_1 = i_2.next(); !i_2_1.done; i_2_1 = i_2.next()) {
                                c = i_2_1.value;
                                if (!c || !c.data || c.type === "webview")
                                    continue;
                                o = Je(c.host || this.base + "/", c.data);
                                r.push({ url: o, quality: a.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (f) { return ({ file: Je(_this.base + "/", f.data || f.file), label: re(f.label || f.language || "Sub") }); }), mimeType: re(c.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (i_2_1 && !i_2_1.done && (_c = i_2.return)) _c.call(i_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        n_2 = _d.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + n_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
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
function S0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var Be = { id: "metruyenchu", name: "MeTruyenChu", source: "https://metruyenchu.com.vn", type: "novel", locale: "vi", nsfw: !1, version: 17, config: {}, configDefaults: {}, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.metruyenchu", lnIcon: "", lnVersion: "1.4.17" }, A0 = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae() {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        return [2, n.success([{ title: "Truyện Hot", input: "truyen-hot", script: "homecontent.js" }, { title: "Mới cập nhật", input: "/", script: "homecontent.js" }, { title: "Hoàn thành", input: "truyen-full", script: "homecontent.js" }])];
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, homecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae(l, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var y, g, p, h, b, d, v, T, A, D, G, _, C, V, M, z, q, K; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                y = s ? parseInt(s) : 1, g = l === "/", p = g ? m + "/" : m + "/danh-sach/" + l + "?page=" + y;
                                                                return [4, de(p)];
                                                            case 1:
                                                                h = _b.sent();
                                                                if (!h || !h.ok)
                                                                    return [2, n.error("Không tải được trang " + p)];
                                                                b = h.html();
                                                                if (!b)
                                                                    return [2, n.success([], null)];
                                                                if (g) {
                                                                    for (d = b.select("div.itemupdate"), v = [], T = 0; T < d.size(); T++) {
                                                                        A = d.get(T), D = S(A, ".iname h3 a[href]");
                                                                        if (D) {
                                                                            G = D.attr("href");
                                                                            if (G) {
                                                                                G.charAt(0) !== "/" && (G = "/" + G);
                                                                                _ = D.text().trim();
                                                                                if (_) {
                                                                                    C = "", V = S(A, "img[data-original], img[data-src], img[data-lazy], img[src]");
                                                                                    if (V && (C = V.attr("data-original") || V.attr("data-src") || V.attr("data-lazy") || V.attr("src") || ""), !C) {
                                                                                        M = S(A, "[data-thumb], [data-cover], [data-img], [style*='background-image']");
                                                                                        if (M && (C = M.attr("data-thumb") || M.attr("data-cover") || M.attr("data-img") || "", !C)) {
                                                                                            z = Ue.exec(M.attr("style") || "");
                                                                                            z && (C = z[1]);
                                                                                        }
                                                                                    }
                                                                                    C && C.charAt(0) === 47 && (C = m + C), v.push({ name: _, link: G, host: X, cover: C, description: "" });
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    return [2, !v || v.length === 0 ? n.success([], null) : n.success(v, null)];
                                                                }
                                                                q = Se(b);
                                                                if (!q || q.length === 0)
                                                                    return [2, n.success([], null)];
                                                                K = Ae(b, y);
                                                                return [2, n.success(q, K)];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, genre: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae() {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        return [2, n.success([{ title: "Tiên Hiệp", input: "tien-hiep", script: "genrecontent.js" }, { title: "Kiếm Hiệp", input: "kiem-hiep", script: "genrecontent.js" }, { title: "Ngôn Tình", input: "ngon-tinh", script: "genrecontent.js" }, { title: "Đam Mỹ", input: "dam-my", script: "genrecontent.js" }, { title: "Bách Hợp", input: "bach-hop", script: "genrecontent.js" }, { title: "Huyền Huyễn", input: "huyen-huyen", script: "genrecontent.js" }, { title: "Đô Thị", input: "do-thi", script: "genrecontent.js" }, { title: "Dị Giới", input: "di-gioi", script: "genrecontent.js" }, { title: "Khoa Huyễn", input: "khoa-huyen", script: "genrecontent.js" }, { title: "Hệ Thống", input: "he-thong", script: "genrecontent.js" }, { title: "Xuyên Không", input: "xuyen-khong", script: "genrecontent.js" }, { title: "Xuyên Nhanh", input: "xuyen-nhanh", script: "genrecontent.js" }, { title: "Trọng Sinh", input: "trong-sinh", script: "genrecontent.js" }, { title: "Võng Du", input: "vong-du", script: "genrecontent.js" }, { title: "Lịch Sử", input: "lich-su", script: "genrecontent.js" }, { title: "Quan Trường", input: "quan-truong", script: "genrecontent.js" }, { title: "Quân Sự", input: "quan-su", script: "genrecontent.js" }, { title: "Linh Dị", input: "linh-di", script: "genrecontent.js" }, { title: "Trinh Thám", input: "trinh-tham", script: "genrecontent.js" }, { title: "Dị Năng", input: "di-nang", script: "genrecontent.js" }, { title: "Ngược", input: "nguoc", script: "genrecontent.js" }, { title: "Sủng", input: "sung", script: "genrecontent.js" }, { title: "Cung Đấu", input: "cung-dau", script: "genrecontent.js" }, { title: "Nữ Cường", input: "nu-cuong", script: "genrecontent.js" }, { title: "Gia Đấu", input: "gia-dau", script: "genrecontent.js" }, { title: "Đông Phương", input: "dong-phuong", script: "genrecontent.js" }, { title: "Điền Văn", input: "dien-van", script: "genrecontent.js" }, { title: "Mạt Thế", input: "mat-the", script: "genrecontent.js" }, { title: "Truyện Teen", input: "truyen-teen", script: "genrecontent.js" }, { title: "Nữ Phụ", input: "nu-phu", script: "genrecontent.js" }, { title: "Light Novel", input: "light-novel", script: "genrecontent.js" }, { title: "Đoản Văn", input: "doan-van", script: "genrecontent.js" }, { title: "Hiện đại", input: "hien-dai", script: "genrecontent.js" }, { title: "Đồng Nhân", input: "dong-nhan", script: "genrecontent.js" }, { title: "Cổ Đại", input: "co-dai", script: "genrecontent.js" }, { title: "Góc Nhìn Nam", input: "goc-nhin-nam", script: "genrecontent.js" }, { title: "Dã Sử", input: "da-su", script: "genrecontent.js" }, { title: "Sắc", input: "sac", script: "genrecontent.js" }, { title: "Khác", input: "khac", script: "genrecontent.js" }])];
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, genrecontent: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae(l, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var y, g, p, h, b, d; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                y = s ? parseInt(s) : 1, g = m + "/the-loai/" + l + "?page=" + y;
                                                                return [4, de(g)];
                                                            case 1:
                                                                p = _b.sent();
                                                                if (!p || !p.ok)
                                                                    return [2, n.error("Không tải được thể loại: " + l)];
                                                                h = p.html();
                                                                if (!h)
                                                                    return [2, n.success([], null)];
                                                                b = Se(h);
                                                                if (!b || b.length === 0)
                                                                    return [2, n.success([], null)];
                                                                d = Ae(h, y);
                                                                return [2, n.success(b, d)];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(g) { return (g.indexOf("http") === 0 ? g : m + g).replace(/\/$/, ""); }
                                                function S(g, p) { var h = g.select(p); return h.size() > 0 ? h.get(0) : null; }
                                                function de(g) {
                                                    return __awaiter(this, void 0, void 0, function () { var p, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(g, Q)];
                                                            case 1:
                                                                p = _d.sent();
                                                                _b = p;
                                                                if (!_b) return [3, 4];
                                                                _c = !p.ok && !(p.status >= 400 && p.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(g, Q)];
                                                            case 2:
                                                                _c = (p = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, p);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(g) { var p = [], h = {}, b = g.select("div.item"); if (b.size() > 0)
                                                    for (var d = 0; d < b.size(); d++) {
                                                        var v = b.get(d), T = S(v, "h3 a[href]");
                                                        if (T) {
                                                            var A = T.attr("href");
                                                            if (!(!A || A === "/" || ue.test(A)) && !h[A]) {
                                                                h[A] = !0;
                                                                var D = T.text().trim();
                                                                if (D) {
                                                                    var G = S(v, "img"), _ = G && (G.attr("data-original") || G.attr("data-src") || G.attr("src")) || "";
                                                                    _ && _.charAt(0) === 47 && (_ = m + _);
                                                                    var C = S(v, "a[href*='/tac-gia/']"), V = C ? C.text().trim() : "", M = A.indexOf("http") === 0 ? A.replace(m, "") : A;
                                                                    if (p.push({ name: D, link: M, host: X, cover: _, description: V }), p.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (p.length === 0) {
                                                    for (var z = {}, q = g.select("a[href]:has(img)"), K = 0; K < q.size(); K++) {
                                                        var I = q.get(K), k = I.attr("href") || "";
                                                        if (k) {
                                                            var j = k.indexOf("http") === 0 ? k.replace(m, "") : k;
                                                            if (!z[j]) {
                                                                var H = S(I, "img");
                                                                if (H) {
                                                                    var B = H.attr("data-original") || H.attr("data-src") || H.attr("src") || "";
                                                                    B && B.charAt(0) === 47 && (B = m + B), B && (z[j] = B);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var w = g.select("h3 a[href]"), F = 0; F < w.size(); F++) {
                                                        var W = w.get(F), Y = W.attr("href");
                                                        if (!(!Y || Y === "/" || ue.test(Y)) && !h[Y]) {
                                                            h[Y] = !0;
                                                            var oe = W.text().trim();
                                                            if (oe) {
                                                                var Ge = Y.indexOf("http") === 0 ? Y.replace(m, "") : Y, He = z[Ge] || "";
                                                                if (p.push({ name: oe, link: Ge, host: X, cover: He, description: "" }), p.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return p; }
                                                function Ae(g, p) { var h = S(g, "a[href*='page=" + (p + 1) + "']"); if (h)
                                                    return String(p + 1); var b = S(g, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (b || (b = S(g, "[class*='pagination'], [class*='pager']")), !b)
                                                    return null; for (var d = b.select("a, span, li, button"), v = 0, T = !1, A = 0; A < d.size(); A++) {
                                                    var D = parseInt(d.get(A).text().trim(), 10);
                                                    D > 0 && (D > v && (v = D), D === p && (T = !0));
                                                } return !T && p > 1 ? null : v > p || T && he.test(b.text()) ? String(p + 1) : null; }
                                                function Oe(g) {
                                                    return g ? g.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (p) { return pe[p] || p; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function y(g) {
                                                    return __awaiter(this, void 0, void 0, function () { var p, h, b, d, v, T, A, D, G, _, C, V, M, z, q, K, I, k, j, H, B, w, F, W, Y, oe, Ge, He, et, lu, w0, pt, or, T0, lr, fr; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                p = ye(g);
                                                                return [4, de(p)];
                                                            case 1:
                                                                h = _b.sent();
                                                                if (!h || !h.ok)
                                                                    return [2, n.error("Không tải được trang truyện")];
                                                                b = h.html();
                                                                if (!b)
                                                                    return [2, n.error("Không tải được trang truyện")];
                                                                d = S(b, "h1.title-truyen, h1.book-title, h1.story-name, h1.truyen-title, h1.story-title, .book-detail h1, .title h1, .info-book h1, .truyen-info h1, h1"), v = d ? d.text().trim() : "", T = S(b, ".book-info-pic img, .book-img img, .cover-truyen img, .book-cover img, .img-truyen img, .thumb img, .bia-truyen img, .poster img, .info-img img, img.img-responsive, img.lazyload[data-original], img.lazyload[data-src]"), A = "";
                                                                if (T && (A = T.attr("data-original") || T.attr("data-src") || T.attr("src") || ""), !A) {
                                                                    D = S(b, "img[src]:not([src*='logo']):not([src*='icon']):not([src*='banner']):not([src*='ads'])");
                                                                    D && (A = D.attr("src") || "");
                                                                }
                                                                A && A.charAt(0) === 47 && (A = m + A);
                                                                G = S(b, "a[href*='/tac-gia/'], .author a, .book-author a, .tac-gia a, .info-author a, .writer a"), _ = G ? G.text().trim() : "", C = "";
                                                                if (G) {
                                                                    V = G.attr("href") || "", M = ae.exec(V);
                                                                    M && (C = M[1]);
                                                                }
                                                                if (!_) {
                                                                    z = S(b, ".author, .tac-gia, .book-author, .info-author");
                                                                    z && (_ = z.text().replace(De, "").trim());
                                                                }
                                                                for (q = S(b, "[itemprop='description'], .desc-text, .book-desc, .summary-content, .description, #story-detail-description, .truyen-tomtat, .tom-tat, .mo-ta, .story-synopsis, .synopsis, .info-desc, .box-desc, .detail-desc"), K = q ? Oe(q.html()) : "", I = S(b, ".book-detail, .info-book, .book-info, .story-info, .truyen-info, .detail-info, .info-story, .book-container, .truyen-detail"), k = I ? I.select("a[href*='/the-loai/']") : b.select("a[href*='/the-loai/']"), j = [], H = "", B = {}, w = Math.min(k.size(), I ? 20 : 8), F = 0; F < w; F++) {
                                                                    W = k.get(F), Y = W.text().trim(), oe = W.attr("href") || "", Ge = l.exec(oe), He = Ge ? Ge[1] : "";
                                                                    Y && He && !B[He] && (B[He] = !0, j.push({ title: Y, input: He, script: "genrecontent.js" }), H += (H ? ", " : "") + Y);
                                                                }
                                                                et = !0, lu = S(b, ".label-status, .trang-thai, .book-status, .status-label, .badge-status, .status-full, .badge-full, .label-full, .label-hoan, .complete, .finished, .truyen-full");
                                                                if (lu) {
                                                                    w0 = lu.attr("class") || "";
                                                                    (Ie.test(w0) || ke.test(lu.text())) && (et = !1);
                                                                }
                                                                et && ke.test(v) && (et = !1);
                                                                pt = H ? "Thể loại: " + H : "", or = S(b, ".chapter-count, .so-chuong, .total-chapter, .num-chapter, [class*='chapter-count'], [class*='so-chuong']");
                                                                if (or)
                                                                    pt += (pt ? " | " : "") + "Số chương: " + or.text().trim();
                                                                else if (I) {
                                                                    T0 = I.text(), lr = s.exec(T0);
                                                                    lr && (pt += (pt ? " | " : "") + "Số chương: " + lr[1]);
                                                                }
                                                                fr = [{ title: "Truyện tương tự", input: p, script: "suggest.js" }];
                                                                return [2, (C && fr.push({ title: "Truyện cùng tác giả", input: "author:" + C, script: "suggest.js" }), n.success({ name: v || "Đang cập nhật", cover: A, host: X, author: _, description: K, detail: pt, ongoing: et, genres: j, suggests: fr }))];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe, ae, l, s;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    ae = /\/tac-gia\/([^\/\?]+)/, l = /\/the-loai\/([^\/\?]+)/, s = /Số chương\s*[:\uFF1A]?\s*(\d[\d.]+)/;
                                                    return [2, typeof y == "function" ? y : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae(l, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var y, g, p, h, b, d; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                y = s ? parseInt(s) : 1, g = m + "/tim-kiem?keyword=" + encodeURIComponent(l) + "&page=" + y;
                                                                return [4, de(g)];
                                                            case 1:
                                                                p = _b.sent();
                                                                if (!p || !p.ok)
                                                                    return [2, n.error("Không tải được kết quả tìm kiếm")];
                                                                h = p.html();
                                                                if (!h)
                                                                    return [2, n.error("Không tải được kết quả tìm kiếm")];
                                                                b = Se(h);
                                                                if (!b || b.length === 0)
                                                                    return [2, n.success([], null)];
                                                                d = Ae(h, y);
                                                                return [2, n.success(b, d)];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(p) { return (p.indexOf("http") === 0 ? p : m + p).replace(/\/$/, ""); }
                                                function S(p, h) { var b = p.select(h); return b.size() > 0 ? b.get(0) : null; }
                                                function de(p) {
                                                    return __awaiter(this, void 0, void 0, function () { var h, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(p, Q)];
                                                            case 1:
                                                                h = _d.sent();
                                                                _b = h;
                                                                if (!_b) return [3, 4];
                                                                _c = !h.ok && !(h.status >= 400 && h.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(p, Q)];
                                                            case 2:
                                                                _c = (h = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, h);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(p) { var h = [], b = {}, d = p.select("div.item"); if (d.size() > 0)
                                                    for (var v = 0; v < d.size(); v++) {
                                                        var T = d.get(v), A = S(T, "h3 a[href]");
                                                        if (A) {
                                                            var D = A.attr("href");
                                                            if (!(!D || D === "/" || ue.test(D)) && !b[D]) {
                                                                b[D] = !0;
                                                                var G = A.text().trim();
                                                                if (G) {
                                                                    var _ = S(T, "img"), C = _ && (_.attr("data-original") || _.attr("data-src") || _.attr("src")) || "";
                                                                    C && C.charAt(0) === 47 && (C = m + C);
                                                                    var V = S(T, "a[href*='/tac-gia/']"), M = V ? V.text().trim() : "", z = D.indexOf("http") === 0 ? D.replace(m, "") : D;
                                                                    if (h.push({ name: G, link: z, host: X, cover: C, description: M }), h.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (h.length === 0) {
                                                    for (var q = {}, K = p.select("a[href]:has(img)"), I = 0; I < K.size(); I++) {
                                                        var k = K.get(I), j = k.attr("href") || "";
                                                        if (j) {
                                                            var H = j.indexOf("http") === 0 ? j.replace(m, "") : j;
                                                            if (!q[H]) {
                                                                var B = S(k, "img");
                                                                if (B) {
                                                                    var w = B.attr("data-original") || B.attr("data-src") || B.attr("src") || "";
                                                                    w && w.charAt(0) === 47 && (w = m + w), w && (q[H] = w);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var F = p.select("h3 a[href]"), W = 0; W < F.size(); W++) {
                                                        var Y = F.get(W), oe = Y.attr("href");
                                                        if (!(!oe || oe === "/" || ue.test(oe)) && !b[oe]) {
                                                            b[oe] = !0;
                                                            var Ge = Y.text().trim();
                                                            if (Ge) {
                                                                var He = oe.indexOf("http") === 0 ? oe.replace(m, "") : oe, et = q[He] || "";
                                                                if (h.push({ name: Ge, link: He, host: X, cover: et, description: "" }), h.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return h; }
                                                function Ae(p, h) { var b = S(p, "a[href*='page=" + (h + 1) + "']"); if (b)
                                                    return String(h + 1); var d = S(p, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (d || (d = S(p, "[class*='pagination'], [class*='pager']")), !d)
                                                    return null; for (var v = d.select("a, span, li, button"), T = 0, A = !1, D = 0; D < v.size(); D++) {
                                                    var G = parseInt(v.get(D).text().trim(), 10);
                                                    G > 0 && (G > T && (T = G), G === h && (A = !0));
                                                } return !A && h > 1 ? null : T > h || A && he.test(d.text()) ? String(h + 1) : null; }
                                                function Oe(p) {
                                                    return p ? p.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (h) { return pe[h] || h; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function s(p) { return p.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#(\d+);/g, function (h, b) { return String.fromCharCode(parseInt(b, 10)); }); }
                                                function y(p, h, b, d) { var v; for (ae.lastIndex = 0; (v = ae.exec(p)) !== null;) {
                                                    var T = v[1];
                                                    if (!(h && T.indexOf("/" + h + "/") === -1) && !b[T]) {
                                                        var A = s(v[2].trim());
                                                        A && (b[T] = !0, d.push({ name: A, url: T.charCodeAt(0) !== 47 ? T : m + T, host: X }));
                                                    }
                                                } }
                                                function g(p) {
                                                    return __awaiter(this, void 0, void 0, function () { var h, b, d, v, T, A, D, G, _, C, V, M, z, q, K, I, k, j, H, B, w, F; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                h = ye(p);
                                                                return [4, de(h)];
                                                            case 1:
                                                                b = _b.sent();
                                                                if (!b || !b.ok)
                                                                    return [2, n.error("Không tải được mục lục")];
                                                                d = b.html();
                                                                if (!d)
                                                                    return [2, n.error("Không tải được mục lục")];
                                                                v = h.replace(m, "").replace(/^\//, "").replace(/\/$/, ""), T = [], A = {}, D = d.select("#chapter-list a[href], .list-chapter a[href]");
                                                                D.size() === 0 && (D = d.select("a[href*='/chuong-']"));
                                                                for (G = 0; G < D.size(); G++) {
                                                                    _ = D.get(G), C = _.attr("href");
                                                                    if (!(!C || Re.test(C)) && !(v && C.indexOf("/" + v + "/") === -1) && !A[C]) {
                                                                        V = C.charCodeAt(0) !== 47 ? C : m + C, M = _.text().trim();
                                                                        M || (M = _.attr("title") || ""), M && (A[C] = !0, T.push({ name: M, url: V, host: X }));
                                                                    }
                                                                }
                                                                for (z = null, q = 1, K = d.select(".paging a[onclick]"), I = 0; I < K.size(); I++) {
                                                                    k = K.get(I).attr("onclick");
                                                                    if (k) {
                                                                        j = l.exec(k);
                                                                        if (j) {
                                                                            z || (z = j[1]);
                                                                            H = parseInt(j[2]);
                                                                            H > q && (q = H);
                                                                        }
                                                                    }
                                                                }
                                                                if (!(z && q > 1)) return [3, 5];
                                                                B = 2;
                                                                _b.label = 2;
                                                            case 2:
                                                                if (!(B <= q && B <= 50)) return [3, 5];
                                                                return [4, de(m + "/get/listchap/" + z + "?page=" + B)];
                                                            case 3:
                                                                w = _b.sent();
                                                                if (!w || !w.ok)
                                                                    return [3, 5];
                                                                try {
                                                                    F = w.json();
                                                                }
                                                                catch (W) {
                                                                    return [3, 5];
                                                                }
                                                                if (!F || !F.data)
                                                                    return [3, 5];
                                                                y(F.data, v, A, T);
                                                                _b.label = 4;
                                                            case 4:
                                                                B++;
                                                                return [3, 2];
                                                            case 5: return [2, T.length === 0 ? n.error("Không tìm thấy danh sách chương") : n.success(T)];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe, ae, l;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    ae = /<a\s+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/g, l = /page\((\d+),(\d+)\)/;
                                                    return [2, typeof g == "function" ? g : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, y, g, p, h; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                s = ye(l);
                                                                return [4, de(s)];
                                                            case 1:
                                                                y = _b.sent();
                                                                if (!y || !y.ok)
                                                                    return [2, n.error("Không tải được nội dung chương")];
                                                                g = y.html();
                                                                if (!g)
                                                                    return [2, n.error("Không tải được nội dung chương")];
                                                                p = S(g, ".truyen, #vungdoc");
                                                                if (!p)
                                                                    return [2, n.error("Không tìm thấy nội dung chương")];
                                                                p.select("script, style, a, button, ins, noscript, iframe").remove();
                                                                h = p.html();
                                                                return [2, h ? n.success(h) : n.error("Nội dung chương trống")];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, suggest: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, r, a, n, i, c, o, f, E, U, R, N, P, J, ce, te, ie) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4, (function () {
                                            return __awaiter(this, void 0, void 0, function () {
                                                function ye(l) { return (l.indexOf("http") === 0 ? l : m + l).replace(/\/$/, ""); }
                                                function S(l, s) { var y = l.select(s); return y.size() > 0 ? y.get(0) : null; }
                                                function de(l) {
                                                    return __awaiter(this, void 0, void 0, function () { var s, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0: return [4, u(l, Q)];
                                                            case 1:
                                                                s = _d.sent();
                                                                _b = s;
                                                                if (!_b) return [3, 4];
                                                                _c = !s.ok && !(s.status >= 400 && s.status < 500);
                                                                if (!_c) return [3, 3];
                                                                return [4, u(l, Q)];
                                                            case 2:
                                                                _c = (s = _d.sent());
                                                                _d.label = 3;
                                                            case 3:
                                                                _b = (_c, s);
                                                                _d.label = 4;
                                                            case 4: return [2, _b];
                                                        }
                                                    }); });
                                                }
                                                function Se(l) { var s = [], y = {}, g = l.select("div.item"); if (g.size() > 0)
                                                    for (var p = 0; p < g.size(); p++) {
                                                        var h = g.get(p), b = S(h, "h3 a[href]");
                                                        if (b) {
                                                            var d = b.attr("href");
                                                            if (!(!d || d === "/" || ue.test(d)) && !y[d]) {
                                                                y[d] = !0;
                                                                var v = b.text().trim();
                                                                if (v) {
                                                                    var T = S(h, "img"), A = T && (T.attr("data-original") || T.attr("data-src") || T.attr("src")) || "";
                                                                    A && A.charAt(0) === 47 && (A = m + A);
                                                                    var D = S(h, "a[href*='/tac-gia/']"), G = D ? D.text().trim() : "", _ = d.indexOf("http") === 0 ? d.replace(m, "") : d;
                                                                    if (s.push({ name: v, link: _, host: X, cover: A, description: G }), s.length >= 30)
                                                                        break;
                                                                }
                                                            }
                                                        }
                                                    } if (s.length === 0) {
                                                    for (var C = {}, V = l.select("a[href]:has(img)"), M = 0; M < V.size(); M++) {
                                                        var z = V.get(M), q = z.attr("href") || "";
                                                        if (q) {
                                                            var K = q.indexOf("http") === 0 ? q.replace(m, "") : q;
                                                            if (!C[K]) {
                                                                var I = S(z, "img");
                                                                if (I) {
                                                                    var k = I.attr("data-original") || I.attr("data-src") || I.attr("src") || "";
                                                                    k && k.charAt(0) === 47 && (k = m + k), k && (C[K] = k);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    for (var j = l.select("h3 a[href]"), H = 0; H < j.size(); H++) {
                                                        var B = j.get(H), w = B.attr("href");
                                                        if (!(!w || w === "/" || ue.test(w)) && !y[w]) {
                                                            y[w] = !0;
                                                            var F = B.text().trim();
                                                            if (F) {
                                                                var W = w.indexOf("http") === 0 ? w.replace(m, "") : w, Y = C[W] || "";
                                                                if (s.push({ name: F, link: W, host: X, cover: Y, description: "" }), s.length >= 30)
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } return s; }
                                                function Ae(l, s) { var y = S(l, "a[href*='page=" + (s + 1) + "']"); if (y)
                                                    return String(s + 1); var g = S(l, ".pagination, .pager, .page-nav, .phan-trang, ul.pager, nav.pagination"); if (g || (g = S(l, "[class*='pagination'], [class*='pager']")), !g)
                                                    return null; for (var p = g.select("a, span, li, button"), h = 0, b = !1, d = 0; d < p.size(); d++) {
                                                    var v = parseInt(p.get(d).text().trim(), 10);
                                                    v > 0 && (v > h && (h = v), v === s && (b = !0));
                                                } return !b && s > 1 ? null : h > s || b && he.test(g.text()) ? String(s + 1) : null; }
                                                function Oe(l) {
                                                    return l ? l.replace(/<\/p>/gi, "\n\n").replace(/<br[^>]*>(\s*<\/br>)?/gi, "\n\n").replace(/<p[^>]*>|<\/div>|<\/section>|<\/article>/gi, "\n").replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, function (s) { return pe[s] || s; }).replace(/[ \t]+/g, " ").replace(/\n[ \t]+/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";
                                                }
                                                function ae(l, s) {
                                                    return __awaiter(this, void 0, void 0, function () { var y, g, p, v, T, h, b, d, v, T, A, D, G, _, C, V, M, z, q, K, I, k, j, H, B, w, F, W, Y, oe; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!(l.indexOf("author:") === 0)) return [3, 2];
                                                                y = l.substring(7), g = s ? parseInt(s) : 1, p = m + "/tac-gia/" + y + "?page=" + g;
                                                                return [4, de(p)];
                                                            case 1:
                                                                v = _b.sent();
                                                                if (!v || !v.ok)
                                                                    return [2, n.success([], null)];
                                                                T = v.html();
                                                                if (!T)
                                                                    return [2, n.success([], null)];
                                                                h = Se(T);
                                                                if (!h || h.length === 0)
                                                                    return [2, n.success([], null)];
                                                                b = Ae(T, g);
                                                                return [2, n.success(h, b)];
                                                            case 2:
                                                                d = ye(l);
                                                                return [4, de(d)];
                                                            case 3:
                                                                v = _b.sent();
                                                                if (!v || !v.ok)
                                                                    return [2, n.success([], null)];
                                                                T = v.html();
                                                                if (!T)
                                                                    return [2, n.success([], null)];
                                                                A = [], D = {}, G = S(T, ".truyen-tuong-tu, .related-story, .story-related, .same-author, .truyen-lien-quan, .truyen-de-xuat, .box-truyen-hot, #truyen-hot-moi, .truyen-hot-moi"), _ = G || T, C = d.replace(m, ""), V = _.select("h3 a[href], .story-name a[href], .book-title a[href]");
                                                                V.size() === 0 && (V = _.select("a[href]"));
                                                                for (M = {}, z = _.select("a[href]:has(img)"), q = 0; q < z.size(); q++) {
                                                                    K = z.get(q), I = K.attr("href") || "";
                                                                    if (I) {
                                                                        k = I.indexOf("http") === 0 ? I.replace(m, "") : I;
                                                                        if (!M[k]) {
                                                                            j = S(K, "img");
                                                                            if (j) {
                                                                                H = j.attr("data-original") || j.attr("data-src") || j.attr("src") || "";
                                                                                H && H.charAt(0) === 47 && (H = m + H), H && (M[k] = H);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                for (B = 0; B < V.size(); B++) {
                                                                    w = V.get(B), F = w.attr("href");
                                                                    if (!(!F || F === "/" || ue.test(F)) && !(F.indexOf("http") === 0 && F.indexOf(m) !== 0) && F.replace(m, "") !== C && !D[F]) {
                                                                        D[F] = !0;
                                                                        W = w.text().trim();
                                                                        if (!(!W || W.length < 3)) {
                                                                            Y = F.indexOf("http") === 0 ? F.replace(m, "") : F, oe = M[Y] || "";
                                                                            if (oe && oe.charAt(0) === 47 && (oe = m + oe), A.push({ name: W, link: Y, host: X, cover: oe }), A.length >= 20)
                                                                                break;
                                                                        }
                                                                    }
                                                                }
                                                                return [2, n.success(A, null)];
                                                        }
                                                    }); });
                                                }
                                                var m, X, ne, Q, De, ke, Ie, ue, Re, Ue, he, pe;
                                                return __generator(this, function (_b) {
                                                    m = "https://metruyenchu.com.vn", X = "https://metruyenchu.com.vn", ne = { "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.5", Referer: m + "/" }, Q = { headers: ne };
                                                    De = /Tác giả\s*[:\uff1a]?\s*/i, ke = /Hoàn|Full|DROP|Trọn Bộ/i, Ie = /status-full|badge-full|label-full|label-hoan/, ue = /\/the-loai|\/danh-sach|\/tac-gia|\/chuong-|javascript/, Re = /^#|javascript/, Ue = /url\(['"']?([^'"')\s]+)['"']?\)/;
                                                    he = /[❭›>]|sau|next/i;
                                                    pe = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&nbsp;": " ", "&#160;": " " };
                                                    return [2, typeof ae == "function" ? ae : void 0];
                                                });
                                            });
                                        })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    } };
function E0(e) { return new cu({ meta: Be, scripts: A0, host: e }); }
var rn = require("@libs/fetch").fetchApi, Lt = null;
try {
    Lt = require("@libs/storage");
}
catch (e) {
    Lt = null;
}
var sr = {}, ou = Lt && Lt.storage ? Lt.storage : { get: function (e) { return sr[e]; }, set: function (e, t) { sr[e] = t; }, delete: function (e) { delete sr[e]; } }, cr = (function () {
    function class_2() {
        var _this = this;
        this.id = Be.lnId, this.name = Be.name, this.icon = Be.lnIcon, this.site = Be.source, this.version = Be.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = E0({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (u.body = t.body);
                            return [4, rn(t.url, u)];
                        case 1:
                            r = _c.sent(), a = {};
                            try {
                                r.headers.forEach(function (n, i) { a[i] = n; });
                            }
                            catch (n) { }
                            _b = { status: r.status, url: r.url || t.url, headers: a };
                            return [4, r.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var u = ou.get("vb_" + t); return u == null ? null : String(u); }, storageSet: function (t, u) { u == null ? ou.delete && ou.delete("vb_" + t) : ou.set("vb_" + t, String(u)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, u)];
                case 1: return [2, (_b.sent()).items.map(function (a) { return ({ name: a.name, path: a.link, cover: a.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    r = _b.sent();
                    return [2, { path: t, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (a, n) { return ({ name: a.name, path: a.url, chapterNumber: n + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(t)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (t, u) { return /^https?:/i.test(t) ? t : Be.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), an = new cr;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
