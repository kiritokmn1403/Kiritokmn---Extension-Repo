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
var Rr = Object.create;
var _e = Object.defineProperty, Hr = Object.defineProperties, jr = Object.getOwnPropertyDescriptor, zr = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertyNames, Cu = Object.getOwnPropertySymbols, $r = Object.getPrototypeOf, Du = Object.prototype.hasOwnProperty, Wr = Object.prototype.propertyIsEnumerable;
var Lu = function (t, e, u) { return e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : t[e] = u; }, ue = function (t, e) {
    var e_2, _b;
    for (var u in e || (e = {}))
        Du.call(e, u) && Lu(t, u, e[u]);
    if (Cu)
        try {
            for (var _c = __values(Cu(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Wr.call(e, u) && Lu(t, u, e[u]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return t;
}, ge = function (t, e) { return Hr(t, zr(e)); };
var Xr = function (t, e) { return function () { return (e || t((e = { exports: {} }).exports, e), e.exports); }; }, Lt = function (t, e) { for (var u in e)
    _e(t, u, { get: e[u], enumerable: !0 }); }, Iu = function (t, e, u, a) {
    var e_3, _b;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (n) {
            !Du.call(t, n) && n !== u && _e(t, n, { get: function () { return e[n]; }, enumerable: !(a = jr(e, n)) || a.enumerable });
        };
        try {
            for (var _c = __values(Gr(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
    return t;
};
var me = function (t, e, u) { return (u = t != null ? Rr($r(t)) : {}, Iu(e || !t || !t.__esModule ? _e(u, "default", { value: t, enumerable: !0 }) : u, t)); }, Jr = function (t) { return Iu(_e({}, "__esModule", { value: !0 }), t); };
var pe = Xr(function (Ji, sr) { sr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var v0 = {};
Lt(v0, { default: function () { return w0; } });
module.exports = Jr(v0);
var Ze = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (t) { return t.charCodeAt(0); }));
var Ke = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (t) { return t.charCodeAt(0); }));
var Dt, Qr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Ae = (Dt = String.fromCodePoint) !== null && Dt !== void 0 ? Dt : function (t) { var e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function It(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = Qr.get(t)) !== null && e !== void 0 ? e : t; }
var j;
(function (t) { t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"; })(j || (j = {}));
var Zr = 32, le;
(function (t) { t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"; })(le || (le = {}));
function Ot(t) { return t >= j.ZERO && t <= j.NINE; }
function Kr(t) { return t >= j.UPPER_A && t <= j.UPPER_F || t >= j.LOWER_A && t <= j.LOWER_F; }
function Yr(t) { return t >= j.UPPER_A && t <= j.UPPER_Z || t >= j.LOWER_A && t <= j.LOWER_Z || Ot(t); }
function ea(t) { return t === j.EQUALS || Yr(t); }
var H;
(function (t) { t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"; })(H || (H = {}));
var K;
(function (t) { t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"; })(K || (K = {}));
var Ee = (function () {
    function Ee(e, u, a) {
        this.decodeTree = e, this.emitCodePoint = u, this.errors = a, this.state = H.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = K.Strict;
    }
    Ee.prototype.startEntity = function (e) { this.decodeMode = e, this.state = H.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Ee.prototype.write = function (e, u) { switch (this.state) {
        case H.EntityStart: return e.charCodeAt(u) === j.NUM ? (this.state = H.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = H.NamedEntity, this.stateNamedEntity(e, u));
        case H.NumericStart: return this.stateNumericStart(e, u);
        case H.NumericDecimal: return this.stateNumericDecimal(e, u);
        case H.NumericHex: return this.stateNumericHex(e, u);
        case H.NamedEntity: return this.stateNamedEntity(e, u);
    } };
    Ee.prototype.stateNumericStart = function (e, u) { return u >= e.length ? -1 : (e.charCodeAt(u) | Zr) === j.LOWER_X ? (this.state = H.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = H.NumericDecimal, this.stateNumericDecimal(e, u)); };
    Ee.prototype.addToNumericResult = function (e, u, a, n) { if (u !== a) {
        var s = a - u;
        this.result = this.result * Math.pow(n, s) + parseInt(e.substr(u, s), n), this.consumed += s;
    } };
    Ee.prototype.stateNumericHex = function (e, u) { var a = u; for (; u < e.length;) {
        var n = e.charCodeAt(u);
        if (Ot(n) || Kr(n))
            u += 1;
        else
            return this.addToNumericResult(e, a, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, a, u, 16), -1; };
    Ee.prototype.stateNumericDecimal = function (e, u) { var a = u; for (; u < e.length;) {
        var n = e.charCodeAt(u);
        if (Ot(n))
            u += 1;
        else
            return this.addToNumericResult(e, a, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, a, u, 10), -1; };
    Ee.prototype.emitNumericEntity = function (e, u) { var a; if (this.consumed <= u)
        return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === j.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === K.Strict)
        return 0; return this.emitCodePoint(It(this.result), this.consumed), this.errors && (e !== j.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Ee.prototype.stateNamedEntity = function (e, u) { var a = this.decodeTree, n = a[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14; for (; u < e.length; u++, this.excess++) {
        var h = e.charCodeAt(u);
        if (this.treeIndex = ta(a, n, this.treeIndex + Math.max(1, s), h), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === K.Attribute && (s === 0 || ea(h)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = a[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14, s !== 0) {
            if (h === j.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== K.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Ee.prototype.emitNotTerminatedNamedEntity = function () { var e; var _b = this, u = _b.result, a = _b.decodeTree, n = (a[u] & le.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Ee.prototype.emitNamedEntityData = function (e, u, a) { var n = this.decodeTree; return this.emitCodePoint(u === 1 ? n[e] & ~le.VALUE_LENGTH : n[e + 1], a), u === 3 && this.emitCodePoint(n[e + 2], a), a; };
    Ee.prototype.end = function () { var e; switch (this.state) {
        case H.NamedEntity: return this.result !== 0 && (this.decodeMode !== K.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case H.NumericDecimal: return this.emitNumericEntity(0, 2);
        case H.NumericHex: return this.emitNumericEntity(0, 3);
        case H.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case H.EntityStart: return 0;
    } };
    return Ee;
}());
function Ou(t) { var e = "", u = new Ee(t, function (a) { return e += Ae(a); }); return function (n, s) { var h = 0, b = 0; for (; (b = n.indexOf("&", b)) >= 0;) {
    e += n.slice(h, b), u.startEntity(s);
    var x = u.write(n, b + 1);
    if (x < 0) {
        h = b + u.end();
        break;
    }
    h = b + x, b = x === 0 ? h + 1 : h;
} var g = e + n.slice(h); return e = "", g; }; }
function ta(t, e, u, a) { var n = (e & le.BRANCH_LENGTH) >> 7, s = e & le.JUMP_TABLE; if (n === 0)
    return s !== 0 && a === s ? u : -1; if (s) {
    var g = a - s;
    return g < 0 || g >= n ? -1 : t[u + g] - 1;
} var h = u, b = h + n - 1; for (; h <= b;) {
    var g = h + b >>> 1, x = t[g];
    if (x < a)
        h = g + 1;
    else if (x > a)
        b = g - 1;
    else
        return t[g + n];
} return -1; }
var C0 = Ou(Ze), L0 = Ou(Ke);
var L;
(function (t) { t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(L || (L = {}));
var S;
(function (t) { t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity"; })(S || (S = {}));
function se(t) { return t === L.Space || t === L.NewLine || t === L.Tab || t === L.FormFeed || t === L.CarriageReturn; }
function Ye(t) { return t === L.Slash || t === L.Gt || se(t); }
function ua(t) { return t >= L.LowerA && t <= L.LowerZ || t >= L.UpperA && t <= L.UpperZ; }
var Y;
(function (t) { t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"; })(Y || (Y = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Te = (function () {
    function Te(_b, a) {
        var _c = _b.xmlMode, e = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = a, this.state = S.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = S.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = u, this.entityDecoder = new Ee(e ? Ke : Ze, function (n, s) { return _this.emitCodePoint(n, s); });
    }
    Te.prototype.reset = function () { this.state = S.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = S.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Te.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Te.prototype.end = function () { this.running && this.finish(); };
    Te.prototype.pause = function () { this.running = !1; };
    Te.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Te.prototype.stateText = function (e) { e === L.Lt || !this.decodeEntities && this.fastForwardTo(L.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = S.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === L.Amp && this.startEntity(); };
    Te.prototype.stateSpecialStartSequence = function (e) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? Ye(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = S.InTagName, this.stateInTagName(e); };
    Te.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === L.Gt || se(e)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var a = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = a;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && e === L.Amp && this.startEntity() : this.fastForwardTo(L.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === L.Lt); };
    Te.prototype.stateCDATASequence = function (e) { e === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = S.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = S.InDeclaration, this.stateInDeclaration(e)); };
    Te.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Te.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = S.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Te.prototype.isTagStartChar = function (e) { return this.xmlMode ? !Ye(e) : ua(e); };
    Te.prototype.startSpecial = function (e, u) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = S.SpecialStartSequence; };
    Te.prototype.stateBeforeTagName = function (e) { if (e === L.ExclamationMark)
        this.state = S.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === L.Questionmark)
        this.state = S.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var u = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = S.InTagName : u === $.ScriptEnd[2] ? this.state = S.BeforeSpecialS : u === $.TitleEnd[2] ? this.state = S.BeforeSpecialT : this.state = S.InTagName;
    }
    else
        e === L.Slash ? this.state = S.BeforeClosingTagName : (this.state = S.Text, this.stateText(e)); };
    Te.prototype.stateInTagName = function (e) { Ye(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateBeforeClosingTagName = function (e) { se(e) || (e === L.Gt ? this.state = S.Text : (this.state = this.isTagStartChar(e) ? S.InClosingTagName : S.InSpecialComment, this.sectionStart = this.index)); };
    Te.prototype.stateInClosingTagName = function (e) { (e === L.Gt || se(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = S.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Te.prototype.stateAfterClosingTagName = function (e) { (e === L.Gt || this.fastForwardTo(L.Gt)) && (this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeAttributeName = function (e) { e === L.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = S.InSpecialTag, this.sequenceIndex = 0) : this.state = S.Text, this.sectionStart = this.index + 1) : e === L.Slash ? this.state = S.InSelfClosingTag : se(e) || (this.state = S.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateInSelfClosingTag = function (e) { e === L.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = S.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : se(e) || (this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateInAttributeName = function (e) { (e === L.Eq || Ye(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = S.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Te.prototype.stateAfterAttributeName = function (e) { e === L.Eq ? this.state = S.BeforeAttributeValue : e === L.Slash || e === L.Gt ? (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.sectionStart = -1, this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(e)) : se(e) || (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.state = S.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateBeforeAttributeValue = function (e) { e === L.DoubleQuote ? (this.state = S.InAttributeValueDq, this.sectionStart = this.index + 1) : e === L.SingleQuote ? (this.state = S.InAttributeValueSq, this.sectionStart = this.index + 1) : se(e) || (this.sectionStart = this.index, this.state = S.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Te.prototype.handleInAttributeValue = function (e, u) { e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === L.DoubleQuote ? Y.Double : Y.Single, this.index + 1), this.state = S.BeforeAttributeName) : this.decodeEntities && e === L.Amp && this.startEntity(); };
    Te.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, L.DoubleQuote); };
    Te.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, L.SingleQuote); };
    Te.prototype.stateInAttributeValueNoQuotes = function (e) { se(e) || e === L.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y.Unquoted, this.index), this.state = S.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === L.Amp && this.startEntity(); };
    Te.prototype.stateBeforeDeclaration = function (e) { e === L.OpeningSquareBracket ? (this.state = S.CDATASequence, this.sequenceIndex = 0) : this.state = e === L.Dash ? S.BeforeComment : S.InDeclaration; };
    Te.prototype.stateInDeclaration = function (e) { (e === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateInProcessingInstruction = function (e) { (e === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeComment = function (e) { e === L.Dash ? (this.state = S.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = S.InDeclaration; };
    Te.prototype.stateInSpecialComment = function (e) { (e === L.Gt || this.fastForwardTo(L.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = S.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeSpecialS = function (e) { var u = e | 32; u === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : u === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = S.InTagName, this.stateInTagName(e)); };
    Te.prototype.stateBeforeSpecialT = function (e) { var u = e | 32; u === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : u === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = S.InTagName, this.stateInTagName(e)); };
    Te.prototype.startEntity = function () { this.baseState = this.state, this.state = S.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? K.Strict : this.baseState === S.Text || this.baseState === S.InSpecialTag ? K.Legacy : K.Attribute); };
    Te.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Te.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === S.Text || this.state === S.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === S.InAttributeValueDq || this.state === S.InAttributeValueSq || this.state === S.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Te.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Te.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case S.Text: {
                this.stateText(e);
                break;
            }
            case S.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case S.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case S.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case S.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case S.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case S.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case S.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case S.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case S.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case S.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case S.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case S.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case S.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case S.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case S.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case S.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case S.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case S.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case S.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case S.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case S.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case S.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case S.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case S.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case S.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Te.prototype.finish = function () { this.state === S.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Te.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === S.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === S.InTagName || this.state === S.BeforeAttributeName || this.state === S.BeforeAttributeValue || this.state === S.AfterAttributeName || this.state === S.InAttributeName || this.state === S.InAttributeValueSq || this.state === S.InAttributeValueDq || this.state === S.InAttributeValueNq || this.state === S.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Te.prototype.emitCodePoint = function (e, u) { this.baseState !== S.Text && this.baseState !== S.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Te;
}());
var ke = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), _ = new Set(["p"]), Uu = new Set(["thead", "tbody"]), Mu = new Set(["dd", "dt"]), _u = new Set(["rt", "rp"]), ra = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", _], ["h1", _], ["h2", _], ["h3", _], ["h4", _], ["h5", _], ["h6", _], ["select", ke], ["input", ke], ["output", ke], ["button", ke], ["datalist", ke], ["textarea", ke], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Mu], ["dt", Mu], ["address", _], ["article", _], ["aside", _], ["blockquote", _], ["details", _], ["div", _], ["dl", _], ["fieldset", _], ["figcaption", _], ["figure", _], ["footer", _], ["form", _], ["header", _], ["hr", _], ["main", _], ["nav", _], ["ol", _], ["pre", _], ["section", _], ["table", _], ["ul", _], ["rt", _u], ["rp", _u], ["tbody", Uu], ["tfoot", Uu]]), aa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Pu = new Set(["math", "svg"]), Bu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), ia = /\s|\//, Pe = (function () {
    function Pe(e, u) {
        if (u === void 0) { u = {}; }
        var a, n, s, h, b, g;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (a = u.lowerCaseTags) !== null && a !== void 0 ? a : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((h = u.Tokenizer) !== null && h !== void 0 ? h : Te)(this.options, this), this.foreignContext = [!this.htmlMode], (g = (b = this.cbs).onparserinit) === null || g === void 0 || g.call(b, this);
    }
    Pe.prototype.ontext = function (e, u) { var a, n; var s = this.getSlice(e, u); this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, s), this.startIndex = u; };
    Pe.prototype.ontextentity = function (e, u) { var a, n; this.endIndex = u - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, Ae(e)), this.startIndex = u; };
    Pe.prototype.isVoidElement = function (e) { return this.htmlMode && aa.has(e); };
    Pe.prototype.onopentagname = function (e, u) { this.endIndex = u; var a = this.getSlice(e, u); this.lowerCaseTagNames && (a = a.toLowerCase()), this.emitOpenTag(a); };
    Pe.prototype.emitOpenTag = function (e) { var u, a, n, s; this.openTagStart = this.startIndex, this.tagname = e; var h = this.htmlMode && ra.get(e); if (h)
        for (; this.stack.length > 0 && h.has(this.stack[0]);) {
            var b = this.stack.shift();
            (a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, b, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Pu.has(e) ? this.foreignContext.unshift(!0) : Bu.has(e) && this.foreignContext.unshift(!1))), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, e), this.cbs.onopentag && (this.attribs = {}); };
    Pe.prototype.endOpenTag = function (e) { var u, a; this.startIndex = this.openTagStart, this.attribs && ((a = (u = this.cbs).onopentag) === null || a === void 0 || a.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Pe.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Pe.prototype.onclosetag = function (e, u) { var a, n, s, h, b, g, x, A; this.endIndex = u; var D = this.getSlice(e, u); if (this.lowerCaseTagNames && (D = D.toLowerCase()), this.htmlMode && (Pu.has(D) || Bu.has(D)) && this.foreignContext.shift(), this.isVoidElement(D))
        this.htmlMode && D === "br" && ((h = (s = this.cbs).onopentagname) === null || h === void 0 || h.call(s, "br"), (g = (b = this.cbs).onopentag) === null || g === void 0 || g.call(b, "br", {}, !0), (A = (x = this.cbs).onclosetag) === null || A === void 0 || A.call(x, "br", !1));
    else {
        var q = this.stack.indexOf(D);
        if (q !== -1)
            for (var N = 0; N <= q; N++) {
                var I = this.stack.shift();
                (n = (a = this.cbs).onclosetag) === null || n === void 0 || n.call(a, I, N !== q);
            }
        else
            this.htmlMode && D === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Pe.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Pe.prototype.closeCurrentTag = function (e) { var u, a; var n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((a = (u = this.cbs).onclosetag) === null || a === void 0 || a.call(u, n, !e), this.stack.shift()); };
    Pe.prototype.onattribname = function (e, u) { this.startIndex = e; var a = this.getSlice(e, u); this.attribname = this.lowerCaseAttributeNames ? a.toLowerCase() : a; };
    Pe.prototype.onattribdata = function (e, u) { this.attribvalue += this.getSlice(e, u); };
    Pe.prototype.onattribentity = function (e) { this.attribvalue += Ae(e); };
    Pe.prototype.onattribend = function (e, u) { var a, n; this.endIndex = u, (n = (a = this.cbs).onattribute) === null || n === void 0 || n.call(a, this.attribname, this.attribvalue, e === Y.Double ? '"' : e === Y.Single ? "'" : e === Y.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Pe.prototype.getInstructionName = function (e) { var u = e.search(ia), a = u < 0 ? e : e.substr(0, u); return this.lowerCaseTagNames && (a = a.toLowerCase()), a; };
    Pe.prototype.ondeclaration = function (e, u) { this.endIndex = u; var a = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(a));
    } this.startIndex = u + 1; };
    Pe.prototype.onprocessinginstruction = function (e, u) { this.endIndex = u; var a = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(a);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(a));
    } this.startIndex = u + 1; };
    Pe.prototype.oncomment = function (e, u, a) { var n, s, h, b; this.endIndex = u, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(e, u - a)), (b = (h = this.cbs).oncommentend) === null || b === void 0 || b.call(h), this.startIndex = u + 1; };
    Pe.prototype.oncdata = function (e, u, a) { var n, s, h, b, g, x, A, D, q, N; this.endIndex = u; var I = this.getSlice(e, u - a); !this.htmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (b = (h = this.cbs).ontext) === null || b === void 0 || b.call(h, I), (x = (g = this.cbs).oncdataend) === null || x === void 0 || x.call(g)) : ((D = (A = this.cbs).oncomment) === null || D === void 0 || D.call(A, "[CDATA[".concat(I, "]]")), (N = (q = this.cbs).oncommentend) === null || N === void 0 || N.call(q)), this.startIndex = u + 1; };
    Pe.prototype.onend = function () { var e, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var a = 0; a < this.stack.length; a++)
            this.cbs.onclosetag(this.stack[a], !0);
    } (u = (e = this.cbs).onend) === null || u === void 0 || u.call(e); };
    Pe.prototype.reset = function () { var e, u, a, n; (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (a = this.cbs).onparserinit) === null || n === void 0 || n.call(a, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Pe.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Pe.prototype.getSlice = function (e, u) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var a = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), a += this.buffers[0].slice(0, u - this.bufferOffset); return a; };
    Pe.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Pe.prototype.write = function (e) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Pe.prototype.end = function (e) { var u, a; if (this.ended) {
        (a = (u = this.cbs).onerror) === null || a === void 0 || a.call(u, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Pe.prototype.pause = function () { this.tokenizer.pause(); };
    Pe.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Pe.prototype.parseChunk = function (e) { this.write(e); };
    Pe.prototype.done = function (e) { this.end(e); };
    return Pe;
}());
var et = {};
Lt(et, { CDATA: function () { return Ht; }, Comment: function () { return Bt; }, Directive: function () { return Pt; }, Doctype: function () { return jt; }, ElementType: function () { return O; }, Root: function () { return Mt; }, Script: function () { return Ft; }, Style: function () { return Vt; }, Tag: function () { return Rt; }, Text: function () { return _t; }, isTag: function () { return Ut; } });
var O;
(function (t) { t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"; })(O || (O = {}));
function Ut(t) { return t.type === O.Tag || t.type === O.Script || t.type === O.Style; }
var Mt = O.Root, _t = O.Text, Pt = O.Directive, Bt = O.Comment, Ft = O.Script, Vt = O.Style, Rt = O.Tag, Ht = O.CDATA, jt = O.Doctype;
var tt = (function () {
    function tt() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(tt.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tt.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tt.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    tt.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Fu(this, e);
    };
    return tt;
}()), Be = (function (_super) {
    __extends(Be, _super);
    function Be(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Be.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Be;
}(tt)), qe = (function (_super) {
    __extends(qe, _super);
    function qe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(qe.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return qe;
}(Be)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty(Fe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Fe;
}(Be)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve(e, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = e, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}(Be)), Re = (function (_super) {
    __extends(Re, _super);
    function Re(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Re.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(tt)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return He;
}(Re)), Ne = (function (_super) {
    __extends(Ne, _super);
    function Ne() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(Ne.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ne;
}(Re)), je = (function (_super) {
    __extends(je, _super);
    function je(e, u, a, n) {
        if (a === void 0) { a = []; }
        if (n === void 0) { n = e === "script" ? O.Script : e === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, a) || this, _this.name = e, _this.attribs = u, _this.type = n;
        return _this;
    }
    Object.defineProperty(je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(je.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(je.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var u, a; return { name: e, value: _this.attribs[e], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e], prefix: (a = _this["x-attribsPrefix"]) === null || a === void 0 ? void 0 : a[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return je;
}(Re));
function M(t) { return Ut(t); }
function Ce(t) { return t.type === O.CDATA; }
function re(t) { return t.type === O.Text; }
function ze(t) { return t.type === O.Comment; }
function na(t) { return t.type === O.Directive; }
function Gt(t) { return t.type === O.Root; }
function W(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function Fu(t, e) {
    if (e === void 0) { e = !1; }
    var u;
    if (re(t))
        u = new qe(t.data);
    else if (ze(t))
        u = new Fe(t.data);
    else if (M(t)) {
        var a = e ? zt(t.children) : [], n_1 = new je(t.name, ue({}, t.attribs), a);
        a.forEach(function (s) { return s.parent = n_1; }), t.namespace != null && (n_1.namespace = t.namespace), t["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = ue({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = ue({}, t["x-attribsPrefix"])), u = n_1;
    }
    else if (Ce(t)) {
        var a = e ? zt(t.children) : [], n_2 = new He(a);
        a.forEach(function (s) { return s.parent = n_2; }), u = n_2;
    }
    else if (Gt(t)) {
        var a = e ? zt(t.children) : [], n_3 = new Ne(a);
        a.forEach(function (s) { return s.parent = n_3; }), t["x-mode"] && (n_3["x-mode"] = t["x-mode"]), u = n_3;
    }
    else if (na(t)) {
        var a = new Ve(t.name, t.data);
        t["x-name"] != null && (a["x-name"] = t["x-name"], a["x-publicId"] = t["x-publicId"], a["x-systemId"] = t["x-systemId"]), u = a;
    }
    else
        throw new Error("Not implemented yet: ".concat(t.type));
    return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u;
}
function zt(t) { var e = t.map(function (u) { return Fu(u, !0); }); for (var u = 1; u < e.length; u++)
    e[u].prev = e[u - 1], e[u - 1].next = e[u]; return e; }
var Vu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Le = (function () {
    function Le(e, u, a) {
        this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (a = u, u = Vu), typeof e == "object" && (u = e, e = void 0), this.callback = e != null ? e : null, this.options = u != null ? u : Vu, this.elementCB = a != null ? a : null;
    }
    Le.prototype.onparserinit = function (e) { this.parser = e; };
    Le.prototype.onreset = function () { this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Le.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Le.prototype.onerror = function (e) { this.handleCallback(e); };
    Le.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Le.prototype.onopentag = function (e, u) { var a = this.options.xmlMode ? O.Tag : void 0, n = new je(e, u, void 0, a); this.addNode(n), this.tagStack.push(n); };
    Le.prototype.ontext = function (e) { var u = this.lastNode; if (u && u.type === O.Text)
        u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var a = new qe(e);
        this.addNode(a), this.lastNode = a;
    } };
    Le.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += e;
        return;
    } var u = new Fe(e); this.addNode(u), this.lastNode = u; };
    Le.prototype.oncommentend = function () { this.lastNode = null; };
    Le.prototype.oncdatastart = function () { var e = new qe(""), u = new He([e]); this.addNode(u), e.parent = u, this.lastNode = e; };
    Le.prototype.oncdataend = function () { this.lastNode = null; };
    Le.prototype.onprocessinginstruction = function (e, u) { var a = new Ve(e, u); this.addNode(a); };
    Le.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Le.prototype.addNode = function (e) { var u = this.tagStack[this.tagStack.length - 1], a = u.children[u.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), a && (e.prev = a, a.next = e), e.parent = u, this.lastNode = null; };
    return Le;
}());
var ae = {};
Lt(ae, { DocumentPosition: function () { return ee; }, append: function () { return ka; }, appendChild: function () { return Ta; }, compareDocumentPosition: function () { return tr; }, existsOne: function () { return Yu; }, filter: function () { return Ie; }, find: function () { return ct; }, findAll: function () { return Ca; }, findOne: function () { return ot; }, findOneChild: function () { return Na; }, getAttributeValue: function () { return ya; }, getChildren: function () { return nt; }, getElementById: function () { return Oa; }, getElements: function () { return Ia; }, getElementsByClassName: function () { return Ua; }, getElementsByTagName: function () { return xe; }, getElementsByTagType: function () { return Ma; }, getFeed: function () { return ru; }, getInnerHTML: function () { return va; }, getName: function () { return Aa; }, getOuterHTML: function () { return Zu; }, getParent: function () { return Ku; }, getSiblings: function () { return st; }, getText: function () { return it; }, hasAttrib: function () { return Sa; }, hasChildren: function () { return W; }, innerText: function () { return Zt; }, isCDATA: function () { return Ce; }, isComment: function () { return ze; }, isDocument: function () { return Gt; }, isTag: function () { return M; }, isText: function () { return re; }, nextElementSibling: function () { return Kt; }, prepend: function () { return eu; }, prependChild: function () { return qa; }, prevElementSibling: function () { return Yt; }, removeElement: function () { return ce; }, removeSubsets: function () { return _a; }, replaceElement: function () { return Ea; }, testElement: function () { return Da; }, textContent: function () { return de; }, uniqueSort: function () { return uu; } });
function ut(t) { for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1; return t; }
var sa = new Map(ut([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(ut([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(ut([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(ut([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var $t = /["&'<>$\x80-\uFFFF]/g, Ru = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Hu = String.prototype.codePointAt != null ? function (t, e) { return t.codePointAt(e); } : function (t, e) { return (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e); };
function Ge(t) { var e = "", u = 0, a; for (; (a = $t.exec(t)) !== null;) {
    var n = a.index, s = t.charCodeAt(n), h = Ru.get(s);
    h !== void 0 ? (e += t.substring(u, n) + h, u = n + 1) : (e += "".concat(t.substring(u, n), "&#x").concat(Hu(t, n).toString(16), ";"), u = $t.lastIndex += +((s & 64512) === 55296));
} return e + t.substr(u); }
function Wt(t, e) { return function (a) { var n, s = 0, h = ""; for (; n = t.exec(a);)
    s !== n.index && (h += a.substring(s, n.index)), h += e.get(n[0].charCodeAt(0)), s = n.index + 1; return h + a.substring(s); }; }
var ju = Wt(/[&<>'"]/g, Ru), rt = Wt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), at = Wt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var zu;
(function (t) { t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML"; })(zu || (zu = {}));
var Gu;
(function (t) { t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text"; })(Gu || (Gu = {}));
var Xu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (t) { return [t.toLowerCase(), t]; })), Ju = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (t) { return [t.toLowerCase(), t]; }));
var oa = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function fa(t) { return t.replace(/"/g, "&quot;"); }
function la(t, e) { var u; if (!t)
    return; var a = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? fa : e.xmlMode || e.encodeEntities !== "utf8" ? Ge : rt; return Object.keys(t).map(function (n) { var s, h; var b = (s = t[n]) !== null && s !== void 0 ? s : ""; return e.xmlMode === "foreign" && (n = (h = Ju.get(n)) !== null && h !== void 0 ? h : n), !e.emptyAttrs && !e.xmlMode && b === "" ? n : "".concat(n, "=\"").concat(a(b), "\""); }).join(" "); }
var Qu = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Qt(t, e) {
    if (e === void 0) { e = {}; }
    var u = "length" in t ? t : [t], a = "";
    for (var n = 0; n < u.length; n++)
        a += da(u[n], e);
    return a;
}
var De = Qt;
function da(t, e) { switch (t.type) {
    case Mt: return Qt(t.children, e);
    case jt:
    case Pt: return ga(t);
    case Bt: return wa(t);
    case Ht: return xa(t);
    case Ft:
    case Vt:
    case Rt: return pa(t, e);
    case _t: return ma(t, e);
} }
var ha = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), ba = new Set(["svg", "math"]);
function pa(t, e) { var u; e.xmlMode === "foreign" && (t.name = (u = Xu.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && ha.has(t.parent.name) && (e = ge(ue({}, e), { xmlMode: !1 }))), !e.xmlMode && ba.has(t.name) && (e = ge(ue({}, e), { xmlMode: "foreign" })); var a = "<".concat(t.name), n = la(t.attribs, e); return n && (a += " ".concat(n)), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Qu.has(t.name)) ? (e.xmlMode || (a += " "), a += "/>") : (a += ">", t.children.length > 0 && (a += Qt(t.children, e)), (e.xmlMode || !Qu.has(t.name)) && (a += "</".concat(t.name, ">"))), a; }
function ga(t) { return "<".concat(t.data, ">"); }
function ma(t, e) { var u; var a = t.data || ""; return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && oa.has(t.parent.name)) && (a = e.xmlMode || e.encodeEntities !== "utf8" ? Ge(a) : at(a)), a; }
function xa(t) { return "<![CDATA[".concat(t.children[0].data, "]]>"); }
function wa(t) { return "<!--".concat(t.data, "-->"); }
function Zu(t, e) { return De(t, e); }
function va(t, e) { return W(t) ? t.children.map(function (u) { return Zu(u, e); }).join("") : ""; }
function it(t) {
    return Array.isArray(t) ? t.map(it).join("") : M(t) ? t.name === "br" ? "\n" : it(t.children) : Ce(t) ? it(t.children) : re(t) ? t.data : "";
}
function de(t) { return Array.isArray(t) ? t.map(de).join("") : W(t) && !ze(t) ? de(t.children) : re(t) ? t.data : ""; }
function Zt(t) { return Array.isArray(t) ? t.map(Zt).join("") : W(t) && (t.type === O.Tag || Ce(t)) ? Zt(t.children) : re(t) ? t.data : ""; }
function nt(t) { return W(t) ? t.children : []; }
function Ku(t) { return t.parent || null; }
function st(t) {
    var _b, _c;
    var e = Ku(t);
    if (e != null)
        return nt(e);
    var u = [t], a = t.prev, n = t.next;
    for (; a != null;)
        u.unshift(a), _b = a, a = _b.prev;
    for (; n != null;)
        u.push(n), _c = n, n = _c.next;
    return u;
}
function ya(t, e) { var u; return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]; }
function Sa(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function Aa(t) { return t.name; }
function Kt(t) {
    var _b;
    var e = t.next;
    for (; e !== null && !M(e);)
        (_b = e, e = _b.next);
    return e;
}
function Yt(t) {
    var _b;
    var e = t.prev;
    for (; e !== null && !M(e);)
        (_b = e, e = _b.prev);
    return e;
}
function ce(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, u = e.lastIndexOf(t);
    u >= 0 && e.splice(u, 1);
} t.next = null, t.prev = null, t.parent = null; }
function Ea(t, e) { var u = e.prev = t.prev; u && (u.next = e); var a = e.next = t.next; a && (a.prev = e); var n = e.parent = t.parent; if (n) {
    var s = n.children;
    s[s.lastIndexOf(t)] = e, t.parent = null;
} }
function Ta(t, e) { if (ce(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var u = t.children[t.children.length - 2];
    u.next = e, e.prev = u;
}
else
    e.prev = null; }
function ka(t, e) { ce(e); var u = t.parent, a = t.next; if (e.next = a, e.prev = t, t.next = e, e.parent = u, a) {
    if (a.prev = e, u) {
        var n = u.children;
        n.splice(n.lastIndexOf(a), 0, e);
    }
}
else
    u && u.children.push(e); }
function qa(t, e) { if (ce(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var u = t.children[1];
    u.prev = e, e.next = u;
}
else
    e.next = null; }
function eu(t, e) { ce(e); var u = t.parent; if (u) {
    var a = u.children;
    a.splice(a.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e; }
function Ie(t, e, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return ct(t, Array.isArray(e) ? e : [e], u, a);
}
function ct(t, e, u, a) { var n = [], s = [Array.isArray(e) ? e : [e]], h = [0]; for (;;) {
    if (h[0] >= s[0].length) {
        if (h.length === 1)
            return n;
        s.shift(), h.shift();
        continue;
    }
    var b = s[0][h[0]++];
    if (t(b) && (n.push(b), --a <= 0))
        return n;
    u && W(b) && b.children.length > 0 && (h.unshift(0), s.unshift(b.children));
} }
function Na(t, e) { return e.find(t); }
function ot(t, e, u) {
    if (u === void 0) { u = !0; }
    var a = Array.isArray(e) ? e : [e];
    for (var n = 0; n < a.length; n++) {
        var s = a[n];
        if (M(s) && t(s))
            return s;
        if (u && W(s) && s.children.length > 0) {
            var h = ot(t, s.children, !0);
            if (h)
                return h;
        }
    }
    return null;
}
function Yu(t, e) { return (Array.isArray(e) ? e : [e]).some(function (u) { return M(u) && t(u) || W(u) && Yu(t, u.children); }); }
function Ca(t, e) { var u = [], a = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= a[0].length) {
        if (a.length === 1)
            return u;
        a.shift(), n.shift();
        continue;
    }
    var s = a[0][n[0]++];
    M(s) && t(s) && u.push(s), W(s) && s.children.length > 0 && (n.unshift(0), a.unshift(s.children));
} }
var ft = { tag_name: function (t) { return typeof t == "function" ? function (e) { return M(e) && t(e.name); } : t === "*" ? M : function (e) { return M(e) && e.name === t; }; }, tag_type: function (t) { return typeof t == "function" ? function (e) { return t(e.type); } : function (e) { return e.type === t; }; }, tag_contains: function (t) { return typeof t == "function" ? function (e) { return re(e) && t(e.data); } : function (e) { return re(e) && e.data === t; }; } };
function tu(t, e) { return typeof e == "function" ? function (u) { return M(u) && e(u.attribs[t]); } : function (u) { return M(u) && u.attribs[t] === e; }; }
function La(t, e) { return function (u) { return t(u) || e(u); }; }
function er(t) { var e = Object.keys(t).map(function (u) { var a = t[u]; return Object.prototype.hasOwnProperty.call(ft, u) ? ft[u](a) : tu(u, a); }); return e.length === 0 ? null : e.reduce(La); }
function Da(t, e) { var u = er(t); return u ? u(e) : !0; }
function Ia(t, e, u, a) {
    if (a === void 0) { a = 1 / 0; }
    var n = er(t);
    return n ? Ie(n, e, u, a) : [];
}
function Oa(t, e, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(e) || (e = [e]), ot(tu("id", t), e, u);
}
function xe(t, e, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(ft.tag_name(t), e, u, a);
}
function Ua(t, e, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(tu("class", t), e, u, a);
}
function Ma(t, e, u, a) {
    if (u === void 0) { u = !0; }
    if (a === void 0) { a = 1 / 0; }
    return Ie(ft.tag_type(t), e, u, a);
}
function _a(t) { var e = t.length; for (; --e >= 0;) {
    var u = t[e];
    if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (var a = u.parent; a; a = a.parent)
        if (t.includes(a)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var ee;
(function (t) { t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ee || (ee = {}));
function tr(t, e) { var u = [], a = []; if (t === e)
    return 0; var n = W(t) ? t : t.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = W(e) ? e : e.parent; n;)
    a.unshift(n), n = n.parent; var s = Math.min(u.length, a.length), h = 0; for (; h < s && u[h] === a[h];)
    h++; if (h === 0)
    return ee.DISCONNECTED; var b = u[h - 1], g = b.children, x = u[h], A = a[h]; return g.indexOf(x) > g.indexOf(A) ? b === e ? ee.FOLLOWING | ee.CONTAINED_BY : ee.FOLLOWING : b === t ? ee.PRECEDING | ee.CONTAINS : ee.PRECEDING; }
function uu(t) { return t = t.filter(function (e, u, a) { return !a.includes(e, u + 1); }), t.sort(function (e, u) { var a = tr(e, u); return a & ee.PRECEDING ? -1 : a & ee.FOLLOWING ? 1 : 0; }), t; }
function ru(t) { var e = lt(Ra, t); return e ? e.name === "feed" ? Pa(e) : Ba(e) : null; }
function Pa(t) { var e; var u = t.children, a = { type: "atom", items: xe("entry", u).map(function (h) { var b; var g = h.children, x = { media: ur(g) }; J(x, "id", "id", g), J(x, "title", "title", g); var A = (b = lt("link", g)) === null || b === void 0 ? void 0 : b.attribs.href; A && (x.link = A); var D = he("summary", g) || he("content", g); D && (x.description = D); var q = he("updated", g); return q && (x.pubDate = new Date(q)), x; }) }; J(a, "id", "id", u), J(a, "title", "title", u); var n = (e = lt("link", u)) === null || e === void 0 ? void 0 : e.attribs.href; n && (a.link = n), J(a, "description", "subtitle", u); var s = he("updated", u); return s && (a.updated = new Date(s)), J(a, "author", "email", u, !0), a; }
function Ba(t) { var e, u; var a = (u = (e = lt("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [], n = { type: t.name.substr(0, 3), id: "", items: xe("item", t.children).map(function (h) { var b = h.children, g = { media: ur(b) }; J(g, "id", "guid", b), J(g, "title", "title", b), J(g, "link", "link", b), J(g, "description", "description", b); var x = he("pubDate", b) || he("dc:date", b); return x && (g.pubDate = new Date(x)), g; }) }; J(n, "title", "title", a), J(n, "link", "link", a), J(n, "description", "description", a); var s = he("lastBuildDate", a); return s && (n.updated = new Date(s)), J(n, "author", "managingEditor", a, !0), n; }
var Fa = ["url", "type", "lang"], Va = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function ur(t) { return xe("media:content", t).map(function (e) {
    var e_4, _b, e_5, _c;
    var u = e.attribs, a = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Fa_1 = __values(Fa), Fa_1_1 = Fa_1.next(); !Fa_1_1.done; Fa_1_1 = Fa_1.next()) {
            var n = Fa_1_1.value;
            u[n] && (a[n] = u[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Fa_1_1 && !Fa_1_1.done && (_b = Fa_1.return)) _b.call(Fa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Va_1 = __values(Va), Va_1_1 = Va_1.next(); !Va_1_1.done; Va_1_1 = Va_1.next()) {
            var n = Va_1_1.value;
            u[n] && (a[n] = parseInt(u[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Va_1_1 && !Va_1_1.done && (_c = Va_1.return)) _c.call(Va_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (a.expression = u.expression), a;
}); }
function lt(t, e) { return xe(t, e, !0, 1)[0]; }
function he(t, e, u) {
    if (u === void 0) { u = !1; }
    return de(xe(t, e, u, 1)).trim();
}
function J(t, e, u, a, n) {
    if (n === void 0) { n = !1; }
    var s = he(u, a, n);
    s && (t[e] = s);
}
function Ra(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
function rr(t, e) { var u = new Le(void 0, e); return new Pe(u, e).end(t), u.root; }
var C;
(function (t) { t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"; })(C || (C = {}));
var V;
(function (t) { t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"; })(V || (V = {}));
var ar = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Ha = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, ja = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), za = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function we(t) { switch (t.type) {
    case C.Adjacent:
    case C.Child:
    case C.Descendant:
    case C.Parent:
    case C.Sibling:
    case C.ColumnCombinator: return !0;
    default: return !1;
} }
var Ga = new Set(["contains", "icontains"]);
function $a(t, e, u) { var a = parseInt(e, 16) - 65536; return a !== a || u ? e : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320); }
function $e(t) { return t.replace(Ha, $a); }
function au(t) { return t === 39 || t === 34; }
function ir(t) { return t === 32 || t === 9 || t === 10 || t === 12 || t === 13; }
function be(t) { var e = [], u = nr(e, "".concat(t), 0); if (u < t.length)
    throw new Error("Unmatched selector: ".concat(t.slice(u))); return e; }
function nr(t, e, u) { var a = []; function n(q) { var N = e.slice(u + q).match(ar); if (!N)
    throw new Error("Expected name, found ".concat(e.slice(u))); var _b = __read(N, 1), I = _b[0]; return u += q + I.length, $e(I); } function s(q) { for (u += q; u < e.length && ir(e.charCodeAt(u));)
    u++; } function h() { u += 1; var q = u, N = 1; for (; N > 0 && u < e.length; u++)
    e.charCodeAt(u) === 40 && !b(u) ? N++ : e.charCodeAt(u) === 41 && !b(u) && N--; if (N)
    throw new Error("Parenthesis not matched"); return $e(e.slice(q, u - 1)); } function b(q) { var N = 0; for (; e.charCodeAt(--q) === 92;)
    N++; return (N & 1) === 1; } function g() { if (a.length > 0 && we(a[a.length - 1]))
    throw new Error("Did not expect successive traversals."); } function x(q) { if (a.length > 0 && a[a.length - 1].type === C.Descendant) {
    a[a.length - 1].type = q;
    return;
} g(), a.push({ type: q }); } function A(q, N) { a.push({ type: C.Attribute, name: q, action: N, value: n(1), namespace: null, ignoreCase: "quirks" }); } function D() { if (a.length && a[a.length - 1].type === C.Descendant && a.pop(), a.length === 0)
    throw new Error("Empty sub-selector"); t.push(a); } if (s(0), e.length === u)
    return u; e: for (; u < e.length;) {
    var q = e.charCodeAt(u);
    switch (q) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (a.length === 0 || a[0].type !== C.Descendant) && (g(), a.push({ type: C.Descendant })), s(1);
            break;
        }
        case 62: {
            x(C.Child), s(1);
            break;
        }
        case 60: {
            x(C.Parent), s(1);
            break;
        }
        case 126: {
            x(C.Sibling), s(1);
            break;
        }
        case 43: {
            x(C.Adjacent), s(1);
            break;
        }
        case 46: {
            A("class", V.Element);
            break;
        }
        case 35: {
            A("id", V.Equals);
            break;
        }
        case 91: {
            s(1);
            var N = void 0, I = null;
            e.charCodeAt(u) === 124 ? N = n(1) : e.startsWith("*|", u) ? (I = "*", N = n(2)) : (N = n(0), e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 61 && (I = N, N = n(1))), s(0);
            var U = V.Exists, X = ja.get(e.charCodeAt(u));
            if (X) {
                if (U = X, e.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                e.charCodeAt(u) === 61 && (U = V.Equals, s(1));
            var Z = "", ne = null;
            if (U !== "exists") {
                if (au(e.charCodeAt(u))) {
                    var c = e.charCodeAt(u), d = u + 1;
                    for (; d < e.length && (e.charCodeAt(d) !== c || b(d));)
                        d += 1;
                    if (e.charCodeAt(d) !== c)
                        throw new Error("Attribute value didn't end");
                    Z = $e(e.slice(u + 1, d)), u = d + 1;
                }
                else {
                    var c = u;
                    for (; u < e.length && (!ir(e.charCodeAt(u)) && e.charCodeAt(u) !== 93 || b(u));)
                        u += 1;
                    Z = $e(e.slice(c, u));
                }
                s(0);
                var E = e.charCodeAt(u) | 32;
                E === 115 ? (ne = !1, s(1)) : E === 105 && (ne = !0, s(1));
            }
            if (e.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var R = { type: C.Attribute, name: N, action: U, value: Z, namespace: I, ignoreCase: ne };
            a.push(R);
            break;
        }
        case 58: {
            if (e.charCodeAt(u + 1) === 58) {
                a.push({ type: C.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(u) === 40 ? h() : null });
                continue;
            }
            var N = n(1).toLowerCase(), I = null;
            if (e.charCodeAt(u) === 40)
                if (za.has(N)) {
                    if (au(e.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (I = [], u = nr(I, e, u + 1), e.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(e, ")"));
                    u += 1;
                }
                else {
                    if (I = h(), Ga.has(N)) {
                        var U = I.charCodeAt(0);
                        U === I.charCodeAt(I.length - 1) && au(U) && (I = I.slice(1, -1));
                    }
                    I = $e(I);
                }
            a.push({ type: C.Pseudo, name: N, data: I });
            break;
        }
        case 44: {
            D(), a = [], s(1);
            break;
        }
        default: {
            if (e.startsWith("/*", u)) {
                var U = e.indexOf("*/", u + 2);
                if (U < 0)
                    throw new Error("Comment was not terminated");
                u = U + 2, a.length === 0 && s(0);
                break;
            }
            var N = null, I = void 0;
            if (q === 42)
                u += 1, I = "*";
            else if (q === 124) {
                if (I = "", e.charCodeAt(u + 1) === 124) {
                    x(C.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (ar.test(e.slice(u)))
                I = n(0);
            else
                break e;
            e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 124 && (N = I, e.charCodeAt(u + 1) === 42 ? (I = "*", u += 2) : I = n(1)), a.push(I === "*" ? { type: C.Universal, namespace: N } : { type: C.Tag, name: I, namespace: N });
        }
    }
} return D(), u; }
var pu = me(pe(), 1);
var oe = me(pe(), 1);
var cr = new Map([[C.Universal, 50], [C.Tag, 30], [C.Attribute, 1], [C.Pseudo, 0]]);
function We(t) { return !cr.has(t.type); }
var Wa = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function iu(t) { var e = t.map(or); for (var u = 1; u < t.length; u++) {
    var a = e[u];
    if (!(a < 0))
        for (var n = u - 1; n >= 0 && a < e[n]; n--) {
            var s = t[n + 1];
            t[n + 1] = t[n], t[n] = s, e[n + 1] = e[n], e[n] = a;
        }
} }
function or(t) { var e, u; var a = (e = cr.get(t.type)) !== null && e !== void 0 ? e : -1; return t.type === C.Attribute ? (a = (u = Wa.get(t.action)) !== null && u !== void 0 ? u : 4, t.action === V.Equals && t.name === "id" && (a = 9), t.ignoreCase && (a >>= 1)) : t.type === C.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? a = 0 : Array.isArray(t.data) ? (a = Math.min.apply(Math, __spreadArray([], __read(t.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(or)), false)); })), false)), a < 0 && (a = 0)) : a = 2 : a = 3), a; }
var Xe = me(pe(), 1), Xa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function fr(t) { return t.replace(Xa, "\\$&"); }
var Ja = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function ve(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Ja.has(t.name); }
var lr = { equals: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value; return ve(e, u) ? (s = s.toLowerCase(), function (h) { var b = a.getAttributeValue(h, n); return b != null && b.length === s.length && b.toLowerCase() === s && t(h); }) : function (h) { return a.getAttributeValue(h, n) === s && t(h); }; }, hyphen: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value, h = s.length; return ve(e, u) ? (s = s.toLowerCase(), function (g) { var x = a.getAttributeValue(g, n); return x != null && (x.length === h || x.charAt(h) === "-") && x.substr(0, h).toLowerCase() === s && t(g); }) : function (g) { var x = a.getAttributeValue(g, n); return x != null && (x.length === h || x.charAt(h) === "-") && x.substr(0, h) === s && t(g); }; }, element: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value; if (/\s/.test(s))
        return Xe.default.falseFunc; var h = new RegExp("(?:^|\\s)".concat(fr(s), "(?:$|\\s)"), ve(e, u) ? "i" : ""); return function (g) { var x = a.getAttributeValue(g, n); return x != null && x.length >= s.length && h.test(x) && t(g); }; }, exists: function (t, _b, _c) {
        var e = _b.name;
        var u = _c.adapter;
        return function (a) { return u.hasAttrib(a, e) && t(a); };
    }, start: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value, h = s.length; return h === 0 ? Xe.default.falseFunc : ve(e, u) ? (s = s.toLowerCase(), function (b) { var g = a.getAttributeValue(b, n); return g != null && g.length >= h && g.substr(0, h).toLowerCase() === s && t(b); }) : function (b) { var g; return !!(!((g = a.getAttributeValue(b, n)) === null || g === void 0) && g.startsWith(s)) && t(b); }; }, end: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value, h = -s.length; return h === 0 ? Xe.default.falseFunc : ve(e, u) ? (s = s.toLowerCase(), function (b) { var g; return ((g = a.getAttributeValue(b, n)) === null || g === void 0 ? void 0 : g.substr(h).toLowerCase()) === s && t(b); }) : function (b) { var g; return !!(!((g = a.getAttributeValue(b, n)) === null || g === void 0) && g.endsWith(s)) && t(b); }; }, any: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value; if (s === "")
        return Xe.default.falseFunc; if (ve(e, u)) {
        var h_1 = new RegExp(fr(s), "i");
        return function (g) { var x = a.getAttributeValue(g, n); return x != null && x.length >= s.length && h_1.test(x) && t(g); };
    } return function (h) { var b; return !!(!((b = a.getAttributeValue(h, n)) === null || b === void 0) && b.includes(s)) && t(h); }; }, not: function (t, e, u) { var a = u.adapter, n = e.name, s = e.value; return s === "" ? function (h) { return !!a.getAttributeValue(h, n) && t(h); } : ve(e, u) ? (s = s.toLowerCase(), function (h) { var b = a.getAttributeValue(h, n); return (b == null || b.length !== s.length || b.toLowerCase() !== s) && t(h); }) : function (h) { return a.getAttributeValue(h, n) !== s && t(h); }; } };
var Qa = new Set([9, 10, 12, 13, 32]), dr = 48, Za = 57;
function hr(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; var e = 0, u = 0, a = s(), n = h(); if (e < t.length && t.charAt(e) === "n" && (e++, u = a * (n != null ? n : 1), b(), e < t.length ? (a = s(), b(), n = h()) : a = n = 0), n === null || e < t.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(t, "')")); return [u, a * n]; function s() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function h() { var g = e, x = 0; for (; e < t.length && t.charCodeAt(e) >= dr && t.charCodeAt(e) <= Za;)
    x = x * 10 + (t.charCodeAt(e) - dr), e++; return e === g ? null : x; } function b() { for (; e < t.length && Qa.has(t.charCodeAt(e));)
    e++; } }
var nu = me(pe(), 1);
function br(t) { var e = t[0], u = t[1] - 1; if (u < 0 && e <= 0)
    return nu.default.falseFunc; if (e === -1)
    return function (s) { return s <= u; }; if (e === 0)
    return function (s) { return s === u; }; if (e === 1)
    return u < 0 ? nu.default.trueFunc : function (s) { return s >= u; }; var a = Math.abs(e), n = (u % a + a) % a; return e > 1 ? function (s) { return s >= u && s % a === n; } : function (s) { return s <= u && s % a === n; }; }
function Oe(t) { return br(hr(t)); }
var Q = me(pe(), 1);
function dt(t, e) { return function (u) { var a = e.getParent(u); return a != null && e.isTag(a) && t(u); }; }
var Ue = { contains: function (t, e, _b) {
        var u = _b.adapter;
        return function (n) { return t(n) && u.getText(n).includes(e); };
    }, icontains: function (t, e, _b) {
        var u = _b.adapter;
        var a = e.toLowerCase();
        return function (s) { return t(s) && u.getText(s).toLowerCase().includes(a); };
    }, "nth-child": function (t, e, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(e);
        return n === Q.default.falseFunc ? Q.default.falseFunc : n === Q.default.trueFunc ? dt(t, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var x = 0; x < b.length && !a(h, b[x]); x++)
            u.isTag(b[x]) && g++; return n(g) && t(h); };
    }, "nth-last-child": function (t, e, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(e);
        return n === Q.default.falseFunc ? Q.default.falseFunc : n === Q.default.trueFunc ? dt(t, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var x = b.length - 1; x >= 0 && !a(h, b[x]); x--)
            u.isTag(b[x]) && g++; return n(g) && t(h); };
    }, "nth-of-type": function (t, e, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(e);
        return n === Q.default.falseFunc ? Q.default.falseFunc : n === Q.default.trueFunc ? dt(t, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var x = 0; x < b.length; x++) {
            var A = b[x];
            if (a(h, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(h) && g++;
        } return n(g) && t(h); };
    }, "nth-last-of-type": function (t, e, _b) {
        var u = _b.adapter, a = _b.equals;
        var n = Oe(e);
        return n === Q.default.falseFunc ? Q.default.falseFunc : n === Q.default.trueFunc ? dt(t, u) : function (h) { var b = u.getSiblings(h), g = 0; for (var x = b.length - 1; x >= 0; x--) {
            var A = b[x];
            if (a(h, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(h) && g++;
        } return n(g) && t(h); };
    }, root: function (t, e, _b) {
        var u = _b.adapter;
        return function (a) { var n = u.getParent(a); return (n == null || !u.isTag(n)) && t(a); };
    }, scope: function (t, e, u, a) { var n = u.equals; return !a || a.length === 0 ? Ue.root(t, e, u) : a.length === 1 ? function (s) { return n(a[0], s) && t(s); } : function (s) { return a.includes(s) && t(s); }; }, hover: su("isHovered"), visited: su("isVisited"), active: su("isActive") };
function su(t) { return function (u, a, _b) {
    var n = _b.adapter;
    var s = n[t];
    return typeof s != "function" ? Q.default.falseFunc : function (b) { return s(b) && u(b); };
}; }
var Je = { empty: function (t, _b) {
        var e = _b.adapter;
        return !e.getChildren(t).some(function (u) { return e.isTag(u) || e.getText(u) !== ""; });
    }, "first-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(t) == null;
        var a = e.getSiblings(t).find(function (n) { return e.isTag(n); });
        return a != null && u(t, a);
    }, "last-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var a = e.getSiblings(t);
        for (var n = a.length - 1; n >= 0; n--) {
            if (u(t, a[n]))
                return !0;
            if (e.isTag(a[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var a = e.getSiblings(t), n = e.getName(t);
        for (var s = 0; s < a.length; s++) {
            var h = a[s];
            if (u(t, h))
                return !0;
            if (e.isTag(h) && e.getName(h) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var a = e.getSiblings(t), n = e.getName(t);
        for (var s = a.length - 1; s >= 0; s--) {
            var h = a[s];
            if (u(t, h))
                return !0;
            if (e.isTag(h) && e.getName(h) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var a = e.getName(t);
        return e.getSiblings(t).every(function (n) { return u(t, n) || !e.isTag(n) || e.getName(n) !== a; });
    }, "only-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        return e.getSiblings(t).every(function (a) { return u(t, a) || !e.isTag(a); });
    } };
function cu(t, e, u, a) { if (u === null) {
    if (t.length > a)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (t.length === a)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var ht = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var te = me(pe(), 1);
var lu = {};
function du(t, e) { return t === te.default.falseFunc ? te.default.falseFunc : function (u) { return e.isTag(u) && t(u); }; }
function hu(t, e) { var u = e.getSiblings(t); if (u.length <= 1)
    return []; var a = u.indexOf(t); return a < 0 || a === u.length - 1 ? [] : u.slice(a + 1).filter(e.isTag); }
function fu(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var ou = function (t, e, u, a, n) { var s = n(e, fu(u), a); return s === te.default.trueFunc ? t : s === te.default.falseFunc ? te.default.falseFunc : function (h) { return s(h) && t(h); }; }, bt = { is: ou, matches: ou, where: ou, not: function (t, e, u, a, n) { var s = n(e, fu(u), a); return s === te.default.falseFunc ? t : s === te.default.trueFunc ? te.default.falseFunc : function (h) { return !s(h) && t(h); }; }, has: function (t, e, u, a, n) { var s = u.adapter, h = fu(u); h.relativeSelector = !0; var b = e.some(function (A) { return A.some(We); }) ? [lu] : void 0, g = n(e, h, b); if (g === te.default.falseFunc)
        return te.default.falseFunc; var x = du(g, s); if (b && g !== te.default.trueFunc) {
        var _b = g.shouldTestNextSiblings, A_1 = _b === void 0 ? !1 : _b;
        return function (D) { if (!t(D))
            return !1; b[0] = D; var q = s.getChildren(D), N = A_1 ? __spreadArray(__spreadArray([], __read(q), false), __read(hu(D, s)), false) : q; return s.existsOne(x, N); };
    } return function (A) { return t(A) && s.existsOne(x, s.getChildren(A)); }; } };
function pr(t, e, u, a, n) { var s; var h = e.name, b = e.data; if (Array.isArray(b)) {
    if (!(h in bt))
        throw new Error("Unknown pseudo-class :".concat(h, "(").concat(b, ")"));
    return bt[h](t, b, u, a, n);
} var g = (s = u.pseudos) === null || s === void 0 ? void 0 : s[h], x = typeof g == "string" ? g : ht[h]; if (typeof x == "string") {
    if (b != null)
        throw new Error("Pseudo ".concat(h, " doesn't have any arguments"));
    var A = be(x);
    return bt.is(t, A, u, a, n);
} if (typeof g == "function")
    return cu(g, h, b, 1), function (A) { return g(A, b) && t(A); }; if (h in Ue)
    return Ue[h](t, b, u, a); if (h in Je) {
    var A_2 = Je[h];
    return cu(A_2, h, b, 2), function (D) { return A_2(D, u, b) && t(D); };
} throw new Error("Unknown pseudo-class :".concat(h)); }
function bu(t, e) { var u = e.getParent(t); return u && e.isTag(u) ? u : null; }
function gr(t, e, u, a, n) { var s = u.adapter, h = u.equals; switch (e.type) {
    case C.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case C.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case C.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), lr[e.action](t, e, u);
    }
    case C.Pseudo: return pr(t, e, u, a, n);
    case C.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var b_1 = e.name;
        return (!u.xmlMode || u.lowerCaseTags) && (b_1 = b_1.toLowerCase()), function (x) { return s.getName(x) === b_1 && t(x); };
    }
    case C.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (x) { var A = x; for (; A = bu(A, s);)
                if (t(A))
                    return !0; return !1; };
        var b_2 = new WeakSet;
        return function (x) { var A = x; for (; A = bu(A, s);)
            if (!b_2.has(A)) {
                if (s.isTag(A) && t(A))
                    return !0;
                b_2.add(A);
            } return !1; };
    }
    case "_flexibleDescendant": return function (g) { var x = g; do
        if (t(x))
            return !0;
    while (x = bu(x, s)); return !1; };
    case C.Parent: return function (g) { return s.getChildren(g).some(function (x) { return s.isTag(x) && t(x); }); };
    case C.Child: return function (g) { var x = s.getParent(g); return x != null && s.isTag(x) && t(x); };
    case C.Sibling: return function (g) { var x = s.getSiblings(g); for (var A = 0; A < x.length; A++) {
        var D = x[A];
        if (h(g, D))
            break;
        if (s.isTag(D) && t(D))
            return !0;
    } return !1; };
    case C.Adjacent: return s.prevElementSibling ? function (g) { var x = s.prevElementSibling(g); return x != null && t(x); } : function (g) { var x = s.getSiblings(g), A; for (var D = 0; D < x.length; D++) {
        var q = x[D];
        if (h(g, q))
            break;
        s.isTag(q) && (A = q);
    } return !!A && t(A); };
    case C.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
function mr(t, e, u) { var a = pt(t, e, u); return du(a, e.adapter); }
function pt(t, e, u) { var a = typeof t == "string" ? be(t) : t; return gt(a, e, u); }
function xr(t) { return t.type === C.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (e) { return e.some(xr); })); }
var Ka = { type: C.Descendant }, Ya = { type: "_flexibleDescendant" }, e0 = { type: C.Pseudo, name: "scope", data: null };
function t0(t, _b, u) {
    var e_6, _c;
    var e = _b.adapter;
    var a = !!(u != null && u.every(function (n) { var s = e.isTag(n) && e.getParent(n); return n === lu || s && e.isTag(s); }));
    try {
        for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var n = t_1_1.value;
            if (!(n.length > 0 && We(n[0]) && n[0].type !== C.Descendant))
                if (a && !n.some(xr))
                    n.unshift(Ka);
                else
                    continue;
            n.unshift(e0);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (t_1_1 && !t_1_1.done && (_c = t_1.return)) _c.call(t_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function gt(t, e, u) { var a; t.forEach(iu), u = (a = e.context) !== null && a !== void 0 ? a : u; var n = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (e.relativeSelector !== !1)
    t0(t, e, s);
else if (t.some(function (g) { return g.length > 0 && We(g[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var h = !1, b = t.map(function (g) { if (g.length >= 2) {
    var _b = __read(g, 2), x = _b[0], A = _b[1];
    x.type !== C.Pseudo || x.name !== "scope" || (n && A.type === C.Descendant ? g[1] = Ya : (A.type === C.Adjacent || A.type === C.Sibling) && (h = !0));
} return u0(g, e, s); }).reduce(r0, oe.default.falseFunc); return b.shouldTestNextSiblings = h, b; }
function u0(t, e, u) { var a; return t.reduce(function (n, s) { return n === oe.default.falseFunc ? oe.default.falseFunc : gr(n, s, e, u, gt); }, (a = e.rootFunc) !== null && a !== void 0 ? a : oe.default.trueFunc); }
function r0(t, e) { return e === oe.default.falseFunc || t === oe.default.trueFunc ? t : t === oe.default.falseFunc || e === oe.default.trueFunc ? e : function (a) { return t(a) || e(a); }; }
var wr = function (t, e) { return t === e; }, a0 = { adapter: ae, equals: wr };
function vr(t) { var e, u, a, n; var s = t != null ? t : a0; return (e = s.adapter) !== null && e !== void 0 || (s.adapter = ae), (u = s.equals) !== null && u !== void 0 || (s.equals = (n = (a = s.adapter) === null || a === void 0 ? void 0 : a.equals) !== null && n !== void 0 ? n : wr), s; }
function gu(t) { return function (u, a, n) { var s = vr(a); return t(u, s, n); }; }
var Cn = gu(mr), Ln = gu(pt), mt = gu(gt);
function yr(t) { return function (u, a, n) { var s = vr(n); typeof u != "function" && (u = pt(u, s, a)); var h = xt(a, s.adapter, u.shouldTestNextSiblings); return t(u, h, s); }; }
function xt(t, e, u) {
    if (u === void 0) { u = !1; }
    return u && (t = i0(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t);
}
function i0(t, e) { var u = Array.isArray(t) ? t.slice(0) : [t], a = u.length; for (var n = 0; n < a; n++) {
    var s = hu(u[n], e);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var Dn = yr(function (t, e, u) { return t === pu.default.falseFunc || !e || e.length === 0 ? [] : u.adapter.findAll(t, e); }), In = yr(function (t, e, u) { return t === pu.default.falseFunc || !e || e.length === 0 ? null : u.adapter.findOne(t, e); });
var vt = me(pe(), 1);
var n0 = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Me(t) { return t.type !== "pseudo" ? !1 : n0.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some(function (e) { return e.some(Me); }) : !1; }
function Sr(t, e, u) { var a = e != null ? parseInt(e, 10) : NaN; switch (t) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(a) ? a >= 0 ? a + 1 : 1 / 0 : 0;
    case "lt": return isFinite(a) ? a >= 0 ? Math.min(a, u) : 1 / 0 : 0;
    case "gt": return isFinite(a) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Ar(t) { for (; t.parent;)
    t = t.parent; return t; }
function wt(t) {
    var e_7, _b;
    var e = [], u = [];
    try {
        for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
            var a = t_2_1.value;
            a.some(Me) ? e.push(a) : u.push(a);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (t_2_1 && !t_2_1.done && (_b = t_2.return)) _b.call(t_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [u, e];
}
var s0 = { type: C.Universal, namespace: null }, c0 = { type: C.Pseudo, name: "scope", data: null };
function wu(t, e, u) {
    if (u === void 0) { u = {}; }
    return o0([t], e, u);
}
function o0(t, e, u) {
    if (u === void 0) { u = {}; }
    if (typeof e == "function")
        return t.some(e);
    var _b = __read(wt(be(e)), 2), a = _b[0], n = _b[1];
    return a.length > 0 && t.some(mt(a, u)) || n.some(function (s) { return Er(s, t, u).length > 0; });
}
function f0(t, e, u, a) { var n = typeof u == "string" ? parseInt(u, 10) : NaN; switch (t) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < e.length ? [n < 0 ? e[e.length + n] : e[n]] : [];
    case "gt": return isFinite(n) ? e.slice(n + 1) : [];
    case "even": return e.filter(function (s, h) { return h % 2 === 0; });
    case "odd": return e.filter(function (s, h) { return h % 2 === 1; });
    case "not": {
        var s_1 = new Set(l0(u, e, a));
        return e.filter(function (h) { return !s_1.has(h); });
    }
} }
function l0(t, e, u) { if (e.length === 0)
    return []; var _b = __read(wt(t), 2), a = _b[0], n = _b[1], s; if (a.length) {
    var h = xu(e, a, u);
    if (n.length === 0)
        return h;
    h.length && (s = new Set(h));
} for (var h = 0; h < n.length && (s == null ? void 0 : s.size) !== e.length; h++) {
    var b = n[h];
    if ((s ? e.filter(function (A) { return M(A) && !s.has(A); }) : e).length === 0)
        break;
    var x = Er(b, e, u);
    if (x.length)
        if (s)
            x.forEach(function (A) { return s.add(A); });
        else {
            if (h === n.length - 1)
                return x;
            s = new Set(x);
        }
} return typeof s != "undefined" ? s.size === e.length ? e : e.filter(function (h) { return s.has(h); }) : []; }
function Er(t, e, u) { var a; if (t.some(we)) {
    var n = (a = u.root) !== null && a !== void 0 ? a : Ar(e[0]), s = ge(ue({}, u), { context: e, relativeSelector: !1 });
    return t.push(c0), yt(n, t, s, !0, e.length);
} return yt(e, t, u, !1, e.length); }
function vu(t, e, u, a) {
    if (u === void 0) { u = {}; }
    if (a === void 0) { a = 1 / 0; }
    if (typeof t == "function")
        return Tr(e, t);
    var _b = __read(wt(be(t)), 2), n = _b[0], s = _b[1], h = s.map(function (b) { return yt(e, b, u, !0, a); });
    return n.length && h.push(mu(e, n, u, a)), h.length === 0 ? [] : h.length === 1 ? h[0] : uu(h.reduce(function (b, g) { return __spreadArray(__spreadArray([], __read(b), false), __read(g), false); }));
}
function yt(t, e, u, a, n) { var s = e.findIndex(Me), h = e.slice(0, s), b = e[s], g = e.length - 1 === s ? n : 1 / 0, x = Sr(b.name, b.data, g); if (x === 0)
    return []; var D = (h.length === 0 && !Array.isArray(t) ? nt(t).filter(M) : h.length === 0 ? (Array.isArray(t) ? t : [t]).filter(M) : a || h.some(we) ? mu(t, [h], u, x) : xu(t, [h], u)).slice(0, x), q = f0(b.name, D, b.data, u); if (q.length === 0 || e.length === s + 1)
    return q; var N = e.slice(s + 1), I = N.some(we); if (I) {
    if (we(N[0])) {
        var U = N[0].type;
        (U === C.Sibling || U === C.Adjacent) && (q = xt(q, ae, !0)), N.unshift(s0);
    }
    u = ge(ue({}, u), { relativeSelector: !1, rootFunc: function (U) { return q.includes(U); } });
}
else
    u.rootFunc && u.rootFunc !== vt.trueFunc && (u = ge(ue({}, u), { rootFunc: vt.trueFunc })); return N.some(Me) ? yt(q, N, u, !1, n) : I ? mu(q, [N], u, n) : xu(q, [N], u); }
function mu(t, e, u, a) { var n = mt(e, u, t); return Tr(t, n, a); }
function Tr(t, e, u) {
    if (u === void 0) { u = 1 / 0; }
    var a = xt(t, ae, e.shouldTestNextSiblings);
    return ct(function (n) { return M(n) && e(n); }, a, !0, u);
}
function xu(t, e, u) { var a = (Array.isArray(t) ? t : [t]).filter(M); if (a.length === 0)
    return a; var n = mt(e, u); return n === vt.trueFunc ? a : a.filter(n); }
function kr(t) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(t) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function yu(t) { var e = [], u = t.split("/"); for (var a = 0; a < u.length; a++) {
    var n = u[a];
    n === ".." ? (e.length > 1 && e.pop(), a === u.length - 1 && e.push("")) : n === "." ? a === u.length - 1 && e.push("") : e.push(n);
} return e.join("/"); }
function At(t, e) { e = e == null ? "" : String(e).trim(); var u = kr(e); if (u.scheme || !t)
    return e; var a = kr(String(t)); if (!a.scheme)
    return e; var n = a.auth, s, h; if (u.auth !== void 0)
    n = u.auth, s = yu(u.path), h = u.query;
else if (!u.path)
    s = a.path, h = u.query !== void 0 ? u.query : a.query;
else {
    if (u.path.charAt(0) === "/")
        s = yu(u.path);
    else {
        var b = n !== void 0 && !a.path ? "/" : a.path.slice(0, a.path.lastIndexOf("/") + 1);
        s = yu(b + u.path);
    }
    h = u.query;
} return n !== void 0 && s.charAt(0) !== "/" && (s = "/" + s), a.scheme + ":" + (n !== void 0 ? "//" + n : "") + s + (h !== void 0 ? "?" + h : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var St = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function qr(t) { if (typeof btoa == "function")
    return btoa(t); var e = ""; for (var u = 0; u < t.length; u += 3) {
    var a = t.charCodeAt(u), n = t.charCodeAt(u + 1), s = t.charCodeAt(u + 2), h = a << 16 | (n || 0) << 8 | (s || 0);
    e += St[h >> 18 & 63] + St[h >> 12 & 63] + (u + 1 < t.length ? St[h >> 6 & 63] : "=") + (u + 2 < t.length ? St[h & 63] : "=");
} return e; }
var d0 = function (t, e, u) { return vu(t, e, u); }, Dr = function (t, e, u) { return vu(t, e, u, 1)[0] || null; }, Ir = /[\s ]+/g, Nr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), h0 = { containsOwn: function (t, e) { return Au(t).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (t, e) { return Cr(e).test(Su(t)); }, matchesOwn: function (t, e) { return Cr(e).test(Au(t)); }, containsData: function (t, e) { return de(t).includes(e); }, "contains-ci": function (t, e) { return Su(t).toLowerCase().includes(String(e).toLowerCase()); } };
function Cr(t) { try {
    return new RegExp(t);
}
catch (e) {
    return /$^/;
} }
var Et = { pseudos: h0, xmlMode: !1, lowerCaseTags: !0 };
function Tt(t) { return String(t).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Su(t) { if (!t)
    return ""; if (t.type === "text")
    return t.data; var e = "", u = function (a) {
    var e_8, _b;
    try {
        for (var _c = __values(a.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? e += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? e += " " : n.type === "tag" && (Nr.has(n.name) && (e += " "), u(n), Nr.has(n.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return u(t), e.replace(Ir, " ").trim(); }
function Au(t) {
    var e_9, _b;
    var e = "";
    try {
        for (var _c = __values(t.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (e += u.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(Ir, " ").trim();
}
function Or(t, e) { if (!e)
    return ""; try {
    return At(t, e);
}
catch (u) {
    return t ? "" : e;
} }
var ye = (function () {
    function t(e, u) {
        this.node = e, this.doc = u;
    }
    Object.defineProperty(t.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    t.prototype.select = function (e) { return ie.of(d0(Tt(e), this.node, Et), this.doc); };
    t.prototype.selectFirst = function (e) { var u = Dr(Tt(e), this.node, Et); return u ? new t(u, this.doc) : null; };
    t.prototype.is = function (e) { return wu(this.node, Tt(e), Et); };
    t.prototype.text = function () { return Su(this.node); };
    t.prototype.ownText = function () { return Au(this.node); };
    t.prototype.wholeText = function () { return de(this.node); };
    t.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    t.prototype.html = function () { return (this.node.children || []).map(function (e) { return De(e, { decodeEntities: !1 }); }).join("").trim(); };
    t.prototype.outerHtml = function () { return De(this.node, { decodeEntities: !1 }); };
    t.prototype.toString = function () { return this.outerHtml(); };
    t.prototype.tagName = function () { return this.node.name || ""; };
    t.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    t.prototype.id = function () { return this.attr("id"); };
    t.prototype.className = function () { return this.attr("class"); };
    t.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    t.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    t.prototype.attr = function (e, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(u)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return Or(this.baseUri, this.node.attribs[e.slice(4)] || ""); var a = this.node.attribs[e]; return a == null ? "" : a; };
    t.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    t.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    t.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    t.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    t.prototype.dataset = function () {
        var e_10, _b;
        var e = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], a = _f[1];
                u.startsWith("data-") && (e[u.slice(5)] = a);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    t.prototype.val = function () { return this.attr("value"); };
    t.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new t(e, this.doc) : null; };
    t.prototype.parents = function () { var e = [], u = this.node.parent; for (; u && u.type !== "root";)
        e.push(u), u = u.parent; return ie.of(e, this.doc); };
    t.prototype.closest = function (e) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && wu(u, Tt(e), Et))
            return new t(u, this.doc);
        u = u.parent;
    } return null; };
    t.prototype.children = function () { return ie.of((this.node.children || []).filter(M), this.doc); };
    t.prototype.child = function (e) { var u = (this.node.children || []).filter(M)[e]; return u ? new t(u, this.doc) : null; };
    t.prototype.childrenSize = function () { return (this.node.children || []).filter(M).length; };
    t.prototype.nextElementSibling = function () { var e = Kt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.previousElementSibling = function () { var e = Yt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.siblingElements = function () {
        var _this = this;
        return ie.of(st(this.node).filter(function (e) { return e !== _this.node && M(e); }), this.doc);
    };
    t.prototype.elementSiblingIndex = function () { return st(this.node).filter(M).indexOf(this.node); };
    t.prototype.getElementsByTag = function (e) { return this.select(e); };
    t.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    t.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    t.prototype.remove = function () { return ce(this.node), this; };
    t.prototype.empty = function () { return this.node.children = [], this; };
    t.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    t.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    t.prototype.body = function () { return this.selectFirst("body") || this; };
    t.prototype.head = function () { return this.selectFirst("head") || this; };
    t.prototype.location = function () { return this.baseUri; };
    return t;
}()), Tu = Object.create(Array.prototype), ie = { of: Eu, prototype: Tu };
function Eu(t, e) {
    var e_11, _b;
    var u = [];
    try {
        for (var _c = __values(t || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            u.push(a instanceof ye ? a : new ye(a, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(u, Tu), u;
}
var Lr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (t) { return this[t] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (t) { return ie.of(this[t] ? [this[t]] : [], null); }, text: function () { return this.map(function (t) { return t.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (t) { return t.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (t) { return t.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (t) { return t.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (t, e) {
        var e_12, _b;
        if (e !== void 0)
            return this.forEach(function (u) { return u.attr(t, e); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(t))
                    return u.attr(t);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (t) { return this.filter(function (e) { return e.hasAttr(t); }).map(function (e) { return e.attr(t); }); }, hasAttr: function (t) { return this.some(function (e) { return e.hasAttr(t); }); }, hasClass: function (t) { return this.some(function (e) { return e.hasClass(t); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (t) {
        var e_13, _b, e_14, _c;
        var e = Eu([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var a = _f.value;
                try {
                    for (var _g = (e_14 = void 0, __values(a.select(t))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var n = _h.value;
                        u.has(n.node) || (u.add(n.node), e.push(n));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (t) {
        var e_15, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                var u = e.selectFirst(t);
                if (u)
                    return u;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (t) { return this.some(function (e) { return e.is(t); }); }, not: function (t) { return ie.of(this.filter(function (e) { return !e.is(t); }), null); }, parents: function () {
        var e_16, _b;
        var t = Eu([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                t.push.apply(t, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return t;
    }, next: function () { return ie.of(this.map(function (t) { return t.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ie.of(this.map(function (t) { return t.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (t) { return t.remove(); }), this; }, empty: function () { return this.forEach(function (t) { return t.empty(); }), this; }, removeAttr: function (t) { return this.forEach(function (e) { return e.removeAttr(t); }), this; } };
try {
    for (var _c = __values(Object.keys(Lr)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var t = _d.value;
        Object.defineProperty(Tu, t, { value: Lr[t], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function kt(t, e) { var u = rr(String(t == null ? "" : t), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), a = new ye(u, null); a.doc = a, a.__base = e || ""; var n = Dr("base[href]", u); return n && n.attribs.href && (a.__base = Or(a.__base, n.attribs.href)), a; }
function Ur(t, e) { var u = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), a = kt(t), n = function (s) {
    var e_17, _b, e_18, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var h = _f.value;
            if (h.type === "script" || h.type === "style" || h.type === "comment") {
                ce(h);
                continue;
            }
            if (h.type === "tag" && (n(h), !u.has(h.name))) {
                var b = (h.children || []).slice();
                try {
                    for (var b_3 = (e_18 = void 0, __values(b)), b_3_1 = b_3.next(); !b_3_1.done; b_3_1 = b_3.next()) {
                        var g = b_3_1.value;
                        eu(h, g);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (b_3_1 && !b_3_1.done && (_c = b_3.return)) _c.call(b_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                ce(h);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return n(a.node), De(a.node.children, { decodeEntities: !1 }); }
var qt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function b0(t) { if (typeof Buffer != "undefined")
    return Buffer.from(t).toString("base64"); var e = ""; for (var u = 0; u < t.length; u++)
    e += String.fromCharCode(t[u]); return qr(e); }
function Mr(t) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(t) : Uint8Array.from(unescape(encodeURIComponent(t)), function (e) { return e.charCodeAt(0); }); }
function p0(t) { var e = ""; for (var u = 0; u < t.length; u++) {
    var a = t.charCodeAt(u);
    if (a < 128) {
        e += t[u];
        continue;
    }
    if (a === 128) {
        e += "€";
        continue;
    }
    var n = t.charCodeAt(u + 1);
    a >= 129 && a <= 254 && n >= 64 && n <= 254 && n !== 127 ? (e += __GBK_TABLE[(a - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], u++) : e += "�";
} return e; }
var ku = (function () {
    function ku(e, u) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || u.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: u.url, headers: u.headers || {} };
    }
    ku.prototype.header = function (e) { var u = Object.keys(this.headers).find(function (a) { return a.toLowerCase() === String(e).toLowerCase(); }); return u ? this.headers[u] : ""; };
    ku.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (a) { } var u = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? p0(u) : u; };
    ku.prototype.string = function (e) { return this.text(e); };
    ku.prototype.html = function (e) { return kt(this.text(e), this.url); };
    ku.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    ku.prototype.base64 = function () { return b0(this._raw.bytes || Mr(this.text())); };
    ku.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Mr(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return ku;
}());
function g0(t) {
    var e_19, _b;
    var e = {};
    if (!t)
        return e;
    if (typeof t.forEach == "function" && !Array.isArray(t) && typeof t.entries == "function")
        return t.forEach(function (u, a) { e[a] = u; }), e;
    try {
        for (var _c = __values(Object.keys(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            e[u] = String(t[u]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function Pr(t, e) { var u = function (h) { return ({ getItem: function (b) { var g = t.storageGet(h + b); return g == null ? null : g; }, setItem: function (b, g) { return t.storageSet(h + b, g == null ? null : String(g)); }, removeItem: function (b) { return t.storageSet(h + b, null); }, clear: function () { return t.storageClear && t.storageClear(h); } }); }, a = "__cookie__", n = {}; n.Response = { success: function (h, b) { return ({ code: 0, data: h === void 0 ? null : h, data2: b === void 0 ? null : b }); }, error: function (h) { return ({ code: 1, data: h == null ? "" : String(h) }); } }, n.fetch = function (b, g) {
    return __awaiter(this, void 0, void 0, function () { var x, U, A, D, q, U, N, I, U_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                g = g || {};
                x = String(b);
                if (g.queries) {
                    U = Object.entries(g.queries).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], Z = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(Z);
                    }).join("&");
                    U && (x += (x.includes("?") ? "&" : "?") + U);
                }
                A = Object.assign({ "User-Agent": qt }, g0(g.headers)), D = t.storageGet(a);
                D && !Object.keys(A).some(function (U) { return U.toLowerCase() === "cookie"; }) && (A.Cookie = D);
                q = g.body;
                if (q != null && typeof q == "object") {
                    U = Object.keys(A).find(function (X) { return X.toLowerCase() === "content-type"; });
                    U && /json/i.test(A[U]) ? q = JSON.stringify(q) : (q = Object.entries(q).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], Z = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(Z);
                    }).join("&"), U || (A["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                N = { url: x, method: (g.method || (q != null ? "POST" : "GET")).toUpperCase(), headers: A, body: q, timeout: g.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, t.request(N)];
            case 2:
                I = _b.sent();
                return [3, 4];
            case 3:
                U_1 = _b.sent();
                I = { status: 0, url: x, headers: {}, text: "", error: String(U_1 && U_1.message || U_1) };
                return [3, 4];
            case 4: return [2, new ku(I, N)];
        }
    }); });
}, n.Http = { get: function (h) { return _r(n, "GET", h); }, post: function (h) { return _r(n, "POST", h); } }, n.Html = { parse: function (h, b) { return kt(h, b || ""); }, clean: function (h, b) { return Ur(h, b); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.localConfig = { getItem: function (h) { return t.config(h); } }, n.localCookie = { setCookie: function (h) { t.storageSet(a, String(h).split(";")[0]); }, getCookie: function () { return t.storageGet(a) || ""; } }, n.sleep = function (h) { return new Promise(function (b) { return typeof setTimeout == "function" ? setTimeout(b, Math.min(Number(h) || 0, 1e4)) : b(); }); }; var s = function () {
    var h = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        h[_i] = arguments[_i];
    }
    try {
        t.log && t.log(h.map(function (b) { return typeof b == "string" ? b : JSON.stringify(b); }).join(" "));
    }
    catch (b) { }
}; return n.Log = { log: s }, n.console = { log: s, error: s, warn: s, info: s }, n.Console = n.console, n.log = s, n.UserAgent = { system: function () { return qt; }, chrome: function () { return qt; }, android: function () { return qt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (t.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = ie, n.Element = ye, n.__meta = e, n; }
function _r(t, e, u) { var a = { method: e, url: u, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (s) { return Object.assign(a.headers, s || {}), n; }, header: function (s, h) { return a.headers[s] = h, n; }, params: function (s) { return a.queries = s, n; }, queries: function (s) { return a.queries = s, n; }, body: function (s) { return a.body = s, n; }, html: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).html(s)];
            }
        }); });
    }, string: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, text: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(a.url, a)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return n; }
function Se(t, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(t, e); try {
    return At(t, e);
}
catch (u) {
    return e;
} }
var F = function (t) { return t == null ? "" : String(t); }, m0 = function (t) { return t.filter(function (e, u) { return e && t.indexOf(e) === u; }); }, Nt = (function () {
    function class_1(e) {
        var u = e.meta, a = e.scripts, n = e.host;
        this.meta = u, this.host = n, this.env = e.env || Pr(n, u), this.scripts = a, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return F(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var a, n, s, h;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = this.scripts[e];
                        if (!a)
                            throw new Error("script " + e + " missing");
                        n = function (b) { var g = _this.host.config(b); return g == null ? (_this.meta.configDefaults || {})[b] : g; };
                        return [4, a(this.env, n)];
                    case 1:
                        s = _b.sent();
                        if (typeof s != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(F)), false))];
                    case 2:
                        h = _b.sent();
                        if (!h)
                            throw new Error(e + ": empty result");
                        if (h.code !== 0)
                            throw new Error(e + ": " + F(h.data || "error"));
                        return [2, h];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return F(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _b, u_1, u_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (e = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, u, a) {
        return __awaiter(this, void 0, void 0, function () {
            var n, s, h, b, g;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = e + "|" + u;
                        a = Math.max(1, a | 0);
                        s = a === 1 ? "" : this.tokens[n + "|" + a];
                        if (a > 1 && s == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, u, s)];
                    case 1:
                        h = _b.sent(), b = F(h.data2);
                        b && (this.tokens[n + "|" + (a + 1)] = b);
                        g = (h.data || []).filter(Boolean).map(function (x) { return ({ name: F(x.name).trim(), link: Se(x.host || _this.base + "/", x.link), cover: Se(x.host || _this.base + "/", x.cover), description: F(x.description), tag: F(x.tag) }); }).filter(function (x) { return x.name && x.link; });
                        return [2, { items: g, hasNext: !!b && g.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), F(u[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), a = u[1] || u[0];
                    return [2, a ? this.list(this.scriptFile(a.script), F(a.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", e, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    u = (_b.sent()).data || {}, a = [].concat(u.genres || [], u.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: F(u.name).trim(), cover: Se(u.host || this.base + "/", u.cover), author: F(u.author).trim(), description: Br(F(u.description)), detail: Br(F(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: m0(a.map(function (n) { return String(n).trim(); })), url: e, format: F(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, a, a_1, a_1_1, n, _b, _c, e_20_1, _d;
            var e_20, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        a = (_g.sent()).data || [e];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        a_1 = __values(a), a_1_1 = a_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!a_1_1.done) return [3, 6];
                        n = a_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", F(n))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        a_1_1 = a_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _g.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (a_1_1 && !a_1_1.done && (_f = a_1.return)) _f.call(a_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (a) { return a && a.url && a.type !== "section"; }).map(function (a, n) { return ({ name: F(a.name).trim() || "#" + (n + 1), url: Se(a.host || _this.base + "/", a.url), pay: !!(a.pay || a.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [e];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6: return [2, (_b, typeof u == "string" && (u = u.split(/[\n,]+/)), (u || []).map(function (a) { return Se(_this.base + "/", typeof a == "string" ? a : a && (a.link || a.url || a.data)); }).filter(Boolean))];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    u = _b.sent();
                    return [2, { html: F(u.data), title: F(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, n, a, u_3, u_3_1, n, s, h, h_2, h_2_1, b, s_2, e_21_1;
            var e_21, _b, e_22, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        n = (_d.sent()).data;
                        Array.isArray(n) && n.length && (u = n.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: F(s.title || s.name || "Server"), data: F(s.data || s.url || s.link) }; }));
                        _d.label = 2;
                    case 2:
                        a = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        n = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        s = (_d.sent()).data || {}, h = Array.isArray(s) ? s : [s];
                        try {
                            for (h_2 = (e_22 = void 0, __values(h)), h_2_1 = h_2.next(); !h_2_1.done; h_2_1 = h_2.next()) {
                                b = h_2_1.value;
                                !b || !b.data || b.type !== "webview" && a.push({ url: Se(b.host || this.base + "/", b.data), quality: n.title + (b.quality ? " " + b.quality : ""), headers: b.headers || { Referer: this.base + "/" }, subtitles: (b.subtitles || (b.subtitle ? [{ data: b.subtitle, label: "Sub" }] : [])).map(function (g) { return ({ file: Se(_this.base + "/", g.data || g.file), label: F(g.label || g.language || "Sub") }); }), mimeType: F(b.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (h_2_1 && !h_2_1.done && (_c = h_2.return)) _c.call(h_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _d.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + s_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _d.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, a];
                }
            });
        });
    };
    return class_1;
}());
function Br(t) {
    return String(t).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function z(t, e) {
    return __awaiter(this, void 0, void 0, function () { var u, a, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                t = t || [];
                u = [], a = 0;
                _d.label = 1;
            case 1:
                if (!(a < t.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, e(t[a], a, t)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                a++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var fe = { id: "sweetastes", name: "sweetastes", source: "https://baby0world.com", type: "novel", locale: "zh-CN", nsfw: !1, version: 1, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://baby0world.com", values: ["https://baby0world.com", "https://www.bjtriz.com"], mode: "select", format: "single" } }, configDefaults: { DOMAIN: "https://baby0world.com" }, itemType: 2, lnId: "kiritokmn.sweetastes", lnIcon: "", lnVersion: "1.1.1" }, Fr = { home: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G() {
                                            return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                r = [];
                                                for (i in c.tabs)
                                                    r.push({ title: i, input: i, script: "browse.js" });
                                                return [2, s.success(r)];
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, search: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(r, i) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.search(r, i)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, detail: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.detail(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, toc: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.toc(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, chap: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(r) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.text(r)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, browse: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, a, n, s, h, b, g, x, A, D, q, N, I, U, X, Z, ne) {
                    return __awaiter(this, void 0, void 0, function () { var R; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                R = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(r, i) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.browse(r, i)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var E, c, d, m; return __generator(this, function (_b) {
                                            E = "https://baby0world.com";
                                            try {
                                                R && (E = String(R).replace(/\/+$/, ""));
                                            }
                                            catch (r) { }
                                            c = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/search?query={q}[&page={p}]", item: ".listItem", title: "h4 || a@title || img@alt", link: "a@href", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img", d_desc: "meta[name=description]@content", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, d = { img: function (r) { if (!r)
                                                    return ""; for (var i = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], o = 0; o < i.length; o++) {
                                                    var l = r.attr(i[o]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return d.fix(l.trim());
                                                } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? E + r : E + "/" + r) : ""; }, text: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(o < i.length)) return [3, 4];
                                                                return [4, r.select(i[o]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                o++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, _b; return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                i = i || {};
                                                                o = { Referer: E + "/" };
                                                                if (i.headers)
                                                                    for (l in i.headers)
                                                                        o[l] = i.headers[l];
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 1:
                                                                f = _c.sent(), p = 0;
                                                                _c.label = 2;
                                                            case 2:
                                                                _b = f && f.status === 429 && p < 3;
                                                                if (!_b) return [3, 4];
                                                                return [4, d.cf(f)];
                                                            case 3:
                                                                _b = !(_c.sent());
                                                                _c.label = 4;
                                                            case 4:
                                                                if (!_b) return [3, 8];
                                                                return [4, A(1500 * (p + 1))];
                                                            case 5:
                                                                _c.sent();
                                                                return [4, u(r, { method: i.method, headers: o, body: i.body })];
                                                            case 6:
                                                                f = _c.sent();
                                                                _c.label = 7;
                                                            case 7:
                                                                p++;
                                                                return [3, 2];
                                                            case 8: return [2, f];
                                                        }
                                                    }); });
                                                }, cf: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                    return [2, !1];
                                                                return [4, r.text()];
                                                            case 1:
                                                                i = (_b.sent()) || "";
                                                                return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(i.slice(0, 2e4))];
                                                        }
                                                    }); });
                                                }, check: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (r.ok)
                                                                    return [2, r];
                                                                return [4, d.cf(r)];
                                                            case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + i.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + i);
                                                        }
                                                    }); });
                                                }, html: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.html(i && i.charset)];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, json: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, i)];
                                                            case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                            case 2:
                                                                o = _d.sent();
                                                                return [4, o.json()];
                                                            case 3: return [2, _d.sent()];
                                                        }
                                                    }); });
                                                }, page: function (r) { var i = parseInt(r || "1", 10); return isNaN(i) || i < 1 ? 1 : i; }, next: function (r, i) { return r ? String(d.page(i) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, r.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, m = { pick: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v, T, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!i || !r)
                                                                    return [2, ""];
                                                                o = String(i).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < o.length)) return [3, 9];
                                                                f = o[l], p = "text", w = f.lastIndexOf("@");
                                                                w > 0 && !/\[[^\]]*@/.test(f.slice(w)) && (p = f.slice(w + 1), f = f.slice(0, w));
                                                                y = f === ":self" ? null : r.select(f), v = f === ":self" ? r : y.size() ? y.first() : null;
                                                                if (!v) return [3, 8];
                                                                if (!(p === "text")) return [3, 3];
                                                                return [4, v.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(p === "html")) return [3, 5];
                                                                return [4, v.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = p === "img" ? d.img(v.is("img") ? v : v.select("img").first()) : p === "own" ? v.ownText() : v.attr(p);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                T = _b;
                                                                if (T)
                                                                    return [2, String(T).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (r, i, o) { var l = d.page(i), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, w) { return l > 1 ? w : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(o || "")).replace(/\{base\}/g, E), d.fix(f); }, items: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, w, y, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    i = r.select(c.item), o = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < i.size())) return [3, 9];
                                                                    return [4, i.get(f)];
                                                                case 2:
                                                                    p = _g.sent();
                                                                    return [4, m.pick(p, c.link || "a@href")];
                                                                case 3:
                                                                    w = _g.sent();
                                                                    if (!!(!w || l[w] || /^javascript|#$/.test(w))) return [3, 8];
                                                                    return [4, m.pick(p, c.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    y = _g.sent();
                                                                    _b = y;
                                                                    if (!_b) return [3, 7];
                                                                    l[w] = 1;
                                                                    _d = (_c = o).push;
                                                                    _f = { name: y, link: d.fix(w) };
                                                                    return [4, m.pick(p, c.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(p, c.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = E, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, o];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (r, i, o) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, d.html(m.url(r, i, o), c.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), p = c.next ? l.select(c.next).size() > 0 : f.length >= (c.pageSize || 10);
                                                                return [2, s.success(f, d.next(p && f.length > 0, i))];
                                                        }
                                                    }); });
                                                }, browse: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                o = c.tabs && c.tabs[r] || r;
                                                                return [4, m.listPage(o, i, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!d.isUrl(r)) return [3, 2];
                                                                o = d.fix(r);
                                                                return [4, m.listPage(o + (o.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", i, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(c.search, i, r)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.genre)
                                                                    return [2, s.success([])];
                                                                return [4, d.html(d.fix(c.genrePage || "/"))];
                                                            case 1:
                                                                r = _b.sent();
                                                                return [4, z(r.select(c.genre), function (o) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, o.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(o.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                i = _b.sent();
                                                                return [2, s.success(i.filter(function (o) { return o.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, d.html(r, c.req)];
                                                                case 1:
                                                                    i = _j.sent();
                                                                    if (!c.d_genres) return [3, 3];
                                                                    return [4, z(i.select(c.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    o = _b;
                                                                    return [4, m.pick(i, c.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(i, c.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = d).fix;
                                                                    return [4, m.pick(i, c.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(i, c.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(i, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = o, _h.host = E, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var i, o, l, f, p, _b, w, y, v, T, k, _c, _d, _f, _g, P, B, _h;
                                                        var _j;
                                                        return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    if (c.single)
                                                                        return [2, s.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: r, host: E }])];
                                                                    i = [r], o = [], l = {};
                                                                    return [4, d.html(c.ch_rewrite ? r.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : r, c.req)];
                                                                case 1:
                                                                    f = _k.sent();
                                                                    if (!c.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, c.ch_url)];
                                                                case 2:
                                                                    p = _k.sent();
                                                                    _b = p;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, d.html(d.fix(p), c.req)];
                                                                case 3:
                                                                    _b = (f = _k.sent());
                                                                    _k.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _k.label = 5;
                                                                case 5:
                                                                    w = 0;
                                                                    _k.label = 6;
                                                                case 6:
                                                                    if (!(w < (c.ch_maxPages || 60))) return [3, 20];
                                                                    y = f.select(c.ch_list), v = 0;
                                                                    _k.label = 7;
                                                                case 7:
                                                                    if (!(v < y.size())) return [3, 15];
                                                                    return [4, y.get(v)];
                                                                case 8:
                                                                    T = _k.sent(), k = T.attr("href") || T.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = o).push;
                                                                    _j = {};
                                                                    if (!c.ch_name) return [3, 10];
                                                                    return [4, m.pick(T, c.ch_name)];
                                                                case 9:
                                                                    _g = _k.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, T.text()];
                                                                case 11:
                                                                    _g = _k.sent();
                                                                    _k.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_j.name = (_g) || T.attr("title"), _j.url = d.fix(k), _j.host = E, _j)]));
                                                                    _k.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _k.label = 14;
                                                                case 14:
                                                                    v++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    P = c.ch_next ? f.select(c.ch_next).first() : null;
                                                                    if (!P || !P.attr("href"))
                                                                        return [3, 20];
                                                                    B = d.fix(P.attr("href"));
                                                                    if (i.indexOf(B) >= 0)
                                                                        return [3, 20];
                                                                    i.push(B);
                                                                    _h = c.ch_delay;
                                                                    if (!_h) return [3, 17];
                                                                    return [4, A(c.ch_delay)];
                                                                case 16:
                                                                    _h = (_k.sent());
                                                                    _k.label = 17;
                                                                case 17:
                                                                    _h;
                                                                    return [4, d.html(B, c.req)];
                                                                case 18:
                                                                    f = _k.sent();
                                                                    _k.label = 19;
                                                                case 19:
                                                                    w++;
                                                                    return [3, 6];
                                                                case 20: return [2, (c.ch_reverse && o.reverse(), s.success(o))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, p, w, y, v, _b, _c, T, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                i = [], o = [r], l = r, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (c.pages_max || 40))) return [3, 8];
                                                                return [4, d.html(l, c.req)];
                                                            case 2:
                                                                p = _d.sent(), w = p.select(c.pages || ".page-chapter img, .reading-content img, .chapter-content img"), y = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(y < w.size())) return [3, 6];
                                                                _c = (_b = d).img;
                                                                return [4, w.get(y)];
                                                            case 4:
                                                                v = _c.apply(_b, [_d.sent()]);
                                                                v && i.indexOf(v) < 0 && i.push(v);
                                                                _d.label = 5;
                                                            case 5:
                                                                y++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!c.pages_next)
                                                                    return [3, 8];
                                                                T = p.select(c.pages_next).first();
                                                                if (!T)
                                                                    return [3, 8];
                                                                k = d.fix(T.attr("href"));
                                                                if (!k || o.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                o.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(i)];
                                                        }
                                                    }); });
                                                }, text: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o, l, f, _b, _c, _d, _f, _g, _h, _j, _k; return __generator(this, function (_l) {
                                                        switch (_l.label) {
                                                            case 0:
                                                                _c = (_b = d).check;
                                                                return [4, d.get(r, c.req)];
                                                            case 1: return [4, _c.apply(_b, [_l.sent(), r])];
                                                            case 2:
                                                                i = _l.sent();
                                                                return [4, i.text()];
                                                            case 3:
                                                                o = (_l.sent()) || "", l = n.parse(o, r), f = l.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!!f) return [3, 5];
                                                                if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(o.slice(0, 2e4)))
                                                                    throw new Error("CLOUDFLARE: trang " + E + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                _f = (_d = s).error;
                                                                _g = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                return [4, m.pick(l, "title")];
                                                            case 4: return [2, _f.apply(_d, [_g + ((_l.sent()) || "?").slice(0, 60) + '" (' + i.status + ", " + o.length + " ký tự)" + (o.length < 400 ? ": " + o.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                            case 5:
                                                                _j = (_h = s).success;
                                                                return [4, d.cleanContent(f)];
                                                            case 6:
                                                                _k = [_l.sent()];
                                                                return [4, m.pick(l, c.c_title || "h1 || h2")];
                                                            case 7: return [2, _j.apply(_h, _k.concat([_l.sent()]))];
                                                        }
                                                    }); });
                                                }, servers: function (r) {
                                                    return __awaiter(this, void 0, void 0, function () { var i, o; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!c.servers)
                                                                    return [2, s.success([{ title: "Server", data: r }])];
                                                                return [4, d.html(r, c.req)];
                                                            case 1:
                                                                i = _b.sent();
                                                                return [4, z(i.select(c.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, c.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                o = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(o.length ? o : [{ title: "Server", data: r }])];
                                                        }
                                                    }); });
                                                }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var i = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return i ? i[0] : ""; }, track: function (r, i) {
                                                    return __awaiter(this, void 0, void 0, function () { var o, l, f, p, w, y, v; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (i = i || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                    return [2, s.success({ type: "native", data: r, headers: { Referer: E + "/" } })];
                                                                return [4, d.get(r)];
                                                            case 1:
                                                                o = _b.sent();
                                                                return [4, o.text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (!(c.video && !i)) return [3, 4];
                                                                return [4, m.pick(n.parse(l, r), c.video)];
                                                            case 3:
                                                                f = _b.sent();
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: E + "/" } })];
                                                                _b.label = 4;
                                                            case 4:
                                                                p = m.sniff(l);
                                                                if (p)
                                                                    return [2, s.success({ type: "native", data: p, headers: { Referer: i ? r : E + "/" } })];
                                                                w = n.parse(l, r), y = w.select(c.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(y && i < 2)) return [3, 6];
                                                                v = d.fix(y.attr("src") || y.attr("data-src"));
                                                                if (!v) return [3, 6];
                                                                return [4, m.track(v, i + 1)];
                                                            case 5: return [2, _b.sent()];
                                                            case 6: return [2, s.success({ type: "webview", data: r })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    } };
function Vr(t) { return new Nt({ meta: fe, scripts: Fr, host: t }); }
var x0 = require("@libs/fetch").fetchApi, Qe = null;
try {
    Qe = require("@libs/storage");
}
catch (t) {
    Qe = null;
}
var qu = {}, Ct = Qe && Qe.storage ? Qe.storage : { get: function (t) { return qu[t]; }, set: function (t, e) { qu[t] = e; }, delete: function (t) { delete qu[t]; } }, Nu = (function () {
    function class_2() {
        var _this = this;
        this.id = fe.lnId, this.name = fe.name, this.icon = fe.lnIcon, this.site = fe.source, this.version = fe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Vr({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var u, a, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (u.body = e.body);
                            return [4, x0(e.url, u)];
                        case 1:
                            a = _c.sent(), n = {};
                            try {
                                a.headers.forEach(function (s, h) { n[h] = s; });
                            }
                            catch (s) { }
                            _b = { status: a.status, url: a.url || e.url, headers: n };
                            return [4, a.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (e) { var u = Ct.get("vb_" + e); return u == null ? null : String(u); }, storageSet: function (e, u) { u == null ? Ct.delete && Ct.delete("vb_" + e) : Ct.set("vb_" + e, String(u)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(e, u)];
                case 1: return [2, (_b.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    a = _b.sent();
                    return [2, { path: e, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: a.map(function (n, s) { return ({ name: n.name, path: n.url, chapterNumber: s + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, u) { return /^https?:/i.test(e) ? e : fe.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), w0 = new Nu;
