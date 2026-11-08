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
var Z0 = Object.create;
var Wu = Object.defineProperty, K0 = Object.defineProperties, Y0 = Object.getOwnPropertyDescriptor, _0 = Object.getOwnPropertyDescriptors, ur = Object.getOwnPropertyNames, Pt = Object.getOwnPropertySymbols, er = Object.getPrototypeOf, Ft = Object.prototype.hasOwnProperty, tr = Object.prototype.propertyIsEnumerable;
var Ht = function (e, u, t) { return u in e ? Wu(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, cu = function (e, u) {
    var e_2, _a;
    for (var t in u || (u = {}))
        Ft.call(u, t) && Ht(e, t, u[t]);
    if (Pt)
        try {
            for (var _b = __values(Pt(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                tr.call(u, t) && Ht(e, t, u[t]);
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
}, Eu = function (e, u) { return K0(e, _0(u)); };
var rr = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, He = function (e, u) { for (var t in u)
    Wu(e, t, { get: u[t], enumerable: !0 }); }, Vt = function (e, u, t, r) {
    var e_3, _a;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (n) {
            !Ft.call(e, n) && n !== t && Wu(e, n, { get: function () { return u[n]; }, enumerable: !(r = Y0(u, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(ur(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return e;
};
var Tu = function (e, u, t) { return (t = e != null ? Z0(er(e)) : {}, Vt(u || !e || !e.__esModule ? Wu(t, "default", { value: e, enumerable: !0 }) : t, e)); }, nr = function (e) { return Vt(Wu({}, "__esModule", { value: !0 }), e); };
var Su = rr(function (ai, g0) { g0.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var In = {};
He(In, { default: function () { return qn; } });
module.exports = nr(In);
var se = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var ce = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Fe, ar = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Lu = (Fe = String.fromCodePoint) !== null && Fe !== void 0 ? Fe : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function Ve(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = ar.get(e)) !== null && u !== void 0 ? u : e; }
var W;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(W || (W = {}));
var ir = 32, xu;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(xu || (xu = {}));
function Ge(e) { return e >= W.ZERO && e <= W.NINE; }
function sr(e) { return e >= W.UPPER_A && e <= W.UPPER_F || e >= W.LOWER_A && e <= W.LOWER_F; }
function cr(e) { return e >= W.UPPER_A && e <= W.UPPER_Z || e >= W.LOWER_A && e <= W.LOWER_Z || Ge(e); }
function or(e) { return e === W.EQUALS || cr(e); }
var z;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(z || (z = {}));
var uu;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(uu || (uu = {}));
var Uu = (function () {
    function Uu(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = uu.Strict;
    }
    Uu.prototype.startEntity = function (u) { this.decodeMode = u, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Uu.prototype.write = function (u, t) { switch (this.state) {
        case z.EntityStart: return u.charCodeAt(t) === W.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(u, t));
        case z.NumericStart: return this.stateNumericStart(u, t);
        case z.NumericDecimal: return this.stateNumericDecimal(u, t);
        case z.NumericHex: return this.stateNumericHex(u, t);
        case z.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    Uu.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | ir) === W.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(u, t)); };
    Uu.prototype.addToNumericResult = function (u, t, r, n) { if (t !== r) {
        var a = r - t;
        this.result = this.result * Math.pow(n, a) + parseInt(u.substr(t, a), n), this.consumed += a;
    } };
    Uu.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ge(n) || sr(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    Uu.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (Ge(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    Uu.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === W.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === uu.Strict)
        return 0; return this.emitCodePoint(Ve(this.result), this.consumed), this.errors && (u !== W.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Uu.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, n = r[this.treeIndex], a = (n & xu.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var s = u.charCodeAt(t);
        if (this.treeIndex = fr(r, n, this.treeIndex + Math.max(1, a), s), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === uu.Attribute && (a === 0 || or(s)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], a = (n & xu.VALUE_LENGTH) >> 14, a !== 0) {
            if (s === W.SEMI)
                return this.emitNamedEntityData(this.treeIndex, a, this.consumed + this.excess);
            this.decodeMode !== uu.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Uu.prototype.emitNotTerminatedNamedEntity = function () { var u; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & xu.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    Uu.prototype.emitNamedEntityData = function (u, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[u] & ~xu.VALUE_LENGTH : n[u + 1], r), t === 3 && this.emitCodePoint(n[u + 2], r), r; };
    Uu.prototype.end = function () { var u; switch (this.state) {
        case z.NamedEntity: return this.result !== 0 && (this.decodeMode !== uu.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case z.NumericDecimal: return this.emitNumericEntity(0, 2);
        case z.NumericHex: return this.emitNumericEntity(0, 3);
        case z.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case z.EntityStart: return 0;
    } };
    return Uu;
}());
function Gt(e) { var u = "", t = new Uu(e, function (r) { return u += Lu(r); }); return function (n, a) { var s = 0, l = 0; for (; (l = n.indexOf("&", l)) >= 0;) {
    u += n.slice(s, l), t.startEntity(a);
    var p = t.write(n, l + 1);
    if (p < 0) {
        s = l + t.end();
        break;
    }
    s = l + p, l = p === 0 ? s + 1 : s;
} var d = u + n.slice(s); return u = "", d; }; }
function fr(e, u, t, r) { var n = (u & xu.BRANCH_LENGTH) >> 7, a = u & xu.JUMP_TABLE; if (n === 0)
    return a !== 0 && r === a ? t : -1; if (a) {
    var d = r - a;
    return d < 0 || d >= n ? -1 : e[t + d] - 1;
} var s = t, l = s + n - 1; for (; s <= l;) {
    var d = s + l >>> 1, p = e[d];
    if (p < r)
        s = d + 1;
    else if (p > r)
        l = d - 1;
    else
        return e[d + n];
} return -1; }
var Hn = Gt(se), Fn = Gt(ce);
var N;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(N || (N = {}));
var x;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(x || (x = {}));
function hu(e) { return e === N.Space || e === N.NewLine || e === N.Tab || e === N.FormFeed || e === N.CarriageReturn; }
function oe(e) { return e === N.Slash || e === N.Gt || hu(e); }
function lr(e) { return e >= N.LowerA && e <= N.LowerZ || e >= N.UpperA && e <= N.UpperZ; }
var tu;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(tu || (tu = {}));
var J = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Mu = (function () {
    function Mu(_a, r) {
        var _b = _a.xmlMode, u = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = x.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new Uu(u ? ce : se, function (n, a) { return _this.emitCodePoint(n, a); });
    }
    Mu.prototype.reset = function () { this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = x.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Mu.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    Mu.prototype.end = function () { this.running && this.finish(); };
    Mu.prototype.pause = function () { this.running = !1; };
    Mu.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Mu.prototype.stateText = function (u) { u === N.Lt || !this.decodeEntities && this.fastForwardTo(N.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = x.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Mu.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? oe(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = x.InTagName, this.stateInTagName(u); };
    Mu.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === N.Gt || hu(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === J.TitleEnd ? this.decodeEntities && u === N.Amp && this.startEntity() : this.fastForwardTo(N.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === N.Lt); };
    Mu.prototype.stateCDATASequence = function (u) { u === J.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === J.Cdata.length && (this.state = x.InCommentLike, this.currentSequence = J.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = x.InDeclaration, this.stateInDeclaration(u)); };
    Mu.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Mu.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === J.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = x.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Mu.prototype.isTagStartChar = function (u) { return this.xmlMode ? !oe(u) : lr(u); };
    Mu.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = x.SpecialStartSequence; };
    Mu.prototype.stateBeforeTagName = function (u) { if (u === N.ExclamationMark)
        this.state = x.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === N.Questionmark)
        this.state = x.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = x.InTagName : t === J.ScriptEnd[2] ? this.state = x.BeforeSpecialS : t === J.TitleEnd[2] ? this.state = x.BeforeSpecialT : this.state = x.InTagName;
    }
    else
        u === N.Slash ? this.state = x.BeforeClosingTagName : (this.state = x.Text, this.stateText(u)); };
    Mu.prototype.stateInTagName = function (u) { oe(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Mu.prototype.stateBeforeClosingTagName = function (u) { hu(u) || (u === N.Gt ? this.state = x.Text : (this.state = this.isTagStartChar(u) ? x.InClosingTagName : x.InSpecialComment, this.sectionStart = this.index)); };
    Mu.prototype.stateInClosingTagName = function (u) { (u === N.Gt || hu(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    Mu.prototype.stateAfterClosingTagName = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.state = x.Text, this.sectionStart = this.index + 1); };
    Mu.prototype.stateBeforeAttributeName = function (u) { u === N.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = x.InSpecialTag, this.sequenceIndex = 0) : this.state = x.Text, this.sectionStart = this.index + 1) : u === N.Slash ? this.state = x.InSelfClosingTag : hu(u) || (this.state = x.InAttributeName, this.sectionStart = this.index); };
    Mu.prototype.stateInSelfClosingTag = function (u) { u === N.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = x.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : hu(u) || (this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Mu.prototype.stateInAttributeName = function (u) { (u === N.Eq || oe(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = x.AfterAttributeName, this.stateAfterAttributeName(u)); };
    Mu.prototype.stateAfterAttributeName = function (u) { u === N.Eq ? this.state = x.BeforeAttributeValue : u === N.Slash || u === N.Gt ? (this.cbs.onattribend(tu.NoValue, this.sectionStart), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)) : hu(u) || (this.cbs.onattribend(tu.NoValue, this.sectionStart), this.state = x.InAttributeName, this.sectionStart = this.index); };
    Mu.prototype.stateBeforeAttributeValue = function (u) { u === N.DoubleQuote ? (this.state = x.InAttributeValueDq, this.sectionStart = this.index + 1) : u === N.SingleQuote ? (this.state = x.InAttributeValueSq, this.sectionStart = this.index + 1) : hu(u) || (this.sectionStart = this.index, this.state = x.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    Mu.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === N.DoubleQuote ? tu.Double : tu.Single, this.index + 1), this.state = x.BeforeAttributeName) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Mu.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, N.DoubleQuote); };
    Mu.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, N.SingleQuote); };
    Mu.prototype.stateInAttributeValueNoQuotes = function (u) { hu(u) || u === N.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(tu.Unquoted, this.index), this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Mu.prototype.stateBeforeDeclaration = function (u) { u === N.OpeningSquareBracket ? (this.state = x.CDATASequence, this.sequenceIndex = 0) : this.state = u === N.Dash ? x.BeforeComment : x.InDeclaration; };
    Mu.prototype.stateInDeclaration = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Mu.prototype.stateInProcessingInstruction = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Mu.prototype.stateBeforeComment = function (u) { u === N.Dash ? (this.state = x.InCommentLike, this.currentSequence = J.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = x.InDeclaration; };
    Mu.prototype.stateInSpecialComment = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = x.Text, this.sectionStart = this.index + 1); };
    Mu.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === J.ScriptEnd[3] ? this.startSpecial(J.ScriptEnd, 4) : t === J.StyleEnd[3] ? this.startSpecial(J.StyleEnd, 4) : (this.state = x.InTagName, this.stateInTagName(u)); };
    Mu.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === J.TitleEnd[3] ? this.startSpecial(J.TitleEnd, 4) : t === J.TextareaEnd[3] ? this.startSpecial(J.TextareaEnd, 4) : (this.state = x.InTagName, this.stateInTagName(u)); };
    Mu.prototype.startEntity = function () { this.baseState = this.state, this.state = x.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? uu.Strict : this.baseState === x.Text || this.baseState === x.InSpecialTag ? uu.Legacy : uu.Attribute); };
    Mu.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Mu.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === x.Text || this.state === x.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === x.InAttributeValueDq || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Mu.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Mu.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case x.Text: {
                this.stateText(u);
                break;
            }
            case x.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case x.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case x.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case x.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case x.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case x.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case x.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case x.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case x.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case x.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case x.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case x.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case x.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case x.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case x.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case x.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case x.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case x.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case x.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case x.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case x.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case x.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case x.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case x.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case x.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Mu.prototype.finish = function () { this.state === x.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Mu.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === x.InCommentLike ? this.currentSequence === J.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === x.InTagName || this.state === x.BeforeAttributeName || this.state === x.BeforeAttributeValue || this.state === x.AfterAttributeName || this.state === x.InAttributeName || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueDq || this.state === x.InAttributeValueNq || this.state === x.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    Mu.prototype.emitCodePoint = function (u, t) { this.baseState !== x.Text && this.baseState !== x.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return Mu;
}());
var Ru = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), O = new Set(["p"]), jt = new Set(["thead", "tbody"]), zt = new Set(["dd", "dt"]), Wt = new Set(["rt", "rp"]), dr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", O], ["h1", O], ["h2", O], ["h3", O], ["h4", O], ["h5", O], ["h6", O], ["select", Ru], ["input", Ru], ["output", Ru], ["button", Ru], ["datalist", Ru], ["textarea", Ru], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", zt], ["dt", zt], ["address", O], ["article", O], ["aside", O], ["blockquote", O], ["details", O], ["div", O], ["dl", O], ["fieldset", O], ["figcaption", O], ["figure", O], ["footer", O], ["form", O], ["header", O], ["hr", O], ["main", O], ["nav", O], ["ol", O], ["pre", O], ["section", O], ["table", O], ["ul", O], ["rt", Wt], ["rp", Wt], ["tbody", jt], ["tfoot", jt]]), hr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), $t = new Set(["math", "svg"]), Xt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), br = /\s|\//, $u = (function () {
    function $u(u, t) {
        if (t === void 0) { t = {}; }
        var r, n, a, s, l, d;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (a = t.recognizeSelfClosing) !== null && a !== void 0 ? a : !this.htmlMode, this.tokenizer = new ((s = t.Tokenizer) !== null && s !== void 0 ? s : Mu)(this.options, this), this.foreignContext = [!this.htmlMode], (d = (l = this.cbs).onparserinit) === null || d === void 0 || d.call(l, this);
    }
    $u.prototype.ontext = function (u, t) { var r, n; var a = this.getSlice(u, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, a), this.startIndex = t; };
    $u.prototype.ontextentity = function (u, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Lu(u)), this.startIndex = t; };
    $u.prototype.isVoidElement = function (u) { return this.htmlMode && hr.has(u); };
    $u.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    $u.prototype.emitOpenTag = function (u) { var t, r, n, a; this.openTagStart = this.startIndex, this.tagname = u; var s = this.htmlMode && dr.get(u); if (s)
        for (; this.stack.length > 0 && s.has(this.stack[0]);) {
            var l = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, l, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && ($t.has(u) ? this.foreignContext.unshift(!0) : Xt.has(u) && this.foreignContext.unshift(!1))), (a = (n = this.cbs).onopentagname) === null || a === void 0 || a.call(n, u), this.cbs.onopentag && (this.attribs = {}); };
    $u.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    $u.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    $u.prototype.onclosetag = function (u, t) { var r, n, a, s, l, d, p, y; this.endIndex = t; var k = this.getSlice(u, t); if (this.lowerCaseTagNames && (k = k.toLowerCase()), this.htmlMode && ($t.has(k) || Xt.has(k)) && this.foreignContext.shift(), this.isVoidElement(k))
        this.htmlMode && k === "br" && ((s = (a = this.cbs).onopentagname) === null || s === void 0 || s.call(a, "br"), (d = (l = this.cbs).onopentag) === null || d === void 0 || d.call(l, "br", {}, !0), (y = (p = this.cbs).onclosetag) === null || y === void 0 || y.call(p, "br", !1));
    else {
        var S = this.stack.indexOf(k);
        if (S !== -1)
            for (var E = 0; E <= S; E++) {
                var C = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, C, E !== S);
            }
        else
            this.htmlMode && k === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    $u.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    $u.prototype.closeCurrentTag = function (u) { var t, r; var n = this.tagname; this.endOpenTag(u), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !u), this.stack.shift()); };
    $u.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    $u.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    $u.prototype.onattribentity = function (u) { this.attribvalue += Lu(u); };
    $u.prototype.onattribend = function (u, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, u === tu.Double ? '"' : u === tu.Single ? "'" : u === tu.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    $u.prototype.getInstructionName = function (u) { var t = u.search(br), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    $u.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    $u.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    $u.prototype.oncomment = function (u, t, r) { var n, a, s, l; this.endIndex = t, (a = (n = this.cbs).oncomment) === null || a === void 0 || a.call(n, this.getSlice(u, t - r)), (l = (s = this.cbs).oncommentend) === null || l === void 0 || l.call(s), this.startIndex = t + 1; };
    $u.prototype.oncdata = function (u, t, r) { var n, a, s, l, d, p, y, k, S, E; this.endIndex = t; var C = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((a = (n = this.cbs).oncdatastart) === null || a === void 0 || a.call(n), (l = (s = this.cbs).ontext) === null || l === void 0 || l.call(s, C), (p = (d = this.cbs).oncdataend) === null || p === void 0 || p.call(d)) : ((k = (y = this.cbs).oncomment) === null || k === void 0 || k.call(y, "[CDATA[".concat(C, "]]")), (E = (S = this.cbs).oncommentend) === null || E === void 0 || E.call(S)), this.startIndex = t + 1; };
    $u.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    $u.prototype.reset = function () { var u, t, r, n; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    $u.prototype.parseComplete = function (u) { this.reset(), this.end(u); };
    $u.prototype.getSlice = function (u, t) { for (; u - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    $u.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    $u.prototype.write = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++); };
    $u.prototype.end = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } u && this.write(u), this.ended = !0, this.tokenizer.end(); };
    $u.prototype.pause = function () { this.tokenizer.pause(); };
    $u.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    $u.prototype.parseChunk = function (u) { this.write(u); };
    $u.prototype.done = function (u) { this.end(u); };
    return $u;
}());
var fe = {};
He(fe, { CDATA: function () { return Ke; }, Comment: function () { return Xe; }, Directive: function () { return $e; }, Doctype: function () { return Ye; }, ElementType: function () { return D; }, Root: function () { return ze; }, Script: function () { return Je; }, Style: function () { return Qe; }, Tag: function () { return Ze; }, Text: function () { return We; }, isTag: function () { return je; } });
var D;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(D || (D = {}));
function je(e) { return e.type === D.Tag || e.type === D.Script || e.type === D.Style; }
var ze = D.Root, We = D.Text, $e = D.Directive, Xe = D.Comment, Je = D.Script, Qe = D.Style, Ze = D.Tag, Ke = D.CDATA, Ye = D.Doctype;
var le = (function () {
    function le() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(le.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(le.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(le.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    le.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return Jt(this, u);
    };
    return le;
}()), Xu = (function (_super) {
    __extends(Xu, _super);
    function Xu(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = u;
        return _this;
    }
    Object.defineProperty(Xu.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (u) { this.data = u; },
        enumerable: false,
        configurable: true
    });
    return Xu;
}(le)), Ou = (function (_super) {
    __extends(Ou, _super);
    function Ou() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Text;
        return _this;
    }
    Object.defineProperty(Ou.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Ou;
}(Xu)), Ju = (function (_super) {
    __extends(Ju, _super);
    function Ju() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Comment;
        return _this;
    }
    Object.defineProperty(Ju.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Ju;
}(Xu)), Qu = (function (_super) {
    __extends(Qu, _super);
    function Qu(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = D.Directive;
        return _this;
    }
    Object.defineProperty(Qu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Qu;
}(Xu)), Zu = (function (_super) {
    __extends(Zu, _super);
    function Zu(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(Zu.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zu.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Zu.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return Zu;
}(le)), Ku = (function (_super) {
    __extends(Ku, _super);
    function Ku() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.CDATA;
        return _this;
    }
    Object.defineProperty(Ku.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ku;
}(Zu)), Bu = (function (_super) {
    __extends(Bu, _super);
    function Bu() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = D.Root;
        return _this;
    }
    Object.defineProperty(Bu.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Bu;
}(Zu)), Yu = (function (_super) {
    __extends(Yu, _super);
    function Yu(u, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = u === "script" ? D.Script : u === "style" ? D.Style : D.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(Yu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Yu;
}(Zu));
function R(e) { return je(e); }
function Pu(e) { return e.type === D.CDATA; }
function ou(e) { return e.type === D.Text; }
function _u(e) { return e.type === D.Comment; }
function pr(e) { return e.type === D.Directive; }
function ut(e) { return e.type === D.Root; }
function Q(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Jt(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (ou(e))
        t = new Ou(e.data);
    else if (_u(e))
        t = new Ju(e.data);
    else if (R(e)) {
        var r = u ? _e(e.children) : [], n_1 = new Yu(e.name, cu({}, e.attribs), r);
        r.forEach(function (a) { return a.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = cu({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = cu({}, e["x-attribsPrefix"])), t = n_1;
    }
    else if (Pu(e)) {
        var r = u ? _e(e.children) : [], n_2 = new Ku(r);
        r.forEach(function (a) { return a.parent = n_2; }), t = n_2;
    }
    else if (ut(e)) {
        var r = u ? _e(e.children) : [], n_3 = new Bu(r);
        r.forEach(function (a) { return a.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), t = n_3;
    }
    else if (pr(e)) {
        var r = new Qu(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function _e(e) { var u = e.map(function (t) { return Jt(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var Qt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Hu = (function () {
    function Hu(u, t, r) {
        this.dom = [], this.root = new Bu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Qt), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : Qt, this.elementCB = r != null ? r : null;
    }
    Hu.prototype.onparserinit = function (u) { this.parser = u; };
    Hu.prototype.onreset = function () { this.dom = [], this.root = new Bu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Hu.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Hu.prototype.onerror = function (u) { this.handleCallback(u); };
    Hu.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    Hu.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? D.Tag : void 0, n = new Yu(u, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    Hu.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === D.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Ou(u);
        this.addNode(r), this.lastNode = r;
    } };
    Hu.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === D.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new Ju(u); this.addNode(t), this.lastNode = t; };
    Hu.prototype.oncommentend = function () { this.lastNode = null; };
    Hu.prototype.oncdatastart = function () { var u = new Ou(""), t = new Ku([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    Hu.prototype.oncdataend = function () { this.lastNode = null; };
    Hu.prototype.onprocessinginstruction = function (u, t) { var r = new Qu(u, t); this.addNode(r); };
    Hu.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    Hu.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return Hu;
}());
var fu = {};
He(fu, { DocumentPosition: function () { return ru; }, append: function () { return Rr; }, appendChild: function () { return Mr; }, compareDocumentPosition: function () { return f0; }, existsOne: function () { return c0; }, filter: function () { return Vu; }, find: function () { return xe; }, findAll: function () { return Pr; }, findOne: function () { return ye; }, findOneChild: function () { return Br; }, getAttributeValue: function () { return Ir; }, getChildren: function () { return ge; }, getElementById: function () { return Gr; }, getElements: function () { return Vr; }, getElementsByClassName: function () { return jr; }, getElementsByTagName: function () { return Nu; }, getElementsByTagType: function () { return zr; }, getFeed: function () { return dt; }, getInnerHTML: function () { return qr; }, getName: function () { return Lr; }, getOuterHTML: function () { return i0; }, getParent: function () { return s0; }, getSiblings: function () { return me; }, getText: function () { return pe; }, hasAttrib: function () { return Dr; }, hasChildren: function () { return Q; }, innerText: function () { return it; }, isCDATA: function () { return Pu; }, isComment: function () { return _u; }, isDocument: function () { return ut; }, isTag: function () { return R; }, isText: function () { return ou; }, nextElementSibling: function () { return st; }, prepend: function () { return ot; }, prependChild: function () { return Or; }, prevElementSibling: function () { return ct; }, removeElement: function () { return bu; }, removeSubsets: function () { return Wr; }, replaceElement: function () { return Ur; }, testElement: function () { return Fr; }, textContent: function () { return yu; }, uniqueSort: function () { return lt; } });
function de(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var gr = new Map(de([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(de([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(de([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(de([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var et = /["&'<>$\x80-\uFFFF]/g, Zt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Kt = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function ue(e) { var u = "", t = 0, r; for (; (r = et.exec(e)) !== null;) {
    var n = r.index, a = e.charCodeAt(n), s = Zt.get(a);
    s !== void 0 ? (u += e.substring(t, n) + s, t = n + 1) : (u += "".concat(e.substring(t, n), "&#x").concat(Kt(e, n).toString(16), ";"), t = et.lastIndex += +((a & 64512) === 55296));
} return u + e.substr(t); }
function tt(e, u) { return function (r) { var n, a = 0, s = ""; for (; n = e.exec(r);)
    a !== n.index && (s += r.substring(a, n.index)), s += u.get(n[0].charCodeAt(0)), a = n.index + 1; return s + r.substring(a); }; }
var Yt = tt(/[&<>'"]/g, Zt), he = tt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), be = tt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var _t;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(_t || (_t = {}));
var u0;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(u0 || (u0 = {}));
var r0 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), n0 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var xr = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function yr(e) { return e.replace(/"/g, "&quot;"); }
function vr(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? yr : u.xmlMode || u.encodeEntities !== "utf8" ? ue : he; return Object.keys(e).map(function (n) { var a, s; var l = (a = e[n]) !== null && a !== void 0 ? a : ""; return u.xmlMode === "foreign" && (n = (s = n0.get(n)) !== null && s !== void 0 ? s : n), !u.emptyAttrs && !u.xmlMode && l === "" ? n : "".concat(n, "=\"").concat(r(l), "\""); }).join(" "); }
var a0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function at(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var n = 0; n < t.length; n++)
        r += wr(t[n], u);
    return r;
}
var Fu = at;
function wr(e, u) { switch (e.type) {
    case ze: return at(e.children, u);
    case Ye:
    case $e: return Tr(e);
    case Xe: return Cr(e);
    case Ke: return kr(e);
    case Je:
    case Qe:
    case Ze: return Er(e, u);
    case We: return Nr(e, u);
} }
var Sr = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), Ar = new Set(["svg", "math"]);
function Er(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = r0.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && Sr.has(e.parent.name) && (u = Eu(cu({}, u), { xmlMode: !1 }))), !u.xmlMode && Ar.has(e.name) && (u = Eu(cu({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), n = vr(e.attribs, u); return n && (r += " ".concat(n)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && a0.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += at(e.children, u)), (u.xmlMode || !a0.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function Tr(e) { return "<".concat(e.data, ">"); }
function Nr(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && xr.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? ue(r) : be(r)), r; }
function kr(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Cr(e) { return "<!--".concat(e.data, "-->"); }
function i0(e, u) { return Fu(e, u); }
function qr(e, u) { return Q(e) ? e.children.map(function (t) { return i0(t, u); }).join("") : ""; }
function pe(e) {
    return Array.isArray(e) ? e.map(pe).join("") : R(e) ? e.name === "br" ? "\n" : pe(e.children) : Pu(e) ? pe(e.children) : ou(e) ? e.data : "";
}
function yu(e) { return Array.isArray(e) ? e.map(yu).join("") : Q(e) && !_u(e) ? yu(e.children) : ou(e) ? e.data : ""; }
function it(e) { return Array.isArray(e) ? e.map(it).join("") : Q(e) && (e.type === D.Tag || Pu(e)) ? it(e.children) : ou(e) ? e.data : ""; }
function ge(e) { return Q(e) ? e.children : []; }
function s0(e) { return e.parent || null; }
function me(e) {
    var _a, _b;
    var u = s0(e);
    if (u != null)
        return ge(u);
    var t = [e], r = e.prev, n = e.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function Ir(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function Dr(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function Lr(e) { return e.name; }
function st(e) {
    var _a;
    var u = e.next;
    for (; u !== null && !R(u);)
        (_a = u, u = _a.next);
    return u;
}
function ct(e) {
    var _a;
    var u = e.prev;
    for (; u !== null && !R(u);)
        (_a = u, u = _a.prev);
    return u;
}
function bu(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function Ur(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var n = u.parent = e.parent; if (n) {
    var a = n.children;
    a[a.lastIndexOf(e)] = u, e.parent = null;
} }
function Mr(e, u) { if (bu(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function Rr(e, u) { bu(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function Or(e, u) { if (bu(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function ot(e, u) { bu(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function Vu(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return xe(e, Array.isArray(u) ? u : [u], t, r);
}
function xe(e, u, t, r) { var n = [], a = [Array.isArray(u) ? u : [u]], s = [0]; for (;;) {
    if (s[0] >= a[0].length) {
        if (s.length === 1)
            return n;
        a.shift(), s.shift();
        continue;
    }
    var l = a[0][s[0]++];
    if (e(l) && (n.push(l), --r <= 0))
        return n;
    t && Q(l) && l.children.length > 0 && (s.unshift(0), a.unshift(l.children));
} }
function Br(e, u) { return u.find(e); }
function ye(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var n = 0; n < r.length; n++) {
        var a = r[n];
        if (R(a) && e(a))
            return a;
        if (t && Q(a) && a.children.length > 0) {
            var s = ye(e, a.children, !0);
            if (s)
                return s;
        }
    }
    return null;
}
function c0(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return R(t) && e(t) || Q(t) && c0(e, t.children); }); }
function Pr(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var a = r[0][n[0]++];
    R(a) && e(a) && t.push(a), Q(a) && a.children.length > 0 && (n.unshift(0), r.unshift(a.children));
} }
var ve = { tag_name: function (e) { return typeof e == "function" ? function (u) { return R(u) && e(u.name); } : e === "*" ? R : function (u) { return R(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return ou(u) && e(u.data); } : function (u) { return ou(u) && u.data === e; }; } };
function ft(e, u) { return typeof u == "function" ? function (t) { return R(t) && u(t.attribs[e]); } : function (t) { return R(t) && t.attribs[e] === u; }; }
function Hr(e, u) { return function (t) { return e(t) || u(t); }; }
function o0(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(ve, t) ? ve[t](r) : ft(t, r); }); return u.length === 0 ? null : u.reduce(Hr); }
function Fr(e, u) { var t = o0(e); return t ? t(u) : !0; }
function Vr(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = o0(e);
    return n ? Vu(n, u, t, r) : [];
}
function Gr(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), ye(ft("id", e), u, t);
}
function Nu(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Vu(ve.tag_name(e), u, t, r);
}
function jr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Vu(ft("class", e), u, t, r);
}
function zr(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return Vu(ve.tag_type(e), u, t, r);
}
function Wr(e) { var u = e.length; for (; --u >= 0;) {
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
var ru;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ru || (ru = {}));
function f0(e, u) { var t = [], r = []; if (e === u)
    return 0; var n = Q(e) ? e : e.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = Q(u) ? u : u.parent; n;)
    r.unshift(n), n = n.parent; var a = Math.min(t.length, r.length), s = 0; for (; s < a && t[s] === r[s];)
    s++; if (s === 0)
    return ru.DISCONNECTED; var l = t[s - 1], d = l.children, p = t[s], y = r[s]; return d.indexOf(p) > d.indexOf(y) ? l === u ? ru.FOLLOWING | ru.CONTAINED_BY : ru.FOLLOWING : l === e ? ru.PRECEDING | ru.CONTAINS : ru.PRECEDING; }
function lt(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = f0(u, t); return r & ru.PRECEDING ? -1 : r & ru.FOLLOWING ? 1 : 0; }), e; }
function dt(e) { var u = we(Zr, e); return u ? u.name === "feed" ? $r(u) : Xr(u) : null; }
function $r(e) { var u; var t = e.children, r = { type: "atom", items: Nu("entry", t).map(function (s) { var l; var d = s.children, p = { media: l0(d) }; K(p, "id", "id", d), K(p, "title", "title", d); var y = (l = we("link", d)) === null || l === void 0 ? void 0 : l.attribs.href; y && (p.link = y); var k = vu("summary", d) || vu("content", d); k && (p.description = k); var S = vu("updated", d); return S && (p.pubDate = new Date(S)), p; }) }; K(r, "id", "id", t), K(r, "title", "title", t); var n = (u = we("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; n && (r.link = n), K(r, "description", "subtitle", t); var a = vu("updated", t); return a && (r.updated = new Date(a)), K(r, "author", "email", t, !0), r; }
function Xr(e) { var u, t; var r = (t = (u = we("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], n = { type: e.name.substr(0, 3), id: "", items: Nu("item", e.children).map(function (s) { var l = s.children, d = { media: l0(l) }; K(d, "id", "guid", l), K(d, "title", "title", l), K(d, "link", "link", l), K(d, "description", "description", l); var p = vu("pubDate", l) || vu("dc:date", l); return p && (d.pubDate = new Date(p)), d; }) }; K(n, "title", "title", r), K(n, "link", "link", r), K(n, "description", "description", r); var a = vu("lastBuildDate", r); return a && (n.updated = new Date(a)), K(n, "author", "managingEditor", r, !0), n; }
var Jr = ["url", "type", "lang"], Qr = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function l0(e) { return Nu("media:content", e).map(function (u) {
    var e_4, _a, e_5, _b;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var Jr_1 = __values(Jr), Jr_1_1 = Jr_1.next(); !Jr_1_1.done; Jr_1_1 = Jr_1.next()) {
            var n = Jr_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Jr_1_1 && !Jr_1_1.done && (_a = Jr_1.return)) _a.call(Jr_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Qr_1 = __values(Qr), Qr_1_1 = Qr_1.next(); !Qr_1_1.done; Qr_1_1 = Qr_1.next()) {
            var n = Qr_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Qr_1_1 && !Qr_1_1.done && (_b = Qr_1.return)) _b.call(Qr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function we(e, u) { return Nu(e, u, !0, 1)[0]; }
function vu(e, u, t) {
    if (t === void 0) { t = !1; }
    return yu(Nu(e, u, t, 1)).trim();
}
function K(e, u, t, r, n) {
    if (n === void 0) { n = !1; }
    var a = vu(t, r, n);
    a && (e[u] = a);
}
function Zr(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function d0(e, u) { var t = new Hu(void 0, u); return new $u(t, u).end(e), t.root; }
var T;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(T || (T = {}));
var F;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(F || (F = {}));
var h0 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Kr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Yr = new Map([[126, F.Element], [94, F.Start], [36, F.End], [42, F.Any], [33, F.Not], [124, F.Hyphen]]), _r = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function ku(e) { switch (e.type) {
    case T.Adjacent:
    case T.Child:
    case T.Descendant:
    case T.Parent:
    case T.Sibling:
    case T.ColumnCombinator: return !0;
    default: return !1;
} }
var un = new Set(["contains", "icontains"]);
function en(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function ee(e) { return e.replace(Kr, en); }
function ht(e) { return e === 39 || e === 34; }
function b0(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function wu(e) { var u = [], t = p0(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function p0(e, u, t) { var r = []; function n(S) { var E = u.slice(t + S).match(h0); if (!E)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _a = __read(E, 1), C = _a[0]; return t += S + C.length, ee(C); } function a(S) { for (t += S; t < u.length && b0(u.charCodeAt(t));)
    t++; } function s() { t += 1; var S = t, E = 1; for (; E > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !l(t) ? E++ : u.charCodeAt(t) === 41 && !l(t) && E--; if (E)
    throw new Error("Parenthesis not matched"); return ee(u.slice(S, t - 1)); } function l(S) { var E = 0; for (; u.charCodeAt(--S) === 92;)
    E++; return (E & 1) === 1; } function d() { if (r.length > 0 && ku(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function p(S) { if (r.length > 0 && r[r.length - 1].type === T.Descendant) {
    r[r.length - 1].type = S;
    return;
} d(), r.push({ type: S }); } function y(S, E) { r.push({ type: T.Attribute, name: S, action: E, value: n(1), namespace: null, ignoreCase: "quirks" }); } function k() { if (r.length && r[r.length - 1].type === T.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (a(0), u.length === t)
    return t; u: for (; t < u.length;) {
    var S = u.charCodeAt(t);
    switch (S) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== T.Descendant) && (d(), r.push({ type: T.Descendant })), a(1);
            break;
        }
        case 62: {
            p(T.Child), a(1);
            break;
        }
        case 60: {
            p(T.Parent), a(1);
            break;
        }
        case 126: {
            p(T.Sibling), a(1);
            break;
        }
        case 43: {
            p(T.Adjacent), a(1);
            break;
        }
        case 46: {
            y("class", F.Element);
            break;
        }
        case 35: {
            y("id", F.Equals);
            break;
        }
        case 91: {
            a(1);
            var E = void 0, C = null;
            u.charCodeAt(t) === 124 ? E = n(1) : u.startsWith("*|", t) ? (C = "*", E = n(2)) : (E = n(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (C = E, E = n(1))), a(0);
            var L = F.Exists, Z = Yr.get(u.charCodeAt(t));
            if (Z) {
                if (L = Z, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                a(2);
            }
            else
                u.charCodeAt(t) === 61 && (L = F.Equals, a(1));
            var _ = "", du = null;
            if (L !== "exists") {
                if (ht(u.charCodeAt(t))) {
                    var P = u.charCodeAt(t), G = t + 1;
                    for (; G < u.length && (u.charCodeAt(G) !== P || l(G));)
                        G += 1;
                    if (u.charCodeAt(G) !== P)
                        throw new Error("Attribute value didn't end");
                    _ = ee(u.slice(t + 1, G)), t = G + 1;
                }
                else {
                    var P = t;
                    for (; t < u.length && (!b0(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || l(t));)
                        t += 1;
                    _ = ee(u.slice(P, t));
                }
                a(0);
                var q = u.charCodeAt(t) | 32;
                q === 115 ? (du = !1, a(1)) : q === 105 && (du = !0, a(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var V = { type: T.Attribute, name: E, action: L, value: _, namespace: C, ignoreCase: du };
            r.push(V);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: T.PseudoElement, name: n(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? s() : null });
                continue;
            }
            var E = n(1).toLowerCase(), C = null;
            if (u.charCodeAt(t) === 40)
                if (_r.has(E)) {
                    if (ht(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(E, " cannot be quoted"));
                    if (C = [], t = p0(C, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(E, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (C = s(), un.has(E)) {
                        var L = C.charCodeAt(0);
                        L === C.charCodeAt(C.length - 1) && ht(L) && (C = C.slice(1, -1));
                    }
                    C = ee(C);
                }
            r.push({ type: T.Pseudo, name: E, data: C });
            break;
        }
        case 44: {
            k(), r = [], a(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var L = u.indexOf("*/", t + 2);
                if (L < 0)
                    throw new Error("Comment was not terminated");
                t = L + 2, r.length === 0 && a(0);
                break;
            }
            var E = null, C = void 0;
            if (S === 42)
                t += 1, C = "*";
            else if (S === 124) {
                if (C = "", u.charCodeAt(t + 1) === 124) {
                    p(T.ColumnCombinator), a(2);
                    break;
                }
            }
            else if (h0.test(u.slice(t)))
                C = n(0);
            else
                break u;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (E = C, u.charCodeAt(t + 1) === 42 ? (C = "*", t += 2) : C = n(1)), r.push(C === "*" ? { type: T.Universal, namespace: E } : { type: T.Tag, name: C, namespace: E });
        }
    }
} return k(), t; }
var Et = Tu(Su(), 1);
var pu = Tu(Su(), 1);
var m0 = new Map([[T.Universal, 50], [T.Tag, 30], [T.Attribute, 1], [T.Pseudo, 0]]);
function te(e) { return !m0.has(e.type); }
var tn = new Map([[F.Exists, 10], [F.Equals, 8], [F.Not, 7], [F.Start, 6], [F.End, 6], [F.Any, 5]]);
function bt(e) { var u = e.map(x0); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < u[n]; n--) {
            var a = e[n + 1];
            e[n + 1] = e[n], e[n] = a, u[n + 1] = u[n], u[n] = r;
        }
} }
function x0(e) { var u, t; var r = (u = m0.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === T.Attribute ? (r = (t = tn.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === F.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === T.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(x0)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var re = Tu(Su(), 1), rn = /[-[\]{}()*+?.,\\^$|#\s]/g;
function y0(e) { return e.replace(rn, "\\$&"); }
var nn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function Cu(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && nn.has(e.name); }
var v0 = { equals: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value; return Cu(u, t) ? (a = a.toLowerCase(), function (s) { var l = r.getAttributeValue(s, n); return l != null && l.length === a.length && l.toLowerCase() === a && e(s); }) : function (s) { return r.getAttributeValue(s, n) === a && e(s); }; }, hyphen: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value, s = a.length; return Cu(u, t) ? (a = a.toLowerCase(), function (d) { var p = r.getAttributeValue(d, n); return p != null && (p.length === s || p.charAt(s) === "-") && p.substr(0, s).toLowerCase() === a && e(d); }) : function (d) { var p = r.getAttributeValue(d, n); return p != null && (p.length === s || p.charAt(s) === "-") && p.substr(0, s) === a && e(d); }; }, element: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value; if (/\s/.test(a))
        return re.default.falseFunc; var s = new RegExp("(?:^|\\s)".concat(y0(a), "(?:$|\\s)"), Cu(u, t) ? "i" : ""); return function (d) { var p = r.getAttributeValue(d, n); return p != null && p.length >= a.length && s.test(p) && e(d); }; }, exists: function (e, _a, _b) {
        var u = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value, s = a.length; return s === 0 ? re.default.falseFunc : Cu(u, t) ? (a = a.toLowerCase(), function (l) { var d = r.getAttributeValue(l, n); return d != null && d.length >= s && d.substr(0, s).toLowerCase() === a && e(l); }) : function (l) { var d; return !!(!((d = r.getAttributeValue(l, n)) === null || d === void 0) && d.startsWith(a)) && e(l); }; }, end: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value, s = -a.length; return s === 0 ? re.default.falseFunc : Cu(u, t) ? (a = a.toLowerCase(), function (l) { var d; return ((d = r.getAttributeValue(l, n)) === null || d === void 0 ? void 0 : d.substr(s).toLowerCase()) === a && e(l); }) : function (l) { var d; return !!(!((d = r.getAttributeValue(l, n)) === null || d === void 0) && d.endsWith(a)) && e(l); }; }, any: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value; if (a === "")
        return re.default.falseFunc; if (Cu(u, t)) {
        var s_1 = new RegExp(y0(a), "i");
        return function (d) { var p = r.getAttributeValue(d, n); return p != null && p.length >= a.length && s_1.test(p) && e(d); };
    } return function (s) { var l; return !!(!((l = r.getAttributeValue(s, n)) === null || l === void 0) && l.includes(a)) && e(s); }; }, not: function (e, u, t) { var r = t.adapter, n = u.name, a = u.value; return a === "" ? function (s) { return !!r.getAttributeValue(s, n) && e(s); } : Cu(u, t) ? (a = a.toLowerCase(), function (s) { var l = r.getAttributeValue(s, n); return (l == null || l.length !== a.length || l.toLowerCase() !== a) && e(s); }) : function (s) { return r.getAttributeValue(s, n) !== a && e(s); }; } };
var an = new Set([9, 10, 12, 13, 32]), w0 = 48, sn = 57;
function S0(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = a(), n = s(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (n != null ? n : 1), l(), u < e.length ? (r = a(), l(), n = s()) : r = n = 0), n === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * n]; function a() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function s() { var d = u, p = 0; for (; u < e.length && e.charCodeAt(u) >= w0 && e.charCodeAt(u) <= sn;)
    p = p * 10 + (e.charCodeAt(u) - w0), u++; return u === d ? null : p; } function l() { for (; u < e.length && an.has(e.charCodeAt(u));)
    u++; } }
var pt = Tu(Su(), 1);
function A0(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return pt.default.falseFunc; if (u === -1)
    return function (a) { return a <= t; }; if (u === 0)
    return function (a) { return a === t; }; if (u === 1)
    return t < 0 ? pt.default.trueFunc : function (a) { return a >= t; }; var r = Math.abs(u), n = (t % r + r) % r; return u > 1 ? function (a) { return a >= t && a % r === n; } : function (a) { return a <= t && a % r === n; }; }
function Gu(e) { return A0(S0(e)); }
var Y = Tu(Su(), 1);
function Se(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var ju = { contains: function (e, u, _a) {
        var t = _a.adapter;
        return function (n) { return e(n) && t.getText(n).includes(u); };
    }, icontains: function (e, u, _a) {
        var t = _a.adapter;
        var r = u.toLowerCase();
        return function (a) { return e(a) && t.getText(a).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = Gu(u);
        return n === Y.default.falseFunc ? Y.default.falseFunc : n === Y.default.trueFunc ? Se(e, t) : function (s) { var l = t.getSiblings(s), d = 0; for (var p = 0; p < l.length && !r(s, l[p]); p++)
            t.isTag(l[p]) && d++; return n(d) && e(s); };
    }, "nth-last-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = Gu(u);
        return n === Y.default.falseFunc ? Y.default.falseFunc : n === Y.default.trueFunc ? Se(e, t) : function (s) { var l = t.getSiblings(s), d = 0; for (var p = l.length - 1; p >= 0 && !r(s, l[p]); p--)
            t.isTag(l[p]) && d++; return n(d) && e(s); };
    }, "nth-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = Gu(u);
        return n === Y.default.falseFunc ? Y.default.falseFunc : n === Y.default.trueFunc ? Se(e, t) : function (s) { var l = t.getSiblings(s), d = 0; for (var p = 0; p < l.length; p++) {
            var y = l[p];
            if (r(s, y))
                break;
            t.isTag(y) && t.getName(y) === t.getName(s) && d++;
        } return n(d) && e(s); };
    }, "nth-last-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = Gu(u);
        return n === Y.default.falseFunc ? Y.default.falseFunc : n === Y.default.trueFunc ? Se(e, t) : function (s) { var l = t.getSiblings(s), d = 0; for (var p = l.length - 1; p >= 0; p--) {
            var y = l[p];
            if (r(s, y))
                break;
            t.isTag(y) && t.getName(y) === t.getName(s) && d++;
        } return n(d) && e(s); };
    }, root: function (e, u, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && e(r); };
    }, scope: function (e, u, t, r) { var n = t.equals; return !r || r.length === 0 ? ju.root(e, u, t) : r.length === 1 ? function (a) { return n(r[0], a) && e(a); } : function (a) { return r.includes(a) && e(a); }; }, hover: gt("isHovered"), visited: gt("isVisited"), active: gt("isActive") };
function gt(e) { return function (t, r, _a) {
    var n = _a.adapter;
    var a = n[e];
    return typeof a != "function" ? Y.default.falseFunc : function (l) { return a(l) && t(l); };
}; }
var ne = { empty: function (e, _a) {
        var u = _a.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (n) { return u.isTag(n); });
        return r != null && t(e, r);
    }, "last-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(e, r[n]))
                return !0;
            if (u.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var a = 0; a < r.length; a++) {
            var s = r[a];
            if (t(e, s))
                return !0;
            if (u.isTag(s) && u.getName(s) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var a = r.length - 1; a >= 0; a--) {
            var s = r[a];
            if (t(e, s))
                return !0;
            if (u.isTag(s) && u.getName(s) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (n) { return t(e, n) || !u.isTag(n) || u.getName(n) !== r; });
    }, "only-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function mt(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var Ae = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var nu = Tu(Su(), 1);
var vt = {};
function wt(e, u) { return e === nu.default.falseFunc ? nu.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function St(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function yt(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var xt = function (e, u, t, r, n) { var a = n(u, yt(t), r); return a === nu.default.trueFunc ? e : a === nu.default.falseFunc ? nu.default.falseFunc : function (s) { return a(s) && e(s); }; }, Ee = { is: xt, matches: xt, where: xt, not: function (e, u, t, r, n) { var a = n(u, yt(t), r); return a === nu.default.falseFunc ? e : a === nu.default.trueFunc ? nu.default.falseFunc : function (s) { return !a(s) && e(s); }; }, has: function (e, u, t, r, n) { var a = t.adapter, s = yt(t); s.relativeSelector = !0; var l = u.some(function (y) { return y.some(te); }) ? [vt] : void 0, d = n(u, s, l); if (d === nu.default.falseFunc)
        return nu.default.falseFunc; var p = wt(d, a); if (l && d !== nu.default.trueFunc) {
        var _a = d.shouldTestNextSiblings, y_1 = _a === void 0 ? !1 : _a;
        return function (k) { if (!e(k))
            return !1; l[0] = k; var S = a.getChildren(k), E = y_1 ? __spreadArray(__spreadArray([], __read(S), false), __read(St(k, a)), false) : S; return a.existsOne(p, E); };
    } return function (y) { return e(y) && a.existsOne(p, a.getChildren(y)); }; } };
function E0(e, u, t, r, n) { var a; var s = u.name, l = u.data; if (Array.isArray(l)) {
    if (!(s in Ee))
        throw new Error("Unknown pseudo-class :".concat(s, "(").concat(l, ")"));
    return Ee[s](e, l, t, r, n);
} var d = (a = t.pseudos) === null || a === void 0 ? void 0 : a[s], p = typeof d == "string" ? d : Ae[s]; if (typeof p == "string") {
    if (l != null)
        throw new Error("Pseudo ".concat(s, " doesn't have any arguments"));
    var y = wu(p);
    return Ee.is(e, y, t, r, n);
} if (typeof d == "function")
    return mt(d, s, l, 1), function (y) { return d(y, l) && e(y); }; if (s in ju)
    return ju[s](e, l, t, r); if (s in ne) {
    var y_2 = ne[s];
    return mt(y_2, s, l, 2), function (k) { return y_2(k, t, l) && e(k); };
} throw new Error("Unknown pseudo-class :".concat(s)); }
function At(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function T0(e, u, t, r, n) { var a = t.adapter, s = t.equals; switch (u.type) {
    case T.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case T.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case T.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), v0[u.action](e, u, t);
    }
    case T.Pseudo: return E0(e, u, t, r, n);
    case T.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var l_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (l_1 = l_1.toLowerCase()), function (p) { return a.getName(p) === l_1 && e(p); };
    }
    case T.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (p) { var y = p; for (; y = At(y, a);)
                if (e(y))
                    return !0; return !1; };
        var l_2 = new WeakSet;
        return function (p) { var y = p; for (; y = At(y, a);)
            if (!l_2.has(y)) {
                if (a.isTag(y) && e(y))
                    return !0;
                l_2.add(y);
            } return !1; };
    }
    case "_flexibleDescendant": return function (d) { var p = d; do
        if (e(p))
            return !0;
    while (p = At(p, a)); return !1; };
    case T.Parent: return function (d) { return a.getChildren(d).some(function (p) { return a.isTag(p) && e(p); }); };
    case T.Child: return function (d) { var p = a.getParent(d); return p != null && a.isTag(p) && e(p); };
    case T.Sibling: return function (d) { var p = a.getSiblings(d); for (var y = 0; y < p.length; y++) {
        var k = p[y];
        if (s(d, k))
            break;
        if (a.isTag(k) && e(k))
            return !0;
    } return !1; };
    case T.Adjacent: return a.prevElementSibling ? function (d) { var p = a.prevElementSibling(d); return p != null && e(p); } : function (d) { var p = a.getSiblings(d), y; for (var k = 0; k < p.length; k++) {
        var S = p[k];
        if (s(d, S))
            break;
        a.isTag(S) && (y = S);
    } return !!y && e(y); };
    case T.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function N0(e, u, t) { var r = Te(e, u, t); return wt(r, u.adapter); }
function Te(e, u, t) { var r = typeof e == "string" ? wu(e) : e; return Ne(r, u, t); }
function k0(e) { return e.type === T.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(k0); })); }
var cn = { type: T.Descendant }, on = { type: "_flexibleDescendant" }, fn = { type: T.Pseudo, name: "scope", data: null };
function ln(e, _a, t) {
    var e_6, _b;
    var u = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var a = u.isTag(n) && u.getParent(n); return n === vt || a && u.isTag(a); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && te(n[0]) && n[0].type !== T.Descendant))
                if (r && !n.some(k0))
                    n.unshift(cn);
                else
                    continue;
            n.unshift(fn);
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
function Ne(e, u, t) { var r; e.forEach(bt), t = (r = u.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), a = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    ln(e, u, a);
else if (e.some(function (d) { return d.length > 0 && te(d[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var s = !1, l = e.map(function (d) { if (d.length >= 2) {
    var _a = __read(d, 2), p = _a[0], y = _a[1];
    p.type !== T.Pseudo || p.name !== "scope" || (n && y.type === T.Descendant ? d[1] = on : (y.type === T.Adjacent || y.type === T.Sibling) && (s = !0));
} return dn(d, u, a); }).reduce(hn, pu.default.falseFunc); return l.shouldTestNextSiblings = s, l; }
function dn(e, u, t) { var r; return e.reduce(function (n, a) { return n === pu.default.falseFunc ? pu.default.falseFunc : T0(n, a, u, t, Ne); }, (r = u.rootFunc) !== null && r !== void 0 ? r : pu.default.trueFunc); }
function hn(e, u) { return u === pu.default.falseFunc || e === pu.default.trueFunc ? e : e === pu.default.falseFunc || u === pu.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var C0 = function (e, u) { return e === u; }, bn = { adapter: fu, equals: C0 };
function q0(e) { var u, t, r, n; var a = e != null ? e : bn; return (u = a.adapter) !== null && u !== void 0 || (a.adapter = fu), (t = a.equals) !== null && t !== void 0 || (a.equals = (n = (r = a.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : C0), a; }
function Tt(e) { return function (t, r, n) { var a = q0(r); return e(t, a, n); }; }
var Pi = Tt(N0), Hi = Tt(Te), ke = Tt(Ne);
function I0(e) { return function (t, r, n) { var a = q0(n); typeof t != "function" && (t = Te(t, a, r)); var s = Ce(r, a.adapter, t.shouldTestNextSiblings); return e(t, s, a); }; }
function Ce(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = pn(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function pn(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var n = 0; n < r; n++) {
    var a = St(t[n], u);
    t.push.apply(t, __spreadArray([], __read(a), false));
} return t; }
var Fi = I0(function (e, u, t) { return e === Et.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), Vi = I0(function (e, u, t) { return e === Et.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var Ie = Tu(Su(), 1);
var gn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function zu(e) { return e.type !== "pseudo" ? !1 : gn.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(zu); }) : !1; }
function D0(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
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
function L0(e) { for (; e.parent;)
    e = e.parent; return e; }
function qe(e) {
    var e_8, _a;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(zu) ? u.push(r) : t.push(r);
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
var mn = { type: T.Universal, namespace: null }, xn = { type: T.Pseudo, name: "scope", data: null };
function Ct(e, u, t) {
    if (t === void 0) { t = {}; }
    return yn([e], u, t);
}
function yn(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _a = __read(qe(wu(u)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && e.some(ke(r, t)) || n.some(function (a) { return U0(a, e, t).length > 0; });
}
function vn(e, u, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < u.length ? [n < 0 ? u[u.length + n] : u[n]] : [];
    case "gt": return isFinite(n) ? u.slice(n + 1) : [];
    case "even": return u.filter(function (a, s) { return s % 2 === 0; });
    case "odd": return u.filter(function (a, s) { return s % 2 === 1; });
    case "not": {
        var a_1 = new Set(wn(t, u, r));
        return u.filter(function (s) { return !a_1.has(s); });
    }
} }
function wn(e, u, t) { if (u.length === 0)
    return []; var _a = __read(qe(e), 2), r = _a[0], n = _a[1], a; if (r.length) {
    var s = kt(u, r, t);
    if (n.length === 0)
        return s;
    s.length && (a = new Set(s));
} for (var s = 0; s < n.length && (a == null ? void 0 : a.size) !== u.length; s++) {
    var l = n[s];
    if ((a ? u.filter(function (y) { return R(y) && !a.has(y); }) : u).length === 0)
        break;
    var p = U0(l, u, t);
    if (p.length)
        if (a)
            p.forEach(function (y) { return a.add(y); });
        else {
            if (s === n.length - 1)
                return p;
            a = new Set(p);
        }
} return typeof a != "undefined" ? a.size === u.length ? u : u.filter(function (s) { return a.has(s); }) : []; }
function U0(e, u, t) { var r; if (e.some(ku)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : L0(u[0]), a = Eu(cu({}, t), { context: u, relativeSelector: !1 });
    return e.push(xn), De(n, e, a, !0, u.length);
} return De(u, e, t, !1, u.length); }
function qt(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return M0(u, e);
    var _a = __read(qe(wu(e)), 2), n = _a[0], a = _a[1], s = a.map(function (l) { return De(u, l, t, !0, r); });
    return n.length && s.push(Nt(u, n, t, r)), s.length === 0 ? [] : s.length === 1 ? s[0] : lt(s.reduce(function (l, d) { return __spreadArray(__spreadArray([], __read(l), false), __read(d), false); }));
}
function De(e, u, t, r, n) { var a = u.findIndex(zu), s = u.slice(0, a), l = u[a], d = u.length - 1 === a ? n : 1 / 0, p = D0(l.name, l.data, d); if (p === 0)
    return []; var k = (s.length === 0 && !Array.isArray(e) ? ge(e).filter(R) : s.length === 0 ? (Array.isArray(e) ? e : [e]).filter(R) : r || s.some(ku) ? Nt(e, [s], t, p) : kt(e, [s], t)).slice(0, p), S = vn(l.name, k, l.data, t); if (S.length === 0 || u.length === a + 1)
    return S; var E = u.slice(a + 1), C = E.some(ku); if (C) {
    if (ku(E[0])) {
        var L = E[0].type;
        (L === T.Sibling || L === T.Adjacent) && (S = Ce(S, fu, !0)), E.unshift(mn);
    }
    t = Eu(cu({}, t), { relativeSelector: !1, rootFunc: function (L) { return S.includes(L); } });
}
else
    t.rootFunc && t.rootFunc !== Ie.trueFunc && (t = Eu(cu({}, t), { rootFunc: Ie.trueFunc })); return E.some(zu) ? De(S, E, t, !1, n) : C ? Nt(S, [E], t, n) : kt(S, [E], t); }
function Nt(e, u, t, r) { var n = ke(u, t, e); return M0(e, n, r); }
function M0(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = Ce(e, fu, u.shouldTestNextSiblings);
    return xe(function (n) { return R(n) && u(n); }, r, !0, t);
}
function kt(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(R); if (r.length === 0)
    return r; var n = ke(u, t); return n === Ie.trueFunc ? r : r.filter(n); }
function R0(e) { var u = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: u[1], auth: u[2], path: u[3] || "", query: u[4], frag: u[5] }; }
function It(e) { var u = [], t = e.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (u.length > 1 && u.pop(), r === t.length - 1 && u.push("")) : n === "." ? r === t.length - 1 && u.push("") : u.push(n);
} return u.join("/"); }
function Ue(e, u) { u = u == null ? "" : String(u).trim(); var t = R0(u); if (t.scheme || !e)
    return u; var r = R0(String(e)); if (!r.scheme)
    return u; var n = r.auth, a, s; if (t.auth !== void 0)
    n = t.auth, a = It(t.path), s = t.query;
else if (!t.path)
    a = r.path, s = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        a = It(t.path);
    else {
        var l = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        a = It(l + t.path);
    }
    s = t.query;
} return n !== void 0 && a.charAt(0) !== "/" && (a = "/" + a), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + a + (s !== void 0 ? "?" + s : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function O0(e) { if (typeof btoa == "function")
    return btoa(e); var u = ""; for (var t = 0; t < e.length; t += 3) {
    var r = e.charCodeAt(t), n = e.charCodeAt(t + 1), a = e.charCodeAt(t + 2), s = r << 16 | (n || 0) << 8 | (a || 0);
    u += Le[s >> 18 & 63] + Le[s >> 12 & 63] + (t + 1 < e.length ? Le[s >> 6 & 63] : "=") + (t + 2 < e.length ? Le[s & 63] : "=");
} return u; }
var Sn = function (e, u, t) { return qt(e, u, t); }, F0 = function (e, u, t) { return qt(e, u, t, 1)[0] || null; }, V0 = /[\s ]+/g, B0 = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), An = { containsOwn: function (e, u) { return Lt(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return P0(u).test(Dt(e)); }, matchesOwn: function (e, u) { return P0(u).test(Lt(e)); }, containsData: function (e, u) { return yu(e).includes(u); }, "contains-ci": function (e, u) { return Dt(e).toLowerCase().includes(String(u).toLowerCase()); } };
function P0(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var Me = { pseudos: An, xmlMode: !1, lowerCaseTags: !0 };
function Re(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Dt(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? u += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? u += " " : n.type === "tag" && (B0.has(n.name) && (u += " "), t(n), B0.has(n.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(V0, " ").trim(); }
function Lt(e) {
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
    return u.replace(V0, " ").trim();
}
function G0(e, u) { if (!u)
    return ""; try {
    return Ue(e, u);
}
catch (t) {
    return e ? "" : u;
} }
var qu = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return lu.of(Sn(Re(u), this.node, Me), this.doc); };
    e.prototype.selectFirst = function (u) { var t = F0(Re(u), this.node, Me); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return Ct(this.node, Re(u), Me); };
    e.prototype.text = function () { return Dt(this.node); };
    e.prototype.ownText = function () { return Lt(this.node); };
    e.prototype.wholeText = function () { return yu(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return u.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (u) { return Fu(u, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return Fu(this.node, { decodeEntities: !1 }); };
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
        return G0(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
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
        u.push(t), t = t.parent; return lu.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && Ct(t, Re(u), Me))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return lu.of((this.node.children || []).filter(R), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(R)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(R).length; };
    e.prototype.nextElementSibling = function () { var u = st(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = ct(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return lu.of(me(this.node).filter(function (u) { return u !== _this.node && R(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return me(this.node).filter(R).indexOf(this.node); };
    e.prototype.getElementsByTag = function (u) { return this.select(u); };
    e.prototype.getElementsByClass = function (u) { return this.select("." + u); };
    e.prototype.getElementById = function (u) { return this.selectFirst("#" + u); };
    e.prototype.remove = function () { return bu(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return ({ text: function () { return u.data; }, toString: function () { return u.data; } }); }); };
    e.prototype.title = function () { var u = this.selectFirst("title"); return u ? u.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Mt = Object.create(Array.prototype), lu = { of: Ut, prototype: Mt };
function Ut(e, u) {
    var e_13, _a;
    var t = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof qu ? r : new qu(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, Mt), t;
}
var H0 = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return lu.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
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
        var u = Ut([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), u.push(n));
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
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return lu.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = Ut([]);
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
    }, next: function () { return lu.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return lu.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(H0)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(Mt, e, { value: H0[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Oe(e, u) { var t = d0(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new qu(t, null); r.doc = r, r.__base = u || ""; var n = F0("base[href]", t); return n && n.attribs.href && (r.__base = G0(r.__base, n.attribs.href)), r; }
function j0(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Oe(e), n = function (a) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((a.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var s = _d.value;
            if (s.type === "script" || s.type === "style" || s.type === "comment") {
                bu(s);
                continue;
            }
            if (s.type === "tag" && (n(s), !t.has(s.name))) {
                var l = (s.children || []).slice();
                try {
                    for (var l_3 = (e_20 = void 0, __values(l)), l_3_1 = l_3.next(); !l_3_1.done; l_3_1 = l_3.next()) {
                        var d = l_3_1.value;
                        ot(s, d);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (l_3_1 && !l_3_1.done && (_b = l_3.return)) _b.call(l_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                bu(s);
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
}; return n(r.node), Fu(r.node.children, { decodeEntities: !1 }); }
var ae = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function En(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return O0(u); }
function z0(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
function Tn(e) { var u = ""; for (var t = 0; t < e.length; t++) {
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
var Rt = (function () {
    function Rt(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    Rt.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Rt.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return u || (u = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), u && /^(gbk|gb2312|gb18030)$/i.test(String(u)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Tn(t) : t; };
    Rt.prototype.string = function (u) { return this.text(u); };
    Rt.prototype.html = function (u) { return Oe(this.text(u), this.url); };
    Rt.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    Rt.prototype.base64 = function () { return En(this._raw.bytes || z0(this.text())); };
    Rt.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || z0(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return Rt;
}());
function Nn(e) {
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
function $0(e, u) { var t = function (s) { return ({ getItem: function (l) { var d = e.storageGet(s + l); return d == null ? null : d; }, setItem: function (l, d) { return e.storageSet(s + l, d == null ? null : String(d)); }, removeItem: function (l) { return e.storageSet(s + l, null); }, clear: function () { return e.storageClear && e.storageClear(s); } }); }, r = "__cookie__", n = {}; n.Response = { success: function (s, l) { return ({ code: 0, data: s === void 0 ? null : s, data2: l === void 0 ? null : l }); }, error: function (s) { return ({ code: 1, data: s == null ? "" : String(s) }); } }, n.fetch = function (l, d) {
    return __awaiter(this, void 0, void 0, function () { var p, L, y, k, S, L, E, C, L_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                d = d || {};
                p = String(l);
                if (d.queries) {
                    L = Object.entries(d.queries).map(function (_a) {
                        var _b = __read(_a, 2), Z = _b[0], _ = _b[1];
                        return encodeURIComponent(Z) + "=" + encodeURIComponent(_);
                    }).join("&");
                    L && (p += (p.includes("?") ? "&" : "?") + L);
                }
                y = Object.assign({ "User-Agent": ae }, Nn(d.headers)), k = e.storageGet(r);
                k && !Object.keys(y).some(function (L) { return L.toLowerCase() === "cookie"; }) && (y.Cookie = k);
                S = d.body;
                if (S != null && typeof S == "object") {
                    L = Object.keys(y).find(function (Z) { return Z.toLowerCase() === "content-type"; });
                    L && /json/i.test(y[L]) ? S = JSON.stringify(S) : (S = Object.entries(S).map(function (_a) {
                        var _b = __read(_a, 2), Z = _b[0], _ = _b[1];
                        return encodeURIComponent(Z) + "=" + encodeURIComponent(_);
                    }).join("&"), L || (y["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                E = { url: p, method: (d.method || (S != null ? "POST" : "GET")).toUpperCase(), headers: y, body: S, timeout: d.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(E)];
            case 2:
                C = _a.sent();
                return [3, 4];
            case 3:
                L_1 = _a.sent();
                C = { status: 0, url: p, headers: {}, text: "", error: String(L_1 && L_1.message || L_1) };
                return [3, 4];
            case 4: return [2, new Rt(C, E)];
        }
    }); });
}, n.Http = { get: function (s) { return W0(n, "GET", s); }, post: function (s) { return W0(n, "POST", s); } }, n.Html = { parse: function (s, l) { return Oe(s, l || ""); }, clean: function (s, l) { return j0(s, l); } }, n.localStorage = t("ls:"), n.cacheStorage = t("cs:"), n.resumeStorage = { get: function (s) { try {
        var l = e.storageGet("resume:" + s);
        return l && parseFloat(l) || 0;
    }
    catch (d) {
        return 0;
    } }, set: function (s, l) { try {
        e.storageSet("resume:" + s, String(Math.max(0, l || 0)));
    }
    catch (d) { } } }, n.localConfig = { getItem: function (s) { return e.config(s); } }, n.localCookie = { setCookie: function (s) { e.storageSet(r, String(s).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, n.sleep = function (s) { return new Promise(function (l) { return typeof setTimeout == "function" ? setTimeout(l, Math.min(Number(s) || 0, 1e4)) : l(); }); }; var a = function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    try {
        e.log && e.log(s.map(function (l) { return typeof l == "string" ? l : JSON.stringify(l); }).join(" "));
    }
    catch (l) { }
}; return n.Log = { log: a }, n.console = { log: a, error: a, warn: a, info: a }, n.Console = n.console, n.log = a, n.UserAgent = { system: function () { return ae; }, chrome: function () { return ae; }, android: function () { return ae; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = lu, n.Element = qu, n.__meta = u, n; }
function W0(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (a) { return Object.assign(r.headers, a || {}), n; }, header: function (a, s) { return r.headers[a] = s, n; }, params: function (a) { return r.queries = a, n; }, queries: function (a) { return r.queries = a, n; }, body: function (a) { return r.body = a, n; }, html: function (a) {
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
    } }; return n; }
function Iu(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof __abs == "function")
    return __abs(e, u); try {
    return Ue(e, u);
}
catch (t) {
    return u;
} }
var B = function (e) { return e == null ? "" : String(e); }, kn = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, Be = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, n = u.host;
        this.meta = t, this.host = n, this.env = u.env || $0(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return B(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
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
            var r, n, a, s;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        n = function (l) { var d = _this.host.config(l); return d == null ? (_this.meta.configDefaults || {})[l] : d; };
                        return [4, r(this.env, n)];
                    case 1:
                        a = _a.sent();
                        if (typeof a != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, a.apply(void 0, __spreadArray([], __read(t.map(B)), false))];
                    case 2:
                        s = _a.sent();
                        if (!s)
                            throw new Error(u + ": empty result");
                        if (s.code !== 0)
                            throw new Error(u + ": " + B(s.data || "error"));
                        return [2, s];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return B(u).replace(/\.js$/, ""); };
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
            var n, a, s, l, d;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = u + "|" + t;
                        r = Math.max(1, r | 0);
                        a = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && a == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, a)];
                    case 1:
                        s = _a.sent(), l = B(s.data2);
                        l && (this.tokens[n + "|" + (r + 1)] = l);
                        d = (s.data || []).filter(Boolean).map(function (p) { return ({ name: B(p.name).trim(), link: Iu(p.host || _this.base + "/", p.link), cover: Iu(p.host || _this.base + "/", p.cover), description: B(p.description), tag: B(p.tag) }); }).filter(function (p) { return p.name && p.link; });
                        return [2, { items: d, hasNext: !!l && d.length > 0 }];
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
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), B(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), B(r.input), u) : this.search("", u)];
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
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: B(t.name).trim(), cover: Iu(t.host || this.base + "/", t.cover), author: B(t.author).trim(), description: X0(B(t.description)), detail: X0(B(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: kn(r.map(function (n) { return String(n).trim(); })), url: u, format: B(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_22_1, _c;
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
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", B(n))];
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
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: B(r.name).trim() || "#" + (n + 1), url: Iu(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, n;
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
                    case 6:
                        _a, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (a) { return !a || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(a)); }, n = function (a) { if (typeof a == "string")
                            return a; if (!a)
                            return ""; var s = a.link || a.url || a.data, l = Array.isArray(a.fallback) ? a.fallback.filter(Boolean) : []; return r(s) && l.length ? l[0] : s; };
                        return [2, (t || []).map(function (a) { return Iu(_this.base + "/", n(a)); }).filter(Boolean)];
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
                    return [2, { html: B(t.data), title: B(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, a, r, n, t_3, t_3_1, a, s, l, l_4, l_4_1, d, p, y, k, s_2, e_23_1;
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
                        Array.isArray(a) && a.length && (t = a.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: B(s.title || s.name || "Server"), data: B(s.data || s.url || s.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = this.env && this.env.resumeStorage ? this.env.resumeStorage.get(u) : 0, n = [];
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
                        s = (_c.sent()).data || {}, l = Array.isArray(s) ? s : [s];
                        try {
                            for (l_4 = (e_24 = void 0, __values(l)), l_4_1 = l_4.next(); !l_4_1.done; l_4_1 = l_4.next()) {
                                d = l_4_1.value;
                                if (!d || !d.data || d.type === "webview")
                                    continue;
                                p = Iu(d.host || this.base + "/", d.data), y = r > 0 && !d.data.includes("#t=") && !d.data.includes("&t=") ? (d.data.includes("#") ? "&" : "#") + "t=" + Math.floor(r) : "", k = r > 0 ? " [Tiếp tục " + Math.floor(r / 60) + ":" + ("0" + Math.floor(r % 60)).slice(-2) + "]" : "";
                                n.push({ url: p + y, rawUrl: p, resumeSec: r, quality: a.title + (d.quality ? " " + d.quality : "") + k, headers: d.headers || { Referer: this.base + "/" }, subtitles: (d.subtitles || (d.subtitle ? [{ data: d.subtitle, label: "Sub" }] : [])).map(function (S) { return ({ file: Iu(_this.base + "/", S.data || S.file), label: B(S.label || S.language || "Sub") }); }), mimeType: B(d.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (l_4_1 && !l_4_1.done && (_b = l_4.return)) _b.call(l_4);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _c.sent();
                        this.host.log && this.host.log("track " + a.title + ": " + s_2.message);
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
                    case 12: return [2, n];
                }
            });
        });
    };
    return class_1;
}());
function X0(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var gu = { id: "07br", name: "07br", source: "https://www.bqg603.cc", type: "novel", locale: "zh-CN", nsfw: !1, version: 2, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://www.bqg603.cc", values: ["https://www.bqg603.cc", "https://www.bqg128.xyz"], mode: "select", format: "single" } }, configDefaults: { DOMAIN: "https://www.bqg603.cc" }, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.07br", lnIcon: "", lnVersion: "1.3.2" }, J0 = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $() {
                                            return __awaiter(this, void 0, void 0, function () { var h; return __generator(this, function (_a) {
                                                h = [["热门", "index"], ["玄幻", "xuanhuan"], ["武侠", "wuxia"], ["都市", "dushi"], ["历史", "lishi"], ["网游", "wangyou"], ["科幻", "kehuan"], ["女生", "mm"], ["完本", "finish"], ["排行榜", "top"]];
                                                return [2, a.success(h.map(function (m) { return { title: m[0], input: m[1], script: "browse.js" }; }))];
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, iu("/api/search?q=" + encodeURIComponent(h || ""))];
                                                    case 1:
                                                        m = _a.sent();
                                                        return [2, a.success((m.data || []).map(mu), null)];
                                                }
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m, U, H; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        m = Au(h);
                                                        return [4, iu("/api/book?id=" + m)];
                                                    case 1:
                                                        U = _a.sent(), H = /完/.test(U.full || "");
                                                        return [2, a.success({ name: U.title, cover: eu(m), author: String(U.author || "").trim(), description: String(U.intro || "").trim().replace(/\n/g, "<br>"), detail: (U.sortname ? "分类: " + U.sortname + "<br>" : "") + "状态: " + (U.full || "") + (U.lastchapter ? "<br>最新: " + U.lastchapter : ""), ongoing: !H, genres: [], host: q })];
                                                }
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m, U; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        m = Au(h);
                                                        return [4, iu("/api/booklist?id=" + m)];
                                                    case 1:
                                                        U = _a.sent();
                                                        return [2, a.success((U.list || []).map(function (H, M) { return { name: H, url: q + "/#/book/" + m + "/" + (M + 1) + ".html", host: q }; }))];
                                                }
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m, U, H, M; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        m = /book\/(\d+)\/(\d+)/.exec(h);
                                                        if (!m)
                                                            return [2, a.error("URL chương không hợp lệ: " + h)];
                                                        return [4, iu("/api/chapter?token=" + Du({ id: parseInt(m[1], 10), chapterid: parseInt(m[2], 10) }))];
                                                    case 1:
                                                        U = _a.sent(), H = String(U.txt || "");
                                                        if (!H)
                                                            return [2, a.error("Không có nội dung chương")];
                                                        M = H.split(/\n+/).map(function (j) { return j.trim(); }).filter(Boolean).map(function (j) { return "<p>" + j.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</p>"; }).join("");
                                                        return [2, a.success(M, U.chaptername)];
                                                }
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, browse: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, a, s, l, d, p, y, k, S, E, C, L, Z, _, du) {
                    return __awaiter(this, void 0, void 0, function () { var V; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                V = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function iu(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(P + h, { headers: { Accept: "application/json", Referer: q + "/" } })];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            throw new Error("HTTP " + m.status + " " + P + h);
                                                        return [2, m.json()];
                                                }
                                            }); });
                                        } function eu(h) { return q + "/bookimg/" + Math.floor(h / 1e3) + "/" + h + ".jpg"; } function mu(h) { return { name: h.title, link: q + "/#/book/" + h.id + "/", cover: eu(h.id), description: String(h.author || "").trim(), host: q }; } function Au(h) { var m = /book\/(\d+)/.exec(h); return m ? m[1] : String(h).replace(/\D/g, ""); } function Du(h) { return encodeURIComponent(su(JSON.stringify(h), G, au)); } function $(h) {
                                            return __awaiter(this, void 0, void 0, function () { var m, U, H, M; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        m = h || "index";
                                                        if (!(m === "index")) return [3, 2];
                                                        return [4, iu("/api/index?sort=index")];
                                                    case 1:
                                                        U = _a.sent();
                                                        H = {}, M = [];
                                                        return [2, (Object.keys(U).forEach(function (j) { (Array.isArray(U[j]) ? U[j] : []).forEach(function (i) { i && i.id && !H[i.id] && (H[i.id] = 1, M.push(mu(i))); }); }), a.success(M, null))];
                                                    case 2: return [4, iu("/api/sort?sort=" + encodeURIComponent(m))];
                                                    case 3: return [2, (U = _a.sent(), a.success((U.data || []).map(mu), null))];
                                                }
                                            }); });
                                        } var q, P, G, au, su; return __generator(this, function (_a) {
                                            q = "https://www.bqg603.cc";
                                            try {
                                                V && (q = String(V).replace(/\/+$/, ""));
                                            }
                                            catch (h) { }
                                            P = "https://apibi.cc", G = "a3dc22cf70418a51", au = "394c2c3202da6270";
                                            su = (function () { var h = [], m = []; (function () { var i = [], o, b = 0, c = 0; for (o = 0; o < 256; o++)
                                                i[o] = o < 128 ? o << 1 : o << 1 ^ 283; for (o = 0; o < 256; o++) {
                                                var f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                                                if (f = f >>> 8 ^ f & 255 ^ 99, h[b] = f, !b)
                                                    b = c = 1;
                                                else {
                                                    var g = i[b], A = i[i[g]];
                                                    b = g ^ i[i[i[A ^ g]]], c ^= i[i[c]];
                                                }
                                            } for (o = 0; o < 256; o++)
                                                m[o] = i[o]; })(); function U(i) { for (var o = i.slice(), b = 1, c = 16; c < 176; c += 4) {
                                                var f = o.slice(c - 4, c);
                                                c % 16 === 0 && (f = [h[f[1]] ^ b, h[f[2]], h[f[3]], h[f[0]]], b = m[b]);
                                                for (var g = 0; g < 4; g++)
                                                    o[c + g] = o[c - 16 + g] ^ f[g];
                                            } return o; } function H(i, o) { var b, c, f; for (c = 0; c < 16; c++)
                                                i[c] ^= o[c]; for (b = 1; b <= 10; b++) {
                                                for (c = 0; c < 16; c++)
                                                    i[c] = h[i[c]];
                                                if (i = [i[0], i[5], i[10], i[15], i[4], i[9], i[14], i[3], i[8], i[13], i[2], i[7], i[12], i[1], i[6], i[11]], b < 10)
                                                    for (f = 0; f < 16; f += 4) {
                                                        var g = i[f], A = i[f + 1], I = i[f + 2], v = i[f + 3], w = g ^ A ^ I ^ v;
                                                        i[f] ^= w ^ m[g ^ A], i[f + 1] ^= w ^ m[A ^ I], i[f + 2] ^= w ^ m[I ^ v], i[f + 3] ^= w ^ m[v ^ g];
                                                    }
                                                for (c = 0; c < 16; c++)
                                                    i[c] ^= o[b * 16 + c];
                                            } return i; } function M(i) { for (var o = unescape(encodeURIComponent(i)), b = [], c = 0; c < o.length; c++)
                                                b.push(o.charCodeAt(c)); return b; } function j(i) { for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", c = 0; c < i.length; c += 3) {
                                                var f = i[c] << 16 | (i[c + 1] || 0) << 8 | (i[c + 2] || 0);
                                                b += o.charAt(f >> 18 & 63) + o.charAt(f >> 12 & 63) + (c + 1 < i.length ? o.charAt(f >> 6 & 63) : "=") + (c + 2 < i.length ? o.charAt(f & 63) : "=");
                                            } return b; } return function (i, o, b) { var c = U(M(o)), f = M(i), g = M(b), A = [], I = 16 - f.length % 16, v, w; for (v = 0; v < I; v++)
                                                f.push(I); for (v = 0; v < f.length; v += 16) {
                                                var X = [];
                                                for (w = 0; w < 16; w++)
                                                    X[w] = f[v + w] ^ g[w];
                                                g = H(X, c), A = A.concat(g);
                                            } return j(A); }; })();
                                            return [2, typeof $ == "function" ? $ : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function Q0(e) { return new Be({ meta: gu, scripts: J0, host: e }); }
var Cn = require("@libs/fetch").fetchApi, ie = null;
try {
    ie = require("@libs/storage");
}
catch (e) {
    ie = null;
}
var Ot = {}, Pe = ie && ie.storage ? ie.storage : { get: function (e) { return Ot[e]; }, set: function (e, u) { Ot[e] = u; }, delete: function (e) { delete Ot[e]; } }, Bt = (function () {
    function class_2() {
        var _this = this;
        this.id = gu.lnId, this.name = gu.name, this.icon = gu.lnIcon, this.site = gu.source, this.version = gu.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Q0({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, Cn(u.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (a, s) { n[s] = a; });
                            }
                            catch (a) { }
                            _a = { status: r.status, url: r.url || u.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (u) { var t = Pe.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? Pe.delete && Pe.delete("vb_" + u) : Pe.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
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
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
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
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, a) { return ({ name: n.name, path: n.url, chapterNumber: a + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : gu.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), qn = new Bt;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
